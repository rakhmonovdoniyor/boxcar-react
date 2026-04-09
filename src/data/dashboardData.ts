import { inventoryListings } from "./inventoryData";

export interface DashboardNavItem {
  id:
    | "overview"
    | "listings"
    | "add-listing"
    | "favorites"
    | "saved-search"
    | "messages"
    | "profile";
  label: string;
  path: string;
  icon:
    | "dashboard"
    | "listings"
    | "add"
    | "favorites"
    | "search"
    | "messages"
    | "profile";
}

export interface DashboardStatCard {
  id: string;
  label: string;
  value: string;
  icon: "listings" | "search" | "messages" | "favorites";
  tone: "blue" | "pink" | "violet" | "sky";
}

export interface DashboardActivityItem {
  id: string;
  title: string;
  time: string;
  tone: "blue" | "pink" | "violet";
}

export interface DashboardSavedSearch {
  id: string;
  title: string;
  query: string;
  listingsFound: number;
  cadence: string;
}

export interface DashboardFavoriteListing {
  id: string;
  title: string;
  summary: string;
  image: string;
  badge: string;
  mileage: string;
  monthlyPrice: string;
  price: string;
  fuel: string;
  transmission: string;
}

export interface DashboardMessageThread {
  id: string;
  name: string;
  role: string;
  status: "active" | "offline";
  lastSeen: string;
  unreadCount?: number;
}

export interface DashboardChatMessage {
  id: string;
  author: "them" | "you";
  body: string;
  time: string;
}

export interface DashboardProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsapp: string;
  website: string;
  address: string;
  mapLocation: string;
  latitude: string;
  longitude: string;
  description: string;
}

export interface DashboardListingRecord {
  id: string;
  draft?: Record<string, string>;
  title: string;
  summary: string;
  image: string;
  price: string;
  originalPrice: string;
  make: string;
  model: string;
  year: string;
  transmission: string;
  fuel: string;
  status: "Published" | "Pending";
}

type InventoryVehicle = (typeof inventoryListings)[number];

const dashboardInventory = inventoryListings.slice(0, 8) as InventoryVehicle[];

export const dashboardNavItems: DashboardNavItem[] = [
  { id: "overview", label: "Dashboard", path: "/dashboard", icon: "dashboard" },
  {
    id: "listings",
    label: "My Listings",
    path: "/dashboard/listings",
    icon: "listings",
  },
  {
    id: "add-listing",
    label: "Add Listings",
    path: "/dashboard/add-listing",
    icon: "add",
  },
  {
    id: "favorites",
    label: "My Favorites",
    path: "/dashboard/favorites",
    icon: "favorites",
  },
  {
    id: "saved-search",
    label: "Saved Search",
    path: "/dashboard/saved-search",
    icon: "search",
  },
  {
    id: "messages",
    label: "Messages",
    path: "/dashboard/messages",
    icon: "messages",
  },
  {
    id: "profile",
    label: "My Profile",
    path: "/dashboard/profile",
    icon: "profile",
  },
];

export const dashboardStatCards: DashboardStatCard[] = [
  { id: "listings", label: "My Listings", value: "43,279", icon: "listings", tone: "sky" },
  { id: "saved", label: "Total Saved Search", value: "19", icon: "search", tone: "pink" },
  { id: "messages", label: "Messages", value: "15", icon: "messages", tone: "violet" },
  {
    id: "favorites",
    label: "My Favorites",
    value: "22,786",
    icon: "favorites",
    tone: "blue",
  },
];

export const dashboardMonthlyViews = [
  { month: "Jan", value: 140 },
  { month: "Feb", value: 112 },
  { month: "Mar", value: 208 },
  { month: "Apr", value: 184 },
  { month: "May", value: 118 },
  { month: "Jun", value: 171 },
  { month: "Jul", value: 180 },
  { month: "Aug", value: 194 },
  { month: "Sep", value: 132 },
  { month: "Oct", value: 214 },
  { month: "Nov", value: 182 },
  { month: "Dec", value: 246 },
];

