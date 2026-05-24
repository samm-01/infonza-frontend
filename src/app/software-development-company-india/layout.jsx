export const metadata = {
  title: "Software Development Company India | Enterprise Engineering | Infonza",
  description:
    "Infonza is a leading software development company in India delivering AI, ERP, SaaS, and offshore engineering to US, UK, and global enterprises. D-U-N-S registered, 200+ projects delivered, US timezone overlap.",
  keywords: [
    "software development company India",
    "software development company in India",
    "software company India",
    "IT company India",
    "custom software development India",
    "enterprise software India",
    "software developers India",
    "software engineering company India",
    "web development company India",
    "application development India",
  ],
  openGraph: {
    title: "Software Development Company India | Enterprise Engineering | Infonza",
    description:
      "Leading software development company in India — AI, ERP, SaaS, and offshore engineering for US, UK, and global enterprises.",
    url: "https://infonza.com/software-development-company-india",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Software Development Company India — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company India | Enterprise Engineering | Infonza",
    description:
      "Leading software development company in India — AI, ERP, SaaS, and offshore engineering for global enterprises.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/software-development-company-india" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
