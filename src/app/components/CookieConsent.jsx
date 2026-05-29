"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { getStoredConsent, setConsent } from "@/lib/analytics/analytics";

/**
 * Cookie consent banner.
 *
 * Shown once when no prior consent decision is stored in localStorage.
 * Dismissed permanently on any button press — decision is persisted via
 * setConsent() from the analytics abstraction layer.
 *
 * Three actions:
 *   Accept All            → analytics: true,  marketing: true
 *   Reject Non-Essential  → analytics: false, marketing: false
 *   Cookie Preferences    → placeholder until the preferences modal is built
 *
 * Animation strategy:
 *   Entry: CSS @keyframes (cookieBannerIn in globals.css) — plays automatically
 *          the moment the element is added to the DOM. No second state update
 *          or rAF required, so it works reliably in both dev (Strict Mode) and
 *          production.
 *   Exit:  Inline style transition triggered by the `exiting` state flag.
 *          DOM node removed 280ms later (slightly after the 240ms transition).
 *
 * Mount once in RootLayout, inside <body>.
 */
export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);
  const dismissed = useRef(false);

  useEffect(() => {
    if (dismissed.current) return;
    if (getStoredConsent()) return; // consent already stored — never show
    setMounted(true);
  }, []);

  const dismiss = useCallback((decision) => {
    if (dismissed.current) return;
    dismissed.current = true;
    setConsent(decision);
    setExiting(true);
    setTimeout(() => setMounted(false), 280);
  }, []);

  const handleAcceptAll = useCallback(() => {
    dismiss({ analytics: true, marketing: true });
  }, [dismiss]);

  const handleRejectNonEssential = useCallback(() => {
    dismiss({ analytics: false, marketing: false });
  }, [dismiss]);

  // Placeholder — preferences modal will be wired here in a future step.
  const handlePreferences = useCallback(() => {
    // TODO: open preferences modal
  }, []);

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 z-[200] px-4 pb-4 sm:px-6 sm:pb-6"
      style={
        exiting
          ? {
              transition: "transform 240ms ease-in, opacity 240ms ease-in",
              transform: "translateY(110%)",
              opacity: 0,
            }
          : { animation: "cookieBannerIn 0.3s ease-out forwards" }
      }
    >
      <div className="mx-auto max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden">
        {/* Teal accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-teal-500 to-blue-600" />

        <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          {/* Icon + Copy */}
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <div
              aria-hidden="true"
              className="flex-shrink-0 w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center"
            >
              <CookieIcon />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900 mb-1">
                We use cookies
              </p>
              <p
                id="cookie-consent-description"
                className="text-xs text-slate-500 leading-relaxed"
              >
                We use cookies to understand how you use our site, measure
                performance, and improve your experience. You can choose
                which cookies to allow.{" "}
                <a
                  href="/privacy-policy"
                  className="text-teal-600 hover:text-teal-700 underline underline-offset-2 transition-colors"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col xs:flex-row sm:flex-col lg:flex-row items-stretch xs:items-center sm:items-stretch lg:items-center gap-2 flex-shrink-0">
            <button
              onClick={handleAcceptAll}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white text-xs font-semibold hover:opacity-90 transition-all hover:shadow-md hover:shadow-teal-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 whitespace-nowrap"
            >
              Accept All
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400 whitespace-nowrap"
            >
              Reject Non-Essential
            </button>
            <button
              onClick={handlePreferences}
              className="inline-flex items-center justify-center gap-1 px-3 py-2.5 text-xs font-medium text-slate-500 hover:text-teal-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 whitespace-nowrap"
            >
              <SlidersIcon aria-hidden="true" />
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CookieIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-teal-600"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M15 2.5A3 3 0 0 0 18 5.5a3 3 0 0 0 3-1.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="9" cy="10" r="1.25" fill="currentColor" />
      <circle cx="13" cy="15" r="1.25" fill="currentColor" />
      <circle cx="8.5" cy="15.5" r="0.75" fill="currentColor" />
      <circle cx="13.5" cy="9.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

function SlidersIcon(props) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M2 4h12M5 4V2m0 2v10M11 12V4m0 8v2m0-8H2m9 0h3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
