"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatPrice } from "../lib/regions";
import { AddToCartButton } from "./AddToCartButton";
import { ClinicalCredibilitySection } from "./ClinicalCredibilitySection";
import { ClinicalProofSection } from "./ClinicalProofSection";
import { HomeTrustSection } from "./HomeTrustSection";
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
          <div className="product-thumbnail-row" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="product-detail-content">
          <Link className="back-link" href={`/${region.code}/products`}>
            Back to products
          </Link>
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-benefit-headline">
            {region.pdp.headlinePrefix}
          </p>
          <p className="product-price">{selectedPrice}</p>
          <p className="product-description">{product.description}</p>
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
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
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
        </div>
      </section>

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
