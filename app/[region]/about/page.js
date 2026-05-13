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
    "Bodylife makes lightweight, sensitive-skin friendly daily care — formulated by people who use it every day.";

  return {
    title,
    description,
    alternates: { canonical: getCanonicalUrl(path) },
    openGraph: createOpenGraph({ title, description, path })
  };
}

const principles = [
  {
    title: "Comfort first",
    description:
      "A daily formula has to feel good on the skin before anything else. If you wince when you put it on, you stop using it. We design around that."
  },
  {
    title: "Short ingredient lists",
    description:
      "A long INCI list signals effort, not results. We pick the molecules that do real work in barrier care and leave out the rest."
  },
  {
    title: "Sensitive skin sets the bar",
    description:
      "We test every formula with people who flush, sting, and react. If it passes for them, it works for everyone else too."
  },
  {
    title: "Consistency over heroics",
    description:
      "A three-product routine you do every day will always beat the ten-step one you abandon by week three. We design for the long haul."
  }
];

export default async function AboutPage({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);

  return (
    <article className="about-page">
      <section className="about-hero">
        <p className="eyebrow">Our story</p>
        <h1>We started Bodylife after our skin stopped agreeing with everything else.</h1>
        <p className="about-lead">
          The shelves were full of beautiful jars that felt heavy, stung after
          a few days, or asked for ten steps before bed. We wanted the
          opposite: three light formulas, made with chemists who specialise in
          sensitive skin, that you can keep using for years without thinking
          about them.
        </p>
      </section>

      <section className="about-principles">
        <div className="about-principles-heading">
          <p className="eyebrow">How we make things</p>
          <h2>The four rules we work to.</h2>
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
        <h2>If a Bodylife product doesn&apos;t work for your skin, send it back.</h2>
        <p>
          Every formula is fragrance-free, dermatology-informed, and tested
          with sensitive-skin users for 4 weeks before we ship it. We keep the
          line small so we can keep every product accountable. If yours
          doesn&apos;t earn its spot, email us within 30 days and we&apos;ll
          refund you.
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
