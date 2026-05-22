export const metadata = {
  title: "Insurance Automation Solutions — AI-Powered Claims & Process Automation",
  description:
    "AI-powered insurance automation — claims processing automation, OCR document extraction, underwriting automation, fraud detection, and straight-through processing. 80% claims automation rate.",
  keywords: [
    "insurance automation solutions",
    "insurance process automation",
    "claims processing automation",
    "insurance OCR document extraction",
    "underwriting automation",
    "insurance fraud detection",
    "straight-through processing insurance",
    "AI insurance automation",
    "insurtech automation platform",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Insurance Automation Solutions — AI-Powered Claims & Process Automation | Infonza",
    description:
      "AI-powered insurance process automation — claims, OCR, underwriting, fraud detection. 80% automation rate, 3× speed, $2.1M avg annual savings.",
    url: "https://infonza.com/insurance-software-development/insurance-automation-solutions",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Insurance Automation Solutions — AI-Powered Claims & Process Automation | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/insurance-software-development/insurance-automation-solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Automation Solutions — AI-Powered Claims & Process Automation | Infonza",
    description: "AI-powered insurance process automation — claims, OCR, underwriting, fraud detection. 80% automation rate, 3× speed, $2.1M avg annual savings.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
