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
    q: "What IT services does Infonza deliver in Bangalore?",
    a: "From Bangalore, we deliver enterprise AI development (GPT-4, RAG, LLM fine-tuning), custom ERP systems for manufacturing and logistics, multi-tenant B2B SaaS products, IT staff augmentation across React, Node.js, Python, Go, and DevOps, insurance software development, and document management systems. All services are available to US, UK, and global clients with US timezone overlap.",
  },
  {
    q: "Why is Bangalore India's premier IT destination for global enterprises?",
    a: "Bangalore is India's Silicon Valley — host to the country's largest concentration of technology companies, engineering talent, and startup ecosystem. IISC Bangalore, IIT Bangalore alumni networks, and major tech campuses (Whitefield, Electronic City, Koramangala, HSR Layout) create a deep senior engineering talent pool across AI, backend, and cloud disciplines. The city produces more AI and ML engineers per capita than anywhere else in India.",
  },
  {
    q: "How does Infonza communicate with US clients from Bangalore?",
    a: "We maintain daily EST/PST overlap (9am–2pm) from our Bangalore team. Slack-first communication with same-day response times. Sprint reviews every Friday with client sign-off before the next sprint begins. All technical discussions happen in English — no language gap in either direction. GitHub, Jira, and Confluence as standard project tooling.",
  },
  {
    q: "How quickly can Infonza place a developer from Bangalore?",
    a: "For staff augmentation, typical placement is 48–72 hours from brief to shortlist. We provide 2–3 pre-vetted senior candidates within 24 hours. Our Bangalore team covers React, Next.js, Node.js, Python, Java, Go, AI/ML, DevOps (Kubernetes, Terraform), and QA automation engineering.",
  },
  {
    q: "Is Infonza's Bangalore team capable of enterprise AI development?",
    a: "Yes. Our Bangalore AI engineers work with the current production AI stack: GPT-4o, Claude 3.5, LangChain, LlamaIndex, Pinecone, pgvector, AWS Bedrock, and Google Vertex AI. We've shipped RAG systems for document intelligence, LLM-powered workflow automation, and AI chatbots for enterprise clients. Not academic projects — production systems with real users.",
  },
  {
    q: "What makes Infonza different from the hundreds of IT companies in Bangalore?",
    a: "Three things: (1) We only hire senior engineers — 5+ years of production experience, 4-stage technical screening. (2) We operate with delivery transparency — 2-week sprints, working demos every Friday, explicit client sign-off before each sprint. (3) We specialise in enterprise complexity — AI, ERP, SaaS — not commodity web apps. 94% client retention rate backs the claim.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "IT Company Bangalore", url: "/it-company-bangalore" },
];

