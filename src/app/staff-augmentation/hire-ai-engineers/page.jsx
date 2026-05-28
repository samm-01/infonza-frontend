"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiClock,
  HiStar,
  HiCodeBracket,
  HiShieldCheck,
  HiBolt,
  HiGlobeAlt,
  HiChevronDown,
  HiCurrencyDollar,
  HiCpuChip,
  HiSparkles,
  HiCircleStack,
  HiCloud,
} from "react-icons/hi2";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  BookingSection,
  BookingBanner,
  FloatingBookingButton,
  BOOKING_URL,
} from "../../components/booking-cta";
import {
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
} from "../_utils/schema-builders";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════════ */

const SKILLS = [
  "Python", "PyTorch", "TensorFlow", "LangChain",
  "OpenAI API", "Hugging Face", "RAG Pipelines", "Pinecone",
  "Weaviate", "Chroma", "MLOps", "AWS SageMaker",
  "FastAPI", "LlamaIndex", "Vertex AI", "ONNX",
];

const RESULTS = [
  { value: "10+", label: "Deployed LLM Systems", icon: HiCpuChip },
  { value: "<200ms", label: "Inference Latency", icon: HiBolt },
  { value: "48h", label: "Placement Speed", icon: HiClock },
  { value: "4.9/5", label: "Client Satisfaction", icon: HiStar },
];

const AI_CAPABILITIES = [
  {
    title: "LLM Application Development",
    desc: "Production LLM systems using OpenAI, Anthropic, and open-source models — with prompt engineering, structured output, function calling, and cost optimization baked in.",
    icon: HiSparkles,
  },
  {
    title: "RAG Pipeline Engineering",
    desc: "Retrieval-Augmented Generation pipelines with document chunking, embedding strategies, vector store selection (Pinecone/Weaviate/Chroma), and hybrid search for high-accuracy retrieval.",
    icon: HiCircleStack,
  },
  {
    title: "AI Workflow Automation",
    desc: "Multi-agent orchestration with LangChain, LangGraph, and CrewAI — autonomous agents that handle complex, multi-step business processes without human intervention.",
    icon: HiBolt,
  },
  {
    title: "Custom Model Training & Fine-tuning",
    desc: "LoRA/QLoRA fine-tuning of foundation models for domain-specific tasks — legal, medical, finance, and custom enterprise data. Evaluation frameworks included.",
    icon: HiCpuChip,
  },
  {
    title: "MLOps & Model Infrastructure",
    desc: "End-to-end ML pipelines: data versioning (DVC), experiment tracking (MLflow/W&B), model serving, A/B testing, and drift monitoring with automated retraining.",
    icon: HiCloud,
  },
  {
    title: "AI API Integration",
    desc: "Clean, production-grade integrations with OpenAI, Anthropic, Cohere, and Replicate — with rate limit handling, retry logic, caching, and token cost management.",
    icon: HiCodeBracket,
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Full-Time",
    hours: "40 hrs/week",
    desc: "A dedicated senior AI engineer embedded in your product team — driving your AI roadmap, building production systems, and attending your sprint ceremonies.",
    features: ["Dedicated to your team only", "Daily progress sync", "Full LLM/ML system ownership", "US timezone overlap"],
    badge: "Most Popular",
    highlight: true,
  },
  {
    title: "Part-Time",
    hours: "20 hrs/week",
    desc: "A senior AI engineer for focused sprints — ideal for adding AI features to an existing product or building a RAG pipeline alongside your engineering team.",
    features: ["Focused sprint blocks", "Weekly architecture review", "Async-first workflow", "Upgradeable to full-time"],
    badge: null,
    highlight: false,
  },
  {
    title: "Project-Based",
    hours: "Scoped AI system",
    desc: "End-to-end delivery of a defined AI system — chatbot, RAG pipeline, recommendation engine, or ML model — with handover documentation and monitoring setup.",
    features: ["Fixed deliverables", "Milestone-based billing", "Model card & documentation", "30-day post-launch support"],
    badge: null,
    highlight: false,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Share Your AI Brief",
    desc: "Describe your AI use case, data environment, model preferences, and production requirements. We'll ask the right technical questions.",
  },
  {
    step: "02",
    title: "Profiles in 24h",
    desc: "We send matched AI engineer profiles within 24 hours — specialists in your specific stack (LLM, computer vision, NLP, MLOps).",
  },
  {
    step: "03",
    title: "Technical Evaluation",
    desc: "All AI candidates pass our system design review covering RAG architecture, model evaluation, and production inference optimization.",
  },
  {
    step: "04",
    title: "Proof of Concept",
    desc: "Start with a defined PoC sprint. Validate the engineer's approach and code quality before committing to production work.",
  },
  {
    step: "05",
    title: "Production Delivery",
    desc: "Engineer ships production-ready AI system — with monitoring, logging, and cost controls. Live within 48 hours of onboarding.",
  },
];

