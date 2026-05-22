export const metadata = {
  title: "CRM SaaS Development — Build a Scalable CRM Product | Infonza",
  description:
    "Custom CRM SaaS development: pipeline management, contact intelligence, email sequences, webhook integrations, open API, and white-label options. 5× cheaper than Salesforce for your customers.",
  keywords: [
    "CRM SaaS development",
    "custom CRM development",
    "CRM software development company",
    "white-label CRM",
    "CRM SaaS product",
    "pipeline management software",
    "contact intelligence CRM",
    "CRM API development",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "CRM SaaS Development — Build a Scalable CRM Product | Infonza",
    description:
      "Launch a full-featured CRM SaaS with pipeline management, contact intelligence, email automation, and white-label options.",
    url: "https://infonza.com/saas-development/crm-saas-development",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "CRM SaaS Development — Build a Scalable CRM Product | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/saas-development/crm-saas-development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM SaaS Development — Build a Scalable CRM Product | Infonza",
    description: "Launch a full-featured CRM SaaS with pipeline management, contact intelligence, email automation, and white-label options.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
