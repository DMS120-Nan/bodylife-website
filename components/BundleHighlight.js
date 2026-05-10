import Image from "next/image";
import Link from "next/link";
import { formatPrice, getProductPrice } from "../lib/regions";
import { getProducts } from "../lib/shopify";

export async function BundleHighlight({ region }) {
  const products = await getProducts();
  const bundle = products.find((product) => product.isBundle);

  if (!bundle) return null;

  const bundlePrice = formatPrice(bundle, region);
  const componentTotal = bundle.bundleContents
    ? bundle.bundleContents.reduce((sum, item) => {
        const original = products.find((p) => p.slug === item.slug);
        if (!original) return sum;
        return sum + getProductPrice(original, region);
      }, 0)
    : 0;
  const formattedComponentTotal = componentTotal
    ? new Intl.NumberFormat(region.locale, {
        style: "currency",
        currency: region.currency,
        maximumFractionDigits: 0
      }).format(componentTotal)
    : null;
  const productHref = `/${region.code}/products/${bundle.slug}`;

  return (
    <section className="bundle-highlight" aria-label="Daily routine bundle">
      <div className="bundle-highlight-inner">
        <div className="bundle-highlight-media">
          {bundle.images?.[0] ? (
            <Image
              alt={bundle.images[0].altText || bundle.name}
              className="bundle-highlight-image"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              src={bundle.images[0].url}
            />
          ) : null}
          <span className="bundle-highlight-tag">Save 20%</span>
        </div>
        <div className="bundle-highlight-copy">
          <p className="eyebrow">The complete routine</p>
          <h2>The whole routine, made to live together.</h2>
          <p className="bundle-highlight-lead">
            Three formulas designed to layer cleanly — gentle enough to use
            together every morning and evening, without doubling up. The
            simplest way to start a real, repeatable skin routine.
          </p>
          {bundle.bundleContents ? (
            <ol className="bundle-highlight-list">
              {bundle.bundleContents.map((item, index) => (
                <li key={item.slug}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </li>
              ))}
            </ol>
          ) : null}
          <div className="bundle-highlight-pricing">
            <div className="bundle-highlight-price">
              {formattedComponentTotal ? (
                <span className="bundle-highlight-price-strike">
                  {formattedComponentTotal}
                </span>
              ) : null}
              <strong>{bundlePrice}</strong>
            </div>
            <Link className="primary-button" href={productHref}>
              Shop the bundle
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
