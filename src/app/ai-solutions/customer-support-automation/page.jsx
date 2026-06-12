"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiSparkles,
  HiXCircle,
  HiChevronDown,
  HiShieldCheck,
  HiBolt,
  HiGlobeAlt,
  HiCpuChip,
  HiChartBar,
  HiCog6Tooth,
  HiTicket,
  HiChatBubbleLeftRight,
  HiEnvelope,
  HiUserGroup,
  HiArrowsRightLeft,
  HiBellAlert,
  HiPhone,
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
  { metric: "70%", label: "Ticket Auto-Resolution", sub: "within 60 days of launch" },
  { metric: "90%", label: "Faster Response Time", sub: "vs human-only support" },
  { metric: "24/7", label: "Coverage", sub: "no off-hours gaps" },
  { metric: "60%", label: "Cost Reduction", sub: "on total support spend" },
];

const CAPABILITIES = [
  {
    icon: HiTicket,
    title: "Ticket Automation",
    desc: "Automatically classify, prioritize, route, and resolve incoming support tickets using AI — no manual triage required. The system handles common requests end-to-end and escalates complex cases.",
  },
  {
    icon: HiChatBubbleLeftRight,
    title: "AI Live Chat",
    desc: "Deploy a context-aware AI chat agent on your website, product, and mobile app. It answers questions from your knowledge base, takes actions in your systems, and hands off to humans with full context.",
  },
  {
    icon: HiCog6Tooth,
    title: "Help Desk Automation",
    desc: "Deep integrations with Zendesk, Intercom, Freshdesk, and Jira Service Management — the AI works inside your existing help desk, not alongside it, leveraging all your existing ticket history.",
  },
  {
    icon: HiGlobeAlt,
    title: "Omnichannel Support",
    desc: "Unified AI support across web chat, email, Slack, WhatsApp, SMS, and voice — with a single knowledge base and consistent resolution quality across every channel.",
  },
  {
    icon: HiArrowsRightLeft,
    title: "Human Handoff Engine",
    desc: "Intelligent escalation with configurable triggers: low confidence score, negative sentiment, VIP customer detection, or specific topic flags. Humans receive complete conversation context before they respond.",
  },
  {
    icon: HiChartBar,
    title: "Support Analytics",
    desc: "Real-time dashboards showing resolution rates, CSAT trends, deflection savings, first-contact resolution, cost per ticket, and AI accuracy — updated every 15 minutes.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Workflow Mapping",
    desc: "We analyze 3–6 months of your historical ticket data to identify intent categories, resolution patterns, and automation candidates. We quantify potential deflection rate before building anything.",
  },
  {
    step: "02",
    title: "Knowledge Base Setup",
    desc: "We structure and embed your documentation, SOPs, product guides, and support macros into a vector knowledge base with chunking and metadata strategies optimized for high-precision retrieval.",
  },
  {
    step: "03",
    title: "AI Training & Tuning",
    desc: "We build and systematically evaluate the AI resolver against 300+ real historical tickets, tuning prompts and retrieval parameters until resolution accuracy meets agreed-upon quality thresholds.",
  },
  {
    step: "04",
    title: "Channel Integration",
    desc: "We integrate the AI into your existing support stack — Zendesk, Intercom, Freshdesk, or custom systems. Web chat widget, email ingestion, and Slack/WhatsApp channels deployed in parallel.",
  },
  {
    step: "05",
    title: "Monitoring & Continuous Improvement",
    desc: "Live monitoring dashboard with anomaly alerts. Weekly accuracy review cycles for the first 90 days — analyzing failures, expanding knowledge coverage, and refining escalation triggers.",
  },
];

