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
  HiLockClosed,
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

const PAIN_POINTS = [
  {
    title: "Email approval chains are uncontrollable",
    desc: "Documents routed via email create parallel approval threads, version confusion, and no single source of truth on current status. Approvals get lost, delayed, or actioned on the wrong version.",
  },
  {
    title: "No visibility on approval status",
    desc: "Finance, procurement, and operations teams spend hours chasing approvers for status updates on purchase orders, contracts, and expense claims — time that adds zero value to the process.",
  },
  {
    title: "Missed SLAs and deadline breaches",
    desc: "Without automated escalation, documents stall at the first unavailable approver. A single out-of-office response delays a purchase order by days — causing supply chain failures and vendor penalties.",
  },
  {
    title: "No audit trail for regulatory compliance",
    desc: "Regulators and auditors require evidence of who approved a document, when, with what authority, and what the document contained at the time of approval. Email provides none of these.",
  },
];

const FEATURES = [
  {
    icon: HiQueueList,
    title: "Multi-level approval configuration",
    desc: "Configure approval chains of unlimited depth — department heads, finance controllers, legal counsel, and C-suite — with threshold-based routing that changes the chain based on document value or type.",
  },
  {
    icon: HiBolt,
    title: "Serial & parallel routing",
    desc: "Route documents through sequential approvers (each waits for the previous) or simultaneous parallel reviewers (all review at once, consolidated outcome). Mix serial and parallel within a single workflow.",
  },
  {
    icon: HiSparkles,
    title: "Mobile push approval notifications",
    desc: "Approvers receive real-time push notifications on iOS and Android the moment a document reaches their queue. Review, approve, reject, or delegate from the mobile app — no laptop or VPN required.",
  },
  {
    icon: HiCheckCircle,
    title: "One-click approve/reject with comments",
    desc: "Approvers see the full document preview in-app, add mandatory or optional comments, and submit their decision in one action. Rejection triggers immediate notification to the originator with comments.",
  },
  {
    icon: HiDocumentText,
    title: "E-signature integration",
    desc: "Approved documents are routed directly to DocuSign or HelloSign for legally binding e-signature collection — with signer identity verification, audit certificate, and automatic filing on completion.",
  },
  {
    icon: HiLockClosed,
    title: "OTP & biometric verification options",
    desc: "High-value approvals (above configurable thresholds) require OTP verification via SMS or authenticator app, or biometric confirmation via the mobile device — adding a second factor to the approval record.",
  },
  {
    icon: HiClock,
    title: "Automatic escalation on deadline",
    desc: "SLA timers track each approver's response window. At 50% and 75% of the deadline, automated reminders are sent. At 100%, the document is automatically escalated to a pre-configured fallback approver.",
  },
  {
    icon: HiShieldCheck,
    title: "Complete approval audit trail",
    desc: "Every event — submission, routing, notification, view, approve, reject, delegate, escalate, sign — is timestamped, attributed to a specific user, and written to an immutable audit log exportable for compliance.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Approval Process Mapping",
    desc: "We document every document type requiring approval, the approver chain, value thresholds, SLA requirements, and escalation rules — creating a precise workflow specification before build begins.",
  },
  {
    step: "02",
    title: "Approval Engine Design",
    desc: "We design the workflow state machine, notification architecture, escalation scheduler, mobile push infrastructure, and e-signature integration — with a technical design reviewed by your team.",
  },
  {
    step: "03",
    title: "Build & Mobile Development",
    desc: "Two-week sprints delivering the web approval interface, mobile iOS/Android app, notification layer, DocuSign integration, and audit trail — with live demos at every sprint review.",
  },
  {
    step: "04",
    title: "Integration Testing",
    desc: "End-to-end testing with real approval scenarios from your business — full-chain approvals, escalations, rejections, and edge cases — using your actual document types and value thresholds.",
  },
  {
    step: "05",
    title: "Rollout & Adoption",
    desc: "Phased rollout starting with one document type (typically purchase orders), measuring SLA improvement, then expanding to all approval workflows with full admin and user training.",
  },
];

