export const metadata = {
  title: "ERP Software for Cosmetics & Beauty Industry — Formula, Compliance & Batch Management",
  description:
    "Custom ERP for cosmetics and beauty manufacturers — formula & batch management, FDA/EU compliance tracking, shelf-life control, private label management, and retailer EDI integration. 100% compliance audit pass rate.",
  keywords: [
    "cosmetic industry ERP software",
    "beauty industry ERP development",
    "cosmetics ERP system",
    "FDA compliance ERP software",
    "batch management software cosmetics",
    "formula management ERP",
    "private label cosmetics ERP",
    "cosmetic manufacturing software",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "ERP Software for Cosmetics & Beauty Industry — Formula & Compliance | Infonza",
    description:
      "Custom ERP for cosmetics and beauty manufacturers — formula management, FDA/EU compliance, shelf-life control, and retailer EDI integration.",
    url: "https://infonza.com/erp-development/cosmetic-industry-erp",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "ERP Software for Cosmetics & Beauty Industry — Formula & Compliance | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/erp-development/cosmetic-industry-erp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software for Cosmetics & Beauty Industry — Formula & Compliance | Infonza",
    description: "Custom ERP for cosmetics and beauty manufacturers — formula management, FDA/EU compliance, shelf-life control, and retailer EDI integration.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
