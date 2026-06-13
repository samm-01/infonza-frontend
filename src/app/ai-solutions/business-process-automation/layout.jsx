export const metadata = {
  title: "AI Business Process Automation — Workflow & Department Automation | Infonza",
  description:
    "Automate entire business departments with AI — operations, HR, finance, procurement, and cross-functional workflows that eliminate manual work and reduce costs.",
  keywords: [
    "AI business process automation",
    "business process automation AI",
    "workflow automation AI",
    "HR automation AI",
    "finance automation AI",
    "operations automation",
    "department automation AI",
    "cross-functional workflow automation",
    "enterprise automation AI",
    "AI process automation company",
  ],
  openGraph: {
    title: "AI Business Process Automation — Workflow & Department Automation | Infonza",
    description:
      "Automate entire business departments with AI — operations, HR, finance, procurement, and cross-functional workflows that eliminate manual work and reduce costs.",
    url: "https://infonza.com/ai-solutions/business-process-automation",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Business Process Automation — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Business Process Automation — Workflow & Department Automation | Infonza",
    description:
      "Automate entire business departments with AI — HR, finance, operations, and cross-functional workflows that eliminate manual work.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/business-process-automation" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
