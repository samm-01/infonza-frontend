export const metadata = {
  title: "AI Sales Automation — Prospecting, Outreach & Lead Qualification | Infonza",
  description:
    "Automate your entire sales process with AI — prospecting, personalized outreach, lead qualification, CRM updates, and follow-up sequences that run 24/7.",
  keywords: [
    "AI sales automation",
    "AI prospecting",
    "AI outreach automation",
    "lead qualification AI",
    "CRM automation AI",
    "AI follow-up sequences",
    "sales pipeline automation",
    "AI sales development",
    "automated sales outreach",
    "AI SDR automation",
  ],
  openGraph: {
    title: "AI Sales Automation — Prospecting, Outreach & Lead Qualification | Infonza",
    description:
      "Automate your entire sales process with AI — prospecting, personalized outreach, lead qualification, CRM updates, and follow-up sequences that run 24/7.",
    url: "https://infonza.com/ai-solutions/sales-automation",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Sales Automation — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Sales Automation — Prospecting, Outreach & Lead Qualification | Infonza",
    description:
      "Automate your entire sales process with AI — prospecting, personalized outreach, lead qualification, CRM updates, and follow-up sequences that run 24/7.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/sales-automation" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
