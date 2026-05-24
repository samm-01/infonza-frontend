export const metadata = {
  title: "Software Development Company for US Businesses | Infonza",
  description:
    "Infonza delivers enterprise AI, ERP, SaaS, and offshore engineering for US companies. D-U-N-S registered, 200+ US projects, senior engineers with EST/PST timezone overlap. 60–70% lower cost than US hiring.",
  keywords: [
    "software development company USA",
    "software development company for US businesses",
    "software development company United States",
    "enterprise software development USA",
    "offshore software development for US companies",
    "software engineers for US startups",
    "software development partner USA",
    "US software development outsourcing",
    "IT company for US businesses",
    "software development services USA",
  ],
  openGraph: {
    title: "Software Development Company for US Businesses | Infonza",
    description:
      "Enterprise AI, ERP, SaaS, and offshore engineering for US companies — D-U-N-S registered, 200+ projects, senior engineers, EST/PST overlap.",
    url: "https://infonza.com/software-development-company-usa",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Software Development Company for US Businesses — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company for US Businesses | Infonza",
    description:
      "Enterprise AI, ERP, SaaS, and offshore engineering for US companies — D-U-N-S verified, senior engineers, EST/PST overlap.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/software-development-company-usa" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