const WHY_INFONZA = [
  {
    icon: HiCpuChip,
    title: "Production AI, Not Notebooks",
    desc: "Our AI engineers have shipped production LLM systems — not just Jupyter notebooks. They understand inference optimization, API cost management, and monitoring at scale.",
  },
  {
    icon: HiShieldCheck,
    title: "Data Security & Privacy",
    desc: "All AI engineers operate under NDA with explicit data processing agreements. We work with clients' PII-sensitive data using privacy-first architecture patterns.",
  },
  {
    icon: HiGlobeAlt,
    title: "US Timezone Overlap",
    desc: "AI engineers aligned to EST morning overlap. Real-time collaboration for architecture reviews and sprint planning — not just async code drops.",
  },
  {
    icon: HiBolt,
    title: "LLM Cost Optimization",
    desc: "Our engineers build AI systems that are cost-effective at scale — using prompt caching, model routing, and retrieval strategies that cut inference costs by 40–60%.",
  },
  {
    icon: HiStar,
    title: "Evaluation-First Culture",
    desc: "Every AI system we build includes a proper evaluation framework — automated evals, human review workflows, and regression testing before any model or prompt change reaches production.",
  },
];

const FAQS = [
  {
    q: "What's the difference between your AI engineers and general software developers who use AI APIs?",
    a: "Our AI engineers have deep ML/NLP backgrounds — they understand model behavior, embedding spaces, chunking strategies, evaluation methodology, and inference optimization. They're not just wrappers around OpenAI. They make architectural decisions about when to use RAG vs. fine-tuning, how to structure prompts for reliability, and how to monitor model drift in production.",
  },
  {
    q: "Can your AI engineers work with our proprietary data without it leaving our environment?",
    a: "Yes. We work with on-premise LLM deployments (Ollama, vLLM), private model hosting on AWS/Azure/GCP, and VPC-isolated cloud environments. All work is covered under a comprehensive NDA with data processing addenda that specify exactly how client data is handled.",
  },
  {
    q: "Do you provide AI engineers who specialize in specific domains like healthcare or finance?",
    a: "Yes. Our AI engineering bench includes specialists in healthcare NLP (clinical notes, ICD coding), financial document processing (earnings reports, regulatory filings), legal AI (contract analysis, due diligence), and e-commerce personalization. When you share your domain, we match a specialist.",
  },
  {
    q: "How do you ensure the AI system will perform reliably in production?",
    a: "Reliability is built in from day one: structured output validation, fallback chains, retry logic, latency budgets, and cost controls. We include evaluation pipelines that test against edge cases before deployment, and monitoring dashboards (Langfuse, Helicone, or custom) that alert on quality degradation.",
  },
  {
    q: "What engagement size works best for an early-stage AI product?",
    a: "For early-stage AI products, we recommend starting with a solo senior AI engineer (full-time) who owns the entire AI system — from data pipeline to production API. Once the core system is proven, we can extend with an MLOps engineer or additional AI developer for expansion work.",
  },
];

