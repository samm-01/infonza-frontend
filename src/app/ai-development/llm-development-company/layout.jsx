export const metadata = {
  title: "LLM Development Company — Custom LLM Fine-Tuning Services",
  description:
    "Custom LLM development and fine-tuning — domain-specific models, RLHF, model evaluation, and private deployment. 40% better accuracy vs generic LLMs, 90% cost reduction at scale.",
  keywords: [
    "LLM development company",
    "custom LLM development",
    "LLM fine-tuning services",
    "large language model development",
    "RLHF fine-tuning",
    "private LLM deployment",
    "domain-specific LLM",
    "LLM consulting",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "LLM Development Company — Custom LLM Fine-Tuning Services",
    description:
      "Custom LLM development and fine-tuning — domain-specific models, RLHF, model evaluation, and private deployment.",
    url: "https://infonza.com/ai-development/llm-development-company",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "LLM Development Company — Custom LLM Fine-Tuning Services",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/ai-development/llm-development-company",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "LLM Development Company — Custom LLM Fine-Tuning Services",
    description: "Custom LLM development and fine-tuning — domain-specific models, RLHF, model evaluation, and private deployment.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
