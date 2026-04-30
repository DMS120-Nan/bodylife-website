import { ProductListPage } from "../../../components/ProductListPage";
import { getValidatedRegion } from "../../../lib/regions";
import { createOpenGraph, getCanonicalUrl } from "../../../lib/seo";

export async function generateMetadata({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);
  const path = `/${region.code}/products`;
  const title = `Products | ${region.name}`;
  const description = `Shop Bodylife products for ${region.label}.`;

  return {
    title,
    description,
    alternates: {
      canonical: getCanonicalUrl(path)
    },
    openGraph: createOpenGraph({
      title,
      description,
      path
    })
  };
}

export default async function RegionalProductsPage({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);

  return <ProductListPage region={region} />;
}
