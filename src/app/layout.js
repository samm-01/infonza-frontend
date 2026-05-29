import { Geist } from "next/font/google";
import "./globals.css";
import ISTClock from "./components/ist-clock";
import AttributionInit from "./components/attribution-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const baseUrl = "https://infonza.com";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Infonza Innovations | Custom Software & Product Development",
    template: "%s | Infonza Innovations",
  },
  description:
    "We build custom web apps, SaaS products, CRM/ERP systems, and automation workflows for US-based startups, agencies, and SMEs. Book a free strategy call.",
  keywords: [
    "custom software development",
    "AI development services",
    "insurance software development",
    "ERP development company",
    "SaaS development company",
    "IT staff augmentation",
    "document management system",
    "LLM development",
    "RAG development",
    "hire React developers",
    "hire AI engineers",
    "multi-tenant SaaS development",
    "insurance CRM development",
    "manufacturing ERP development",
    "enterprise software development India",
  ],
  authors: [{ name: "Infonza Innovations" }],
  creator: "Infonza Innovations",
  publisher: "Infonza Innovations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Infonza Innovations",
    title: "Infonza Innovations | Custom Software & Product Development",
    description:
      "We build custom web apps, SaaS products, CRM/ERP systems, and automation workflows for US-based startups, agencies, and SMEs.",
    images: [
      {
        url: "/infonza-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Infonza Innovations — Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infonza Innovations | Custom Software & Product Development",
    description:
      "We build custom web apps, SaaS products, CRM/ERP systems, and automation workflows for US-based startups, agencies, and SMEs.",
    images: ["/infonza-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/infonza-logo.jpg",
    apple: "/infonza-logo.jpg",
    shortcut: "/infonza-logo.jpg",
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "Oxc3o7WTRYJwrFEbG84htrO0Uxp92e9UxwHzOvIbcsI",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Infonza Innovations",
  url: baseUrl,
  logo: {
    "@type": "ImageObject",
    url: `${baseUrl}/infonza-logo.jpg`,
    width: 1200,
    height: 630,
  },
  description:
    "Enterprise software engineering company specialising in AI development, insurance software, ERP systems, SaaS products, and IT staff augmentation for US-based businesses.",
  email: "support@infonza.com",
  sameAs: [
    "https://www.linkedin.com/company/infonza-innovations/",
  ],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Canada" },
  ],
  knowsAbout: [
    "AI Development",
    "Generative AI Development",
    "LLM Development",
    "RAG Development",
    "OpenAI Integration",
    "Insurance Software Development",
    "Insurance CRM Development",
    "Policy Management Software",
    "Custom ERP Development",
    "Manufacturing ERP",
    "Logistics ERP",
    "SaaS Product Development",
    "Multi-tenant SaaS",
    "B2B SaaS Development",
    "IT Staff Augmentation",
    "Offshore Development Teams",
    "Hire React Developers",
    "Hire AI Engineers",
    "Document Management Systems",
    "Web Application Development",
    "API Integration",
    "Workflow Automation",
  ],
  foundingDate: "2012",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Infonza Innovations",
  url: baseUrl,
  description:
    "Enterprise AI, ERP, insurance software, SaaS development, and IT staff augmentation company.",
  publisher: {
    "@type": "Organization",
    name: "Infonza Innovations",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        <AttributionInit />
        <ISTClock />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
