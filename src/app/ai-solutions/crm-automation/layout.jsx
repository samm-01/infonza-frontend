export const metadata = {
  title: "AI CRM Automation — HubSpot, Salesforce & Zoho Automation | Infonza",
  description:
    "Automate your CRM workflows with AI — eliminate manual data entry, auto-update records, trigger follow-up sequences, and keep your pipeline clean and current.",
  keywords: [
    "AI CRM automation",
    "HubSpot automation",
    "Salesforce automation",
    "Zoho CRM automation",
    "CRM data entry automation",
    "AI pipeline management",
    "CRM workflow automation",
    "automated CRM updates",
    "AI contact enrichment",
    "CRM AI integration",
  ],
  openGraph: {
    title: "AI CRM Automation — HubSpot, Salesforce & Zoho Automation | Infonza",
    description:
      "Automate your CRM workflows with AI — eliminate manual data entry, auto-update records, trigger follow-up sequences, and keep your pipeline clean and current.",
    url: "https://infonza.com/ai-solutions/crm-automation",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI CRM Automation — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI CRM Automation — HubSpot, Salesforce & Zoho Automation | Infonza",
    description:
      "Automate your CRM workflows with AI — eliminate manual data entry, auto-update records, trigger follow-up sequences, and keep your pipeline clean and current.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/crm-automation" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
