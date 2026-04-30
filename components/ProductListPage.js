import { ProductGrid } from "./ProductGrid";

export function ProductListPage({ region }) {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Shop {region.label}</p>
        <h1>Products</h1>
      </div>
      <ProductGrid region={region} />
    </section>
  );
}
