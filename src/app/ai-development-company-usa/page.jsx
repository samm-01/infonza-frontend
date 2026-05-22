"use client";

import Link from "next/link";
import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { BookingSection } from "../components/booking-cta";

const BASE_URL = "https://infonza.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Development Services",
  description:
    "Enterprise AI development services for US businesses — GPT-4 integrations, RAG systems, LLM fine-tuning, AI chatbots, and workflow automation.",
  url: `${BASE_URL}/ai-development-company-usa`,
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: BASE_URL,
    logo: `${BASE_URL}/infonza-logo.jpg`,
  },
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: "AI Software Development",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does an AI development project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on complexity. A production AI chatbot with RAG integration typically takes 6–10 weeks. A full LLM fine-tuning project with custom dataset preparation takes 12–16 weeks. We deliver working MVPs within the first sprint so you can validate early.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with US companies from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All our AI engineers work in US-compatible timezones (EST/PST overlap: 9am–2pm). We sign NDAs before any project begins, use US-based communication tools, and deliver within agreed sprint cadences.",
      },
    },
    {
      "@type": "Question",
      name: "What AI technologies do you specialise in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialise in GPT-4 and OpenAI API integrations, LangChain and LlamaIndex for RAG systems, Hugging Face and custom LLM fine-tuning, vector databases (Pinecone, Weaviate, Chroma), and AI workflow automation using n8n and custom pipelines.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you build AI solutions for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have deep experience in insurance (AI underwriting, claims processing), logistics (route optimisation, demand forecasting), SaaS (AI feature integrations), healthcare (document processing, clinical NLP), and e-commerce (personalisation, recommendation engines).",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI projects are scoped per engagement. A standalone AI chatbot integration starts at $15,000–$30,000. A full RAG system with custom knowledge base and admin dashboard starts at $40,000–$70,000. LLM fine-tuning projects are priced based on dataset size and compute requirements. Book a free strategy call for an accurate estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate AI into an existing product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — this is one of our most common engagements. We audit your existing codebase, identify integration points, and build AI features that plug into your current architecture. We've added AI layers to CRMs, ERPs, insurance portals, and SaaS dashboards.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "AI Development Company USA", item: `${BASE_URL}/ai-development-company-usa` },
  ],
};

const SERVICES = [
  {
    title: "GPT-4 & OpenAI Integration",
    description:
      "Production-ready OpenAI API integrations with rate limiting, caching, fallback handling, and cost controls. Built to run at scale, not just in demos.",
    link: "/ai-development/openai-integration-services",
  },
  {
    title: "RAG System Development",
    description:
      "Retrieval-Augmented Generation systems that ground your AI responses in your proprietary data — documents, databases, APIs. Accurate, hallucination-resistant, and auditable.",
    link: "/ai-development/rag-development-services",
  },
  {
    title: "LLM Fine-Tuning",
    description:
      "Custom LLM fine-tuning on your domain data — insurance policies, legal documents, technical manuals. Models that speak your industry's language with precision.",
    link: "/ai-development/llm-development-company",
  },
  {
    title: "AI Chatbot Development",
    description:
      "Multi-channel AI chatbots with human handoff, conversation memory, and 70%+ ticket deflection. Deployed to your website, Slack, MS Teams, or custom interfaces.",
    link: "/ai-development/ai-chatbot-development",
  },
  {
    title: "Generative AI Applications",
    description:
      "Custom GenAI applications — content generation, document drafting, image synthesis, and code assistants. 10× throughput at 60% lower cost than manual processes.",
    link: "/ai-development/generative-ai-development",
  },
  {
    title: "AI Workflow Automation",
    description:
      "Intelligent process automation — document classification, data extraction, email triage, and approval workflows. 80% time reduction on repetitive back-office processes.",
    link: "/ai-development/ai-workflow-automation",
  },
];

const STATS = [
  { value: "150+", label: "AI Projects Delivered" },
  { value: "12+", label: "Years Engineering Experience" },
  { value: "40+", label: "Dedicated AI Engineers" },
  { value: "94%", label: "Client Retention Rate" },
];

const INDUSTRIES = [
  "Insurance & InsurTech",
  "Logistics & Supply Chain",
  "Healthcare & MedTech",
  "Financial Services",
  "SaaS & Enterprise Software",
  "Legal & Compliance",
  "E-commerce & Retail",
  "Construction & Real Estate",
];

const FAQS = [
  {
    q: "How long does an AI development project take?",
    a: "Timelines depend on complexity. A production AI chatbot with RAG integration typically takes 6–10 weeks. A full LLM fine-tuning project takes 12–16 weeks. We deliver working MVPs within the first sprint so you can validate early.",
  },
  {
    q: "Do you work with US companies from India?",
    a: "Yes. Our AI engineers work in US-compatible timezones (EST/PST overlap 9am–2pm). We sign NDAs before any project begins, use US communication tools, and deliver within agreed sprint cadences.",
  },
  {
    q: "What AI technologies do you specialise in?",
    a: "GPT-4 and OpenAI API, LangChain and LlamaIndex for RAG, Hugging Face and custom LLM fine-tuning, vector databases (Pinecone, Weaviate, Chroma), and AI workflow automation.",
  },
  {
    q: "Can you integrate AI into an existing product?",
    a: "Yes — this is one of our most common engagements. We audit your existing codebase, identify integration points, and build AI features that plug into your current architecture.",
  },
  {
    q: "How much does AI development cost?",
    a: "A standalone AI chatbot integration starts at $15,000–$30,000. A full RAG system starts at $40,000–$70,000. LLM fine-tuning is priced based on dataset size. Book a free call for an accurate estimate.",
  },
  {
    q: "What industries do you build AI for?",
    a: "Insurance, logistics, healthcare, financial services, SaaS, legal, e-commerce, and construction. We have domain-specific training data and workflow knowledge in each.",
  },
];

