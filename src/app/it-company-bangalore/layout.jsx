export const metadata = {
  title: "IT Company in Bangalore | AI, SaaS & ERP Development | Infonza",
  description:
    "Infonza is a trusted IT company in Bangalore delivering enterprise AI development, custom ERP systems, SaaS products, and offshore engineering for US, UK, and global clients. Senior Bangalore engineers, US timezone overlap.",
  keywords: [
    "IT company Bangalore",
    "IT company in Bangalore",
    "software company Bangalore",
    "software development Bangalore",
    "AI development Bangalore",
    "ERP development Bangalore",
    "SaaS development Bangalore",
    "offshore development Bangalore",
    "web development company Bangalore",
    "IT services Bangalore",
  ],
  openGraph: {
    title: "IT Company in Bangalore | AI, SaaS & ERP Development | Infonza",
    description:
      "Trusted IT company in Bangalore — enterprise AI, SaaS, ERP development, and offshore engineering for US and UK businesses.",
    url: "https://infonza.com/it-company-bangalore",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "IT Company in Bangalore — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Company in Bangalore | AI, SaaS & ERP Development | Infonza",
    description:
      "Trusted IT company in Bangalore — enterprise AI, SaaS, ERP, and offshore engineering for global businesses.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/it-company-bangalore" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
