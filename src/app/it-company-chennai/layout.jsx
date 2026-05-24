export const metadata = {
  title: "IT Company in Chennai | AI, SaaS & Enterprise Software | Infonza",
  description:
    "Infonza is a trusted IT company in Chennai delivering enterprise AI development, custom software, SaaS products, and offshore engineering for US, UK, and global clients. Senior Chennai engineers, US timezone overlap.",
  keywords: [
    "IT company Chennai",
    "IT company in Chennai",
    "software company Chennai",
    "software development Chennai",
    "AI development Chennai",
    "ERP development Chennai",
    "SaaS development Chennai",
    "offshore development Chennai",
    "web development company Chennai",
    "IT services Chennai",
  ],
  openGraph: {
    title: "IT Company in Chennai | AI, SaaS & Enterprise Software | Infonza",
    description:
      "Trusted IT company in Chennai — enterprise AI, SaaS, custom software, and offshore engineering for US and UK businesses.",
    url: "https://infonza.com/it-company-chennai",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "IT Company in Chennai — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Company in Chennai | AI, SaaS & Enterprise Software | Infonza",
    description:
      "Trusted IT company in Chennai — enterprise AI, SaaS, custom software, and offshore engineering for global businesses.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/it-company-chennai" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
