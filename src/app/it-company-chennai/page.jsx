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
    q: "What IT services does Infonza provide in Chennai?",
    a: "From Chennai, we deliver enterprise AI development (GPT-4, RAG, LLM workflows), custom ERP systems for manufacturing and logistics, multi-tenant SaaS products, IT staff augmentation across React, Node.js, Python, Java, and DevOps, insurance software development, and enterprise document management. All services available to US, UK, and global clients with US timezone overlap.",
  },
  {
    q: "Why is Chennai a major IT hub for offshore development?",
    a: "Chennai is India's fourth-largest technology hub — home to IT parks across OMR (Old Mahabalipuram Road), Sholinganallur, and Perungudi. The city has a deep engineering talent pipeline from IIT Madras, Anna University, and Vellore Institute of Technology. Chennai's technology tradition is specifically strong in enterprise systems, ERP implementations, and manufacturing software — making it ideal for B2B and enterprise engineering work.",
  },
  {
    q: "How does Infonza handle communication with US clients from Chennai?",
    a: "Daily EST/PST overlap from 9am–2pm from our Chennai team. Slack as the primary communication channel — same-day responses during US business hours. Sprint reviews every Friday with working demos. GitHub, Jira, and Confluence as standard delivery tooling. Our engineers communicate in clear business English — no translation layer.",
  },
  {
    q: "Does Infonza have domain expertise for manufacturing companies?",
    a: "Yes. Chennai's industrial history — automotive (Ford, Hyundai, BMW manufacturing plants), hardware manufacturing, and logistics operations — has produced engineering talent with deep manufacturing ERP domain knowledge. We've built production scheduling, BOM management, shop floor tracking, and warehouse management systems for global manufacturing clients.",
  },
  {
    q: "What is the cost advantage of hiring from Chennai?",
    a: "Senior engineers in Chennai cost $40–$75/hr versus $150–$200/hr for equivalent US talent — a 60–70% cost advantage. Chennai specifically offers slightly lower operational costs than Bangalore or Mumbai while maintaining the same engineering calibre. For a 5-engineer team over 12 months, that's $600,000+ in savings versus US hiring.",
  },
  {
    q: "How does IP protection work for offshore engagements from Chennai?",
    a: "Every engagement starts with a mutual NDA before any technical discussion. Individual IP assignment agreements cover every engineer on your project. We are D-U-N-S registered (No. 771974280) for enterprise procurement verification. India's IT Act 2000 and strong copyright protection under the Indian Copyright Act provide legal backing for IP ownership agreements.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "IT Company Chennai", url: "/it-company-chennai" },
];

