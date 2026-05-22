export const metadata = {
  title: "SaaS Development Company | Custom B2B SaaS Products | Infonza",
  description:
    "Infonza is a SaaS development company that builds scalable, multi-tenant SaaS products for B2B enterprises — end-to-end architecture, billing, security, and cloud infrastructure. 60+ SaaS products launched.",
  keywords: [
    "SaaS development company",
    "custom SaaS development",
    "B2B SaaS development",
    "multi-tenant SaaS development",
    "SaaS product development",
    "subscription platform development",
    "cloud SaaS solutions",
    "SaaS architecture company",
    "CRM SaaS development",
    "offshore SaaS development",
  ],
  openGraph: {
    title: "SaaS Development Company | Custom B2B SaaS Products | Infonza",
    description:
      "Scalable, multi-tenant B2B SaaS products — end-to-end: architecture, billing, security, and cloud infrastructure. 60+ SaaS products launched.",
    url: "https://infonza.com/saas-development",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "SaaS Development Company — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development Company | Custom B2B SaaS Products | Infonza",
    description:
      "Scalable, multi-tenant B2B SaaS products — architecture, billing, security, and cloud infrastructure included.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/saas-development" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
