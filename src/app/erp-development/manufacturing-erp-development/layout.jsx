export const metadata = {
  title: "Custom Manufacturing ERP Development — MRP, Shop Floor & BOM Control",
  description:
    "Build a manufacturing ERP tailored to your production workflows — MRP/MPS scheduling, shop floor control, BOM management, quality control, and machine utilisation tracking. 35% production efficiency gains delivered.",
  keywords: [
    "manufacturing ERP development",
    "custom manufacturing ERP software",
    "MRP software development",
    "shop floor control system",
    "BOM management software",
    "production planning ERP",
    "manufacturing execution system development",
    "ERP for manufacturing companies",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Custom Manufacturing ERP Development — MRP & Shop Floor Control | Infonza",
    description:
      "Build a manufacturing ERP tailored to your production workflows — MRP/MPS scheduling, shop floor control, BOM management, and quality control.",
    url: "https://infonza.com/erp-development/manufacturing-erp-development",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Manufacturing ERP Development — MRP & Shop Floor Control | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/erp-development/manufacturing-erp-development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Manufacturing ERP Development — MRP & Shop Floor Control | Infonza",
    description: "Build a manufacturing ERP tailored to your production workflows — MRP/MPS scheduling, shop floor control, BOM management, and quality control.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
