"use client";

/**
 * Analytics abstraction layer.
 *
 * This module is the single entry point for all tracking calls in the app.
 * It delegates to provider-specific implementations based on which env vars
 * are set and what consent the user has granted.
 *
 * IMPORTANT: No scripts are loaded here. Script injection lives in
 * AnalyticsScripts (to be created in components/AnalyticsScripts.jsx).
 * This file only fires calls into provider globals that those scripts expose.
 *
 * Usage:
 *   import { trackEvent, trackPageView } from "@/lib/analytics/analytics";
 *   trackEvent({ name: EventName.CONTACT_FORM_SUBMIT, properties: { service: "AI Development" } });
 */

import { analyticsConfig, isAnalyticsAvailable } from "./config";

// ─── Debug logging (development only) ────────────────────────────────────────

function analyticsDebug(eventName, properties) {
  if (process.env.NODE_ENV !== "development") return;
  // Set NEXT_PUBLIC_ANALYTICS_DEBUG=false in .env.local to silence logs.
  if (process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "false") return;
  console.groupCollapsed(`[Analytics] Event Fired: ${eventName}`);
  console.log("Properties:", properties ?? {});
  console.groupEnd();
}

// ─── Consent helpers ─────────────────────────────────────────────────────────

const CONSENT_KEY = "infonza_consent";

/**
 * Reads the stored consent object from localStorage.
 * Returns null if no decision has been made yet.
 *
 * @returns {{ analytics: boolean, marketing: boolean, updatedAt: string } | null}
 */
export function getStoredConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Writes a consent decision to localStorage and updates GA4 consent mode.
 *
 * @param {{ analytics: boolean, marketing: boolean }} decision
 */
export function setConsent({ analytics, marketing }) {
  if (typeof window === "undefined") return;

  const consent = { analytics, marketing, updatedAt: new Date().toISOString() };
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));

  // Update GA4 Consent Mode v2 if GA4 is configured
  if (analyticsConfig.ga4.enabled && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: analytics ? "granted" : "denied",
      ad_storage: marketing ? "granted" : "denied",
      ad_user_data: marketing ? "granted" : "denied",
      ad_personalization: marketing ? "granted" : "denied",
    });
  }
}

/**
 * Returns true if the user has consented to the given category.
 *
 * Pre-banner behaviour (current): returns true when no decision has been
 * stored yet — analytics fire by default. Once the cookie banner is
 * implemented it will call setConsent(), at which point this function
 * will respect the stored decision. Until then, all tracking proceeds.
 *
 * @param {"analytics" | "marketing"} category
 */
export function hasConsent(category) {
  const consent = getStoredConsent();
  if (consent === null) return true; // permissive until banner is implemented
  return Boolean(consent[category]);
}

// ─── GA4 ─────────────────────────────────────────────────────────────────────

function ga4PageView(url) {
  if (!analyticsConfig.ga4.enabled) return;
  if (!hasConsent("analytics")) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("config", analyticsConfig.ga4.measurementId, {
    page_path: url,
  });
}

function ga4TrackEvent({ name, properties = {} }) {
  if (!analyticsConfig.ga4.enabled) return;
  if (!hasConsent("analytics")) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", name, properties);
}

// ─── Microsoft Clarity ───────────────────────────────────────────────────────

function clarityTrackEvent({ name, properties = {} }) {
  if (!analyticsConfig.clarity.enabled) return;
  if (!hasConsent("analytics")) return;
  if (typeof window.clarity !== "function") return;

  // Clarity supports custom tags: clarity("set", key, value)
  window.clarity("set", name, JSON.stringify(properties));
}

// ─── LinkedIn Insight Tag ─────────────────────────────────────────────────────

function linkedinTrackConversion(conversionId) {
  if (!analyticsConfig.linkedin.enabled) return;
  if (!hasConsent("marketing")) return;
  if (typeof window.lintrk !== "function") return;

  window.lintrk("track", { conversion_id: conversionId });
}

// ─── Meta Pixel ───────────────────────────────────────────────────────────────

function metaTrackEvent({ name, properties = {} }) {
  if (!analyticsConfig.meta.enabled) return;
  if (!hasConsent("marketing")) return;
  if (typeof window.fbq !== "function") return;

  window.fbq("track", name, properties);
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Fire a page view across all enabled, consented providers.
 * Call this from your route-change listener (e.g. NavigationEvents component).
 *
 * @param {string} url - The pathname + search string, e.g. "/contact?ref=hero"
 */
export function trackPageView(url) {
  analyticsDebug("page_view", { url });
  if (!isAnalyticsAvailable()) return;

  ga4PageView(url);
  // Clarity tracks page views automatically via its script.
  // LinkedIn and Meta page views are handled by their base scripts.
}

/**
 * Fire a custom event across all enabled, consented providers.
 *
 * @param {{ name: string, properties?: Record<string, any> }} event
 */
export function trackEvent(event) {
  analyticsDebug(event.name, event.properties);
  if (!isAnalyticsAvailable()) return;

  ga4TrackEvent(event);
  clarityTrackEvent(event);
  metaTrackEvent(event);
}

/**
 * Fire a LinkedIn conversion event.
 * Only call this for hard conversion events (form submit, booking click).
 *
 * @param {number} conversionId - LinkedIn conversion ID from Campaign Manager
 */
export function trackLinkedInConversion(conversionId) {
  linkedinTrackConversion(conversionId);
}

/**
 * Identify a user session with additional properties.
 * Used by Clarity to tag sessions; GA4 uses user_properties.
 *
 * @param {Record<string, string>} traits - e.g. { plan: "enterprise", source: "blog" }
 */
export function identifySession(traits = {}) {
  if (!isAnalyticsAvailable()) return;

  // GA4: set user properties
  if (analyticsConfig.ga4.enabled && hasConsent("analytics") && typeof window.gtag === "function") {
    window.gtag("set", "user_properties", traits);
  }

  // Clarity: tag the session
  if (analyticsConfig.clarity.enabled && hasConsent("analytics") && typeof window.clarity === "function") {
    Object.entries(traits).forEach(([key, value]) => {
      window.clarity("set", key, value);
    });
  }
}
