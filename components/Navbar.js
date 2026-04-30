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
        <Link href={`/${region.code}`}>Home</Link>
        <Link href={`/${region.code}/products`}>Products</Link>
        <Link href={`/${region.code}/contact`}>Contact</Link>
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
      <button className="cart-toggle" type="button" onClick={openCart}>
        Cart
        <span>{visibleItemCount}</span>
      </button>
    </header>
  );
}
