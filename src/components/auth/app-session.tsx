import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import {
  dashboardFavoriteListings as dashboardFavoriteListingSeed,
  dashboardListings as dashboardListingSeed,
  dashboardMessageConversations as dashboardMessageConversationSeed,
  dashboardMessageThreads as dashboardMessageThreadSeed,
  dashboardProfile,
  dashboardSavedSearches as dashboardSavedSearchSeed,
  type DashboardChatMessage,
  type DashboardFavoriteListing,
  type DashboardListingRecord,
  type DashboardMessageThread,
  type DashboardSavedSearch,
} from "../../data/dashboardData";
import { inventoryListings } from "../../data/inventoryData";

export interface SessionUser {
  name: string;
  email: string;
  initials: string;
}

export interface SignInPayload {
  email: string;
  password: string;
  name?: string;
}

export interface DashboardListingDraft {
  listingTitle: string;
  condition: string;
  model: string;
  category: string;
  type: string;
  year: string;
  label: string;
  make: string;
  offerType: string;
  driveType: string;
  transmission: string;
  fuelType: string;
  mileage: string;
  cylinder: string;
  color: string;
  door: string;
  vin: string;
  description: string;
  price: string;
  pricePrefix: string;
  priceSuffix: string;
  priceCustom: string;
  mapAddress: string;
  latitude: string;
  longitude: string;
}

interface AppSessionContextValue {
  dashboardListings: DashboardListingRecord[];
  favoriteListings: DashboardFavoriteListing[];
  messageThreads: DashboardMessageThread[];
  messageConversations: Record<string, DashboardChatMessage[]>;
  savedSearches: DashboardSavedSearch[];
  isFavorite: (listingId: string) => boolean;
  isAuthenticated: boolean;
  signIn: (payload: SignInPayload) => SessionUser;
  signOut: () => void;
  addListing: (draft: DashboardListingDraft) => DashboardListingRecord;
  deleteConversation: (threadId: string) => void;
  getListingById: (listingId: string) => DashboardListingRecord | undefined;
  markThreadRead: (threadId: string) => void;
  removeFavorite: (listingId: string) => void;
  removeListing: (listingId: string) => void;
  removeSavedSearch: (searchId: string) => void;
  sendMessage: (threadId: string, body: string) => void;
  toggleFavorite: (listingId: string) => void;
  updateListing: (listingId: string, draft: DashboardListingDraft) => DashboardListingRecord;
  user: SessionUser | null;
}

const AUTH_STORAGE_KEY = "boxcar-auth-user-v1";
const DASHBOARD_LISTINGS_STORAGE_KEY = "boxcar-dashboard-listings-v1";
const DASHBOARD_FAVORITES_STORAGE_KEY = "boxcar-dashboard-favorites-v1";
const DASHBOARD_SAVED_SEARCH_STORAGE_KEY = "boxcar-dashboard-saved-search-v1";
const DASHBOARD_MESSAGE_THREADS_STORAGE_KEY = "boxcar-dashboard-message-threads-v1";
const DASHBOARD_MESSAGE_CONVERSATIONS_STORAGE_KEY =
  "boxcar-dashboard-message-conversations-v1";

const AppSessionContext = createContext<AppSessionContextValue | undefined>(undefined);

const readStorage = <T,>(storageKey: string, fallbackValue: T): T => {
  if (typeof window === "undefined") {
    return fallbackValue;
  }

  const storedValue = window.localStorage.getItem(storageKey);

  if (!storedValue) {
    return fallbackValue;
  }

  try {
    return JSON.parse(storedValue) as T;
  } catch (error) {
    return fallbackValue;
  }
};

const writeStorage = (storageKey: string, value: unknown) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(storageKey, JSON.stringify(value));
};

const createInitials = (name: string) => {
  const nameParts = name
    .split(" ")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 2);

  if (!nameParts.length) {
    return "AT";
  }

  return nameParts.map((item) => item[0]?.toUpperCase() ?? "").join("");
};

const createDisplayName = (payload: SignInPayload) => {
  if (payload.name?.trim()) {
    return payload.name.trim();
  }

  const emailPrefix = payload.email.split("@")[0]?.trim();

  if (!emailPrefix) {
    return "Ali Tufan";
  }

  return emailPrefix
    .split(/[._-]+/)
    .filter(Boolean)
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};

const formatCurrency = (rawValue: string, fallbackValue: string) => {
  const numericValue = Number(String(rawValue).replace(/[^0-9.]/g, ""));

  if (!Number.isFinite(numericValue) || numericValue <= 0) {
    return fallbackValue;
  }

  return `$${numericValue.toLocaleString("en-US")}`;
};

