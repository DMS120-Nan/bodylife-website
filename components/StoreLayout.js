import { CartProvider } from "./CartProvider";
import { Navbar } from "./Navbar";
import { hasShopifyConfig } from "../lib/shopify";

export function StoreLayout({ children, region }) {
  const shopifyReady = hasShopifyConfig();

  return (
    <CartProvider region={region} shopifyReady={shopifyReady}>
      <Navbar region={region} />
      <main>{children}</main>
      <footer className="site-footer">
        <p>{region.footerText}</p>
      </footer>
    </CartProvider>
  );
}
