import Link from "next/link";
import { hasShopifyConfig } from "../lib/shopify";
import { CartProvider } from "./CartProvider";
import { Navbar } from "./Navbar";

export function StoreLayout({ children, region }) {
  const shopifyReady = hasShopifyConfig();

  return (
    <CartProvider region={region} shopifyReady={shopifyReady}>
      <Navbar region={region} />
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-col">
            <h4>Bodylife</h4>
            <p className="footer-tagline">{region.footerText}</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <nav className="footer-nav">
              <Link href={`/${region.code}/products`}>All Products</Link>
              <Link href={`/${region.code}/contact`}>Contact</Link>
              <Link href={`/${region.code}/shipping`}>Shipping & Returns</Link>
            </nav>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="https://www.instagram.com/bodylife_official?igsh=N2pydWVqaG41bHl2" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@bodylife" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4c1 3 4 4 6 4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Bodylife. All rights reserved.</p>
        </div>
      </footer>
    </CartProvider>
  );
}
