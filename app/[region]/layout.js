import { StoreLayout } from "../../components/StoreLayout";
import { getValidatedRegion, regions } from "../../lib/regions";

export function generateStaticParams() {
  return regions.map((region) => ({
    region: region.code
  }));
}

export default async function RegionLayout({ children, params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);

  return <StoreLayout region={region}>{children}</StoreLayout>;
}
