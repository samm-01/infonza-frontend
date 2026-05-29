"use client";

/**
 * Lead attribution tracking.
 *
 * Captures first-touch UTM parameters, referrer, and landing page on the
 * visitor's first ever page load, then persists them to localStorage so every
 * form submission can include complete attribution context.
 *
 * Design decisions:
 *  - localStorage (not sessionStorage) so attribution survives tab close and
 *    multi-session journeys (visitor bookmarks, returns the next day, converts).
 *  - First-touch is written once and never overwritten — if a visitor arrives
 *    via Google Ads on Monday and converts via a direct URL on Friday, the lead
 *    is correctly attributed to the ad campaign.
 *  - `current_page` is never stored — it is always read from window.location
 *    at call time so it reflects the actual page the form appeared on.
 */

const STORAGE_KEY = "infonza_attribution";

// ─── Internal helpers ────────────────────────────────────────────────────────

/**
 * Parses UTM parameters from a URL search string.
 * Returns an object with all five standard UTM keys, each null if absent.
 *
 * @param {string} search - window.location.search
 * @returns {{ utm_source, utm_medium, utm_campaign, utm_content, utm_term }}
 */
function parseUtmParams(search) {
  const params = new URLSearchParams(search);
  return {
    utm_source:   params.get("utm_source")   || null,
    utm_medium:   params.get("utm_medium")   || null,
    utm_campaign: params.get("utm_campaign") || null,
    utm_content:  params.get("utm_content")  || null,
    utm_term:     params.get("utm_term")     || null,
  };
}

/**
 * Reads the raw attribution record from localStorage.
 * Returns null if nothing has been written yet.
 *
 * @returns {object | null}
 */
function readStored() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Writes an attribution record to localStorage.
 *
 * @param {object} record
 */
function writeStored(record) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  } catch {
    // localStorage unavailable (private browsing quota, storage disabled)
    // Silent fail — attribution is best-effort; we must not break form flow.
  }
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Initialise attribution tracking for the current page load.
 *
 * Call this once, as early as possible (RootLayout client component, or
 * a NavigationEvents component). It is idempotent — safe to call on every
 * route change; existing first-touch data is never overwritten.
 *
 * What it does on FIRST visit:
 *   1. Reads UTM params from the current URL.
 *   2. Captures document.referrer.
 *   3. Records first_landing_page and first_visit_timestamp.
 *   4. Persists to localStorage.
 *
 * What it does on SUBSEQUENT visits / route changes:
 *   - Nothing. Returns early if the record already exists.
 */
export function initializeAttribution() {
  if (typeof window === "undefined") return;

  // First-touch already recorded — do not overwrite.
  if (readStored() !== null) return;

  const utms = parseUtmParams(window.location.search);

  const record = {
    ...utms,
    first_landing_page:    window.location.pathname + window.location.search,
    referrer:              document.referrer || null,
    first_visit_timestamp: new Date().toISOString(),
  };

  writeStored(record);
}

/**
 * Returns the complete attribution object ready to be merged into any
 * form submission payload.
 *
 * `current_page` is always computed live so it reflects the page where the
 * form was actually submitted, regardless of where the visitor started.
 *
 * Returns null when called server-side (SSR/RSC context).
 *
 * @returns {{
 *   utm_source:             string | null,
 *   utm_medium:             string | null,
 *   utm_campaign:           string | null,
 *   utm_content:            string | null,
 *   utm_term:               string | null,
 *   first_landing_page:     string | null,
 *   referrer:               string | null,
 *   first_visit_timestamp:  string | null,
 *   current_page:           string,
 * } | null}
 */
export function getAttribution() {
  if (typeof window === "undefined") return null;

  // Attempt to initialise in case the component mounting order meant
  // initializeAttribution() was not called before the form rendered.
  initializeAttribution();

  const stored = readStored();

  return {
    utm_source:            stored?.utm_source            ?? null,
    utm_medium:            stored?.utm_medium            ?? null,
    utm_campaign:          stored?.utm_campaign          ?? null,
    utm_content:           stored?.utm_content           ?? null,
    utm_term:              stored?.utm_term              ?? null,
    first_landing_page:    stored?.first_landing_page    ?? null,
    referrer:              stored?.referrer              ?? null,
    first_visit_timestamp: stored?.first_visit_timestamp ?? null,
    // Always live — never cached
    current_page: window.location.pathname + window.location.search,
  };
}

/**
 * Updates only the current_page field in the stored record.
 *
 * This is intentionally a no-op for first-touch fields — call it from a
 * route-change listener if you want the stored record to reflect the most
 * recently visited page (useful for debugging dashboards).
 *
 * Note: getAttribution() already returns live current_page — you only need
 * this if you want to persist it for debugging purposes.
 */
export function updateCurrentPage() {
  if (typeof window === "undefined") return;

  const stored = readStored();
  if (!stored) return;

  writeStored({
    ...stored,
    // Deliberately not first-touch — just a convenience snapshot
    last_page_visited: window.location.pathname + window.location.search,
    last_page_timestamp: new Date().toISOString(),
  });
}

/**
 * Clears all stored attribution data.
 *
 * Use in tests and for manual debugging only.
 * Never call this in response to a user action.
 */
export function clearAttribution() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Silent fail
  }
}
