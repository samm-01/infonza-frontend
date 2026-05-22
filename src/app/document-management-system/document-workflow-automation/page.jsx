"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiDocumentText,
  HiCloud,
  HiShieldCheck,
  HiClock,
  HiBolt,
  HiSparkles,
  HiQueueList,
  HiChevronDown,
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
    icon: HiBolt,
    title: "Drag-and-drop workflow builder",
    desc: "Visual no-code workflow designer lets admins configure approval routes, conditions, and escalation rules without developer involvement — reducing change cycle time from weeks to hours.",
  },
  {
    icon: HiQueueList,
    title: "Serial & parallel approval routing",
    desc: "Route documents through sequential approvers or simultaneous parallel reviewers — with AND/OR logic, quorum rules, and automatic consolidation of parallel decisions.",
  },
  {
    icon: HiDocumentText,
    title: "E-signature integration (DocuSign)",
    desc: "Documents move from final approval directly to DocuSign or HelloSign for legally binding e-signature collection — with signer status tracked live inside the workflow.",
  },
  {
    icon: HiClock,
    title: "Deadline escalation & reminders",
    desc: "Configurable SLA timers send automated reminders at 50%, 75%, and 100% of deadline — then escalate to a designated fallback approver to prevent workflow stalls.",
  },
  {
    icon: HiShieldCheck,
    title: "Conditional routing rules",
    desc: "Route documents to different approvers based on metadata values — amount thresholds, document type, originating department, or any custom field extracted at ingestion.",
  },
  {
    icon: HiSparkles,
    title: "Mobile approval (push notifications)",
    desc: "Approvers receive push notifications on iOS and Android. One-tap approve, reject, or delegate from the mobile app — no VPN or desktop required for time-sensitive decisions.",
  },
  {
    icon: HiCloud,
    title: "Integration with ERP & CRM",
    desc: "Bi-directional integration with SAP, Oracle, Dynamics 365, Salesforce, and custom ERP/CRM systems — triggering downstream transactions automatically on approval completion.",
  },
  {
    icon: HiCheckCircle,
    title: "Complete audit trail",
    desc: "Every workflow step — submission, review, comment, approval, rejection, escalation, and signature — is timestamped and attributed, creating a tamper-proof record for regulators.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Workflow Discovery & Mapping",
    desc: "We map every document-centric process: who initiates, who reviews, who approves, what the SLA is, and what downstream action must occur on completion.",
  },
  {
    step: "02",
    title: "Workflow Engine Design",
    desc: "We design the workflow engine schema — node types, transition rules, condition evaluators, SLA configuration, and escalation trees — before any build begins.",
  },
  {
    step: "03",
    title: "Build & Integration",
    desc: "We build the workflow engine, notification layer, mobile app, and ERP/CRM integration hooks — with working demos every two weeks for stakeholder feedback.",
  },
  {
    step: "04",
    title: "UAT with Real Workflows",
    desc: "User acceptance testing uses real document samples from your actual business processes — not synthetic test data — so defects surface before go-live.",
  },
  {
    step: "05",
    title: "Go-Live & Optimisation",
    desc: "Phased rollout starting with one workflow, monitoring completion rates and SLA performance, then expanding to the full workflow library with continuous optimisation.",
  },
];

