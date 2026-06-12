export const metadata = {
  title: "AI Lead Generation Automation — Scraping, Qualifying & Outreach | Infonza",
  description:
    "Build an AI-powered lead generation engine that scrapes leads, qualifies them, enriches data, and launches automated outreach — all on autopilot.",
  keywords: [
    "AI lead generation automation",
    "automated lead scraping",
    "AI lead qualification",
    "lead enrichment automation",
    "AI outreach automation",
    "lead scoring AI",
    "automated prospecting",
    "AI pipeline automation",
    "lead generation AI system",
    "B2B lead generation AI",
  ],
  openGraph: {
    title: "AI Lead Generation Automation — Scraping, Qualifying & Outreach | Infonza",
    description:
      "Build an AI-powered lead generation engine that scrapes leads, qualifies them, enriches data, and launches automated outreach — all on autopilot.",
    url: "https://infonza.com/ai-solutions/lead-generation-automation",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Lead Generation Automation — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Generation Automation — Scraping, Qualifying & Outreach | Infonza",
    description:
      "Build an AI-powered lead generation engine that scrapes leads, qualifies them, enriches data, and launches automated outreach — all on autopilot.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/lead-generation-automation" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
