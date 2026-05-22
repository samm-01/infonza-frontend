export const metadata = {
  title: "AI Development Company | Generative AI & LLM Solutions | Infonza",
  description:
    "Build scalable AI-powered applications with Infonza. Enterprise AI development — GPT-4 integrations, RAG systems, custom LLMs, AI chatbots, and workflow automation. 150+ AI projects delivered.",
  keywords: [
    "AI development company",
    "enterprise AI development",
    "generative AI solutions",
    "LLM development company",
    "GPT-4 integration services",
    "RAG development services",
    "AI chatbot development",
    "AI workflow automation",
    "custom AI solutions",
    "AI development India",
  ],
  openGraph: {
    title: "AI Development Company | Generative AI & LLM Solutions | Infonza",
    description:
      "Build scalable AI-powered applications with Infonza. Enterprise AI development — GPT-4 integrations, RAG systems, custom LLMs, AI chatbots, and workflow automation.",
    url: "https://infonza.com/ai-development",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Development Company — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Company | Generative AI & LLM Solutions | Infonza",
    description:
      "Build scalable AI-powered applications with Infonza. GPT-4 integrations, RAG systems, custom LLMs, and AI chatbots.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-development" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
