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
    title: "On-premise storage is expensive and fragile",
    desc: "NAS arrays, SAN infrastructure, and tape backup systems require capital expenditure, specialist staff, and regular hardware refresh cycles — while still delivering inferior durability compared to cloud object storage.",
  },
  {
    title: "Security and compliance are unproven",
    desc: "File server-based storage rarely has encryption at rest, fine-grained access controls, or tamper-proof audit trails — leaving organisations unable to demonstrate compliance to auditors and regulators.",
  },
  {
    title: "Storage costs grow uncontrolled",
    desc: "Without lifecycle policies, organisations pay premium prices to keep 7-year-old documents on hot storage that has not been accessed since the day it was filed. Tiered storage reduces this cost by 80%.",
  },
  {
    title: "No global access with consistent performance",
    desc: "Remote offices and international teams accessing documents over VPN face latency, packet loss, and frustrating performance. CDN-backed cloud storage delivers consistent sub-50ms retrieval worldwide.",
  },
];

const FEATURES = [
  {
    icon: HiLockClosed,
    title: "256-bit AES encryption (at rest & transit)",
    desc: "All documents encrypted at rest with AES-256 and in transit with TLS 1.3. Customer-managed encryption keys (CMK) available for regulated industries requiring key ownership.",
  },
  {
    icon: HiCloud,
    title: "Multi-region geo-redundant storage",
    desc: "Documents replicated across a minimum of three geographically separated data centres — providing 99.999999999% (eleven 9s) durability with automatic failover on regional outage.",
  },
  {
    icon: HiBolt,
    title: "CDN delivery for fast global access",
    desc: "Documents served via AWS CloudFront or Azure CDN from the edge node nearest to the requestor — delivering sub-50ms retrieval for users in any geography.",
  },
  {
    icon: HiShieldCheck,
    title: "Presigned secure URLs",
    desc: "Time-limited, single-use presigned URLs for secure document sharing without exposing storage credentials. URL expiry, IP restriction, and access logging all configurable per share link.",
  },
  {
    icon: HiClock,
    title: "Automated lifecycle policies",
    desc: "Rules-based transition of documents from hot to cool to archive storage based on last-access date, document type, or metadata values — with configurable retention hold exemptions.",
  },
  {
    icon: HiQueueList,
    title: "Tiered storage cost optimisation",
    desc: "Three-tier storage architecture (hot/cool/archive) automatically places documents in the most cost-effective tier based on access patterns — reducing total storage cost by up to 60%.",
  },
  {
    icon: HiDocumentText,
    title: "WORM compliance (write-once)",
    desc: "Write-once, read-many (WORM) storage for regulated documents — preventing modification or deletion for the duration of a specified retention period. Required for SEC 17a-4, FINRA, and FDA 21 CFR Part 11.",
  },
  {
    icon: HiSparkles,
    title: "Full API access",
    desc: "RESTful API for all storage operations — upload, download, metadata update, share link generation, lifecycle management, and audit log retrieval. SDK clients for Node.js, Python, and Java.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Storage Audit & Compliance Review",
    desc: "We audit your current document volumes, access patterns, compliance requirements, and retention obligations to design the optimal storage architecture.",
  },
  {
    step: "02",
    title: "Architecture Design & Cost Modelling",
    desc: "We model the tiered storage architecture with projected costs across hot, cool, and archive tiers — providing a concrete cost reduction forecast before any build begins.",
  },
  {
    step: "03",
    title: "Storage Infrastructure Build",
    desc: "We provision and configure AWS S3 or Azure Blob storage with encryption, lifecycle policies, WORM settings, CDN, and IAM access controls — fully infrastructure-as-code.",
  },
  {
    step: "04",
    title: "API & Application Integration",
    desc: "We build the storage API layer and integrate it with your DMS, ERP, HR system, or custom applications — with SDK clients and full API documentation for your development team.",
  },
  {
    step: "05",
    title: "Migration & Validation",
    desc: "We migrate documents from existing storage with checksum validation, metadata preservation, and lifecycle policy backfill — ensuring every document lands in the correct tier.",
  },
];

