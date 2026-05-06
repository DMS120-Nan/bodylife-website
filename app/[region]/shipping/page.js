import Link from "next/link";
import { getRegion, regions } from "../../../lib/regions";

export function generateStaticParams() {
  return regions.map((r) => ({ region: r.code }));
}

export default async function ShippingPage({ params }) {
  const { region: regionCode } = await params;
  const region = getRegion(regionCode);

  return (
    <div className="shipping-page">
      <div className="shipping-content">
        <h1>Shipping & Returns</h1>

        <section className="shipping-section">
          <h2>Shipping</h2>
          <div className="shipping-cards">
            <div className="shipping-card">
              <h3>United States</h3>
              <p className="shipping-highlight">Free shipping on orders over $40</p>
              <p>Orders under $40: $4.99 flat rate</p>
              <p>Delivery: 3–7 business days</p>
            </div>
            <div className="shipping-card">
              <h3>Middle East</h3>
              <p className="shipping-highlight">Free shipping on orders over $40</p>
              <p>Orders under $40: $9.99 flat rate</p>
              <p>Delivery: 7–14 business days</p>
            </div>
          </div>
        </section>

        <section className="shipping-section">
          <h2>Returns & Exchanges</h2>
          <div className="returns-content">
            <div className="returns-highlight">
              <span className="returns-badge">30 Days</span>
              <p>No-questions-asked returns</p>
            </div>
            <div className="returns-details">
              <p>We want you to love your Bodylife products. If you are not completely satisfied, you can return any unopened product within 30 days of delivery for a full refund.</p>
              <h3>How to return</h3>
              <p>1. Email us at support@bodylifeofficial.com with your order number.</p>
              <p>2. We will send you a return shipping label.</p>
              <p>3. Ship the product back within 7 days.</p>
              <p>4. Refund processed within 5–7 business days after we receive the item.</p>
            </div>
          </div>
        </section>

        <section className="shipping-section">
          <h2>Questions?</h2>
          <p>Contact our team at <a href="mailto:support@bodylifeofficial.com">support@bodylifeofficial.com</a> or visit our <Link href={`/${region.code}/contact`}>contact page</Link>.</p>
        </section>
      </div>
    </div>
  );
}
