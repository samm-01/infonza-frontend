export const metadata = {
  title: "B2B SaaS Development Company — Enterprise SaaS Products | Infonza",
  description:
    "B2B SaaS development with enterprise features: SSO/SAML, role-based access, audit logs, usage analytics, enterprise billing, and SOC2/GDPR compliance. Average 6-month time to market.",
  keywords: [
    "B2B SaaS development company",
    "enterprise SaaS development",
    "B2B software development",
    "SSO SAML SaaS",
    "SOC2 compliant SaaS",
    "enterprise billing SaaS",
    "audit logs SaaS",
    "B2B SaaS product development",
  ],
  openGraph: {
    type: "website",
    siteName: "Infonza Innovations",
    locale: "en_US",
    title: "B2B SaaS Development Company — Enterprise SaaS Products | Infonza",
    description:
      "Build enterprise-grade B2B SaaS products with SSO, RBAC, audit logs, enterprise billing, and compliance built in from day one.",
    url: "https://infonza.com/saas-development/b2b-saas-development",
    images: [
      {
        url: "https://infonza.com/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "B2B SaaS Development Company — Enterprise SaaS Products | Infonza",
      },
    ],

  },
  alternates: {
    canonical: "https://infonza.com/saas-development/b2b-saas-development",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SaaS Development Company — Enterprise SaaS Products | Infonza",
    description: "Build enterprise-grade B2B SaaS products with SSO, RBAC, audit logs, enterprise billing, and compliance built in from day one.",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function Layout({ children }) {
  return children;
}
