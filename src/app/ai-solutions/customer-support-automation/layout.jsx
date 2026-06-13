export const metadata = {
  title: "AI Customer Support Automation — Ticket Automation & AI Chat | Infonza",
  description:
    "Automate customer support with AI — resolve 70%+ of tickets automatically, deploy omnichannel AI chat, and reduce support costs significantly with intelligent automation.",
  keywords: [
    "AI customer support automation",
    "ticket automation AI",
    "AI help desk automation",
    "customer support AI",
    "omnichannel support automation",
    "AI chat support",
    "support cost reduction",
    "automated ticket resolution",
    "AI support agents",
    "customer service automation",
  ],
  openGraph: {
    title: "AI Customer Support Automation — Ticket Automation & AI Chat | Infonza",
    description:
      "Automate customer support with AI — resolve 70%+ of tickets automatically, deploy omnichannel AI chat, and reduce support costs significantly with intelligent automation.",
    url: "https://infonza.com/ai-solutions/customer-support-automation",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Customer Support Automation — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Customer Support Automation — Ticket Automation & AI Chat | Infonza",
    description:
      "Resolve 70%+ of support tickets automatically with AI. Omnichannel chat, help desk automation, and 60% cost reduction.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/customer-support-automation" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
