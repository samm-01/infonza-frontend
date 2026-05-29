# Analytics Testing Checklist

Use this checklist before merging changes that touch analytics code, or after a production deploy to verify the tracking stack is healthy.

---

## Pre-flight: Verify Analytics Are Disabled in Dev

- [ ] Open browser console on `localhost` — confirm **no** `[Analytics]` debug logs show `isAnalyticsAvailable` passing
- [ ] Open Network tab — confirm **no** requests to `www.googletagmanager.com` or `clarity.ms` on localhost
- [ ] Open Network tab on a `*.vercel.app` preview URL — confirm **no** GA4 or Clarity requests

---

## GA4 Tests

Use GA4 DebugView (`GA4 Admin → DebugView`) while testing on the production domain (`infonza.com`).

- [ ] **Page view tracked** — Navigate between pages; each route change appears as a `page_view` event in DebugView with the correct `page_path`
- [ ] **Contact form tracked** — Submit the contact form on `/contact`; a `contact_form_submit` event appears with `service`, `source`, and `page` properties
- [ ] **Case study download tracked** — Complete the PDF download modal on any `/case-studies/[slug]` page; a `case_study_download` event appears with `case_study_title`
- [ ] **Booking CTA tracked** — Click the booking button in `BookingSection`, `BookingBanner`, `BookingStrip`, or `FloatingBookingButton`; a `booking_cta_click` event appears with `label`, `destination`, and `page`
- [ ] **Consultation request tracked** — Click the secondary "Talk to Our Experts" CTA; a `consultation_request` event appears
- [ ] **No duplicate page_view on initial load** — First page load should produce exactly one `page_view` (not two)

---

## Microsoft Clarity Tests

Log in to [clarity.microsoft.com](https://clarity.microsoft.com) and verify the following on the production domain.

- [ ] **Session recording visible** — After visiting the site, a new session recording appears in the Clarity dashboard within ~2 minutes
- [ ] **Heatmap data collected** — Heatmaps are populated for high-traffic pages (may take several sessions)
- [ ] **Production domain tracked** — Recordings show hostname `infonza.com` or `www.infonza.com`
- [ ] **Preview domains excluded** — No sessions appear from `*.vercel.app` URLs

---

## Attribution Tests

Open the browser console and run `window.__infonzaAttribution?.()` (or check localStorage for `infonza_attribution`) to verify captured values.

- [ ] **UTM source captured** — Visit `/?utm_source=google`; `utm_source` is stored in attribution data
- [ ] **UTM medium captured** — Visit `/?utm_medium=cpc`; `utm_medium` is stored in attribution data
- [ ] **Landing page captured** — First page visited is recorded as `landing_page`
- [ ] **Referrer captured** — When arriving via a referral link, `referrer` is populated in attribution data
- [ ] **Attribution passed on form submit** — Submit the contact form; the attribution object is included in the POST body to `/api/contact`
- [ ] **Attribution passed on case study download** — Complete the PDF modal; attribution is included in the POST body to `/api/case-study-download`

---

## Debug Logging Tests (Development Only)

Set `NODE_ENV=development` and open the browser console.

- [ ] **`page_view` logs on navigation** — Each route change prints `[Analytics] Event Fired: page_view` with `{ url }` in the console
- [ ] **`contact_form_submit` logs** — Submitting the form prints the event with properties
- [ ] **No logs in production** — Verify the `[Analytics]` prefix is **absent** from the console on `infonza.com`
- [ ] **Logging can be silenced** — Set `NEXT_PUBLIC_ANALYTICS_DEBUG=false` in `.env.local`; confirm logs stop

---

## Hostname Guard Tests

- [ ] **localhost blocked** — `isAllowedHostname()` returns `false` on `localhost`; analytics calls are silently dropped
- [ ] **`*.vercel.app` blocked** — `isAllowedHostname()` returns `false` on Vercel preview URLs
- [ ] **`infonza.com` allowed** — `isAllowedHostname()` returns `true` on the production domain
- [ ] **`www.infonza.com` allowed** — `isAllowedHostname()` returns `true` on the www subdomain
