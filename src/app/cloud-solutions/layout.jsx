export const metadata = {
  title: "Cloud Solutions & DevOps — AWS, Azure & GCP",
  description:
    "Cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud. CI/CD pipelines, containerization, and DevOps consulting for growing businesses.",
  keywords: [
    "cloud solutions India",
    "AWS DevOps services",
    "cloud migration services",
    "Azure GCP consulting",
    "DevOps engineers India",
    "CI/CD pipeline setup",
    "Kubernetes Docker services",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Cloud Solutions & DevOps — AWS, Azure & GCP | Infonza Innovations",
    description:
      "Cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud. CI/CD pipelines, containerization, and DevOps consulting.",
    url: "https://infonza.com/cloud-solutions",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Solutions & DevOps — AWS, Azure & GCP | Infonza Innovations",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/cloud-solutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Solutions & DevOps — AWS, Azure & GCP | Infonza Innovations",
    description: "Cloud infrastructure setup, migration, and management on AWS, Azure, and Google Cloud. CI/CD pipelines, containerization, and DevOps consulting.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function CloudSolutionsLayout({ children }) {
  return children;
}
