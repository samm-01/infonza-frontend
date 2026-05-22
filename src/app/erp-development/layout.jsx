export const metadata = {
  title: "ERP Software Development Company | Custom ERP Solutions | Infonza",
  description:
    "Build a fully custom ERP system tailored to your operations — manufacturing, logistics, inventory, warehouse, and beyond. Replace SAP/Oracle overhead with a lean system built for your exact workflows. 80+ ERP projects delivered.",
  keywords: [
    "ERP software development company",
    "custom ERP development",
    "enterprise resource planning development",
    "custom ERP solutions",
    "manufacturing ERP development",
    "logistics ERP software",
    "inventory management system development",
    "warehouse management system",
    "ERP development India",
    "offshore ERP development",
  ],
  openGraph: {
    title: "ERP Software Development Company | Custom ERP Solutions | Infonza",
    description:
      "Fully custom ERP systems for manufacturing, logistics, inventory, and warehouse operations. Replace SAP/Oracle overhead with a lean, precise system.",
    url: "https://infonza.com/erp-development",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "ERP Software Development Company — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software Development Company | Custom ERP Solutions | Infonza",
    description:
      "Fully custom ERP systems for manufacturing, logistics, inventory, and warehouse operations. 80+ ERP projects delivered.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/erp-development" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function ERPDevelopmentLayout({ children }) {
  return children;
}
