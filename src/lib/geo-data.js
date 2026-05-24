export const BASE_URL = "https://infonza.com";
export const DUNS = "771974280";
export const COMPANY_NAME = "Infonza Innovations";
export const CONTACT_EMAIL = "support@infonza.com";
export const BOOKING_URL = "https://calendar.app.google/tCXYTm21YtV7AkXFA";

export const GLOBAL_STATS = [
  { value: "12+", label: "Years of Engineering Excellence" },
  { value: "200+", label: "Projects Delivered Globally" },
  { value: "40+", label: "Senior Engineers" },
  { value: "94%", label: "Client Retention Rate" },
];

export const CORE_SERVICES = [
  {
    title: "AI Development",
    desc: "GPT-4 integrations, RAG systems, LLM fine-tuning, AI chatbots, and workflow automation.",
    link: "/ai-development",
  },
  {
    title: "ERP Development",
    desc: "Custom ERP for manufacturing, logistics, inventory, and warehouse operations.",
    link: "/erp-development",
  },
  {
    title: "SaaS Development",
    desc: "Multi-tenant B2B SaaS products — architecture, billing, security, and cloud infrastructure.",
    link: "/saas-development",
  },
  {
    title: "IT Staff Augmentation",
    desc: "Pre-vetted senior engineers across 12+ tech stacks. Placed in 48 hours.",
    link: "/staff-augmentation",
  },
  {
    title: "Insurance Software",
    desc: "Policy management, CRM, agent portals, and AI-powered InsurTech solutions.",
    link: "/insurance-software-development",
  },
  {
    title: "Document Management",
    desc: "Enterprise DMS with AI classification, e-signature, and compliance workflows.",
    link: "/document-management-system",
  },
];

export const INDUSTRIES = [
  "Insurance & InsurTech",
  "Logistics & Supply Chain",
  "Healthcare & MedTech",
  "Financial Services & FinTech",
  "SaaS & Enterprise Software",
  "Legal & Compliance",
  "Manufacturing & Industry",
  "Real Estate & Construction",
  "Education & EdTech",
  "E-commerce & Retail",
];

export const TRUST_SIGNALS = [
  { label: "D-U-N-S Registered", value: `No. ${DUNS}` },
  { label: "NDA Protection", value: "Day-one mutual NDA" },
  { label: "Delivery Model", value: "2-week agile sprints" },
  { label: "Communication", value: "Slack + Jira + GitHub" },
  { label: "Timezone Overlap", value: "EST/PST 9am–2pm" },
  { label: "Replacement Guarantee", value: "30-day coverage" },
];

export const INDIA_ADVANTAGES = [
  {
    title: "60–70% Cost Advantage",
    desc: "Senior engineering talent at $35–$75/hr vs $150–$200/hr for equivalent US/UK talent. Same output quality, fraction of the cost.",
  },
  {
    title: "World's Largest English-Speaking Engineering Pool",
    desc: "India produces 1.5M+ engineering graduates annually. The senior talent pool for React, Node.js, Python, AI, and cloud is unmatched globally.",
  },
  {
    title: "US/UK Timezone Overlap",
    desc: "EST/PST daily overlap from 9am–2pm. Daily standups, Slack-first communication, sprint reviews on your schedule.",
  },
  {
    title: "Proven Enterprise Delivery Track Record",
    desc: "Every major US tech company runs significant engineering operations in India. The model works — the risk is vendor selection, not the location.",
  },
  {
    title: "Mature Agile Engineering Culture",
    desc: "India's top engineering teams work in 2-week sprints, use GitHub-first workflows, and adopt US-standard delivery practices.",
  },
  {
    title: "NDA and IP Protection",
    desc: "We sign mutual NDAs before any technical discussion. Individual IP assignment agreements for every engineer. Full legal protection.",
  },
];

// ── Location-specific metadata configs ────────────────────────────────────

