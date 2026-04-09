import React, {
  useCallback,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { shopProducts, type ShopProduct } from "../../data/shopData";

const CART_STORAGE_KEY = "boxcar-shop-cart";
const COUPON_STORAGE_KEY = "boxcar-shop-coupon";
const ORDER_STORAGE_KEY = "boxcar-shop-order";
const SHIPPING_FEE = 40;
const TAX_RATE = 0.08;

export interface ShopCartItem {
  productId: string;
  quantity: number;
}

export interface ShopCartLine extends ShopCartItem {
  product: ShopProduct;
  lineTotal: number;
}

export interface ShopCheckoutCustomer {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  notes: string;
}

export interface ShopPlacedOrder {
  orderNumber: string;
  createdAt: string;
  paymentMethod: string;
  items: ShopCartLine[];
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  customer: ShopCheckoutCustomer;
}

interface ShopCartContextValue {
  items: ShopCartLine[];
  cartCount: number;
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  appliedCoupon: string | null;
  lastOrder: ShopPlacedOrder | null;
  addToCart: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => boolean;
  clearCoupon: () => void;
  placeOrder: (
    customer: ShopCheckoutCustomer,
    paymentMethod: string
  ) => ShopPlacedOrder | null;
  clearLastOrder: () => void;
}

const ShopCartContext = createContext<ShopCartContextValue | null>(null);

const readStorage = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const storedValue = window.localStorage.getItem(key);

    if (!storedValue) {
      return fallback;
    }

    return JSON.parse(storedValue) as T;
  } catch {
    return fallback;
  }
};

const writeStorage = (key: string, value: unknown) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
};

const getDiscountAmount = (
  couponCode: string | null,
  subtotal: number,
  shipping: number
) => {
  if (!couponCode) {
    return 0;
  }

  if (couponCode === "SAVE10") {
    return Math.round(subtotal * 0.1);
  }

  if (couponCode === "FREESHIP") {
    return shipping;
  }

  return 0;
};

export const ShopCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [rawItems, setRawItems] = useState<ShopCartItem[]>(() =>
    readStorage<ShopCartItem[]>(CART_STORAGE_KEY, [])
  );
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(() =>
    readStorage<string | null>(COUPON_STORAGE_KEY, null)
  );
  const [lastOrder, setLastOrder] = useState<ShopPlacedOrder | null>(() =>
    readStorage<ShopPlacedOrder | null>(ORDER_STORAGE_KEY, null)
  );

  useEffect(() => {
    writeStorage(CART_STORAGE_KEY, rawItems);
  }, [rawItems]);

  useEffect(() => {
    writeStorage(COUPON_STORAGE_KEY, appliedCoupon);
  }, [appliedCoupon]);

  useEffect(() => {
    writeStorage(ORDER_STORAGE_KEY, lastOrder);
  }, [lastOrder]);

  const items = useMemo<ShopCartLine[]>(() => {
    return rawItems
      .map((item) => {
        const product = shopProducts.find(
          (productItem) => productItem.id === item.productId
        );

        if (!product) {
          return null;
        }

        return {
          ...item,
          product,
          lineTotal: product.price * item.quantity,
        };
      })
      .filter((item): item is ShopCartLine => item !== null);
  }, [rawItems]);

  const cartCount = useMemo(
    () =>
      items.reduce((accumulator, item) => accumulator + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce((accumulator, item) => accumulator + item.lineTotal, 0),
    [items]
  );

  const shipping = items.length ? SHIPPING_FEE : 0;
  const discount = getDiscountAmount(appliedCoupon, subtotal, shipping);
  const tax = items.length ? Math.round(subtotal * TAX_RATE) : 0;
  const total = Math.max(0, subtotal + shipping + tax - discount);

  const addToCart = useCallback((productId: string, quantity = 1) => {
    setRawItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.productId === productId);

      if (existingItem) {
        return currentItems.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentItems, { productId, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setRawItems((currentItems) =>
        currentItems.filter((item) => item.productId !== productId)
      );
      return;
    }

    setRawItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setRawItems((currentItems) =>
      currentItems.filter((item) => item.productId !== productId)
    );
  }, []);

  const clearCart = useCallback(() => {
    setRawItems([]);
  }, []);

  const applyCoupon = useCallback((code: string) => {
    const normalizedCode = code.trim().toUpperCase();

    if (normalizedCode === "SAVE10" || normalizedCode === "FREESHIP") {
      setAppliedCoupon(normalizedCode);
      return true;
    }

    return false;
  }, []);

  const clearCoupon = useCallback(() => {
    setAppliedCoupon(null);
  }, []);

  const placeOrder = useCallback((
    customer: ShopCheckoutCustomer,
    paymentMethod: string
  ) => {
    if (!items.length) {
      return null;
    }

    const order: ShopPlacedOrder = {
      orderNumber: `BOX${Date.now().toString().slice(-6)}`,
      createdAt: new Intl.DateTimeFormat("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }).format(new Date()),
      paymentMethod,
      items,
      subtotal,
      shipping,
      tax,
      discount,
      total,
      customer,
    };

    setLastOrder(order);
    setRawItems([]);
    setAppliedCoupon(null);

    return order;
  }, [discount, items, shipping, subtotal, tax, total]);

  const clearLastOrder = useCallback(() => {
    setLastOrder(null);
  }, []);

  const value = useMemo<ShopCartContextValue>(
    () => ({
      items,
      cartCount,
      subtotal,
      shipping,
      tax,
      discount,
      total,
      appliedCoupon,
      lastOrder,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      applyCoupon,
      clearCoupon,
      placeOrder,
      clearLastOrder,
    }),
    [
      items,
      cartCount,
      subtotal,
      shipping,
      tax,
      discount,
      total,
      appliedCoupon,
      lastOrder,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      applyCoupon,
      clearCoupon,
      placeOrder,
      clearLastOrder,
    ]
  );

  return (
    <ShopCartContext.Provider value={value}>
      {children}
    </ShopCartContext.Provider>
  );
};

export const useShopCart = () => {
  const context = useContext(ShopCartContext);

  if (!context) {
    throw new Error("useShopCart must be used within ShopCartProvider");
  }

  return context;
};
