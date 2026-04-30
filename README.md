# BodyLife Ecommerce Launch Checklist

Next.js ecommerce storefront with regional routes for `/us` and `/me`. Middle East detection maps `AE, SA, QA, KW, OM, BH, EG, JO` to `/me`; all other countries default to `/us`.

## Required Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://www.example.com
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
MAKE_WEBHOOK_URL=https://hook.make.com/your-webhook-id
```

## Shopify Setup

- Create a Shopify custom app with Storefront API access.
- Enable product read access and cart/checkout permissions needed by Storefront API.
- Add products with handles, titles, descriptions, prices, variants, and images.
- Set `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_ACCESS_TOKEN`.
- Confirm `/us/products` and `/me/products` load Shopify products; local products remain fallback.

## GA4 Setup

- Create a GA4 web data stream.
- Copy the measurement ID into `NEXT_PUBLIC_GA_ID`.
- Verify events: `page_view`, `view_item`, `add_to_cart`, `begin_checkout`.

## Meta Pixel Setup

- Create or select a Meta Pixel in Events Manager.
- Add the Pixel ID to `NEXT_PUBLIC_META_PIXEL_ID`.
- Verify browser events with Meta Pixel Helper.

## Make Webhook Setup

- Create a Make scenario with a custom webhook trigger.
- Copy the webhook URL into `MAKE_WEBHOOK_URL`.
- Test `/us/contact` and confirm payload includes `name`, `email`, `phone`, `country`, `message`, `region`, and `source_page`.

## Local Test Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

Useful checks:

- `http://localhost:3000/us`
- `http://localhost:3000/me`
- `http://localhost:3000/us/products`
- `http://localhost:3000/robots.txt`
- `http://localhost:3000/sitemap.xml`

## Production Deployment Checklist

- Add all environment variables in hosting provider.
- Set `NEXT_PUBLIC_SITE_URL` to the final production domain.
- Confirm `/` redirects by country and respects `bodylife-region` cookie.
- Confirm checkout creates Shopify checkout URL.
- Submit `sitemap.xml` in Google Search Console.
- Verify GA4, Meta Pixel, and Make webhook in production.
- Test mobile homepage, product page, cart drawer, checkout, and contact form.

## Common Issues And Fixes

- Products do not load: check Shopify domain, token, Storefront API permissions, and product status.
- Checkout disabled: Shopify env vars are missing or cart items lack Shopify variant IDs.
- Contact form returns 503: `MAKE_WEBHOOK_URL` is missing.
- Analytics missing: confirm public IDs are set and ad blockers are disabled during testing.
- Wrong region redirect: clear `bodylife-region` cookie and retest with country headers.
- Canonical URLs show localhost: set `NEXT_PUBLIC_SITE_URL` in production.
