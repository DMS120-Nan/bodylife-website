import { redirect } from "next/navigation";

export const coreMessage =
  "Gentle care for sensitive needs. Clean formulas for long-term daily use.";

export const regions = [
  {
    code: "us",
    label: "US",
    name: "BodyLife US",
    locale: "en-US",
    currency: "USD",
    shipping: {
      freeOver: 40,
      flatRate: 4.99,
      delivery: "3–7 business days"
    },
    subscription: {
      discount: 0.15,
      intervalLabel: "Every 30 days",
      perks: ["15% off every order", "Skip or cancel anytime", "Free shipping always"]
    },
    home: {
      eyebrow: "Skin · Body · Hair Care",
      title: "Gentle care for sensitive needs.",
      description:
        "Bodylife creates clean, comfort-focused care for everyday skin, body, and hair routines — made for delicate areas, post-hair removal comfort, and skin or scalp that needs extra care.",
      cta: "Shop skincare",
      heroImage: {
        url: "/images/hero.png",
        altText: "Premium daily hydration skincare gel"
      },
      benefits: [
        {
          title: "Comfort first",
          description: "Every formula is designed to feel gentle and comfortable — because daily care should never feel harsh."
        },
        {
          title: "For frequent use",
          description: "Light and non-irritating, so you can use it every day without worry."
        },
        {
          title: "Sensitive needs friendly",
          description: "Made for delicate skin, special areas, and people who need to be careful about what they put on their skin."
        }
      ],
      review:
        "It feels gentle and comfortable every time. My skin feels calm and cared for.",
      resultTitle: "Comfortable skin you can maintain, every day.",
      resultDescription:
        "Use it consistently and the difference builds. Softer, calmer skin that feels genuinely looked after.",
      resultImages: {
        before: {
          url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
          altText: "Before routine skincare result placeholder portrait"
        },
        after: {
          url: "https://images.unsplash.com/photo-1598300188904-6287d52746ad?auto=format&fit=crop&w=900&q=80",
          altText: "After routine skincare result placeholder portrait"
        }
      }
    },
    pdp: {
      headlinePrefix: coreMessage,
      shipping: "Fast US shipping",
      trustSignals: ["Gentle daily use", "Secure checkout", "Fast US shipping"],
      reviews: [
        {
          name: "Maya",
          avatar: "/images/review-maya.png",
          region: "United States",
          rating: 5,
          text:
            "The texture feels light and comfortable. It fits into my morning routine without feeling like extra work."
        },
        {
          name: "Jordan",
          avatar: "/images/review-jordan.png",
          region: "United States",
          rating: 5,
          text:
            "My skin feels hydrated through the day, especially when I use it consistently."
        },
        {
          name: "Elena",
          avatar: "/images/review-elena.png",
          region: "United States",
          rating: 4,
          text:
            "Simple, gentle, and easy to keep using. I like that it layers well under sunscreen."
        },
        {
          name: "Sophia",
          region: "United States",
          rating: 5,
          avatar: "/images/review-sophia.png",
          text:
            "I've tried so many products and this is the first one that doesn't irritate my skin. It just feels calm and balanced."
        },
        {
          name: "Marcus",
          region: "United States",
          rating: 5,
          avatar: "/images/review-marcus.png",
          text:
            "Not greasy at all. I use it every morning before work and my skin stays comfortable all day."
        },
        {
          name: "Lily",
          region: "United States",
          rating: 4,
          avatar: "/images/review-lily.png",
          text:
            "Love how minimal the routine is. No complicated steps, just one product and my skin looks better week after week."
        }
      ],
      faqs: [
        {
          question: "Can I use this every day?",
          answer:
            "Yes. BodyLife skincare is designed for daily use and long-term skin comfort."
        },
        {
          question: "When should I apply it?",
          answer:
            "Use it after cleansing. Serums go before moisturizer, while creams work well as the final step."
        },
        {
          question: "Is checkout available?",
          answer:
            "Cart functionality is ready, but Shopify checkout has not been integrated yet."
        }
      ]
    },
    footerText:
      "Gentle care for sensitive needs — clean, comfort-focused formulas for long-term daily use."
  },
  {
    code: "me",
    label: "Middle East",
    name: "BodyLife Middle East",
    locale: "en-AE",
    currency: "AED",
    shipping: {
      freeOver: 150,
      flatRate: 36,
      delivery: "7–14 business days"
    },
    subscription: {
      discount: 0.15,
      intervalLabel: "Every 30 days",
      perks: ["15% off every order", "Skip or cancel anytime", "Free regional shipping"]
    },
    home: {
      eyebrow: "Skin · Body · Hair Care",
      title: "Gentle care for sensitive needs.",
      description:
        "Bodylife creates clean, comfort-focused care for everyday skin, body, and hair routines — made for delicate areas, post-hair removal comfort, and skin or scalp that needs extra care.",
      cta: "Shop Middle East skincare",
      heroImage: {
        url: "/images/hero.png",
        altText: "Premium daily hydration skincare gel"
      },
      benefits: [
        {
          title: "Comfort first",
          description: "Every formula is designed to feel gentle — because daily care should never feel like a compromise."
        },
        {
          title: "For frequent use",
          description: "Light enough for daily use in any climate, without irritation or heaviness."
        },
        {
          title: "Sensitive needs friendly",
          description: "Made for delicate skin, special areas, and people who need to be careful about what they use."
        }
      ],
      review:
        "It feels gentle and comfortable every time. My skin feels calm and cared for, even on warm days.",
      resultTitle: "Comfortable skin you can maintain, every day.",
      resultDescription:
        "Use it consistently and the difference builds. Softer, calmer skin that feels genuinely looked after.",
      resultImages: {
        before: {
          url: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=900&q=80",
          altText: "Before daily skincare routine placeholder portrait"
        },
        after: {
          url: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=80",
          altText: "After daily skincare routine placeholder portrait"
        }
      }
    },
    pdp: {
      headlinePrefix: coreMessage,
      shipping: "Fast regional shipping",
      trustSignals: [
        "Gentle daily use",
        "Secure checkout",
        "Fast regional shipping"
      ],
      reviews: [
        {
          name: "Aisha",
          avatar: "/images/review-aisha.png",
          region: "Middle East",
          rating: 5,
          text:
            "It feels comfortable in warm weather and layers easily with the rest of my routine."
        },
        {
          name: "Omar",
          avatar: "/images/review-omar.png",
          region: "Middle East",
          rating: 5,
          text:
            "The routine is simple and comfortable enough to use consistently, even on busy mornings."
        },
        {
          name: "Noura",
          avatar: "/images/review-noura.png",
          region: "Middle East",
          rating: 4,
          text:
            "I like that it does not feel heavy. My skin feels comfortable after evening use."
        },
        {
          name: "Fatima",
          region: "Middle East",
          rating: 5,
          avatar: "/images/review-fatima.png",
          text:
            "Perfect for the heat. My skin feels fresh and comfortable even in the middle of the afternoon."
        },
        {
          name: "Khalid",
          region: "Middle East",
          rating: 5,
          avatar: "/images/review-khalid.png",
          text:
            "I was skeptical at first but after two weeks my skin feels noticeably smoother. Very easy to use."
        },
        {
          name: "Layla",
          region: "Middle East",
          rating: 4,
          avatar: "/images/review-layla.png",
          text:
            "Light enough to wear under makeup every day. My skin feels better since I started using it consistently."
        }
      ],
      faqs: [
        {
          question: "Is it suitable for warm climates?",
          answer:
            "Yes. The regional edit focuses on lightweight textures and daily skin comfort."
        },
        {
          question: "How often should I use it?",
          answer:
            "Use it once or twice daily depending on your routine and how your skin feels."
        },
        {
          question: "Is checkout available?",
          answer:
            "Cart functionality is ready, but Shopify checkout has not been integrated yet."
        }
      ]
    },
    footerText:
      "Gentle care for sensitive needs — comfort-focused formulas designed for long-term daily use."
  }
];

