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
  HiShieldCheck,
  HiChatBubbleLeftRight,
  HiBolt,
  HiRocketLaunch,
  HiCog6Tooth,
  HiChartBar,
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

const INTEGRATION_TYPES = [
  {
    icon: HiChatBubbleLeftRight,
    title: "Chat Completions API",
    desc: "Full-stack GPT-4o integration with streaming responses, conversation memory management, system prompt engineering, and multi-turn context optimization.",
    badge: "Core Integration",
  },
  {
    icon: HiCog6Tooth,
    title: "Function Calling & Tool Use",
    desc: "Wire GPT-4 to your business logic — database queries, API calls, CRM updates, and workflow triggers. The model decides when and how to use each tool intelligently.",
    badge: "Most Requested",
  },
  {
    icon: HiCircleStack,
    title: "Embeddings & Semantic Search",
    desc: "text-embedding-3-large powered semantic search across your documents, products, or knowledge base — with vector storage in Pinecone, Weaviate, or pgvector.",
    badge: null,
  },
  {
    icon: HiCpuChip,
    title: "Fine-Tuning Services",
    desc: "Domain-specific GPT-4o-mini fine-tuning on your proprietary data. Faster inference, lower cost, and dramatically better accuracy on your specific use cases.",
    badge: null,
  },
  {
    icon: HiRocketLaunch,
    title: "Assistants API & Threads",
    desc: "Persistent AI assistants with long-context memory, file retrieval, code interpreter, and tool calling — fully managed thread state without custom infrastructure.",
    badge: "New",
  },
  {
    icon: HiCodeBracket,
    title: "Vision & Multimodal",
    desc: "GPT-4o vision integration for document analysis, image understanding, OCR enhancement, and multimodal chat interfaces that reason about images and text together.",
    badge: null,
  },
];

const INTEGRATION_STEPS = [
  {
    step: "01",
    title: "API Architecture Design",
    desc: "We design the integration architecture — choosing endpoints, managing context windows, handling streaming, error recovery, and rate limiting from the start.",
    time: "Week 1",
  },
  {
    step: "02",
    title: "Prompt Engineering & Optimization",
    desc: "Systematic prompt development with evaluation datasets. We test against your actual use cases, not synthetic examples — and document every design decision.",
    time: "Week 1–2",
  },
  {
    step: "03",
    title: "Backend Integration",
    desc: "Secure server-side OpenAI integration with API key management, request validation, caching layers, and monitoring hooks. Never exposing keys client-side.",
    time: "Week 2",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "LLM-specific QA: adversarial inputs, prompt injection tests, edge case coverage, latency benchmarking, and cost per request analysis.",
    time: "Week 2–3",
  },
  {
    step: "05",
    title: "Production Deployment",
    desc: "Zero-downtime deployment with real-time monitoring, cost dashboards, quality metrics, and automatic fallback to fine-tuned models if API latency spikes.",
    time: "Week 3–4",
  },
];

const RESULTS = [
  { metric: "2 weeks", label: "Standard integration timeline", sub: "from kickoff to production for API integrations" },
  { metric: "40%", label: "Support cost reduction", sub: "typical outcome for AI-assisted support workflows" },
  { metric: "99.5%", label: "API uptime achieved", sub: "with redundancy and fallback routing" },
];

