export const metadata = {
  title: "AI Document Processing — OCR, PDF Extraction & Document Intelligence | Infonza",
  description:
    "Extract, classify, and structure data from PDFs, scanned documents, and forms with AI. Built for insurance, legal, and healthcare document workflows.",
  keywords: [
    "AI document processing",
    "OCR automation",
    "PDF data extraction AI",
    "document intelligence",
    "AI form processing",
    "document classification AI",
    "insurance document processing",
    "legal document AI",
    "medical record extraction",
    "intelligent document processing",
  ],
  openGraph: {
    title: "AI Document Processing — OCR, PDF Extraction & Document Intelligence | Infonza",
    description:
      "Extract, classify, and structure data from PDFs, scanned documents, and forms with AI. Built for insurance, legal, and healthcare document workflows.",
    url: "https://infonza.com/ai-solutions/document-processing",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Document Processing — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Document Processing — OCR, PDF Extraction & Document Intelligence | Infonza",
    description:
      "Extract, classify, and structure data from PDFs, scanned documents, and forms with AI. Built for insurance, legal, and healthcare document workflows.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/document-processing" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
