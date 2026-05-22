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
    q: "Why do Texas businesses use Infonza for software development?",
    a: "Texas has become the second-largest US tech hub after California — Austin's engineering market is saturated, Dallas's enterprise market is competitive, and Houston's energy and logistics sector demands increasingly sophisticated software. Infonza gives Texas companies access to senior engineering talent at 60–70% lower cost than Austin or Dallas rates, with CST timezone coverage and the domain expertise that Texas's industries require: ERP for manufacturing and logistics, SaaS for enterprise, and AI for energy and healthcare.",
  },
  {
    q: "What Texas industries does Infonza serve?",
    a: "Texas's economy maps directly to our expertise: energy and oil & gas (data pipeline systems, operational dashboards, IoT data management), logistics and supply chain (TMS, WMS, route optimisation — Texas is a major logistics hub), healthcare technology (Dallas and Houston hospital systems, HIPAA-compliant applications), financial services (Dallas FinTech corridor, compliance software), SaaS companies (Austin's startup ecosystem), and manufacturing ERP for Texas's industrial base.",
  },
  {
    q: "How does CST timezone coverage work with Infonza's India team?",
    a: "CST is 11–12 hours behind India. Our team covers 9am–2pm CST daily — morning standups, midday architecture sessions, and sprint reviews on Texas business time. For CST clients, our India engineers start late to create the overlap window. Sprint demos at 1pm CST Fridays. Real-time Slack responsiveness during your work day. We've served Texas clients for years; the CST coverage model is established.",
  },
  {
    q: "Can Infonza build ERP systems for Texas manufacturing and logistics companies?",
    a: "Yes — ERP is one of our two strongest services alongside AI. We've built custom ERP systems for manufacturing (production scheduling, BOM, shop floor tracking), logistics (dispatch, route management, warehouse operations), and construction companies. Texas's industrial base — manufacturing in Houston and Dallas, construction across the state, energy operations in West Texas — represents a strong fit for our ERP engineering depth.",
  },
  {
    q: "How does Infonza handle enterprise procurement for Texas-based Fortune 500 clients?",
    a: "We meet enterprise procurement requirements: D-U-N-S registered (No. 771974280) for vendor verification, W-8BEN-E for US tax compliance, mutual NDA before any technical discussion, individual IP assignment agreements for all engineers, professional liability insurance, and SOC 2 / HIPAA compliance documentation. Dallas's financial services and healthcare enterprises have specific vendor onboarding requirements — we satisfy them.",
  },
  {
    q: "What is the typical project start time for Texas clients?",
    a: "For staff augmentation: 48–72 hours from brief to placed engineers. For new project development: technical proposal within 48 hours of discovery call, development start within 1 week of contract signing. Texas clients who've dealt with slow vendor procurement processes tell us the speed is the most immediate difference. We are a fast-moving engineering firm, not a large IT services company.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Software Development Company USA", url: "/software-development-company-usa" },
  { name: "Texas", url: "/software-development-company-texas" },
];

