# Bodylife – Production Setup Guide

This document explains the technical wiring an operator needs to do to take
the site from "code is ready" to "actually selling."

> Audience: anyone owning the launch — founder, ops, dev, or marketing partner.

---

## 1. Hosting & Domain

The site auto-deploys to Vercel when `main` is pushed. To finalise:

1. Buy your production domain (e.g. `bodylifeofficial.com`).
2. In **Vercel → Project → Settings → Domains**, add the domain and follow the DNS
   instructions (usually 1 A record + 1 CNAME).
3. Set `NEXT_PUBLIC_SITE_URL=https://www.bodylifeofficial.com` (or whichever)
   in **Vercel → Settings → Environment Variables → Production**.
4. Trigger a redeploy so canonical URLs and sitemap regenerate with the real
   domain.

---

## 2. Environment Variables

Add these in **Vercel → Settings → Environment Variables** (Production scope).
Use the same values for Preview if you want previews to behave like production.

| Variable                            | Value                                              | Required          |
| ----------------------------------- | -------------------------------------------------- | ----------------- |
| `NEXT_PUBLIC_SITE_URL`              | `https://www.your-domain.com`                      | Yes               |
| `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN`  | `your-shop.myshopify.com`                          | Yes (for orders)  |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN`   | from Shopify custom app                            | Yes (for orders)  |
| `NEXT_PUBLIC_GA_ID`                 | `G-XXXXXXXXXX`                                     | Recommended       |
| `NEXT_PUBLIC_META_PIXEL_ID`         | `000000000000000`                                  | Recommended       |
| `MAKE_WEBHOOK_URL`                  | `https://hook.make.com/<id>`                       | Required for forms |

After changes, redeploy from Vercel (`Deployments → ⋯ → Redeploy`).

---

## 3. Shopify Setup

### 3.1 Create the products

Each product handle **must exactly match** these slugs (the code references
them):

| Slug                       | Display name              | US price | ME price |
| -------------------------- | ------------------------- | -------- | -------- |
| `daily-hydration-gel`      | Daily Hydration Gel       | $39 / $68 | 145 / 249 AED |
| `smooth-renew-serum`       | Smooth Renew Serum        | $54 / $92 | 199 / 339 AED |
| `barrier-comfort-cream`    | Barrier Comfort Cream     | $78 / $132 | 289 / 489 AED |
| `daily-routine-bundle`     | Daily Routine Bundle      | $137      | 499 AED   |

For each non-bundle product:
- Create variants `50 ml` and `100 ml`.
- Add at least one product image per SKU.

For the bundle:
- Either create it as a single Shopify SKU at $137 / 499 AED…
- …or as a Shopify "fixed bundle" using a bundles app, mapped to the same handle.

### 3.2 Storefront Access Token

1. Shopify admin → **Apps and sales channels → Develop apps**.
2. Create a custom app, e.g. "Bodylife Storefront".
3. **API access scopes → Storefront API access**:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_checkouts`
   - `unauthenticated_write_checkouts`
4. Install the app, copy the Storefront access token, paste into
   `SHOPIFY_STOREFRONT_ACCESS_TOKEN`.

### 3.3 Subscription wiring (when ready)

The code passes `mode: "subscription"` on cart items when the buyer ticks
"Subscribe & save". To turn this into real Shopify subscriptions:

1. Install **Shopify Subscriptions** app (free) or **Recharge / Bold / Skio**.
2. Create a "Subscribe & Save 15%" selling plan group, attach it to all 3
   non-bundle products.
3. In `lib/shopify.js`, extend `createCheckout` so subscription items pass a
   `sellingPlanId`. The hook is here:

   ```js
   // lib/shopify.js — createCheckout
   const lineItems = cartItems
     .filter((item) => item.shopifyVariantId)
     .map((item) => ({
       merchandiseId: item.shopifyVariantId,
       quantity: item.quantity,
       // TODO: when subscriptions are wired,
       // sellingPlanId: item.mode === "subscription" ? <plan id> : undefined
     }));
   ```

   You'll need to either hardcode the plan ID per product or attach it to the
   product data in `lib/products.js` as `subscriptionPlanId`.

### 3.4 Shipping zones

Match what the site already promises (set in `lib/regions.js`):

| Region | Free shipping over | Flat rate | Delivery |
| ------ | ------------------ | --------- | -------- |
| US     | $40                | $4.99     | 3–7 business days |
| ME     | 150 AED            | 36 AED    | 7–14 business days |

If you change these, update `lib/regions.js → shipping` accordingly.

### 3.5 Returns policy

Configure your Shopify return policy to match the 30-day promise on the
Shipping page and in the Cart trust list.

---

## 4. Make.com (Integromat) Webhook

The site posts to `MAKE_WEBHOOK_URL` from three places:

| Source         | Payload                                                | Identifier            |
| -------------- | ------------------------------------------------------ | --------------------- |
| Contact form   | name, email, phone, country, message, region, source_page | (no `kind`)        |
| Newsletter (footer) | email, region, source_page                       | `kind: "newsletter"` |
| Welcome popup  | email, region, source_page                             | `kind: "newsletter"`, `source_page: "popup"` |

### Suggested Make scenario

```
Webhook → Router →
  • If kind ≠ "newsletter" → send email to support@bodylifeofficial.com (lead)
  • If kind = "newsletter" AND source_page ≠ "popup" → add to Klaviyo "Newsletter" list
  • If source_page = "popup"
       → add to Klaviyo "Newsletter" list
       → trigger flow "Send 10% off code"
