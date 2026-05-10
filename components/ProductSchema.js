import { getAggregateRating } from "./ProductRating";
import { getProductPrice } from "../lib/regions";
import { getBaseUrl, siteName } from "../lib/seo";

export function ProductSchema({ product, region }) {
  const price = getProductPrice(product, region);
  const { average, count } = getAggregateRating(region.pdp.reviews);
  const url = `${getBaseUrl()}/${region.code}/products/${product.slug}`;
  const image = product.images?.[0]?.url;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    sku: product.slug,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: siteName
    },
    image: image ? [image] : undefined,
    url,
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: region.currency,
      price: price.toString(),
      availability: "https://schema.org/InStock"
    },
    aggregateRating: count > 0 ? {
      "@type": "AggregateRating",
      ratingValue: average.toString(),
      reviewCount: count.toString()
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
