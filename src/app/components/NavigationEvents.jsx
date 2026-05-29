"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics/analytics";

/**
 * Fires a page_view event on every route change, including the initial load.
 *
 * Next.js App Router does not expose a top-level router event the way the
 * Pages Router did. The recommended pattern is to watch usePathname +
 * useSearchParams — both change on every navigation.
 *
 * Mount once inside RootLayout (inside <body>, after AnalyticsScripts).
 * Wrap in a Suspense boundary so useSearchParams doesn't block rendering.
 */
export default function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track whether this is the very first render so we send a page view on
  // initial load (the ga4 script is loaded afterInteractive, so we give it
  // a brief moment before the first call).
  const initialRender = useRef(true);

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");

    if (initialRender.current) {
      initialRender.current = false;
      // Small delay on first load so the GA4 script has time to initialise
      // before we push the first config call.
      const t = setTimeout(() => trackPageView(url), 300);
      return () => clearTimeout(t);
    }

    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}
