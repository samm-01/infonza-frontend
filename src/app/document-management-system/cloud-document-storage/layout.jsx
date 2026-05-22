export const metadata = {
  title: "Cloud Document Storage Solution Development | Infonza",
  description:
    "Secure cloud-native document storage: encrypted at rest and in transit, geo-redundant, CDN delivery, presigned URLs, lifecycle policies, and cost-tiered storage. 60% storage cost reduction.",
  keywords: [
    "cloud document storage solution development",
    "cloud document storage",
    "secure document storage software",
    "encrypted document storage",
    "geo-redundant document storage",
    "document CDN delivery",
    "cloud storage development",
    "document lifecycle management",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Cloud Document Storage Solution Development | Infonza",
    description:
      "Build secure, geo-redundant cloud document storage with CDN delivery, lifecycle policies, and hot/cold/archive tiering.",
    url: "https://infonza.com/document-management-system/cloud-document-storage",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Document Storage Solution Development | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/document-management-system/cloud-document-storage",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Document Storage Solution Development | Infonza",
    description: "Build secure, geo-redundant cloud document storage with CDN delivery, lifecycle policies, and hot/cold/archive tiering.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
