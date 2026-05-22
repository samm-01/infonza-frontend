export const metadata = {
  title: "Document Approval System Development — Custom Workflows | Infonza",
  description:
    "Custom document approval system: multi-level serial/parallel routing, delegate/escalate, mobile approvals, e-signature (DocuSign/HelloSign), OTP verification, and full audit trail.",
  keywords: [
    "document approval system development",
    "multi-level approval workflow",
    "e-signature approval system",
    "document approval automation",
    "DocuSign integration development",
    "digital approval system",
    "paperless approval workflow",
    "document routing system",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Document Approval System Development — Custom Workflows | Infonza",
    description:
      "Build a multi-level document approval system with e-signature, mobile approvals, delegate/escalate, and a complete audit trail.",
    url: "https://infonza.com/document-management-system/document-approval-system",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Document Approval System Development — Custom Workflows | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/document-management-system/document-approval-system",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Document Approval System Development — Custom Workflows | Infonza",
    description: "Build a multi-level document approval system with e-signature, mobile approvals, delegate/escalate, and a complete audit trail.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
