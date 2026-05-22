export const metadata = {
  title: "Software Development Services — AI, ERP, SaaS, Insurance & More",
  description:
    "Enterprise software development across 6 verticals: AI development, insurance software, ERP systems, SaaS products, IT staff augmentation, and document management. Senior engineers, transparent delivery.",
  keywords: [
    "software development company",
    "AI development services",
    "insurance software development",
    "custom ERP development",
    "SaaS development company",
    "IT staff augmentation",
    "document management system",
    "enterprise software development India",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Software Development Services — AI, ERP, SaaS & Insurance | Infonza Innovations",
    description:
      "Enterprise software development across 6 verticals: AI, insurance tech, ERP, SaaS, staff augmentation, and DMS. 150+ global clients, 500+ projects delivered.",
    url: "https://infonza.com/services",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Software Development Services — AI, ERP, SaaS & Insurance | Infonza Innovations",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services — AI, ERP, SaaS & Insurance | Infonza Innovations",
    description: "Enterprise software development across 6 verticals: AI, insurance tech, ERP, SaaS, staff augmentation, and DMS. 150+ global clients, 500+ projects delivered.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
