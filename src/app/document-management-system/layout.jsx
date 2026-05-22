export const metadata = {
  title: "Document Management System Development | Enterprise DMS | Infonza",
  description:
    "Infonza builds enterprise document management systems — intelligent classification, workflow automation, e-signature, compliance, and OCR. Replace SharePoint chaos with a DMS built for your business. 94% auto-classification accuracy.",
  keywords: [
    "document management system development",
    "enterprise DMS development",
    "custom document management software",
    "document workflow automation",
    "DMS development company",
    "enterprise content management",
    "document automation software",
    "legal document management",
    "cloud document storage",
    "document approval system",
  ],
  openGraph: {
    title: "Document Management System Development | Enterprise DMS | Infonza",
    description:
      "Replace SharePoint and paper chaos with an intelligent DMS — 94% auto-classification, 80% less manual work, built for your enterprise.",
    url: "https://infonza.com/document-management-system",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Document Management System Development — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Document Management System Development | Enterprise DMS | Infonza",
    description:
      "Intelligent enterprise DMS — 94% auto-classification, workflow automation, e-signature, and compliance. Built for your business.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/document-management-system" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
