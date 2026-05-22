export const metadata = {
  title: "Custom Inventory Management System Development — Real-Time Stock & RFID Tracking",
  description:
    "Build a custom inventory management system with real-time stock tracking, multi-warehouse support, barcode/RFID integration, reorder automation, and demand forecasting. 60% reduction in stockouts delivered.",
  keywords: [
    "custom inventory management system development",
    "inventory management software development",
    "real-time inventory tracking system",
    "RFID inventory management",
    "multi-warehouse inventory system",
    "demand forecasting software",
    "inventory ERP development",
    "barcode inventory system development",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Custom Inventory Management System Development — Real-Time Stock & RFID | Infonza",
    description:
      "Build a custom inventory management system with real-time stock tracking, multi-warehouse support, barcode/RFID integration, and demand forecasting.",
    url: "https://infonza.com/erp-development/inventory-management-system",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Inventory Management System Development — Real-Time Stock & RFID | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/erp-development/inventory-management-system",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Inventory Management System Development — Real-Time Stock & RFID | Infonza",
    description: "Build a custom inventory management system with real-time stock tracking, multi-warehouse support, barcode/RFID integration, and demand forecasting.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
