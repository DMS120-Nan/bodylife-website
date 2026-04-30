import { regions } from "../lib/regions";
import { getCanonicalUrl } from "../lib/seo";
import { getProducts } from "../lib/shopify";

export default async function sitemap() {
  const products = await getProducts();
  const now = new Date();
  const landingPage = {
    url: getCanonicalUrl("/lp"),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9
  };
  const regionalPages = regions.flatMap((region) => [
    {
      url: getCanonicalUrl(`/${region.code}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: getCanonicalUrl(`/${region.code}/products`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: getCanonicalUrl(`/${region.code}/contact`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5
    }
  ]);
  const productPages = regions.flatMap((region) =>
    products.map((product) => ({
      url: getCanonicalUrl(`/${region.code}/products/${product.slug}`),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    }))
  );

  return [landingPage, ...regionalPages, ...productPages];
}
