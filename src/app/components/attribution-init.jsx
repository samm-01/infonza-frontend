"use client";

import { useEffect } from "react";
import { initializeAttribution } from "@/lib/analytics/attribution";

/**
 * Mounts attribution tracking on first client render.
 * Renders nothing — pure side-effect component.
 * Place once in RootLayout, inside <body>.
 */
export default function AttributionInit() {
  useEffect(() => {
    initializeAttribution();
  }, []); // Empty dep array: runs once per browser session mount

  return null;
}
