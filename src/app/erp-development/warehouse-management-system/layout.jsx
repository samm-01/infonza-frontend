export const metadata = {
  title: "Custom Warehouse Management System (WMS) Development — Pick-Pack-Ship & Slot Optimisation",
  description:
    "Build a custom WMS with directed putaway, pick-pack-ship workflows, slot optimisation, labor management, yard management, and ERP/3PL/eCommerce integration. 50% picking accuracy improvement delivered.",
  keywords: [
    "warehouse management system development",
    "custom WMS development",
    "pick pack ship software development",
    "warehouse slot optimisation software",
    "WMS integration development",
    "labor management system warehouse",
    "yard management system development",
    "3PL warehouse software development",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Custom Warehouse Management System (WMS) Development | Infonza",
    description:
      "Build a custom WMS with directed putaway, pick-pack-ship, slot optimisation, labor management, and ERP/3PL/eCommerce integration.",
    url: "https://infonza.com/erp-development/warehouse-management-system",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Warehouse Management System (WMS) Development | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/erp-development/warehouse-management-system",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Warehouse Management System (WMS) Development | Infonza",
    description: "Build a custom WMS with directed putaway, pick-pack-ship, slot optimisation, labor management, and ERP/3PL/eCommerce integration.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
