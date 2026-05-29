"use client";

import Script from "next/script";
import { analyticsConfig } from "@/lib/analytics/config";

/**
 * Injects GA4 and Microsoft Clarity scripts.
 *
 * Rules:
 *  - Production only. In development/test no scripts are loaded, keeping
 *    local traffic out of analytics and removing the need to block-list
 *    localhost in GA4.
 *  - One render, no conditional hooks — safe to mount unconditionally in
 *    RootLayout.
 *  - GA4 is initialised with send_page_view: false so NavigationEvents
 *    controls all page view calls (avoids a double-count on first load).
 *  - Clarity self-deduplicates via its own guard on window._clarity.
 */

const isProduction = process.env.NODE_ENV === "production";

export default function AnalyticsScripts() {
  if (!isProduction) return null;

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
