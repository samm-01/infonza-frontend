"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiSparkles,
  HiBolt,
  HiChevronDown,
  HiDocumentText,
  HiEnvelope,
  HiClipboardDocumentCheck,
  HiTableCells,
  HiCpuChip,
  HiShieldCheck,
  HiChartBar,
  HiCog6Tooth,
  HiRocketLaunch,
  HiCircleStack,
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

const USE_CASES = [
  {
    icon: HiDocumentText,
    title: "Intelligent Document Processing",
    desc: "Extract structured data from invoices, contracts, forms, and reports — with 98%+ accuracy. Handles handwritten text, scanned PDFs, and non-standard formats that rules-based OCR cannot.",
    metric: "95% time reduction vs manual extraction",
  },
  {
    icon: HiEnvelope,
    title: "Email Triage & Routing",
    desc: "Classify incoming email by intent, urgency, and department. Auto-draft responses for common requests. Escalate complex cases. Your team only handles what genuinely needs human judgment.",
    metric: "80% of emails handled autonomously",
  },
  {
    icon: HiClipboardDocumentCheck,
    title: "AI-Powered Approval Flows",
    desc: "Replace static rules with AI that evaluates approval criteria contextually — purchase orders, expense reports, contract reviews. Flags anomalies and routes for exception handling automatically.",
    metric: "60% faster approval cycle times",
  },
  {
    icon: HiTableCells,
    title: "Data Extraction & Enrichment",
    desc: "Pull data from unstructured sources — PDFs, web pages, emails, spreadsheets — and push clean, structured records into your CRM, ERP, or data warehouse in real time.",
    metric: "10× throughput vs manual data entry",
  },
  {
    icon: HiCpuChip,
    title: "AI Quality Assurance",
    desc: "Automated QA workflows that review code, content, reports, and customer-facing outputs against your standards. Catches defects, inconsistencies, and policy violations before they reach customers.",
    metric: "70% defect catch rate pre-release",
  },
  {
    icon: HiCog6Tooth,
    title: "Process Orchestration",
    desc: "Multi-step AI agents that chain together discrete tasks — read a document, enrich from an API, apply a business rule, write to a database, send a notification — without human intervention.",
    metric: "End-to-end workflows in minutes, not days",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Process Audit & ROI Mapping",
    desc: "We interview your team, observe your workflows, and identify the 5–10 processes with the highest automation ROI. We prioritize by volume × time × error rate.",
  },
  {
    step: "02",
    title: "AI Architecture Design",
    desc: "We design the automation pipeline — choosing between rule-based extraction, LLM-based reasoning, or hybrid approaches depending on the variability and complexity of each process.",
  },
  {
    step: "03",
    title: "Build & Evaluation",
    desc: "We build automation modules with built-in evaluation against historical samples. Every module ships with an accuracy baseline and regression test suite.",
  },
  {
    step: "04",
    title: "Integration with Existing Systems",
    desc: "We connect to your existing ERP, CRM, document management, and communication tools via APIs, webhooks, and RPA where native APIs are absent.",
  },
  {
    step: "05",
    title: "Monitoring & Continuous Improvement",
    desc: "Real-time dashboards with exception rates, throughput, and accuracy metrics. Monthly model reviews to handle distribution shift as your documents and processes evolve.",
  },
];

const RESULTS = [
  { metric: "80%", label: "Time saved on repetitive tasks", sub: "measured across 40+ client deployments" },
  { metric: "60%", label: "Error rate reduction", sub: "vs manual processing benchmarks" },
  { metric: "5×", label: "Throughput increase", sub: "same headcount, dramatically higher output" },
];

