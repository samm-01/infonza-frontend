export const metadata = {
  title: "AI Agents Development — Autonomous AI Agents & Multi-Agent Systems | Infonza",
  description:
    "Build autonomous AI agents that plan, reason, and execute multi-step tasks. We develop single agents, multi-agent systems, and agentic workflows using LangGraph, CrewAI, and AutoGen.",
  keywords: [
    "AI agents development",
    "autonomous AI agents",
    "multi-agent systems",
    "LangGraph development",
    "CrewAI development",
    "AutoGen agents",
    "agentic workflow automation",
    "AI agent development company",
    "custom AI agents",
    "AI task automation",
  ],
  openGraph: {
    title: "AI Agents Development — Autonomous AI Agents & Multi-Agent Systems | Infonza",
    description:
      "Build autonomous AI agents that plan, reason, and execute multi-step tasks. We develop single agents, multi-agent systems, and agentic workflows using LangGraph, CrewAI, and AutoGen.",
    url: "https://infonza.com/ai-solutions/ai-agents-development",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Agents Development — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agents Development — Autonomous AI Agents & Multi-Agent Systems | Infonza",
    description:
      "Build autonomous AI agents that plan, reason, and execute multi-step tasks using LangGraph, CrewAI, and AutoGen.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/ai-agents-development" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
