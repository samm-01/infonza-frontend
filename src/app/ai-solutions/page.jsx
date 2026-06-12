"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiSparkles,
  HiArrowRight,
  HiChevronDown,
  HiCpuChip,
  HiChatBubbleLeftRight,
  HiMicrophone,
  HiUserGroup,
  HiChartBar,
  HiDocumentText,
  HiCircleStack,
  HiEnvelope,
  HiCog6Tooth,
  HiMagnifyingGlass,
  HiCalendarDays,
  HiRectangleStack,
  HiCodeBracket,
  HiShieldCheck,
  HiBolt,
  HiGlobeAlt,
  HiRocketLaunch,
  HiCheckCircle,
  HiAcademicCap,
  HiHeart,
  HiTruck,
  HiHome,
  HiShoppingCart,
  HiBanknotes,
  HiWrenchScrewdriver,
  HiBriefcase,
} from "react-icons/hi2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FAQItem } from "../components/ai-solutions-shared";
import {
  BookingSection,
  BookingBanner,
  FloatingBookingButton,
  BOOKING_URL,
} from "../components/booking-cta";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════════ */

const AI_SERVICES = [
  {
    icon: HiCpuChip,
    title: "AI Agents Development",
    desc: "Autonomous AI agents that plan, reason, and execute multi-step tasks with tool integrations and memory.",
    href: "/ai-solutions/ai-agents-development",
  },
  {
    icon: HiChatBubbleLeftRight,
    title: "AI Chatbot Development",
    desc: "GPT-4 powered chatbots with RAG knowledge bases, human handoff, and omnichannel deployment.",
    href: "/ai-development/ai-chatbot-development",
  },
  {
    icon: HiMicrophone,
    title: "AI Voice Agents",
    desc: "Conversational voice AI for inbound/outbound calls using ElevenLabs, OpenAI Realtime, and Twilio.",
    href: "/ai-solutions/ai-voice-agents",
  },
  {
    icon: HiUserGroup,
    title: "AI Customer Support Automation",
    desc: "Automate ticket resolution, live chat, and help desk workflows to reduce support costs by 60%+.",
    href: "/ai-solutions/customer-support-automation",
  },
  {
    icon: HiChartBar,
    title: "AI Sales Automation",
    desc: "AI-driven prospecting, outreach personalization, lead qualification, and CRM auto-updates.",
    href: "/ai-solutions/sales-automation",
  },
  {
    icon: HiMagnifyingGlass,
    title: "AI Lead Generation Automation",
    desc: "Scrape, qualify, enrich, and sequence leads automatically — build your pipeline on autopilot.",
    href: "/ai-solutions/lead-generation-automation",
  },
  {
    icon: HiDocumentText,
    title: "AI Document Processing",
    desc: "OCR, PDF extraction, classification, and document intelligence for insurance, legal, and healthcare.",
    href: "/ai-solutions/document-processing",
  },
  {
    icon: HiCircleStack,
    title: "AI Knowledge Base Systems",
    desc: "RAG-powered enterprise search and knowledge assistants that answer from your internal documentation.",
    href: "/ai-solutions/knowledge-base-systems",
  },
  {
    icon: HiEnvelope,
    title: "AI Email Automation",
    desc: "Smart email classification, auto-replies, follow-up sequences, and inbox automation at scale.",
    href: "/ai-solutions/email-automation",
  },
  {
    icon: HiCog6Tooth,
    title: "AI Business Process Automation",
    desc: "End-to-end department automation — operations, HR, finance, and procurement workflows.",
    href: "/ai-solutions/business-process-automation",
  },
  {
    icon: HiRectangleStack,
    title: "AI Data Extraction Solutions",
    desc: "Structured data pipelines from websites, PDFs, and documents with intelligent parsing.",
    href: "/ai-solutions/data-extraction-solutions",
  },
  {
    icon: HiCalendarDays,
    title: "AI Appointment Booking Agents",
    desc: "24/7 AI scheduling agents with calendar integration, reminders, and rescheduling flows.",
    href: "/ai-solutions/appointment-booking-agents",
  },
  {
    icon: HiRectangleStack,
    title: "AI CRM Automation",
    desc: "Automate HubSpot, Salesforce, Zoho, and Pipedrive — data entry, follow-ups, and deal updates.",
    href: "/ai-solutions/crm-automation",
  },
  {
    icon: HiCodeBracket,
    title: "AI Copilot Development",
    desc: "Internal employee copilots and enterprise assistants embedded into your existing tools.",
    href: "/ai-solutions/ai-copilot-development",
  },
  {
    icon: HiSparkles,
    title: "Generative AI Development",
    desc: "Custom generative AI applications — content creation, image generation, and multimodal AI.",
    href: "/ai-development/generative-ai-development",
  },
  {
    icon: HiCircleStack,
    title: "RAG Development Services",
    desc: "Retrieval-augmented generation systems that ground AI responses in your proprietary data.",
    href: "/ai-development/rag-development-services",
  },
  {
    icon: HiBolt,
    title: "LLM Development",
    desc: "Custom LLM fine-tuning, deployment, and integration for domain-specific AI applications.",
    href: "/ai-development/llm-development-company",
  },
  {
    icon: HiGlobeAlt,
    title: "OpenAI Integration Services",
    desc: "Integrate GPT-4, DALL-E, Whisper, and the full OpenAI API suite into your product stack.",
    href: "/ai-development/openai-integration-services",
  },
  {
    icon: HiCog6Tooth,
    title: "AI Workflow Automation",
    desc: "n8n, Make, and Zapier-based AI workflows that connect your SaaS tools and eliminate manual work.",
    href: "/ai-development/ai-workflow-automation",
  },
  {
    icon: HiCpuChip,
    title: "AI Automation",
    desc: "Custom AI automation solutions designed around your specific business processes and workflows.",
    href: "/ai-solutions",
  },
];

