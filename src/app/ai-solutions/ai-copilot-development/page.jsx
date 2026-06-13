"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiSparkles,
  HiChevronDown,
  HiCodeBracket,
  HiCpuChip,
  HiCircleStack,
  HiUserGroup,
  HiChartBar,
  HiBolt,
  HiCog6Tooth,
  HiRocketLaunch,
} from "react-icons/hi2";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  BookingSection,
  BookingBanner,
  FloatingBookingButton,
  BOOKING_URL,
} from "../../components/booking-cta";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════════ */

const METRICS = [
  { metric: "30%", label: "Productivity Increase", sub: "average across teams using copilots" },
  { metric: "Your Data", label: "Trained On", sub: "docs, SOPs, wikis, and internal tools" },
  { metric: "Any Tool", label: "Embedded Into", sub: "Slack, web app, internal portals" },
  { metric: "4 Weeks", label: "To Deploy", sub: "from kickoff to live copilot" },
];

const CAPABILITIES = [
  {
    icon: HiUserGroup,
    title: "Internal Employee Copilots",
    desc: "AI assistants embedded in Slack or your intranet that answer employee questions from HR policies, SOPs, IT guides, and internal documentation — reducing support tickets by 60%+.",
  },
  {
    icon: HiCircleStack,
    title: "Enterprise Knowledge Copilots",
    desc: "RAG-powered copilots that search across your entire knowledge base — Confluence, Notion, Google Drive, SharePoint — and surface the exact answer with source citations.",
  },
  {
    icon: HiCog6Tooth,
    title: "Workflow Assistant Copilots",
    desc: "Copilots embedded inside your business tools that help employees complete tasks faster — drafting emails, filling forms, generating reports, and executing workflows via natural language.",
  },
  {
    icon: HiCodeBracket,
    title: "Code & Developer Copilots",
    desc: "Internal coding assistants trained on your codebase, API docs, and engineering standards — helping engineers write code faster, debug issues, and navigate unfamiliar parts of the repo.",
  },
  {
    icon: HiChartBar,
    title: "Sales Copilots",
    desc: "Copilots for sales reps that surface relevant case studies, battlecards, pricing info, and objection responses during live calls — reducing research time and improving win rates.",
  },
  {
    icon: HiRocketLaunch,
    title: "Customer-Facing Product Copilots",
    desc: "AI copilots embedded in your SaaS product that guide users through features, answer product questions, and reduce churn by making your product instantly understandable.",
  },
];

const PROCESS = [
  { step: "01", title: "Use Case Discovery", desc: "We map the specific tasks, workflows, and questions your copilot will handle — identifying where AI assistance delivers the most daily value for your team." },
  { step: "02", title: "Data Preparation & Ingestion", desc: "We collect, clean, and structure your internal documents, SOPs, knowledge bases, and code repositories for ingestion into a vector store optimized for accurate retrieval." },
  { step: "03", title: "Copilot Architecture & Prompt Design", desc: "We design the copilot's persona, behavior boundaries, tool access, and retrieval strategy — engineering prompts systematically against real test queries before building the UI." },
  { step: "04", title: "UI Integration & Deployment", desc: "We embed the copilot into your chosen interface — Slack bot, web widget, internal portal, or SaaS product sidebar — with authentication, access controls, and audit logging." },
  { step: "05", title: "Testing, Refinement & Rollout", desc: "We conduct structured evaluations with real users, measure accuracy and satisfaction, iterate on retrieval quality and responses, then roll out incrementally to the full organization." },
];

