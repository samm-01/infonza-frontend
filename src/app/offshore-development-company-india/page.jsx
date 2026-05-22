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
    q: "What offshore development models does Infonza offer?",
    a: "We offer three engagement models: (1) Dedicated Team — a fully managed offshore team that works exclusively on your product, operating as an extension of your in-house engineering. (2) Staff Augmentation — pre-vetted senior engineers embedded directly into your existing team, working in your tools and processes. (3) Project-Based Development — fixed-scope delivery with defined milestones, timelines, and deliverables. All models include NDA protection and D-U-N-S verified business identity.",
  },
  {
    q: "How does Infonza ensure offshore development quality?",
    a: "Quality is enforced at three levels. First, hiring: we recruit from the top 8% of candidates — all engineers pass a 4-stage technical screening including live coding, system design, and domain-specific evaluation. Second, process: mandatory code review via GitHub PRs, 2-week sprint cycles, and explicit client sign-off before each sprint starts. Third, delivery: we ship working software to a staging environment every sprint, not status reports.",
  },
  {
    q: "What is the time-to-start for an offshore development engagement?",
    a: "For staff augmentation, typical placement is 48–72 hours from brief to candidates. For a dedicated team, onboarding is 1–2 weeks from contract signing. For project-based work, we deliver a detailed technical proposal within 48 hours of a discovery call and can begin development within 1 week of sign-off.",
  },
  {
    q: "What time zones does the India offshore team cover?",
    a: "Our India-based engineering team maintains daily EST/PST overlap from 9am–2pm. This covers morning standups, midday design reviews, and sprint ceremonies on US East and West Coast schedules. UK clients get near-full business day overlap. All communication is async-capable via Slack — nothing waits for the next day.",
  },
  {
    q: "Is intellectual property protected in an offshore engagement?",
    a: "Yes, fully. Every engagement begins with a mutual NDA signed before any technical discussion. Individual IP assignment agreements cover every engineer who touches your codebase. We are D-U-N-S registered (No. 771974280), which provides verifiable business identity for enterprise procurement and legal due diligence. Your code, architecture, and business logic remain entirely yours.",
  },
  {
    q: "What tech stacks does Infonza's offshore team cover?",
    a: "Frontend: React, Next.js, TypeScript, Vue.js, React Native. Backend: Node.js, Python (FastAPI, Django), Java (Spring Boot), Go. Databases: PostgreSQL, MongoDB, Redis, Elasticsearch. Cloud: AWS, GCP, Azure. AI/ML: LangChain, OpenAI, Hugging Face, scikit-learn, TensorFlow. DevOps: Kubernetes, Docker, Terraform, GitHub Actions, CI/CD pipelines.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Offshore Development Company India", url: "/offshore-development-company-india" },
];

