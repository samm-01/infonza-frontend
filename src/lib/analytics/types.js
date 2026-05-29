/**
 * Canonical event names used across all providers.
 * A single source of truth — import from here, never hardcode strings.
 */
export const EventName = /** @type {const} */ ({
  // ─── Page ─────────────────────────────────────────────────────────────────
  PAGE_VIEW: "page_view",

  // ─── Lead / conversion ────────────────────────────────────────────────────
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  BOOKING_CTA_CLICK: "booking_cta_click",
  CASE_STUDY_DOWNLOAD: "case_study_download",

  // ─── Engagement ───────────────────────────────────────────────────────────
  NAV_LINK_CLICK: "nav_link_click",
  HERO_CTA_CLICK: "hero_cta_click",
  SERVICE_CARD_CLICK: "service_card_click",
  FAQ_EXPAND: "faq_expand",
  BLOG_POST_READ: "blog_post_read",
  TESTIMONIAL_VIEW: "testimonial_view",

  // ─── Outbound ─────────────────────────────────────────────────────────────
  OUTBOUND_LINK_CLICK: "outbound_link_click",

  // ─── Errors ───────────────────────────────────────────────────────────────
  FORM_VALIDATION_ERROR: "form_validation_error",
  API_ERROR: "api_error",
});

/**
 * Consent state shape.
 * Stored in localStorage under the key "infonza_consent".
 *
 * @typedef {Object} ConsentState
 * @property {boolean} analytics  - GA4, Clarity
 * @property {boolean} marketing  - LinkedIn, Meta
 * @property {string}  updatedAt  - ISO timestamp of last user decision
 */

/**
 * Standard event payload shape shared by all providers.
 *
 * @typedef {Object} AnalyticsEvent
 * @property {string}              name        - One of EventName values
 * @property {Record<string,any>} [properties] - Freeform properties (provider-mapped internally)
 */

/**
 * Provider interface — every integration must implement these methods.
 * Documented here for reference; JS doesn't enforce it at runtime.
 *
 * @typedef {Object} AnalyticsProvider
 * @property {string}   id
 * @property {boolean}  enabled
 * @property {() => void}                      init
 * @property {(event: AnalyticsEvent) => void} track
 * @property {(url: string) => void}           pageView
 */
