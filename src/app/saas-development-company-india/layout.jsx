export const metadata = {
  title: "SaaS Development Company India | B2B SaaS & Multi-Tenant Products | Infonza",
  description:
    "Infonza is a leading SaaS development company in India building multi-tenant B2B SaaS products for US, UK, and global enterprises. Architecture, billing, security, and cloud infrastructure. Senior engineers, US timezone overlap.",
  keywords: [
    "SaaS development company India",
    "SaaS development India",
    "SaaS product development India",
    "B2B SaaS development India",
    "multi-tenant SaaS India",
    "SaaS startup India",
    "SaaS engineering India",
    "SaaS developers India",
    "cloud SaaS development India",
    "SaaS MVP development India",
  ],
  openGraph: {
    title: "SaaS Development Company India | B2B SaaS & Multi-Tenant Products | Infonza",
    description:
      "Leading SaaS development company in India — multi-tenant B2B SaaS products, architecture, billing, and cloud infrastructure for global enterprises.",
    url: "https://infonza.com/saas-development-company-india",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "SaaS Development Company India — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development Company India | B2B SaaS & Multi-Tenant Products | Infonza",
    description:
      "Leading SaaS development company in India — multi-tenant B2B SaaS, billing, security, and cloud for global enterprises.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/saas-development-company-india" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