export const dashboardActivity: DashboardActivityItem[] = [
  {
    id: "activity-1",
    title: "Your listing Audi Q3 3.5 Sportback has been approved",
    time: "12 mins ago",
    tone: "blue",
  },
  {
    id: "activity-2",
    title: "Ali Tufan left a message on Volvo XC40 Recharge 1.5T",
    time: "26 mins ago",
    tone: "pink",
  },
  {
    id: "activity-3",
    title: "Someone favorited your Mercedes-Benz E-Series listing",
    time: "34 mins ago",
    tone: "violet",
  },
  {
    id: "activity-4",
    title: "Someone favorited your BMW X5 xDrive40i premium package",
    time: "44 mins ago",
    tone: "blue",
  },
  {
    id: "activity-5",
    title: "Your listing Porsche Macan 4 launch edition has been approved",
    time: "1 hr ago",
    tone: "pink",
  },
];

export const dashboardListings: DashboardListingRecord[] = dashboardInventory
  .slice(0, 5)
  .map((vehicle, index) => ({
    id: vehicle.id,
    title: `${vehicle.brand} ${vehicle.model}`,
    summary: vehicle.trim,
    image: vehicle.image,
    price: `$${vehicle.price.toLocaleString("en-US")}`,
    originalPrice: `$${(vehicle.price + 390).toLocaleString("en-US")}`,
    make: vehicle.brand,
    model: vehicle.model,
    year: String(vehicle.year),
    transmission: vehicle.transmission.split(" ")[0],
    fuel: vehicle.fuel,
    status: index % 2 === 0 ? "Published" : "Pending",
  }));

export const dashboardFavoriteListings: DashboardFavoriteListing[] = dashboardInventory.map((vehicle) => ({
  id: vehicle.id,
  title: `${vehicle.brand} ${vehicle.model}`,
  summary: vehicle.trim,
  image: vehicle.image,
  badge: vehicle.badge,
  mileage: vehicle.mileage,
  monthlyPrice: vehicle.monthlyPrice,
  price: `$${vehicle.price.toLocaleString("en-US")}`,
  fuel: vehicle.fuel,
  transmission: vehicle.transmission.split(" ")[0],
}));

export const dashboardSavedSearches: DashboardSavedSearch[] = [
  {
    id: "saved-1",
    title: "Audi Q3",
    query: "Year to: 2024, Mileage to: 2,500, Fuel: Hybrid",
    listingsFound: 7,
    cadence: "Daily",
  },
  {
    id: "saved-2",
    title: "BMW X5",
    query: "Year to: 2023, Mileage to: 8,000, Body: SUV",
    listingsFound: 11,
    cadence: "Daily",
  },
  {
    id: "saved-3",
    title: "Volvo XC40",
    query: "Fuel: Electric, Year to: 2024, Condition: New Cars",
    listingsFound: 4,
    cadence: "Weekly",
  },
];

export const dashboardMessageThreads: DashboardMessageThread[] = [
  {
    id: "thread-1",
    name: "Darlene Robertson",
    role: "Head of Development",
    status: "offline",
    lastSeen: "35 mins",
  },
  {
    id: "thread-2",
    name: "Jane Cooper",
    role: "Head of Development",
    status: "offline",
    lastSeen: "35 mins",
    unreadCount: 2,
  },
  {
    id: "thread-3",
    name: "Arlene McCoy",
    role: "Head of Development",
    status: "active",
    lastSeen: "35 mins",
  },
  {
    id: "thread-4",
    name: "Albert Flores",
    role: "Head of Development",
    status: "offline",
    lastSeen: "35 mins",
    unreadCount: 2,
  },
  {
    id: "thread-5",
    name: "Cameron Williamson",
    role: "Head of Development",
    status: "offline",
    lastSeen: "35 mins",
  },
];

export const dashboardActiveConversation: DashboardChatMessage[] = [
  {
    id: "message-1",
    author: "them",
    body: "How likely are you to recommend our company to your friends and family?",
    time: "35 mins",
  },
  {
    id: "message-2",
    author: "you",
    body: "Hey there, we're just writing to let you know that you've been subscribed to a repository on GitHub.",
    time: "35 mins",
  },
  {
    id: "message-3",
    author: "them",
    body: "Ok, understood!",
    time: "35 mins",
  },
];