export function getRegion(code) {
  return regions.find((region) => region.code === code);
}

export function isValidRegion(code) {
  return Boolean(getRegion(code));
}

export function getValidatedRegion(code) {
  const region = getRegion(code);

  if (!region) {
    redirect("/us");
  }

  return region;
}

export function getRegionPath(pathname, targetRegionCode) {
  const targetRegion = getRegion(targetRegionCode);

  if (!targetRegion) {
    return "/us";
  }

  const segments = pathname.split("/").filter(Boolean);
  const [, ...routeSegments] = segments;
  const suffix = routeSegments.length > 0 ? `/${routeSegments.join("/")}` : "";

  return `/${targetRegion.code}${suffix}`;
}

export function getProductVariant(product, variantName) {
  return product.variants?.find((variant) => variant.name === variantName);
}

export function getProductPrice(product, region, variantName) {
  const variant = getProductVariant(product, variantName);

  return (
    variant?.prices?.[region.code] ??
    variant?.prices?.us ??
    product.prices[region.code] ??
    product.prices.us
  );
}

export function formatPrice(product, region, variantName) {
  const price = getProductPrice(product, region, variantName);

  return new Intl.NumberFormat(region.locale, {
    style: "currency",
    currency: region.currency,
    maximumFractionDigits: 0
  }).format(price);
}

export function getSubscriptionPrice(product, region, variantName) {
  const base = getProductPrice(product, region, variantName);
  const discount = region.subscription?.discount ?? 0;
  return Math.round(base * (1 - discount) * 100) / 100;
}

export function formatSubscriptionPrice(product, region, variantName) {
  const price = getSubscriptionPrice(product, region, variantName);
  return new Intl.NumberFormat(region.locale, {
    style: "currency",
    currency: region.currency,
    maximumFractionDigits: 0
  }).format(price);
}
