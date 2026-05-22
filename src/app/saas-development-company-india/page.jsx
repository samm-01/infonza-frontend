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
    q: "What does Infonza's SaaS development service include?",
    a: "We build complete B2B SaaS products from scratch: multi-tenant architecture design, user authentication and role-based access control, subscription billing (Stripe, Paddle), usage metering, admin dashboards, customer onboarding flows, API layer, and cloud infrastructure. We also build on top of existing SaaS products — new feature modules, integrations, white-label versions, and performance optimisation.",
  },
  {
    q: "Why build a SaaS product with an India-based team?",
    a: "SaaS development from India delivers the same architectural quality at 60–70% lower cost. A US-based team charges $150–$200/hr for senior engineers; our India team charges $45–$75/hr. For a 12-month SaaS build with 5 engineers, that's a saving of $500,000–$750,000. The architecture decisions — multi-tenancy patterns, billing logic, security hardening — are identical regardless of geography.",
  },
  {
    q: "How does Infonza handle multi-tenancy in SaaS architecture?",
    a: "We implement multi-tenancy based on your isolation and scale requirements. For most B2B SaaS products, we use schema-per-tenant isolation in PostgreSQL — clean data separation with shared infrastructure costs. For regulated industries or enterprise clients requiring strict isolation, we support database-per-tenant or VPC-per-tenant deployment. We document the architectural decision and trade-offs before implementation begins.",
  },
  {
    q: "Can Infonza build a SaaS MVP in 6–8 weeks?",
    a: "Yes. Our SaaS MVP scope covers: authentication (email + SSO), a core feature module, basic subscription billing with Stripe, a simple admin view, and production deployment on AWS. This takes 6–8 weeks with a 3-engineer team. We build MVPs to be extendable — the architecture supports growth, so you're not rewriting after finding product-market fit.",
  },
  {
    q: "What SaaS billing and subscription models does your team support?",
    a: "We've implemented: per-seat billing, usage-based billing (API calls, storage, events), flat-rate subscriptions, freemium with upgrade gates, custom enterprise contracts (invoiced, not card), and hybrid models. Stripe is our primary billing platform — we build full Stripe webhook handling, dunning management, invoice generation, and tax handling (Stripe Tax or TaxJar integration).",
  },
  {
    q: "How does Infonza ensure SaaS security and compliance?",
    a: "Security is built into every SaaS we develop: OWASP Top 10 mitigations, JWT with refresh token rotation, rate limiting, SQL injection prevention, CORS configuration, and secret management via AWS Secrets Manager or HashiCorp Vault. For SOC 2 or HIPAA compliance, we implement audit logging, encryption at rest and in transit, access controls, and the documentation required for compliance attestation.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "SaaS Development Company India", url: "/saas-development-company-india" },
];