const USE_CASES = [
  { icon: HiUserGroup, title: "Customer Support", desc: "Resolve 70%+ of tickets automatically with AI — available 24/7 across chat, email, and voice." },
  { icon: HiChartBar, title: "Sales Automation", desc: "Automate prospecting, personalized outreach, lead scoring, and CRM updates end-to-end." },
  { icon: HiMagnifyingGlass, title: "Lead Qualification", desc: "AI qualifies inbound leads in real time — scoring, enriching, and routing to the right rep." },
  { icon: HiCalendarDays, title: "Appointment Scheduling", desc: "Conversational AI books, confirms, and reschedules appointments without human intervention." },
  { icon: HiDocumentText, title: "Document Processing", desc: "Extract, classify, and structure data from PDFs, forms, and scanned documents automatically." },
  { icon: HiCircleStack, title: "Knowledge Management", desc: "Employees get instant answers from internal wikis, SOPs, and knowledge bases via AI search." },
  { icon: HiCog6Tooth, title: "Internal Operations", desc: "Automate repetitive ops tasks — data entry, report generation, approvals, and notifications." },
  { icon: HiBriefcase, title: "HR Automation", desc: "AI handles onboarding, policy Q&A, leave management, and candidate screening workflows." },
  { icon: HiShieldCheck, title: "Insurance Automation", desc: "Automate policy intake, claims processing, fraud detection, and compliance reporting." },
  { icon: HiWrenchScrewdriver, title: "ERP Automation", desc: "AI agents that interact with ERP systems to automate purchase orders, invoicing, and inventory." },
];