```

For the 10% off flow:
1. Generate a single-use Shopify discount code (or a static `WELCOME10`).
2. Email the subscriber via Klaviyo / Mailchimp / Resend with the code.

---

## 5. Analytics

### 5.1 Google Analytics 4

1. Create a GA4 property + web data stream.
2. Copy the measurement ID into `NEXT_PUBLIC_GA_ID`.
3. After deploy, accept the cookie banner with **Analytics** enabled and
   verify in **GA4 → Realtime** that you see your own session.
4. Confirm events fire: `page_view`, `view_item`, `add_to_cart`,
   `begin_checkout`.

### 5.2 Meta Pixel

1. Events Manager → create or pick a Pixel.
2. Copy the ID into `NEXT_PUBLIC_META_PIXEL_ID`.
3. Install Meta Pixel Helper in Chrome.
4. Accept cookie banner with **Marketing** enabled, verify the Pixel fires on
   page load and on add-to-cart.

### 5.3 Search Console

1. Add the production domain to Google Search Console.
2. Verify ownership (DNS record is easiest).
3. Submit sitemap: `https://www.your-domain.com/sitemap.xml`.

---

## 6. Legal

`/[region]/privacy` and `/[region]/terms` are template pages with
`[DATE]` and `[Legal entity name / JURISDICTION]` placeholders.

Before launch:
1. Replace bracketed placeholders.
2. Have a qualified attorney for your jurisdiction(s) review both pages.
3. Update the "last updated" date at the top of each.
4. Ensure the cookie banner copy reflects what your final cookies actually do.

---

## 7. Real content to replace

| Where                                 | What                                                       |
| ------------------------------------- | ---------------------------------------------------------- |
| `lib/products.js`                     | Product `images[].url` — replace Unsplash placeholders     |
| `lib/regions.js → pdp.reviews`        | Real reviews — replace placeholder names + avatars         |
| `lib/regions.js → home.heroImage.url` | Hero image (`/public/images/hero.png` is current default)   |
| `/public/images/`                     | All asset images: review avatars, audience cards, texture, results, diversity banner |
| `app/[region]/about/page.js`          | About copy if you want to add real founder voice / story  |
| `lib/regions.js → footerText`         | Tagline if you want to differentiate by region             |

---

## 8. Smoke test before going live

1. ✅ Cookie banner appears on first visit, not on second.
2. ✅ Adding to cart opens the drawer with the right item, price, free-shipping
     progress.
3. ✅ Subscribe toggle on PDP shows the discounted price.
4. ✅ Cart drawer subtotal updates on +/− and remove.
5. ✅ Checkout button creates a Shopify cart URL and redirects.
6. ✅ Newsletter form posts and shows success state.
7. ✅ Welcome popup fires after 45s on first visit, never on second.
8. ✅ `/us/about`, `/us/privacy`, `/us/terms`, `/us/shipping`, `/us/contact`
     all render.
9. ✅ Tab through the homepage with keyboard — every interactive element
     gets a green focus ring.
10. ✅ Mobile (≤820px): site nav stacks, mobile cart bar appears on PDP, popup
     scales correctly.

---

## 9. Useful local commands

```bash
npm install         # first time
npm run dev         # local development at http://localhost:3000
npm run lint        # eslint + Next lint
npm run build       # production build (catches everything Vercel will catch)
```

The dev server runs without Shopify env vars — products fall back to local
data in `lib/products.js`.
