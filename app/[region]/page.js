import { HomePage } from "../../components/HomePage";
import { getValidatedRegion } from "../../lib/regions";
import { createOpenGraph, getCanonicalUrl } from "../../lib/seo";

export async function generateMetadata({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);
  const path = `/${region.code}`;
  const title = `${region.name} Daily Skincare`;

  return {
    title,
    description: region.home.description,
    alternates: {
      canonical: getCanonicalUrl(path)
    },
    openGraph: createOpenGraph({
      title,
      description: region.home.description,
      path
    })
  };
}

export default async function RegionHomePage({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);

  return <HomePage region={region} />;
}
