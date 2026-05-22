export const metadata = {
  title: "Policy Management Software Development — Custom Policy Administration",
  description:
    "Custom policy management software for insurance carriers and MGAs. End-to-end policy lifecycle — underwriting, issuance, endorsements, renewals, cancellations. 70% less manual data entry.",
  keywords: [
    "policy management software development",
    "insurance policy administration system",
    "custom policy management system",
    "underwriting software development",
    "policy issuance software",
    "insurance policy lifecycle",
    "multi-line insurance software",
    "policy administration platform",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Policy Management Software Development — Custom Policy Administration | Infonza",
    description:
      "Custom policy management software with full lifecycle support — underwriting, issuance, endorsements, renewals, multi-line. 70% reduction in manual data entry.",
    url: "https://infonza.com/insurance-software-development/policy-management-software",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Policy Management Software Development — Custom Policy Administration | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/insurance-software-development/policy-management-software",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Policy Management Software Development — Custom Policy Administration | Infonza",
    description: "Custom policy management software with full lifecycle support — underwriting, issuance, endorsements, renewals, multi-line. 70% reduction in manual data entry.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
