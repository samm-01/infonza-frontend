"use client";

import Script from "next/script";
import { analyticsConfig } from "@/lib/analytics/config";

/**
 * Injects GA4 and Microsoft Clarity scripts.
 *
 * Rules:
 *  - Production Infonza domain only. Scripts are suppressed on:
 *      • local development (NODE_ENV !== "production")
 *      • Vercel preview / branch deployments (NEXT_PUBLIC_VERCEL_ENV !== "production")
 *      • Any non-infonza.com hostname (runtime guard in isAnalyticsAvailable)
 *  - GA4 is initialised with send_page_view: false so NavigationEvents
 *    controls all page view calls (avoids a double-count on first load).
 *  - Clarity self-deduplicates via its own guard on window._clarity.
 */

// Build-time guard: NODE_ENV must be production AND, when on Vercel,
// the environment must be "production" (not "preview" or "development").
const isAllowedEnv =
  process.env.NODE_ENV === "production" &&
  (process.env.NEXT_PUBLIC_VERCEL_ENV == null ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production");

export default function AnalyticsScripts() {
  if (!isAllowedEnv) return null;

  return (
    <>
      {/* ── Google Analytics 4 ─────────────────────────────────────────── */}
      {analyticsConfig.ga4.enabled && (
        <>
          {/* 1. Load the gtag library */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.ga4.measurementId}`}
            strategy="afterInteractive"
          />
          {/* 2. Initialise dataLayer and configure the stream */}
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${analyticsConfig.ga4.measurementId}', {
                  send_page_view: false
                });
              `,
            }}
          />
        </>
      )}

      {/* ── Microsoft Clarity ──────────────────────────────────────────── */}
      {analyticsConfig.clarity.enabled && (
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","${analyticsConfig.clarity.projectId}");
            `,
          }}
        />
      )}
    </>
  );
}
