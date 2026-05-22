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
    q: "What AI development services does Infonza provide from India?",
    a: "We deliver the full spectrum of enterprise AI engineering: GPT-4 and Claude integrations, RAG (Retrieval-Augmented Generation) systems, LLM fine-tuning on proprietary datasets, AI chatbots and virtual agents, intelligent document processing, computer vision pipelines, and end-to-end ML model deployment. All services are delivered to US, UK, and global clients by our senior AI engineers based in India.",
  },
  {
    q: "How does India-based AI development compare to US-based teams in cost?",
    a: "Senior AI engineers in India cost $45–$85/hr compared to $180–$250/hr for equivalent US talent. For a 3-engineer AI team over 6 months, that's a saving of $300,000–$500,000 without sacrificing technical depth. India's AI engineering talent pool has trained on the same LLMs, vector databases, and cloud infrastructure — the output is indistinguishable.",
  },
  {
    q: "How does Infonza ensure AI quality and security from India?",
    a: "Every project begins with a mutual NDA and individual IP assignments for each engineer. Our AI workflows follow OWASP LLM security guidelines — prompt injection hardening, output validation, and PII scrubbing. Code is reviewed in GitHub with mandatory PR approvals. We sign Business Associate Agreements (BAAs) for healthcare AI projects and follow HIPAA-compliant data handling practices.",
  },
  {
    q: "What LLMs and AI frameworks does your India team work with?",
    a: "Our engineers are certified across the current AI stack: OpenAI GPT-4o and o1, Anthropic Claude 3.5, Mistral, Llama 3, and Gemini. Frameworks include LangChain, LlamaIndex, Haystack, Hugging Face Transformers, and CrewAI. For vector search: Pinecone, Weaviate, Qdrant, and pgvector. Cloud platforms: AWS Bedrock, Google Vertex AI, Azure OpenAI Service.",
  },
  {
    q: "How long does an AI development project take from India?",
    a: "A production-ready AI chatbot or RAG system typically takes 6–10 weeks. LLM fine-tuning on proprietary data takes 4–8 weeks depending on dataset preparation. Full AI feature integration into an existing product takes 8–16 weeks. We run in 2-week sprints with working demos every Friday — you see progress continuously, not at the end.",
  },
  {
    q: "Does Infonza have experience with AI for regulated industries?",
    a: "Yes. We've built AI systems for US insurance carriers (HIPAA-adjacent data flows), healthcare document intelligence (HIPAA BAA available), and financial services (SOC 2 compliant infrastructure). Every AI output pipeline includes confidence scoring, human-in-the-loop override capability, and full audit logging — requirements for AI deployment in regulated sectors.",
  },
];

const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "AI Development Company India", url: "/ai-development-company-india" },
];

const professionalServiceSchema = buildProfessionalServiceSchema({
  description:
    "Trusted AI development company in India delivering GPT-4 integrations, RAG systems, LLM fine-tuning, AI chatbots, and workflow automation for global enterprises.",
  url: "/ai-development-company-india",
  serviceType: "AI Development Services",
});

const faqSchema = buildFAQSchema(FAQS);
const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs);

