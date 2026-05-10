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
    title: "Calm before clever",
    description:
      "Skincare should feel calm to use. Before it does anything else, a daily formula has to be comfortable on real skin, day after day."
  },
  {
    title: "Few ingredients, used well",
    description:
      "Long ingredient lists are not a sign of effort. We pick the molecules that actually do something — and leave the rest out."
  },
  {
    title: "Built for sensitive skin first",
    description:
      "If a formula works for sensitive, reactive skin, it tends to be kind to everyone. We start there, not the other way around."
  },
  {
    title: "Routines you can actually keep",
    description:
      "We design for consistency over heroics. A small routine you do every day will always beat a complicated one you abandon."
  }
];

export default async function AboutPage({ params }) {
  const { region: regionCode } = await params;
  const region = getValidatedRegion(regionCode);

  return (
    <article className="about-page">
      <section className="about-hero">
        <p className="eyebrow">Our story</p>
        <h1>Skincare that earns its place in your morning.</h1>
        <p className="about-lead">
          Bodylife started with a simple frustration: most skincare we tried
          looked beautiful but felt heavy on the skin, irritated easily, or
          asked us to follow a ten-step routine no one keeps up. So we made
          the kind of products we actually wanted — gentle, lightweight,
          dermatology-informed, and easy to repeat for years.
        </p>
      </section>

      <section className="about-principles">
        <div className="about-principles-heading">
          <p className="eyebrow">How we make things</p>
          <h2>Four quiet rules.</h2>
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
        <h2>Long-term skin comfort, formulated with care.</h2>
        <p>
          Every Bodylife formula is dermatology-informed, fragrance-free, and
          tested for sensitive skin. We work with cosmetic chemists who
          specialise in barrier care, and we keep our line small on purpose —
          so we can stand behind every product we ship.
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
