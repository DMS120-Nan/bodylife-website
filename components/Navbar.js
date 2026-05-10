"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getRegionPath, regions } from "../lib/regions";
import { useCart } from "./CartProvider";

export function Navbar({ region }) {
  const pathname = usePathname();
  const { isHydrated, itemCount, openCart } = useCart();
  const visibleItemCount = isHydrated ? itemCount : 0;

  return (
    <header className="site-header">
      <Link className="brand" href={`/${region.code}`}>
        Bodylife
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href={`/${region.code}`} aria-current={pathname === `/${region.code}` ? "page" : undefined}>
          Home
        </Link>
        <Link href={`/${region.code}/products`} aria-current={pathname.startsWith(`/${region.code}/products`) ? "page" : undefined}>
          Products
        </Link>
        <Link href={`/${region.code}/about`} aria-current={pathname === `/${region.code}/about` ? "page" : undefined}>
          About
        </Link>
        <Link href={`/${region.code}/contact`} aria-current={pathname === `/${region.code}/contact` ? "page" : undefined}>
          Contact
        </Link>
        <Link href={`/${region.code}/shipping`} aria-current={pathname === `/${region.code}/shipping` ? "page" : undefined}>
          Shipping
        </Link>
      </nav>
      <div className="region-switcher" aria-label="Region selector">
        {regions.map((item) => (
          <Link
            aria-current={item.code === region.code ? "page" : undefined}
            href={getRegionPath(pathname, item.code)}
            key={item.code}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button
        className="cart-toggle"
        type="button"
        onClick={openCart}
        aria-label={`Open cart, ${visibleItemCount} ${visibleItemCount === 1 ? "item" : "items"}`}
      >
        Bag
        <span key={visibleItemCount} className="cart-toggle-count">
          {visibleItemCount}
        </span>
      </button>
    </header>
  );
}
