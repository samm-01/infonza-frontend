export const metadata = {
  title: "Insurance Agent Portal Development — Self-Service Agent Platform",
  description:
    "Custom insurance agent portal development — AOA licensing, book of business management, commissions, training, and onboarding. 80% less admin, 50% faster agent onboarding, 95% satisfaction.",
  keywords: [
    "insurance agent portal development",
    "insurance agent self-service portal",
    "agent management platform insurance",
    "insurance producer portal",
    "agent onboarding software",
    "book of business management",
    "agent commission portal",
    "insurance distribution technology",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Insurance Agent Portal Development — Self-Service Agent Platform | Infonza",
    description:
      "Custom insurance agent portal — AOA licensing, book of business, commissions, and training. 80% less admin, 50% faster onboarding.",
    url: "https://infonza.com/insurance-software-development/insurance-agent-portal",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Insurance Agent Portal Development — Self-Service Agent Platform | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/insurance-software-development/insurance-agent-portal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Agent Portal Development — Self-Service Agent Platform | Infonza",
    description: "Custom insurance agent portal — AOA licensing, book of business, commissions, and training. 80% less admin, 50% faster onboarding.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
