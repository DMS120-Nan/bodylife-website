import "./globals.css";
import { TrackingProvider } from "../components/TrackingProvider";
import { getBaseUrl, siteName } from "../lib/seo";

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
    <html lang="en">
      <body>
        <TrackingProvider>{children}</TrackingProvider>
      </body>
    </html>
  );
}
