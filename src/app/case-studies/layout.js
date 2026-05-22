export const metadata = {
  title: "Case Studies — Real Projects, Honest Outcomes",
  description:
    "Insurance CRM, construction ERP, white-label e-learning, and a home improvement marketplace — the actual problems we solved and the measurable results.",
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Case Studies — Real Projects, Honest Outcomes | Infonza Innovations",
    description:
      "Insurance CRM, construction ERP, white-label e-learning, and a home improvement marketplace — the actual problems we solved and the measurable results.",
    url: "https://infonza.com/case-studies",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Case Studies — Real Projects, Honest Outcomes | Infonza Innovations",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/case-studies",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — Real Projects, Honest Outcomes | Infonza Innovations",
    description: "Insurance CRM, construction ERP, white-label e-learning, and a home improvement marketplace — the actual problems we solved and the measurable results.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function CaseStudiesLayout({ children }) {
  return children;
}
