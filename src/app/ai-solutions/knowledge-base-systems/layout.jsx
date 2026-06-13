export const metadata = {
  title: "AI Knowledge Base Systems — RAG & Enterprise Knowledge Search | Infonza",
  description:
    "Build AI-powered knowledge bases and enterprise search systems using RAG. Give employees instant answers from your internal documentation, SOPs, and wikis.",
  keywords: [
    "AI knowledge base",
    "RAG knowledge base",
    "enterprise knowledge search",
    "AI document search",
    "internal documentation AI",
    "retrieval augmented generation",
    "knowledge management AI",
    "enterprise search AI",
    "AI powered wiki",
    "vector search knowledge base",
  ],
  openGraph: {
    title: "AI Knowledge Base Systems — RAG & Enterprise Knowledge Search | Infonza",
    description:
      "Build AI-powered knowledge bases and enterprise search systems using RAG. Give employees instant answers from your internal documentation, SOPs, and wikis.",
    url: "https://infonza.com/ai-solutions/knowledge-base-systems",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Knowledge Base Systems — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Knowledge Base Systems — RAG & Enterprise Knowledge Search | Infonza",
    description:
      "Build AI-powered knowledge bases using RAG. Give employees instant answers from internal documentation, SOPs, and wikis.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/knowledge-base-systems" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
