import Link from "next/link";
import { getValidatedRegion, regions } from "../../../lib/regions";
import { createOpenGraph, getCanonicalUrl } from "../../../lib/seo";

export function generateStaticParams() {
  return regions.map((region) => ({ region: region.code }));
}

export async function generateMetadata({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);
  const path = `/${region.code}/terms`;
  const title = "Terms of Service";
  const description = "The terms that apply when you order from Bodylife.";

  return {
    title,
    description,
    alternates: { canonical: getCanonicalUrl(path) },
    openGraph: createOpenGraph({ title, description, path })
  };
}

export default async function TermsPage({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);

  return (
    <article className="legal-page">
      <header>
        <p className="eyebrow">Legal</p>
        <h1>Terms of Service</h1>
        <p className="legal-page-meta">Last updated: [DATE — please update before publishing]</p>
      </header>

      <p className="legal-page-lead">
        These are the terms that apply when you order from Bodylife. Please
        review them with a qualified attorney for your jurisdiction before
        publishing.
      </p>

      <section>
        <h2>1. Agreement</h2>
        <p>
          By using this website or placing an order, you agree to these Terms
          and our <Link href={`/${region.code}/privacy`}>Privacy Policy</Link>.
          If you don&apos;t agree, please don&apos;t use the site.
        </p>
      </section>

      <section>
        <h2>2. Who we are</h2>
        <p>
          Bodylife is operated by [Legal entity name], registered at [address],
          contactable at <a href="mailto:support@bodylifeofficial.com">support@bodylifeofficial.com</a>.
        </p>
      </section>

      <section>
        <h2>3. Products and orders</h2>
        <ul>
          <li>Prices, descriptions, and availability are shown on each product page and may change without notice.</li>
          <li>An order is a request to buy. We accept it once we send you an order confirmation email and charge your payment method.</li>
          <li>We may decline or cancel an order if a product is unavailable, priced incorrectly, or where we suspect fraud.</li>
        </ul>
      </section>

      <section>
        <h2>4. Pricing and payment</h2>
        <ul>
          <li>All prices are shown in the currency of your selected region (USD or AED). Taxes and shipping are added at checkout where applicable.</li>
          <li>Payment is taken at the time of order via our payment processor (Shopify Payments, Stripe, or PayPal).</li>
          <li>We don&apos;t store full payment card details.</li>
        </ul>
      </section>

      <section>
        <h2>5. Shipping</h2>
        <p>
          Delivery times and costs are shown on the{" "}
          <Link href={`/${region.code}/shipping`}>Shipping & Returns</Link> page
          and at checkout. We&apos;re not responsible for delays caused by
          carriers, customs, or events beyond our control.
        </p>
      </section>

      <section>
        <h2>6. Returns</h2>
        <p>
          You can return any unopened product within 30 days of delivery for a
          refund. See our{" "}
          <Link href={`/${region.code}/shipping`}>Shipping & Returns</Link> page
          for the full process.
        </p>
      </section>

      <section>
        <h2>7. Subscriptions</h2>
        <p>
          When you subscribe to a product:
        </p>
        <ul>
          <li>We&apos;ll automatically ship and charge for the same item every 30 days at the discounted subscriber price.</li>
          <li>You can skip, pause, or cancel from your customer account at any time before your next billing date.</li>
          <li>You&apos;ll receive a reminder email 3 business days before each shipment.</li>
          <li>The subscriber price applies for as long as you remain subscribed; we may update it with at least 30 days&apos; notice.</li>
        </ul>
      </section>

      <section>
        <h2>8. Use of the website</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the site for anything illegal or harmful.</li>
          <li>Try to break, scrape, or interfere with the site or its security.</li>
          <li>Misrepresent who you are when contacting us or placing an order.</li>
        </ul>
      </section>

      <section>
        <h2>9. Intellectual property</h2>
        <p>
          The Bodylife name, logo, product names, copy, photography, and code on
          this site are owned by us or our licensors. You may not copy, modify,
          or republish them without written permission.
        </p>
      </section>

      <section>
        <h2>10. Skin sensitivity disclaimer</h2>
        <p>
          Our products are designed for sensitive skin and are dermatology-informed,
          but reactions can still happen. Always patch-test new products. If you
          have a known allergy, medical skin condition, or are pregnant or
          breastfeeding, consult a qualified healthcare provider before starting
          any new skincare. We don&apos;t make medical claims, and our products
          are not a substitute for medical advice.
        </p>
      </section>

      <section>
        <h2>11. Liability</h2>
        <p>
          To the fullest extent permitted by law, our total liability under
          these Terms is limited to the amount you paid for the product in
          question. We&apos;re not responsible for indirect or consequential
          losses (lost profits, data, etc.).
        </p>
        <p>
          Nothing in these Terms limits liability that cannot be limited under
          applicable law (including for death, personal injury caused by our
          negligence, or fraud).
        </p>
      </section>

      <section>
        <h2>12. Governing law</h2>
        <p>
          These Terms are governed by the laws of [JURISDICTION TO BE SELECTED
          WITH LEGAL COUNSEL]. Disputes will be resolved in the courts of
          [JURISDICTION].
        </p>
      </section>

      <section>
        <h2>13. Changes</h2>
        <p>
          We may update these Terms from time to time. The &quot;last updated&quot;
          date will reflect the change. Continued use of the site after a change
          means you accept the updated Terms.
        </p>
      </section>

      <p className="legal-page-footer">
        Questions? <Link href={`/${region.code}/contact`}>Get in touch.</Link>
      </p>
    </article>
  );
}
