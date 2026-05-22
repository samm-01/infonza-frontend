export const metadata = {
  title: "OpenAI & ChatGPT Integration Services — GPT-4 API Experts",
  description:
    "Production OpenAI and ChatGPT integration services — GPT-4 API, fine-tuning, function calling, embeddings, and Assistants API. 2-week integration timeline.",
  keywords: [
    "OpenAI integration services",
    "ChatGPT integration",
    "GPT-4 API integration",
    "OpenAI API development",
    "GPT fine-tuning services",
    "OpenAI Assistants API",
    "ChatGPT enterprise integration",
    "OpenAI consulting",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "OpenAI & ChatGPT Integration Services — GPT-4 API Experts",
    description:
      "Production OpenAI and ChatGPT integration services — GPT-4 API, fine-tuning, function calling, embeddings, and Assistants API.",
    url: "https://infonza.com/ai-development/openai-integration-services",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "OpenAI & ChatGPT Integration Services — GPT-4 API Experts",
      },
    ],

  },
  alternates: {
    canonical:
      "https://infonza.com/ai-development/openai-integration-services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenAI & ChatGPT Integration Services — GPT-4 API Experts",
    description: "Production OpenAI and ChatGPT integration services — GPT-4 API, fine-tuning, function calling, embeddings, and Assistants API.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
