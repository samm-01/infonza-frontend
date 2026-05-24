import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GeoPageTemplate from "../components/geo-page-template";
import {
  GLOBAL_STATS,
  INDIA_ADVANTAGES,
  buildLocalBusinessSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from "../../lib/geo-data";

const FAQS = [
  {
    q: "Why should I hire a software development company in Chandigarh?",
    a: "Chandigarh offers a rare combination of India's best engineering talent with a lower cost base than Bangalore or Delhi NCR. The city's planned infrastructure, quality of life, and proximity to IIT Ropar and Chandigarh University creates a strong senior engineering talent pipeline. You get senior-level output at 60–70% less than US or UK development costs.",
  },
  {
    q: "What software services does Infonza offer in Chandigarh?",
    a: "We provide the full stack of enterprise software engineering: AI development (GPT-4, RAG, LLM), custom ERP systems, multi-tenant SaaS products, IT staff augmentation, insurance software development, and document management systems. All services are delivered to global clients from our Chandigarh-based engineering team.",
  },
  {
    q: "Do you work with US and UK companies from Chandigarh?",
    a: "Yes — the majority of our clients are US-based. We maintain EST/PST timezone overlap (9am–2pm daily), sign mutual NDAs before any technical discussion, and work in your tools (Slack, GitHub, Jira). Distance has never been a factor for any of our 200+ projects.",
  },
  {
    q: "Is Infonza D-U-N-S registered?",
    a: "Yes. Infonza Innovations is D-U-N-S registered (No. 771974280), which verifies our business identity for enterprise procurement, government contracting, and vendor onboarding processes.",
  },
  {
    q: "How quickly can you start a project?",
    a: "For new project engagements, we can have a technical proposal ready within 48 hours of a discovery call. For staff augmentation, developer placement typically completes in 48–72 hours. We can have engineers working in your codebase within a week of contract signing.",
  },
  {
    q: "What industries does Infonza serve from Chandigarh?",
    a: "Our primary industry expertise spans insurance and InsurTech, logistics and supply chain, healthcare and MedTech, financial services and FinTech, SaaS platforms, legal compliance software, manufacturing ERP, real estate technology, and e-commerce systems. We serve clients across North America, the UK, and Australia.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Software Development Company Chandigarh", url: "/software-development-company-chandigarh" },
];

const localBusinessSchema = buildLocalBusinessSchema({
  description:
    "Leading software development company in Chandigarh delivering AI, ERP, SaaS, and offshore engineering for US, UK, and global enterprises.",
  url: "/software-development-company-chandigarh",
  location: "chandigarh",
  serviceType: "Software Development",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "Software Development Company · Chandigarh, India",
  headline: "Software Development Company",
  headlineSub: "in Chandigarh",
  subheadline:
    "Enterprise AI, ERP, SaaS, and offshore engineering delivered by Chandigarh's most experienced software development team.",
  description:
    "Infonza is Chandigarh's premier software development company — trusted by US startups, UK enterprises, and global businesses for AI development, custom ERP systems, B2B SaaS products, and dedicated offshore engineering teams.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "Chandigarh's Senior Engineering Talent",
      desc: "Chandigarh and Mohali are home to IIT Ropar, Chandigarh University, and Punjab Engineering College graduates. We hire only the top 8% — senior engineers with 5+ years of production experience.",
    },
    {
      title: "60–70% Cost Advantage Over US Hiring",
      desc: "Senior engineers at $35–$75/hr versus $150–$200/hr for equivalent US talent. Chandigarh's lower cost of living means you get premium engineering output without premium US salaries.",
    },
    {
      title: "US/UK Timezone Overlap",
      desc: "Daily EST/PST overlap 9am–2pm from Chandigarh. Standups, sprint reviews, and demos on your schedule. Communication-first culture — Slack, Jira, GitHub as standard.",
    },
    {
      title: "D-U-N-S Registered Business",
      desc: "Infonza Innovations is D-U-N-S registered (No. 771974280) — verified business identity for enterprise procurement, government vendor onboarding, and compliance requirements.",
    },
    {
      title: "NDA from Day One",
      desc: "Mutual NDAs signed before any technical discussion. Individual IP assignment agreements for every engineer. Your codebase and business logic remain fully protected.",
    },
    {
      title: "Proven Enterprise Delivery",
      desc: "200+ projects delivered across insurance, logistics, healthcare, and SaaS. 94% client retention rate. We build production systems, not prototypes.",
    },
  ],

  localPresence: {
    headline: "Chandigarh: India's Most Organised Technology Hub",
    paragraphs: [
      "Chandigarh, India's first planned city, has emerged as one of North India's most important technology hubs. The city's disciplined urban planning, quality infrastructure, and proximity to the Delhi NCR corridor make it a natural home for enterprise software engineering operations.",
      "The broader Chandigarh tricity region — Chandigarh, Mohali, and Panchkula — hosts a growing cluster of IT parks, including STPI Mohali, DLF IT Park Chandigarh, and the IT City development in Mohali Phase 8B. This ecosystem has attracted engineering talent from across Punjab, Haryana, and Himachal Pradesh.",
      "Infonza is built on Chandigarh's engineering talent pool. Our team is drawn from IIT Ropar, Chandigarh University, Punjab Engineering College, and UIET — institutions that produce engineers capable of building production-grade AI systems, ERP platforms, and SaaS products for global clients.",
      "For US and UK businesses, Chandigarh offers a specific advantage over more expensive offshore hubs: senior engineering quality at lower cost, with the same English proficiency, agile delivery culture, and timezone overlap that top Bangalore or Pune teams offer — but without the wage inflation of India's more saturated tech markets.",
    ],
    highlights: [
      "Chandigarh tricity: India's fastest-growing North Indian IT corridor",
      "IIT Ropar, Chandigarh University, and PEC as primary talent pipeline",
      "STPI Mohali and DLF IT Park as anchor IT infrastructure",
      "Direct flights to Delhi, Mumbai, and Bangalore for client visits",
      "Lower cost base than Bangalore, Pune, or Delhi NCR",
      "Strong English-medium engineering education culture",
      "Punjab government's active IT policy and incentive framework",
    ],
  },

  midCtaHeadline: "Build Your Next Project from Chandigarh",

  caseStudy: {
    tag: "Insurance · CRM · API Integration",
    client: "US Insurance Agency Platform",
    title: "Quote-to-bind in 45 minutes — down from 3 hours",
    desc: "A US insurance agency was managing their entire book of business across spreadsheets, carrier portals, and email. We built a custom insurance CRM with Hartford API integration that cut onboarding from 3 hours to 45 minutes and eliminated manual data entry entirely.",
    link: "/case-studies/glovebox",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "AI Development Services", href: "/ai-development" },
    { label: "ERP Development", href: "/erp-development" },
    { label: "SaaS Development", href: "/saas-development" },
    { label: "Staff Augmentation", href: "/staff-augmentation" },
    { label: "Insurance Software", href: "/insurance-software-development" },
    { label: "IT Company Mohali", href: "/it-company-mohali" },
    { label: "Software Development Punjab", href: "/software-development-company-punjab" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
    { label: "AI Development Company India", href: "/ai-development-company-india" },
    { label: "Hire React Developers India", href: "/hire-react-developers-india" },
  ],

  bookingProps: {
    heading: "Start Your Project with Chandigarh's Best Engineers",
    subheading:
      "Free 30-minute strategy call with our senior engineers. Technical advice, honest assessment, no sales pitch.",
  },
};

export default function SoftwareDevChandigarhPage() {
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
