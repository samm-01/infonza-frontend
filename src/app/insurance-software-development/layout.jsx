export const metadata = {
  title: "Insurance Software Development Company | InsurTech Solutions | Infonza",
  description:
    "Enterprise insurance software development — policy management, CRM, agent portals, quote comparison, mobile apps, and AI-powered automation. 50+ InsurTech projects delivered for US carriers and agencies.",
  keywords: [
    "insurance software development company",
    "insurtech solutions",
    "insurance CRM development",
    "policy management software",
    "insurance agent portal development",
    "insurance automation solutions",
    "quote comparison platform",
    "insurance mobile app development",
    "custom insurance technology",
    "insurance software development India",
  ],
  openGraph: {
    title: "Insurance Software Development Company | InsurTech Solutions | Infonza",
    description:
      "Enterprise insurance software — policy management, CRM, agent portals, quote comparison, mobile apps, and AI automation. 50+ InsurTech projects delivered.",
    url: "https://infonza.com/insurance-software-development",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Insurance Software Development Company — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Software Development Company | InsurTech Solutions | Infonza",
    description:
      "Enterprise insurance software — policy management, CRM, agent portals, quote comparison, and AI automation.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/insurance-software-development" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
