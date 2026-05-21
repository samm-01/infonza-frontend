import { Geist } from "next/font/google";
import "./globals.css";
import ISTClock from "./components/ist-clock";

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
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Infonza Innovations",
  url: baseUrl,
  logo: `${baseUrl}/infonza-logo.jpg`,
  description:
    "Custom software development company building web apps, SaaS products, CRM/ERP systems, and automation workflows for US-based businesses.",
  email: "support@infonza.com",
  sameAs: ["https://www.linkedin.com/company/infonza-innovations/"],
  areaServed: { "@type": "Country", name: "United States" },
  knowsAbout: [
    "AI Development",
    "LLM Development",
    "RAG Development",
    "Insurance Software Development",
    "Custom ERP Development",
    "SaaS Product Development",
    "IT Staff Augmentation",
    "Document Management Systems",
    "Web Application Development",
    "API Integration",
    "Workflow Automation",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
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
        <ISTClock />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
