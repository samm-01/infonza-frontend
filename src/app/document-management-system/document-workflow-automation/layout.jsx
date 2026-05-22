export const metadata = {
  title: "Document Workflow Automation Development | Infonza",
  description:
    "Automate document-centric business processes: approval workflows, e-signature routing, conditional branching, deadline escalation, parallel reviews, and ERP/CRM integration. 70% faster approvals.",
  keywords: [
    "document workflow automation",
    "document approval workflow development",
    "e-signature workflow automation",
    "document routing software",
    "automated document approval",
    "workflow automation development",
    "document process automation",
    "approval workflow software",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Document Workflow Automation Development | Infonza",
    description:
      "Build automated document workflows with conditional routing, e-signatures, escalation, and ERP/CRM integration — 70% faster approvals.",
    url: "https://infonza.com/document-management-system/document-workflow-automation",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Document Workflow Automation Development | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/document-management-system/document-workflow-automation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Document Workflow Automation Development | Infonza",
    description: "Build automated document workflows with conditional routing, e-signatures, escalation, and ERP/CRM integration — 70% faster approvals.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
