export const products = [
  {
    slug: "daily-hydration-gel",
    name: "Daily Hydration Gel",
    category: "Moisturizer",
    prices: {
      us: 39,
      me: 145
    },
    variants: [
      {
        name: "50 ml",
        prices: {
          us: 39,
          me: 145
        }
      },
      {
        name: "100 ml",
        prices: {
          us: 68,
          me: 249
        }
      }
    ],
    summary: "A water-light gel that hydrates and disappears.",
    description:
      "Our base layer. A water-light gel that sinks in fast, holds onto moisture, and leaves nothing tacky behind. Use it morning and evening as the second step of the routine.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
        altText: "Daily Hydration Gel moisturizer jar with skincare products"
      }
    ],
    sizes: ["50 ml", "100 ml"],
    keyBenefits: [
      "Absorbs in under 10 seconds.",
      "Holds hydration for a 12-hour day.",
      "Layers under SPF and makeup without pilling."
    ],
    howToUse: [
      "Take a pea-sized amount onto your fingertips.",
      "Press it into damp skin after cleansing, morning and evening.",
      "Follow with SPF in the morning, with the cream at night."
    ],
    keyIngredients: [
      { name: "Hyaluronic Acid", role: "Pulls moisture into the barrier." },
      { name: "Panthenol (B5)", role: "Calms redness and that tight feeling." },
      { name: "Glycerin", role: "Holds hydration through the day." }
    ],
    notIncluded: ["Fragrance", "Essential oils", "Drying alcohols"]
  },
  {
    slug: "smooth-renew-serum",
    name: "Smooth Renew Serum",
    category: "Serum",
    prices: {
      us: 54,
      me: 199
    },
    variants: [
      {
        name: "50 ml",
        prices: {
          us: 54,
          me: 199
        }
      },
      {
        name: "100 ml",
        prices: {
          us: 92,
          me: 339
        }
      }
    ],
    summary: "Niacinamide + PHA. Even skin, no sting.",
    description:
      "Step one of the routine. A daily serum that levels out skin tone and texture through niacinamide and gentle PHA. No retinol, no acid burn, no skip days.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=80",
        altText: "Smooth Renew Serum glass bottle for daily skincare"
      }
    ],
    sizes: ["50 ml", "100 ml"],
    keyBenefits: [
      "Levels out tone over 4 to 6 weeks.",
      "Refines texture without the acid sting.",
      "Use it daily, no skip days needed."
    ],
    howToUse: [
      "Press 2 to 3 drops onto damp, clean skin.",
      "Pat in with fingertips before the gel.",
      "Use morning, evening, or both."
    ],
    keyIngredients: [
      { name: "Niacinamide 4%", role: "Evens tone and softens the look of pores." },
      { name: "PHA (gluconolactone)", role: "Resurfaces without the sting of AHA." },
      { name: "Centella Asiatica", role: "Calms reactive, sensitive skin." }
    ],
    notIncluded: ["Fragrance", "Drying alcohols", "Sulfates"]
  },
  {
    slug: "daily-routine-bundle",
    name: "Daily Routine Bundle",
    category: "Bundle",
    isBundle: true,
    prices: {
      us: 137,
      me: 499
    },
    variants: [
      {
        name: "50 ml set",
        prices: {
          us: 137,
          me: 499
        }
      }
    ],
    summary: "The whole three-step routine. 20% off.",
    description:
      "Serum, gel, cream. Layer them in that order morning and evening. The bundle saves you 20% versus buying each one alone.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",
        altText: "Bodylife daily routine bundle of three skincare products"
      }
    ],
    sizes: ["50 ml set"],
    bundleSavings: {
      us: 34,
      me: 134
    },
    bundleContents: [
      {
        slug: "smooth-renew-serum",
        name: "Smooth Renew Serum",
        role: "Step 1. Levels out tone and texture."
      },
      {
        slug: "daily-hydration-gel",
        name: "Daily Hydration Gel",
        role: "Step 2. Hydrates and disappears."
      },
      {
        slug: "barrier-comfort-cream",
        name: "Barrier Comfort Cream",
        role: "Step 3. Seals in moisture overnight."
      }
    ],
    keyBenefits: [
      "Three steps. Same routine every day.",
      "Layers without pilling or doubling up.",
      "20% cheaper than buying each one separately."
    ]
  },
  {
    slug: "barrier-comfort-cream",
    name: "Barrier Comfort Cream",
    category: "Recovery cream",
    prices: {
      us: 78,
      me: 289
    },
    variants: [
      {
        name: "50 ml",
        prices: {
          us: 78,
          me: 289
        }
      },
      {
        name: "100 ml",
        prices: {
          us: 132,
          me: 489
        }
      }
    ],
    summary: "Ceramide cream. The lock-it-in step.",
    description:
      "Step three. A ceramide-rich cream that locks moisture in overnight and reinforces the skin barrier. Lighter than it looks, comfortable on dry and reactive skin.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=80",
        altText: "Barrier Comfort Cream jar for nourishing skincare routine"
      }
    ],
    sizes: ["50 ml", "100 ml"],
    keyBenefits: [
      "Reinforces the skin barrier overnight.",
      "Sits comfortably on dry and reactive skin.",
      "Calms the look of dryness over 2 to 4 weeks."
    ],
    howToUse: [
      "Apply last, as the seal on your evening routine.",
      "Warm a fingertip of cream between your hands.",
      "Press across the face, neck, and any dry patches."
    ],
    keyIngredients: [
      { name: "Ceramides NP + AP", role: "Rebuild the skin's lipid barrier." },
      { name: "Squalane", role: "Locks in moisture without the heavy feel." },
      { name: "Shea butter", role: "Comforts dry, tight-feeling skin." }
    ],
    notIncluded: ["Fragrance", "Essential oils", "Mineral oil"]
  }
];
