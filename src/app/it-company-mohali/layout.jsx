export const metadata = {
  title: "IT Company in Mohali | SaaS, AI & ERP Development | Infonza",
  description:
    "Infonza is a leading IT company in Mohali delivering enterprise SaaS, AI development, ERP systems, and offshore engineering teams for global businesses. Based in Punjab's IT capital.",
  keywords: [
    "IT company Mohali",
    "IT company in Mohali",
    "software company Mohali",
    "software development Mohali",
    "AI development Mohali",
    "ERP development Mohali",
    "SaaS development Mohali",
    "offshore development Mohali",
    "web development Mohali",
    "IT services Mohali Punjab",
  ],
  openGraph: {
    title: "IT Company in Mohali | SaaS, AI & ERP Development | Infonza",
    description:
      "Leading IT company in Mohali delivering enterprise SaaS, AI development, ERP systems, and offshore engineering. Based in Punjab's IT capital.",
    url: "https://infonza.com/it-company-mohali",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "IT Company in Mohali — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Company in Mohali | SaaS, AI & ERP Development | Infonza",
    description: "Leading IT company in Mohali — enterprise SaaS, AI, ERP, and offshore engineering for global businesses.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/it-company-mohali" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
