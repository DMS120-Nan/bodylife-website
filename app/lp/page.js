import { LandingPage } from "../../components/LandingPage";
import { getRegion } from "../../lib/regions";
import { getProducts } from "../../lib/shopify";

export const metadata = {
  title: "Lightweight Daily Skincare",
  description:
    "Lightweight, gentle skincare formulas designed for daily skin comfort.",
  alternates: {
    canonical: "/lp"
  },
  openGraph: {
    title: "Most skincare feels heavy. This doesn't.",
    description:
      "Lightweight, gentle formulas designed for daily skin comfort.",
    url: "/lp"
  }
};

export default async function LandingRoute() {
  const region = getRegion("us");
  const products = await getProducts();
  const featuredProduct = products[0];

  return <LandingPage product={featuredProduct} region={region} />;
}
