export const metadata = {
  title: "AI Appointment Booking Agents — 24/7 AI Scheduling & Calendar Automation | Infonza",
  description:
    "Deploy AI agents that book, confirm, and reschedule appointments 24/7 with calendar integrations, SMS/email reminders, and no-show reduction workflows.",
  keywords: [
    "AI appointment booking",
    "AI scheduling agent",
    "automated appointment booking",
    "calendar automation AI",
    "AI booking assistant",
    "24/7 scheduling automation",
    "no-show reduction AI",
    "appointment reminder automation",
    "Google Calendar AI integration",
    "Outlook calendar automation",
  ],
  openGraph: {
    title: "AI Appointment Booking Agents — 24/7 AI Scheduling & Calendar Automation | Infonza",
    description:
      "Deploy AI agents that book, confirm, and reschedule appointments 24/7 with calendar integrations, SMS/email reminders, and no-show reduction workflows.",
    url: "https://infonza.com/ai-solutions/appointment-booking-agents",
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "AI Appointment Booking Agents — Infonza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Appointment Booking Agents — 24/7 AI Scheduling & Calendar Automation | Infonza",
    description:
      "Deploy AI agents that book, confirm, and reschedule appointments 24/7 with calendar integrations, SMS/email reminders, and no-show reduction workflows.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
  alternates: { canonical: "https://infonza.com/ai-solutions/appointment-booking-agents" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function Layout({ children }) {
  return children;
}
