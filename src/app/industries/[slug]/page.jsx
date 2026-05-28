"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { INDUSTRY_CONFIGS } from "../_config/industry-data";
import IndustryPageTemplate from "../_components/IndustryPageTemplate";

export default function IndustryPage({ params }) {
  const { slug } = use(params);
  const config = INDUSTRY_CONFIGS[slug];

  if (!config) notFound();

  return <IndustryPageTemplate config={config} />;
}
