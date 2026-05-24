import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GeoPageTemplate from "../components/geo-page-template";
import {
  GLOBAL_STATS,
  buildProfessionalServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "../../lib/geo-data";

const FAQS = [
  {
    q: "What types of custom ERP systems does Infonza build from India?",
    a: "We build production-grade custom ERP systems across five primary domains: manufacturing ERP (production scheduling, BOM, shop floor tracking), logistics and warehouse ERP (inventory management, dispatch, 3PL integration), construction ERP (bid management, project tracking, subcontractor management, invoicing), distribution ERP (purchase orders, multi-location inventory, fulfilment), and professional services ERP (project management, resource allocation, time and billing). Each system is built from scratch — no legacy platform limitations.",
  },
  {
    q: "Why choose India for ERP development over US or European vendors?",
    a: "Custom ERP development from India delivers the same technical output at 60–70% lower cost than US or European development shops. A 12-month ERP build that costs $600,000–$800,000 in the US typically costs $200,000–$280,000 with Infonza's India-based team. The engineering complexity — database schema design, business logic modelling, role-based access control, integration architecture — is identical. The cost difference is purely geographic.",
  },
  {
    q: "How long does custom ERP development take?",
    a: "A core ERP module (e.g., inventory management with purchase orders and dispatch) takes 10–14 weeks. A full ERP with 4–6 interconnected modules takes 6–12 months. We build in 2-week sprints with working demos each Friday — you see real software, not PowerPoint. Phase 1 delivery (core modules) is typically 10–16 weeks, with subsequent phases extending the system.",
  },
  {
    q: "Can Infonza integrate with existing systems and third-party platforms?",
    a: "Yes. ERP integration is a core competency. We've built integrations with QuickBooks, Xero, Sage, NetSuite, Salesforce, HubSpot, Shopify, Amazon Seller Central, SAP (via REST APIs), and dozens of industry-specific platforms. All integrations use REST or GraphQL APIs with webhook support, audit logging, and retry logic for production reliability.",
  },
  {
    q: "What tech stack does Infonza use for ERP development?",
    a: "We build ERPs on a battle-tested stack: React or Next.js frontend (TypeScript), Node.js or Python (FastAPI) backend, PostgreSQL as the primary database (with Redis for caching and background jobs), AWS or GCP for hosting, and Kubernetes for container orchestration. This stack is optimised for ERPs specifically: complex relational data models, transactional integrity, role-based access, and high-performance reporting.",
  },
  {
    q: "Does Infonza offer post-launch ERP support and enhancements?",
    a: "Yes. We offer three post-launch engagement models: (1) Ongoing Enhancement — sprint-based development for new modules and features. (2) Maintenance Retainer — monthly support, bug fixes, and minor improvements. (3) Team Handover — documentation, training, and knowledge transfer to your internal team. We have long-term ERP clients who've been with us 3–5 years, continuously extending their systems.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "ERP Development Company India", url: "/erp-development-company-india" },
];

const professionalServiceSchema = buildProfessionalServiceSchema({
  description:
    "Leading ERP development company in India building custom ERP systems for manufacturing, logistics, construction, and distribution for global enterprises.",
  url: "/erp-development-company-india",
  serviceType: "ERP Development Services",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "ERP Development Company · India",
  headline: "ERP Development Company",
  headlineSub: "in India",
  subheadline:
    "Custom ERP systems for manufacturing, logistics, construction, and distribution — built from India by senior engineers for global enterprises.",
  description:
    "Infonza is a leading ERP development company in India building production-grade custom ERP systems for US, UK, and global enterprises. From manufacturing and logistics to construction and distribution, our senior India-based engineers design, build, and deliver ERP platforms that replace spreadsheets, disconnected tools, and outdated software at 60–70% lower cost than US vendors.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "Domain-Deep ERP Engineering",
      desc: "We've built ERP systems for manufacturing, construction, logistics, professional services, and distribution. Our engineers understand the business logic — BOM explosions, multi-location inventory, subcontractor management, job costing — not just the code.",
    },
    {
      title: "Custom-Built, Not Configured",
      desc: "We don't configure SAP, Oracle, or Microsoft Dynamics. We build from scratch — meaning your ERP fits your exact business processes, not the reverse. Zero licence fees, zero vendor lock-in, full code ownership.",
    },
    {
      title: "60–70% Lower Cost Than US ERP Vendors",
      desc: "A 12-month US-built ERP costs $600,000–$800,000. The same system from Infonza's India team costs $200,000–$280,000. Same architecture, same production quality, same React + PostgreSQL stack. The saving is the geography.",
    },
    {
      title: "Full Integration Architecture",
      desc: "Every ERP we build connects to your existing ecosystem: QuickBooks, Xero, Salesforce, Shopify, Amazon, carrier APIs, and payment gateways. REST and GraphQL integrations with retry logic, audit logging, and error alerting.",
    },
    {
      title: "Proven 2-Week Sprint Delivery",
      desc: "Working software every 2 weeks, deployed to staging, reviewed with your team on Fridays. No 6-month blackouts between demos. You see exactly what you're getting before approving the next sprint.",
    },
    {
      title: "NDA, IP Ownership, D-U-N-S Verified",
      desc: "Mutual NDA before any technical discussion. Full IP ownership for every line of code. D-U-N-S registered (No. 771974280) for enterprise procurement. Individual IP assignments per engineer.",
    },
  ],

  localPresence: {
    headline: "India's ERP Engineering Talent Advantage",
    paragraphs: [
      "India's software engineering tradition is built on enterprise systems. The country's IT services industry grew on ERP implementations, systems integration, and complex backend engineering — decades before the consumer app era. This heritage means India has a deep pool of engineers who understand relational data modelling, complex business logic, and enterprise system architecture at a production level.",
      "Infonza specifically builds custom ERP rather than implementing packaged software. Our engineers come from backgrounds in backend systems engineering, data architecture, and enterprise application development — not configuration and customization. They design schemas that handle transactional integrity under load, build role-based access systems with audit trails, and architect the reporting layers that ERP users depend on daily.",
      "The cost difference between India and US custom ERP development is structural. Senior ERP engineers in India charge $45–$75/hr. Their US equivalents charge $150–$200/hr. For a 6-engineer ERP team over 12 months, that's $600,000+ in engineering cost savings — pure savings with no output trade-off.",
      "Our ERP clients range from US mid-market manufacturers who needed to replace decades-old legacy systems, to construction companies who were managing $50M+ project portfolios in Excel. The common thread: they needed a system built around their processes, not a packaged product they'd spend years configuring.",
    ],
    highlights: [
      "India's IT services industry built on enterprise systems engineering since the 1990s",
      "Deep relational database and backend engineering talent pool",
      "Senior ERP engineers at $45–$75/hr vs $150–$200/hr in the US",
      "Manufacturing, logistics, and construction ERP domain expertise",
      "React + Node.js + PostgreSQL stack optimised for complex enterprise data models",
      "Post-launch enhancement and maintenance models for long-term ERP evolution",
    ],
  },

  midCtaHeadline: "Replace Your Spreadsheets with a Custom ERP",

  caseStudy: {
    tag: "Construction · ERP · Project Management",
    client: "Mid-size Construction Company",
    title: "From bid to invoice — all in one ERP system",
    desc: "A growing construction firm was managing 15+ simultaneous projects across Excel files and WhatsApp groups. We built a full construction ERP covering bid management, project tracking, field worker mobile view, subcontractor payment scheduling, and one-click invoice generation. The invoicing cycle dropped from 28 days to 4 days.",
    link: "/case-studies/readybuild",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "ERP Development Services", href: "/erp-development" },
    { label: "Manufacturing ERP", href: "/erp-development/manufacturing-erp" },
    { label: "Logistics ERP", href: "/erp-development/logistics-erp" },
    { label: "Construction ERP", href: "/erp-development/construction-erp" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
    { label: "Software Development India", href: "/software-development-company-india" },
    { label: "SaaS Development India", href: "/saas-development-company-india" },
    { label: "IT Company Chandigarh", href: "/software-development-company-chandigarh" },
  ],

  bookingProps: {
    heading: "Start Your ERP Project with India's Best Engineers",
    subheading:
      "30-minute discovery call. We assess your current workflow, map your requirements, and propose a phased ERP build plan with realistic timelines and costs.",
  },
};

export default function ERPDevCompanyIndiaPage() {
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
