"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { getProductPrice, getProductVariant } from "../lib/regions";

const CartContext = createContext(null);
const CART_STORAGE_KEY = "bodylife-cart";

export function CartProvider({ children, region, shopifyReady = false }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

      if (storedCart) {
        try {
          setItems(JSON.parse(storedCart));
        } catch {
          setItems([]);
        }
      }

      setIsHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (isHydrated) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [isHydrated, items]);

  const regionItems = useMemo(
    () => items.filter((item) => item.regionCode === region.code),
    [items, region.code]
  );
  const itemCount = regionItems.reduce((total, item) => total + item.quantity, 0);

  function addItem(product, variant) {
    const selectedVariant = variant || product.sizes?.[0] || "Default";
    const variantData = getProductVariant(product, selectedVariant);
    const itemId = `${region.code}:${product.slug}:${selectedVariant}`;

    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === itemId);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...currentItems,
        {
          id: itemId,
          slug: product.slug,
          name: product.name,
          variant: selectedVariant,
          price: getProductPrice(product, region, selectedVariant),
          currency: region.currency,
          locale: region.locale,
          regionCode: region.code,
          quantity: 1,
          shopifyVariantId:
            variantData?.shopifyVariantId || product.shopifyVariantId
        }
      ];
    });

    setIsOpen(true);
  }

  function increaseItem(itemId) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseItem(itemId) {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(itemId) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== itemId)
    );
  }

  const value = {
    addItem,
    closeCart: () => setIsOpen(false),
    decreaseItem,
    increaseItem,
    isOpen,
    isHydrated,
    itemCount,
    openCart: () => setIsOpen(true),
    regionItems,
    removeItem
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer region={region} shopifyReady={shopifyReady} />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