const TECH_STACK = [
  { name: "AWS S3", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { name: "Azure Blob Storage", color: "bg-teal-100 text-teal-800 border-teal-200" },
  { name: "AWS CloudFront", color: "bg-amber-100 text-amber-800 border-amber-200" },
  { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
  { name: "AWS Lambda", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { name: "Terraform", color: "bg-violet-100 text-violet-800 border-violet-200" },
  { name: "Redis", color: "bg-rose-100 text-rose-800 border-rose-200" },
  { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
];

const RESULTS = [
  { metric: "60%", label: "Storage Cost Reduction", desc: "Automated tiering moves aged documents to archive at $0.002/GB — vs $0.023/GB on hot storage" },
  { metric: "99.999999999%", label: "Durability", desc: "Eleven nines durability via multi-region replication — equivalent to losing one document per billion per year" },
  { metric: "<50ms", label: "Retrieval Time", desc: "CDN edge delivery serves documents in under 50ms for users anywhere in the world" },
];

const RELATED = [
  {
    title: "Enterprise DMS",
    desc: "The document management layer built on top of your cloud storage — metadata, search, version control, and workflows.",
    href: "/document-management-system/enterprise-document-management",
    icon: HiDocumentText,
  },
  {
    title: "Workflow Automation",
    desc: "Automated document processing pipelines that trigger on storage events — classification, routing, and notification.",
    href: "/document-management-system/document-workflow-automation",
    icon: HiBolt,
  },
  {
    title: "Cloud SaaS Solutions",
    desc: "Cloud-native SaaS applications built on the same secure, scalable infrastructure as your document storage.",
    href: "/saas-development/cloud-saas-solutions",
    icon: HiCloud,
  },
];

const FAQS = [
  {
    q: "Which cloud provider do you recommend — AWS or Azure?",
    a: "Both AWS S3 and Azure Blob Storage are enterprise-grade and functionally equivalent for most use cases. We recommend AWS S3 if your broader infrastructure is on AWS, and Azure Blob if your organisation is an Azure-first shop. For organisations already using Microsoft 365, Azure Blob often integrates more naturally. We are cloud-agnostic and will design the right solution for your existing environment.",
  },
  {
    q: "How does tiered storage reduce costs?",
    a: "Hot storage (frequently accessed documents) costs approximately $0.023/GB/month. Cool storage (accessed less than once per month) costs $0.01/GB/month. Archive storage (rarely accessed, 90+ days old) costs as little as $0.002/GB/month. Automated lifecycle policies move documents between tiers based on last-access date — typically reducing total storage cost by 50-65% within 12 months.",
  },
  {
    q: "What is WORM storage and do we need it?",
    a: "WORM (write-once, read-many) storage prevents documents from being modified or deleted for a specified retention period — even by administrators. It is required for regulated industries: SEC Rule 17a-4 for broker-dealers, FINRA for financial services, FDA 21 CFR Part 11 for life sciences, and HIPAA for some healthcare records. If you are in a regulated industry, we assess your specific requirements and configure WORM with the appropriate retention periods.",
  },
  {
    q: "How are documents secured against unauthorised access?",
    a: "Documents are encrypted at rest with AES-256 using keys managed in AWS KMS or Azure Key Vault. In transit, all connections use TLS 1.3. Access is controlled via IAM roles — no public access is ever permitted. Presigned URLs for document sharing are time-limited, IP-restricted, and single-use. Every access event is logged to an immutable audit trail.",
  },
  {
    q: "Can we retrieve documents from archive storage quickly if needed?",
    a: "Archive retrieval time depends on the restoration tier requested. Expedited restoration takes 1-5 minutes and costs slightly more per GB. Standard restoration takes 3-5 hours. Bulk restoration takes 5-12 hours at the lowest cost. For compliance documents that are rarely accessed but must be available when a regulator requests them, standard or bulk restoration is typically adequate. We configure restoration workflows that notify you when an archived document is ready.",
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

export default function CloudDocumentStoragePage() {
  return (
    <>
      <Script
        id="cloud-storage-faq-schema"
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
              <span className="text-slate-300 font-medium">Cloud Storage</span>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-teal-900/50 border border-teal-700/50 text-teal-400 text-xs font-semibold px-4 py-2 rounded-full mb-6"
            >
              <HiCloud className="w-4 h-4" />
              Cloud Document Storage
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
            >
              Cloud Document{" "}
              <span className="text-gradient">Storage Solution</span>{" "}
              Development
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-slate-300 text-lg leading-relaxed mb-10"
            >
              Secure cloud-native document storage — AES-256 encrypted at rest and in transit,
              geo-redundant with eleven nines durability, CDN delivery under 50ms, and lifecycle
              policies that reduce storage costs by 60%.
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
                Get Cost Estimate
              </Link>
            </motion.div>
          </div>

          {/* Right — storage tiers card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-slate-400 text-xs font-medium">STORAGE ARCHITECTURE — 3-TIER</span>
              <span className="bg-teal-600/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full">Cost Optimised</span>
            </div>

            <div className="space-y-4">
              {[
                {
                  tier: "Hot",
                  window: "0–30 days",
                  price: "$0.023/GB",
                  pct: 20,
                  color: "bg-blue-500",
                  desc: "Active documents, recent uploads",
                },
                {
                  tier: "Cool",
                  window: "31–90 days",
                  price: "$0.010/GB",
                  pct: 45,
                  color: "bg-teal-500",
                  desc: "Infrequently accessed, recent archives",
                },
                {
                  tier: "Archive",
                  window: "90+ days",
                  price: "$0.002/GB",
                  pct: 35,
                  color: "bg-slate-600",
                  desc: "Compliance retention, historical records",
                },
              ].map(({ tier, window, price, pct, color, desc }) => (
                <div key={tier} className="bg-slate-900/60 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-white font-bold text-sm">{tier}</span>
                      <span className="text-slate-400 text-xs ml-2">{window}</span>
                    </div>
                    <span className="text-teal-400 font-bold text-sm">{price}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 mb-1">
                    <div className={`h-2 rounded-full ${color}`} style={{ width: `${pct}%` }} />
                  </div>
                  <p className="text-slate-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-700 flex items-center justify-between">
              <span className="text-slate-400 text-xs">Avg blended cost</span>
              <span className="text-teal-300 font-bold text-sm">$0.009/GB — 60% savings</span>
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
              Why On-Premise Storage Is{" "}
              <span className="text-gradient">Holding You Back</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              File servers and NAS arrays were the right answer in 2005. Cloud-native object storage
              is the right answer now — and the economics are not close.
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
              Enterprise Storage <span className="text-gradient">Features</span>
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
            How We <span className="text-gradient">Build Your Storage Solution</span>
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
            What You Can Expect
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
                <p className="text-4xl font-black text-gradient mb-2">{metric}</p>
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
        heading="Cut Storage Costs by 60% with Enterprise Cloud Document Storage"
        badge="Free Storage Consultation"
      />

      <Footer />
      <FloatingBookingButton />
    </>
  );
}
