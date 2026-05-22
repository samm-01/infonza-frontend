export const metadata = {
  title: "Insurance Quote Comparison Platform Development — Multi-Carrier Quoting Engine",
  description:
    "Build a real-time insurance quote comparison platform — multi-carrier API aggregation, rate filing integration, side-by-side comparison, and bind-online workflow. 5× quote volume, sub-3s generation.",
  keywords: [
    "insurance quote comparison platform development",
    "multi-carrier insurance quoting engine",
    "real-time insurance quoting",
    "insurance API aggregation",
    "comparative rater development",
    "bind-online insurance platform",
    "insurance rate comparison software",
    "insurtech quoting platform",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Insurance Quote Comparison Platform Development | Infonza",
    description:
      "Multi-carrier real-time quoting engine with API aggregation, side-by-side comparison, and bind-online workflow. 5× quote volume, sub-3s generation.",
    url: "https://infonza.com/insurance-software-development/quote-comparison-platform",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Insurance Quote Comparison Platform Development | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/insurance-software-development/quote-comparison-platform",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Quote Comparison Platform Development | Infonza",
    description: "Multi-carrier real-time quoting engine with API aggregation, side-by-side comparison, and bind-online workflow. 5× quote volume, sub-3s generation.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