const TECH_STACK = [
  { name: "OpenAI GPT-4", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { name: "Claude (Anthropic)", color: "bg-violet-50 border-violet-200 text-violet-700" },
  { name: "Google Gemini", color: "bg-blue-50 border-blue-200 text-blue-700" },
  { name: "LangChain", color: "bg-amber-50 border-amber-200 text-amber-700" },
  { name: "LangGraph", color: "bg-orange-50 border-orange-200 text-orange-700" },
  { name: "CrewAI", color: "bg-rose-50 border-rose-200 text-rose-700" },
  { name: "AutoGen", color: "bg-sky-50 border-sky-200 text-sky-700" },
  { name: "Pinecone", color: "bg-teal-50 border-teal-200 text-teal-700" },
  { name: "Weaviate", color: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  { name: "Supabase", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { name: "PostgreSQL", color: "bg-blue-50 border-blue-200 text-blue-700" },
  { name: "Vector Databases", color: "bg-slate-100 border-slate-200 text-slate-700" },
  { name: "Whisper (STT)", color: "bg-amber-50 border-amber-200 text-amber-700" },
  { name: "ElevenLabs", color: "bg-violet-50 border-violet-200 text-violet-700" },
  { name: "n8n", color: "bg-rose-50 border-rose-200 text-rose-700" },
  { name: "Make (Integromat)", color: "bg-orange-50 border-orange-200 text-orange-700" },
  { name: "Zapier", color: "bg-amber-50 border-amber-200 text-amber-700" },
  { name: "OpenAI Realtime API", color: "bg-teal-50 border-teal-200 text-teal-700" },
  { name: "Twilio", color: "bg-red-50 border-red-200 text-red-700" },
  { name: "FastAPI", color: "bg-sky-50 border-sky-200 text-sky-700" },
];

const INDUSTRIES = [
  "Insurance", "Healthcare", "Education", "Manufacturing", "Logistics",
  "Real Estate", "Legal", "SaaS", "E-commerce", "Finance",
  "Retail", "HR & Recruitment", "Travel & Hospitality", "Media",
];

const WHY_INFONZA = [
  { title: "12+ Years of Engineering Experience", desc: "We bring deep software engineering to AI — not just prompts, but production-grade systems built to scale." },
  { title: "Full-Stack AI Team", desc: "Backend engineers, ML specialists, prompt engineers, and DevOps in one team — no outsourcing." },
  { title: "AI + Software Expertise", desc: "We build the AI layer AND the surrounding software infrastructure — APIs, databases, integrations, and UI." },
  { title: "Scalable Architecture", desc: "Every system is designed for production: async queues, monitoring, rate limiting, and fallback strategies." },
  { title: "Ongoing Support & Iteration", desc: "AI systems need tuning after launch. We provide continuous support, monitoring, and model updates." },
  { title: "Domain-Specific Solutions", desc: "We specialize in high-complexity industries — insurance, legal, healthcare — where accuracy is non-negotiable." },
];

const FAQS = [
  {
    q: "What types of AI solutions does Infonza build?",
    a: "We build AI agents, chatbots, voice assistants, document processing systems, workflow automation, RAG knowledge bases, sales automation, and custom AI applications. We work with OpenAI, Anthropic Claude, Google Gemini, LangChain, LangGraph, and CrewAI to deliver production-grade AI systems.",
  },
  {
    q: "How long does it take to build an AI solution?",
    a: "A focused AI automation (e.g., email classifier or lead qualifier) takes 2–4 weeks. A full AI agent system with multiple integrations typically takes 6–12 weeks. We start with a scoping call to define scope, timeline, and milestones before writing any code.",
  },
  {
    q: "Do you integrate AI into existing software or build from scratch?",
    a: "Both. We frequently add AI capabilities to existing SaaS products, CRMs, ERPs, and internal tools. We also build standalone AI applications from the ground up depending on what the project requires.",
  },
  {
    q: "What industries do you specialize in for AI automation?",
    a: "We have deep expertise in insurance, healthcare, legal, logistics, SaaS, and e-commerce. These industries involve complex documents, strict compliance requirements, and high-volume repetitive work — exactly where AI delivers the most ROI.",
  },
  {
    q: "How do you handle data privacy and security for AI systems?",
    a: "We implement PII detection, data encryption at rest and in transit, access controls, audit logging, and off-topic deflection. For regulated industries we can deploy models on private infrastructure (no shared API endpoints) and sign BAA/DPA agreements.",
  },
  {
    q: "What is the difference between an AI agent and a chatbot?",
    a: "A chatbot answers questions. An AI agent takes actions — it can search the web, query databases, update CRM records, send emails, call APIs, and complete multi-step tasks autonomously. Agents use tools and can execute workflows without human intervention.",
  },
  {
    q: "Can you automate our existing business workflows with AI?",
    a: "Yes. We analyze your current workflows, identify automation candidates, and build AI systems using n8n, LangChain, or custom code that integrate with your existing tools (Slack, HubSpot, Salesforce, Google Workspace, etc.).",
  },
  {
    q: "Do you offer AI consulting before development starts?",
    a: "Yes. We offer a free 30-minute discovery call and a paid AI audit engagement for larger organizations. In the audit we map your processes, identify high-ROI automation opportunities, and produce a detailed implementation roadmap.",
  },
  {
    q: "What is RAG and why does it matter for enterprise AI?",
    a: "RAG (Retrieval-Augmented Generation) allows AI to answer questions from your specific documents and data rather than from generic training data. This eliminates hallucinations, ensures accuracy, and keeps your proprietary knowledge private — critical for enterprise use cases.",
  },
  {
    q: "How do you price AI development projects?",
    a: "We offer fixed-scope project pricing for well-defined AI features and monthly retainer pricing for ongoing AI development and support. Pricing depends on complexity, integrations required, and deployment infrastructure. Book a discovery call for a detailed estimate.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Solutions",
  description:
    "Custom AI agents, chatbots, voice assistants, workflow automation, and intelligent applications built for businesses.",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  serviceType: "AI Development",
  areaServed: ["US", "UK", "AU", "CA", "IN"],
};

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function AISolutionsPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-bl from-teal-600/10 to-blue-600/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-to-tr from-violet-600/8 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiSparkles className="w-3.5 h-3.5" />
                AI Solutions Hub
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                AI Solutions That{" "}
                <span className="text-gradient">Automate, Scale,</span> and
                Grow Your Business
              </h1>

              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                We build AI agents, chatbots, workflow automation, voice
                assistants, and custom AI applications that save time and
                increase productivity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-teal-900/30"
                >
                  Book Discovery Call
                  <HiArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/20 transition-colors"
                >
                  Get Free Consultation
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 shadow-2xl">
                <div className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  AI Agent — Active
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Support tickets auto-resolved", value: "73%", color: "from-teal-600 to-teal-500" },
                    { label: "Sales pipeline generated", value: "4.2×", color: "from-blue-600 to-blue-500" },
                    { label: "Hours saved per week", value: "120+", color: "from-violet-600 to-violet-500" },
                    { label: "Lead qualification accuracy", value: "94%", color: "from-emerald-600 to-emerald-500" },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center gap-4 bg-slate-900/60 rounded-xl p-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${m.color} flex items-center justify-center flex-shrink-0`}>
                        <HiCheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-slate-400">{m.label}</div>
                        <div className="text-white font-bold text-xl">{m.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST METRICS ────────────────────────────────────────────────── */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100+", label: "AI Projects Delivered" },
              { value: "12+", label: "Years of Experience" },
              { value: "60%", label: "Avg. Cost Reduction" },
              { value: "48h", label: "Avg. Time to First Demo" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient">{m.value}</div>
                <div className="text-sm text-slate-500 mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SERVICES GRID ─────────────────────────────────────────────── */}
      <section className="bg-dots bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              All <span className="text-gradient">AI Services</span> We Offer
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              From intelligent agents to full workflow automation — explore every AI capability we deliver.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {AI_SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-5 hover:border-teal-300 hover:shadow-xl transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4">
                    <s.icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2 group-hover:text-teal-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-teal-600 text-xs font-semibold">
                    Learn More{" "}
                    <HiArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              AI <span className="text-gradient">Use Cases</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Real-world AI automation scenarios we deliver across industries.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {USE_CASES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{c.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────────────── */}
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
              AI Technology Stack
            </h2>
            <p className="text-slate-500">
              Production-grade tools we use to build and deploy AI systems.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className={`px-4 py-2 rounded-full border text-sm font-semibold ${tech.color}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Industries We Serve
            </h2>
            <p className="text-slate-500">AI solutions tailored to the complexity of your industry.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind, i) => (
              <motion.span
                key={ind}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
              >
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INFONZA ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 lg:py-24 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why <span className="text-gradient">Infonza</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              12+ years delivering enterprise software. Now applying that foundation to AI.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_INFONZA.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 p-5 rounded-xl bg-white border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <HiCheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ───────────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Ready to scope your AI project?"
            subheading="Book a free 30-minute discovery call with our AI engineers. We'll assess your use case and provide a realistic roadmap."
            cta="Schedule Discovery Call"
          />
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24 border-t border-slate-100">
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
              Common questions about our AI development services.
            </p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <BookingSection
        badge="Free AI Consultation"
        heading="Let's Build Your AI System"
        subheading="Schedule a 30-minute strategy session with our engineers. We'll map your processes, identify automation opportunities, and provide a realistic timeline and estimate."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to an AI Engineer"
      />

      <FloatingBookingButton label="Talk to AI Team" />
      <Footer />
    </>
  );
}
