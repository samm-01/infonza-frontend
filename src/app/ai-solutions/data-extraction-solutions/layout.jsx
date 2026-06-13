export const metadata = {
  title: "AI Data Extraction Solutions — Web Scraping & Structured Data Pipelines | Infonza",
  description:
    "Build intelligent data extraction pipelines that scrape websites, parse PDFs, and convert unstructured data into clean structured datasets — at scale.",
  keywords: [
    "AI data extraction",
    "web scraping AI",
    "structured data extraction",
    "data extraction pipeline",
    "PDF data extraction AI",
    "intelligent web scraping",
    "data pipeline automation",
    "unstructured data extraction",
    "real-time data feeds",
    "AI document parsing",
  ],
  openGraph: {
    title: "AI Data Extraction Solutions — Web Scraping & Structured Data Pipelines | Infonza",
    description:
      "Build intelligent data extraction pipelines that scrape websites, parse PDFs, and convert unstructured data into clean structured datasets — at scale.",
    url: "https://infonza.com/ai-solutions/data-extraction-solutions",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Data Extraction Solutions — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Data Extraction Solutions — Web Scraping & Structured Data Pipelines | Infonza",
    description:
      "Build intelligent data extraction pipelines that scrape websites, parse PDFs, and convert unstructured data into clean structured datasets at scale.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/data-extraction-solutions" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
