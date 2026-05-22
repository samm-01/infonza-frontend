export const metadata = {
  title: "Custom Logistics ERP Software Development — Fleet, Freight & 3PL Systems",
  description:
    "Build a logistics ERP covering fleet management, route optimisation, freight billing, carrier management, real-time tracking, and 3PL integration. 28% fuel cost reduction delivered.",
  keywords: [
    "logistics ERP software development",
    "custom logistics ERP",
    "fleet management ERP development",
    "freight billing software development",
    "3PL ERP software",
    "route optimisation ERP",
    "transportation management system development",
    "logistics management software",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Custom Logistics ERP Software Development — Fleet & Freight Systems | Infonza",
    description:
      "Build a logistics ERP covering fleet management, route optimisation, freight billing, carrier management, and real-time tracking.",
    url: "https://infonza.com/erp-development/logistics-erp-software",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Logistics ERP Software Development — Fleet & Freight Systems | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/erp-development/logistics-erp-software",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Logistics ERP Software Development — Fleet & Freight Systems | Infonza",
    description: "Build a logistics ERP covering fleet management, route optimisation, freight billing, carrier management, and real-time tracking.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
