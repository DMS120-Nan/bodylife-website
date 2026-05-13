import Link from "next/link";
import { hasShopifyConfig } from "../lib/shopify";
import { CartProvider } from "./CartProvider";
import { FirstVisitPopup } from "./FirstVisitPopup";
import { Navbar } from "./Navbar";
import { NewsletterForm } from "./NewsletterForm";

export function StoreLayout({ children, region }) {
  const shopifyReady = hasShopifyConfig();

  return (
    <CartProvider region={region} shopifyReady={shopifyReady}>
      <Navbar region={region} />
      <FirstVisitPopup region={region} />
      <main id="main">{children}</main>
      <footer className="site-footer">
        <section className="footer-newsletter" aria-label="Newsletter signup">
          <div className="footer-newsletter-inner">
            <div className="footer-newsletter-copy">
              <p className="eyebrow">Stay close</p>
              <h2>One letter a month, when we have something worth saying.</h2>
              <p className="footer-newsletter-lead">
                Skin science we are reading, the occasional routine update,
                and early access to new formulas. Unsubscribe in one click.
              </p>
            </div>
            <NewsletterForm region={region} />
          </div>
        </section>
        <div className="footer-inner">
          <div className="footer-col footer-col-brand">
            <h4>Bodylife</h4>
            <p className="footer-tagline">{region.footerText}</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <nav className="footer-nav">
              <Link href={`/${region.code}/products`}>All products</Link>
              <Link href={`/${region.code}/products/daily-hydration-gel`}>
                Daily Hydration Gel
              </Link>
              <Link href={`/${region.code}/products/smooth-renew-serum`}>
                Smooth Renew Serum
              </Link>
              <Link href={`/${region.code}/products/barrier-comfort-cream`}>
                Barrier Comfort Cream
              </Link>
            </nav>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <nav className="footer-nav">
              <Link href={`/${region.code}/contact`}>Contact</Link>
              <Link href={`/${region.code}/shipping`}>Shipping & returns</Link>
              <Link href={`/${region.code}/about`}>About Bodylife</Link>
              <Link href={`/${region.code}/privacy`}>Privacy</Link>
              <Link href={`/${region.code}/terms`}>Terms</Link>
            </nav>
          </div>
          <div className="footer-col">
            <h4>Follow</h4>
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
          <div className="footer-payments" aria-label="Accepted payment methods">
            <span className="footer-payments-label">Secure payments</span>
            <ul>
              <li title="Visa">
                <svg viewBox="0 0 38 24" aria-label="Visa" fill="none">
                  <rect width="38" height="24" rx="4" fill="currentColor" opacity="0.06" />
                  <text x="19" y="16" textAnchor="middle" fontFamily="var(--font-inter)" fontSize="9" fontWeight="700" fill="currentColor" letterSpacing="0.6">VISA</text>
                </svg>
              </li>
              <li title="Mastercard">
                <svg viewBox="0 0 38 24" aria-label="Mastercard" fill="none">
                  <rect width="38" height="24" rx="4" fill="currentColor" opacity="0.06" />
                  <circle cx="15" cy="12" r="6" fill="currentColor" opacity="0.45" />
                  <circle cx="23" cy="12" r="6" fill="currentColor" opacity="0.55" />
                </svg>
              </li>
              <li title="American Express">
                <svg viewBox="0 0 38 24" aria-label="American Express" fill="none">
                  <rect width="38" height="24" rx="4" fill="currentColor" opacity="0.06" />
                  <text x="19" y="16" textAnchor="middle" fontFamily="var(--font-inter)" fontSize="7" fontWeight="700" fill="currentColor" letterSpacing="0.4">AMEX</text>
                </svg>
              </li>
              <li title="Apple Pay">
                <svg viewBox="0 0 38 24" aria-label="Apple Pay" fill="none">
                  <rect width="38" height="24" rx="4" fill="currentColor" opacity="0.06" />
                  <text x="19" y="16" textAnchor="middle" fontFamily="var(--font-inter)" fontSize="7" fontWeight="700" fill="currentColor" letterSpacing="0.2">A.PAY</text>
                </svg>
              </li>
              <li title="PayPal">
                <svg viewBox="0 0 38 24" aria-label="PayPal" fill="none">
                  <rect width="38" height="24" rx="4" fill="currentColor" opacity="0.06" />
                  <text x="19" y="16" textAnchor="middle" fontFamily="var(--font-inter)" fontSize="7" fontWeight="700" fill="currentColor" letterSpacing="0.2">PayPal</text>
                </svg>
              </li>
            </ul>
          </div>
          <p>© {new Date().getFullYear()} Bodylife. All rights reserved.</p>
        </div>
      </footer>
    </CartProvider>
  );
}