const professionalServiceSchema = buildProfessionalServiceSchema({
  description:
    "Leading SaaS development company in India building multi-tenant B2B SaaS products, billing systems, and cloud infrastructure for global enterprises.",
  url: "/saas-development-company-india",
  serviceType: "SaaS Development Services",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "SaaS Development Company · India",
  headline: "SaaS Development Company",
  headlineSub: "in India",
  subheadline:
    "Multi-tenant B2B SaaS products, subscription billing, and cloud infrastructure — built from India for US and global founders.",
  description:
    "Infonza is a leading SaaS development company in India building production-grade B2B SaaS products for US and global founders, startups, and enterprises. From multi-tenant architecture and Stripe billing to API design and cloud deployment, our senior India-based engineers build SaaS products that scale — at 60–70% lower cost than US development teams.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "Multi-Tenant Architecture Expertise",
      desc: "Schema-per-tenant, database-per-tenant, or VPC isolation — we design multi-tenancy for your specific scale, compliance, and cost requirements. Every decision documented and trade-offs explained before writing code.",
    },
    {
      title: "Full SaaS Stack — One Team",
      desc: "Authentication, billing, feature modules, admin dashboards, API layer, and cloud infrastructure. No sub-contracting, no specialty gaps. Your entire SaaS is built by a single cohesive team that understands the full system.",
    },
    {
      title: "SaaS MVP in 6–8 Weeks",
      desc: "Auth, core feature module, Stripe billing, admin view, production AWS deployment. A working SaaS product your early users can pay for — in under 2 months. Architecture built to extend, not to rewrite.",
    },
    {
      title: "Stripe Billing Mastery",
      desc: "Per-seat, usage-based, freemium, flat-rate, and enterprise contract billing. Full Stripe webhook handling, dunning management, invoice generation, and tax configuration. We've shipped billing systems for 20+ SaaS products.",
    },
    {
      title: "Security-First Development",
      desc: "OWASP Top 10 mitigations in every codebase. JWT with refresh rotation, rate limiting, SQL injection prevention, secret management, and CORS hardening. SOC 2 and HIPAA compliance documentation available.",
    },
    {
      title: "60–70% Cost Advantage",
      desc: "Senior SaaS engineers at $45–$75/hr vs $150–$200/hr for US equivalents. For a 12-month SaaS build with 5 engineers, that's $500,000–$750,000 in savings — without compromising architecture quality.",
    },
  ],

  localPresence: {
    headline: "India: Where the World's SaaS Infrastructure Gets Built",
    paragraphs: [
      "Some of the world's most successful SaaS products — from enterprise CRMs to developer infrastructure tools — were built with significant engineering contribution from India. This isn't a recent trend; it reflects two decades of India producing engineering talent specifically trained in software architecture, distributed systems, and cloud-native development.",
      "India's SaaS engineering advantage comes from specific depth: a large cohort of backend engineers trained in relational database design and API architecture, a growing cloud engineering talent pool certified across AWS, GCP, and Azure, and a strong understanding of the SaaS business model — billing, multi-tenancy, usage metering — that comes from building these systems repeatedly.",
      "Infonza's SaaS engineering team has shipped multi-tenant B2B products across insurance, HR technology, legal compliance, healthcare operations, and logistics. This isn't generic web development — it's architectural judgment about tenancy models, billing edge cases, and the specific scaling patterns that B2B SaaS products require.",
      "For US founders and product leaders, building with an India-based SaaS team isn't a compromise — it's a strategic decision. The engineering talent is real, the cost advantage is significant, and the communication infrastructure (Slack, GitHub, timezone overlap) makes offshore development practically indistinguishable from a local team.",
    ],
    highlights: [
      "India engineering teams built core infrastructure for leading global SaaS companies",
      "Deep cloud engineering talent: AWS, GCP, Azure certified architects",
      "Strong backend tradition: relational databases, APIs, distributed systems",
      "Growing SaaS-specialist engineering cohort with billing and multi-tenancy depth",
      "English-first technical communication and agile delivery culture",
      "Senior SaaS engineers at $45–$75/hr — 60–70% below US rates",
    ],
  },

  midCtaHeadline: "Build Your SaaS Product with India's Best Engineers",

  caseStudy: {
    tag: "SaaS · Insurance · Multi-Tenant",
    client: "US Insurance Agency Platform",
    title: "Multi-tenant insurance CRM: from spreadsheets to SaaS",
    desc: "A US insurance technology startup needed a multi-tenant CRM for independent insurance agents. We designed the tenancy architecture, built the policy management module, integrated with Hartford's API, and shipped subscription billing via Stripe. Time to first paying customer: 11 weeks. Current ARR: $2.1M.",
    link: "/case-studies/glovebox",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "SaaS Development Services", href: "/saas-development" },
    { label: "Multi-Tenant SaaS", href: "/saas-development/multi-tenant-saas-development" },
    { label: "SaaS MVP Development", href: "/saas-development/saas-mvp-development" },
    { label: "ERP Development India", href: "/erp-development-company-india" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
    { label: "Software Development India", href: "/software-development-company-india" },
    { label: "AI Development India", href: "/ai-development-company-india" },
    { label: "IT Company Chandigarh", href: "/software-development-company-chandigarh" },
  ],

  bookingProps: {
    heading: "Build Your SaaS Product with India's Best Team",
    subheading:
      "30-minute technical call. We review your SaaS concept, recommend the architecture, and give you a realistic build timeline and cost breakdown.",
  },
};

export default function SaaSDevCompanyIndiaPage() {
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
