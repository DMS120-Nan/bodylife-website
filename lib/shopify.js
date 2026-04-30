import { products } from "./products";

const SHOPIFY_API_VERSION = "2025-10";
const SHOP_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

export function hasShopifyConfig() {
  return Boolean(SHOP_DOMAIN && STOREFRONT_ACCESS_TOKEN);
}

function getShopifyEndpoint() {
  return `https://${SHOP_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
}

async function shopifyFetch(query, variables = {}) {
  if (!hasShopifyConfig()) {
    return null;
  }

  const response = await fetch(getShopifyEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN
    },
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate: 60
    }
  });

  if (!response.ok) {
    throw new Error(`Shopify request failed: ${response.status}`);
  }

  const payload = await response.json();

  if (payload.errors) {
    throw new Error("Shopify returned GraphQL errors.");
  }

  return payload.data;
}

function mapShopifyProduct(product) {
  const firstVariant = product.variants.nodes[0];
  const price = firstVariant?.price?.amount
    ? Number(firstVariant.price.amount)
    : 0;
  const images = product.images.nodes.map((image) => ({
    altText: image.altText || product.title,
    url: image.url
  }));
  const variants = product.variants.nodes.map((variant) => {
    const variantPrice = variant.price?.amount ? Number(variant.price.amount) : price;

    return {
      name: variant.title,
      prices: {
        us: variantPrice,
        me: variantPrice
      },
      shopifyVariantId: variant.id
    };
  });

  return {
    slug: product.handle,
    name: product.title,
    category: product.productType || "Skincare",
    prices: {
      us: price,
      me: price
    },
    summary: product.description || product.title,
    description: product.description || product.title,
    images,
    variants,
    sizes: variants.map((variant) => variant.name),
    shopifyVariantId: firstVariant?.id
  };
}

export async function getProducts() {
  try {
    const data = await shopifyFetch(`
      query Products {
        products(first: 20) {
          nodes {
            handle
            title
            description
            productType
            images(first: 5) {
              nodes {
                url
                altText
              }
            }
            variants(first: 20) {
              nodes {
                id
                title
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `);

    if (!data) {
      return products;
    }

    return data.products.nodes.map(mapShopifyProduct);
  } catch {
    return products;
  }
}

export async function getProductByHandle(handle) {
  try {
    const data = await shopifyFetch(
      `
        query ProductByHandle($handle: String!) {
          product(handle: $handle) {
            handle
            title
            description
            productType
            images(first: 5) {
              nodes {
                url
                altText
              }
            }
            variants(first: 20) {
              nodes {
                id
                title
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      `,
      { handle }
    );

    if (!data) {
      return products.find((product) => product.slug === handle);
    }

    return data.product ? mapShopifyProduct(data.product) : null;
  } catch {
    return products.find((product) => product.slug === handle);
  }
}

export async function createCheckout(cartItems, region) {
  const lineItems = cartItems
    .filter((item) => item.shopifyVariantId)
    .map((item) => ({
      merchandiseId: item.shopifyVariantId,
      quantity: item.quantity
    }));

  if (!hasShopifyConfig() || lineItems.length === 0) {
    return {
      checkoutUrl: null,
      region: region.code,
      message: "Shopify checkout is not configured yet."
    };
  }

  const data = await shopifyFetch(
    `
      mutation CartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    {
      input: {
        lines: lineItems,
        buyerIdentity: {
          countryCode: region.code === "me" ? "AE" : "US"
        }
      }
    }
  );

  const userErrors = data.cartCreate.userErrors;

  if (userErrors.length > 0) {
    throw new Error(userErrors.map((error) => error.message).join(", "));
  }

  return data.cartCreate.cart;
}
