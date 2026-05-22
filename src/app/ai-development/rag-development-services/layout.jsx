export const metadata = {
  title: "RAG Development Services — Retrieval-Augmented Generation Experts",
  description:
    "Build AI systems grounded in your proprietary data with RAG — vector databases, embedding pipelines, semantic search, and hybrid retrieval. 85% hallucination reduction.",
  keywords: [
    "RAG development services",
    "retrieval augmented generation",
    "RAG pipeline development",
    "vector database development",
    "semantic search AI",
    "embedding pipeline",
    "hybrid retrieval system",
    "enterprise RAG",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "RAG Development Services — Retrieval-Augmented Generation Experts",
    description:
      "Build AI systems grounded in your proprietary data — vector databases, embedding pipelines, semantic search, and hybrid retrieval.",
    url: "https://infonza.com/ai-development/rag-development-services",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "RAG Development Services — Retrieval-Augmented Generation Experts",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/ai-development/rag-development-services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG Development Services — Retrieval-Augmented Generation Experts",
    description: "Build AI systems grounded in your proprietary data — vector databases, embedding pipelines, semantic search, and hybrid retrieval.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
