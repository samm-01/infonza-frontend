export const metadata = {
  title: "Contact — Book a Strategy Call",
  description:
    "Book a free 30-minute strategy call with Infonza. No pitch, no pressure — just honest advice on your project. Response within 24 hours.",
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Contact — Book a Strategy Call | Infonza Innovations",
    description:
      "Book a free 30-minute strategy call with Infonza. No pitch, no pressure — just honest advice on your project. Response within 24 hours.",
    url: "https://infonza.com/contact",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Contact — Book a Strategy Call | Infonza Innovations",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/contact",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Book a Strategy Call | Infonza Innovations",
    description: "Book a free 30-minute strategy call with Infonza. No pitch, no pressure — just honest advice on your project. Response within 24 hours.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
