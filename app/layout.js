import "./globals.css";
import { Inter } from "next/font/google";
import { ConsentProvider } from "../components/ConsentProvider";
import { CookieConsent } from "../components/CookieConsent";
import { TrackingProvider } from "../components/TrackingProvider";
import { getBaseUrl, siteName } from "../lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: siteName,
    template: `%s | ${siteName}`
  },
  description: "Daily skincare essentials for simple, region-aware routines.",
  openGraph: {
    title: siteName,
    description: "Daily skincare essentials for simple, region-aware routines.",
    siteName,
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f2e9" }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip-to-content" href="#main">Skip to content</a>
        <ConsentProvider>
          <TrackingProvider>{children}</TrackingProvider>
          <CookieConsent />
        </ConsentProvider>
      </body>
    </html>
  );
}
