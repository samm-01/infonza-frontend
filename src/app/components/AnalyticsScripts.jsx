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
      {/* ── GA4 Consent Mode v2 — must run before gtag library loads ──── */}
      {analyticsConfig.ga4.enabled && (
        <Script
          id="ga4-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
      )}

      {/* ── Google Analytics 4 ─────────────────────────────────────────── */}
      {analyticsConfig.ga4.enabled && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.ga4.measurementId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
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

      {/* ── LinkedIn Insight Tag ───────────────────────────────────────── */}
      {analyticsConfig.linkedin.enabled && (
        <Script
          id="linkedin-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "${analyticsConfig.linkedin.partnerId}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
                if (!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}
                var s=document.getElementsByTagName("script")[0];
                var b=document.createElement("script");
                b.type="text/javascript";b.async=true;
                b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
                s.parentNode.insertBefore(b,s);
              })(window.lintrk);
            `,
          }}
        />
      )}

      {/* ── Meta Pixel ─────────────────────────────────────────────────── */}
      {analyticsConfig.meta.enabled && (
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${analyticsConfig.meta.pixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
    </>
  );
}
