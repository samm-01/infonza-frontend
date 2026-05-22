"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiSparkles,
  HiCpuChip,
  HiCircleStack,
  HiChatBubbleLeftRight,
  HiBolt,
  HiCodeBracket,
  HiShieldCheck,
  HiRocketLaunch,
  HiChevronDown,
  HiClock,
  HiGlobeAlt,
  HiStar,
  HiCube,
  HiMagnifyingGlass,
  HiCommandLine,
} from "react-icons/hi2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  BookingSection,
  BookingBanner,
  FloatingBookingButton,
  BOOKING_URL,
} from "../components/booking-cta";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════════ */

const TRUST_STATS = [
  { value: "150+", label: "AI Projects Delivered", icon: HiRocketLaunch },
  { value: "12+", label: "Years Experience", icon: HiClock },
  { value: "40+", label: "AI Engineers", icon: HiCpuChip },
  { value: "94%", label: "Client Retention", icon: HiStar },
];

const SERVICES = [
  {
    icon: HiChatBubbleLeftRight,
    title: "AI Chatbot Development",
    desc: "GPT-4 & LangChain chatbots with RAG-powered knowledge bases, multi-channel deployment, and human handoff. 70% ticket deflection on day one.",
    href: "/ai-development/ai-chatbot-development",
    badge: "Most Popular",
  },
  {
    icon: HiBolt,
    title: "AI Workflow Automation",
    desc: "End-to-end intelligent process automation — document processing, email triage, approval flows, and data extraction that replaces hours of manual work.",
    href: "/ai-development/ai-workflow-automation",
    badge: null,
  },
  {
    icon: HiSparkles,
    title: "Generative AI Development",
    desc: "Custom GenAI applications for content generation, image synthesis, code assistants, and multimodal pipelines tailored to your business domain.",
    href: "/ai-development/generative-ai-development",
    badge: null,
  },
  {
    icon: HiCodeBracket,
    title: "OpenAI Integration Services",
    desc: "Full-stack GPT-4 API integration — function calling, embeddings, fine-tuning, and Assistants API wired directly into your existing product stack.",
    href: "/ai-development/openai-integration-services",
    badge: "Fast Track",
  },
  {
    icon: HiMagnifyingGlass,
    title: "RAG Development Services",
    desc: "Retrieval-augmented generation pipelines grounded in your proprietary data — vector databases, embedding pipelines, semantic search, and hybrid retrieval.",
    href: "/ai-development/rag-development-services",
    badge: null,
  },
  {
    icon: HiCube,
    title: "LLM Development & Fine-Tuning",
    desc: "Custom large language models fine-tuned on your domain data with RLHF, private deployment, and ongoing model evaluation frameworks.",
    href: "/ai-development/llm-development-company",
    badge: null,
  },
];

const DIFFERENTIATORS = [
  {
    icon: HiCpuChip,
    title: "Deep LLM Expertise",
    desc: "Our engineers have shipped production LLM systems since GPT-3. We understand tokenization, context windows, latency trade-offs, and cost optimization at scale — not just API calls.",
  },
  {
    icon: HiCircleStack,
    title: "Production-Grade RAG",
    desc: "We architect multi-stage retrieval pipelines with hybrid dense-sparse search, re-ranking, and guardrails — reducing hallucinations by 85% vs naive RAG implementations.",
  },
  {
    icon: HiShieldCheck,
    title: "Enterprise Security",
    desc: "SOC 2-aligned AI pipelines, private VPC deployments, PII scrubbing at ingestion, and audit logging. Your proprietary data never trains third-party models.",
  },
  {
    icon: HiCommandLine,
    title: "Full-Stack AI Delivery",
    desc: "From Python data pipelines to React AI interfaces — we own the entire stack. No hand-offs between fragmented vendors. One team, one throat to choke.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & AI Strategy",
    desc: "We audit your existing data, workflows, and infrastructure to identify the highest-ROI AI interventions. You get a prioritized roadmap with concrete success metrics.",
  },
  {
    step: "02",
    title: "Data Architecture",
    desc: "We design and build the data foundations — ETL pipelines, vector stores, embedding schemas, and data quality frameworks that make or break AI performance.",
  },
  {
    step: "03",
    title: "Model Development",
    desc: "Rapid prototyping with evaluation harnesses in place from day one. We iterate on prompts, fine-tune models, and benchmark against your specific domain tasks.",
  },
  {
    step: "04",
    title: "Integration & Testing",
    desc: "LLM-specific testing: adversarial probing, hallucination detection, latency benchmarking, and load testing. We validate accuracy and reliability before launch.",
  },
  {
    step: "05",
    title: "Deployment & Monitoring",
    desc: "CI/CD for AI — blue/green model deployments, real-time quality monitoring, drift detection, and feedback loops that keep your AI improving post-launch.",
  },
];

