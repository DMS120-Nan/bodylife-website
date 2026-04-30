import { getProductPrice } from "./regions";

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (window.gtag) {
    window.gtag("event", eventName, params);
  }

  if (window.fbq) {
    window.fbq("trackCustom", eventName, params);
  }
}

export function trackPageView(url) {
  if (typeof window === "undefined") {
    return;
  }

  if (window.gtag && process.env.NEXT_PUBLIC_GA_ID) {
    window.gtag("event", "page_view", {
      page_path: url
    });
  }

  if (window.fbq) {
    window.fbq("track", "PageView");
  }
}

export function getProductTrackingPayload(product, region, variant) {
  const price = getProductPrice(product, region, variant);

  return {
    currency: region.currency,
    item_id: product.slug,
    item_name: product.name,
    item_category: product.category,
    price,
    value: price,
    item_variant: variant,
    region: region.code
  };
}

export function getCartTrackingPayload(cartItems, region) {
  const value = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return {
    currency: region.currency,
    value,
    region: region.code,
    items: cartItems.map((item) => ({
      item_id: item.slug,
      item_name: item.name,
      item_variant: item.variant,
      price: item.price,
      quantity: item.quantity
    }))
  };
}
