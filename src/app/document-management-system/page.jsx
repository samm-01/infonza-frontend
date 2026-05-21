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
  HiMagnifyingGlass,
  HiLockClosed,
  HiFolderOpen,
  HiQueueList,
  HiChevronDown,
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
  { value: "30+", label: "DMS Projects Delivered" },
  { value: "500M+", label: "Documents Managed" },
  { value: "94%", label: "Auto-Classification Rate" },
  { value: "80%", label: "Less Manual Work" },
];

const SERVICES = [
  {
    icon: HiFolderOpen,
    title: "Enterprise DMS",
    desc: "Full document repository with version control, metadata tagging & audit trails built for large organisations.",
    href: "/document-management-system/enterprise-document-management",
  },
  {
    icon: HiBolt,
    title: "Workflow Automation",
    desc: "Approval routing, e-signatures & deadline escalation that eliminate paper-based bottlenecks.",
    href: "/document-management-system/document-workflow-automation",
  },
  {
    icon: HiDocumentText,
    title: "Legal DMS",
    desc: "Contract repository, matter management, redline comparison & conflict checking for legal teams.",
    href: "/document-management-system/legal-document-management",
  },
  {
    icon: HiCloud,
    title: "Cloud Storage",
    desc: "256-bit AES encrypted, geo-redundant cloud-native storage with tiered cost optimisation.",
    href: "/document-management-system/cloud-document-storage",
  },
  {
    icon: HiQueueList,
    title: "Approval System",
    desc: "Multi-level serial/parallel approvals with mobile push notifications and e-signature integration.",
    href: "/document-management-system/document-approval-system",
  },
  {
    icon: HiSparkles,
    title: "Case Studies",
    desc: "See the real DMS projects we have delivered for enterprises, law firms, and regulated industries.",
    href: "/case-studies",
  },
];

const PAIN_POINTS = [
  {
    icon: HiDocumentText,
    title: "Paper & email chaos",
    desc: "Employees spend 20% of their workday hunting for documents buried in email threads, shared drives, and filing cabinets. That is two hours every day per person, gone.",
  },
  {
    icon: HiQueueList,
    title: "Version control nightmares",
    desc: "The wrong document version reaching a client, regulator, or supplier is not just embarrassing — it causes costly contract errors, rework, and occasionally litigation.",
  },
  {
    icon: HiShieldCheck,
    title: "Compliance failures",
    desc: "Missing audit trails, unsigned documents, and uncontrolled retention expose your organisation to GDPR fines, HIPAA penalties, and failed audits at the worst moments.",
  },
  {
    icon: HiClock,
    title: "Slow approval cycles",
    desc: "The average document approval cycle is 8 business days when routed through email. Contracts, purchase orders, and policies stall — costing revenue and vendor relationships.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Audit & Requirements",
    desc: "We map your existing document flows, volume, compliance requirements, and integration points to design a DMS that fits your organisation — not a generic template.",
  },
  {
    step: "02",
    title: "Information Architecture",
    desc: "We design folder hierarchies, metadata schemas, access control roles, retention schedules, and workflow rules before a single line of code is written.",
  },
  {
    step: "03",
    title: "DMS Development",
    desc: "Agile sprints with working demos every two weeks. We build the repository, workflow engine, OCR pipeline, search index, and integrations in parallel.",
  },
  {
    step: "04",
    title: "Data Migration",
    desc: "We migrate legacy documents from SharePoint, file servers, email archives, and physical scanning — with metadata preservation and integrity validation.",
  },
  {
    step: "05",
    title: "Training & Go-Live",
    desc: "Structured user training, admin documentation, and hypercare support for the first 30 days post-launch to ensure full adoption and zero disruption.",
  },
];

