export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Infonza Innovations. Read the terms governing use of our website and software development services.",
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Terms of Service | Infonza Innovations",
    description:
      "Terms of service for Infonza Innovations. Read the terms governing use of our website and services.",
    url: "https://infonza.com/terms-of-service",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service | Infonza Innovations",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Infonza Innovations",
    description: "Terms of service for Infonza Innovations. Read the terms governing use of our website and services.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function TermsLayout({ children }) {
  return children;
}