export const GEO_LOCATIONS = {
  chandigarh: {
    city: "Chandigarh",
    state: "Punjab",
    country: "India",
    region: "North India",
    addressLocality: "Chandigarh",
    addressRegion: "CH",
    postalCode: "160001",
    countryCode: "IN",
  },
  mohali: {
    city: "Mohali",
    state: "Punjab",
    country: "India",
    region: "North India",
    addressLocality: "Mohali",
    addressRegion: "PB",
    postalCode: "160055",
    countryCode: "IN",
  },
  punjab: {
    city: "Punjab",
    state: "Punjab",
    country: "India",
    region: "North India",
    addressLocality: "Chandigarh",
    addressRegion: "PB",
    countryCode: "IN",
  },
  bangalore: {
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    region: "South India",
    addressLocality: "Bengaluru",
    addressRegion: "KA",
    postalCode: "560001",
    countryCode: "IN",
  },
  chennai: {
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    region: "South India",
    addressLocality: "Chennai",
    addressRegion: "TN",
    postalCode: "600001",
    countryCode: "IN",
  },
  india: {
    city: null,
    state: null,
    country: "India",
    region: "India",
    addressLocality: "Chandigarh",
    addressRegion: "CH",
    countryCode: "IN",
  },
  usa: {
    city: null,
    state: null,
    country: "United States",
    region: "United States",
    countryCode: "US",
  },
  new_york: {
    city: "New York",
    state: "New York",
    country: "United States",
    region: "East Coast",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    countryCode: "US",
  },
  california: {
    city: "California",
    state: "California",
    country: "United States",
    region: "West Coast",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94105",
    countryCode: "US",
  },
  texas: {
    city: "Texas",
    state: "Texas",
    country: "United States",
    region: "South Central",
    addressLocality: "Austin",
    addressRegion: "TX",
    postalCode: "78701",
    countryCode: "US",
  },
};

// ── Schema builders ────────────────────────────────────────────────────────

export function buildLocalBusinessSchema({ name, description, url, location, serviceType }) {
  const loc = GEO_LOCATIONS[location] || GEO_LOCATIONS.india;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_NAME,
    description,
    url: `${BASE_URL}${url}`,
    email: CONTACT_EMAIL,
    identifier: { "@type": "PropertyValue", name: "DUNS", value: DUNS },
    address: {
      "@type": "PostalAddress",
      addressLocality: loc.addressLocality,
      addressRegion: loc.addressRegion,
      postalCode: loc.postalCode || "",
      addressCountry: loc.countryCode,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "India" },
    ],
    serviceType,
    knowsAbout: [
      "Software Development",
      "AI Development",
      "ERP Development",
      "SaaS Development",
      "IT Staff Augmentation",
      "Insurance Software Development",
    ],
  };
}

export function buildProfessionalServiceSchema({ description, url, serviceType }) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY_NAME,
    description,
    url: `${BASE_URL}${url}`,
    email: CONTACT_EMAIL,
    identifier: { "@type": "PropertyValue", name: "DUNS", value: DUNS },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Canada" },
    ],
    serviceType,
  };
}

// For US-targeted pages — areaServed scoped to the US state or country
export function buildUSServiceSchema({ description, url, serviceType, stateName }) {
  const areaServed = stateName
    ? { "@type": "State", name: stateName, containedInPlace: { "@type": "Country", name: "United States" } }
    : { "@type": "Country", name: "United States" };
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY_NAME,
    description,
    url: `${BASE_URL}${url}`,
    email: CONTACT_EMAIL,
    identifier: { "@type": "PropertyValue", name: "DUNS", value: DUNS },
    areaServed,
    serviceType,
    knowsAbout: [
      "Software Development",
      "AI Development",
      "ERP Development",
      "SaaS Development",
      "IT Staff Augmentation",
      "Insurance Software Development",
    ],
  };
}

export function buildFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, url }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${BASE_URL}${url}`,
    })),
  };
}