const TECH_STACK = [
  { name: "Python", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { name: "LangChain", color: "bg-violet-100 text-violet-800 border-violet-200" },
  { name: "OpenAI GPT-4", color: "bg-green-100 text-green-800 border-green-200" },
  { name: "Pinecone", color: "bg-teal-100 text-teal-800 border-teal-200" },
  { name: "FastAPI", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { name: "AWS SageMaker", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { name: "Hugging Face", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { name: "PyTorch", color: "bg-red-100 text-red-800 border-red-200" },
  { name: "Redis", color: "bg-rose-100 text-rose-800 border-rose-200" },
  { name: "Weaviate", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  { name: "LlamaIndex", color: "bg-purple-100 text-purple-800 border-purple-200" },
  { name: "PostgreSQL + pgvector", color: "bg-sky-100 text-sky-800 border-sky-200" },
];

const RELATED_VERTICALS = [
  {
    title: "Insurance Software Development",
    desc: "AI-powered underwriting, claims automation, and fraud detection for insurance carriers and MGAs.",
    href: "/insurance-software-development",
    icon: HiShieldCheck,
  },
  {
    title: "SaaS Development",
    desc: "Embed AI capabilities directly into your SaaS product — AI assistants, predictive analytics, and intelligent features.",
    href: "/saas-development",
    icon: HiGlobeAlt,
  },
  {
    title: "ERP Development",
    desc: "AI-augmented ERP systems with intelligent forecasting, anomaly detection, and natural language interfaces.",
    href: "/erp-development",
    icon: HiCircleStack,
  },
];

const FAQS = [
  {
    q: "How much does custom AI development cost?",
    a: "AI development projects typically range from $30,000 for focused integrations (e.g., OpenAI API into an existing app) to $300,000+ for full-scale custom LLM development and RAG infrastructure. We provide fixed-price discovery sprints so you get a detailed scope and estimate before committing to full development.",
  },
  {
    q: "How long does an AI project take to build?",
    a: "A production-ready AI chatbot with RAG takes 6–10 weeks. A custom LLM fine-tuning project runs 8–14 weeks. OpenAI API integrations can ship in as little as 2 weeks. We use 2-week sprints with working demos after every cycle, so you see progress continuously.",
  },
  {
    q: "Do you work with our proprietary data, and is it secure?",
    a: "Yes — working with your proprietary data is often the entire point. We implement PII scrubbing at ingestion, deploy models in private VPCs (AWS or Azure), sign NDAs before any data is shared, and never use your data to train third-party models. We follow SOC 2-aligned security practices across all engagements.",
  },
  {
    q: "Which AI technologies do you recommend — GPT-4, open-source, or fine-tuned models?",
    a: "It depends on your use case, data sensitivity, and scale economics. For most enterprise chatbots and knowledge assistants, GPT-4 with RAG is the fastest path to production. For high-volume workloads or sensitive data that can't leave your VPC, we recommend fine-tuning open-source models (Llama 3, Mistral, Falcon). We always recommend the option that optimizes for your ROI, not the most impressive-sounding technology.",
  },
  {
    q: "Can you integrate AI into our existing systems, or do we need to rebuild from scratch?",
    a: "Almost always integration, not rebuild. We specialize in adding AI capabilities to existing products via API layers, event-driven hooks, and embedded AI modules. We've integrated AI into legacy Java ERP systems, Salesforce CRM, custom React dashboards, and third-party SaaS platforms. A rewrite is rarely necessary.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════════════════════════════════ */

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-slate-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-sm sm:text-base">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <HiChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function AIDevelopmentPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-8">
                <HiSparkles className="w-3.5 h-3.5" />
                AI Development Company
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] mb-6">
                Build Intelligent{" "}
                <span className="text-gradient">AI Solutions</span>{" "}
                That Scale
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                From GPT-4 powered applications to production RAG systems and
                custom LLMs — we architect, build, and ship enterprise AI that
                delivers measurable business outcomes, not demos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Schedule Free Consultation
                  <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  View Our Work
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {["GPT-4", "LangChain", "RAG", "LLM Fine-Tuning", "Pinecone", "FastAPI"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* Right — AI Metrics Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="relative bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 backdrop-blur-sm shadow-2xl">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    AI System — Live Dashboard
                  </span>
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Accuracy", value: "94.2%", trend: "+2.1%", color: "text-teal-400" },
                    { label: "Requests/Day", value: "2.4M", trend: "+18%", color: "text-blue-400" },
                    { label: "Latency (p95)", value: "180ms", trend: "−22ms", color: "text-violet-400" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="bg-slate-900/70 border border-slate-700/50 rounded-xl p-3"
                    >
                      <div className={`text-xl font-bold font-mono ${m.color}`}>
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                      <div className="text-xs text-green-400 mt-1 font-mono">{m.trend}</div>
                    </div>
                  ))}
                </div>

                {/* Simulated log stream */}
                <div className="bg-slate-900/80 rounded-xl p-4 font-mono text-xs space-y-1.5 border border-slate-700/40">
                  {[
                    { ts: "09:41:02", msg: "RAG retrieval — 12 chunks, score 0.94", color: "text-teal-400" },
                    { ts: "09:41:03", msg: "LLM inference — 340 tokens, 148ms", color: "text-blue-400" },
                    { ts: "09:41:03", msg: "Guardrails passed — no PII detected", color: "text-green-400" },
                    { ts: "09:41:04", msg: "Response streamed — client latency 165ms", color: "text-slate-300" },
                    { ts: "09:41:05", msg: "Cache hit — vector store Pinecone", color: "text-violet-400" },
                  ].map((log, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-slate-600">{log.ts}</span>
                      <span className={log.color}>{log.msg}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom model info */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>Model: gpt-4o-mini + fine-tuned Llama 3</span>
                  <span className="text-green-400 font-semibold">● All systems nominal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ─────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-teal-50 mb-3">
                  <stat.icon className="w-5 h-5 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ───────────────────────────────────────────────── */}
      <section className="bg-dots bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/60 rounded-full px-4 py-1.5 text-teal-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <HiSparkles className="w-3.5 h-3.5" />
              Our AI Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              End-to-End <span className="text-gradient">AI Development</span> Services
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Six specialized practice areas, each with dedicated engineers who live in that
              domain — not generalists who dabble.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={svc.href}
                  className="group relative flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300"
                >
                  {svc.badge && (
                    <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
                      {svc.badge}
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svc.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{svc.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-teal-600 text-sm font-semibold">
                    Learn more <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INFONZA ─────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-teal-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Enterprises Choose{" "}
              <span className="text-gradient">Infonza for AI</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Technical depth, not just integrations. We build AI that operates reliably at
              production scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 hover:border-teal-700/60 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-600/20 border border-teal-600/30 flex items-center justify-center mb-4">
                  <d.icon className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{d.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-gradient">AI Development</span> Process
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              A proven five-phase methodology built for shipping reliable AI, not impressive
              demos.
            </p>
          </motion.div>

          <div className="space-y-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm font-mono">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────── */}
      <section className="bg-dots bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Our AI Technology Stack
            </h2>
            <p className="text-slate-500">
              Battle-tested tools chosen for production reliability, not hype.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`px-4 py-2 rounded-full border text-sm font-semibold ${tech.color}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ──────────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Ready to scope your AI project?"
            subheading="30-minute free consultation with a senior AI engineer. No sales deck, just honest technical guidance."
            cta="Schedule Discovery Call"
          />
        </div>
      </section>

      {/* ── RELATED VERTICALS ───────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">AI Across Industries</h2>
            <p className="text-slate-500">
              We embed AI into domain-specific platforms and vertical software.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED_VERTICALS.map((v, i) => (
              <motion.div
                key={v.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={v.href}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
                    <v.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-500 flex-1 leading-relaxed">{v.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-teal-600 text-sm font-semibold">
                    Explore <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Honest answers to common questions about working with us on AI projects.
            </p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION ─────────────────────────────────────────────── */}
      <BookingSection
        badge="Free AI Consultation"
        heading="Let's Build Your AI System"
        subheading="Schedule a 30-minute strategy session with our senior AI engineers. We'll review your use case, recommend the right architecture, and give you a realistic project estimate."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to an AI Engineer"
      />

      <FloatingBookingButton label="Talk to AI Team" />
      <Footer />
    </>
  );
}
