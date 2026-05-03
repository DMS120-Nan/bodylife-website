"use client";

import { useCart } from "./CartProvider";
import { getProductTrackingPayload, trackEvent } from "../lib/tracking";

export function AddToCartButton({
  className = "primary-button cart-button",
  product,
  region,
  variant,
  quantity = 1
}) {
  const { addItem } = useCart();

  function handleAddToCart() {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant);
    }

    if (region) {
      trackEvent("add_to_cart", {
        ...getProductTrackingPayload(product, region, variant),
        quantity,
        variant
      });
    }
  }

  return (
    <button
      className={className}
      type="button"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  );
}
