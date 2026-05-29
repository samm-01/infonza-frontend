# Analytics Event Taxonomy

All events are defined in [`src/lib/analytics/types.js`](../src/lib/analytics/types.js) and fired via helpers in [`src/lib/analytics/events.js`](../src/lib/analytics/events.js). Never hardcode event name strings in components — always import from `EventName`.

---

## Page Events

### `page_view`
| Field | Value |
|---|---|
| **Purpose** | Track every route navigation, including the initial page load |
| **Trigger** | [`NavigationEvents`](../src/app/components/NavigationEvents.jsx) — fires on every `pathname` + `searchParams` change |
| **Provider** | GA4 via `gtag('config', id, { page_path: url })` |
| **Helper** | `trackPageView(url)` — called directly, no `events.*` wrapper needed |

**Properties:**

| Property | Type | Description |
|---|---|---|
| `url` | string | Current pathname + search string, e.g. `/contact?ref=hero` |

---

## Lead / Conversion Events

### `contact_form_submit`
| Field | Value |
|---|---|
| **Purpose** | Record a completed contact form submission — primary lead conversion |
| **Trigger** | [`/contact`](../src/app/contact/page.jsx) `handleSubmit` — fires after a successful API response |
| **Helper** | `events.contactFormSubmit({ service, source, page })` |

**Properties:**

| Property | Type | Description |
|---|---|---|
| `service` | string? | Selected project type from the form (e.g. `"SaaS Product"`) |
| `source` | string? | Surface that rendered the form (e.g. `"contact_page"`) |
| `page` | string? | Current pathname |

---

### `booking_cta_click`
| Field | Value |
|---|---|
| **Purpose** | Track clicks on the primary booking CTA that opens the external Google Calendar link |
| **Trigger** | [`BookingSection`](../src/app/components/booking-cta.jsx), [`BookingBanner`](../src/app/components/booking-cta.jsx), [`BookingStrip`](../src/app/components/booking-cta.jsx), [`FloatingBookingButton`](../src/app/components/booking-cta.jsx) — `onClick` handler |
| **Helper** | `events.bookingCtaClick({ label, destination, page })` |

**Properties:**

| Property | Type | Description |
|---|---|---|
| `label` | string? | Button label text |
| `destination` | string? | External calendar URL |
| `page` | string? | Current pathname from `usePathname()` |

---

### `consultation_request`
| Field | Value |
|---|---|
| **Purpose** | Track clicks on the secondary CTA that navigates to `/contact` — distinct from `booking_cta_click` so both conversion paths are separable in reports |
| **Trigger** | [`BookingSection`](../src/app/components/booking-cta.jsx) secondary link — `onClick` handler |
| **Helper** | `events.consultationRequest({ label, page })` |

**Properties:**

| Property | Type | Description |
|---|---|---|
| `label` | string? | Button label text |
| `page` | string? | Current pathname |

---

### `case_study_download`
| Field | Value |
|---|---|
| **Purpose** | Record a gated case study PDF download after the user submits their name and email |
| **Trigger** | [`/case-studies/[slug]`](../src/app/case-studies/%5Bslug%5D/page.jsx) `PdfModal.handleSubmit` — fires after a successful API response |
| **Helper** | `events.caseStudyDownload({ caseStudyTitle, page })` |

**Properties:**

| Property | Type | Description |
|---|---|---|
| `case_study_title` | string | Title of the downloaded case study |
| `page` | string? | Pathname of the case study page |

---

## Engagement Events

### `nav_link_click`
| **Helper** | `events.navLinkClick({ label, href })` |
|---|---|
| **Properties** | `label` (string), `href` (string) |

### `hero_cta_click`
| **Helper** | `events.heroCtaClick({ label, destination, section })` |
|---|---|
| **Properties** | `label` (string?), `destination` (string?), `section` (string?) |

### `service_card_click`
| **Helper** | `events.serviceCardClick({ service, page })` |
|---|---|
| **Properties** | `service` (string), `page` (string?) |

### `faq_expand`
| **Helper** | `events.faqExpand({ question, page })` |
|---|---|
| **Properties** | `question` (string), `page` (string?) |

### `blog_post_read`
| **Helper** | `events.blogPostRead({ slug, title, readTimeMinutes })` |
|---|---|
| **Properties** | `slug` (string), `title` (string), `read_time_minutes` (number?) |

### `testimonial_view`
| **Helper** | `events.testimonialView({ authorName, page })` |
|---|---|
| **Properties** | `author_name` (string?), `page` (string?) |

---

## Outbound Events

### `outbound_link_click`
| **Helper** | `events.outboundLinkClick({ url, label, page })` |
|---|---|
| **Properties** | `url` (string), `label` (string?), `page` (string?) |

---

## Error Events

### `form_validation_error`
| **Helper** | `events.formValidationError({ field, message, formName })` |
|---|---|
| **Properties** | `field` (string), `message` (string), `form_name` (string?) |

### `api_error`
| **Helper** | `events.apiError({ endpoint, statusCode, message })` |
|---|---|
| **Properties** | `endpoint` (string), `status_code` (number?), `message` (string?) |

---

## Naming Conventions

- All event names use **snake_case**.
- All property names use **snake_case** (camelCase JS params are mapped inside helpers).
- Import event names from `EventName` in `types.js` — never hardcode strings.
- Call `events.*` helpers from components — never call `trackEvent` directly.
