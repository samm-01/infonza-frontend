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
    q: "What IT services does Infonza provide in Mohali?",
    a: "From Mohali, we deliver the full enterprise software stack: AI and ML development, custom ERP systems, multi-tenant SaaS products, IT staff augmentation (React, Node.js, Python, DevOps), insurance software development, and document management systems. All services are available to US, UK, and global clients with US timezone overlap.",
  },
  {
    q: "Why is Mohali a strong IT hub for offshore development?",
    a: "Mohali — adjacent to Chandigarh — has become one of North India's most significant IT clusters. STPI Mohali, DLF IT Park Phase 8B, and Chandigarh University's proximity give it a deep engineering talent pipeline. The cost base is lower than Bangalore or Pune, while the engineering quality and English proficiency are comparable. For offshore engagements, this means premium output at better value.",
  },
  {
    q: "How does Infonza handle communication with US and UK clients from Mohali?",
    a: "We maintain daily EST/PST overlap (9am–2pm) from our Mohali team. Communication runs on Slack, project tracking on Jira, and code on GitHub. Sprint reviews happen on Fridays with client sign-off before the next sprint starts. Our team communicates in clear, business-level English — no language barrier in any direction.",
  },
  {
    q: "How quickly can I hire a developer from your Mohali team?",
    a: "For staff augmentation, typical placement is 48–72 hours. You receive 2–3 pre-vetted candidates within 24 hours of your brief. We cover React, Next.js, Node.js, Python, AI/ML, DevOps, and QA engineering.",
  },
  {
    q: "Does Infonza work with startups or only enterprises?",
    a: "Both. We've built MVPs for seed-stage startups in 6 weeks and run multi-year engineering partnerships with US mid-market companies. The engagement model scales — from a single augmented developer to a full dedicated product team.",
  },
  {
    q: "Is Infonza's intellectual property protection robust?",
    a: "Yes. We sign mutual NDAs before any technical discussion. Every engineer signs individual IP assignment and confidentiality agreements. We are D-U-N-S registered (No. 771974280) for enterprise procurement verification.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "IT Company Mohali", url: "/it-company-mohali" },
];

const localBusinessSchema = buildLocalBusinessSchema({
  description:
    "Leading IT company in Mohali delivering enterprise SaaS, AI development, ERP systems, and offshore engineering teams for global businesses.",
  url: "/it-company-mohali",
  location: "mohali",
  serviceType: "IT Services",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "IT Company · Mohali, Punjab, India",
  headline: "IT Company",
  headlineSub: "in Mohali",
  subheadline:
    "Enterprise AI, SaaS, ERP, and offshore engineering from Mohali — Punjab's fastest-growing IT hub.",
  description:
    "Infonza is one of Mohali's leading IT companies delivering production-grade AI development, custom ERP systems, B2B SaaS products, and dedicated offshore development teams to US and global enterprises.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "Mohali's Technical Talent Depth",
      desc: "Chandigarh University, IIT Ropar, and Punjab Engineering College feed Mohali's IT ecosystem with engineering graduates every year. We hire the top 8% — senior engineers who've shipped production systems.",
    },
    {
      title: "Full-Stack Enterprise Engineering",
      desc: "React, Next.js, Node.js, Python, AI/ML, AWS, GCP, PostgreSQL, Kubernetes. We don't outsource specialisms — our Mohali team covers the complete modern engineering stack.",
    },
    {
      title: "Established IT Infrastructure",
      desc: "STPI Mohali, DLF IT Park Phase 8B, and the IT City development give Mohali world-class connectivity, power reliability, and co-location infrastructure for engineering operations.",
    },
    {
      title: "Cost Advantage Without Quality Compromise",
      desc: "Mohali's engineering rates are 60–70% lower than equivalent US or UK talent. Lower cost base than Bangalore or Pune — same output quality, better value.",
    },
    {
      title: "Agile, Sprint-Based Delivery",
      desc: "2-week sprint cycles, Friday demos, explicit client sign-off before every new sprint. Complete transparency — you see working software, not status reports.",
    },
    {
      title: "NDA + D-U-N-S Verified",
      desc: "Mutual NDAs before day one. D-U-N-S registered (No. 771974280) for enterprise procurement. Individual IP assignments for every engineer on your project.",
    },
  ],

  localPresence: {
    headline: "Mohali: The IT Capital of North India",
    paragraphs: [
      "Mohali (officially SAS Nagar) sits adjacent to Chandigarh and has emerged as the primary IT and technology destination in the Chandigarh tricity region. Its IT parks — STPI Mohali, the IT Park in Phase 8B, DLF IT Park, and the ambitious IT City development — have attracted major technology companies and created a robust engineering workforce.",
      "The Software Technology Parks of India (STPI) Mohali facility specifically positions the city as India's government-recognised export-oriented software destination, providing high-speed internet infrastructure, customs clearance, and tax benefits for export-focused IT companies.",
      "What makes Mohali particularly valuable for offshore development is its engineering talent density combined with a lower cost structure than India's more congested tech metros. Chandigarh University — one of India's largest private universities — produces thousands of engineering graduates annually, many of whom choose to stay in the tricity region rather than migrating to Bangalore or Pune.",
      "Infonza leverages this talent ecosystem to deliver senior engineering quality to global clients at a cost point that Bangalore or Delhi NCR teams can no longer match.",
    ],
    highlights: [
      "STPI Mohali: government-backed IT export hub with world-class infrastructure",
      "DLF IT Park and Phase 8B IT Park: established enterprise IT locations",
      "Chandigarh University: North India's largest private engineering institution",
      "Lower operational costs than Bangalore, Pune, Hyderabad, or Delhi NCR",
      "Direct connectivity to Delhi via NH-44 and Chandigarh International Airport",
      "Punjab government's IT policy offers incentives for export-oriented software companies",
    ],
  },

  midCtaHeadline: "Build Your Offshore Engineering Team in Mohali",

  caseStudy: {
    tag: "Construction · ERP · Project Management",
    client: "Mid-size Construction Company",
    title: "From bid to invoice — all in one ERP system",
    desc: "A growing construction firm was managing 15+ simultaneous projects across Excel files and WhatsApp groups. We built a full construction ERP covering bid management, project tracking, field worker mobile view, and one-click invoice generation. The invoicing cycle dropped from 28 days to 4 days.",
    link: "/case-studies/readybuild",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "Software Dev Company Chandigarh", href: "/software-development-company-chandigarh" },
    { label: "Software Dev Company Punjab", href: "/software-development-company-punjab" },
    { label: "AI Development India", href: "/ai-development-company-india" },
    { label: "Staff Augmentation India", href: "/staff-augmentation-company-india" },
    { label: "Hire React Developers", href: "/hire-react-developers-india" },
    { label: "ERP Development", href: "/erp-development" },
    { label: "SaaS Development", href: "/saas-development" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
  ],

  bookingProps: {
    heading: "Partner with Mohali's Best Engineering Team",
    subheading:
      "30-minute discovery call. We assess your requirements, answer technical questions, and give you an honest build plan.",
  },
};

export default function ITCompanyMohaliPage() {
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
