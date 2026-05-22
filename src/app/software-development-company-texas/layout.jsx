export const metadata = {
  title: "Software Development Company for Texas Businesses | Infonza",
  description:
    "Infonza delivers enterprise AI, ERP, SaaS, and offshore engineering for Texas businesses — Austin, Dallas, Houston. D-U-N-S registered, senior engineers, CST timezone overlap. Trusted by TX startups and enterprises.",
  keywords: [
    "software development company Texas",
    "software development company Austin",
    "software development company Dallas",
    "IT company Texas",
    "software engineers Texas",
    "enterprise software development Texas",
    "offshore software development Texas",
    "custom software development Austin",
    "software development partner Texas",
    "tech company Texas",
  ],
  openGraph: {
    title: "Software Development Company for Texas Businesses | Infonza",
    description:
      "Enterprise AI, ERP, SaaS, and offshore engineering for Texas businesses — Austin, Dallas, Houston. D-U-N-S registered, senior engineers, CST overlap.",
    url: "https://infonza.com/software-development-company-texas",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Software Development Company for Texas — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company for Texas Businesses | Infonza",
    description:
      "Enterprise AI, ERP, SaaS, and offshore engineering for Austin, Dallas, and Houston — D-U-N-S verified, senior engineers, CST overlap.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/software-development-company-texas" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