const usServiceSchema = buildUSServiceSchema({
  description:
    "Enterprise software development for Texas businesses — AI, ERP, SaaS, offshore engineering with CST timezone overlap and D-U-N-S verification.",
  url: "/software-development-company-texas",
  serviceType: "Software Development Services",
  stateName: "Texas",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "Serving Texas · CST Timezone · D-U-N-S Verified",
  headline: "Software Development Company",
  headlineSub: "for Texas Businesses",
  subheadline:
    "Enterprise AI, ERP, SaaS, and offshore engineering for Austin, Dallas, and Houston — senior engineers at 60–70% below Texas metro rates.",
  description:
    "Infonza delivers enterprise software engineering for Texas startups, mid-market manufacturers, logistics companies, and Fortune 500 partners. Senior engineers in your tools with CST timezone coverage, D-U-N-S verified (No. 771974280), and domain expertise in the industries that power Texas's economy: energy, logistics, manufacturing, healthcare, and financial services.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "CST Timezone Coverage",
      desc: "9am–2pm CST daily overlap. Our team is calibrated for Central Time — the most common timezone for Texas enterprise clients. Morning standups, midday architecture reviews, Friday sprint demos at 1pm CST. Slack during your afternoon.",
    },
    {
      title: "Texas Industry Domain Expertise",
      desc: "Energy data pipelines, logistics ERP, manufacturing shop floor systems, healthcare compliance, FinTech reporting. Texas's industrial and enterprise economy maps to our deepest technical domains.",
    },
    {
      title: "60–70% Below Austin/Dallas Engineering Rates",
      desc: "Austin senior engineers cost $160,000–$240,000/year; Dallas is similar. Our senior engineers cost $35–$80/hr equivalent. A 5-person team for 12 months: $800,000–$1.2M in savings versus Texas metro hiring.",
    },
    {
      title: "Custom ERP for Texas Industries",
      desc: "Texas's manufacturing, construction, and logistics base needs custom ERP — not configured SAP. We build production-grade ERP from scratch: production scheduling, inventory, dispatch, and invoicing for Texas's operational businesses.",
    },
    {
      title: "Enterprise Procurement Ready",
      desc: "D-U-N-S No. 771974280, W-8BEN-E tax documentation, SOC 2 and HIPAA compliance, NDA from day one, liability insurance. Dallas Fortune 500 and Houston energy companies have the same vendor requirements — we satisfy them.",
    },
    {
      title: "Senior Engineers, 48-Hour Placement",
      desc: "Staff augmentation placements in 48–72 hours for Texas companies that move fast. React, Node.js, Python, AI/ML, DevOps, Java — pre-vetted senior engineers ready to commit to your GitHub within days.",
    },
  ],

  localPresence: {
    headline: "Serving Texas's Expanding Technology Economy",
    paragraphs: [
      "Texas has become the second-largest technology ecosystem in the United States. Austin — the 'Silicon Hills' — has attracted the US headquarters of Tesla, Oracle, and Apple alongside hundreds of startups and scale-ups. Dallas-Fort Worth has one of the largest enterprise technology concentrations in the country, hosting major financial services, healthcare, and logistics companies. Houston's energy sector is undergoing rapid digital transformation.",
      "Texas's specific technology needs differ from California's startup-first culture. Texas enterprise clients need software that integrates with industrial operations — ERP for manufacturing plants, dispatch systems for logistics fleets, operational dashboards for energy facilities. The engineering complexity is in the domain logic — understanding how a manufacturing BOM maps to a production schedule, how a logistics dispatch system handles real-time routing constraints — not just the code.",
      "Austin's startup ecosystem demands the speed and technical depth that Silicon Valley companies expect. Scale-ups in Austin's SaaS corridor — companies raising Series A and B rounds — need engineering capacity that can move as fast as their product roadmap without San Francisco burn rates. Infonza's offshore model, with genuine CST timezone overlap, is specifically designed for this dynamic.",
      "Dallas's enterprise market has specific requirements: Fortune 500 vendor compliance (we're D-U-N-S registered), financial services engineering depth, and the kind of long-term delivery partnership that large organisations need. Houston's energy and logistics sector adds operational domain expertise requirements — we've built systems for both.",
    ],
    highlights: [
      "CST 9am–2pm daily overlap — Central Time alignment built into our operations",
      "Energy and oil & gas software: data pipelines, operational dashboards",
      "Logistics ERP: dispatch, route management, WMS for Texas's freight hub",
      "Manufacturing ERP for Texas's industrial base: production scheduling, BOM, shop floor",
      "Dallas Fortune 500 procurement: D-U-N-S, W-8BEN-E, SOC 2, liability insurance",
      "Austin startup engineering: speed, technical depth, no Bay Area cost structure",
    ],
  },

  midCtaHeadline: "Build Enterprise Software at Texas-Sized Savings",

  caseStudy: {
    tag: "Logistics · ERP · Dispatch",
    client: "Texas Logistics Company",
    title: "Manual dispatch replaced by real-time routing ERP",
    desc: "A Texas-based regional logistics company was managing 200+ daily dispatches from a whiteboard and spreadsheets. We built a custom logistics ERP with route optimization, live driver tracking, customer notifications, and invoice generation. Dispatch time per job dropped from 8 minutes to 90 seconds. On-time delivery rate improved from 78% to 96%.",
    link: "/case-studies/readybuild",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "Software Dev Company USA", href: "/software-development-company-usa" },
    { label: "AI Development for US", href: "/ai-development-company-usa" },
    { label: "Software Dev Company NY", href: "/software-development-company-new-york" },
    { label: "Software Dev Company CA", href: "/software-development-company-california" },
    { label: "ERP Development India", href: "/erp-development-company-india" },
    { label: "Staff Augmentation India", href: "/staff-augmentation-company-india" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
    { label: "Software Development India", href: "/software-development-company-india" },
  ],

  bookingProps: {
    heading: "Build Enterprise Software for Texas Business",
    subheading:
      "30-minute discovery call with our senior engineers. We assess your requirements, share domain knowledge, and give you a transparent plan.",
  },
};

export default function SoftwareDevCompanyTexasPage() {
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
