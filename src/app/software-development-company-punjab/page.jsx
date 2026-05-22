import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GeoPageTemplate from "../components/geo-page-template";
import {
  GLOBAL_STATS,
  buildLocalBusinessSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "../../lib/geo-data";

const FAQS = [
  {
    q: "What software development services does Infonza provide in Punjab?",
    a: "From Punjab, we deliver the complete enterprise software stack: AI and generative AI development (GPT-4, RAG, LLM fine-tuning), custom ERP systems for manufacturing and logistics, multi-tenant SaaS products, IT staff augmentation across React, Node.js, Python, and DevOps, insurance software development, and document management systems. All services are available to US, UK, and global clients.",
  },
  {
    q: "Why has Punjab emerged as a major IT development hub?",
    a: "Punjab's IT cluster — centered on Chandigarh and Mohali — has grown into North India's most significant technology corridor. STPI Mohali, DLF IT Park Phase 8B, and the IT City development provide world-class infrastructure. Chandigarh University, IIT Ropar, and Punjab Engineering College create a strong engineering talent pipeline, while lower operational costs than Bangalore or Pune deliver real cost advantage for global clients.",
  },
  {
    q: "What is the cost advantage of hiring software developers in Punjab?",
    a: "Senior engineers in Punjab (Chandigarh-Mohali) cost $35–$65/hr — 5–15% lower than equivalent Bangalore or Delhi NCR talent, and 60–70% lower than US development rates. Punjab's lower cost of living means the same engineering calibre costs less, without the wage inflation that has compressed margins in India's more saturated tech metros.",
  },
  {
    q: "Which universities feed Punjab's software engineering talent pool?",
    a: "Chandigarh University is one of India's largest private universities, producing thousands of engineering graduates annually. IIT Ropar (Punjab's premier national technology institute) graduates work in top engineering roles. Punjab Engineering College (PEC) and UIET Chandigarh are established institutions with strong CS and IT programmes. This pipeline gives Punjab one of India's most cost-effective senior engineering talent pools.",
  },
  {
    q: "Does Infonza serve startups or only enterprise clients from Punjab?",
    a: "Both. We've built MVPs for seed-stage startups in 6–8 weeks and run multi-year engineering partnerships with US mid-market companies. The engagement model scales from a single augmented developer placed in 48 hours to a full dedicated product team of 10+. Punjab's cost advantage makes even early-stage engagements commercially viable.",
  },
  {
    q: "Is Infonza's IP and data security robust from Punjab?",
    a: "Yes. We sign mutual NDAs before any technical discussion. Individual IP assignment agreements cover every engineer on your project. We are D-U-N-S registered (No. 771974280) for enterprise procurement. Our STPI Mohali operations are conducted under Software Technology Parks of India's regulatory framework, which includes export compliance and data security standards.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Software Development Company Punjab", url: "/software-development-company-punjab" },
];

const localBusinessSchema = buildLocalBusinessSchema({
  description:
    "Leading software development company in Punjab delivering AI, ERP, SaaS, and offshore engineering for global enterprises. Based in Chandigarh-Mohali.",
  url: "/software-development-company-punjab",
  location: "punjab",
  serviceType: "Software Development",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "Software Development Company · Punjab, India",
  headline: "Software Development Company",
  headlineSub: "in Punjab",
  subheadline:
    "Enterprise AI, ERP, SaaS, and offshore engineering from Punjab's fastest-growing IT hub — Chandigarh-Mohali.",
  description:
    "Infonza is Punjab's leading software development company, delivering production-grade AI development, custom ERP systems, B2B SaaS products, and dedicated offshore engineering teams to US and global enterprises. Operating from Chandigarh-Mohali — North India's most cost-effective engineering hub — with the same senior talent and delivery standards as Bangalore, at better value.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "Punjab's Engineering Talent Depth",
      desc: "Chandigarh University, IIT Ropar, Punjab Engineering College, and UIET Chandigarh create a strong annual engineering talent pipeline. We hire the top 8% — senior engineers with 5+ years of production experience who chose to stay in Punjab rather than migrate to Bangalore.",
    },
    {
      title: "Better Value Than Bangalore or Delhi NCR",
      desc: "Punjab's Chandigarh-Mohali cluster has lower operational costs than India's saturated tech metros. Senior engineering rates are 5–15% lower than Bangalore equivalents — already 60–70% cheaper than US hiring. Same talent calibre, better cost equation.",
    },
    {
      title: "STPI-Backed IT Infrastructure",
      desc: "STPI Mohali provides government-backed IT export infrastructure: high-speed connectivity, customs clearance, and tax benefits for export-oriented software companies. DLF IT Park and IT City development give Chandigarh-Mohali world-class co-location and connectivity.",
    },
    {
      title: "Full Enterprise Engineering Stack",
      desc: "React, Next.js, Node.js, Python, AI/ML, AWS, GCP, PostgreSQL, Kubernetes. Our Punjab team covers the complete modern engineering stack — no outsourcing to specialists, no gaps in delivery capability.",
    },
    {
      title: "Agile, Sprint-Based Delivery",
      desc: "2-week sprint cycles, Friday demos, explicit client sign-off before every new sprint. US/UK timezone overlap from 9am–2pm daily. Slack, GitHub, and Jira as standard — your tools, your workflow.",
    },
    {
      title: "NDA + D-U-N-S Verified",
      desc: "Mutual NDAs before day one. D-U-N-S registered (No. 771974280) for enterprise procurement. Individual IP assignments for every engineer. Full legal protection for your codebase and business logic.",
    },
  ],

  localPresence: {
    headline: "Punjab's Chandigarh-Mohali: North India's Rising IT Capital",
    paragraphs: [
      "Punjab's technology ecosystem is centred on the Chandigarh-Mohali-Panchkula tricity region — India's fastest-growing IT corridor outside the major metros. The region's combination of established IT infrastructure, a strong engineering education system, and a significantly lower cost base than Bangalore, Pune, or Delhi NCR makes it uniquely attractive for offshore engineering engagements.",
      "STPI (Software Technology Parks of India) Mohali is the anchor of the region's IT export framework. It provides 100% export-oriented software companies with high-speed internet infrastructure, customs clearance for software exports, and regulatory support under India's Software Technology Parks scheme. This government-backed infrastructure gives Punjab's IT sector the same export credibility as Bangalore's ITPL or Hyderabad's HITEC City.",
      "The talent pipeline is substantial and growing. Chandigarh University — with over 30,000 students — is one of India's largest private universities, producing engineers across CS, IT, and data science disciplines annually. IIT Ropar, established as a premier national technology institute, produces research-grade engineers in AI, systems engineering, and computer science. Punjab Engineering College (PEC) is one of India's oldest and most respected engineering institutions.",
      "What makes Punjab specifically valuable for offshore development is the combination: senior engineering talent at lower cost than Bangalore, a mature IT export infrastructure, English-medium technical education, and a quality of life that retains senior engineers rather than losing them to metro saturation. Infonza leverages this ecosystem to deliver senior engineering quality at a cost point that Bangalore teams can no longer match.",
    ],
    highlights: [
      "STPI Mohali: government-backed IT export hub with 100% export-oriented benefits",
      "Chandigarh University: 30,000+ students, thousands of engineering graduates annually",
      "IIT Ropar: premier national AI and systems engineering institution",
      "DLF IT Park Phase 8B and IT City: world-class enterprise IT infrastructure",
      "Lower operational costs than Bangalore, Pune, or Delhi NCR",
      "Punjab government IT policy: active incentives for export-oriented software companies",
    ],
  },

  midCtaHeadline: "Build Your Engineering Team in Punjab",

  caseStudy: {
    tag: "Construction · ERP · Project Management",
    client: "Mid-size Construction Company",
    title: "From bid to invoice — all in one ERP system",
    desc: "A growing construction firm was managing 15+ simultaneous projects across Excel files and WhatsApp groups. Built by our Punjab team: a full construction ERP covering bid management, project tracking, field worker mobile view, and one-click invoice generation. The invoicing cycle dropped from 28 days to 4 days.",
    link: "/case-studies/readybuild",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "IT Company Chandigarh", href: "/software-development-company-chandigarh" },
    { label: "IT Company Mohali", href: "/it-company-mohali" },
    { label: "AI Development India", href: "/ai-development-company-india" },
    { label: "ERP Development India", href: "/erp-development-company-india" },
    { label: "SaaS Development India", href: "/saas-development-company-india" },
    { label: "Staff Augmentation India", href: "/staff-augmentation-company-india" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
    { label: "Software Development India", href: "/software-development-company-india" },
  ],

  bookingProps: {
    heading: "Partner with Punjab's Best Engineering Team",
    subheading:
      "30-minute discovery call. We assess your requirements, answer technical questions, and give you an honest build plan at Punjab's cost advantage.",
  },
};

export default function SoftwareDevCompanyPunjabPage() {
  return (
    <>
      <Script id="schema-localbusiness" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
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
