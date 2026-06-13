export const metadata = {
  title: "AI Solutions — Agents, Automation & Intelligent Apps | Infonza",
  description:
    "Build AI agents, chatbots, voice assistants, workflow automation, and custom AI applications that save time and increase productivity. Trusted by 100+ businesses.",
  keywords: [
    "AI solutions",
    "AI automation company",
    "AI agents development",
    "AI chatbot development",
    "AI workflow automation",
    "generative AI services",
    "enterprise AI solutions",
    "custom AI development",
    "AI consulting company",
    "AI integration services",
  ],
  openGraph: {
    title: "AI Solutions — Agents, Automation & Intelligent Apps | Infonza",
    description:
      "Build AI agents, chatbots, voice assistants, workflow automation, and custom AI applications that save time and increase productivity.",
    url: "https://infonza.com/ai-solutions",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Solutions Hub — Infonza Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions — Agents, Automation & Intelligent Apps | Infonza",
    description:
      "Build AI agents, chatbots, voice assistants, workflow automation, and custom AI applications.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }) {
  return children;
}
