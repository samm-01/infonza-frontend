export const metadata = {
  title: "Multi-Tenant SaaS Development — Architecture & Build | Infonza",
  description:
    "Expert multi-tenant SaaS development: tenant isolation strategies, schema-per-tenant, row-level security, white-labeling, usage metering, and automated onboarding. 10K+ tenants supported.",
  keywords: [
    "multi-tenant SaaS development",
    "multi-tenancy architecture",
    "tenant isolation",
    "SaaS white-labeling",
    "schema-per-tenant",
    "row-level security SaaS",
    "usage metering SaaS",
    "multi-tenant software development",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "Multi-Tenant SaaS Development — Architecture & Build | Infonza",
    description:
      "Build SaaS platforms that support 10K+ tenants with guaranteed data isolation, white-labeling, and usage metering.",
    url: "https://infonza.com/saas-development/multi-tenant-saas-development",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Multi-Tenant SaaS Development — Architecture & Build | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/saas-development/multi-tenant-saas-development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Tenant SaaS Development — Architecture & Build | Infonza",
    description: "Build SaaS platforms that support 10K+ tenants with guaranteed data isolation, white-labeling, and usage metering.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
