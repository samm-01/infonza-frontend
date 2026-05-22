export const metadata = {
  title: "AI Workflow Automation Services — Intelligent Process Automation",
  description:
    "Automate repetitive business workflows with AI — document processing, email triage, approval flows, and data extraction. 80% time saved, 60% error reduction.",
  keywords: [
    "AI workflow automation services",
    "intelligent process automation",
    "AI document processing",
    "business process automation",
    "AI email automation",
    "workflow AI",
    "enterprise automation",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "AI Workflow Automation Services — Intelligent Process Automation",
    description:
      "Automate repetitive business workflows with AI — document processing, email triage, approval flows, and data extraction.",
    url: "https://infonza.com/ai-development/ai-workflow-automation",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Workflow Automation Services — Intelligent Process Automation",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/ai-development/ai-workflow-automation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflow Automation Services — Intelligent Process Automation",
    description: "Automate repetitive business workflows with AI — document processing, email triage, approval flows, and data extraction.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
