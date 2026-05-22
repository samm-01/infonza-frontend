export const metadata = {
  title: "Careers at Infonza — Join Our Engineering Team",
  description:
    "Join Infonza Innovations. We're building great software and looking for talented engineers, designers, and product thinkers who care about craft and outcomes.",
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Careers at Infonza — Join Our Engineering Team | Infonza Innovations",
    description:
      "Join Infonza Innovations. We're building great software and looking for talented engineers, designers, and product thinkers who care about craft and outcomes.",
    url: "https://infonza.com/careers",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Infonza — Join Our Engineering Team | Infonza Innovations",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/careers",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Infonza — Join Our Engineering Team | Infonza Innovations",
    description: "Join Infonza Innovations. We",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function CareersLayout({ children }) {
  return children;
}
