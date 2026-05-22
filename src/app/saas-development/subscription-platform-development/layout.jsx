export const metadata = {
  title: "Subscription Platform Development — Billing & Payments | Infonza",
  description:
    "End-to-end subscription platform development: Stripe/Chargebee integration, usage-based billing, trial management, dunning automation, revenue recognition, and real-time MRR analytics.",
  keywords: [
    "subscription platform development",
    "subscription billing development",
    "Stripe integration development",
    "usage-based billing SaaS",
    "dunning automation",
    "MRR analytics dashboard",
    "subscription management software",
    "revenue recognition software",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Subscription Platform Development — Billing & Payments | Infonza",
    description:
      "Build a bulletproof subscription billing platform with smart dunning, usage-based pricing, and real-time MRR dashboards.",
    url: "https://infonza.com/saas-development/subscription-platform-development",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Subscription Platform Development — Billing & Payments | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/saas-development/subscription-platform-development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscription Platform Development — Billing & Payments | Infonza",
    description: "Build a bulletproof subscription billing platform with smart dunning, usage-based pricing, and real-time MRR dashboards.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