const resolveListingImage = (make: string, model: string) => {
  const normalizedMake = make.toLowerCase();
  const normalizedModel = model.toLowerCase();

  const matchedVehicle =
    inventoryListings.find(
      (vehicle) =>
        vehicle.brand.toLowerCase() === normalizedMake &&
        (vehicle.model.toLowerCase().includes(normalizedModel) ||
          normalizedModel.includes(vehicle.model.toLowerCase()))
    ) ??
    inventoryListings.find((vehicle) => vehicle.brand.toLowerCase() === normalizedMake) ??
    inventoryListings[0];

  return matchedVehicle.image;
};

const buildDashboardListingRecord = (
  draft: DashboardListingDraft,
  listingId: string
): DashboardListingRecord => {
  const fallbackTitle = [draft.make, draft.model].filter(Boolean).join(" ").trim();
  const formattedPrice = formatCurrency(
    draft.price,
    draft.priceCustom.trim() || "Contact for price"
  );

  return {
    id: listingId,
    draft: { ...draft },
    title: draft.listingTitle.trim() || fallbackTitle || "Custom Listing",
    summary:
      draft.description.trim() ||
      `${draft.year} ${draft.category} with ${draft.transmission.toLowerCase()} setup`,
    image: resolveListingImage(draft.make, draft.model),
    price: formattedPrice,
    originalPrice: formatCurrency(
      String(
        Math.round(Number(String(draft.price).replace(/[^0-9.]/g, "")) * 1.04 || 0)
      ),
      formattedPrice
    ),
    make: draft.make,
    model: draft.model,
    year: draft.year,
    transmission: draft.transmission,
    fuel: draft.fuelType,
    status: "Pending",
  };
};

const buildFavoriteListingRecord = (listingId: string): DashboardFavoriteListing | null => {
  const matchedVehicle = inventoryListings.find((vehicle) => vehicle.id === listingId);

  if (!matchedVehicle) {
    return null;
  }

  return {
    id: matchedVehicle.id,
    title: `${matchedVehicle.brand} ${matchedVehicle.model}`,
    summary: matchedVehicle.trim,
    image: matchedVehicle.image,
    badge: matchedVehicle.badge,
    mileage: matchedVehicle.mileage,
    monthlyPrice: matchedVehicle.monthlyPrice,
    price: `$${matchedVehicle.price.toLocaleString("en-US")}`,
    fuel: matchedVehicle.fuel,
    transmission: matchedVehicle.transmission.split(" ")[0],
  };
};

