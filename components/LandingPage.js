import Image from "next/image";
import Link from "next/link";

const problemItems = [
  {
    title: "Heavy creams pool on the skin.",
    detail: "You can feel them all morning. They show up in photos. They ball under makeup."
  },
  {
    title: "Harsh formulas start the irritation cycle.",
    detail: "Sting on Tuesday, red on Wednesday, breakout on Friday. You abandon by Sunday."
  },
  {
    title: "Ten-step routines don't survive a long week.",
    detail: "Most people skip three steps by day five. The routine that works is the one you finish."
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
    title: "Gel that sits like water.",
    detail: "Absorbs in seconds. Nothing tacky once it goes in. Layers under SPF or makeup without pilling."
  },
  {
    title: "Sensitive skin sets the bar.",
    detail: "We test every batch with people who flush and sting. If it passes for them, it works for the rest of us."
  },
  {
    title: "A routine you finish.",
    detail: "Three steps in the morning. Three at night. Same routine for years, not weeks."
  }
];

const trustItems = [
  "Dermatologist recommended",
  "Sensitive skin tested",
  "Vegan, never tested on animals"
];

const proofTrustLines = [
  "Made with chemists who specialise in barrier care.",
  "Tested with sensitive-skin users for 4 weeks before shipping.",
  "Light enough for daily use. Strong enough that it earns its spot."
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
            <p className="eyebrow">Daily skin comfort</p>
            <h1>Most skincare feels heavy by lunch. Ours doesn&apos;t.</h1>
            <p>
              A gel that sits like water, made for sensitive skin and the
              long routine you keep up with.
            </p>
            <Link className="primary-button lp-button" href={productHref}>
              Shop Now
            </Link>
            <div className="lp-micro-trust">
              <span>Sensitive skin tested</span>
              <span>Absorbs in seconds</span>
              <span>Dermatologist recommended</span>
            </div>
            <p className="lp-social-signal">
              In the morning and evening routine of sensitive-skin users worldwide.
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
          <h2>Why most skincare quietly fails you.</h2>
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
          <h2>Three formulas. One routine. Less to think about.</h2>
          <p>
            We make a serum, a gel, and a cream. You layer them in that
            order morning and evening. That&apos;s the whole routine.
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
        <p className="eyebrow">Daily care, simplified</p>
        <h2>Start the routine your skin keeps showing up for.</h2>
        <p>Three formulas. Layer them morning and evening. That&apos;s it.</p>
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
          <span>Sensitive skin tested</span>
          <span>Absorbs in seconds</span>
          <span>Dermatologist recommended</span>
        </div>
      </section>
    </main>
  );
}
