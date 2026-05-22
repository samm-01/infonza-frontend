export const metadata = {
  title: "Insurance CRM Development — Custom Agency CRM Software",
  description:
    "Build a custom insurance CRM with lead management, policy tracking, renewal automation, and agent performance dashboards. Increase quote-to-bind speed by 45% and triple agent productivity.",
  keywords: [
    "insurance CRM development",
    "insurance agency CRM software",
    "custom insurance CRM",
    "lead management insurance",
    "policy tracking software",
    "renewal automation insurance",
    "agent performance dashboard",
    "insurtech CRM",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Insurance CRM Development — Custom Agency CRM Software | Infonza",
    description:
      "Custom insurance CRM with lead management, policy tracking, renewal automation, and agent dashboards. 45% faster quote-to-bind, 3× agent productivity.",
    url: "https://infonza.com/insurance-software-development/insurance-crm-development",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Insurance CRM Development — Custom Agency CRM Software | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/insurance-software-development/insurance-crm-development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance CRM Development — Custom Agency CRM Software | Infonza",
    description: "Custom insurance CRM with lead management, policy tracking, renewal automation, and agent dashboards. 45% faster quote-to-bind, 3× agent productivity.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
