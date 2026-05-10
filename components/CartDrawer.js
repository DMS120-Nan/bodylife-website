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

function formatRegionPrice(amount, region) {
  return new Intl.NumberFormat(region.locale, {
    style: "currency",
    currency: region.currency,
    maximumFractionDigits: 0
  }).format(amount);
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

  const freeShippingThreshold = region.shipping?.freeOver ?? 0;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgress = freeShippingThreshold > 0
    ? Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100))
    : 0;
  const hasFreeShipping = freeShippingThreshold > 0 && subtotal >= freeShippingThreshold;

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

      window.location.href = data.checkoutUrl;
    } catch (error) {
      setCheckoutError(error.message || "Unable to create checkout.");
      setIsCheckingOut(false);
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label="Close cart"
        tabIndex={isOpen ? 0 : -1}
        className={`cart-backdrop ${isOpen ? "is-open" : ""}`}
        onClick={closeCart}
      />
      <aside className={`cart-drawer ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
      <div className="cart-drawer-header">
        <div>
          <p className="eyebrow">{region.label}</p>
          <h2>Your bag</h2>
        </div>
        <button className="icon-button cart-close" type="button" aria-label="Close cart" onClick={closeCart}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M6 6L18 18M18 6L6 18" />
          </svg>
        </button>
      </div>

      {!isCartEmpty && freeShippingThreshold > 0 ? (
        <div className="shipping-progress" aria-live="polite">
          <p className="shipping-progress-label">
            {hasFreeShipping
              ? "You've unlocked free shipping."
              : `${formatRegionPrice(amountToFreeShipping, region)} away from free shipping.`}
          </p>
          <div className="shipping-progress-bar" role="progressbar" aria-valuenow={shippingProgress} aria-valuemin={0} aria-valuemax={100}>
            <div className="shipping-progress-fill" style={{ width: `${shippingProgress}%` }} />
          </div>
        </div>
      ) : null}

      {visibleRegionItems.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 9h18l-2 14a3 3 0 0 1-3 2.6H12a3 3 0 0 1-3-2.6L7 9Z" />
              <path d="M12 9V7a4 4 0 0 1 8 0v2" />
            </svg>
          </div>
          <p className="cart-empty-title">Your cart is empty.</p>
          <p className="cart-empty-lead">
            Add a product and it will show up here.
          </p>
        </div>
      ) : (
        <div className="cart-items">
          {visibleRegionItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                {item.variant ? <p>{item.variant}</p> : null}
                {item.mode === "subscription" && item.subscriptionLabel ? (
                  <p className="cart-item-subscription">
                    Subscribe · {item.subscriptionLabel}
                  </p>
                ) : null}
                <p>{formatCartPrice(item)}</p>
              </div>
              <div className="quantity-control">
                <button
                  aria-label={`Decrease quantity of ${item.name}`}
                  type="button"
                  onClick={() => decreaseItem(item.id)}
                >
                  <span aria-hidden="true">−</span>
                </button>
                <span aria-live="polite">{item.quantity}</span>
                <button
                  aria-label={`Increase quantity of ${item.name}`}
                  type="button"
                  onClick={() => increaseItem(item.id)}
                >
                  <span aria-hidden="true">+</span>
                </button>
              </div>
              <button
                aria-label={`Remove ${item.name} from cart`}
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
        {!isCartEmpty ? (
          <ul className="cart-trust-list" aria-label="Checkout trust signals">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
              Secure encrypted checkout
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 12a9 9 0 1 0 3-6.7" />
                <path d="M3 4v5h5" />
              </svg>
              30-day no-questions returns
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 7h13l3 4v6h-3" />
                <path d="M3 7v10h2" />
                <circle cx="8" cy="17" r="2" />
                <circle cx="17" cy="17" r="2" />
              </svg>
              {region.shipping?.delivery
                ? `Delivery in ${region.shipping.delivery}`
                : "Fast regional shipping"}
            </li>
          </ul>
        ) : null}
      </div>
    </aside>
    </>
  );
}