export const dashboardMessageConversations: Record<string, DashboardChatMessage[]> = {
  "thread-1": [
    {
      id: "thread-1-message-1",
      author: "them",
      body: "Can you confirm whether the Audi Q7 is still available this week?",
      time: "42 mins",
    },
    {
      id: "thread-1-message-2",
      author: "you",
      body: "Yes, it is still available and inspection-ready.",
      time: "35 mins",
    },
  ],
  "thread-2": [
    {
      id: "thread-2-message-1",
      author: "them",
      body: "I want to compare financing plans before I book the test drive.",
      time: "40 mins",
    },
    {
      id: "thread-2-message-2",
      author: "you",
      body: "No problem. I can send over the monthly breakdown and available packages.",
      time: "35 mins",
    },
  ],
  "thread-3": dashboardActiveConversation,
  "thread-4": [
    {
      id: "thread-4-message-1",
      author: "them",
      body: "Is the dealership open on Saturday afternoon?",
      time: "55 mins",
    },
  ],
  "thread-5": [
    {
      id: "thread-5-message-1",
      author: "them",
      body: "Please hold the vehicle until tomorrow morning.",
      time: "1 hr",
    },
    {
      id: "thread-5-message-2",
      author: "you",
      body: "I have marked it for follow-up and will confirm with the sales desk.",
      time: "48 mins",
    },
  ],
};

export const dashboardProfile: DashboardProfileData = {
  firstName: "Ali",
  lastName: "Tufan",
  email: "creativelayers088@gmail.com",
  phone: "+77 956 039 967",
  whatsapp: "+98 956 039 967",
  website: "www.creativelayers.net",
  address: "Ali Tufan",
  mapLocation: "e.g. lincoln park",
  latitude: "23",
  longitude: "33",
  description: "Lorem Ipsum Dolar Sit Amet",
};

export const dashboardPublicLinks = [
  { label: "Home", path: "/" },
  { label: "Inventory", path: "/inventory" },
  { label: "Blog", path: "/blog" },
  { label: "Shop", path: "/shop" },
  { label: "Pages", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const dashboardAddListingSteps = [
  "Car Details",
  "Price",
  "Features",
  "Media",
  "Location",
] as const;

export const dashboardFeatureGroups = [
  {
    title: "Convenience",
    items: [
      "Heated Seats",
      "Heated Steering Wheel",
      "Navigation System",
      "Tyre Pressure Monitoring System",
    ],
  },
  {
    title: "Entertainment",
    items: ["Apple CarPlay / Android Auto", "Bluetooth", "HomeLink"],
  },
  {
    title: "Safety",
    items: [
      "Airbag - Driver",
      "Airbag - Passenger",
      "Anti-lock Braking System",
      "Backup Camera",
      "Blind Spot Monitor",
    ],
  },
  {
    title: "Interior",
    items: [
      "Center Console",
      "Heated and Ventilated Front Seats",
      "Panoramic Moonroof",
      "Qi Wireless Charging",
      "Touchscreen Display",
    ],
  },
  {
    title: "Exterior",
    items: [
      "Alloy Wheels",
      "Brake Calipers - Silver Painted",
      "Rear Bumper High Gloss",
      "Rear Diffuser Body Colour",
      "Windows - Electric Front",
    ],
  },
];

export const dashboardListingFormDefaults = {
  listingTitle: "Ali Tufan",
  condition: "New",
  category: "Cars",
  type: "Sedan",
  mileage: "75,000",
  vin: "05034................",
  description: "Lorem Ipsum Dolar Sit Amet",
  price: "1000",
  pricePrefix: "From",
  priceSuffix: "per month",
  priceCustom: "By agreement",
  mapAddress: "145 Amir Temur Avenue, Tashkent",
  latitude: "41.3111",
  longitude: "69.2797",
};

export const dashboardSelectOptions = {
  model: ["Select Model", "Q7 Prestige", "A5 Sportback", "530i", "Cayenne"],
  year: ["Select Year", "2024", "2023", "2022", "2021"],
  label: ["Select Label", "New Arrival", "Popular", "Family Pick", "Premium"],
  make: ["Select Make", "Audi", "BMW", "Ford", "Mercedes-Benz", "Porsche"],
  offerType: ["Select Offer", "For Sale", "Lease", "Finance"],
  driveType: ["Select Type", "AWD", "FWD", "RWD"],
  transmission: ["Select Transmission", "Automatic", "Manual"],
  fuelType: ["Select Fuel", "Petrol", "Hybrid", "Diesel", "Electric"],
  cylinder: ["Select Cylinder", "4", "6", "8"],
  color: ["Select Color", "Black", "White", "Silver", "Blue"],
  door: ["Select Door", "2", "4", "5"],
};
