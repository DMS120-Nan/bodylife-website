import { notFound } from "next/navigation";
import { ProductPage } from "../../../../components/ProductPage";
import { getValidatedRegion, regions } from "../../../../lib/regions";
import { createOpenGraph, getCanonicalUrl } from "../../../../lib/seo";
import { getProductByHandle, getProducts } from "../../../../lib/shopify";

export async function generateStaticParams() {
  const products = await getProducts();

  return regions.flatMap((region) =>
    products.map((product) => ({
      region: region.code,
      slug: product.slug
    }))
  );
}

export async function generateMetadata({ params }) {
  const { region: regionCode, slug } = await params;
  const region = getValidatedRegion(regionCode);
  const product = await getProductByHandle(slug);

  if (!product) {
    return {
      title: "Product not found | BodyLife Store"
    };
  }

  const path = `/${region.code}/products/${product.slug}`;
  const title = `${product.name} | ${region.name}`;
  const description = product.description || product.summary;

  return {
    title,
    description,
    alternates: {
      canonical: getCanonicalUrl(path)
    },
    openGraph: createOpenGraph({
      title,
      description,
      images: product.images?.map((image) => ({
        url: image.url,
        alt: image.altText || product.name
      })),
      path
    })
  };
}

export default async function RegionalProductPage({ params }) {
  const { region: regionCode, slug } = await params;
  const region = getValidatedRegion(regionCode);
  const product = await getProductByHandle(slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} region={region} />;
}
