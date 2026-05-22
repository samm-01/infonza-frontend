"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiSparkles,
  HiChatBubbleLeftRight,
  HiXCircle,
  HiChevronDown,
  HiShieldCheck,
  HiBolt,
  HiGlobeAlt,
  HiCpuChip,
  HiChartBar,
  HiCog6Tooth,
  HiDevicePhoneMobile,
  HiUserGroup,
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

const FEATURES = [
  {
    icon: HiCpuChip,
    title: "GPT-4 & LangChain Core",
    desc: "Built on the latest GPT-4o models with LangChain orchestration for reliable, multi-step reasoning and tool use.",
  },
  {
    icon: HiSparkles,
    title: "RAG-Powered Knowledge Base",
    desc: "Embed your documentation, SOPs, and product data into a vector store. The bot answers from your proprietary knowledge, not generic training data.",
  },
  {
    icon: HiGlobeAlt,
    title: "Multi-Channel Deployment",
    desc: "One build, deployed everywhere — web widget, Slack, Teams, WhatsApp, Zendesk, Intercom, and custom API endpoints.",
  },
  {
    icon: HiUserGroup,
    title: "Human Handoff Engine",
    desc: "Intelligent escalation with full conversation context transfer to human agents. Configurable triggers: sentiment, topic, confidence score.",
  },
  {
    icon: HiChartBar,
    title: "Analytics & Quality Monitoring",
    desc: "Real-time dashboards tracking resolution rates, CSAT, latency, hallucination flags, and conversation quality scores.",
  },
  {
    icon: HiShieldCheck,
    title: "Guardrails & Compliance",
    desc: "PII detection, toxicity filtering, off-topic deflection, and audit logging built in — critical for regulated industries.",
  },
  {
    icon: HiCog6Tooth,
    title: "Tool & API Calling",
    desc: "Your chatbot can query your CRM, check order status, update tickets, and run business logic via function calling — not just answer questions.",
  },
  {
    icon: HiDevicePhoneMobile,
    title: "Voice-Ready Architecture",
    desc: "Optionally extend to voice channels via Twilio + Whisper STT integration. The same LLM core powers both text and voice.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Use Case Scoping",
    desc: "We map your top support and sales workflows, identify the 20% of intents that handle 80% of volume, and define success metrics before writing a line of code.",
  },
  {
    step: "02",
    title: "Data & Knowledge Preparation",
    desc: "We ingest your documentation, FAQs, product catalogs, and internal wikis — cleaning, chunking, and embedding into a structured vector store optimized for retrieval accuracy.",
  },
  {
    step: "03",
    title: "Bot Build & Prompt Engineering",
    desc: "Systematic prompt development with evaluation harnesses. We test against 200+ real conversation samples before any user sees the bot.",
  },
  {
    step: "04",
    title: "Integration & Channel Setup",
    desc: "Wire the bot into your existing channels and back-end systems. API integrations for CRM, helpdesk, and e-commerce platforms handled by our team.",
  },
  {
    step: "05",
    title: "Launch, Monitor & Improve",
    desc: "Staged rollout (5% → 25% → 100% traffic). Weekly model improvement cycles based on conversation analytics in the first 90 days.",
  },
];

const RESULTS = [
  { metric: "70%", label: "Ticket deflection", sub: "within 60 days of launch" },
  { metric: "3 min", label: "Avg resolution time", sub: "vs 18 min human-handled" },
  { metric: "99.9%", label: "Uptime SLA", sub: "across all channels" },
];

const PROBLEMS = [
  "Generic chatbots give wrong answers because they're not trained on your data",
  "Rule-based bots break on any question that wasn't pre-scripted",
  "Customers abandon after one bad answer — damaging trust permanently",
  "Support teams waste hours on repetitive queries that AI should handle",
];