const TECH_STACK = [
  { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
  { name: "React", color: "bg-sky-100 text-sky-800 border-sky-200" },
  { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { name: "Redis", color: "bg-rose-100 text-rose-800 border-rose-200" },
  { name: "DocuSign API", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  { name: "AWS SES", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { name: "Firebase (Push)", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { name: "REST Webhooks", color: "bg-slate-100 text-slate-800 border-slate-200" },
];

const RESULTS = [
  { metric: "70%", label: "Faster Approvals", desc: "Average approval cycle time cut from 8 days to under 48 hours" },
  { metric: "95%", label: "SLA Compliance", desc: "Automated escalation eliminates missed deadlines and stalled documents" },
  { metric: "80%", label: "Zero-Touch Routing", desc: "Documents auto-routed without manual intervention for most standard workflows" },
];

const RELATED = [
  {
    title: "Enterprise DMS",
    desc: "The document repository that powers your automated workflows — version control, full-text search, and access control.",
    href: "/document-management-system/enterprise-document-management",
    icon: HiDocumentText,
  },
  {
    title: "Document Approval System",
    desc: "A focused solution for multi-level approval chains — mobile-first with e-signature and OTP verification.",
    href: "/document-management-system/document-approval-system",
    icon: HiCheckCircle,
  },
  {
    title: "AI Workflow Automation",
    desc: "Add AI-powered document classification, data extraction, and exception handling on top of your workflow engine.",
    href: "/ai-development/ai-workflow-automation",
    icon: HiSparkles,
  },
];

const FAQS = [
  {
    q: "How does the workflow builder handle exceptions and edge cases?",
    a: "The workflow engine supports exception routing via conditional branches and catch-all escalation paths. When a document does not match any standard routing rule, it is flagged to a configured exception manager who can manually route it. Every exception is logged with full context for process improvement analysis.",
  },
  {
    q: "Can workflows be changed after go-live without downtime?",
    a: "Yes. Workflow configuration changes are versioned — you can publish a new version of a workflow while in-flight documents complete on the previous version. This means workflow updates never disrupt active approvals and every document is traceable to the exact workflow version that processed it.",
  },
  {
    q: "What happens when an approver is on leave or unavailable?",
    a: "The system supports delegate configuration (each approver designates a backup), automatic escalation after a deadline, and admin override for emergency approvals. Approvers can also set an out-of-office delegate directly from the mobile app, effective immediately.",
  },
  {
    q: "Does the system integrate with our existing ERP?",
    a: "Yes. We support SAP, Oracle Fusion, Microsoft Dynamics 365, and custom ERP systems via REST API or direct database integration where required. On approval completion, the workflow engine can trigger purchase order confirmation, invoice posting, or any other downstream ERP action automatically.",
  },
  {
    q: "How are e-signatures legally binding?",
    a: "We integrate with DocuSign and HelloSign, both of which produce legally binding e-signatures compliant with eIDAS (EU), ESIGN Act and UETA (US), and equivalent standards in most jurisdictions. Each signed document includes an audit certificate documenting the signing process, signer identity verification method, and timestamp — admissible as legal evidence.",
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

export default function DocumentWorkflowAutomationPage() {
  return (
    <>
      <Script
        id="workflow-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 bg-grid pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
              <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/document-management-system" className="hover:text-teal-600 transition-colors">Document Management</Link>
              <span>/</span>
              <span className="text-slate-300 font-medium">Workflow Automation</span>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-700/50 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <HiBolt className="w-4 h-4" />
              Workflow Automation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
            >
              Document{" "}
              <span className="text-gradient">Workflow Automation</span>{" "}
              Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-300 text-lg leading-relaxed mb-10"
            >
              Automate document-centric business processes — approval workflows, e-signature routing,
              conditional branching, deadline escalation, parallel reviews, and ERP/CRM integration
              that eliminates the 8-day average approval cycle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Get a Free Consultation
                <HiArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-teal-500 text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                Discuss Your Project
              </Link>
            </motion.div>
          </div>

          {/* Right — workflow diagram card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-slate-400 text-xs font-medium">LIVE WORKFLOW — Purchase Order #7392</span>
              <span className="bg-blue-600/30 text-blue-300 text-xs font-bold px-3 py-1 rounded-full">In Progress</span>
            </div>

            <div className="space-y-3">
              {[
                { label: "Submitted", sublabel: "Finance Dept", status: "done" },
                { label: "Legal Review", sublabel: "J. Hargreaves", status: "done" },
                { label: "CFO Approval", sublabel: "M. Patel", status: "active" },
                { label: "Signed", sublabel: "DocuSign", status: "pending" },
              ].map(({ label, sublabel, status }, i) => (
                <div key={label} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    status === "done" ? "bg-teal-500" :
                    status === "active" ? "bg-blue-500 animate-pulse" :
                    "bg-slate-700"
                  }`}>
                    {status === "done" ? (
                      <HiCheckCircle className="w-4 h-4 text-white" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-white/40" />
                    )}
                  </div>
                  {i < 3 && (
                    <div className="absolute ml-4 mt-8 w-0.5 h-3 bg-slate-600" style={{ display: "none" }} />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`font-semibold text-sm ${status === "pending" ? "text-slate-500" : "text-white"}`}>{label}</span>
                      {status === "done" && <span className="text-teal-400 text-xs font-bold">Approved</span>}
                      {status === "active" && <span className="text-blue-300 text-xs font-bold">⏳ 4h remaining</span>}
                      {status === "pending" && <span className="text-slate-600 text-xs">Queued</span>}
                    </div>
                    <span className="text-slate-500 text-xs">{sublabel}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-700 flex items-center justify-between">
              <span className="text-slate-400 text-xs">SLA: 72 hours</span>
              <span className="text-teal-400 text-xs font-bold">68% complete</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 bg-dots py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Your <span className="text-gradient">Workflow Engine</span> Includes
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              A complete automation stack — from the visual workflow designer to mobile approvals and
              legally-binding e-signatures.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10 text-center"
          >
            How We <span className="text-gradient">Build Your Workflows</span>
          </motion.h2>

          <div className="space-y-4">
            {PROCESS_STEPS.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6 bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <div className="text-3xl font-black text-teal-100 select-none min-w-[3rem]">{step}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-slate-900 mb-8"
          >
            Technology Stack
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map(({ name, color }, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`border text-sm font-semibold px-4 py-1.5 rounded-full ${color}`}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ───────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-900 mb-10 text-center"
          >
            Results Our Clients See
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {RESULTS.map(({ metric, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center"
              >
                <p className="text-5xl font-black text-gradient mb-2">{metric}</p>
                <p className="font-bold text-slate-900 mb-2">{label}</p>
                <p className="text-slate-500 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ────────────────────────────────────────────────── */}
      <section className="bg-white py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <BookingBanner />
        </div>
      </section>

      {/* ── RELATED ───────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-slate-900 mb-8 text-center"
          >
            Related Services
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {RELATED.map(({ title, desc, href, icon: Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={href}
                  className="group flex flex-col h-full bg-white border border-slate-200 hover:border-teal-300 hover:shadow-md rounded-2xl p-6 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc}</p>
                  <div className="flex items-center gap-1 text-teal-600 text-sm font-semibold mt-4">
                    Learn more <HiArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-slate-900 mb-10 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <FAQItem key={q} q={q} a={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION ───────────────────────────────────────────────── */}
      <BookingSection
        heading="Eliminate 8-Day Approval Cycles with Intelligent Document Workflows"
        badge="Free Workflow Automation Consultation"
      />

      <Footer />
      <FloatingBookingButton />
    </>
  );
}
