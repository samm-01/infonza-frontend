export const metadata = {
  title: "AI Copilot Development — Internal Assistants & Enterprise Copilots | Infonza",
  description:
    "Build custom AI copilots and internal assistants for your employees — embedded into your existing tools, trained on your data, and designed for your specific workflows.",
  keywords: [
    "AI copilot development",
    "enterprise AI copilot",
    "internal AI assistant",
    "custom AI copilot",
    "employee AI assistant",
    "AI knowledge assistant",
    "workflow AI copilot",
    "AI productivity tool",
    "LangChain copilot",
    "RAG-powered copilot",
  ],
  openGraph: {
    title: "AI Copilot Development — Internal Assistants & Enterprise Copilots | Infonza",
    description:
      "Build custom AI copilots and internal assistants for your employees — embedded into your existing tools, trained on your data, and designed for your specific workflows.",
    url: "https://infonza.com/ai-solutions/ai-copilot-development",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Copilot Development — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Copilot Development — Internal Assistants & Enterprise Copilots | Infonza",
    description:
      "Build custom AI copilots and internal assistants for your employees — embedded into your existing tools, trained on your data, and designed for your specific workflows.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/ai-copilot-development" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
