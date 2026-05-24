import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GeoPageTemplate from "../components/geo-page-template";
import {
  GLOBAL_STATS,
  buildUSServiceSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "../../lib/geo-data";

const FAQS = [
  {
    q: "Why do New York businesses use Infonza for software development?",
    a: "New York's engineering talent market is among the most expensive in the US — senior engineers command $180,000–$280,000 per year plus equity. For New York startups and growth-stage companies, building a 5-person engineering team costs $1.2M–$1.8M annually. Infonza provides the same senior engineering calibre at 60–70% lower cost, with EST timezone alignment so communication feels like working with a local Manhattan team.",
  },
  {
    q: "What industries does Infonza serve for New York-based clients?",
    a: "New York's dominant industries align directly with our expertise: financial services and FinTech (trading platforms, compliance software, reporting systems), insurance and InsurTech (policy management, agent CRMs, carrier API integrations), legal technology (document management, contract intelligence, compliance workflows), healthcare technology (HIPAA-compliant systems, EHR integrations), SaaS companies, and media and advertising technology platforms.",
  },
  {
    q: "How does Infonza handle EST timezone requirements?",
    a: "EST is our primary US overlap window. Our India team maintains 9am–2pm EST coverage daily — covering morning standups, midday sprint reviews, and architecture sessions. All engineers have Slack on their phones for urgent matters. For New York clients specifically, this means full overlap during core NYC business hours without any daily async lag.",
  },
  {
    q: "Is Infonza compliant with New York's enterprise vendor requirements?",
    a: "Yes. D-U-N-S registered (No. 771974280) for enterprise and government vendor onboarding. Mutual NDA before any technical discussion. W-8BEN-E tax documentation for NY tax compliance. SOC 2 and HIPAA compliance documentation available for regulated industries. We've passed vendor onboarding for NY-based financial services and healthcare companies.",
  },
  {
    q: "Can Infonza build FinTech or financial compliance software for New York clients?",
    a: "Yes. We've built financial reporting systems, compliance dashboards, trading data pipelines, and risk management tools for US financial services clients. Our engineers understand financial data requirements — reconciliation accuracy, audit logging, regulatory reporting (FINRA, SEC adjacent). We build with encryption at rest, full audit trails, and role-based access controls required for financial systems.",
  },
  {
    q: "How does Infonza manage projects for New York-based clients in practice?",
    a: "We operate identically to a local engineering team: daily standup at your preferred NYC morning time, sprint planning and retrospectives biweekly, Friday demos before your weekend. Code in your GitHub. Tasks in your Jira. Communication in your Slack workspace. You'll forget we're not in Midtown.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Software Development Company USA", url: "/software-development-company-usa" },
  { name: "New York", url: "/software-development-company-new-york" },
];

const usServiceSchema = buildUSServiceSchema({
  description:
    "Enterprise software development for New York businesses — AI, ERP, SaaS, offshore engineering with EST timezone overlap and D-U-N-S verification.",
  url: "/software-development-company-new-york",
  serviceType: "Software Development Services",
  stateName: "New York",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "Serving New York · EST Timezone · D-U-N-S Verified",
  headline: "Software Development Company",
  headlineSub: "for New York Businesses",
  subheadline:
    "Enterprise AI, FinTech, SaaS, and ERP engineering for NYC and New York companies — senior engineers at 60–70% less than Manhattan rates.",
  description:
    "Infonza delivers enterprise software engineering for New York startups, financial services companies, InsurTech platforms, and Fortune 500 partners. Senior engineers in your tools (Slack, GitHub, Jira), EST timezone alignment, D-U-N-S registered (No. 771974280), and a 94% client retention rate. Build what New York demands — at a fraction of Manhattan's engineering costs.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "EST Timezone — Full Morning Overlap",
      desc: "9am–2pm EST coverage every day. Daily standups at your preferred NYC morning time. Sprint reviews before your Friday afternoon. Slack-first communication — your engineers are responsive during US market hours.",
    },
    {
      title: "New York's Industry Depth",
      desc: "FinTech, insurance, legal tech, healthcare, and SaaS — the industries that drive New York's economy are where we have the deepest domain expertise. We've built financial compliance systems, InsurTech platforms, and legal document intelligence for US clients.",
    },
    {
      title: "60–70% Below Manhattan Engineering Rates",
      desc: "NYC senior engineers cost $180,000–$280,000/year. Our senior engineers cost the equivalent of $35–$80/hr. For a 5-person engineering team, that's $900,000–$1.4M in annual savings — without compromising the output quality that New York-scale businesses require.",
    },
    {
      title: "Enterprise Procurement Ready",
      desc: "D-U-N-S registered (No. 771974280), W-8BEN-E tax documentation, SOC 2 and HIPAA compliance documentation, mutual NDA from day one, professional liability insurance. Every box checked for Fortune 500 and financial services vendor onboarding.",
    },
    {
      title: "Senior Engineers Only",
      desc: "4-stage technical screening. We hire the top 8% of candidates. Only engineers with 5+ years of production experience — the calibre that New York enterprise clients expect. 94% client retention proves the quality holds.",
    },
    {
      title: "2-Week Sprint Delivery",
      desc: "Working software every 2 weeks, deployed to staging, reviewed with your team. No black-box project management. No 3-month updates. New York clients see exactly what's being built, every sprint.",
    },
  ],

  localPresence: {
    headline: "Serving New York's Technology and Enterprise Market",
    paragraphs: [
      "New York City has one of the world's most demanding technology markets. The combination of Wall Street's precision requirements, HealthTech's compliance demands, and the density of high-growth SaaS companies means New York clients expect engineering partners who understand complex business systems — not just developers who write code.",
      "New York is also one of the most expensive places in the world to hire software engineers. Senior engineers in Manhattan command $180,000–$280,000 in annual salary. Contractors charge $150–$250/hr. For early-stage and growth-stage companies building engineering teams, these rates are increasingly unsustainable — especially when Series A companies need to extend runway, not deplete it on local hiring costs.",
      "Infonza's New York client base spans financial services (trading and compliance platforms), InsurTech (carrier API integrations, agency management systems), healthcare technology (HIPAA-compliant EHR-adjacent applications), legal technology (document intelligence, contract management), and venture-backed SaaS companies that need engineering depth without NYC headcount costs.",
      "Our engagement with New York clients is indistinguishable from local team work: daily 9am ET standups, Slack in your workspace, code in your GitHub, sprint demos every Friday. The only difference is a 10-hour time zone offset that we bridge with deliberate overlap hours and async-first communication discipline.",
    ],
    highlights: [
      "EST 9am–2pm daily overlap — core New York business hours covered",
      "FinTech and financial compliance engineering depth",
      "InsurTech expertise: carrier APIs, policy systems, agent platforms",
      "Legal tech and document intelligence capability",
      "HIPAA-compliant healthcare engineering (BAA available)",
      "Fortune 500 vendor procurement: D-U-N-S, W-8BEN-E, NDA, liability insurance",
    ],
  },

  midCtaHeadline: "Build at 60% of New York's Engineering Cost",

  caseStudy: {
    tag: "FinTech · Compliance · Reporting",
    client: "US Financial Services Platform",
    title: "Regulatory reporting from 3 days to 4 hours",
    desc: "A US financial services company needed to automate regulatory reporting across multiple broker-dealer relationships. Manual aggregation took 3 days per quarter. We built a data pipeline and compliance reporting system with automated reconciliation and FINRA-adjacent formatting. The quarterly report now runs in 4 hours with zero manual intervention.",
    link: "/case-studies/glovebox",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "Software Dev Company USA", href: "/software-development-company-usa" },
    { label: "AI Development for US", href: "/ai-development-company-usa" },
    { label: "Software Dev Company CA", href: "/software-development-company-california" },
    { label: "Software Dev Company TX", href: "/software-development-company-texas" },
    { label: "Staff Augmentation India", href: "/staff-augmentation-company-india" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
    { label: "SaaS Development India", href: "/saas-development-company-india" },
    { label: "Insurance Software", href: "/insurance-software-development" },
  ],

  bookingProps: {
    heading: "Build with New York Precision at India Rates",
    subheading:
      "30-minute technical call with our senior engineers. We assess your project, answer hard questions, and give you a transparent cost breakdown.",
  },
};

export default function SoftwareDevCompanyNewYorkPage() {
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
