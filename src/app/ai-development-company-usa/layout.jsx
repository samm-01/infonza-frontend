export const metadata = {
  title: "AI Development Company USA | Generative AI & LLM Solutions | Infonza",
  description:
    "Infonza is a trusted AI development company serving US businesses — GPT-4 integrations, RAG systems, LLM fine-tuning, AI chatbots, and workflow automation. Offshore AI engineering team, US timezone overlap, NDA protected.",
  keywords: [
    "AI development company USA",
    "AI development services United States",
    "enterprise AI company USA",
    "GPT-4 development company",
    "LLM development USA",
    "generative AI company USA",
    "offshore AI development USA",
    "AI engineering team USA",
    "RAG development services USA",
    "AI chatbot company USA",
  ],
  openGraph: {
    title: "AI Development Company USA | Generative AI & LLM Solutions | Infonza",
    description:
      "Trusted AI development company serving US businesses — GPT-4 integrations, RAG systems, LLM fine-tuning, AI chatbots, and workflow automation. US timezone overlap.",
    url: "https://infonza.com/ai-development-company-usa",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Development Company USA — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Company USA | Generative AI & LLM Solutions | Infonza",
    description:
      "Trusted AI development partner for US businesses. GPT-4, RAG systems, LLM fine-tuning, AI chatbots. US timezone overlap, NDA protected.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-development-company-usa" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
