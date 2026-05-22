export const metadata = {
  title: "Portfolio — Software Projects We've Built",
  description:
    "Insurance CRM platforms, construction ERP systems, e-learning SaaS, and marketplace software — real applications built by Infonza for real clients.",
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Portfolio — Software Projects We've Built | Infonza Innovations",
    description:
      "Insurance CRM platforms, construction ERP systems, e-learning SaaS, and marketplace software — real applications built by Infonza for real clients.",
    url: "https://infonza.com/portfolio",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio — Software Projects We",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Software Projects We",
    description: "Insurance CRM platforms, construction ERP systems, e-learning SaaS, and marketplace software — real applications built by Infonza for real clients.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function PortfolioLayout({ children }) {
  return children;
}
