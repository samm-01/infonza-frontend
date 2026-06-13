export const metadata = {
  title: "AI Email Automation — Smart Replies, Classification & Follow-ups | Infonza",
  description:
    "Automate your inbox with AI — classify emails, generate smart replies, trigger follow-up sequences, and eliminate manual email management at scale.",
  keywords: [
    "AI email automation",
    "smart email replies",
    "email classification AI",
    "automated email follow-ups",
    "inbox automation",
    "AI email management",
    "email AI assistant",
    "Gmail automation AI",
    "Outlook automation AI",
    "email workflow automation",
  ],
  openGraph: {
    title: "AI Email Automation — Smart Replies, Classification & Follow-ups | Infonza",
    description:
      "Automate your inbox with AI — classify emails, generate smart replies, trigger follow-up sequences, and eliminate manual email management at scale.",
    url: "https://infonza.com/ai-solutions/email-automation",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Email Automation — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Email Automation — Smart Replies, Classification & Follow-ups | Infonza",
    description:
      "Automate your inbox with AI — classify emails, generate smart replies, and trigger follow-up sequences at scale.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/email-automation" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
