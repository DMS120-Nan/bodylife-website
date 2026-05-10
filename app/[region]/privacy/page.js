import Link from "next/link";
import { getValidatedRegion, regions } from "../../../lib/regions";
import { createOpenGraph, getCanonicalUrl } from "../../../lib/seo";

export function generateStaticParams() {
  return regions.map((region) => ({ region: region.code }));
}

export async function generateMetadata({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);
  const path = `/${region.code}/privacy`;
  const title = "Privacy Policy";
  const description = "How Bodylife collects, uses, and protects your information.";

  return {
    title,
    description,
    alternates: { canonical: getCanonicalUrl(path) },
    openGraph: createOpenGraph({ title, description, path })
  };
}

export default async function PrivacyPage({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);

  return (
    <article className="legal-page">
      <header>
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-page-meta">Last updated: [DATE — please update before publishing]</p>
      </header>

      <p className="legal-page-lead">
        We try to keep this page short and readable. If anything below feels
        unclear, email us at <a href="mailto:support@bodylifeofficial.com">support@bodylifeofficial.com</a>.
        This template should be reviewed by a qualified attorney for your jurisdiction
        before publishing.
      </p>

      <section>
        <h2>1. Who we are</h2>
        <p>
          Bodylife (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is operated
          by [Legal entity name], registered at [address]. You can reach us at
          <a href="mailto:support@bodylifeofficial.com"> support@bodylifeofficial.com</a>.
        </p>
      </section>

      <section>
        <h2>2. What we collect</h2>
        <p>We collect only what we need to run the shop and keep in touch:</p>
        <ul>
          <li><strong>Order information</strong> — name, shipping address, email, phone, and items ordered, processed via Shopify.</li>
          <li><strong>Payment information</strong> — handled directly by our payment processor (Stripe / Shopify Payments / PayPal). We never see or store full card numbers.</li>
          <li><strong>Account / contact information</strong> — anything you submit through the contact form, newsletter signup, or our welcome popup.</li>
          <li><strong>Usage data</strong> — pages visited, device type, approximate location, with consent (see Cookies below).</li>
          <li><strong>Cookies</strong> — small text files stored in your browser. See section 5.</li>
        </ul>
      </section>

      <section>
        <h2>3. How we use it</h2>
        <ul>
          <li>To process orders and ship products.</li>
          <li>To respond to your messages and questions.</li>
          <li>To send you the newsletter you subscribed to (you can unsubscribe at any time).</li>
          <li>To improve the website by understanding what works and what doesn&apos;t.</li>
          <li>To meet legal obligations (taxes, returns, fraud prevention).</li>
        </ul>
      </section>

      <section>
        <h2>4. Who we share it with</h2>
        <p>
          We share data only with services we use to run the shop. Each one is
          contractually required to protect your information:
        </p>
        <ul>
          <li><strong>Shopify</strong> — store, products, checkout</li>
          <li><strong>Stripe / Shopify Payments / PayPal</strong> — payment processing</li>
          <li><strong>Make (Integromat) + email service</strong> — newsletter, contact form</li>
          <li><strong>Google Analytics 4</strong> — usage analytics (with consent)</li>
          <li><strong>Meta Pixel</strong> — marketing analytics (with consent)</li>
          <li><strong>Vercel</strong> — website hosting</li>
        </ul>
        <p>We never sell your personal information.</p>
      </section>

      <section>
        <h2>5. Cookies</h2>
        <p>
          We use a small set of cookies. When you first visit, we ask which
          ones you&apos;re comfortable with. You can change your choices at any
          time by clearing site data in your browser.
        </p>
        <ul>
          <li><strong>Necessary</strong> — for cart, region, and language. Always on.</li>
          <li><strong>Analytics</strong> — anonymous usage data (Google Analytics).</li>
          <li><strong>Marketing</strong> — Meta Pixel for ads measurement.</li>
        </ul>
      </section>

      <section>
        <h2>6. Your rights</h2>
        <p>
          Depending on where you live (EU / UK / California / UAE / KSA / others),
          you may have rights to:
        </p>
        <ul>
          <li>Request a copy of the personal data we hold about you.</li>
          <li>Ask us to correct or delete it.</li>
          <li>Object to certain uses, including marketing.</li>
          <li>Withdraw consent at any time without affecting past lawful processing.</li>
          <li>File a complaint with your local data protection authority.</li>
        </ul>
        <p>
          To exercise any of these rights, email{" "}
          <a href="mailto:support@bodylifeofficial.com">support@bodylifeofficial.com</a>.
        </p>
      </section>

      <section>
        <h2>7. Data retention</h2>
        <p>
          We keep order records for as long as required by law (typically 6–10
          years for tax purposes) and contact data for as long as you stay
          subscribed, plus a short period afterwards.
        </p>
      </section>

      <section>
        <h2>8. International transfers</h2>
        <p>
          Some of our service providers (Shopify, Vercel, Google) operate in
          the United States. Where required, we rely on Standard Contractual
          Clauses or equivalent safeguards.
        </p>
      </section>

      <section>
        <h2>9. Children</h2>
        <p>
          Bodylife is not directed at anyone under 16. If you believe a child
          has given us personal data, contact us and we&apos;ll remove it.
        </p>
      </section>

      <section>
        <h2>10. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The &quot;last updated&quot;
          date at the top will reflect the change. For material changes, we&apos;ll
          notify you by email if you&apos;re a subscriber.
        </p>
      </section>

      <p className="legal-page-footer">
        Questions? <Link href={`/${region.code}/contact`}>Get in touch.</Link>
      </p>
    </article>
  );
}