const localBusinessSchema = buildLocalBusinessSchema({
  description:
    "Trusted IT company in Bangalore delivering enterprise AI development, ERP systems, SaaS products, and offshore engineering for global businesses.",
  url: "/it-company-bangalore",
  location: "bangalore",
  serviceType: "IT Services",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "IT Company · Bangalore, Karnataka, India",
  headline: "IT Company",
  headlineSub: "in Bangalore",
  subheadline:
    "Enterprise AI, SaaS, ERP, and offshore engineering from India's Silicon Valley — Bangalore's deepest senior engineering talent.",
  description:
    "Infonza is a trusted IT company in Bangalore delivering production-grade AI development, custom ERP systems, B2B SaaS products, and dedicated offshore engineering teams to US and global enterprises. Senior engineers from Bangalore's top technology talent pool, operating with enterprise delivery standards at 60–70% lower cost than US teams.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "Bangalore's Deepest Senior Engineering Talent",
      desc: "IISC Bangalore, IIT alumni, and a decade of experience in Google, Microsoft, Amazon, and Flipkart engineering hubs creates Bangalore's unique senior talent density. We hire the top 8% — engineers who've shipped production systems at scale.",
    },
    {
      title: "India's Premier AI Engineering Hub",
      desc: "Bangalore has India's highest concentration of AI, ML, and data science engineers. Major AI research labs, startup ecosystems (Koramangala, HSR Layout), and deep cloud engineering expertise make it the natural centre for enterprise AI development.",
    },
    {
      title: "Full-Stack Enterprise Engineering",
      desc: "React, Next.js, Node.js, Python, Java, Go, AWS, GCP, Azure, AI/ML, Kubernetes. Bangalore-specific strength in cloud-native architecture, microservices, and distributed systems design.",
    },
    {
      title: "US Timezone Overlap — Every Day",
      desc: "Daily EST/PST overlap from 9am–2pm. Morning standups, sprint demos, and architecture reviews on your schedule. Slack + GitHub + Jira as default communication and delivery infrastructure.",
    },
    {
      title: "NDA + D-U-N-S Verified",
      desc: "Mutual NDA before any technical discussion. D-U-N-S registered (No. 771974280) for enterprise procurement verification. Individual IP assignment agreements for every engineer on your project.",
    },
    {
      title: "60–70% Cost Advantage",
      desc: "Senior Bangalore engineers at $45–$80/hr vs $150–$200/hr for US equivalents. Bangalore's top engineering talent is still dramatically cheaper than US hiring — with the same cloud platforms, same frameworks, same delivery quality.",
    },
  ],

  localPresence: {
    headline: "Bangalore: India's Silicon Valley and Global AI Capital",
    paragraphs: [
      "Bangalore (officially Bengaluru) has been India's technology capital for over three decades. The city hosts the Indian operations of Google, Microsoft, Amazon, IBM, Infosys, Wipro, TCS, Accenture, and hundreds of high-growth startups. Electronic City, Whitefield, Koramangala, and HSR Layout have evolved into distinct technology districts, each with a dense concentration of engineering talent.",
      "What makes Bangalore unique in the global engineering landscape is its combination of research depth and commercial scale. IISC (Indian Institute of Science) is one of Asia's top research institutions in computer science and AI. The IIT alumni network, combined with spillover from major tech companies' Bangalore campuses, creates a senior engineering talent pool with both academic rigor and production engineering experience.",
      "Bangalore is specifically where India's AI engineering expertise concentrates. The city's proximity to major AI research labs, its ecosystem of AI startups, and the presence of AWS Bedrock, Google Vertex AI, and Microsoft Azure AI teams with Bangalore engineering hubs means the city's engineers work directly with the latest AI platforms and deployment patterns.",
      "For US and UK enterprises, engaging Bangalore-based engineers through Infonza provides access to this talent pool with the delivery structure, IP protection, and communication infrastructure that enterprise engagements require.",
    ],
    highlights: [
      "Electronic City and Whitefield: India's largest enterprise IT parks",
      "IISC Bangalore: Asia's top computer science and AI research institution",
      "Google, Microsoft, Amazon, and Anthropic all have major Bangalore engineering hubs",
      "Koramangala and HSR Layout: India's most active AI startup ecosystems",
      "Deepest pool of cloud-native, microservices, and AI/ML engineers in India",
      "Bangalore International Airport: direct flights to all major US and UK hubs",
    ],
  },

  midCtaHeadline: "Partner with Bangalore's Best Engineering Team",

  caseStudy: {
    tag: "AI · SaaS · Document Intelligence",
    client: "US Legal Technology Platform",
    title: "AI contract review from 4 hours to 12 minutes",
    desc: "A US legal tech company needed to extract structured data from unstructured contract documents — a process taking their team 4+ hours per contract. We built a RAG-powered document intelligence system using GPT-4 and a custom-trained extraction pipeline. Processing time dropped to 12 minutes per contract, handling 150+ daily with 97% accuracy.",
    link: "/case-studies/glovebox",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "Software Development India", href: "/software-development-company-india" },
    { label: "AI Development India", href: "/ai-development-company-india" },
    { label: "IT Company Chennai", href: "/it-company-chennai" },
    { label: "IT Company Chandigarh", href: "/software-development-company-chandigarh" },
    { label: "IT Company Mohali", href: "/it-company-mohali" },
    { label: "ERP Development India", href: "/erp-development-company-india" },
    { label: "SaaS Development India", href: "/saas-development-company-india" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
  ],

  bookingProps: {
    heading: "Build with Bangalore's Best Engineers",
    subheading:
      "30-minute discovery call. Senior engineers assess your project, recommend an architecture, and give you an honest timeline.",
  },
};

export default function ITCompanyBangalorePage() {
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