const professionalServiceSchema = buildProfessionalServiceSchema({
  description:
    "Trusted offshore development company in India providing dedicated engineering teams, staff augmentation, and full-project development for US, UK, and global enterprises.",
  url: "/offshore-development-company-india",
  serviceType: "Offshore Software Development",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "Offshore Development Company · India",
  headline: "Offshore Development Company",
  headlineSub: "in India",
  subheadline:
    "Dedicated offshore engineering teams, staff augmentation, and full-project delivery from India — senior engineers, NDA-first, D-U-N-S verified.",
  description:
    "Infonza is a trusted offshore software development company in India delivering dedicated engineering teams, staff augmentation, and project-based development to US, UK, and global enterprises. Senior engineers across React, Node.js, Python, AI/ML, and cloud — placed in 48 hours, operating at 60–70% lower cost than US hiring.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "Three Proven Engagement Models",
      desc: "Dedicated Team (fully managed, exclusive), Staff Augmentation (engineers embedded in your team), or Project-Based (fixed scope, fixed timeline). Choose the model that fits your roadmap — switch as your needs evolve.",
    },
    {
      title: "48-Hour Engineer Placement",
      desc: "For staff augmentation, we deliver 2–3 pre-vetted candidates within 24 hours of your technical brief. Engineers are onboarded and committing code within 48–72 hours. No multi-week recruitment cycles.",
    },
    {
      title: "60–70% Cost Advantage",
      desc: "Senior offshore engineers at $35–$75/hr vs $150–$200/hr for US equivalents. A 5-engineer offshore team for a year saves $600,000–$900,000 versus equivalent US hiring — without sacrificing output quality.",
    },
    {
      title: "Full-Stack Engineering Depth",
      desc: "React, Next.js, Node.js, Python, Java, Go, AWS, GCP, Azure, AI/ML, DevOps. Offshore specialist capability across the full modern engineering stack — no outsourcing to third parties, no specialty gaps.",
    },
    {
      title: "NDA + IP Protection from Day One",
      desc: "Mutual NDA before any technical discussion. Individual IP assignment agreements for every engineer. D-U-N-S registered (No. 771974280) for enterprise procurement verification. Your codebase and IP remain fully yours.",
    },
    {
      title: "Daily US Timezone Overlap",
      desc: "EST/PST overlap 9am–2pm daily. Morning standups, sprint reviews, and architecture sessions on your schedule. Slack, GitHub, and Jira as standard — same tools, same workflow, different timezone.",
    },
  ],

  localPresence: {
    headline: "India: The World's Premier Offshore Engineering Destination",
    paragraphs: [
      "India's offshore software development industry didn't emerge from cost arbitrage alone. It was built on a genuine engineering talent advantage: 1.5 million engineering graduates annually, a decade-long investment in software export infrastructure, and the NASSCOM ecosystem that created delivery standards adopted by global enterprises.",
      "Today, every major US technology company — Google, Microsoft, Amazon, Meta, Salesforce — runs significant engineering operations in India. This isn't outsourcing risk management; it's a structural decision about where world-class engineering talent exists at scale. India has the deepest pipeline of React engineers, Node.js developers, Python data scientists, and AI/ML specialists of any single country.",
      "For offshore development, India's specific advantages are: English as the primary business and technical language, engineering curricula aligned with US technology standards, a mature agile delivery culture, and a legal framework (IT Act 2000, strong IP protections under the Patents Act and Copyright Act) that provides enterprise-grade contract certainty.",
      "Infonza builds on this foundation by hiring only senior engineers — 5+ years of production experience — and operating with the delivery discipline that enterprise clients require: explicit sprint sign-off, working software every two weeks, and the communication transparency that makes offshore feel like a local team extension.",
    ],
    highlights: [
      "NASSCOM-regulated IT export industry: $245B annual exports",
      "1.5M+ engineering graduates annually — world's largest pipeline",
      "Strong IP protection under India's Patents Act and Copyright Act",
      "English-first technical and business communication culture",
      "Mature agile delivery standards developed across 30+ years of offshore work",
      "All major US cloud and AI platforms have India engineering hubs",
    ],
  },

  midCtaHeadline: "Build Your Offshore Development Team in India",

  caseStudy: {
    tag: "Offshore Team · SaaS · 18 Months",
    client: "US FinTech SaaS Company",
    title: "10-person offshore team built the entire product backend",
    desc: "A US FinTech startup needed to scale engineering 3x without tripling their burn rate. We placed a 10-person dedicated offshore team — 4 backend engineers, 3 frontend, 2 DevOps, 1 QA lead. The team owned the entire product backend for 18 months, shipped 3 major platform releases, and reduced infrastructure costs by 40% through cloud optimization.",
    link: "/case-studies/readybuild",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "Staff Augmentation India", href: "/staff-augmentation-company-india" },
    { label: "Hire React Developers", href: "/hire-react-developers-india" },
    { label: "Software Development India", href: "/software-development-company-india" },
    { label: "AI Development India", href: "/ai-development-company-india" },
    { label: "ERP Development India", href: "/erp-development-company-india" },
    { label: "SaaS Development India", href: "/saas-development-company-india" },
    { label: "IT Company Chandigarh", href: "/software-development-company-chandigarh" },
    { label: "IT Company Mohali", href: "/it-company-mohali" },
  ],

  bookingProps: {
    heading: "Build Your Offshore Engineering Team",
    subheading:
      "30-minute discovery call. We assess your requirements, recommend the right engagement model, and give you an honest team composition plan.",
  },
};

export default function OffshoreDevIndiaPage() {
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
