import { ProductGrid } from "./ProductGrid";

export function ProductListPage({ region }) {
  return (
    <section className="section product-list-section">
      <div className="section-heading">
        <p className="eyebrow">Shop {region.label}</p>
        <h1>Daily care, made simple.</h1>
        <p className="product-list-description">
          Lightweight formulas for sensitive skin — gentle enough for daily use, designed for long-term skin comfort.
        </p>
      </div>
      <ProductGrid region={region} />
    </section>
  );
}
