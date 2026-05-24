export const metadata = {
  title: "Software Development Company for New York Businesses | Infonza",
  description:
    "Infonza delivers enterprise AI, ERP, SaaS, and offshore engineering for New York businesses. D-U-N-S registered, senior engineers, EST timezone overlap. Trusted by NYC startups and enterprises.",
  keywords: [
    "software development company New York",
    "software development company NYC",
    "software development New York",
    "IT company New York",
    "software engineers New York",
    "enterprise software development New York",
    "offshore software development New York",
    "custom software development NYC",
    "app development company New York",
    "software development partner New York",
  ],
  openGraph: {
    title: "Software Development Company for New York Businesses | Infonza",
    description:
      "Enterprise AI, ERP, SaaS, and offshore engineering for New York businesses — D-U-N-S registered, senior engineers, EST overlap.",
    url: "https://infonza.com/software-development-company-new-york",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Software Development Company for New York — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company for New York Businesses | Infonza",
    description:
      "Enterprise AI, ERP, SaaS, and offshore engineering for NYC and New York businesses — D-U-N-S verified, senior engineers.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/software-development-company-new-york" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