const config = {
  breadcrumbs,
  badge: "AI Development Company · India",
  headline: "AI Development Company",
  headlineSub: "in India",
  subheadline:
    "GPT-4 integrations, RAG systems, LLM fine-tuning, and AI workflow automation — built by senior Indian AI engineers for global enterprises.",
  description:
    "Infonza is a trusted AI development company in India delivering production-grade generative AI systems to US, UK, and global enterprises. Our senior AI engineers build GPT-4 integrations, RAG pipelines, LLM fine-tuning workflows, intelligent document processing, and full-stack AI applications at 60–70% lower cost than US teams.",

  stats: GLOBAL_STATS,

  whyPoints: [
    {
      title: "Senior Generative AI Engineers",
      desc: "Our India-based AI team works with the current production stack: GPT-4o, Claude 3.5, Llama 3, LangChain, LlamaIndex, Pinecone, pgvector, AWS Bedrock, and Google Vertex AI. Not academic — production-grade engineers who've shipped AI features to real users.",
    },
    {
      title: "60–70% Cost Advantage Over US AI Teams",
      desc: "Senior AI engineers at $45–$85/hr versus $180–$250/hr for US equivalents. A 3-person AI team for 6 months: $270,000–$510,000 in savings. India's engineering talent was trained on the same models and infrastructure — the gap is purely cost.",
    },
    {
      title: "Full AI Development Stack",
      desc: "LLM integration, RAG architecture, vector database design, fine-tuning, prompt engineering, model evaluation, deployment, and monitoring. We handle the entire AI lifecycle from prototype to production, including MLOps and observability tooling.",
    },
    {
      title: "US Timezone Overlap — Every Day",
      desc: "Daily EST/PST overlap 9am–2pm. AI sprint reviews every Friday. You work in Slack, GitHub, and Jira — same tools as your internal teams. No communication lag, no asynchronous guesswork.",
    },
    {
      title: "AI Security and IP Protection",
      desc: "Mutual NDA before any technical discussion. Individual IP assignments for every engineer. OWASP LLM security guidelines followed on every project. Prompt injection hardening, output validation, and PII handling built into every AI pipeline.",
    },
    {
      title: "D-U-N-S Registered for Enterprise Procurement",
      desc: "Infonza Innovations is D-U-N-S registered (No. 771974280) — verified business identity for enterprise vendor onboarding, government procurement, and compliance-heavy procurement processes.",
    },
  ],

  localPresence: {
    headline: "Why India Is the World's AI Engineering Powerhouse",
    paragraphs: [
      "India produces over 1.5 million engineering graduates annually, with a rapidly growing cohort specialising in machine learning, data science, and AI systems engineering. The country's deep pipeline of mathematics and computer science talent — fed by IITs, NITs, and leading private universities — has made India the preferred offshore AI development destination for US and UK enterprises.",
      "Major AI and cloud providers have established India as a core engineering hub. Google, Microsoft, OpenAI, Anthropic, and Amazon all run significant AI engineering operations in India. The result: Indian AI engineers work with the same models, platforms, and deployment patterns as their US counterparts, with training and certification from the same providers.",
      "India's AI talent advantage isn't theoretical. The engineers who build AI systems for Fortune 500 companies, Y Combinator startups, and government agencies are increasingly India-based. The difference is that those engineers cost $45–$85/hr in India versus $180–$250/hr in the US — for the same LLM integration, the same RAG architecture, the same production-grade deployment.",
      "Infonza specifically hires from the top 8% of this talent pool — engineers who have shipped AI features to production, understand prompt engineering at an architectural level, and know how to build reliable, observable, and secure AI systems for regulated industries.",
    ],
    highlights: [
      "India produces 1.5M+ engineering graduates annually — largest pool globally",
      "Top IIT and NIT graduates specialising in ML, NLP, and computer vision",
      "Google, Microsoft, and Anthropic all run major AI engineering hubs in India",
      "Indian AI engineers certified on AWS, GCP, and Azure AI platforms",
      "Strong AI research output from IIT Delhi, IIT Bombay, IISC Bangalore",
      "60–70% cost advantage over equivalent US or UK AI engineering talent",
    ],
  },

  midCtaHeadline: "Build Your AI Product with India's Best Engineers",

  caseStudy: {
    tag: "AI · Document Processing · Insurance",
    client: "US Insurance Carrier",
    title: "AI-powered document extraction cuts processing time by 85%",
    desc: "A US insurance carrier was manually reviewing 2,000+ claim documents per week. We built a RAG-based document intelligence system with GPT-4 that extracted structured data, flagged anomalies, and auto-populated their claims management system. Manual review time dropped from 18 minutes per document to under 3 minutes.",
    link: "/case-studies/glovebox",
  },

  faqs: FAQS,

  relatedLinks: [
    { label: "AI Development Services", href: "/ai-development" },
    { label: "GPT-4 Integration", href: "/ai-development/gpt-4-integration" },
    { label: "RAG Development", href: "/ai-development/rag-development" },
    { label: "LLM Fine-Tuning", href: "/ai-development/llm-fine-tuning" },
    { label: "AI Chatbot Development", href: "/ai-development/ai-chatbot-development" },
    { label: "Staff Augmentation India", href: "/staff-augmentation-company-india" },
    { label: "Offshore Development India", href: "/offshore-development-company-india" },
    { label: "Software Development India", href: "/software-development-company-india" },
    { label: "IT Company Chandigarh", href: "/software-development-company-chandigarh" },
  ],

  bookingProps: {
    heading: "Talk to Our AI Engineering Team",
    subheading:
      "30-minute technical discovery call. We assess your AI use case, recommend an architecture, and give you an honest build timeline — no sales fluff.",
  },
};

export default function AIDevCompanyIndiaPage() {
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