const TECH_STACK = [
  { n: "Python", c: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { n: "LangChain", c: "bg-violet-100 text-violet-800 border-violet-200" },
  { n: "GPT-4o", c: "bg-green-100 text-green-800 border-green-200" },
  { n: "Apache Airflow", c: "bg-blue-100 text-blue-800 border-blue-200" },
  { n: "FastAPI", c: "bg-teal-100 text-teal-800 border-teal-200" },
  { n: "AWS Textract", c: "bg-orange-100 text-orange-800 border-orange-200" },
  { n: "Azure Document Intelligence", c: "bg-sky-100 text-sky-800 border-sky-200" },
  { n: "Celery + Redis", c: "bg-rose-100 text-rose-800 border-rose-200" },
  { n: "PostgreSQL", c: "bg-indigo-100 text-indigo-800 border-indigo-200" },
];

const FAQS = [
  {
    q: "Which business processes are the best candidates for AI automation?",
    a: "The best candidates have three characteristics: high volume (done repeatedly), rule-governed (a human could explain the logic), and currently time-consuming or error-prone. Document processing (invoices, contracts), email classification and routing, data extraction from unstructured sources, and multi-step approval workflows are our most common starting points. We'll do a free process audit to identify your highest-ROI opportunities.",
  },
  {
    q: "How accurate is AI document processing compared to manual review?",
    a: "Our document processing pipelines achieve 95–99% accuracy on well-typed documents and 88–95% on scanned or handwritten content — with human-in-the-loop review for low-confidence extractions. This compares favorably to manual processing accuracy of ~95% (human error is real). Critically, AI processing runs at 100× speed and never has a bad day.",
  },
  {
    q: "How do you handle exceptions and edge cases the AI can't process?",
    a: "Every automation we build has explicit exception handling and human-in-the-loop escalation. Confidence scores below a calibrated threshold route to a human review queue with the AI's best attempt pre-filled. Reviewers correct and confirm — and those corrections feed back into model improvement. The exception rate typically drops from 15% in week one to under 3% by month three.",
  },
  {
    q: "Can you integrate with our legacy systems that don't have APIs?",
    a: "Yes. For systems without REST APIs, we use RPA (Robotic Process Automation) bridges combined with AI decision-making. We've successfully automated workflows in legacy Java ERP systems, old AS/400 platforms, and proprietary internal tools with only UI-level access. It's slower than native API integration, but very achievable.",
  },
  {
    q: "What's the typical ROI timeline for AI workflow automation?",
    a: "Most clients achieve positive ROI within 3–6 months of launch. A typical document processing project replaces 2–3 FTEs of manual work, providing $150,000–$300,000 in annual labor savings against a one-time development cost of $40,000–$100,000. We can model your specific ROI during the discovery call.",
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

export default function AIWorkflowAutomationPage() {
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
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-development" className="hover:text-teal-400 transition-colors">AI Development</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">AI Workflow Automation</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700/40 rounded-full px-4 py-1.5 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiBolt className="w-3.5 h-3.5" />
                AI Workflow Automation Services
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                <span className="text-gradient">AI Workflow</span> Automation
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Eliminate repetitive manual work with intelligent automation — document
                processing, email triage, approval flows, and data extraction that run
                autonomously at enterprise scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Get Free Process Audit <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  See Automation Case Studies
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

            {/* Right — Automation pipeline visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-semibold text-slate-200">Invoice Processing Pipeline</span>
                  <span className="text-xs text-green-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Processing 847 docs/hr
                  </span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Document Ingestion", status: "complete", time: "0.2s", color: "text-green-400 bg-green-400/10 border-green-400/20" },
                    { label: "OCR + Layout Analysis", status: "complete", time: "1.1s", color: "text-green-400 bg-green-400/10 border-green-400/20" },
                    { label: "LLM Field Extraction", status: "complete", time: "0.8s", color: "text-green-400 bg-green-400/10 border-green-400/20" },
                    { label: "Confidence Check (0.97)", status: "complete", time: "0.0s", color: "text-green-400 bg-green-400/10 border-green-400/20" },
                    { label: "ERP Record Write", status: "running", time: "—", color: "text-teal-400 bg-teal-400/10 border-teal-400/20" },
                    { label: "Approval Trigger", status: "queued", time: "—", color: "text-slate-400 bg-slate-700/40 border-slate-600/30" },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg border text-xs font-mono ${step.color}`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${step.status === "running" ? "animate-pulse" : ""} ${step.status === "complete" ? "bg-green-400" : step.status === "running" ? "bg-teal-400" : "bg-slate-600"}`} />
                        {step.label}
                      </div>
                      <span className="opacity-60">{step.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Accuracy: 98.3%</span>
                  <span>Exception rate: 1.7%</span>
                  <span>Saved today: 12.4 hrs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
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
              AI Automation{" "}
              <span className="text-gradient">Use Cases</span> We Deliver
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six high-impact workflow categories that our clients automate first — each
              with measurable ROI within the first quarter.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4">
                  <u.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{u.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{u.desc}</p>
                <div className="px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold">
                  {u.metric}
                </div>
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
              Our <span className="text-gradient">Automation</span> Delivery Process
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              From process audit to live automation — typically 6–12 weeks depending on complexity.
            </p>
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
          <h3 className="text-lg font-bold text-slate-900 mb-5">Automation Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {TECH_STACK.map(({ n, c }) => (
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
            heading="Find out which of your workflows should be automated first"
            subheading="Free 30-minute process audit with our automation team — we'll identify your top 3 ROI opportunities."
            cta="Book Free Process Audit"
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
                desc: "Pair automation with conversational AI — bots that trigger and interact with your automated workflows.",
                href: "/ai-development/ai-chatbot-development",
                icon: HiRocketLaunch,
              },
              {
                title: "Document Workflow Automation",
                desc: "Specialized document management and workflow automation for structured document operations.",
                href: "/document-management-system/document-workflow-automation",
                icon: HiDocumentText,
              },
              {
                title: "SaaS Development",
                desc: "Embed AI automation capabilities into a SaaS product — build the automation platform, not just run it.",
                href: "/saas-development",
                icon: HiCircleStack,
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
                    <s.icon className="w-4 h-4 text-teal-600" />
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
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500">Honest answers about AI workflow automation from our engineering team.</p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((f, i) => <FAQItem key={i} {...f} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Free Automation Consultation"
        heading="Start Automating Your Most Costly Manual Workflows"
        subheading="30-minute discovery call with our automation engineers. We'll review your top workflows, assess technical feasibility, and build a business case for your most impactful automation opportunity."
        primaryCTA="Book Free Process Audit"
        secondaryCTA="Talk to Automation Team"
      />

      <FloatingBookingButton label="Book Audit" />
      <Footer />
    </>
  );
}
