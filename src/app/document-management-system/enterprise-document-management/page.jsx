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
    title: "Flat file storage has no metadata",
    desc: "Windows file servers and SharePoint were designed for simple file storage, not enterprise content management. There is no metadata tagging, no automatic classification, and no version history beyond the last saved file.",
  },
  {
    title: "Access control is an afterthought",
    desc: "Folder-level permissions are coarse and error-prone. Sensitive HR documents, board resolutions, and client contracts routinely sit in folders accessible to anyone with a mapped drive — until a breach makes it a board-level problem.",
  },
  {
    title: "Audit trails are non-existent",
    desc: "When a regulator asks who accessed a document and when, generic file storage has no answer. Without tamper-proof audit logs, you fail audits, lose certifications, and expose the business to significant liability.",
  },
  {
    title: "Search is broken at scale",
    desc: "Windows Search and SharePoint search degrade badly beyond a few hundred thousand documents. Full-text search across scanned PDFs, complex metadata queries, and relevance-ranked results require a purpose-built search layer.",
  },
];

const FEATURES = [
  {
    icon: HiFolderOpen,
    title: "Hierarchical folders & metadata",
    desc: "Unlimited depth folder structures with custom metadata schemas per document type — enabling powerful faceted filtering that flat storage can never provide.",
  },
  {
    icon: HiDocumentText,
    title: "Version control & document history",
    desc: "Every edit creates a new version with author, timestamp, and change summary. Rollback to any prior version in one click — with full diff view for text documents.",
  },
  {
    icon: HiMagnifyingGlass,
    title: "Full-text search with filters",
    desc: "Elasticsearch-powered search across document content, metadata, and extracted OCR text. Sub-second results across hundreds of millions of documents with relevance ranking.",
  },
  {
    icon: HiLockClosed,
    title: "Role-based access control",
    desc: "Granular permissions at folder, document type, and individual document level. LDAP/Active Directory integration for seamless enterprise authentication.",
  },
  {
    icon: HiShieldCheck,
    title: "Audit trails & compliance",
    desc: "Immutable, tamper-proof audit logs for every access, edit, download, share, and deletion event — with export capability for regulator requests.",
  },
  {
    icon: HiClock,
    title: "Retention & lifecycle policies",
    desc: "Automated retention schedules that flag documents for review, archive to cold storage, or trigger legal hold — fully configurable per document class and jurisdiction.",
  },
  {
    icon: HiQueueList,
    title: "Bulk operations & imports",
    desc: "Batch upload, metadata assignment, and re-classification for thousands of documents at once. Essential for migrations from legacy systems and annual bulk ingestion.",
  },
  {
    icon: HiBolt,
    title: "API & system integrations",
    desc: "REST and webhook APIs connect your DMS to ERP, CRM, HR platforms, and custom applications. Real-time event hooks trigger downstream workflows on document events.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Document Audit & Classification Design",
    desc: "We audit your existing document estate, identify document types, metadata fields, and access requirements before designing the information architecture.",
  },
  {
    step: "02",
    title: "Repository & Search Infrastructure",
    desc: "We build the core document repository on PostgreSQL, configuring AWS S3 or Azure Blob for storage, and Elasticsearch for full-text search and faceted filtering.",
  },
  {
    step: "03",
    title: "Access Control & Compliance Layer",
    desc: "RBAC configuration, LDAP integration, audit trail setup, and retention policy engine — all validated against your compliance requirements before go-live.",
  },
  {
    step: "04",
    title: "OCR & Auto-Classification",
    desc: "AWS Textract integration for scanned document OCR, followed by ML-based auto-classification that tags documents to the correct type and metadata on ingestion.",
  },
  {
    step: "05",
    title: "Migration, UAT & Go-Live",
    desc: "Controlled migration from legacy systems with integrity validation, user acceptance testing, training delivery, and hypercare support through the first 30 days.",
  },
];

