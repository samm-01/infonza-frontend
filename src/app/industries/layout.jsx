export const metadata = {
  title: "Industries We Serve — Domain-Expert Software Development | Infonza",
  description:
    "Infonza builds custom software for Education, Healthcare, Finance, Retail, Real Estate, F&B, Transport, Travel, Manufacturing & Media. Industry-specific expertise, compliance-first development.",
  keywords: [
    "industry software development",
    "EdTech development",
    "healthcare software development",
    "fintech development company",
    "retail ecommerce development",
    "restaurant technology",
    "logistics software development",
    "real estate software",
    "manufacturing ERP development",
    "media streaming platform development",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Industries We Serve — Domain-Expert Software Development | Infonza",
    description:
      "Custom software for Education, Healthcare, Finance, Retail, Real Estate, F&B, Transport, Travel, Manufacturing & Media. 10 industry verticals, compliance-first.",
    url: "https://infonza.com/industries",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Infonza Industries — Domain-Expert Software Development",
      },
    ],
  },
  alternates: {
    canonical: "https://infonza.com/industries",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve — Domain-Expert Software Development | Infonza",
    description:
      "Custom software for 10 industries. Education, Healthcare, Finance, Retail, Logistics & more. Compliance-first, domain-expert teams.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function IndustriesLayout({ children }) {
  return children;
}