const FAQS = [
  {
    q: "How is your AI chatbot different from tools like Intercom Fin or Drift AI?",
    a: "Off-the-shelf AI chatbots use generic LLMs with basic document ingestion. We build custom RAG pipelines with re-ranking, hallucination guardrails, and domain-specific prompt engineering tuned to your exact use cases. The result is significantly higher accuracy on your specific topics, proper handling of edge cases, and integrations with your internal systems that SaaS tools can't touch.",
  },
  {
    q: "How long does it take to build and launch?",
    a: "A production-ready AI chatbot typically ships in 6–10 weeks: 2 weeks for data prep and architecture, 3 weeks for core build and prompt engineering, 2 weeks for integrations and testing, 1 week for staged rollout. Complex multi-channel deployments or heavy CRM integrations may extend the timeline.",
  },
  {
    q: "What happens when the bot doesn't know the answer?",
    a: "We design explicit escalation paths — the bot recognizes when it's out-of-scope, communicates that clearly to the user, and routes to a human agent with full conversation context. We also flag low-confidence responses for manual review in the analytics dashboard so you can continuously improve coverage.",
  },
  {
    q: "Can the chatbot integrate with our existing Zendesk / Salesforce?",
    a: "Yes. We routinely integrate with Zendesk, Salesforce Service Cloud, Freshdesk, HubSpot, and custom ticketing systems via API. The bot can read ticket history, create new cases, update CRM records, and trigger workflow automations — all in real time during the conversation.",
  },
  {
    q: "How do you ensure the bot doesn't hallucinate or give dangerous answers?",
    a: "We implement multiple guardrail layers: retrieval confidence thresholds (the bot only answers when retrieval score exceeds a calibrated threshold), factual grounding checks that validate responses against source chunks, PII scrubbing, and topic boundary enforcement. Critical domains (medical, legal, financial) get additional constraint prompting.",
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

export default function AIChatbotDevelopmentPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-development" className="hover:text-teal-400 transition-colors">AI Development</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">AI Chatbot Development</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiChatBubbleLeftRight className="w-3.5 h-3.5" />
                AI Chatbot Development Services
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                AI Chatbot{" "}
                <span className="text-gradient">Development</span> Services
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Enterprise-grade AI chatbots powered by GPT-4 and LangChain — with
                RAG-grounded knowledge bases, multi-channel deployment, and measurable
                business outcomes from day one.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Schedule Free Consultation <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            {/* Right — chat simulation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Infonza AI Assistant</span>
                  <span className="ml-auto text-xs text-slate-500">Powered by GPT-4 + RAG</span>
                </div>
                <div className="p-5 space-y-4 min-h-[280px]">
                  {[
                    { role: "user", msg: "What's the refund policy for enterprise licenses?" },
                    { role: "bot", msg: "Enterprise licenses include a 30-day satisfaction guarantee. Refunds are processed within 5–7 business days and prorated for annual plans. Based on your account (ID: ENT-4821), you're on the Platinum tier — I can initiate a refund request right now if you'd like." },
                    { role: "user", msg: "Yes please, go ahead." },
                    { role: "bot", msg: "Done — refund request #RF-20941 created and routed to billing. You'll receive a confirmation email within 15 minutes. Is there anything else I can help with?" },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                          m.role === "user"
                            ? "bg-teal-600 text-white rounded-br-sm"
                            : "bg-slate-700/80 text-slate-200 rounded-bl-sm"
                        }`}
                      >
                        {m.msg}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-700/60 flex gap-2">
                  <div className="flex-1 bg-slate-700/60 rounded-xl px-4 py-2 text-sm text-slate-500">
                    Type a message…
                  </div>
                  <button className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center">
                    <HiArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {RESULTS.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold text-gradient mb-1">{r.metric}</div>
                <div className="font-semibold text-slate-900 text-sm">{r.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{r.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Why Generic Chatbots Fail Enterprise Requirements
              </h2>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Off-the-shelf chatbot tools are built for demos, not production. They look
                impressive until a customer asks something real. Then they fail — and
                customers remember.
              </p>
              <div className="space-y-3">
                {PROBLEMS.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <HiXCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm leading-relaxed">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6"
            >
              <h3 className="font-bold text-slate-900 mb-4 text-lg">The Infonza Approach</h3>
              <div className="space-y-3">
                {[
                  "RAG grounding on your proprietary documentation and data",
                  "Domain-tuned prompt engineering with evaluation harnesses",
                  "Multi-layer guardrails: confidence thresholds, topic boundaries, PII filtering",
                  "Real integrations with your CRM, helpdesk, and internal APIs",
                  "Continuous improvement loop — weekly accuracy reviews for 90 days post-launch",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
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
              Everything Your Enterprise{" "}
              <span className="text-gradient">Chatbot</span> Needs
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Eight production-grade capabilities built into every chatbot we ship.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="relative bg-slate-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              How We Build Your <span className="text-gradient">AI Chatbot</span>
            </h2>
            <p className="text-slate-400">From kickoff to live in 6–10 weeks.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-teal-700/60 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs font-mono">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              { n: "GPT-4o", c: "bg-green-100 text-green-800 border-green-200" },
              { n: "LangChain", c: "bg-violet-100 text-violet-800 border-violet-200" },
              { n: "Pinecone", c: "bg-teal-100 text-teal-800 border-teal-200" },
              { n: "FastAPI", c: "bg-blue-100 text-blue-800 border-blue-200" },
              { n: "React", c: "bg-sky-100 text-sky-800 border-sky-200" },
              { n: "Weaviate", c: "bg-indigo-100 text-indigo-800 border-indigo-200" },
              { n: "Redis", c: "bg-rose-100 text-rose-800 border-rose-200" },
              { n: "Twilio", c: "bg-red-100 text-red-800 border-red-200" },
              { n: "AWS Lambda", c: "bg-orange-100 text-orange-800 border-orange-200" },
            ].map(({ n, c }) => (
              <span key={n} className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold ${c}`}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Ready to build your enterprise AI chatbot?"
            subheading="Get a free technical assessment of your chatbot use case from a senior AI engineer."
            cta="Schedule Free Assessment"
          />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "RAG Development Services",
                desc: "Build the retrieval backbone that powers accurate, hallucination-free chatbot responses.",
                href: "/ai-development/rag-development-services",
                icon: HiRocketLaunch,
              },
              {
                title: "AI Workflow Automation",
                desc: "Extend your chatbot into end-to-end automation — trigger workflows from conversations.",
                href: "/ai-development/ai-workflow-automation",
                icon: HiBolt,
              },
              {
                title: "Insurance Automation Solutions",
                desc: "AI chatbots purpose-built for insurance — FNOL intake, policy Q&A, claims status.",
                href: "/insurance-software-development/insurance-automation-solutions",
                icon: HiShieldCheck,
              },
            ].map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
                    <s.icon className="w-4.5 h-4.5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-teal-700 transition-colors">
                    {s.title}
                  </h3>
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

      {/* ── FAQ ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Technical questions answered honestly by our AI chatbot engineers.
            </p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <FAQItem key={i} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Free Chatbot Consultation"
        heading="Build an AI Chatbot That Actually Works"
        subheading="Schedule a 30-minute session with our AI chatbot engineers. We'll assess your use case, outline the architecture, and give you a realistic scope — before you commit to anything."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to an AI Engineer"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
