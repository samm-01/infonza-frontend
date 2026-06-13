"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiChevronDown,
  HiBolt,
  HiCpuChip,
  HiChartBar,
  HiCircleStack,
  HiCog6Tooth,
  HiUserGroup,
  HiDocumentText,
  HiArrowPathRoundedSquare,
  HiShieldCheck,
  HiBuildingOffice2,
  HiCurrencyDollar,
  HiClipboardDocumentList,
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
  { metric: "70%", label: "Reduction in Manual Tasks", sub: "across automated departments" },
  { metric: "10×", label: "Process Speed", sub: "vs manual human execution" },
  { metric: "Cross-Dept", label: "Automation", sub: "HR, finance, ops, procurement" },
  { metric: "90 Days", label: "ROI in", sub: "measurable savings from go-live" },
];

const CAPABILITIES = [
  {
    icon: HiCog6Tooth,
    title: "Workflow Automation",
    desc: "End-to-end automation of multi-step business workflows — from trigger event through every approval, notification, data transformation, and system update — without manual handoffs between steps or teams.",
  },
  {
    icon: HiUserGroup,
    title: "HR Process Automation",
    desc: "Automate the entire employee lifecycle: job posting distribution, CV screening and scoring, interview scheduling, onboarding document generation, benefits enrollment workflows, and offboarding checklists.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Finance & Accounting Automation",
    desc: "Invoice processing, three-way matching, expense report review, payment runs, monthly close checklists, budget variance alerts, and financial report generation — all executed by AI with full audit trails.",
  },
  {
    icon: HiBuildingOffice2,
    title: "Operations Automation",
    desc: "Supply chain exception handling, vendor communication workflows, inventory threshold alerts, quality control escalations, and cross-department operational reporting — keeping operations running without manual monitoring.",
  },
  {
    icon: HiShieldCheck,
    title: "Approval & Compliance Workflows",
    desc: "Multi-level approval routing with AI-powered pre-screening, policy compliance checks before submission, automatic escalation on SLA breach, and full audit logs for regulatory and internal audit requirements.",
  },
  {
    icon: HiArrowPathRoundedSquare,
    title: "Cross-System Data Sync",
    desc: "Real-time bidirectional data synchronization across ERP, CRM, HRIS, accounting systems, and custom databases — eliminating duplicate data entry and ensuring every system of record reflects the latest state.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Process Mapping",
    desc: "We conduct structured discovery sessions with each department to document current workflows — every step, decision point, system involved, and time spent. We identify automation candidates by highest manual effort and error rate, and prioritize by ROI impact.",
  },
  {
    step: "02",
    title: "Automation Blueprint",
    desc: "We produce a detailed automation design document for each workflow: trigger definition, branching logic, integration points, error handling, human escalation paths, and expected outcomes. Blueprints are reviewed and approved before any development begins.",
  },
  {
    step: "03",
    title: "Build & Integration",
    desc: "Workflows are built in n8n or Make with AI components powered by GPT-4 for decision-making, document processing, and content generation. We build REST API integrations to every system in the workflow and implement full error recovery logic.",
  },
  {
    step: "04",
    title: "UAT",
    desc: "User acceptance testing with real data and real business scenarios. Department leads run through the automated workflow end-to-end, validate outputs, and sign off on edge case handling before any workflow is promoted to production.",
  },
  {
    step: "05",
    title: "Rollout & Monitoring",
    desc: "Phased rollout starting with the highest-ROI workflows. Real-time monitoring dashboards show workflow execution rates, error rates, manual intervention frequency, and time-saved metrics. Hypercare support for 30 days post-launch.",
  },
];

