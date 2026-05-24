export const metadata = {
  title: "Software Development Company for California Businesses | Infonza",
  description:
    "Infonza delivers enterprise AI, SaaS, and offshore engineering for California businesses — Silicon Valley, LA, San Diego. D-U-N-S registered, senior engineers, PST timezone overlap. 60–70% below Bay Area rates.",
  keywords: [
    "software development company California",
    "software development company Silicon Valley",
    "software development company San Francisco",
    "IT company California",
    "software engineers California",
    "enterprise software development California",
    "offshore software development California",
    "software development partner Silicon Valley",
    "startup software development California",
    "SaaS development company California",
  ],
  openGraph: {
    title: "Software Development Company for California Businesses | Infonza",
    description:
      "Enterprise AI, SaaS, and offshore engineering for California businesses — Silicon Valley to LA. D-U-N-S registered, PST overlap, 60–70% below Bay Area rates.",
    url: "https://infonza.com/software-development-company-california",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Software Development Company for California — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company for California Businesses | Infonza",
    description:
      "Enterprise AI, SaaS, and offshore engineering for California startups and enterprises — PST overlap, senior engineers, D-U-N-S verified.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/software-development-company-california" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
