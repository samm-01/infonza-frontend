export const metadata = {
  title: "Cloud SaaS Solutions Development — Serverless & Microservices | Infonza",
  description:
    "Cloud-native SaaS development: serverless architecture, microservices, auto-scaling, multi-region deployment, disaster recovery, and observability. 70% infrastructure cost reduction.",
  keywords: [
    "cloud SaaS solutions development",
    "cloud-native SaaS",
    "serverless SaaS development",
    "microservices SaaS",
    "auto-scaling SaaS",
    "multi-region SaaS",
    "SaaS infrastructure development",
    "cloud architecture SaaS",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Cloud SaaS Solutions Development — Serverless & Microservices | Infonza",
    description:
      "Build cloud-native SaaS with serverless functions, microservices, auto-scaling, and global multi-region deployment.",
    url: "https://infonza.com/saas-development/cloud-saas-solutions",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud SaaS Solutions Development — Serverless & Microservices | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/saas-development/cloud-saas-solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud SaaS Solutions Development — Serverless & Microservices | Infonza",
    description: "Build cloud-native SaaS with serverless functions, microservices, auto-scaling, and global multi-region deployment.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
