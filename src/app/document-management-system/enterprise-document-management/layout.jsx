export const metadata = {
  title: "Enterprise Document Management System Development | Infonza",
  description:
    "Full-featured enterprise DMS: hierarchical folders, metadata tagging, version control, full-text search, access control, audit trails, and retention policies. 90% faster document retrieval.",
  keywords: [
    "enterprise document management system",
    "enterprise DMS development",
    "document version control",
    "document metadata tagging",
    "full-text search DMS",
    "document access control",
    "audit trail document management",
    "retention policy software",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Enterprise Document Management System Development | Infonza",
    description:
      "Build an enterprise DMS with version control, full-text search, access control, and audit trails — 90% faster retrieval.",
    url: "https://infonza.com/document-management-system/enterprise-document-management",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Document Management System Development | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/document-management-system/enterprise-document-management",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Document Management System Development | Infonza",
    description: "Build an enterprise DMS with version control, full-text search, access control, and audit trails — 90% faster retrieval.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
