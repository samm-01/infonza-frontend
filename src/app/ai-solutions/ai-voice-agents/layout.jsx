export const metadata = {
  title: "AI Voice Agents — Conversational Voice AI for Calls & Support | Infonza",
  description:
    "Build AI voice agents for inbound and outbound calls using ElevenLabs, OpenAI Realtime API, and Twilio. Handle customer support, booking, and sales calls 24/7 without human agents.",
  keywords: [
    "AI voice agents",
    "AI voice agent development",
    "ElevenLabs voice AI",
    "OpenAI Realtime API",
    "Twilio AI voice",
    "inbound call automation",
    "outbound dialing AI",
    "AI phone agent",
    "voice AI development company",
    "conversational voice AI",
  ],
  openGraph: {
    title: "AI Voice Agents — Conversational Voice AI for Calls & Support | Infonza",
    description:
      "Build AI voice agents for inbound and outbound calls using ElevenLabs, OpenAI Realtime API, and Twilio. Handle customer support, booking, and sales calls 24/7 without human agents.",
    url: "https://infonza.com/ai-solutions/ai-voice-agents",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Voice Agents — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents — Conversational Voice AI for Calls & Support | Infonza",
    description:
      "AI voice agents for inbound and outbound calls — ElevenLabs, OpenAI Realtime API, Twilio. 24/7 call handling without human agents.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/ai-voice-agents" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
