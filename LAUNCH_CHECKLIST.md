# Bodylife – Launch Checklist

Hand this to your operations / marketing partner. Each item lists the **owner**
and **estimated effort**. Items in priority order — top blocks must be done
before going live.

> Code is complete. Everything below is content, configuration, or external
> service setup. See `SETUP.md` for the technical "how to wire it" for each item.

---

## 🔴 Must-do before launch (blocking)

### 1. Domain & Hosting
- [ ] Buy production domain · **Owner: founder · 30 min**
- [ ] Point domain to Vercel (DNS records) · **Owner: dev/ops · 30 min**
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel · **Owner: dev/ops · 5 min**

### 2. Shopify
- [ ] Create Shopify store and choose plan · **Owner: founder · 1 hr**
- [ ] Create 4 products with handles `daily-hydration-gel`, `smooth-renew-serum`, `barrier-comfort-cream`, `daily-routine-bundle` · **Owner: ops · 1 hr**
- [ ] Add `50 ml` and `100 ml` variants to first 3 products · **Owner: ops · 30 min**
- [ ] Upload real product photos to Shopify · **Owner: ops · depends on shoot**
- [ ] Configure shipping zones to match site (US $4.99 / free over $40 · ME 36 AED / free over 150 AED) · **Owner: ops · 30 min**
- [ ] Configure tax settings · **Owner: founder + accountant · 1 hr**
- [ ] Generate Storefront API token (custom app) · **Owner: dev/ops · 15 min**
- [ ] Set `NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN` + `SHOPIFY_STOREFRONT_ACCESS_TOKEN` in Vercel · **Owner: dev/ops · 5 min**
- [ ] Enable a payment processor (Shopify Payments / Stripe / PayPal) · **Owner: founder · 1 hr**

### 3. Real Content & Assets
- [ ] Replace product images in `lib/products.js` (Unsplash placeholders → real shots) · **Owner: dev · 15 min**
- [ ] Replace `/public/images/hero.png` with real hero · **Owner: dev · 5 min**
- [ ] Replace `/public/images/diversity-banner.png` · **Owner: dev · 5 min**
- [ ] Replace `/public/images/texture-3types.png` · **Owner: dev · 5 min**
- [ ] Replace `/public/images/results-comparison.png` and `results-before*` / `results-after*` · **Owner: dev · 15 min**
- [ ] Replace `/public/images/audience-*.png` (5 images) · **Owner: dev · 10 min**
- [ ] Replace `/public/images/review-*.png` avatars (or remove avatars from review data) · **Owner: dev · 10 min**
- [ ] Replace `/public/images/dr-avatar.png` (dermatologist photo) · **Owner: dev · 5 min**
- [ ] Replace placeholder reviewer names (Maya/Jordan/Elena/Sophia/Marcus/Lily and Aisha/Omar/Noura/Fatima/Khalid/Layla) with real testimonials in `lib/regions.js → pdp.reviews` · **Owner: ops · 30 min**

### 4. Legal
- [ ] Replace `[DATE]` and `[JURISDICTION]` and `[Legal entity name]` placeholders in `/[region]/privacy` and `/[region]/terms` · **Owner: founder · 30 min**
- [ ] Have a qualified attorney for your jurisdiction(s) review Privacy Policy + Terms before publishing · **Owner: founder · external · varies**
- [ ] Confirm cookie banner copy matches what you actually use cookies for · **Owner: founder · 15 min**

### 5. Make.com (forms backend)
- [ ] Create Make scenario with webhook trigger · **Owner: ops · 1 hr**
- [ ] Get webhook URL, set `MAKE_WEBHOOK_URL` in Vercel · **Owner: ops · 5 min**
- [ ] Build router based on `kind` field: route `kind="newsletter"` to email platform list, `source_page="popup"` to 10%-off flow, no kind to support inbox · **Owner: ops · 1 hr**
- [ ] Test contact form, newsletter form, popup form all reach the right places · **Owner: ops · 30 min**

### 6. Smoke test full purchase flow
- [ ] Add a product to cart → checkout → place a test order with a real card / test mode · **Owner: ops · 30 min**
- [ ] Confirm order email arrives, fulfilment is set up, returns process is documented · **Owner: ops · 1 hr**

---

## 🟡 Should-do within first week

### 7. Analytics & Tracking
- [ ] Create GA4 property → set `NEXT_PUBLIC_GA_ID` · **Owner: marketing · 30 min**
- [ ] Verify `page_view`, `view_item`, `add_to_cart`, `begin_checkout` events fire (with cookie banner accepted) · **Owner: marketing · 30 min**
- [ ] Create Meta Pixel → set `NEXT_PUBLIC_META_PIXEL_ID` · **Owner: marketing · 30 min**
- [ ] Verify Pixel fires using Meta Pixel Helper Chrome extension · **Owner: marketing · 15 min**

