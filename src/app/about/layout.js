export const metadata = {
  title: "About Infonza | Enterprise Software Engineering Company | Infonza",
  description:
    "Infonza Innovations is an enterprise software engineering company — AI-first, insurance technology specialist, and offshore engineering partner for US startups and mid-market companies. 12+ years, 200+ projects.",
  keywords: [
    "about Infonza Innovations",
    "enterprise software company",
    "software development company India",
    "AI development company",
    "offshore software development",
    "Infonza team",
  ],
  openGraph: {
    title: "About Infonza | Enterprise Software Engineering Company",
    description:
      "Enterprise software engineering company — AI-first, insurance technology specialist, and offshore engineering partner for US startups and mid-market companies.",
    url: "https://infonza.com/about",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "About Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Infonza | Enterprise Software Engineering Company",
    description:
      "AI-first enterprise software engineering company — offshore partner for US startups and mid-market businesses.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/about" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function AboutLayout({ children }) {
  return children;
}