const TECH = [
  { n: "OpenAI GPT-4o", c: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { n: "LangChain", c: "bg-amber-50 border-amber-200 text-amber-700" },
  { n: "Pinecone", c: "bg-teal-50 border-teal-200 text-teal-700" },
  { n: "Zendesk API", c: "bg-green-50 border-green-200 text-green-700" },
  { n: "Intercom API", c: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  { n: "FastAPI", c: "bg-sky-50 border-sky-200 text-sky-700" },
  { n: "PostgreSQL", c: "bg-blue-50 border-blue-200 text-blue-700" },
  { n: "Redis", c: "bg-rose-50 border-rose-200 text-rose-700" },
];

const PROBLEMS = [
  "Support team drowning in repetitive tickets that answer the same 20 questions",
  "Long response times during off-hours causing CSAT scores to drop",
  "Inconsistent answer quality depending on which agent handles the ticket",
  "Scaling support headcount linearly with business growth is not sustainable",
];

const INDUSTRIES = [
  { name: "SaaS", use: "Feature how-to, billing questions, account management, API support, onboarding guidance" },
  { name: "E-commerce", use: "Order status, returns and refunds, shipping inquiries, product questions, promo code issues" },
  { name: "Insurance", use: "Policy inquiries, claims status, document requests, coverage questions, payment processing" },
  { name: "Healthcare", use: "Appointment management, billing questions, prescription queries, provider information" },
  { name: "Finance", use: "Account queries, transaction disputes, product eligibility questions, KYC document requests" },
  { name: "Retail", use: "Product availability, store information, loyalty program queries, warranty claims" },
];

const WHY = [
  {
    title: "Data-Driven Scoping",
    desc: "We analyze your actual ticket history before estimating automation potential. Our deflection forecasts are based on real data, not vendor marketing averages.",
  },
  {
    title: "Help Desk Native",
    desc: "We build inside your existing Zendesk, Intercom, or Freshdesk environment — not a parallel system. Agents work the same way, just with AI handling the volume.",
  },
  {
    title: "Knowledge Base Architecture",
    desc: "We don't just dump documents into a vector store. We build structured, maintained knowledge bases with proper chunking, metadata, and retrieval evaluation.",
  },
  {
    title: "Guardrails for Support",
    desc: "Every deployment includes confidence thresholds, off-topic handling, PII detection, and topic boundary enforcement — so the AI stays accurate and appropriate.",
  },
  {
    title: "Measurable ROI",
    desc: "We track deflection rate, cost per ticket, CSAT delta, and time-to-resolution weekly. You see the ROI in your actual support metrics, not just a demo dashboard.",
  },
];

const FAQS = [
  {
    q: "What percentage of tickets can AI realistically automate?",
    a: "Based on our deployments, 60–80% of inbound ticket volume falls into categories that AI can resolve fully autonomously within 60 days of launch. The exact figure depends on your ticket mix — SaaS companies with well-documented products typically see 70%+, while industries with high regulatory complexity (financial advice, medical diagnosis) see closer to 50–60% because more inquiries require human judgment. We analyze your historical ticket data during discovery to give you a data-backed estimate before committing.",
  },
  {
    q: "How do you integrate with Zendesk and Intercom?",
    a: "We integrate via the native Zendesk and Intercom APIs — the AI operates as an agent inside your existing workspace. For Zendesk, we use the Sunshine Conversations API and Ticket API to read, draft, and resolve tickets. For Intercom, we integrate with the Conversations API. Your human agents see AI-drafted responses they can review and edit, or set the system to fully autonomous resolution with configurable human review thresholds.",
  },
  {
    q: "Does the AI learn from our historical support tickets?",
    a: "Yes — we use your historical ticket data in two ways. First, we analyze patterns to build the AI's resolution playbooks and tune escalation logic. Second, we use past ticket-answer pairs as few-shot examples in prompts where they improve accuracy. The AI doesn't fine-tune on your data (which risks overfitting and privacy issues), but it's deeply informed by your resolution patterns. Post-launch, the system improves via regular prompt refinement cycles based on production failures.",
  },
  {
    q: "How does the human handoff work in practice?",
    a: "When the AI's confidence score falls below a calibrated threshold, it detects negative sentiment signals, recognizes a VIP customer, or encounters a topic marked for human review — it escalates gracefully. The handoff message explains to the customer that a specialist will follow up, and the ticket is routed to the appropriate human agent with a complete AI-generated summary: conversation history, detected intent, attempted resolution steps, and recommended next action. The human picks up exactly where the AI left off.",
  },
  {
    q: "What does omnichannel support automation mean in practice?",
    a: "It means the same AI resolver and knowledge base answers support requests whether they come in via your website chat widget, email to support@yourcompany.com, a WhatsApp message, a Slack DM in a customer workspace, or an SMS. Each channel has its own integration adapter, but all routes through the same LLM core and knowledge retrieval layer — so you get consistent answer quality regardless of how the customer reaches out. Channel-specific response formatting is handled automatically.",
  },
  {
    q: "How quickly can we see the cost reduction impact?",
    a: "Most customers see measurable ticket deflection within the first two weeks of going live as the AI handles high-confidence, common queries. The 60% cost reduction figure is typically achieved by 90 days post-launch, once the knowledge base is well-tuned and the AI has been through several improvement cycles. The cost savings come from both direct deflection (tickets resolved without a human) and efficiency gains for human agents handling complex cases.",
  },
  {
    q: "Will our support agents feel replaced by AI?",
    a: "Our approach positions AI as a force multiplier for your support team, not a replacement. The AI handles the high-volume, repetitive queries that agents find most draining — freeing them to focus on complex problem-solving, relationship-building, and high-value customer interactions that require human empathy. In practice, support teams that adopt AI automation typically see agent satisfaction improve because the job quality gets better. We involve your support team leads in the design process to ensure the workflow fits how they work.",
  },
  {
    q: "How do you handle sensitive customer data and privacy?",
    a: "We implement several layers of data protection: PII detection and redaction before data reaches the LLM, data minimization (the AI is only passed context necessary to resolve the query), encryption at rest and in transit, and configurable data retention policies. We do not use your customer data to train OpenAI models — we use the API in business associate mode with data processing agreements. For regulated industries (healthcare, finance) we can deploy with HIPAA-compliant infrastructure and financial-grade data controls.",
  },
  {
    q: "What metrics should we use to measure success?",
    a: "We recommend tracking five core metrics: deflection rate (tickets resolved without human involvement), first-contact resolution rate, average time-to-resolution, CSAT score delta (post-AI vs pre-AI baseline), and cost per ticket. We build a live analytics dashboard that reports all five weekly, so you always have a clear picture of automation performance and can identify where additional knowledge coverage would improve results.",
  },
  {
    q: "How do you handle topics the AI shouldn't answer?",
    a: "We implement explicit topic boundary enforcement during the build phase. For every deployment we define a 'no-go list' — topics the AI should never attempt to answer and must immediately route to a human (legal threats, medical emergencies, regulatory complaints, executive escalations, etc.). These are enforced via system prompt constraints and a secondary safety classifier that catches boundary violations before responses are sent. All would-be boundary violations are logged for review.",
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
  name: "AI Customer Support Automation",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  description:
    "Automate customer support with AI — resolve 70%+ of tickets automatically, deploy omnichannel AI chat, and reduce support costs significantly with intelligent automation.",
  areaServed: "Worldwide",
  serviceType: "AI Development",
  url: "https://infonza.com/ai-solutions/customer-support-automation",
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

export default function CustomerSupportAutomationPage() {
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

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Customer Support Automation</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiTicket className="w-3.5 h-3.5" />
                AI Customer Support
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Automate Customer Support{" "}
                <span className="text-gradient">With AI</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Resolve 70%+ of support tickets automatically, deploy omnichannel AI chat across
                every customer touchpoint, and cut support costs by 60% — without degrading the
                customer experience.
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

            {/* Right — support automation visualization */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Support Automation — Live Queue</span>
                  <span className="ml-auto text-xs text-slate-500">Powered by GPT-4o</span>
                </div>
                <div className="p-4 space-y-2.5 min-h-[280px]">
                  {[
                    { id: "#84291", intent: "Order Status", status: "Resolved by AI", time: "8s", color: "teal" },
                    { id: "#84290", intent: "Refund Request", status: "Resolved by AI", time: "14s", color: "teal" },
                    { id: "#84289", intent: "Billing Dispute", status: "Escalated to human", time: "22s", color: "amber" },
                    { id: "#84288", intent: "Password Reset", status: "Resolved by AI", time: "5s", color: "teal" },
                    { id: "#84287", intent: "Feature Question", status: "Resolved by AI", time: "11s", color: "teal" },
                    { id: "#84286", intent: "Legal Complaint", status: "Escalated to human", time: "3s", color: "amber" },
                  ].map((ticket, i) => (
                    <div key={ticket.id} className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/40 border border-slate-700/60">
                      <span className="text-xs font-mono text-slate-400 w-16 flex-shrink-0">{ticket.id}</span>
                      <span className="text-xs text-slate-200 flex-1">{ticket.intent}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${
                        ticket.color === "teal"
                          ? "bg-teal-900/40 border-teal-700/40 text-teal-400"
                          : "bg-amber-900/40 border-amber-700/40 text-amber-400"
                      }`}>
                        {ticket.status}
                      </span>
                      <span className="text-xs text-slate-500 w-8 text-right flex-shrink-0">{ticket.time}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Today: 847 tickets processed</span>
                  <span className="text-xs text-teal-400">72% resolved by AI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {METRICS.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">{r.metric}</div>
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
                Why Traditional Support Doesn't Scale
              </h2>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Hiring more agents to handle more tickets is a losing equation. Support headcount
                grows linearly while ticket volume compounds — and quality degrades as agents burn
                out on repetitive queries.
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
              <h3 className="font-bold text-slate-900 mb-4 text-lg">The AI-First Approach</h3>
              <div className="space-y-3">
                {[
                  "AI resolves 70%+ of tickets autonomously using your documentation and past resolutions",
                  "Human agents focus on complex, high-value cases — not password resets and order status",
                  "Consistent answer quality across every ticket, every channel, every time zone",
                  "Support capacity scales instantly with volume — no hiring lag, no shift gaps",
                  "Full audit trail and quality monitoring so you can continuously improve resolution accuracy",
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

      {/* ── CAPABILITIES ── */}
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
              Everything You Need for{" "}
              <span className="text-gradient">AI Support</span> Automation
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six production-ready capabilities that cover the full support automation stack.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((f, i) => (
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
              How We Automate Your <span className="text-gradient">Support Operations</span>
            </h2>
            <p className="text-slate-400">From ticket analysis to live omnichannel deployment in 6–10 weeks.</p>
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
            {TECH.map(({ n, c }) => (
              <span key={n} className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold ${c}`}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              AI Support Automation by <span className="text-gradient">Industry</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We build support automation for the specific ticket types, terminology, and compliance requirements of each industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-200 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                  <HiCheckCircle className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-0.5">{ind.name}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{ind.use}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INFONZA ── */}
      <section className="bg-slate-50 py-16 lg:py-20 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Why Support Teams Choose <span className="text-gradient">Infonza</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <HiCheckCircle className="w-6 h-6 text-teal-500 mb-3" />
                <h3 className="font-bold text-slate-900 text-sm mb-2">{w.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Find out how many tickets AI can handle for your team"
            subheading="We analyze your ticket history for free and give you a realistic deflection forecast — before any commitment."
            cta="Get Free Ticket Analysis"
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
                title: "AI Chatbot Development",
                desc: "Custom RAG-powered chatbots for customer support, sales, and internal help desks — multi-channel, with human handoff.",
                href: "/ai-development/ai-chatbot-development",
                icon: HiChatBubbleLeftRight,
              },
              {
                title: "AI Voice Agents",
                desc: "Extend support automation to phone channels — AI voice agents that handle inbound support calls 24/7.",
                href: "/ai-solutions/ai-voice-agents",
                icon: HiPhone,
              },
              {
                title: "AI Email Automation",
                desc: "Automate email-based support — AI that reads, categorizes, drafts, and sends support responses via email.",
                href: "/ai-development/ai-workflow-automation",
                icon: HiEnvelope,
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
              Practical answers about AI customer support automation from our engineers.
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
        badge="Free Support Automation Consultation"
        heading="Cut Support Costs by 60% With AI"
        subheading="Talk to our support automation engineers. We'll analyze your ticket volume, identify automation candidates, and scope a deployment that delivers measurable ROI within 90 days."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to a Support AI Engineer"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
