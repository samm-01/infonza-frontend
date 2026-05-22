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
    title: "Contracts scattered across email and drives",
    desc: "Legal teams waste 2–3 hours per week searching for the right version of a contract, NDA, or amendment — hidden in email threads, personal drives, and unmarked folders.",
  },
  {
    title: "Missed deadlines and renewal dates",
    desc: "Contract renewal and expiry dates live in spreadsheets nobody checks. One missed deadline costs more than an entire legal matter management system to fix.",
  },
  {
    title: "No privilege and confidentiality control",
    desc: "Attorney-client privilege requires strict document access controls. Generic file storage cannot enforce privilege tagging, need-to-know restrictions, or matter-level access walls.",
  },
  {
    title: "Manual redline comparison",
    desc: "Comparing document versions word-by-word in Microsoft Word is slow, error-prone, and creates a trail of local files that are impossible to track or audit.",
  },
];

const FEATURES = [
  {
    icon: HiDocumentText,
    title: "Contract repository & template library",
    desc: "Centralised contract repository with pre-approved clause libraries and matter-linked templates — reducing drafting time and ensuring consistency across all agreements.",
  },
  {
    icon: HiQueueList,
    title: "Matter & case management",
    desc: "Full matter management with linked documents, parties, deadlines, billable time entries, and status tracking — giving lawyers a single pane of glass for every active matter.",
  },
  {
    icon: HiClock,
    title: "Deadline & milestone tracking",
    desc: "Automated calendar integration for contract expiry, renewal windows, court filing deadlines, and regulatory submissions — with escalating reminders as dates approach.",
  },
  {
    icon: HiBolt,
    title: "Redline comparison tool",
    desc: "Side-by-side version comparison with word, sentence, and clause-level diff highlighting. Changes are tracked with author and timestamp without requiring Microsoft Word.",
  },
  {
    icon: HiLockClosed,
    title: "Privilege & confidentiality tagging",
    desc: "Attorney-client privilege flags, confidentiality classifications, and need-to-know access restrictions enforced at the document level — with audit logs for every access event.",
  },
  {
    icon: HiShieldCheck,
    title: "Conflict of interest checking",
    desc: "Automated conflict search across all matters and party databases before a new matter is opened — reducing malpractice risk and satisfying bar association requirements.",
  },
  {
    icon: HiSparkles,
    title: "Billing & time tracking integration",
    desc: "Bi-directional integration with Clio, PracticePanther, and custom billing systems — associating document actions with billable time entries automatically.",
  },
  {
    icon: HiCheckCircle,
    title: "E-signature routing",
    desc: "From final approved document to DocuSign in one click — with signer sequence, deadline, and reminder configuration, and signed documents automatically filed back in the matter.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Legal Operations Audit",
    desc: "We map your matter types, document categories, access control requirements, billing workflows, and compliance obligations before designing the system.",
  },
  {
    step: "02",
    title: "Matter Architecture & Taxonomy",
    desc: "We design the matter hierarchy, document classification taxonomy, metadata schema, privilege tagging structure, and retention schedules for each practice area.",
  },
  {
    step: "03",
    title: "Platform Build & Integration",
    desc: "We build the legal DMS with matter management, contract repository, deadline tracking, redline engine, and billing system integration — in two-week agile sprints.",
  },
  {
    step: "04",
    title: "Data Migration & Indexing",
    desc: "We migrate existing contracts, matter files, and historical documents with OCR text extraction, metadata tagging, and matter association validated before go-live.",
  },
  {
    step: "05",
    title: "Training & Adoption",
    desc: "Practice-area-specific training for attorneys, paralegals, and admins — with admin documentation and 30-day hypercare support to drive full adoption.",
  },
];

