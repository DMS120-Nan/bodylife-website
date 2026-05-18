import Link from "next/link";
import { getValidatedRegion, regions } from "../../../lib/regions";
import { createOpenGraph, getCanonicalUrl } from "../../../lib/seo";

export function generateStaticParams() {
  return regions.map((region) => ({ region: region.code }));
}

export async function generateMetadata({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);
  const path = `/${region.code}/about`;
  const title = "About Bodylife";
  const description =
    "Bodylife is a gentle personal care brand for sensitive needs — clean, comfort-focused formulas for everyday skin, body, and hair routines.";

  return {
    title,
    description,
    alternates: { canonical: getCanonicalUrl(path) },
    openGraph: createOpenGraph({ title, description, path })
  };
}

const principles = [
  {
    title: "Gentle by design",
    description:
      "Every formula starts with one question: is this comfortable for someone with sensitive needs? Not just tolerable — genuinely comfortable, every day."
  },
  {
    title: "Clean and purposeful",
    description:
      "We keep our ingredient lists short and clear. No complicated formulas, no unnecessary additions. Just what your skin actually needs."
  },
  {
    title: "Sensitive needs set the standard",
    description:
      "We test every formula with people who have reactive, delicate, or sensitive-prone skin. If it feels right for them, it works for everyone."
  },
  {
    title: "Built for the long term",
    description:
      "Bodylife is not about dramatic results or one-time fixes. It is about daily comfort — a routine you feel good about keeping up with, for years."
  }
];

export default async function AboutPage({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);

  return (
    <article className="about-page">
      <section className="about-hero">
        <p className="eyebrow">Our story</p>
        <h1>Gentle care for sensitive needs — that is what Bodylife is for.</h1>
        <p className="about-lead">
          We created Bodylife for people who need more from their personal care:
          more gentleness, more comfort, more confidence that what they are
          using is actually right for their skin. Whether it is sensitive skin,
          delicate areas, post-hair removal care, or a scalp that needs extra
          attention — Bodylife is designed to feel safe, comfortable, and
          genuinely suited to long-term daily use.
        </p>
      </section>

      <section className="about-principles">
        <div className="about-principles-heading">
          <p className="eyebrow">How we think about care</p>
          <h2>The principles behind every Bodylife formula.</h2>
        </div>
        <div className="about-principles-grid">
          {principles.map((principle, index) => (
            <article key={principle.title}>
              <span className="about-principle-mark" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-promise">
        <p className="eyebrow">Our promise</p>
        <h2>If a Bodylife product does not feel right for your skin, send it back.</h2>
        <p>
          Every formula is fragrance-free, tested with people who have sensitive
          or reactive skin, and designed for comfortable long-term use. We keep
          the line focused so every product can be held to a high standard. If
          yours does not feel right within 30 days, contact us and we will make it right.
        </p>
        <div className="about-actions">
          <Link className="primary-button" href={`/${region.code}/products`}>
            Browse the line
          </Link>
          <Link className="about-secondary" href={`/${region.code}/contact`}>
            Talk to us
          </Link>
        </div>
      </section>
    </article>
  );
}
