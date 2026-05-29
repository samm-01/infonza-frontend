/**
 * Analytics configuration.
 *
 * IDs are sourced from environment variables. A missing ID means that
 * provider is disabled — no script is loaded, no calls are made.
 *
 * To enable a provider, set its env var in .env.local (development)
 * or your deployment environment (production).
 */

export const analyticsConfig = {
  ga4: {
    measurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? null,
    enabled: Boolean(process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID),
  },
  clarity: {
    projectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID ?? null,
    enabled: Boolean(process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID),
  },
  linkedin: {
    partnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? null,
    enabled: Boolean(process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID),
  },
  meta: {
    pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? null,
    enabled: Boolean(process.env.NEXT_PUBLIC_META_PIXEL_ID),
  },
};

/** Hostnames where analytics are permitted to fire. */
const ALLOWED_HOSTNAMES = ["infonza.com", "www.infonza.com"];

/**
 * True when the current page hostname is a production Infonza domain.
 * Blocks analytics on localhost, *.vercel.app previews, and staging.
 */
export function isAllowedHostname() {
  if (typeof window === "undefined") return false;
  return ALLOWED_HOSTNAMES.includes(window.location.hostname);
}

/**
 * True when at least one provider is configured, we are in a browser context,
 * and the page is served from an allowed production hostname.
 */
export function isAnalyticsAvailable() {
  if (typeof window === "undefined") return false;
  if (!isAllowedHostname()) return false;
  return Object.values(analyticsConfig).some((p) => p.enabled);
}

/**
 * Returns the list of provider keys that are currently enabled.
 * Useful for logging and debugging.
 */
export function getEnabledProviders() {
  return Object.entries(analyticsConfig)
    .filter(([, cfg]) => cfg.enabled)
    .map(([key]) => key);
}
