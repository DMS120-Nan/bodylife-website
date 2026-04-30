"use client";

import { useCart } from "./CartProvider";
import { getProductTrackingPayload, trackEvent } from "../lib/tracking";

export function AddToCartButton({
  className = "primary-button cart-button",
  product,
  region,
  variant
}) {
  const { addItem } = useCart();

  function handleAddToCart() {
    addItem(product, variant);

    if (region) {
      trackEvent("add_to_cart", {
        ...getProductTrackingPayload(product, region, variant),
        quantity: 1,
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
