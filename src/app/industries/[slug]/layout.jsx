import { notFound } from "next/navigation";
import { INDUSTRY_CONFIGS } from "../_config/industry-data";

const BASE_URL = "https://infonza.com";

/* ── Per-industry metadata keywords map ──────────────────────────────────── */
const INDUSTRY_KEYWORDS = {
  education: [
    "EdTech software development",
    "custom LMS development",
    "learning management system",
    "student portal development",
    "education app development",
    "SCORM LMS",
    "FERPA compliant software",
    "e-learning platform development",
  ],
  "food-beverage": [
    "restaurant software development",
    "online ordering platform",
    "food delivery app development",
    "POS integration development",
    "restaurant loyalty app",
    "F&B technology company",
    "food tech software",
    "QSR technology",
  ],
  finance: [
    "fintech software development",
    "custom banking software",
    "payment gateway development",
    "lending platform development",
    "KYC AML compliance software",
    "financial software company",
    "wealth management platform",
    "neobank development",
  ],
  "retail-ecommerce": [
    "eCommerce development company",
    "headless commerce development",
    "custom online store development",
    "retail software development",
    "omnichannel commerce platform",
    "D2C eCommerce development",
    "POS system development",
    "Shopify custom development",
  ],
  "real-estate": [
    "real estate software development",
    "property listing portal development",
    "PropTech software company",
    "real estate CRM development",
    "virtual tour platform",
    "MLS integration development",
    "property management software",
    "real estate app development",
  ],
  healthcare: [
    "healthcare software development",
    "HIPAA compliant software",
    "patient portal development",
    "telemedicine platform development",
    "hospital management system",
    "EHR integration development",
    "health tech company",
    "clinical workflow automation",
  ],
  "transport-logistics": [
    "logistics software development",
    "fleet management system",
    "supply chain software",
    "warehouse management system development",
    "freight tracking platform",
    "transport management software",
    "last mile delivery app",
    "logistics technology company",
  ],
  "travel-hospitality": [
    "travel software development",
    "hotel booking engine development",
    "hospitality software company",
    "property management system development",
    "OTA platform development",
    "CRS software development",
    "vacation rental platform",
    "travel tech company",
  ],
  manufacturing: [
    "manufacturing software development",
    "custom ERP for manufacturing",
    "MES development",
    "production planning software",
    "quality management system development",
    "Industry 4.0 software",
    "manufacturing ERP company",
    "factory automation software",
  ],
  "media-entertainment": [
    "media software development",
    "streaming platform development",
    "OTT platform development",
    "content management system development",
    "media company software",
    "video streaming app development",
    "entertainment technology",
    "digital media platform",
  ],
};

/* ── Dynamic metadata ─────────────────────────────────────────────────────── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = INDUSTRY_CONFIGS[slug];
  if (!config) notFound();

  const url = `${BASE_URL}/industries/${slug}`;
  const title = `${config.label} Software Development — Custom ${config.label} Platforms | Infonza`;
  const description = config.subheadline;
  const keywords = INDUSTRY_KEYWORDS[slug] ?? [];

  return {
    title,
    description,
    keywords,
    openGraph: {
      type: "website",
      siteName: "Infonza Innovations",
      locale: "en_US",
      title: `${config.label} Software Development | Infonza`,
      description,
      url,
      images: [
        {
          url: `${BASE_URL}/infonza-logo.jpg`,
          width: 1200,
          height: 630,
          alt: `${config.label} Software Development — Infonza`,
        },
      ],
    },
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    twitter: {
      card: "summary_large_image",
      title: `${config.label} Software Development | Infonza`,
      description,
      images: [`${BASE_URL}/infonza-logo.jpg`],
    },
  };
}

/* ── Static params — pre-render all 10 slugs ─────────────────────────────── */
export function generateStaticParams() {
  return Object.keys(INDUSTRY_CONFIGS).map((slug) => ({ slug }));
}

export default function IndustrySlugLayout({ children }) {
  return children;
}