export const AppSessionProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<SessionUser | null>(() =>
    readStorage<SessionUser | null>(AUTH_STORAGE_KEY, null)
  );
  const [dashboardListings, setDashboardListings] = useState<DashboardListingRecord[]>(
    () =>
      readStorage<DashboardListingRecord[]>(
        DASHBOARD_LISTINGS_STORAGE_KEY,
        dashboardListingSeed
      )
  );
  const [favoriteListings, setFavoriteListings] = useState<DashboardFavoriteListing[]>(() =>
    readStorage<DashboardFavoriteListing[]>(
      DASHBOARD_FAVORITES_STORAGE_KEY,
      dashboardFavoriteListingSeed
    )
  );
  const [savedSearches, setSavedSearches] = useState<DashboardSavedSearch[]>(() =>
    readStorage<DashboardSavedSearch[]>(
      DASHBOARD_SAVED_SEARCH_STORAGE_KEY,
      dashboardSavedSearchSeed
    )
  );
  const [messageThreads, setMessageThreads] = useState<DashboardMessageThread[]>(() =>
    readStorage<DashboardMessageThread[]>(
      DASHBOARD_MESSAGE_THREADS_STORAGE_KEY,
      dashboardMessageThreadSeed
    )
  );
  const [messageConversations, setMessageConversations] = useState<
    Record<string, DashboardChatMessage[]>
  >(() =>
    readStorage<Record<string, DashboardChatMessage[]>>(
      DASHBOARD_MESSAGE_CONVERSATIONS_STORAGE_KEY,
      dashboardMessageConversationSeed
    )
  );

  const contextValue = useMemo<AppSessionContextValue>(
    () => ({
      dashboardListings,
      favoriteListings,
      messageConversations,
      messageThreads,
      savedSearches,
      isFavorite: (listingId) =>
        favoriteListings.some((listing) => listing.id === listingId),
      isAuthenticated: Boolean(user),
      signIn: (payload) => {
        const nextUser = {
          name: createDisplayName(payload),
          email: payload.email.trim() || dashboardProfile.email,
          initials: createInitials(createDisplayName(payload)),
        };

        setUser(nextUser);
        writeStorage(AUTH_STORAGE_KEY, nextUser);
        return nextUser;
      },
      signOut: () => {
        setUser(null);

        if (typeof window !== "undefined") {
          window.localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      },
      addListing: (draft) => {
        const nextListing = buildDashboardListingRecord(draft, `custom-${Date.now()}`);

        setDashboardListings((currentListings) => {
          const nextListings = [nextListing, ...currentListings];
          writeStorage(DASHBOARD_LISTINGS_STORAGE_KEY, nextListings);
          return nextListings;
        });

        return nextListing;
      },
      deleteConversation: (threadId) => {
        setMessageThreads((currentThreads) => {
          const nextThreads = currentThreads.filter((thread) => thread.id !== threadId);
          writeStorage(DASHBOARD_MESSAGE_THREADS_STORAGE_KEY, nextThreads);
          return nextThreads;
        });
        setMessageConversations((currentConversations) => {
          const nextConversations = { ...currentConversations };
          delete nextConversations[threadId];
          writeStorage(DASHBOARD_MESSAGE_CONVERSATIONS_STORAGE_KEY, nextConversations);
          return nextConversations;
        });
      },
      getListingById: (listingId) =>
        dashboardListings.find((listing) => listing.id === listingId),
      markThreadRead: (threadId) => {
        setMessageThreads((currentThreads) => {
          const nextThreads = currentThreads.map((thread) =>
            thread.id === threadId ? { ...thread, unreadCount: undefined } : thread
          );
          writeStorage(DASHBOARD_MESSAGE_THREADS_STORAGE_KEY, nextThreads);
          return nextThreads;
        });
      },
      removeFavorite: (listingId) => {
        setFavoriteListings((currentListings) => {
          const nextListings = currentListings.filter((listing) => listing.id !== listingId);
          writeStorage(DASHBOARD_FAVORITES_STORAGE_KEY, nextListings);
          return nextListings;
        });
      },
      removeListing: (listingId) => {
        setDashboardListings((currentListings) => {
          const nextListings = currentListings.filter((listing) => listing.id !== listingId);
          writeStorage(DASHBOARD_LISTINGS_STORAGE_KEY, nextListings);
          return nextListings;
        });
      },
      removeSavedSearch: (searchId) => {
        setSavedSearches((currentSearches) => {
          const nextSearches = currentSearches.filter((search) => search.id !== searchId);
          writeStorage(DASHBOARD_SAVED_SEARCH_STORAGE_KEY, nextSearches);
          return nextSearches;
        });
      },
      sendMessage: (threadId, body) => {
        const trimmedBody = body.trim();

        if (!trimmedBody) {
          return;
        }

        setMessageConversations((currentConversations) => {
          const currentThreadMessages = currentConversations[threadId] ?? [];
          const nextConversations = {
            ...currentConversations,
            [threadId]: [
              ...currentThreadMessages,
              {
                id: `${threadId}-message-${currentThreadMessages.length + 1}`,
                author: "you" as const,
                body: trimmedBody,
                time: "Just now",
              },
            ],
          };
          writeStorage(DASHBOARD_MESSAGE_CONVERSATIONS_STORAGE_KEY, nextConversations);
          return nextConversations;
        });
        setMessageThreads((currentThreads) => {
          const nextThreads = currentThreads.map((thread) =>
            thread.id === threadId
              ? {
                  ...thread,
                  status: "active" as const,
                  lastSeen: "Just now",
                  unreadCount: undefined,
                }
              : thread
          );
          writeStorage(DASHBOARD_MESSAGE_THREADS_STORAGE_KEY, nextThreads);
          return nextThreads;
        });
      },
      toggleFavorite: (listingId) => {
        setFavoriteListings((currentListings) => {
          const alreadySaved = currentListings.some((listing) => listing.id === listingId);
          const nextListings = alreadySaved
            ? currentListings.filter((listing) => listing.id !== listingId)
            : (() => {
                const nextFavorite = buildFavoriteListingRecord(listingId);
                return nextFavorite ? [nextFavorite, ...currentListings] : currentListings;
              })();

          writeStorage(DASHBOARD_FAVORITES_STORAGE_KEY, nextListings);
          return nextListings;
        });
      },
      updateListing: (listingId, draft) => {
        const nextListing = buildDashboardListingRecord(draft, listingId);

        setDashboardListings((currentListings) => {
          const nextListings = currentListings.map((listing) =>
            listing.id === listingId ? nextListing : listing
          );
          writeStorage(DASHBOARD_LISTINGS_STORAGE_KEY, nextListings);
          return nextListings;
        });

        return nextListing;
      },
      user,
    }),
    [
      dashboardListings,
      favoriteListings,
      messageConversations,
      messageThreads,
      savedSearches,
      user,
    ]
  );

  return (
    <AppSessionContext.Provider value={contextValue}>
      {children}
    </AppSessionContext.Provider>
  );
};

export const useAppSession = () => {
  const contextValue = useContext(AppSessionContext);

  if (!contextValue) {
    throw new Error("useAppSession must be used within AppSessionProvider.");
  }

  return contextValue;
};