const TECH_STACK = [
  { name: "React", color: "bg-sky-100 text-sky-800 border-sky-200" },
  { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
  { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { name: "Elasticsearch", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { name: "AWS S3", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { name: "DocuSign", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  { name: "AWS Textract", color: "bg-violet-100 text-violet-800 border-violet-200" },
  { name: "Redis", color: "bg-rose-100 text-rose-800 border-rose-200" },
  { name: "PDF.js", color: "bg-red-100 text-red-800 border-red-200" },
];

const RESULTS = [
  { metric: "60%", label: "Faster Contract Review", desc: "Automated redline comparison and template libraries cut drafting and review cycles significantly" },
  { metric: "100%", label: "Deadline Compliance", desc: "Automated reminders and calendar integration eliminate missed contract renewals and filing deadlines" },
  { metric: "40%", label: "Lower Legal Spend", desc: "Reduced paralegal time on admin, faster contract closure, and fewer missed renewal opportunities" },
];

const RELATED = [
  {
    title: "Enterprise DMS",
    desc: "The enterprise document repository that underpins your legal content management platform.",
    href: "/document-management-system/enterprise-document-management",
    icon: HiDocumentText,
  },
  {
    title: "Document Approval System",
    desc: "Multi-level approval workflows for contract sign-off — with e-signature integration and mobile approvals.",
    href: "/document-management-system/document-approval-system",
    icon: HiCheckCircle,
  },
  {
    title: "Cosmetic Industry ERP",
    desc: "Regulatory and compliance document management for beauty and cosmetics sector operations.",
    href: "/erp-development/cosmetic-industry-erp",
    icon: HiShieldCheck,
  },
];

const FAQS = [
  {
    q: "Can the legal DMS handle attorney-client privilege access controls?",
    a: "Yes. We implement privilege tagging at the document level with matter-level access walls — meaning a lawyer on one matter cannot access documents from a conflicting matter even if they are in the same practice group. Every access to privileged documents is logged with user, timestamp, IP address, and access reason for audit purposes.",
  },
  {
    q: "How does the conflict of interest checker work?",
    a: "When a new matter is opened, the conflict checker searches across all active and closed matters, parties, counterparties, and related entities. It flags any name matches and presents them for attorney review with context. The checker integrates with your client database and supports fuzzy matching for name variants and aliases.",
  },
  {
    q: "Does it integrate with our existing billing software?",
    a: "Yes. We support bi-directional integration with Clio, PracticePanther, MyCase, and custom billing systems. Document actions (drafting, review, filing) can auto-populate time entries, and matter status in the billing system is reflected in the DMS. We also support flat-file export for legacy billing platforms.",
  },
  {
    q: "How does the redline comparison tool work without Microsoft Word?",
    a: "We use a server-side document diffing engine that compares documents at the word and clause level, producing a colour-coded visual diff rendered in the browser. Changes are categorised as insertions, deletions, and moves — with each change attributed to the editing party. The comparison works on DOCX, PDF, and plain text files.",
  },
  {
    q: "Can we migrate our existing matter files from iManage or NetDocuments?",
    a: "Yes. We have migration tooling for iManage Work, NetDocuments, and SharePoint-based legal document stores. We extract documents, matter associations, metadata, version history, and access control lists, then load them into the new system with integrity validation. We keep the legacy system in read-only mode during migration so no work is disrupted.",
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

export default function LegalDocumentManagementPage() {
  return (
    <>
      <Script
        id="legal-dms-faq-schema"
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
              <span className="text-slate-300 font-medium">Legal DMS</span>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-700/50 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <HiShieldCheck className="w-4 h-4" />
              Legal Document Management
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
            >
              Legal Document{" "}
              <span className="text-gradient">Management System</span>{" "}
              Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-300 text-lg leading-relaxed mb-10"
            >
              Built for law firms and in-house legal teams — contract repository, matter management,
              deadline tracking, redline comparison, privilege tagging, conflict checking, and billing
              integration that eliminates the document chaos slowing your legal practice.
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
                Discuss Your Requirements
              </Link>
            </motion.div>
          </div>

          {/* Right — matter card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-slate-400 text-xs mb-1">ACTIVE MATTER</p>
                <p className="text-white font-bold text-lg">Acme Corp Acquisition</p>
                <p className="text-slate-400 text-xs">M-2024-0847 · M&A · Confidential</p>
              </div>
              <div className="bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg text-center">
                14 days<br />
                <span className="font-normal">to close</span>
              </div>
            </div>

            <div className="space-y-2 mb-5">
              <p className="text-slate-500 text-xs font-medium mb-2">LINKED DOCUMENTS</p>
              {[
                { name: "Non-Disclosure Agreement", status: "Signed" },
                { name: "Term Sheet v4", status: "Signed" },
                { name: "Letter of Intent", status: "Signed" },
                { name: "Share Purchase Agreement", status: "In Review" },
                { name: "Due Diligence Report", status: "Pending" },
              ].map(({ name, status }) => (
                <div key={name} className="flex items-center justify-between bg-slate-900/60 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <HiDocumentText className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span className="text-white text-xs truncate">{name}</span>
                  </div>
                  <span className={`text-xs font-semibold ml-2 flex-shrink-0 ${
                    status === "Signed" ? "text-teal-400" :
                    status === "In Review" ? "text-blue-300" :
                    "text-slate-500"
                  }`}>{status}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 border-t border-slate-700 pt-4">
              <HiLockClosed className="w-4 h-4" />
              <span>Attorney-client privilege — restricted access</span>
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
              The Legal Document Problem{" "}
              <span className="text-gradient">No One Talks About</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Law firms and in-house legal departments lose thousands of billable hours annually to
              document chaos that purpose-built legal DMS eliminates.
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
              Everything Your Legal Team <span className="text-gradient">Needs</span>
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
            Our <span className="text-gradient">Implementation Approach</span>
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
            Results Our Legal Clients See
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
        heading="Give Your Legal Team a Document System Built for How They Actually Work"
        badge="Free Legal DMS Consultation"
      />

      <Footer />
      <FloatingBookingButton />
    </>
  );
}
