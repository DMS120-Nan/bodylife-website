import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { BrandSignatureSection } from "./BrandSignatureSection";
import { CertificationBadges } from "./CertificationBadges";
import { ClinicalCredibilitySection } from "./ClinicalCredibilitySection";
import { ClinicalProofSection } from "./ClinicalProofSection";
import { HomeTrustSection } from "./HomeTrustSection";
import { ProductGrid } from "./ProductGrid";
import { ReviewsSection } from "./ReviewsSection";
import { TextureSection } from "./TextureSection";
import { InlineTrustLabels, TrustBadges } from "./TrustBadges";

export function HomePage({ region }) {
  const heroImage = region.home.heroImage;

  return (
    <>
      <section className="hero">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-[620px]">
            <p className="mb-6 text-[0.76rem] font-semibold uppercase tracking-[0.32em] text-bodylife-muted">
              {region.home.eyebrow}
            </p>
            <h1 className="max-w-[720px] text-[clamp(2.25rem,6.2vw,4rem)] font-semibold leading-[1.12] text-bodylife-ink">
              {region.home.title}
            </h1>
            <p className="mt-7 max-w-[520px] text-[1rem] leading-8 text-bodylife-muted">
              {region.home.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <Link className="inline-flex min-h-[54px] min-w-[150px] items-center justify-center rounded-md bg-bodylife-green px-7 text-[0.96rem] font-semibold text-white transition hover:opacity-90" href={`/${region.code}/products`}>
                Shop Now
              </Link>
              <a className="inline-flex min-h-[40px] items-center border-b border-current text-[0.96rem] font-semibold text-bodylife-ink transition hover:text-bodylife-green" href="#results">
                Learn More
              </a>
            </div>
            <InlineTrustLabels className="mt-7" />
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-bodylife-cream sm:min-h-[520px] lg:min-h-[660px]">
            {heroImage ? (
              <Image
                alt={heroImage.altText}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 54vw"
                src={heroImage.url}
              />
            ) : null}
          </div>
        </div>
      </section>

      <HomeTrustSection />

      <ClinicalCredibilitySection />

      <TextureSection />

      <ClinicalProofSection />

      <CertificationBadges />

      <section className="section benefit-section">
        <div className="section-heading">
          <p className="eyebrow">Daily foundation</p>
          <h2>Simple care for the skin barrier.</h2>
        </div>
        <div className="benefit-grid">
          {region.home.benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <span aria-hidden="true" />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Featured products</p>
          <h2>Focused care for daily use.</h2>
        </div>
        <ProductGrid region={region} />
        <div className="section-cta">
          <Link className="primary-button" href={`/${region.code}/products`}>
            View all products
          </Link>
        </div>
      </section>

      <section className="review-section">
        <div className="review-content derm-content">
          <div className="derm-layout">
            <div className="derm-text">
              <p className="derm-badge">Dermatologist Recommended</p>
              <blockquote>&quot;For patients with sensitive or reactive skin, I always recommend starting with gentle, barrier-supporting formulas. Products like these — free from harsh irritants and focused on hydration — are exactly what I suggest for building a sustainable daily routine.&quot;</blockquote>
              <div className="derm-author">
                <Image
                  alt="Dr. Sarah Mitchell"
                  src="/images/dr-avatar.png"
                  width={56}
                  height={56}
                  className="derm-avatar"
                />
                <div>
                  <strong>Dr. Sarah Mitchell</strong>
                  <span>Board-Certified Dermatologist</span>
                </div>
              </div>
            </div>
          </div>
          <TrustBadges tone="dark" />
        </div>
      </section>

      <ReviewsSection region={region} />

      <section className="section result-section" id="results">
        <div className="result-copy">
          <p className="eyebrow">Consistent care</p>
          <h2>{region.home.resultTitle}</h2>
          <p>{region.home.resultDescription}</p>
          <Link className="primary-button" href={`/${region.code}/products`}>
            Shop daily care
          </Link>
        </div>
        <div className="result-comparison-image" aria-label="Skincare result comparison image">
          <Image
            alt="Consistent skincare use comparison"
            className="result-photo"
            fill
            sizes="(max-width: 700px) 100vw, 42vw"
            src="/images/results-comparison.png"
          />
        </div>
      </section>

      <section className="section ba-section">
        <div className="section-heading">
          <p className="eyebrow">Real results</p>
          <h2>See the difference.</h2>
        </div>
        <BeforeAfterSlider />
      </section>

      <BrandSignatureSection />
    </>
  );
}