const TECH_STACK = [
  { name: "React", color: "bg-sky-100 text-sky-800 border-sky-200" },
  { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
  { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { name: "AWS S3", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { name: "Elasticsearch", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { name: "AWS Textract (OCR)", color: "bg-violet-100 text-violet-800 border-violet-200" },
  { name: "DocuSign", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  { name: "Azure Blob", color: "bg-teal-100 text-teal-800 border-teal-200" },
  { name: "Redis", color: "bg-rose-100 text-rose-800 border-rose-200" },
  { name: "PDF.js", color: "bg-red-100 text-red-800 border-red-200" },
  { name: "Tesseract", color: "bg-slate-100 text-slate-800 border-slate-200" },
];

const RELATED_VERTICALS = [
  {
    title: "AI Workflow Automation",
    desc: "Add intelligent document classification, data extraction, and exception handling on top of your DMS with AI-powered automation.",
    href: "/ai-development/ai-workflow-automation",
    icon: HiSparkles,
  },
  {
    title: "ERP Development",
    desc: "Embed your DMS directly into your ERP — purchase orders, invoices, HR records, and compliance documents all in one system.",
    href: "/erp-development",
    icon: HiFolderOpen,
  },
  {
    title: "Insurance Automation",
    desc: "Claims, policy documents, and underwriting packages managed in a compliance-ready DMS built for insurance carriers and MGAs.",
    href: "/insurance-software-development/insurance-automation-solutions",
    icon: HiShieldCheck,
  },
];

const FAQS = [
  {
    q: "How long does it take to build a custom DMS?",
    a: "A core enterprise DMS — repository, full-text search, access control, and basic approval workflows — typically takes 8–12 weeks. Adding OCR classification, advanced workflow automation, and third-party integrations (ERP, e-signature, CRM) extends the timeline to 14–18 weeks. We use two-week sprints with live demos after every cycle, so you see working software from week two onwards.",
  },
  {
    q: "Can you migrate our existing documents from SharePoint or a file server?",
    a: "Yes — data migration is a core part of every DMS engagement. We handle extraction from SharePoint, on-premise file servers, Google Drive, legacy document management platforms, and scanned paper archives. We preserve metadata, folder structure, version history, and permissions during migration, and validate integrity with checksums before any legacy system is decommissioned.",
  },
  {
    q: "Does the DMS support e-signatures?",
    a: "Yes. We integrate with DocuSign, HelloSign (now Dropbox Sign), and Adobe Acrobat Sign. Documents can be routed directly from the DMS to signatories, with signature status tracked in the approval workflow. We also support OTP-based lightweight e-signature for internal approvals that do not require a third-party provider.",
  },
  {
    q: "Is the DMS cloud-based or can it be deployed on-premise?",
    a: "Both options are available. Most clients choose cloud deployment on AWS or Azure for lower infrastructure overhead, automatic scaling, and geo-redundant storage. On-premise deployment is available for regulated industries (defence, healthcare, government) where data residency requirements prohibit cloud hosting. Hybrid deployments — active documents in the cloud, archived documents on-premise — are also an option.",
  },
  {
    q: "What compliance standards does your DMS support?",
    a: "Our DMS solutions are built to support GDPR (right to erasure, data subject access requests, retention schedules), HIPAA (access controls, audit trails, encryption at rest and in transit), and SOC 2 Type II-ready audit logging. We configure retention policies, immutable audit trails, role-based access controls, and data classification labels according to your specific regulatory requirements.",
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

export default function DocumentManagementSystemPage() {
  return (
    <>
      <Script
        id="dms-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 bg-grid pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-700/50 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <HiDocumentText className="w-4 h-4" />
              Document Management Experts
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Enterprise Document{" "}
              <span className="text-gradient">Management System</span>{" "}
              Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-300 text-lg leading-relaxed mb-10"
            >
              Replace paper chaos and SharePoint frustration with an intelligent DMS — OCR
              classification, approval workflows, e-signatures, and full-text search that retrieves
              any document in under a second.
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
                Schedule Free Consultation
                <HiArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 border border-slate-600 hover:border-teal-500 text-slate-300 hover:text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right — live DMS dashboard card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-slate-400 text-xs font-medium">DMS LIVE DASHBOARD</span>
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            </div>

            <div className="mb-6">
              <p className="text-slate-400 text-xs mb-1">Documents Processed Today</p>
              <p className="text-4xl font-bold text-white">3,847</p>
            </div>

            <div className="space-y-3">
              {[
                { label: "Auto-classified", value: "94.2%", pass: true },
                { label: "Avg retrieval time", value: "0.3s", pass: true },
                { label: "Pending approvals", value: "12", pass: null },
                { label: "Compliance status", value: "100%", pass: true },
              ].map(({ label, value, pass }) => (
                <div key={label} className="flex items-center justify-between bg-slate-900/60 rounded-lg px-4 py-2.5">
                  <span className="text-slate-400 text-sm">{label}</span>
                  <div className="flex items-center gap-2">
                    {pass !== null && (
                      <HiCheckCircle className="w-4 h-4 text-teal-400" />
                    )}
                    <span className="text-white font-semibold text-sm">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUST STATS ───────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {TRUST_STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-4xl font-bold text-gradient mb-1">{value}</p>
              <p className="text-slate-500 text-sm font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────────────── */}
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
              Complete <span className="text-gradient">DMS Solutions</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From core document repositories to specialised legal and cloud solutions — we build
              the full DMS stack your organisation needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={href}
                  className="group flex flex-col h-full bg-white border border-slate-200 hover:border-teal-300 hover:shadow-lg rounded-2xl p-6 transition-all duration-200"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{desc}</p>
                  <div className="flex items-center gap-1 text-teal-600 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                    Learn more <HiArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ──────────────────────────────────────────────────────── */}
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
              The Document Problem is{" "}
              <span className="text-gradient">Bigger Than You Think</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Disorganised document management is not just an inconvenience — it is a measurable
              drain on revenue, compliance, and employee productivity.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAIN_POINTS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our <span className="text-gradient">DMS Delivery Process</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {PROCESS_STEPS.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6 bg-white border border-slate-200 rounded-2xl p-6"
              >
                <div className="text-3xl font-black text-teal-100 select-none min-w-[3rem]">
                  {step}
                </div>
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
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-slate-900 mb-8"
          >
            Technologies We Build With
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

      {/* ── BOOKING BANNER ────────────────────────────────────────────────── */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <BookingBanner />
        </div>
      </section>

      {/* ── RELATED VERTICALS ─────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-slate-900 mb-8 text-center"
          >
            Related Solutions
          </motion.h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {RELATED_VERTICALS.map(({ title, desc, href, icon: Icon }, i) => (
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
                    Explore <HiArrowRight className="w-4 h-4" />
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">Common questions about our DMS development services.</p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <FAQItem key={q} q={q} a={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION ───────────────────────────────────────────────── */}
      <BookingSection
        heading="Replace Paperwork Chaos with Intelligent Document Workflows"
        badge="Free DMS Consultation"
      />

      <Footer />
      <FloatingBookingButton />
    </>
  );
}
