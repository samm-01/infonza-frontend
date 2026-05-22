export const metadata = {
  title: "Custom ERP Solutions for Growing Businesses — Finance, HR & Operations",
  description:
    "Build a fully custom ERP when SAP is overkill and QuickBooks isn't enough. We design and develop bespoke ERP systems for finance, HR, procurement, inventory, and project management — tailored to your exact workflows.",
  keywords: [
    "custom ERP solutions",
    "bespoke ERP development",
    "small business ERP",
    "mid-market ERP",
    "custom ERP software development",
    "affordable ERP development",
    "ERP for growing businesses",
    "QuickBooks alternative ERP",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Custom ERP Solutions for Growing Businesses — Finance, HR & Operations | Infonza",
    description:
      "Build a fully custom ERP when SAP is overkill and QuickBooks isn't enough. Bespoke ERP systems for finance, HR, procurement, and operations.",
    url: "https://infonza.com/erp-development/custom-erp-solutions",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom ERP Solutions for Growing Businesses — Finance, HR & Operations | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/erp-development/custom-erp-solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom ERP Solutions for Growing Businesses — Finance, HR & Operations | Infonza",
    description: "Build a fully custom ERP when SAP is overkill and QuickBooks isn",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
