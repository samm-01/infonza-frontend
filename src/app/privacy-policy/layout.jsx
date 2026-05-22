export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Infonza Innovations. Learn how we collect, use, and protect your personal data when you use our website or engage our services.",
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Privacy Policy | Infonza Innovations",
    description:
      "Privacy policy for Infonza Innovations. Learn how we collect, use, and protect your personal data.",
    url: "https://infonza.com/privacy-policy",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Infonza Innovations",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Infonza Innovations",
    description: "Privacy policy for Infonza Innovations. Learn how we collect, use, and protect your personal data.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
