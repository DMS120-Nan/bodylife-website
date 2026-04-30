import { ContactPage } from "../../../components/ContactPage";
import { getValidatedRegion } from "../../../lib/regions";
import { createOpenGraph, getCanonicalUrl } from "../../../lib/seo";

export async function generateMetadata({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);
  const path = `/${region.code}/contact`;
  const title = `Contact | ${region.name}`;
  const description = `Contact the Bodylife ${region.label} team.`;

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

export default async function RegionalContactPage({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);

  return <ContactPage region={region} />;
}
