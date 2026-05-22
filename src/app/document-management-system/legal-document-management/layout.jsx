export const metadata = {
  title: "Legal Document Management System Development | Infonza",
  description:
    "Legal DMS for law firms and in-house legal: contract repository, matter management, deadline tracking, redline comparison, privilege tagging, conflict checking, and billing integration.",
  keywords: [
    "legal document management system development",
    "law firm DMS",
    "legal document management software",
    "contract management system",
    "matter management software",
    "legal deadline tracking software",
    "privilege tagging software",
    "legal billing integration",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Legal Document Management System Development | Infonza",
    description:
      "Build a legal DMS with contract repository, matter management, deadline tracking, redline comparison, and conflict checking.",
    url: "https://infonza.com/document-management-system/legal-document-management",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Legal Document Management System Development | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/document-management-system/legal-document-management",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Document Management System Development | Infonza",
    description: "Build a legal DMS with contract repository, matter management, deadline tracking, redline comparison, and conflict checking.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