const TECH = [
  { n: "OpenAI GPT-4", c: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { n: "n8n", c: "bg-orange-50 border-orange-200 text-orange-700" },
  { n: "Make (Integromat)", c: "bg-violet-50 border-violet-200 text-violet-700" },
  { n: "Zapier", c: "bg-amber-50 border-amber-200 text-amber-700" },
  { n: "LangChain", c: "bg-yellow-50 border-yellow-200 text-yellow-700" },
  { n: "FastAPI", c: "bg-sky-50 border-sky-200 text-sky-700" },
  { n: "PostgreSQL", c: "bg-blue-50 border-blue-200 text-blue-700" },
  { n: "REST APIs", c: "bg-slate-100 border-slate-200 text-slate-700" },
];

const INDUSTRIES = [
  { name: "Insurance", use: "Claims processing workflows, underwriting data collection, policy renewal automation, compliance reporting" },
  { name: "Manufacturing", use: "Production scheduling automation, quality control escalation, supplier communication workflows, inventory alerts" },
  { name: "Healthcare", use: "Patient intake automation, prior authorization workflows, billing and coding, regulatory reporting" },
  { name: "Logistics", use: "Shipment tracking automation, exception handling, carrier communication, delivery confirmation workflows" },
  { name: "Finance", use: "Trade settlement workflows, KYC document processing, regulatory filing automation, reconciliation pipelines" },
  { name: "SaaS", use: "Customer onboarding automation, subscription management, churn intervention workflows, usage-based billing" },
];

const WHY = [
  {
    title: "Process-First Approach",
    desc: "We document and challenge every existing process before automating it. We don't automate broken workflows — we redesign them for automation efficiency, then build. This is why our automations stick.",
  },
  {
    title: "Multi-System Integration Expertise",
    desc: "Business processes cross many systems. We've built integrations for Salesforce, SAP, NetSuite, Workday, BambooHR, QuickBooks, Xero, Jira, ServiceNow, and dozens of custom REST APIs.",
  },
  {
    title: "AI Where It Creates Value",
    desc: "We add AI components selectively — for decision-making, document understanding, exception classification, and content generation — not as a default. Rule-based automation handles the rest, keeping costs predictable.",
  },
  {
    title: "Change Management Support",
    desc: "Automation fails when teams resist it. We include department-level training, workflow documentation, and clear explainability features so every user understands what automated workflows do on their behalf.",
  },
  {
    title: "Measurable ROI Reporting",
    desc: "Every workflow we deploy tracks time saved, errors prevented, and manual intervention count. Monthly ROI reports show cost savings in actual hours and dollars — making the business case visible to leadership.",
  },
];

const FAQS = [
  {
    q: "What types of business processes are the best candidates for AI automation?",
    a: "The best automation candidates share three characteristics: they are high-volume (done frequently), rule-based or semi-structured (follow a predictable pattern), and currently require significant manual time. Prime examples include invoice processing, employee onboarding, report generation, data entry between systems, approval routing, email triage, and compliance document collection. Processes that involve highly creative judgment or relationship-sensitive human interaction are better supported by AI copilots rather than fully automated workflows.",
  },
  {
    q: "How is AI business process automation different from traditional RPA?",
    a: "Traditional RPA (robotic process automation) uses scripts to mimic human UI interactions — clicking buttons, copy-pasting data. It breaks when UIs change and cannot handle unstructured inputs. AI-powered process automation uses LLMs and AI models to understand documents, make contextual decisions, generate content, and handle exceptions that would cause RPA to fail. We combine API-based integrations (more reliable than UI scraping) with AI decision-making for workflows that are genuinely resilient.",
  },
  {
    q: "Which departments see the fastest ROI from process automation?",
    a: "Finance and accounting typically see the fastest ROI because invoice processing, expense review, and monthly close checklists are high-volume and currently manual-intensive. HR sees significant ROI from CV screening and onboarding automation. Operations sees ROI from exception handling and reporting automation. The actual ROI timeline depends on current volume — a company processing 500 invoices per month sees faster payback than one processing 50.",
  },
  {
    q: "Do we need to replace our existing systems to implement automation?",
    a: "No. We build automation on top of your existing systems via their APIs and integration points. We connect to your current ERP, CRM, HRIS, and accounting platforms without replacing them. The automation layer sits between systems, orchestrating data flow and decision-making. The only requirement is that systems have accessible APIs or integration points — which virtually all modern SaaS platforms do.",
  },
  {
    q: "How do you handle exceptions and edge cases in automated workflows?",
    a: "Every workflow we build includes explicit exception handling paths. When an automated step encounters an edge case outside its decision boundary — an ambiguous document, a missing required field, a value outside expected ranges — the workflow pauses, flags the item, and routes it to a human for resolution. The human handles the exception, and the workflow continues. Over time we analyze exception patterns to expand the automation boundary and reduce the manual exception rate.",
  },
  {
    q: "What automation platform do you recommend — n8n, Make, or Zapier?",
    a: "The choice depends on your use case and infrastructure preferences. n8n is our primary recommendation for complex enterprise workflows — it's self-hostable, has advanced branching logic, and allows custom code nodes for AI integration. Make (Integromat) is excellent for marketing and sales workflows with its visual interface. Zapier suits simpler, connector-based automations. For workflows requiring custom AI logic, data transformation, or high reliability, we build directly on FastAPI with n8n for orchestration.",
  },
  {
    q: "How long does it take to automate a business process?",
    a: "A single, well-defined workflow (e.g., invoice processing, onboarding checklist, monthly report generation) typically takes 2–3 weeks to build, test, and deploy. A multi-department automation program covering 5–10 workflows typically runs 8–12 weeks. Timeline is heavily influenced by the number of system integrations required, data quality in source systems, and availability of department stakeholders for requirements sessions and UAT.",
  },
  {
    q: "How do we ensure employees trust and adopt automated workflows?",
    a: "Adoption is a design problem. We build audit trail visibility so employees can see exactly what an automated workflow did and why. We include human review queues for ambiguous items so employees don't feel the system is a black box. We run department-level training sessions and provide written workflow documentation. And we start with workflows that save employees time on tasks they dislike — rather than automating work that employees find meaningful.",
  },
  {
    q: "What does the monitoring and reporting look like post-deployment?",
    a: "We deploy a monitoring dashboard showing real-time workflow execution rates, error and exception counts, manual intervention frequency, average processing time per workflow, and cumulative time saved. Alerts fire on error rate spikes or workflow failures. Monthly ROI reports translate time saved into labor cost equivalent for business reporting. Most clients use these metrics in board-level operational efficiency reporting.",
  },
  {
    q: "Can automated workflows handle compliance and regulatory requirements?",
    a: "Yes — and this is often a driver of automation investment. We build compliance workflows that enforce mandatory steps before processing continues, generate required audit documentation automatically, apply data retention and deletion rules on schedule, and produce regulatory filing inputs in required formats. In regulated industries like insurance and finance, automation often improves compliance because it eliminates the human variability that creates compliance gaps.",
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
  name: "AI Business Process Automation",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  description:
    "Automate entire business departments with AI — operations, HR, finance, procurement, and cross-functional workflows that eliminate manual work and reduce costs.",
  areaServed: "Worldwide",
  serviceType: "AI Automation",
  url: "https://infonza.com/ai-solutions/business-process-automation",
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

export default function BusinessProcessAutomationPage() {
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
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">AI Business Process Automation</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-violet-900/60 border border-violet-700/40 rounded-full px-4 py-1.5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiBolt className="w-3.5 h-3.5" />
                AI Business Automation
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Automate Every Business Process{" "}
                <span className="text-gradient">With AI</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                We automate entire business departments — HR, finance, operations, and procurement —
                using AI-powered workflows that eliminate manual work, reduce errors, and deliver
                measurable ROI within 90 days of deployment.
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

            {/* Right — workflow automation visualization */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Invoice Processing — Running</span>
                  <span className="ml-auto text-xs text-slate-500">n8n + GPT-4</span>
                </div>
                <div className="p-5 space-y-3 min-h-[280px] font-mono text-xs">
                  {[
                    { status: "done", label: "Trigger: email attachment", detail: "invoice_nov_acme.pdf received from ap@acme.com" },
                    { status: "done", label: "AI extraction", detail: "Vendor: Acme Corp | Amount: $14,820 | Due: Dec 15" },
                    { status: "done", label: "3-way match", detail: "PO-2841 matched ✓ | GR-1092 matched ✓ | Variance: $0" },
                    { status: "done", label: "Approval routing", detail: "Auto-approved (under $20k threshold) → NetSuite posted" },
                    { status: "active", label: "Payment scheduled", detail: "ACH payment queued for Dec 12 (3 days early discount)…" },
                    { status: "pending", label: "Vendor notification", detail: "Confirmation email → ap@acme.com" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                        step.status === "done" ? "bg-teal-400" :
                        step.status === "active" ? "bg-violet-400 animate-pulse" :
                        "bg-slate-600"
                      }`} />
                      <div>
                        <span className={`font-semibold ${
                          step.status === "done" ? "text-teal-400" :
                          step.status === "active" ? "text-violet-400" :
                          "text-slate-500"
                        }`}>[{step.label}]</span>
                        <span className="text-slate-400 ml-2">{step.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">This month: 847 invoices automated</span>
                  <span className="text-xs text-violet-400">Zero manual touches required</span>
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
              What We Automate Across{" "}
              <span className="text-gradient">Your Business</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six core automation domains that eliminate manual work and accelerate department throughput.
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-violet-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center mb-3">
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
              How We Automate Your <span className="text-gradient">Business Processes</span>
            </h2>
            <p className="text-slate-400">From process mapping to live automated workflows delivering ROI in 90 days.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-violet-700/60 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs font-mono">
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
              Business Process Automation Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We build automation systems calibrated to the specific workflows, compliance requirements, and system landscapes of your industry.
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
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-violet-200 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
                  <HiCheckCircle className="w-4 h-4 text-violet-600" />
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
              Why Teams Choose <span className="text-gradient">Infonza</span> for Business Process Automation
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-violet-200 hover:shadow-md transition-all"
              >
                <HiCheckCircle className="w-6 h-6 text-violet-500 mb-3" />
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
            heading="Ready to eliminate manual work with AI automation?"
            subheading="Get a free process audit from our automation engineers. We'll identify your highest-ROI automation opportunities and scope a program in 30 minutes."
            cta="Schedule Free Process Audit"
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
                title: "AI Workflow Automation",
                desc: "Custom end-to-end workflow automation connecting your systems with AI decision-making, built on n8n and LangChain.",
                href: "/ai-development/ai-workflow-automation",
                icon: HiBolt,
              },
              {
                title: "AI Document Processing",
                desc: "Intelligent document ingestion and extraction that feeds data into your automated business processes without manual data entry.",
                href: "/ai-solutions/document-processing",
                icon: HiDocumentText,
              },
              {
                title: "AI CRM Automation",
                desc: "Automate your entire CRM — data enrichment, deal stage updates, follow-up triggers, and pipeline reporting without manual input.",
                href: "/ai-solutions/crm-automation",
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
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-violet-300 hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center mb-3 group-hover:bg-violet-100 transition-colors">
                    <s.icon className="w-4.5 h-4.5 text-violet-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-violet-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 flex-1 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-violet-600 text-xs font-semibold">
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
              Honest answers about AI business process automation and department workflow automation.
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
        badge="Free Process Automation Consultation"
        heading="Automate Your Business Processes With AI"
        subheading="Schedule a 30-minute session with our automation engineers. We'll map your highest-impact manual workflows and scope an automation program with a clear ROI projection."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to an Automation Engineer"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
