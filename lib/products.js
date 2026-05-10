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
    summary: "Lightweight hydration for daily barrier support.",
    description:
      "Daily Hydration Gel supports hydrated, comfortable skin with a lightweight finish for morning and evening use.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80",
        altText: "Daily Hydration Gel moisturizer jar with skincare products"
      }
    ],
    sizes: ["50 ml", "100 ml"],
    keyBenefits: [
      "Lightweight gel that absorbs in seconds",
      "Supports a healthy skin barrier",
      "Layers cleanly under SPF and makeup"
    ],
    howToUse: [
      "After cleansing, take a pea-sized amount.",
      "Press gently into damp skin morning and evening.",
      "Follow with SPF in the morning."
    ],
    keyIngredients: [
      { name: "Hyaluronic Acid", role: "Pulls moisture into the skin barrier" },
      { name: "Panthenol (B5)", role: "Calms the look of redness and tightness" },
      { name: "Glycerin", role: "Holds hydration through the day" }
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
    summary: "Daily serum care for smoother-looking texture over time.",
    description:
      "Smooth Renew Serum supports a smoother-looking surface through consistent daily use.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=80",
        altText: "Smooth Renew Serum glass bottle for daily skincare"
      }
    ],
    sizes: ["50 ml", "100 ml"],
    keyBenefits: [
      "Smoother-looking texture with consistent use",
      "Even, calmer-looking surface",
      "Comfortable for sensitive skin"
    ],
    howToUse: [
      "After cleansing, apply 2–3 drops to the face.",
      "Press in with fingertips before moisturizer.",
      "Use morning or evening, or both."
    ],
    keyIngredients: [
      { name: "Niacinamide 4%", role: "Supports a more even-looking surface" },
      { name: "PHA (gluconolactone)", role: "Gentle resurfacing without sting" },
      { name: "Centella Asiatica", role: "Calms reactive, sensitive skin" }
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
    summary: "All three daily essentials. Save 20%.",
    description:
      "The full daily routine: gel, serum, and cream. Designed to layer cleanly and used together morning and evening — without doubling up.",
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
        role: "Step 1 · Smoother-looking texture"
      },
      {
        slug: "daily-hydration-gel",
        name: "Daily Hydration Gel",
        role: "Step 2 · Lightweight hydration"
      },
      {
        slug: "barrier-comfort-cream",
        name: "Barrier Comfort Cream",
        role: "Step 3 · Sealing-in moisture"
      }
    ],
    keyBenefits: [
      "The full daily routine in one box",
      "Designed to layer cleanly without doubling up",
      "Save 20% versus buying separately"
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
    summary: "Richer moisture for barrier comfort.",
    description:
      "Barrier Comfort Cream helps seal in moisture and support skin barrier comfort, especially as the final step in an evening routine.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=80",
        altText: "Barrier Comfort Cream jar for nourishing skincare routine"
      }
    ],
    sizes: ["50 ml", "100 ml"],
    keyBenefits: [
      "Rich, sealing-in moisture for night use",
      "Comfortable on dry, reactive skin",
      "Calms the look of dryness over time"
    ],
    howToUse: [
      "Apply as the final step in your evening routine.",
      "Warm a small amount between fingertips.",
      "Press gently across face, neck, and any dry areas."
    ],
    keyIngredients: [
      { name: "Ceramides NP + AP", role: "Reinforce the skin's lipid barrier" },
      { name: "Squalane", role: "Locks in moisture without heaviness" },
      { name: "Shea butter", role: "Comforts dry, tight-feeling skin" }
    ],
    notIncluded: ["Fragrance", "Essential oils", "Mineral oil"]
  }
];
