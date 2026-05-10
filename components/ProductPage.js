"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "../lib/regions";
import { AddToCartButton } from "./AddToCartButton";
import { CertificationBadges } from "./CertificationBadges";
import { ClinicalCredibilitySection } from "./ClinicalCredibilitySection";
import { ClinicalProofSection } from "./ClinicalProofSection";
import { HomeTrustSection } from "./HomeTrustSection";
import { ProductRating } from "./ProductRating";
import { ProductViewTracker } from "./ProductViewTracker";
import { ReviewsSection } from "./ReviewsSection";
import { TextureSection } from "./TextureSection";
import { TrustBadges } from "./TrustBadges";
import { WhyThisWorksSection } from "./WhyThisWorksSection";

export function ProductPage({ product, region }) {
  const featuredImage = product.images?.[0];
  const variants = product.sizes?.length ? product.sizes : ["Default"];
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);
  const selectedPrice = formatPrice(product, region, selectedVariant);

  return (
    <>
      <ProductViewTracker product={product} region={region} />
      <section className="product-detail">
        <div className="product-detail-media">
          <div
            className="product-detail-image"
          >
            {featuredImage ? (
              <Image
                alt={featuredImage.altText || product.name}
                className="product-photo"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
                src={featuredImage.url}
              />
            ) : null}
            <span>{product.category}</span>
          </div>
        </div>
        <div className="product-detail-content">
          <Link className="back-link" href={`/${region.code}/products`}>
            Back to products
          </Link>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <ProductRating reviews={region.pdp.reviews} className="product-detail-rating" />
          <p className="product-benefit-headline">
            {region.pdp.headlinePrefix}
          </p>
          <p className="product-price">{selectedPrice}</p>
          <p className="product-description">{product.description}</p>

          {product.keyBenefits ? (
            <ul className="product-benefit-list" aria-label="Key benefits">
              {product.keyBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          ) : null}
          <div className="option-row">
            <span>Size</span>
            <div className="size-list">
              {variants.map((size) => (
                <button
                  aria-pressed={selectedVariant === size}
                  className={selectedVariant === size ? "is-active" : ""}
                  key={size}
                  onClick={() => setSelectedVariant(size)}
                  type="button"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="option-row">
            <span>Quantity</span>
            <div className="quantity-control">
              <button
                aria-label="Decrease quantity"
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                <span aria-hidden="true">−</span>
              </button>
              <span aria-live="polite">{quantity}</span>
              <button
                aria-label="Increase quantity"
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <span aria-hidden="true">+</span>
              </button>
            </div>
          </div>
          <AddToCartButton
            product={product}
            region={region}
            variant={selectedVariant}
            quantity={quantity}
          />
          <p className="product-cta-reassurance">
            Gentle enough for daily use. Lightweight, no heavy residue.
          </p>
          <TrustBadges />
          <div className="product-audience-tags">
            <p className="product-audience-title">Suitable for</p>
            <div className="product-audience-list">
              <span className="product-audience-tag">Sensitive skin</span>
              <span className="product-audience-tag">Pregnancy-safe</span>
              <span className="product-audience-tag">All ages</span>
              <span className="product-audience-tag">Face & body</span>
              <span className="product-audience-tag">Eczema & rosacea</span>
            </div>
          </div>
          <CertificationBadges />
        </div>
      </section>

      {product.keyIngredients || product.howToUse || product.notIncluded ? (
        <section className="section product-info-section">
          <div className="product-info-grid">
            {product.keyIngredients ? (
              <div className="product-info-block">
                <p className="eyebrow">Key ingredients</p>
                <ul className="product-info-list">
                  {product.keyIngredients.map((ing) => (
                    <li key={ing.name}>
                      <strong>{ing.name}</strong>
                      <span>{ing.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {product.howToUse ? (
              <div className="product-info-block">
                <p className="eyebrow">How to use</p>
                <ol className="product-info-steps">
                  {product.howToUse.map((step, index) => (
                    <li key={step}>
                      <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
            {product.notIncluded ? (
              <div className="product-info-block product-info-block-narrow">
                <p className="eyebrow">What we left out</p>
                <ul className="product-info-pills">
                  {product.notIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <TextureSection />

      <WhyThisWorksSection />

      <ClinicalProofSection />

      <HomeTrustSection />

      <ClinicalCredibilitySection />

      <ReviewsSection region={region} />

      <section className="section faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Clinical notes for daily use.</h2>
        </div>
        <div className="faq-list">
          {region.pdp.faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mobile-cart-bar">
        <div>
          <span>{product.name}</span>
          <strong>{selectedPrice}</strong>
        </div>
        <AddToCartButton
          className="primary-button mobile-cart-button"
          product={product}
          region={region}
          variant={selectedVariant}
          quantity={quantity}
        />
      </div>
    </>
  );
}
