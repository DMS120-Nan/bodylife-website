import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "../lib/regions";
import { getProducts } from "../lib/shopify";
import { ProductRating } from "./ProductRating";

export async function ProductGrid({ region, includeBundles = false }) {
  const allProducts = await getProducts();
  const products = includeBundles
    ? allProducts
    : allProducts.filter((product) => !product.isBundle);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <Link
          className="product-card"
          href={`/${region.code}/products/${product.slug}`}
          key={product.slug}
        >
          <article>
            <div className="product-image">
              {product.images?.[0] ? (
                <Image
                  alt={product.images[0].altText || product.name}
                  className="product-photo"
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                  src={product.images[0].url}
                />
              ) : null}
              <span>{product.category}</span>
            </div>
            <div className="product-card-body">
              <ProductRating reviews={region.pdp.reviews} size="sm" className="product-card-rating" />
              <h3>{product.name}</h3>
              <p>{product.summary}</p>
              <div className="product-card-footer">
                <span>{formatPrice(product, region)}</span>
                <span className="product-card-cta">View product →</span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
