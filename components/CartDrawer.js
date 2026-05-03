"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import { getCartTrackingPayload, trackEvent } from "../lib/tracking";

function formatCartPrice(item, quantity = 1) {
  return new Intl.NumberFormat(item.locale, {
    style: "currency",
    currency: item.currency,
    maximumFractionDigits: 0
  }).format(item.price * quantity);
}

export function CartDrawer({ region, shopifyReady }) {
  const [checkoutError, setCheckoutError] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const {
    closeCart,
    decreaseItem,
    increaseItem,
    isOpen,
    isHydrated,
    regionItems,
    removeItem
  } = useCart();
  const visibleRegionItems = isHydrated ? regionItems : [];
  const subtotal = visibleRegionItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const isCartEmpty = visibleRegionItems.length === 0;
  const isCheckoutDisabled = isCartEmpty || !shopifyReady || isCheckingOut;

  async function handleCheckout() {
    setCheckoutError("");
    setIsCheckingOut(true);
    trackEvent("begin_checkout", getCartTrackingPayload(visibleRegionItems, region));

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cartItems: visibleRegionItems,
          regionCode: region.code
        })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to create checkout.");
      }

      const checkoutUrl = data.checkoutUrl;
      const shopifyWindow = window.open(checkoutUrl, "_self");
      if (!shopifyWindow) {
        window.location.assign(checkoutUrl);
      }
    } catch (error) {
      setCheckoutError(error.message || "Unable to create checkout.");
      setIsCheckingOut(false);
    }
  }

  return (
    <aside className={`cart-drawer ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
      <div className="cart-drawer-header">
        <div>
          <p className="eyebrow">{region.label}</p>
          <h2>Cart</h2>
        </div>
        <button className="icon-button" type="button" onClick={closeCart}>
          Close
        </button>
      </div>

      {visibleRegionItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {visibleRegionItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                {item.variant ? <p>{item.variant}</p> : null}
                <p>{formatCartPrice(item)}</p>
              </div>
              <div className="quantity-control">
                <button type="button" onClick={() => decreaseItem(item.id)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => increaseItem(item.id)}>
                  +
                </button>
              </div>
              <button
                className="remove-button"
                type="button"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="cart-drawer-footer">
        <div className="cart-subtotal">
          <span>Subtotal</span>
          <strong>
            {new Intl.NumberFormat(region.locale, {
              style: "currency",
              currency: region.currency,
              maximumFractionDigits: 0
            }).format(subtotal)}
          </strong>
        </div>
        <button
          className="primary-button checkout-button"
          disabled={isCheckoutDisabled}
          onClick={handleCheckout}
          type="button"
        >
          {isCheckingOut ? "Redirecting..." : "Checkout"}
        </button>
        {!shopifyReady ? (
          <p className="checkout-note">
            Checkout will be available after Shopify connection.
          </p>
        ) : null}
        {checkoutError ? <p className="checkout-error">{checkoutError}</p> : null}
      </div>
    </aside>
  );
}
