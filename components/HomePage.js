import Image from "next/image";
import Link from "next/link";
import { AudienceSection } from "./AudienceSection";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { BrandSignatureSection } from "./BrandSignatureSection";
import { BundleHighlight } from "./BundleHighlight";
import { CertificationBadges } from "./CertificationBadges";
import { ClinicalCredibilitySection } from "./ClinicalCredibilitySection";
import { ClinicalProofSection } from "./ClinicalProofSection";
import { HomeFaqSection } from "./HomeFaqSection";
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
          <div className="hero-copy max-w-[620px]">
            <p className="hero-eyebrow mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-bodylife-muted">
              {region.home.eyebrow}
            </p>
            <h1 className="hero-title max-w-[720px] text-[clamp(2.25rem,6.4vw,4.25rem)] font-semibold leading-[1.08] text-bodylife-ink">
              {region.home.title}
            </h1>
            <p className="hero-lead mt-7 max-w-[520px] text-[1.04rem] leading-[1.78] text-bodylife-muted">
              {region.home.description}
            </p>
            <div className="hero-actions mt-10 flex flex-wrap items-center gap-7">
              <Link className="hero-cta-primary inline-flex min-h-[54px] min-w-[150px] items-center justify-center rounded-md bg-bodylife-green px-7 text-[0.96rem] font-semibold text-white" href={`/${region.code}/products`}>
                Shop Now
              </Link>
              <a className="hero-cta-secondary inline-flex min-h-[40px] items-center border-b border-current pb-[2px] text-[0.96rem] font-semibold text-bodylife-ink" href="#results">
                Learn More
              </a>
            </div>
            <InlineTrustLabels className="mt-8" />
          </div>
          <div className="hero-panel relative min-h-[420px] overflow-hidden rounded-[14px] bg-bodylife-cream sm:min-h-[520px] lg:min-h-[660px]">
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

      <div className="trust-ticker">
        <div className="trust-ticker-track">
          <span>Gentle Care</span>
          <span>·</span>
          <span>Sensitive Needs</span>
          <span>·</span>
          <span>Comfort-Care Formula</span>
          <span>·</span>
          <span>Skin That Needs Extra Care</span>
          <span>·</span>
          <span>Fragrance Free</span>
          <span>·</span>
          <span>For Frequent Use</span>
          <span>·</span>
          <span>Long-Term Daily Care</span>
        </div>
      </div>

      <HomeTrustSection />

      <ClinicalCredibilitySection />

      <TextureSection />

      <ClinicalProofSection />

      <section className="diversity-banner">
        <Image
          alt="Bodylife is for every skin type and every person"
          src="/images/diversity-banner.png"
          width={1400}
          height={400}
          className="diversity-banner-img"
          sizes="100vw"
          priority
        />
      </section>

      <CertificationBadges />

      <section className="section benefit-section">
        <div className="section-heading">
          <p className="eyebrow">Daily comfort</p>
          <h2>A gentler way to care for your body, every day.</h2>
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
          <p className="eyebrow">The routine</p>
          <h2>Clean, comfort-focused care. Made for sensitive needs.</h2>
        </div>
        <ProductGrid region={region} />
        <div className="section-cta">
          <Link className="primary-button" href={`/${region.code}/products`}>
            View all products
          </Link>
        </div>
      </section>

      <BundleHighlight region={region} />

      <section className="review-section">
        <div className="review-content derm-content">
          <div className="derm-layout">
            <div className="derm-photo">
              <Image
                alt="Dr. Sarah Mitchell"
                src="/images/dr-avatar.png"
                width={400}
                height={400}
                className="derm-photo-img"
              />
            </div>
            <div className="derm-text">
              <p className="derm-badge">Dermatologist Recommended</p>
              <blockquote>&quot;I always tell people with sensitive or reactive skin the same thing: keep it simple, keep it gentle, and find formulas you can stick with long-term. Bodylife checks all three.&quot;</blockquote>
              <div className="derm-author-info">
                <strong>Dr. Sarah Mitchell</strong>
                <span>Board-Certified Dermatologist</span>
              </div>
            </div>
          </div>
          <TrustBadges tone="dark" />
        </div>
      </section>

      <ReviewsSection region={region} />

      <AudienceSection />

      <section className="brand-positioning-section">
        <div className="brand-positioning-inner">
          <p className="brand-positioning-eyebrow">Who we are</p>
          <h2 className="brand-positioning-headline">
            Gentle care for sensitive needs.
          </h2>
          <p className="brand-positioning-body">
            Bodylife creates clean, comfort-focused care for everyday skin, body, and hair routines — made for delicate areas, post-hair removal comfort, and skin or scalp that needs extra care.
          </p>
          <p className="brand-positioning-sub">
            We are not about harsh formulas or aggressive results. Bodylife is about giving people a safer, softer, and more comfortable way to care for themselves — every day.
          </p>
          <Link className="brand-positioning-cta" href={`/${region.code}/about`}>
            Our story
          </Link>
        </div>
      </section>

      <section className="section result-section" id="results">
        <div className="result-copy">
          <p className="eyebrow">Long-term daily care</p>
          <h2>{region.home.resultTitle}</h2>
          <p>{region.home.resultDescription}</p>
          <Link className="primary-button" href={`/${region.code}/products`}>
            Explore the routine
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
          <h2>Same person, four weeks apart.</h2>
        </div>
        <BeforeAfterSlider />
      </section>

      <HomeFaqSection />

      <BrandSignatureSection />
    </>
  );
}