const TECH_STACK = [
  { name: "React", color: "bg-sky-100 text-sky-800 border-sky-200" },
  { name: "React Native", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
  { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  { name: "Redis", color: "bg-rose-100 text-rose-800 border-rose-200" },
  { name: "DocuSign API", color: "bg-violet-100 text-violet-800 border-violet-200" },
  { name: "Firebase (Push)", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { name: "AWS SES", color: "bg-orange-100 text-orange-800 border-orange-200" },
];

const RESULTS = [
  { metric: "3×", label: "Faster PO Approval", desc: "Purchase order cycle time reduced from 8 days to under 48 hours across the board" },
  { metric: "85%", label: "SLA Compliance Rate", desc: "Automated escalation ensures the vast majority of approvals complete within their configured deadline" },
  { metric: "100%", label: "Paperless Approvals", desc: "Every approval captured digitally — no printed documents, wet ink signatures, or manual filing" },
];

const RELATED = [
  {
    title: "Workflow Automation",
    desc: "Full document workflow automation with drag-and-drop builder, conditional routing, and ERP integration.",
    href: "/document-management-system/document-workflow-automation",
    icon: HiBolt,
  },
  {
    title: "Legal DMS",
    desc: "Contract approval workflows purpose-built for legal teams — with privilege tagging and conflict checking.",
    href: "/document-management-system/legal-document-management",
    icon: HiDocumentText,
  },
  {
    title: "Insurance Automation",
    desc: "Claims approval, policy endorsement, and underwriting decision workflows for insurance carriers.",
    href: "/insurance-software-development/insurance-automation-solutions",
    icon: HiShieldCheck,
  },
];

const FAQS = [
  {
    q: "How do we configure different approval chains for different document types?",
    a: "The system includes an admin workflow builder where you define approval chains per document type and value threshold. For example, purchase orders under $10,000 may require only a department head, while those above $50,000 require department head + finance controller + CFO. Changes to approval chains are versioned — in-flight approvals complete on the previous configuration while new submissions use the updated chain.",
  },
  {
    q: "What happens if an approver rejects a document?",
    a: "Rejection triggers an immediate notification to the document originator with the rejecting approver's mandatory comment. The originator can revise the document and resubmit, which restarts the approval chain from the beginning. Alternatively, the workflow can be configured to return only to the rejecting approver's level (partial restart) rather than the full chain. All rejection events are logged in the audit trail.",
  },
  {
    q: "Can approvers delegate their queue when they are on leave?",
    a: "Yes. Approvers can set a delegation rule in the web app or mobile app, effective immediately, that automatically routes all pending and incoming approval requests to their designated delegate. The audit trail records both the original approver's delegation instruction and the delegate's subsequent decision — maintaining a complete chain of authority for compliance purposes.",
  },
  {
    q: "How does OTP verification work for high-value approvals?",
    a: "When an approval decision is submitted for a document above a configured value threshold, the system requires the approver to verify their identity via a one-time password sent to their registered mobile number or generated by an authenticator app (TOTP). The OTP verification is recorded in the audit trail alongside the approval decision. Biometric verification (Face ID or fingerprint) is also available for mobile approvals.",
  },
  {
    q: "Does the system integrate with our ERP to auto-post approved documents?",
    a: "Yes. On approval completion, the system can trigger downstream ERP actions via REST API or direct integration — posting confirmed purchase orders to SAP, approving invoices in Dynamics 365, or updating contract records in Salesforce. We configure these integrations as part of the build and provide webhook support for any system that can receive HTTP callbacks.",
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

export default function DocumentApprovalSystemPage() {
  return (
    <>
      <Script
        id="approval-faq-schema"
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
              <span className="text-slate-300 font-medium">Approval System</span>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-700/50 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <HiCheckCircle className="w-4 h-4" />
              Document Approval System
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
            >
              Custom Document{" "}
              <span className="text-gradient">Approval System</span>{" "}
              Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-300 text-lg leading-relaxed mb-10"
            >
              Multi-level approval workflows built for enterprise — serial and parallel routing,
              mobile push approvals, e-signature via DocuSign, OTP verification, automatic escalation,
              and a tamper-proof audit trail that satisfies any regulator.
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

          {/* Right — approval chain card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl"
          >
            <div className="mb-5">
              <p className="text-slate-400 text-xs mb-1">APPROVAL REQUEST</p>
              <p className="text-white font-bold text-lg">Purchase Order #4821</p>
              <p className="text-slate-400 text-xs">Supplier: Vertex Tech Ltd · Amount: $84,500</p>
            </div>

            <div className="space-y-3 mb-5">
              {[
                {
                  level: "Level 1",
                  approver: "Department Head",
                  name: "S. Thompson",
                  status: "Approved",
                  time: "14 Nov, 09:42",
                  state: "done",
                },
                {
                  level: "Level 2",
                  approver: "Finance Manager",
                  name: "R. Okafor",
                  status: "Pending",
                  time: "2 hrs remaining",
                  state: "active",
                },
                {
                  level: "Level 3",
                  approver: "CEO",
                  name: "A. Mehta",
                  status: "Queued",
                  time: "",
                  state: "queued",
                },
              ].map(({ level, approver, name, status, time, state }) => (
                <div key={level} className={`flex items-center gap-4 rounded-xl px-4 py-3 ${
                  state === "active" ? "bg-blue-900/30 border border-blue-700/50" : "bg-slate-900/60"
                }`}>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    state === "done" ? "bg-teal-500 text-white" :
                    state === "active" ? "bg-blue-500 text-white animate-pulse" :
                    "bg-slate-700 text-slate-500"
                  }`}>
                    {state === "done" ? <HiCheckCircle className="w-4 h-4" /> : level.replace("Level ", "")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-semibold ${state === "queued" ? "text-slate-500" : "text-white"}`}>
                        {approver}
                      </span>
                      <span className={`text-xs font-bold ${
                        state === "done" ? "text-teal-400" :
                        state === "active" ? "text-blue-300" :
                        "text-slate-600"
                      }`}>{status}</span>
                    </div>
                    <p className="text-slate-500 text-xs">{name} {time && `· ${time}`}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-slate-700 pt-4">
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <HiShieldCheck className="w-4 h-4" />
                <span>OTP required at Level 3</span>
              </div>
              <span className="text-teal-400 text-xs font-bold">DocuSign on completion</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PAIN POINTS ───────────────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Email Approval Chains{" "}
              <span className="text-gradient">No Longer Work</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              As organisations grow, email-based approval processes become an invisible tax on
              productivity, compliance, and vendor relationships.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PAIN_POINTS.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
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
              Everything in Your <span className="text-gradient">Approval System</span>
            </h2>
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
            Our <span className="text-gradient">Implementation Process</span>
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
            Results Our Clients Achieve
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
        heading="Replace Email Approval Chaos with a System That Actually Enforces Deadlines"
        badge="Free Approval System Consultation"
      />

      <Footer />
      <FloatingBookingButton />
    </>
  );
}
