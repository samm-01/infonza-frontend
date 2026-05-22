import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GeoPageTemplate from "../components/geo-page-template";
import {
  GLOBAL_STATS,
  INDIA_ADVANTAGES,
  buildUSServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "../../lib/geo-data";

const FAQS = [
  {
    q: "What software development services does Infonza deliver to US businesses?",
    a: "We deliver the full enterprise software stack to US clients: AI and generative AI development (GPT-4, RAG, LLM fine-tuning), custom ERP systems for manufacturing and logistics, multi-tenant B2B SaaS products, IT staff augmentation (React, Node.js, Python, DevOps), insurance software development, and enterprise document management systems. All services are backed by NDA, D-U-N-S verification, and US timezone overlap.",
  },
  {
    q: "How does Infonza handle US business contracts, NDA, and IP protection?",
    a: "We are set up for US enterprise procurement: D-U-N-S registered (No. 771974280) for vendor verification, mutual NDAs signed before any technical discussion, individual IP assignment agreements for every engineer, W-8BEN-E tax documentation for US clients, and professional liability insurance. We've passed vendor onboarding processes for Fortune 1000 clients and government contractors.",
  },
  {
    q: "What is the cost advantage for US companies working with Infonza?",
    a: "Senior engineers at $35–$80/hr versus $150–$200/hr for equivalent US talent — a 60–70% cost advantage. For a 5-engineer team over 12 months, that's $600,000–$900,000 in savings. We're not a cheap service — we hire the top 8% of engineers and charge accordingly. The price point reflects Indian market rates, not a reduction in quality.",
  },
  {
    q: "How does Infonza's timezone overlap work for US clients?",
    a: "Daily EST/PST overlap from 9am–2pm. This covers morning standups (9am ET), midday architecture reviews, sprint ceremonies, and urgent issue resolution. Everything else is async via Slack — your engineers respond within the hour during US business hours. Sprint demos happen every Friday before your weekend. The communication model is indistinguishable from a local team.",
  },
  {
    q: "How quickly can Infonza start a project or place engineers for US clients?",
    a: "For staff augmentation, 48–72 hours from technical brief to placed engineers. For project-based work, a detailed technical proposal within 48 hours of a discovery call and development start within 1 week of contract signing. We don't run multi-week sales processes — if the technical fit is clear, we move fast.",
  },
  {
    q: "What US industries does Infonza have the deepest expertise in?",
    a: "Our primary US client industries are: insurance and InsurTech (US carrier platforms, agency CRMs, Hartford and Salesforce integrations), logistics and supply chain (TMS, WMS, dispatch systems), healthcare technology (HIPAA-compliant applications, EHR integrations, BAA available), financial services and FinTech (compliance software, reporting platforms), and SaaS companies at Series A through Series C building out their engineering teams.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Software Development Company USA", url: "/software-development-company-usa" },
];

const usServiceSchema = buildUSServiceSchema({
  description:
    "Enterprise software development company for US businesses — AI, ERP, SaaS, offshore engineering with D-U-N-S verification and EST/PST timezone overlap.",
  url: "/software-development-company-usa",
  serviceType: "Software Development Services",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "Trusted by US Businesses · D-U-N-S Verified",
  headline: "Software Development Company",
  headlineSub: "for US Businesses",
  subheadline:
    "Enterprise AI, ERP, SaaS, and offshore engineering for US companies — senior engineers, EST/PST overlap, 60–70% lower cost than US hiring.",
  description:
    "Infonza is a trusted software development company serving US startups, mid-market companies, and enterprises. We deliver production-grade AI systems, custom ERP platforms, multi-tenant SaaS products, and dedicated engineering teams — backed by D-U-N-S registration, mutual NDAs, and daily US timezone overlap. 200+ US projects delivered, 94% client retention.",

  stats: GLOBAL_STATS,

  whyPoints: INDIA_ADVANTAGES,

  localPresence: {
    headline: "Why US Companies Choose Infonza",
    paragraphs: [
      "The US software development market is facing a structural talent shortage. There are 1.7 million unfilled software engineering jobs in the United States. The engineers who are available command $150,000–$250,000 in annual salary plus benefits. For a growing US company that needs a 5-person engineering team, that's $1M–$1.5M per year — before recruitment costs, contractor premiums, or equity dilution.",
      "Offshore software development has historically been associated with communication problems, quality gaps, and project failures. Those failures share a common cause: companies chose cost over competence, and got generic output from engineers who didn't understand the business context. Infonza is built differently. We hire only senior engineers — 5+ years of production experience, 4-stage technical screening — who operate with the delivery discipline that enterprise US clients require.",
      "The companies that succeed with offshore engineering partners are the ones who treat the relationship like a local team extension: daily standups, sprint reviews, transparent delivery metrics, and direct Slack access to the engineers. That's how we operate. Our US clients don't feel like they're working with a vendor — they feel like they have a remote engineering team.",
      "The operational infrastructure for US clients is fully in place: D-U-N-S registered (No. 771974280) for enterprise vendor onboarding, W-8BEN-E tax documentation, mutual NDAs before any technical discussion, professional liability insurance, and individual IP assignment agreements. The legal and procurement requirements that US enterprise clients need are standard for us — not exceptions.",
    ],
    highlights: [
      "D-U-N-S No. 771974280 — enterprise procurement ready",
      "W-8BEN-E documentation for US tax compliance",
      "SOC 2 and HIPAA compliance available for regulated projects",
      "Professional liability insurance for enterprise engagements",
      "200+ US projects — insurance, logistics, healthcare, FinTech, SaaS",
      "EST/PST overlap daily 9am–2pm — same communication cadence as local teams",
    ],
  },

  midCtaHeadline: "Build Your Engineering Team — 60% Below US Rates",

  caseStudy: {
    tag: "Insurance · CRM · API Integration",
    client: "US Insurance Agency Platform",
    title: "Quote-to-bind in 45 minutes — down from 3 hours",
    desc: "A US insurance agency platform was managing their entire book of business across spreadsheets, carrier portals, and email threads. We built a custom insurance CRM with Hartford API integration that cut client onboarding from 3 hours to 45 minutes. 200+ daily transactions, zero manual data entry.",
    link: "/case-studies/glovebox",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "AI Development for US", href: "/ai-development-company-usa" },
    { label: "Staff Augmentation India", href: "/staff-augmentation-company-india" },
    { label: "Hire React Developers", href: "/hire-react-developers-india" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
    { label: "ERP Development India", href: "/erp-development-company-india" },
    { label: "SaaS Development India", href: "/saas-development-company-india" },
    { label: "Software Dev Company NY", href: "/software-development-company-new-york" },
    { label: "Software Dev Company CA", href: "/software-development-company-california" },
    { label: "Software Dev Company TX", href: "/software-development-company-texas" },
  ],

  bookingProps: {
    heading: "Talk to Our Engineering Team",
    subheading:
      "Free 30-minute strategy call. Senior engineers assess your project, answer technical questions, and give you an honest build plan at a fraction of US cost.",
  },
};

export default function SoftwareDevCompanyUSAPage() {
  return (
    <>
      <Script id="schema-service" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(usServiceSchema) }} />
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
