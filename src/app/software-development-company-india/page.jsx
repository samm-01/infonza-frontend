import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GeoPageTemplate from "../components/geo-page-template";
import {
  GLOBAL_STATS,
  INDIA_ADVANTAGES,
  buildProfessionalServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "../../lib/geo-data";

const FAQS = [
  {
    q: "What software development services does Infonza provide from India?",
    a: "We provide the full enterprise software stack: AI and generative AI development (GPT-4, RAG, LLM), custom ERP systems, multi-tenant B2B SaaS products, IT staff augmentation (React, Node.js, Python, DevOps), insurance software development, and enterprise document management systems. All services are delivered by senior India-based engineers to US, UK, and global clients.",
  },
  {
    q: "How is Infonza different from other Indian software development companies?",
    a: "Three things separate us: (1) We hire only the top 8% of candidates — 4-stage technical screening including live coding and system design. (2) We deliver working software in 2-week sprints with Friday demos and explicit client sign-off before each sprint starts. (3) We specialise in enterprise complexity — AI systems, ERP platforms, multi-tenant SaaS — not commodity web development. 94% of our clients renew for a second engagement.",
  },
  {
    q: "What industries does Infonza serve from India?",
    a: "Our primary industry expertise: insurance and InsurTech (US carrier platforms, agency CRMs, policy management), logistics and supply chain (WMS, TMS, dispatch systems), healthcare and MedTech (HIPAA-compliant applications, EHR integrations), financial services (FinTech platforms, compliance software), SaaS and enterprise software, legal compliance tools, manufacturing ERP, real estate and construction technology, and e-commerce.",
  },
  {
    q: "How does software development from India handle US business hours?",
    a: "We maintain daily EST/PST overlap from 9am–2pm from our India team. This covers morning standups, midday architecture reviews, sprint ceremonies, and urgent issue resolution. All async communication runs through Slack — nothing sits in an email inbox overnight. Sprint demos happen every Friday before your weekend.",
  },
  {
    q: "What is the typical project timeline from India?",
    a: "For discovery and technical proposal: 48 hours from call. For staff augmentation: 48–72 hours to first developers. For MVP development: 6–10 weeks. For full product development: 3–12 months depending on scope. We build in phases — Phase 1 delivers a working core, subsequent phases extend. You never wait 6 months to see something working.",
  },
  {
    q: "Is Infonza compliant with US enterprise procurement requirements?",
    a: "Yes. We are D-U-N-S registered (No. 771974280) for enterprise and government vendor verification. We sign mutual NDAs before any technical discussion and individual IP assignments for each engineer. We carry professional liability insurance and can provide W-8BEN-E tax documentation for US clients. We've passed enterprise vendor onboarding for Fortune 1000 clients.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Software Development Company India", url: "/software-development-company-india" },
];

const professionalServiceSchema = buildProfessionalServiceSchema({
  description:
    "Leading software development company in India delivering AI, ERP, SaaS, and offshore engineering for US, UK, and global enterprises.",
  url: "/software-development-company-india",
  serviceType: "Software Development Services",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "Software Development Company · India",
  headline: "Software Development Company",
  headlineSub: "in India",
  subheadline:
    "Enterprise AI, ERP, SaaS, and offshore engineering from India — trusted by US and UK businesses for 12+ years.",
  description:
    "Infonza is a leading software development company in India delivering production-grade AI systems, custom ERP platforms, multi-tenant SaaS products, and dedicated offshore engineering teams to global enterprises. 200+ projects delivered, 94% client retention, D-U-N-S registered (No. 771974280). Senior engineers at 60–70% lower cost than US hiring.",

  stats: GLOBAL_STATS,

  whyPoints: INDIA_ADVANTAGES,

  localPresence: {
    headline: "India's Software Engineering Ecosystem — Built for Global Delivery",
    paragraphs: [
      "India's software development industry is the largest in the world by export volume — over $245 billion annually as of 2024. This isn't a low-cost commodity operation; it's a mature engineering ecosystem built on genuine technical talent, delivery methodology, and infrastructure designed specifically for serving US and UK enterprise clients.",
      "The engineering talent pipeline is unmatched globally. India produces 1.5 million engineering graduates annually, a significant portion specialising in computer science, data engineering, cloud architecture, and AI/ML. The senior engineers who build production systems for global clients have 5–10+ years of experience building complex software — not junior developers managing simple websites.",
      "India's specific advantage for enterprise software development comes from domain depth. The country's IT services industry was built on ERP implementations, insurance software, logistics platforms, and financial systems — exactly the complex, high-stakes domains where US enterprises need engineering partners they can trust.",
      "Infonza operates from Chandigarh and Mohali in North India — India's fastest-growing IT corridor. We hire from IIT Ropar, Chandigarh University, Punjab Engineering College, and top Bangalore institutions. Our cost base is lower than Bangalore or Pune, while our engineering quality matches the best India has to offer.",
    ],
    highlights: [
      "India's IT exports: $245B annually — world's largest software export industry",
      "1.5M+ engineering graduates per year across CS, AI/ML, and cloud disciplines",
      "30+ years of enterprise software delivery for US and UK clients",
      "Deep domain expertise: insurance, logistics, healthcare, financial services",
      "All major US cloud and AI platforms have India engineering headquarters",
      "D-U-N-S registered for enterprise procurement: No. 771974280",
    ],
  },

  midCtaHeadline: "Start Your India Software Development Engagement",

  caseStudy: {
    tag: "Insurance · CRM · API Integration",
    client: "US Insurance Agency Platform",
    title: "Quote-to-bind in 45 minutes — down from 3 hours",
    desc: "A US insurance agency was managing their entire book of business across spreadsheets, carrier portals, and email threads. We built a custom insurance CRM with Hartford API integration that cut client onboarding from 3 hours to 45 minutes and eliminated manual data entry entirely across 200+ daily transactions.",
    link: "/case-studies/glovebox",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "AI Development India", href: "/ai-development-company-india" },
    { label: "ERP Development India", href: "/erp-development-company-india" },
    { label: "SaaS Development India", href: "/saas-development-company-india" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
    { label: "Staff Augmentation India", href: "/staff-augmentation-company-india" },
    { label: "Hire React Developers India", href: "/hire-react-developers-india" },
    { label: "IT Company Chandigarh", href: "/software-development-company-chandigarh" },
    { label: "IT Company Mohali", href: "/it-company-mohali" },
    { label: "IT Company Bangalore", href: "/it-company-bangalore" },
  ],

  bookingProps: {
    heading: "Partner with India's Best Engineering Team",
    subheading:
      "Free 30-minute strategy call. Senior engineers assess your requirements, answer technical questions, and give you an honest build plan — no sales pitch.",
  },
};

export default function SoftwareDevCompanyIndiaPage() {
  return (
    <>
      <Script id="schema-professionalservice" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <Script id="schema-faq" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-breadcrumb" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <GeoPageTemplate config={config} />
      <Footer />
    </>
  );
}