const TECH_STACK = [
  { name: "OpenAI GPT-4", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { name: "Claude (Anthropic)", color: "bg-violet-50 border-violet-200 text-violet-700" },
  { name: "LangChain", color: "bg-amber-50 border-amber-200 text-amber-700" },
  { name: "LangGraph", color: "bg-orange-50 border-orange-200 text-orange-700" },
  { name: "Pinecone", color: "bg-teal-50 border-teal-200 text-teal-700" },
  { name: "Weaviate", color: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  { name: "Supabase", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { name: "Next.js / React", color: "bg-slate-100 border-slate-200 text-slate-700" },
  { name: "FastAPI", color: "bg-sky-50 border-sky-200 text-sky-700" },
  { name: "PostgreSQL", color: "bg-blue-50 border-blue-200 text-blue-700" },
  { name: "Slack API", color: "bg-rose-50 border-rose-200 text-rose-700" },
];

const INDUSTRIES = ["SaaS", "Insurance", "Healthcare", "Legal", "Finance", "Manufacturing", "Education", "Logistics"];

const WHY_INFONZA = [
  { title: "RAG-First Architecture", desc: "Every copilot we build uses retrieval-augmented generation — your data stays private, responses are grounded in facts, and hallucinations are systematically eliminated." },
  { title: "Full-Stack Delivery", desc: "We build the AI backend AND the frontend interface — you get a complete, production-ready copilot, not just an API endpoint you need to wire up yourself." },
  { title: "Security & Access Controls", desc: "Role-based access ensures users only see information they're authorized to access. We implement authentication, audit logging, and data isolation as standard." },
  { title: "Continuous Improvement", desc: "We set up feedback loops so every thumbs-down response gets reviewed and the retrieval and prompts get refined — your copilot improves over time, not just at launch." },
  { title: "Domain Specialization", desc: "We've built copilots for regulated industries — insurance, healthcare, legal — where accuracy is non-negotiable and compliance requirements must be met." },
  { title: "Fast Time to Value", desc: "A working copilot demo in 48 hours of kickoff. We move fast by using proven architectures and focusing on your highest-value use cases first." },
];

const FAQS = [
  { q: "What is an AI copilot and how is it different from a chatbot?", a: "An AI copilot is an intelligent assistant embedded in your workflow that actively helps employees complete tasks — drafting content, retrieving information, executing actions, and answering questions from your internal data. Unlike a generic chatbot, a copilot is trained on your specific documents and systems, understands your company's context, and can take actions through tool integrations." },
  { q: "What data does the copilot use to answer questions?", a: "Your copilot is trained on whatever internal data you provide — Confluence pages, Notion docs, Google Drive files, SharePoint, PDF manuals, Slack channels, code repositories, or any structured data you want it to know. We ingest, chunk, and embed this data into a private vector store. The AI never uses public internet data to answer your internal questions." },
  { q: "How do you prevent the copilot from giving wrong answers?", a: "We use RAG (Retrieval-Augmented Generation), which grounds every answer in specific retrieved documents rather than relying on model memory. We also add citation display so users can verify sources, confidence thresholds that trigger 'I don't know' responses for low-confidence queries, and regular accuracy evaluations against a test set of real questions." },
  { q: "Can the copilot take actions, not just answer questions?", a: "Yes. We can give the copilot tools — the ability to query your CRM, create Jira tickets, update records, send Slack messages, book meetings, or call any API you expose. This turns the copilot from a question-answering system into an action-taking assistant that can execute multi-step workflows on your behalf." },
  { q: "Where can the copilot be deployed?", a: "We deploy copilots as Slack bots, web chat widgets, browser extensions, in-product sidebars (for SaaS products), or embedded in internal portals and intranets. We can also expose the copilot via API so your existing tools can query it programmatically." },
  { q: "How do you handle access control — different employees seeing different information?", a: "We implement role-based access control at the retrieval layer. When a user queries the copilot, we filter the vector store to only retrieve documents they're authorized to access based on their role, department, or team. This ensures the copilot never surfaces confidential information to unauthorized users." },
  { q: "How long does it take to build a copilot?", a: "A focused copilot (single knowledge base, one deployment channel) takes 2–4 weeks. An enterprise copilot with multiple knowledge sources, role-based access, tool integrations, and multiple deployment channels typically takes 6–10 weeks. We always build a working demo in the first week so you can see real progress fast." },
  { q: "Can the copilot be updated as our internal docs change?", a: "Yes. We set up automated sync pipelines that re-ingest content when your source documents are updated — Confluence page edits, new Google Drive files, updated wikis. The copilot's knowledge stays current without any manual intervention. We also provide a simple admin interface for adding new content sources." },
  { q: "Is our data secure when building an AI copilot?", a: "Yes. All data is processed and stored in your own infrastructure or a dedicated private environment — never in shared, public AI training pools. We implement encryption at rest and in transit, access logging, and can work within your existing cloud environment (AWS, GCP, Azure) for maximum control." },
  { q: "What's the difference between a copilot and a RAG system?", a: "RAG (Retrieval-Augmented Generation) is the underlying technology that makes a copilot accurate. A copilot is the full product built on top of RAG — with a user interface, conversation management, authentication, access controls, tool integrations, and an admin panel. We deliver the complete copilot, not just the RAG pipeline." },
];

const RELATED = [
  { icon: HiCpuChip, title: "AI Agents Development", desc: "Autonomous agents that plan and execute multi-step tasks.", href: "/ai-solutions/ai-agents-development" },
  { icon: HiCircleStack, title: "AI Knowledge Base Systems", desc: "RAG-powered enterprise search and knowledge assistants.", href: "/ai-solutions/knowledge-base-systems" },
  { icon: HiSparkles, title: "Generative AI Development", desc: "Custom generative AI applications and content systems.", href: "/ai-development/generative-ai-development" },
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
  name: "AI Copilot Development",
  description: "Build custom AI copilots and internal assistants trained on your data — embedded into Slack, your SaaS product, or internal portals.",
  provider: { "@type": "Organization", name: "Infonza Innovations", url: "https://infonza.com" },
  serviceType: "AI Copilot Development",
  areaServed: ["US", "UK", "AU", "CA", "IN"],
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════════════════════════════════ */

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="border border-slate-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors">
        <span className="text-sm font-semibold text-slate-900">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
          <HiChevronDown className="w-4 h-4 text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function AICopilotDevelopmentPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />

      {/* HERO */}
      <section className="relative bg-slate-900 overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-gradient-to-bl from-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">AI Copilot Development</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-violet-900/60 border border-violet-700/40 rounded-full px-4 py-1.5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiSparkles className="w-3.5 h-3.5" />
                AI Copilot Development
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Build AI Copilots That{" "}
                <span className="text-gradient">Empower Your Team</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Custom AI copilots and internal assistants trained on your data, embedded into your existing tools, and designed around your specific workflows — deployed in 4 weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-teal-900/30">
                  Schedule Free Consultation <HiArrowRight className="w-4 h-4" />
                </a>
                <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/20 transition-colors">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="hidden lg:block">
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 shadow-2xl">
                <div className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                  Company Copilot — Active
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-900/60 rounded-xl p-4">
                    <div className="text-xs text-slate-400 mb-1">Employee asked:</div>
                    <div className="text-white text-sm">"What's our refund policy for enterprise clients?"</div>
                  </div>
                  <div className="bg-violet-900/30 border border-violet-700/30 rounded-xl p-4">
                    <div className="text-xs text-violet-300 mb-1">Copilot answered (from internal docs):</div>
                    <div className="text-slate-200 text-sm leading-relaxed">"Enterprise clients are eligible for a full refund within 30 days... <span className="text-violet-300">Source: Enterprise Agreement v2.3, Section 4.1</span>"</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                    <HiCheckCircle className="w-3.5 h-3.5 text-teal-400" />
                    Answered from your internal knowledge base — no hallucination
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {METRICS.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="text-3xl sm:text-4xl font-bold text-gradient">{m.metric}</div>
                <div className="text-sm font-semibold text-slate-900 mt-1">{m.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{m.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-dots bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Types of <span className="text-gradient">AI Copilots</span> We Build
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">From internal employee assistants to customer-facing product copilots — every use case covered.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl transition-all group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our <span className="text-gradient">Process</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">How we go from your documents and use cases to a production-ready AI copilot.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm font-mono">{step.step}</div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-dots bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Technology Stack</h2>
            <p className="text-slate-500">Production-grade tools we use to build and deploy AI copilots.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <motion.span key={tech.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className={`px-4 py-2 rounded-full border text-sm font-semibold ${tech.color}`}>
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Industries We Serve</h2>
          <p className="text-slate-500 mb-8">AI copilots for every industry — with special expertise in regulated, document-heavy domains.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind, i) => (
              <motion.span key={ind} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors">
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INFONZA */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why <span className="text-gradient">Infonza</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">We've built copilots for enterprises, SaaS products, and regulated industries — with a focus on accuracy, security, and adoption.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_INFONZA.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 p-5 rounded-xl bg-white border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
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

      {/* BOOKING BANNER */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner heading="Ready to build your AI copilot?" subheading="Book a free 30-minute call. We'll discuss your use case, show you a live demo, and outline a realistic build plan." cta="Schedule Discovery Call" />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related AI Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {RELATED.map((s, i) => (
              <motion.div key={s.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Link href={s.href} className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
                    <s.icon className="w-4 h-4 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-teal-700 transition-colors">{s.title}</h3>
                  <p className="text-xs text-slate-500 flex-1 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-teal-600 text-xs font-semibold">
                    Learn more <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-24 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Common questions about AI copilot development.</p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection badge="Free Copilot Consultation" heading="Build Your AI Copilot With Infonza" subheading="Schedule a 30-minute session with our engineers. We'll assess your knowledge base, define the copilot scope, and show you what's achievable in 4 weeks." primaryCTA="Schedule Free Consultation" secondaryCTA="Talk to Our Team" />
      <FloatingBookingButton label="Build My Copilot" />
      <Footer />
    </>
  );
}
