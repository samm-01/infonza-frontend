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
    q: "Why do California startups and enterprises use Infonza for software development?",
    a: "San Francisco and Bay Area engineering costs are among the highest in the world — senior engineers cost $200,000–$350,000 in base salary, plus equity, benefits, and office. For Series A and B startups in California, Infonza provides the same AI and SaaS engineering quality at 60–70% lower cost, with PST timezone overlap. Extend your runway. Build more. Spend less per engineer.",
  },
  {
    q: "What types of California companies does Infonza typically work with?",
    a: "We primarily serve: Series A–C SaaS companies that need to scale engineering without Bay Area burn rates, AI and ML startups that need LLM integration and RAG architecture, HealthTech companies in LA and San Diego (HIPAA-compliant systems, EHR integrations), logistics and supply chain companies in Southern California, FinTech platforms building compliance infrastructure, and enterprise software vendors expanding their product suite.",
  },
  {
    q: "How does PST timezone overlap work with your India engineering team?",
    a: "Our team maintains 9am–2pm PST daily overlap — that's 9:30pm–2:30am IST for our engineers, and they cover it. California is our most common client timezone and we've built the work culture around PST alignment. Morning standups at 9am PST, sprint demos at 1pm PST Fridays. Real-time Slack during your afternoon. The overlap is genuine, not just claimed.",
  },
  {
    q: "Can Infonza handle AI and ML development for California AI startups?",
    a: "Yes — AI is our fastest-growing service and California's AI ecosystem is where most of our growth comes from. We've built RAG systems, LLM fine-tuning pipelines, GPT-4 integrations, AI chatbots, and intelligent document processing for California-based AI and SaaS companies. We work with the same stack as Bay Area AI teams: LangChain, LlamaIndex, Pinecone, pgvector, OpenAI, Anthropic, AWS Bedrock, Google Vertex AI.",
  },
  {
    q: "Is Infonza set up for California enterprise procurement and legal requirements?",
    a: "Yes. D-U-N-S registered (No. 771974280), W-8BEN-E tax documentation, mutual NDA before any technical discussion, individual IP assignments for all engineers, SOC 2 compliance documentation, and HIPAA BAA for healthcare projects. California enterprise clients — including those with CCPA obligations — need data handling documentation, which we provide.",
  },
  {
    q: "What is the typical engagement model for California-based clients?",
    a: "Most California clients start with staff augmentation — placing 1–3 senior engineers directly in their engineering team within 48–72 hours. We work in your GitHub, Jira, and Slack from day one. As the engagement grows, some clients transition to a dedicated team model. A few come with greenfield projects and want full project delivery. We flex to what the company needs at each stage.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Software Development Company USA", url: "/software-development-company-usa" },
  { name: "California", url: "/software-development-company-california" },
];