const TECH_STACK = [
  { name: "React", color: "bg-sky-100 text-sky-800 border-sky-200" },
  { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
  { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { name: "Elasticsearch", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { name: "AWS S3", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { name: "AWS Textract", color: "bg-violet-100 text-violet-800 border-violet-200" },
  { name: "Redis", color: "bg-rose-100 text-rose-800 border-rose-200" },
  { name: "Azure Blob", color: "bg-teal-100 text-teal-800 border-teal-200" },
  { name: "PDF.js", color: "bg-red-100 text-red-800 border-red-200" },
];

const RESULTS = [
  { metric: "90%", label: "Faster Document Retrieval", desc: "Sub-second full-text search vs 5-10 minutes hunting through folders" },
  { metric: "100%", label: "Audit Trail Compliance", desc: "Every document event logged, immutable, and exportable for regulators" },
  { metric: "5×", label: "Storage Efficiency", desc: "Deduplication, compression, and tiered storage cut total storage cost" },
];

const RELATED = [
  {
    title: "Workflow Automation",
    desc: "Add approval routing, e-signatures, and deadline escalation on top of your enterprise DMS.",
    href: "/document-management-system/document-workflow-automation",
    icon: HiBolt,
  },
  {
    title: "Cloud Document Storage",
    desc: "Encrypted, geo-redundant cloud storage layer with tiered lifecycle policies.",
    href: "/document-management-system/cloud-document-storage",
    icon: HiCloud,
  },
  {
    title: "Custom ERP Solutions",
    desc: "Embed your DMS directly inside your ERP for seamless purchase order and invoice management.",
    href: "/erp-development/custom-erp-solutions",
    icon: HiQueueList,
  },
];

const FAQS = [
  {
    q: "How many documents can the enterprise DMS handle?",
    a: "Our architecture scales to hundreds of millions of documents without performance degradation. We use Elasticsearch sharding for search and S3/Azure Blob object storage with no practical size ceiling. The largest repository we have delivered to date holds over 200 million documents with consistent sub-second search performance.",
  },
  {
    q: "Can it replace our current SharePoint document library?",
    a: "Yes. We provide a full SharePoint migration service — extracting documents, metadata, permissions, and version history, then loading them into the new DMS with integrity verification. We keep SharePoint running in read-only mode during the transition so no work is disrupted.",
  },
  {
    q: "How does role-based access control work?",
    a: "We implement RBAC at three levels: document type (e.g., all HR contracts), folder, and individual document. Permissions are inherited down the hierarchy and can be overridden at any level. We integrate with your existing Active Directory or LDAP so users authenticate with their existing corporate credentials — no separate login needed.",
  },
  {
    q: "Does the DMS support scanned paper documents?",
    a: "Yes. We integrate AWS Textract for OCR, extracting text and structured data from scanned PDFs and image files. Extracted text is indexed for full-text search, and extracted structured fields (dates, amounts, names) are written to the document metadata automatically.",
  },
  {
    q: "What does the audit trail capture?",
    a: "The audit trail captures every event: document creation, upload, view, download, edit, version creation, metadata change, permission change, sharing, movement, and deletion. Each event is timestamped, attributed to a specific user and IP address, and written to an immutable append-only log that cannot be modified even by administrators.",
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

export default function EnterpriseDocumentManagementPage() {
  return (
    <>
      <Script
        id="enterprise-dms-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 bg-grid pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
              <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/document-management-system" className="hover:text-teal-600 transition-colors">Document Management</Link>
              <span>/</span>
              <span className="text-slate-300 font-medium">Enterprise DMS</span>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-700/50 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <HiFolderOpen className="w-4 h-4" />
              Enterprise DMS
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
            >
              Enterprise Document{" "}
              <span className="text-gradient">Management System</span> Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-300 text-lg leading-relaxed mb-10"
            >
              Build a scalable, secure enterprise DMS — hierarchical folders, metadata tagging,
              version control, full-text search, access control, and compliance-ready audit trails
              that retrieves any document in under 0.3 seconds.
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

          {/* Right — search results card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-4 py-2 flex items-center gap-2">
                <HiMagnifyingGlass className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300 text-sm">&ldquo;Q4 Contract&rdquo;</span>
              </div>
              <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg">0.3s</span>
            </div>

            <p className="text-slate-500 text-xs mb-3">3 results — sorted by relevance</p>

            {[
              { name: "Acme_Corp_Q4_Contract_v3.pdf", date: "12 Nov 2024", score: "98%" },
              { name: "Q4_MSA_Template_Final.docx", date: "04 Oct 2024", score: "87%" },
              { name: "Q4_Contract_Review_Notes.pdf", date: "28 Sep 2024", score: "74%" },
            ].map(({ name, date, score }, i) => (
              <div key={name} className={`flex items-center justify-between py-3 ${i < 2 ? "border-b border-slate-700" : ""}`}>
                <div className="flex items-center gap-3 min-w-0">
                  <HiDocumentText className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-white text-xs font-medium truncate">{name}</p>
                    <p className="text-slate-500 text-xs">{date}</p>
                  </div>
                </div>
                <span className="text-teal-400 text-xs font-bold ml-3">{score}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
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
              Why Generic File Storage{" "}
              <span className="text-gradient">Fails Enterprises</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              SharePoint, Google Drive, and file servers were designed for basic file access — not
              enterprise-grade document management with compliance, workflow, and search requirements.
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

      {/* ── SOLUTION ──────────────────────────────────────────────────────── */}
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
              What Our Enterprise DMS <span className="text-gradient">Delivers</span>
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
            Our <span className="text-gradient">Delivery Process</span>
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
            Technologies We Use
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
        heading="Ready to Build a Document Repository That Actually Works?"
        badge="Free Enterprise DMS Consultation"
      />

      <Footer />
      <FloatingBookingButton />
    </>
  );
}