const TECH_STACK = [
  { n: "GPT-4o", c: "bg-green-100 text-green-800 border-green-200" },
  { n: "GPT-4o-mini", c: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  { n: "text-embedding-3-large", c: "bg-blue-100 text-blue-800 border-blue-200" },
  { n: "Whisper", c: "bg-slate-100 text-slate-800 border-slate-200" },
  { n: "Pinecone", c: "bg-teal-100 text-teal-800 border-teal-200" },
  { n: "FastAPI", c: "bg-sky-100 text-sky-800 border-sky-200" },
  { n: "Next.js", c: "bg-slate-100 text-slate-800 border-slate-200" },
  { n: "Redis", c: "bg-rose-100 text-rose-800 border-rose-200" },
  { n: "PostgreSQL + pgvector", c: "bg-indigo-100 text-indigo-800 border-indigo-200" },
];

const WHAT_WE_HANDLE = [
  "Secure API key management and rotation (never client-side exposure)",
  "Rate limiting, retry logic, and exponential backoff implementation",
  "Streaming response handling with partial content rendering",
  "Token budget management across multi-turn conversations",
  "Prompt injection prevention and input sanitization",
  "Cost monitoring and per-user/per-feature budget enforcement",
  "Model fallback routing when primary models are unavailable",
  "A/B testing infrastructure for prompt and model comparison",
];

const FAQS = [
  {
    q: "How is your OpenAI integration service different from just using the OpenAI API ourselves?",
    a: "The OpenAI API is straightforward to call, but production-grade integration involves dozens of engineering decisions that directly impact reliability, security, cost, and user experience. These include: secure key management, proper streaming implementation, context window optimization, rate limit handling, cost monitoring, prompt injection prevention, model fallback strategies, and evaluation frameworks. We've solved all of these for 50+ OpenAI integrations — you get proven patterns, not trial and error.",
  },
  {
    q: "When should we fine-tune vs use prompt engineering?",
    a: "Prompt engineering is right for most use cases — it's faster, cheaper to iterate, and works well when the task is well-defined and the model's base capabilities are sufficient. Fine-tuning is warranted when you need consistent style across hundreds of outputs, domain-specific terminology the model doesn't know, significantly shorter prompts to reduce cost at scale, or behavior that's hard to achieve reliably with prompting alone. We typically start with prompt engineering and recommend fine-tuning once volume or accuracy requirements justify it.",
  },
  {
    q: "How do you handle OpenAI API costs at enterprise scale?",
    a: "OpenAI API costs can compound quickly at scale. We implement semantic caching (returning cached responses for semantically similar queries — typically catching 20–40% of traffic), intelligent model routing (GPT-4o-mini for simple tasks, GPT-4o for complex reasoning), prompt compression, context window right-sizing, and per-feature cost budgets with automatic throttling. These optimizations typically reduce API spend by 40–65% vs naive implementations.",
  },
  {
    q: "Can you integrate OpenAI into our existing application without a rewrite?",
    a: "Almost always yes. We specialize in additive AI integration — adding OpenAI capabilities to existing React, Vue, Angular, Next.js, Django, Rails, Laravel, and Spring Boot applications without disrupting your existing architecture. We design API gateway layers and backend services that integrate cleanly with your current infrastructure.",
  },
  {
    q: "How do you ensure our OpenAI integration is secure?",
    a: "Security is built in from the start. API keys are stored in secrets management systems (AWS Secrets Manager, HashiCorp Vault) and rotated regularly — never hardcoded or exposed client-side. All OpenAI API calls are proxied through your backend. We implement input sanitization to prevent prompt injection, output filtering for sensitive data, and audit logging of all AI interactions. For regulated industries, we can deploy with Azure OpenAI in your own subscription for data residency compliance.",
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

export default function OpenAIIntegrationServicesPage() {
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
        <div className="absolute -top-10 right-0 w-[600px] h-[400px] bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-development" className="hover:text-teal-400 transition-colors">AI Development</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">OpenAI Integration Services</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-green-900/60 border border-green-700/40 rounded-full px-4 py-1.5 text-green-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiSparkles className="w-3.5 h-3.5" />
                OpenAI Integration Services
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                <span className="text-gradient">OpenAI & ChatGPT</span> Integration Services
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Production-grade GPT-4 API integration into your existing product —
                function calling, fine-tuning, embeddings, and Assistants API wired
                securely into your stack in as little as two weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Start Your Integration <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  View Case Studies
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                {RESULTS.map((r) => (
                  <div key={r.label}>
                    <div className="text-2xl font-bold text-gradient">{r.metric}</div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-tight">{r.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — API integration visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-slate-200">OpenAI Integration — Live</span>
                  <span className="ml-auto text-xs font-mono text-slate-500">gpt-4o</span>
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-slate-900/70 rounded-lg p-3 border border-slate-700/40">
                    <span className="text-green-400">POST</span>{" "}
                    <span className="text-slate-300">/api/ai/complete</span>
                    <div className="mt-2 text-slate-500">
                      {"{"}<br />
                      &nbsp;&nbsp;<span className="text-blue-300">"messages"</span>: [...],<br />
                      &nbsp;&nbsp;<span className="text-blue-300">"tools"</span>: [get_order, update_crm],<br />
                      &nbsp;&nbsp;<span className="text-blue-300">"stream"</span>: true<br />
                      {"}"}
                    </div>
                  </div>
                  <div className="flex gap-2 text-slate-400 items-center">
                    <div className="flex-1 h-px bg-slate-700/60" />
                    <span>function call detected</span>
                    <div className="flex-1 h-px bg-slate-700/60" />
                  </div>
                  <div className="bg-slate-700/40 rounded-lg p-3 border border-slate-600/30">
                    <span className="text-teal-400">{"→"} Tool: get_order</span>
                    <div className="text-slate-400 mt-1">
                      order_id: <span className="text-yellow-300">ORD-8821</span>
                    </div>
                    <div className="text-green-400 mt-1">{"✓"} returned: {"{status: shipped, eta: Jun 3}"}</div>
                  </div>
                  <div className="bg-slate-900/70 rounded-lg p-3 border border-slate-700/40">
                    <span className="text-slate-400">Response streamed:</span>
                    <p className="text-slate-200 mt-1 leading-relaxed">
                      "Your order #ORD-8821 has shipped and is estimated to arrive by June 3rd..."
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>Latency: 312ms</span>
                  <span>Tokens: 487</span>
                  <span>Cost: $0.0038</span>
                  <span className="text-green-400">● Cached</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATION TYPES ── */}
      <section className="bg-dots bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              OpenAI Integration <span className="text-gradient">Services We Deliver</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six integration patterns — each production-hardened across dozens of enterprise deployments.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATION_TYPES.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl transition-all"
              >
                {t.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
                    {t.badge}
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center mb-4">
                  <t.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE HANDLE ── */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Production Details <span className="text-gradient">We Own End-to-End</span>
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              The engineering decisions that separate a working demo from a reliable production system.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-3">
            {WHAT_WE_HANDLE.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-xl"
              >
                <HiCheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              How We Deliver <span className="text-gradient">OpenAI Integrations</span>
            </h2>
            <p className="text-slate-400">Standard integrations live in 2–4 weeks.</p>
          </motion.div>
          <div className="space-y-4">
            {INTEGRATION_STEPS.map((s, i) => (
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
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white text-sm">{s.title}</h3>
                    <span className="text-xs text-teal-400 font-mono">{s.time}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ── */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {TECH_STACK.map(({ n, c }) => (
              <span key={n} className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold ${c}`}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Ready to add GPT-4 to your product?"
            subheading="Free 30-minute technical scoping call — we'll outline the integration architecture and give you a timeline."
            cta="Book Free Integration Scoping"
          />
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "AI Chatbot Development",
                desc: "Build a full-featured AI chatbot using GPT-4 — with RAG, multi-channel deployment, and human handoff.",
                href: "/ai-development/ai-chatbot-development",
                icon: HiChatBubbleLeftRight,
              },
              {
                title: "Generative AI Development",
                desc: "Beyond chat — full-scale GenAI applications with fine-tuning, quality evaluation, and content pipelines.",
                href: "/ai-development/generative-ai-development",
                icon: HiSparkles,
              },
              {
                title: "CRM SaaS Development",
                desc: "Build an AI-powered CRM SaaS with GPT-4 insights, intelligent lead scoring, and automated follow-ups.",
                href: "/saas-development/crm-saas-development",
                icon: HiChartBar,
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
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-3">
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

      {/* ── FAQ ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500">Honest technical answers from our OpenAI integration engineers.</p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((f, i) => <FAQItem key={i} {...f} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Free Integration Consultation"
        heading="Integrate OpenAI Into Your Product — In Two Weeks"
        subheading="Schedule a free technical scoping call with our OpenAI integration engineers. We'll review your existing stack, outline the integration architecture, and give you a fixed timeline."
        primaryCTA="Start Integration Scoping"
        secondaryCTA="Talk to Our Engineers"
      />

      <FloatingBookingButton label="Start Integration" />
      <Footer />
    </>
  );
}