const usServiceSchema = buildUSServiceSchema({
  description:
    "Enterprise software development for California businesses — AI, SaaS, offshore engineering with PST timezone overlap and D-U-N-S verification.",
  url: "/software-development-company-california",
  serviceType: "Software Development Services",
  stateName: "California",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "Serving California · PST Timezone · D-U-N-S Verified",
  headline: "Software Development Company",
  headlineSub: "for California Businesses",
  subheadline:
    "Enterprise AI, SaaS, and offshore engineering for Silicon Valley, LA, and San Diego — senior engineers at 60–70% below Bay Area rates.",
  description:
    "Infonza is a trusted engineering partner for California startups and enterprises. From Series A SaaS companies in San Francisco to HealthTech platforms in San Diego, we deliver production-grade AI development, multi-tenant SaaS products, and dedicated engineering teams with genuine PST timezone alignment — at a fraction of Bay Area engineering costs.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "PST Overlap — Genuine, Not Marketing",
      desc: "9am–2pm PST coverage every day. Our team is built around Pacific time. Daily standups at 9am PST, sprint demos Fridays at 1pm PST, real-time Slack during your afternoon. California is our highest-volume client timezone — we've operationalised PST alignment.",
    },
    {
      title: "60–70% Below Bay Area Engineering Costs",
      desc: "San Francisco senior engineers cost $200,000–$350,000 per year. Our senior engineers cost the equivalent of $35–$80/hr. For a 5-person team for a year: $1M–$1.5M in savings versus local SF hiring. Enough to extend a Series A runway by 12–18 months.",
    },
    {
      title: "AI and LLM Engineering Depth",
      desc: "California's AI economy needs AI engineers. Ours have shipped RAG systems, LLM fine-tuning pipelines, GPT-4 integrations, and AI workflow automation for SaaS companies. Same stack as Bay Area AI teams. LangChain, Pinecone, OpenAI, Anthropic, AWS Bedrock.",
    },
    {
      title: "SaaS Architecture Expertise",
      desc: "Multi-tenant architecture, Stripe billing, usage metering, subscription management. We've built 20+ SaaS products. California SaaS companies that need to scale engineering fast — without scaling the burn rate — use Infonza.",
    },
    {
      title: "CCPA and SOC 2 Compliance Ready",
      desc: "California's CCPA requirements apply to your engineering. We document data flows, implement PII handling, and can provide SOC 2 compliance documentation. HIPAA BAA available for HealthTech. Your California-based legal team will have what they need.",
    },
    {
      title: "Staff in 48 Hours",
      desc: "For Silicon Valley companies that move fast: pre-vetted senior engineers placed in 48–72 hours from brief. In your Slack, committing to your GitHub, within a week. No 6-week recruitment cycles.",
    },
  ],

  localPresence: {
    headline: "Serving California's Innovation Economy",
    paragraphs: [
      "California houses the world's most concentrated technology ecosystem. From SoMa in San Francisco to Silicon Valley's corridor of semiconductor and enterprise giants, from LA's booming creator and HealthTech economy to San Diego's biotech and defence technology cluster — California's software engineering demand spans every domain of modern technology.",
      "The Bay Area's engineering cost crisis is structural. San Francisco senior engineers commanding $250,000+ in total compensation isn't sustainable for most growing companies. Y Combinator cohorts routinely burn through Series A capital on engineering headcount before reaching Series B. The companies that navigate this successfully — that build real engineering depth without exhausting their runway — are the ones that learn to work with offshore engineering teams that meet their quality and communication standards.",
      "Infonza's California practice is built specifically for the Bay Area work culture: speed, technical ambition, directness, and high standards. Our engineers don't need to be told to raise technical concerns — they'll file the GitHub issue and present the alternative in the next standup. The engineering culture is designed for the kind of product organisations that Silicon Valley produces.",
      "Southern California adds different dimensions: LA's growing FinTech and creator economy, San Diego's HealthTech and defence engineering, Orange County's enterprise software market. We serve the full California geography — the common thread is technical ambition and a preference for engineering partners who think like product engineers, not IT vendors.",
    ],
    highlights: [
      "PST 9am–2pm daily overlap — operationalised Pacific time alignment",
      "AI and LLM engineering for Silicon Valley AI companies",
      "SaaS architecture expertise for Bay Area product companies",
      "CCPA and SOC 2 documentation for California compliance requirements",
      "HealthTech engineering (HIPAA BAA) for San Diego and LA",
      "Series A–C startup engineering: runway extension through offshore leverage",
    ],
  },

  midCtaHeadline: "Build at 60% of Bay Area Engineering Cost",

  caseStudy: {
    tag: "SaaS · AI · Series B",
    client: "Bay Area SaaS Company",
    title: "3-engineer offshore team ships 2 major releases in 4 months",
    desc: "A Bay Area Series B SaaS company needed to ship two platform releases without blowing through their engineering budget. We placed 3 senior engineers — 1 backend architect, 1 frontend lead, 1 DevOps — in their GitHub and Slack within 72 hours. Both releases shipped on schedule. Total engineering cost: $190,000 versus the $450,000 equivalent Bay Area headcount.",
    link: "/case-studies/glovebox",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "Software Dev Company USA", href: "/software-development-company-usa" },
    { label: "AI Development for US", href: "/ai-development-company-usa" },
    { label: "Software Dev Company NY", href: "/software-development-company-new-york" },
    { label: "Software Dev Company TX", href: "/software-development-company-texas" },
    { label: "Staff Augmentation India", href: "/staff-augmentation-company-india" },
    { label: "Hire React Developers India", href: "/hire-react-developers-india" },
    { label: "SaaS Development India", href: "/saas-development-company-india" },
    { label: "AI Development India", href: "/ai-development-company-india" },
  ],

  bookingProps: {
    heading: "Build at Bay Area Quality, Below Bay Area Cost",
    subheading:
      "Free 30-minute call with our senior engineers. Technical assessment, honest timeline, no sales theatre.",
  },
};

export default function SoftwareDevCompanyCaliforniaPage() {
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
