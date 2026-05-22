export const metadata = {
  title: "Custom Software Development — Our Build Process",
  description:
    "Our proven 6-phase software development process: Discovery, Planning, Design, Development, Testing, and Deployment. Built for quality, speed, and long-term maintainability.",
  keywords: [
    "custom software development process",
    "software development company India",
    "agile software development",
    "Next.js React development",
    "product development process",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Custom Software Development — Our Build Process | Infonza Innovations",
    description:
      "Our proven 6-phase software development process: Discovery, Planning, Design, Development, Testing, and Deployment. Built for quality and speed.",
    url: "https://infonza.com/software-development",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Software Development — Our Build Process | Infonza Innovations",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/software-development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development — Our Build Process | Infonza Innovations",
    description: "Our proven 6-phase software development process: Discovery, Planning, Design, Development, Testing, and Deployment. Built for quality and speed.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function SoftwareDevelopmentLayout({ children }) {
  return children;
}