### 8. SEO
- [ ] Submit sitemap.xml to Google Search Console · **Owner: marketing · 30 min**
- [ ] Verify domain ownership in GSC · **Owner: marketing · 15 min**
- [ ] Add domain to Bing Webmaster Tools · **Owner: marketing · 30 min**
- [ ] Verify Open Graph cards render correctly via Facebook Sharing Debugger and Twitter Card Validator · **Owner: marketing · 15 min**
- [ ] Check Core Web Vitals via PageSpeed Insights and fix any "poor" scores · **Owner: dev · 1–2 hrs**

### 9. Email infrastructure
- [ ] Set up `support@bodylifeofficial.com` (Google Workspace, etc.) · **Owner: founder · 1 hr**
- [ ] Set up SPF / DKIM / DMARC records for the sending domain · **Owner: dev/ops · 1 hr**
- [ ] Connect email platform (Klaviyo / Mailchimp / Resend) to Make · **Owner: marketing · 1 hr**
- [ ] Build welcome email (sent on newsletter signup, includes 10% off code if from popup) · **Owner: marketing · 2 hrs**

### 10. Customer support workflow
- [ ] Decide who answers `support@bodylifeofficial.com` · **Owner: founder · 15 min**
- [ ] Document common scenarios: returns, missing orders, allergic reactions, subscription changes · **Owner: ops · 2 hrs**
- [ ] Create canned response templates · **Owner: ops · 1 hr**

---

## 🟢 Should-do within first month

### 11. Subscription wiring (when you have early subscriber demand)
- [ ] Install Shopify Subscriptions / Recharge / Bold app · **Owner: ops · 1 hr**
- [ ] Create "Subscribe & Save 15%" selling plan, attach to 3 SKUs · **Owner: ops · 30 min**
- [ ] Update `lib/shopify.js → createCheckout` to pass `sellingPlanId` for subscription items (see `SETUP.md §3.3`) · **Owner: dev · 1 hr**
- [ ] Build subscription reminder email (3 days before next ship) · **Owner: marketing · 1 hr**
- [ ] Build subscription "skip / pause / cancel" landing page on your customer account · **Owner: ops · 1 hr — most apps provide this**

### 12. Lifecycle email sequences
- [ ] Welcome flow (sent on first signup) · **Owner: marketing · 3 hrs**
- [ ] Browse abandonment (visited PDP, didn't add) · **Owner: marketing · 2 hrs**
- [ ] Cart abandonment (added, didn't checkout, 1 hr / 24 hr / 72 hr) · **Owner: marketing · 3 hrs**
- [ ] Post-purchase thank you · **Owner: marketing · 1 hr**
- [ ] 14-day review request (after delivery) · **Owner: marketing · 2 hrs**
- [ ] 30-day "how's the routine going" check-in · **Owner: marketing · 2 hrs**
- [ ] Subscriber win-back if they cancel · **Owner: marketing · 2 hrs**

### 13. Reviews app (replace hardcoded reviews)
- [ ] Install Loox / Yotpo / Judge.me on Shopify · **Owner: marketing · 1 hr**
- [ ] Migrate seed reviews from `lib/regions.js` into the reviews app · **Owner: marketing · 1 hr**
- [ ] Replace `lib/regions.js → pdp.reviews` reading from a real review source (or update the data when reviews come in) · **Owner: dev · 2 hrs (ongoing)**

### 14. Content
- [ ] Write a real founder/origin story for `/[region]/about` if the template feels generic · **Owner: founder · 2 hrs**
- [ ] Add real ingredients lists / claim certifications to product pages · **Owner: founder + cosmetic chemist · 2 hrs/SKU**
- [ ] Add Allergen / Pregnancy / Skin condition guidance to FAQs if relevant · **Owner: founder · 1 hr**

### 15. Marketing launch
- [ ] Set up Instagram + TikTok with consistent voice · **Owner: marketing · ongoing**
- [ ] Plan a soft launch list (friends + family + early subscribers) · **Owner: founder · 1 hr**
- [ ] Build out 2–3 weeks of organic content before public launch · **Owner: marketing · 1–2 weeks**
- [ ] Decide paid ads strategy — start small with retargeting once you have GA/Pixel data · **Owner: marketing · 1 week to plan**

---

## 📋 Nice-to-haves (later iterations)

- [ ] Real Arabic support for ME region (would need RTL layout, Arabic font, translated content)
- [ ] Customer account pages (login, order history, manage subscription)
- [ ] Rewards / loyalty program (Shopify has apps for this)
- [ ] Quiz: "build your routine" interactive picker
- [ ] Influencer / affiliate program with code tracking
- [ ] Press / "as featured in" strip (only after you actually have press)
- [ ] Live chat (Gorgias, Tidio) — usually overkill for a 4-SKU store
- [ ] Multi-currency display (Shopify Markets handles this)
- [ ] Ingredient comparison table on PDP
- [ ] Routine builder calculator (3-month supply estimator)

---

## 📞 Owner cheat sheet

- **Founder** — strategic decisions, content tone, legal review, vendor selection
- **Ops** — Shopify config, Make scenarios, customer support, fulfilment
- **Marketing** — analytics setup, GSC, email sequences, social, ads
- **Dev** — env vars, image swaps, code-level changes, deploys
