import Image from "next/image";
import Link from "next/link";

const problemItems = [
  {
    title: "Heavy formulas sit on your skin",
    detail: "Leaves a greasy, uncomfortable feeling"
  },
  {
    title: "Harsh ingredients trigger sensitivity",
    detail: "Redness, irritation, breakouts"
  },
  {
    title: "Complicated routines don't last",
    detail: "Too many steps, no consistency"
  }
];

const clinicalStats = [
  {
    value: "93%",
    label: "noticed improved hydration"
  },
  {
    value: "99.5%",
    label: "sensitive skin reported no discomfort"
  },
  {
    value: "90%",
    label: "smoother skin texture"
  }
];

const solutionPoints = [
  {
    title: "Lightweight gel texture",
    detail: "No heavy residue, no greasy feeling"
  },
  {
    title: "Gentle on sensitive skin",
    detail: "Designed to reduce irritation and support skin balance"
  },
  {
    title: "Built for daily use",
    detail: "Simple routine you can actually stick to"
  }
];

const trustItems = [
  "Dermatologist recommended",
  "Sensitive skin safe",
  "Vegan / no animal testing"
];

const proofTrustLines = [
  "Dermatology-informed formulas",
  "Designed for sensitive skin",
  "No heavy residue, no irritation"
];

const proofQuotes = [
  "Finally something I can use every day without irritation.",
  "Light, clean, and actually comfortable on my skin."
];

const usageItems = [
  "Morning routine",
  "After cleansing",
  "When skin feels irritated"
];

export function LandingPage({ product, region }) {
  const productHref = `/${region.code}/products/${product.slug}`;
  const productImage = product.images?.[0];

  return (
    <main className="lp-page">
      <section className="lp-hero">
        <div className="lp-hero-inner">
          <div className="lp-hero-copy">
            <p className="eyebrow">Daily skin comfort</p>
            <h1>Most skincare feels heavy. This doesn&apos;t.</h1>
            <p>
              Lightweight, gentle formulas designed for daily skin comfort -
              especially for sensitive skin.
            </p>
            <Link className="primary-button lp-button" href={productHref}>
              Shop Now
            </Link>
            <div className="lp-micro-trust">
              <span>Sensitive skin safe</span>
              <span>No heavy residue</span>
              <span>Dermatology-informed</span>
            </div>
            <p className="lp-social-signal">
              As seen in daily skincare routines
            </p>
          </div>
          <div className="lp-hero-media">
            <div className="lp-hero-texture" aria-hidden="true">
              <Image
                alt=""
                className="lp-image"
                fill
                sizes="(max-width: 820px) 80vw, 24vw"
                src="/images/texture-3types.png"
              />
            </div>
            <div className="lp-hero-product">
              {productImage ? (
                <Image
                  alt={productImage.altText || product.name}
                  className="lp-image"
                  fill
                  priority
                  sizes="(max-width: 820px) 100vw, 38vw"
                  src={productImage.url}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="lp-problem">
        <div className="lp-problem-heading">
          <p className="eyebrow">The problem</p>
          <h2>Why most skincare doesn&apos;t work for you</h2>
        </div>
        <div className="lp-problem-list">
          {problemItems.map((item) => (
            <article key={item.title}>
              <p>{item.title}</p>
              <span>{item.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-texture">
        <div className="lp-texture-image">
          <Image
            alt="Lightweight skincare gel texture applied on skin"
            className="lp-image"
            fill
            sizes="(max-width: 820px) 100vw, 48vw"
            src="/images/texture-3types.png"
          />
        </div>
        <div className="lp-section-copy">
          <p className="eyebrow">Texture proof</p>
          <h2>Lightweight gel texture</h2>
          <p>Absorbs instantly, no residue</p>
        </div>
      </section>

      <section className="lp-solution">
        <div className="lp-section-copy">
          <p className="eyebrow">Solution</p>
          <h2>Keep it simple. Keep it right.</h2>
          <p>
            Lightweight, gentle formulas designed for daily skin comfort -
            without heaviness, irritation, or complexity.
          </p>
          <div className="lp-solution-points">
            {solutionPoints.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.detail}</p>
              </article>
            ))}
          </div>
        </div>
        <article className="lp-product-card">
          <div className="lp-product-image">
            <Image
              alt="Premium daily hydration skincare gel"
              className="lp-image"
              fill
              sizes="(max-width: 820px) 100vw, 42vw"
              src="/images/hero.png"
            />
          </div>
          <div className="lp-product-body">
            <h3>{product.name}</h3>
            <div className="lp-product-footer">
              <Link href={productHref}>Explore product</Link>
            </div>
          </div>
        </article>
      </section>

      <section className="lp-usage">
        <div className="lp-usage-inner">
          <div className="lp-section-copy">
            <p className="eyebrow">When to use</p>
            <h2>Fits into the moments your skin needs support.</h2>
            <div className="lp-usage-grid">
              {usageItems.map((item) => (
                <article key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="lp-usage-image">
            <Image
              alt="Simple daily skincare routine lifestyle moment"
              className="lp-image"
              fill
              sizes="(max-width: 820px) 100vw, 42vw"
              src="/images/usage-lifestyle.png"
            />
          </div>
        </div>
      </section>

      <section className="lp-clinical">
        <div className="lp-section-copy">
          <p className="eyebrow">Clinical proof</p>
          <h2>Proven to support your skin - gently</h2>
        </div>
        <div className="lp-stats">
          {clinicalStats.map((stat) => (
            <article key={stat.value}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
        <div className="lp-proof-details">
          <div className="lp-proof-lines">
            {proofTrustLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="lp-proof-quotes">
            {proofQuotes.map((quote) => (
              <blockquote key={quote}>&quot;{quote}&quot;</blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-trust">
        {trustItems.map((item) => (
          <article key={item}>
            <p>{item}</p>
          </article>
        ))}
      </section>

      <section className="lp-results">
        <div className="lp-section-copy">
          <p className="eyebrow">Consistent use</p>
          <h2>See how skin feels after consistent use</h2>
        </div>
        <div className="lp-results-image">
          <Image
            alt="Consistent skincare use comparison"
            className="lp-image"
            fill
            sizes="(max-width: 820px) 100vw, 42vw"
            src="/images/results-comparison.png"
          />
          <span className="lp-results-label lp-results-label-left">
            Before
          </span>
          <span className="lp-results-label lp-results-label-right">
            After
          </span>
        </div>
      </section>

      <section className="lp-final-cta">
        <p className="eyebrow">Daily care, simplified</p>
        <h2>Build a routine your skin can stay with.</h2>
        <p>Simple. Gentle. Designed for long-term skin comfort.</p>
        <Link className="primary-button lp-button" href={productHref}>
          Shop Now
        </Link>
        <p className="lp-cta-reassurance">
          Gentle enough for daily use - even for sensitive skin.
        </p>
        <Link className="lp-secondary-link" href={productHref}>
          View product
        </Link>
        <div className="lp-micro-trust lp-final-trust">
          <span>Sensitive skin safe</span>
          <span>Lightweight, no residue</span>
          <span>Dermatology-informed</span>
        </div>
      </section>
    </main>
  );
}
