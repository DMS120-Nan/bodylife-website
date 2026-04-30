import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "../lib/regions";
import { getProducts } from "../lib/shopify";

export async function ProductGrid({ region }) {
  const products = await getProducts();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product-card" key={product.slug}>
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
            <h3>{product.name}</h3>
            <p>{product.summary}</p>
            <div className="product-card-footer">
              <span>{formatPrice(product, region)}</span>
              <Link href={`/${region.code}/products/${product.slug}`}>
                View
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
