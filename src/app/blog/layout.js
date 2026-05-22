export const metadata = {
  title: "Engineering Blog | Software Development Insights | Infonza",
  description:
    "Engineering lessons, product decisions, and case study deep-dives from the Infonza team. Real insights on AI development, SaaS architecture, ERP implementation, and offshore engineering.",
  keywords: [
    "software development blog",
    "AI development insights",
    "SaaS development blog",
    "ERP implementation lessons",
    "offshore development blog",
    "engineering blog",
    "insurance software development blog",
  ],
  openGraph: {
    title: "Engineering Blog | Software Development Insights | Infonza",
    description:
      "Engineering lessons, product decisions, and case study deep-dives from the Infonza team. Real insights on AI, SaaS, ERP, and offshore engineering.",
    url: "https://infonza.com/blog",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Infonza Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog | Software Development Insights | Infonza",
    description:
      "Real insights on AI development, SaaS architecture, ERP implementation, and offshore engineering from the Infonza team.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/blog" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function BlogLayout({ children }) {
  return children;
}
