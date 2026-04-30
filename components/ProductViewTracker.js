"use client";

import { useEffect } from "react";
import { getProductTrackingPayload, trackEvent } from "../lib/tracking";

export function ProductViewTracker({ product, region }) {
  useEffect(() => {
    trackEvent("view_item", getProductTrackingPayload(product, region));
  }, [product, region]);

  return null;
}
