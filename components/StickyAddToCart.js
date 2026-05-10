"use client";

import { useEffect, useRef, useState } from "react";
import { AddToCartButton } from "./AddToCartButton";

export function StickyAddToCart({
  product,
  region,
  variant,
  quantity,
  mode,
  watchRef,
  displayPrice
}) {
  const [isVisible, setIsVisible] = useState(false);
  const lastShown = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!watchRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const next = !entry.isIntersecting;
        if (next !== lastShown.current) {
          lastShown.current = next;
          setIsVisible(next);
        }
      },
      { rootMargin: "0px 0px -40% 0px" }
    );

    observer.observe(watchRef.current);
    return () => observer.disconnect();
  }, [watchRef]);

  return (
    <div className={`sticky-add-bar ${isVisible ? "is-visible" : ""}`} aria-hidden={!isVisible}>
      <div className="sticky-add-bar-inner">
        <div className="sticky-add-bar-info">
          <span className="sticky-add-bar-name">{product.name}</span>
          <strong className="sticky-add-bar-price">{displayPrice}</strong>
        </div>
        <AddToCartButton
          className="primary-button sticky-add-bar-button"
          mode={mode}
          product={product}
          quantity={quantity}
          region={region}
          variant={variant}
        />
      </div>
    </div>
  );
}
