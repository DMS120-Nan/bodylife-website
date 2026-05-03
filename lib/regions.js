import { redirect } from "next/navigation";

export const coreMessage =
  "Gentle, science-backed skincare for long-term skin health.";

export const regions = [
  {
    code: "us",
    label: "US",
    name: "BodyLife US",
    locale: "en-US",
    currency: "USD",
    home: {
      eyebrow: "DAILY SKINCARE ESSENTIALS",
      title: "Gentle skincare, guided by skin science.",
      description:
        "Daily formulas designed to support the skin barrier and long-term skin health.",
      cta: "Shop skincare",
      heroImage: {
        url: "/images/hero.png",
        altText: "Premium daily hydration skincare gel"
      },
      benefits: [
        {
          title: "Barrier-first hydration",
          description: "Hydration designed to support a comfortable skin barrier."
        },
        {
          title: "Consistent daily use",
          description: "Lightweight textures made for steady morning and evening care."
        },
        {
          title: "Focused formulas",
          description: "Simple products made around skin health, not excess."
        }
      ],
      review:
        "The routine feels simple and consistent. My skin feels hydrated without heaviness.",
      resultTitle: "Skin support over time",
      resultDescription:
        "Consistent care helps support hydrated, comfortable skin day after day.",
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
      "BodyLife US. Gentle, science-backed skincare for long-term skin health."
  },
  {
    code: "me",
    label: "Middle East",
    name: "BodyLife Middle East",
    locale: "en-AE",
    currency: "AED",
    home: {
      eyebrow: "DAILY SKINCARE ESSENTIALS",
      title: "Gentle skincare, guided by skin science.",
      description:
        "Daily formulas designed to support the skin barrier and long-term skin health.",
      cta: "Shop Middle East skincare",
      heroImage: {
        url: "/images/hero.png",
        altText: "Premium daily hydration skincare gel"
      },
      benefits: [
        {
          title: "Barrier-first hydration",
          description: "Hydration designed to support comfort in warm, active climates."
        },
        {
          title: "Consistent daily use",
          description: "Lightweight textures made for steady morning and evening care."
        },
        {
          title: "Focused formulas",
          description: "Simple products made around skin health, not excess."
        }
      ],
      review:
        "It feels lightweight and steady in my routine. My skin feels comfortable with daily use.",
      resultTitle: "Skin support over time",
      resultDescription:
        "Consistent care helps support hydrated, comfortable skin day after day.",
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
      "BodyLife Middle East. Gentle, science-backed skincare for long-term skin health."
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