export default function AIDevCompanyUSAPage() {
  return (
    <>
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="bg-[#0a0a0a] text-white">
        {/* ── Breadcrumb ── */}
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">AI Development Company USA</span>
          </nav>
        </div>

        {/* ── Hero ── */}
        <section className="max-w-7xl mx-auto px-6 pt-8 pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-medium mb-6">
              AI Development Company • Serving US Businesses
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              AI Development Company{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                for US Enterprises
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-3xl">
              Infonza builds production-grade AI applications for US startups and enterprises — GPT-4
              integrations, RAG systems, custom LLMs, AI chatbots, and intelligent workflow automation.
              Offshore pricing. Senior engineering quality. US timezone delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition-all text-sm"
              >
                Book a Free AI Strategy Call
              </Link>
              <Link
                href="/ai-development"
                className="px-8 py-4 border border-white/20 hover:border-teal-400/50 text-white rounded-lg transition-all text-sm"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-y border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Infonza for US Companies ── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why US Companies Choose Infonza for AI Development
            </h2>
            <p className="text-gray-400 text-lg">
              Most offshore AI teams treat AI as a feature add-on. We treat it as a core engineering
              discipline — with production-grade architecture, cost controls, and hallucination mitigation
              built in from the start.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "US Timezone Overlap",
                desc: "EST/PST daily overlap 9am–2pm. Daily standups, Slack-first communication, weekly demos. No timezone black holes.",
              },
              {
                title: "Production-Ready Architecture",
                desc: "Every AI system we build includes rate limiting, retry logic, cost controls, and monitoring. Not just a proof of concept.",
              },
              {
                title: "Domain Expertise",
                desc: "Deep experience in insurance, logistics, healthcare, and SaaS AI use cases — not generic chatbots.",
              },
              {
                title: "NDA from Day One",
                desc: "We sign mutual NDAs before the first technical conversation. Your IP, your data, your models stay yours.",
              },
              {
                title: "Senior AI Engineers Only",
                desc: "Every AI project is staffed with engineers who have shipped production AI systems — not junior developers learning on your project.",
              },
              {
                title: "Fixed Scope or T&M",
                desc: "We offer both fixed-price engagements for defined scope and time-and-materials for exploratory projects. No surprise invoices.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-teal-500/30 transition-colors"
              >
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── AI Services ── */}
        <section className="bg-white/5 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold mb-4">AI Development Services for US Businesses</h2>
              <p className="text-gray-400 text-lg">
                End-to-end AI engineering — from architecture and model selection to production deployment
                and ongoing optimisation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map(({ title, description, link }) => (
                <Link
                  key={title}
                  href={link}
                  className="p-6 rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-teal-500/40 transition-all group"
                >
                  <h3 className="font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{description}</p>
                  <span className="text-teal-400 text-sm font-medium">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 text-lg">
              We apply domain-specific AI solutions — not generic models — to industries where accuracy
              and compliance are non-negotiable.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry}
                className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300 text-center"
              >
                {industry}
              </div>
            ))}
          </div>
        </section>

        {/* ── AI Technology Stack ── */}
        <section className="bg-white/5 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold mb-4">AI Technology Stack</h2>
              <p className="text-gray-400 text-lg">
                We work with the entire modern AI engineering stack — models, frameworks, infrastructure,
                and monitoring.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: "LLM Models",
                  items: ["GPT-4 / GPT-4o", "Claude 3.5 Sonnet", "Llama 3.1", "Mistral", "Gemini Pro"],
                },
                {
                  category: "Frameworks",
                  items: ["LangChain", "LlamaIndex", "Haystack", "LangGraph", "CrewAI"],
                },
                {
                  category: "Vector Databases",
                  items: ["Pinecone", "Weaviate", "Chroma", "pgvector", "Qdrant"],
                },
                {
                  category: "Infrastructure",
                  items: ["AWS Bedrock", "Azure OpenAI", "GCP Vertex AI", "Hugging Face", "Replicate"],
                },
              ].map(({ category, items }) => (
                <div
                  key={category}
                  className="p-5 rounded-xl border border-white/10 bg-[#0a0a0a]"
                >
                  <h3 className="text-sm font-semibold text-teal-400 mb-3 uppercase tracking-wide">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-gray-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case Study Callout ── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">
                Case Study — Insurance AI
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Insurance onboarding reduced from 3 hours to 45 minutes
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A US insurance agency was managing client onboarding across spreadsheets, carrier portals,
                and email. We built a custom AI-powered CRM with carrier API integration that automated
                quote generation, document processing, and client communication — cutting onboarding time
                by 75%.
              </p>
              <Link
                href="/case-studies/glovebox"
                className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors text-sm"
              >
                Read the full case study →
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="bg-white/5 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div
                  key={q}
                  className="p-6 rounded-xl border border-white/10 bg-[#0a0a0a]"
                >
                  <h3 className="font-semibold text-white mb-3">{q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-xl font-semibold mb-6 text-gray-300">Explore Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Insurance Software Development", href: "/insurance-software-development" },
              { label: "ERP Development", href: "/erp-development" },
              { label: "SaaS Development", href: "/saas-development" },
              { label: "IT Staff Augmentation", href: "/staff-augmentation" },
              { label: "Document Management Systems", href: "/document-management-system" },
              { label: "Hire AI Engineers", href: "/staff-augmentation/hire-ai-engineers" },
              { label: "RAG Development", href: "/ai-development/rag-development-services" },
              { label: "LLM Development", href: "/ai-development/llm-development-company" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-400 hover:border-teal-400/30 hover:text-teal-400 transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <BookingSection />
      </main>

      <Footer />
    </>
  );
}
