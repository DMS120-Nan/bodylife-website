import Image from "next/image";
import Link from "next/link";

const problemItems = [
  {
    title: "Heavy formulas are hard to use every day.",
    detail: "When care feels like too much, you stop. The routine that works is the one that feels comfortable enough to keep."
  },
  {
    title: "Some formulas are too harsh for sensitive needs.",
    detail: "For skin that needs extra care, the wrong formula can make things worse, not better."
  },
  {
    title: "Ten-step routines don't last.",
    detail: "Most people stop by day five. A short, gentle routine you can stick with every day is always better."
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
    title: "Comfort-focused formulas.",
    detail: "Every product is designed to feel gentle and comfortable — because daily care should never feel harsh."
  },
  {
    title: "Sensitive needs set the standard.",
    detail: "We test every formula with people who have sensitive or reactive skin. If it feels right for them, it works for everyone."
  },
  {
    title: "A routine you can keep long-term.",
    detail: "Gentle enough for daily use, every day, for years. That is what long-term comfort care looks like."
  }
];

const trustItems = [
  "Comfort-Care Formula",
  "Sensitive needs tested",
  "Vegan, never tested on animals"
];

const proofTrustLines = [
  "Clean, comfort-focused formulas for sensitive needs.",
  "Tested with people who have sensitive or reactive skin before shipping.",
  "Gentle enough for daily use. Effective enough to stay in the routine."
];

const proofQuotes = [
  "First thing in two years I can use every day without my cheeks flaring up.",
  "Light, fast to absorb, and you can wear makeup over it five minutes later."
];

const usageItems = [
  "Morning, after cleansing",
  "Evening, before bed",
  "When skin feels reactive or tight"
];

export function LandingPage({ product, region }) {
  const productHref = `/${region.code}/products/${product.slug}`;
  const productImage = product.images?.[0];

  return (
    <main id="main" className="lp-page">
      <section className="lp-hero">
        <div className="lp-hero-inner">
          <div className="lp-hero-copy">
            <p className="eyebrow">Gentle care for sensitive needs</p>
            <h1>Care that stays comfortable all day.</h1>
            <p>
              Clean, comfort-focused formulas made for sensitive skin and
              the daily routine you can keep up with long-term.
            </p>
            <Link className="primary-button lp-button" href={productHref}>
              Shop Now
            </Link>
            <div className="lp-micro-trust">
              <span>Sensitive needs tested</span>
              <span>Comfort-Care Formula</span>
              <span>For frequent daily use</span>
            </div>
            <p className="lp-social-signal">
              A gentle daily routine trusted by people with sensitive skin and care needs.
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
          <h2>Why most care routines don&apos;t work for sensitive needs.</h2>
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
          <h2>The gel goes on like water.</h2>
          <p>You can press it in, count to ten, and put SPF over it.</p>
        </div>
      </section>

      <section className="lp-solution">
        <div className="lp-section-copy">
          <p className="eyebrow">Solution</p>
          <h2>Clean, comfort-focused care. Made for sensitive needs.</h2>
          <p>
            Gentle formulas you can use every day, morning and evening,
            without worry. Designed for the long routine you actually keep.
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
            <h2>Three moments. Same three steps.</h2>
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
          <h2>The numbers from our 4-week use study.</h2>
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
          <h2>Same person, four weeks apart.</h2>
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
        <p className="eyebrow">Gentle care for sensitive needs</p>
        <h2>A softer way to care for your skin, every day.</h2>
        <p>Comfort-focused formulas for daily use. Gentle enough to keep up with long-term.</p>
        <Link className="primary-button lp-button" href={productHref}>
          Shop Now
        </Link>
        <p className="lp-cta-reassurance">
          30-day refund if it doesn&apos;t earn its spot. No reason needed.
        </p>
        <Link className="lp-secondary-link" href={productHref}>
          View product
        </Link>
        <div className="lp-micro-trust lp-final-trust">
          <span>Sensitive needs tested</span>
          <span>Comfort-Care Formula</span>
          <span>For frequent daily use</span>
        </div>
      </section>
    </main>
  );
}