const localBusinessSchema = buildLocalBusinessSchema({
  description:
    "Trusted IT company in Chennai delivering enterprise AI, custom software, SaaS products, and offshore engineering for global businesses.",
  url: "/it-company-chennai",
  location: "chennai",
  serviceType: "IT Services",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "IT Company · Chennai, Tamil Nadu, India",
  headline: "IT Company",
  headlineSub: "in Chennai",
  subheadline:
    "Enterprise AI, SaaS, ERP, and offshore engineering from Chennai — South India's most established IT and manufacturing technology hub.",
  description:
    "Infonza is a trusted IT company in Chennai delivering production-grade AI development, custom software, multi-tenant SaaS products, and dedicated offshore engineering teams to US and global enterprises. Chennai's deep engineering talent pool — anchored by IIT Madras, Anna University, and OMR's IT corridor — at 60–70% lower cost than US teams.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "Chennai's World-Class Engineering Talent",
      desc: "IIT Madras, Anna University, and VIT produce thousands of engineering graduates annually. Chennai's technology talent is specifically strong in enterprise systems, ERP, backend engineering, and manufacturing software — disciplines that require both technical depth and domain knowledge.",
    },
    {
      title: "Manufacturing and Logistics Domain Expertise",
      desc: "Chennai's industrial heritage (automotive, hardware, logistics) creates engineering talent with real domain knowledge. Our Chennai engineers have built production scheduling, BOM management, warehouse systems, and supply chain software for global manufacturing clients.",
    },
    {
      title: "Full-Stack Enterprise Engineering",
      desc: "React, Next.js, Node.js, Python, Java (Spring Boot), Go, AWS, GCP, Azure, AI/ML, and DevOps. Chennai has particular depth in Java enterprise engineering — a significant advantage for ERP and backend-heavy projects.",
    },
    {
      title: "OMR IT Corridor Infrastructure",
      desc: "Old Mahabalipuram Road (OMR) houses Chennai's major IT parks — TCS, Infosys, Wipro, and hundreds of product companies. World-class connectivity, power reliability, and engineering infrastructure for global delivery operations.",
    },
    {
      title: "NDA + D-U-N-S Verified",
      desc: "Mutual NDA before day one. D-U-N-S registered (No. 771974280) for enterprise procurement. Individual IP assignments for every engineer. Your codebase, architecture, and business logic remain fully owned by you.",
    },
    {
      title: "Agile Sprint-Based Delivery",
      desc: "2-week sprint cycles with working demos every Friday. Explicit client sign-off before each new sprint. Complete transparency — you see working software at every stage, not status presentations.",
    },
  ],

  localPresence: {
    headline: "Chennai: India's Enterprise IT and Manufacturing Technology Capital",
    paragraphs: [
      "Chennai occupies a distinctive position in India's technology landscape. While Bangalore dominates the startup and AI ecosystem, Chennai has a 30-year heritage in enterprise software delivery — ERP implementations, banking systems, insurance technology, and manufacturing software. This enterprise tradition creates an engineering culture specifically suited to the complex, high-stakes systems that global businesses depend on.",
      "The Old Mahabalipuram Road (OMR) corridor — stretching from Sholinganallur to Sholinganalur — is one of Asia's largest IT corridors, hosting the Chennai operations of TCS, Infosys, Wipro, Cognizant, and hundreds of product companies. The infrastructure is world-class: redundant power, high-speed connectivity, and co-location facilities designed for global delivery.",
      "IIT Madras is consistently ranked among the top 5 engineering institutions globally for computer science and AI research. Its graduates and spinout companies anchor Chennai's technical talent pool. Anna University's engineering campus and affiliated institutions produce tens of thousands of engineering graduates annually who enter Chennai's technology sector.",
      "Chennai's specific strength for enterprise software development is its Java and backend engineering depth — a legacy of the city's 30 years in enterprise systems. This translates directly to ERP systems, banking software, and complex backend architectures where the engineering complexity is in data modelling and business logic, not UI polish.",
    ],
    highlights: [
      "OMR IT Corridor: one of Asia's largest IT infrastructure corridors",
      "IIT Madras: top 5 globally for computer science and AI research",
      "Anna University: produces 80,000+ engineering graduates annually",
      "30-year tradition in enterprise software, ERP, and banking systems",
      "Deep Java, backend, and database engineering talent pool",
      "Chennai International Airport: direct connectivity to US and UK hubs",
    ],
  },

  midCtaHeadline: "Build Your Enterprise Software with Chennai's Best Engineers",

  caseStudy: {
    tag: "Manufacturing · ERP · Supply Chain",
    client: "US Manufacturing Company",
    title: "Real-time production tracking across 8 facilities",
    desc: "A US manufacturing company was running production scheduling across 8 facilities in disconnected Excel sheets with 48-hour reporting lag. We built a custom manufacturing ERP with real-time shop floor tracking, automated BOM explosions, multi-location inventory, and a live production dashboard for plant managers. Reporting lag dropped to 4 minutes.",
    link: "/case-studies/readybuild",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "Software Development India", href: "/software-development-company-india" },
    { label: "IT Company Bangalore", href: "/it-company-bangalore" },
    { label: "AI Development India", href: "/ai-development-company-india" },
    { label: "ERP Development India", href: "/erp-development-company-india" },
    { label: "SaaS Development India", href: "/saas-development-company-india" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
    { label: "IT Company Chandigarh", href: "/software-development-company-chandigarh" },
    { label: "IT Company Mohali", href: "/it-company-mohali" },
  ],

  bookingProps: {
    heading: "Partner with Chennai's Best Engineering Team",
    subheading:
      "30-minute discovery call. We assess your requirements, answer technical questions, and give you an honest project plan.",
  },
};

export default function ITCompanyChennaiPage() {
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
