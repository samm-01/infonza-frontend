/**
 * schema-builders.js
 * Pure utility functions that return Schema.org JSON-LD objects.
 *
 * Used by:
 *   - TalentPageTemplate.jsx  (template-driven pages)
 *   - Individual hire pages   (bespoke pages: React, Node, AI, DevOps, MERN, DDT)
 */

const BASE_URL = "https://infonza.com";

/* ─────────────────────────────────────────────────────────────────────────────
   Service schema
   @param {string}   slug          e.g. "hire-react-developers"
   @param {string}   techDisplay   e.g. "React.js Developers"
   @param {string}   heroSubtitle  Short description used in the schema body
   @param {string|null} priceNumeric  Numeric string like "35"; null = custom pricing
   @param {string[]} [skills]      First 8 items populate hasOfferCatalog
───────────────────────────────────────────────────────────────────────────── */
export function buildServiceSchema({ slug, techDisplay, heroSubtitle, priceNumeric, skills = [] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Hire Dedicated ${techDisplay}`,
    description: heroSubtitle,
    serviceType: "Staff Augmentation",
    url: `${BASE_URL}/staff-augmentation/${slug}`,
    provider: {
      "@type": "Organization",
      name: "Infonza Innovations",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/infonza-logo.jpg`,
      },
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
  };

  if (priceNumeric) {
    schema.offers = {
      "@type": "Offer",
      price: priceNumeric,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: priceNumeric,
        priceCurrency: "USD",
        unitText: "HOUR",
      },
      availability: "https://schema.org/InStock",
    };
  }

  if (skills.length > 0) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: `${techDisplay} Expertise`,
      itemListElement: skills.slice(0, 8).map((skill, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "Service", name: skill },
      })),
    };
  }

  return schema;
}

/* ─────────────────────────────────────────────────────────────────────────────
   BreadcrumbList schema
   @param {string} slug          e.g. "hire-react-developers"
   @param {string} techDisplay   e.g. "React.js Developers"
   @param {string} [pageLabel]   Override the last crumb label (defaults to "Hire {techDisplay}")
───────────────────────────────────────────────────────────────────────────── */
export function buildBreadcrumbSchema({ slug, techDisplay, pageLabel }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Staff Augmentation",
        item: `${BASE_URL}/staff-augmentation`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pageLabel ?? `Hire ${techDisplay}`,
        item: `${BASE_URL}/staff-augmentation/${slug}`,
      },
    ],
  };
}

/* ─────────────────────────────────────────────────────────────────────────────
   HowTo schema — hiring process steps
   @param {string} tech           e.g. "React.js"
   @param {string} techDisplay    e.g. "React.js Developers"
   @param {string} placementTime  e.g. "72h"
───────────────────────────────────────────────────────────────────────────── */
export function buildHowToSchema({ tech, techDisplay, placementTime }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Hire Dedicated ${techDisplay} from Infonza`,
    description: `Step-by-step guide to hiring vetted senior ${tech} developers within ${placementTime}.`,
    totalTime: "PT72H",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Share Requirements",
        text: `Fill our 5-minute brief with your ${tech} stack, seniority level, timezone preference, and project context.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Resume Review (24h)",
        text: `We shortlist 2–3 pre-vetted ${tech} developer profiles matched to your stack within 24 business hours.`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Technical Interview",
        text: "You interview the shortlisted candidates. Each has already passed a 5-stage internal assessment covering code, architecture, and communication.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Paid Trial Week",
        text: "Start with a low-risk paid trial week to evaluate the developer in your actual codebase before committing.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Onboard & Ship",
        text: `The developer joins your Slack, GitHub, and Jira. Active sprint contribution from day one. Full placement completed within ${placementTime}.`,
      },
    ],
  };
}