const RELATED = [
  {
    title: "Hire DevOps Engineers",
    desc: "Infrastructure engineers to host, scale, and monitor your AI systems in production.",
    href: "/staff-augmentation/hire-devops-engineers",
    icon: HiCloud,
  },
  {
    title: "AI Development Services",
    desc: "End-to-end AI product development — chatbots, RAG systems, and intelligent automation.",
    href: "/ai-development",
    icon: HiSparkles,
  },
  {
    title: "LLM Development Company",
    desc: "Custom LLM application development for enterprise use cases.",
    href: "/ai-development/llm-development-company",
    icon: HiCpuChip,
  },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

/* ── Structured data ──────────────────────────────────────────────────────── */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = buildServiceSchema({
  slug: "hire-ai-engineers",
  techDisplay: "AI Engineers",
  heroSubtitle: "Senior AI engineers — LLM systems, RAG pipelines, MLOps, and production AI deployment — available within 48 hours. Pre-vetted, NDA-protected, and backed by a 2-week replacement guarantee.",
  priceNumeric: "45",
  skills: SKILLS,
});

const breadcrumbSchema = buildBreadcrumbSchema({
  slug: "hire-ai-engineers",
  techDisplay: "AI Engineers",
});

const howToSchema = buildHowToSchema({
  tech: "AI / ML",
  techDisplay: "AI Engineers",
  placementTime: "48h",
});

function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div key={i} {...fadeUp(i)} className="border border-slate-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
          >
            <span className="font-semibold text-slate-900">{item.q}</span>
            <HiChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100">
              {item.a}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */
export default function HireAiEngineersPage() {
  return (
    <>
      <Script
        id="faq-jsonld-ai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="service-jsonld-ai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-jsonld-ai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="howto-jsonld-ai"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-teal-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/staff-augmentation" className="hover:text-teal-400 transition-colors">Staff Augmentation</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Hire AI Engineers</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-violet-900/60 border border-violet-700/40 rounded-full px-4 py-1.5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiSparkles className="w-3.5 h-3.5" />
                Production AI Engineers · 48-Hour Placement
              </motion.div>

              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6">
                Hire Dedicated{" "}
                <span className="text-gradient">AI Engineers & ML Engineers</span>
              </motion.h1>

              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 leading-relaxed mb-8">
                Senior AI engineers who ship production LLM systems, RAG pipelines, and ML infrastructure — not just notebook prototypes. Python, PyTorch, LangChain, OpenAI API, Hugging Face, and MLOps at scale. Available in 48 hours.
              </motion.p>

              <motion.div {...fadeUp(3)} className="flex items-center gap-3 mb-8">
                <span className="text-2xl font-bold text-white">From $45<span className="text-base font-normal text-slate-400">/hr</span></span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400 text-sm">AI specialization premium applies. No placement fee.</span>
              </motion.div>

              <motion.div {...fadeUp(4)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Hire an AI Engineer
                  <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  Discuss Your AI Project
                </Link>
              </motion.div>
            </div>

            {/* Right — AI Engineer Profile Card */}
            <motion.div {...fadeUp(2)}>
              <div className="bg-slate-800/70 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">AI Engineers Available</span>
                  <span className="text-xs bg-violet-900/60 text-violet-300 border border-violet-700/40 rounded-full px-3 py-1">3 available now</span>
                </div>
                {[
                  { name: "LLM / RAG Pipeline Engineer", exp: "5 years", skills: ["LangChain", "Pinecone", "OpenAI"], status: "Available in 24h" },
                  { name: "Senior ML Engineer", exp: "7 years", skills: ["PyTorch", "HuggingFace", "SageMaker"], status: "Available in 48h" },
                  { name: "AI Systems Architect", exp: "9 years", skills: ["LangGraph", "Vertex AI", "MLflow"], status: "Available in 48h" },
                ].map((dev, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${i < 2 ? "border-b border-slate-700/40 mb-3 pb-4" : ""}`}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-teal-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      AI
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-white font-semibold text-sm">{dev.name}</span>
                        <span className="text-slate-400 text-xs flex-shrink-0">{dev.exp}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {dev.skills.map((s) => (
                          <span key={s} className="text-xs bg-slate-700/60 text-slate-300 rounded px-2 py-0.5">{s}</span>
                        ))}
                      </div>
                      <span className="text-xs text-violet-400 font-medium">✓ {dev.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="bg-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i)} className="text-center">
                <r.icon className="w-7 h-7 text-teal-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{r.value}</div>
                <div className="text-sm text-slate-500">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI CAPABILITIES ── */}
      <section className="bg-dots py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our AI Engineers <span className="text-gradient">Build in Production</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Production AI systems with sub-200ms latency, proper evaluation frameworks, and monitoring dashboards — built to run without babysitting.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_CAPABILITIES.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK CHIPS ── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...fadeUp(0)} className="text-2xl font-bold text-slate-900 mb-8">Full AI/ML Stack Coverage</motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill, i) => (
              <motion.span
                key={skill}
                {...fadeUp(i * 0.4)}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium shadow-sm hover:border-teal-400 hover:text-teal-700 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="bg-slate-900 py-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Engagement <span className="text-gradient">Models for AI Teams</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">Embed a senior AI engineer, build an AI team, or deliver a defined AI system.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <motion.div
                key={model.title}
                {...fadeUp(i)}
                className={`relative rounded-2xl p-7 border ${model.highlight ? "bg-gradient-to-br from-teal-900/60 to-blue-900/60 border-teal-600/50" : "bg-slate-800/50 border-slate-700/50"}`}
              >
                {model.badge && (
                  <span className="absolute -top-3 left-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {model.badge}
                  </span>
                )}
                <div className="text-sm font-semibold text-teal-400 mb-1">{model.hours}</div>
                <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{model.desc}</p>
                <ul className="space-y-2">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <HiCheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(3)} className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-3">
              <HiCurrencyDollar className="w-4 h-4 text-teal-500" />
              Starting from <strong className="text-white ml-1">$45/hour</strong> · AI specialization premium · No placement fees
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HIRING PROCESS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              AI Engineer on Your Team in <span className="text-gradient">48 Hours</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">From brief to first commit — a streamlined process designed for technical teams who don't have time for lengthy recruiting cycles.</p>
          </motion.div>
          <div className="grid lg:grid-cols-5 gap-8 relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600/20 via-teal-600/60 to-blue-600/20 mx-32" />
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} {...fadeUp(i)} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/20">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INFONZA ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why <span className="text-gradient">Infonza AI Engineers</span> Deliver at Production Scale
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_INFONZA.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Ready to build your AI system in production?"
            subheading="Share your AI use case and we'll match you with a vetted senior AI engineer in 24 hours."
            cta="Hire an AI Engineer"
          />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Related Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i)}>
                <Link href={item.href} className="group block bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-teal-400 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <span className="text-teal-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <HiArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* ── BOOKING SECTION ── */}
      <BookingSection
        badge="Hire in 72 Hours"
        heading="Find Your Perfect AI Engineer Today"
        subheading="Production LLM systems, RAG pipelines, and MLOps — built by engineers who've shipped AI at scale. Get matched profiles in 24 hours."
        primaryCTA="Get AI Engineer Profiles"
        secondaryCTA="Discuss Your AI Roadmap"
        stats={[
          { value: "48h", label: "Placement speed" },
          { value: "10+", label: "LLM systems deployed" },
          { value: "<200ms", label: "Inference latency" },
        ]}
        trustItems={[
          "Production AI expertise verified",
          "Data privacy agreements included",
          "Evaluation framework on every project",
        ]}
      />

      <Footer />
      <FloatingBookingButton label="Hire AI Engineer" />
    </>
  );
}
