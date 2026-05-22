export const metadata = {
  title: "Generative AI Development Company — Custom GenAI Applications",
  description:
    "Build custom generative AI applications — content generation, image synthesis, code assistants, and multimodal AI. 10× content throughput, 65% cost reduction.",
  keywords: [
    "generative AI development company",
    "custom GenAI applications",
    "generative AI services",
    "AI content generation",
    "multimodal AI development",
    "generative AI consulting",
    "AI image synthesis",
    "code assistant AI",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Generative AI Development Company — Custom GenAI Applications",
    description:
      "Build custom generative AI applications — content generation, image synthesis, code assistants, and multimodal AI.",
    url: "https://infonza.com/ai-development/generative-ai-development",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Generative AI Development Company — Custom GenAI Applications",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/ai-development/generative-ai-development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative AI Development Company — Custom GenAI Applications",
    description: "Build custom generative AI applications — content generation, image synthesis, code assistants, and multimodal AI.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
