"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiCube,
  HiShieldCheck,
  HiDocumentText,
  HiChartBarSquare,
  HiCircleStack,
  HiBolt,
  HiClock,
  HiGlobeAlt,
  HiCalendarDays,
  HiBeaker,
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
    icon: HiBeaker,
    title: "Formula & Batch Record Management",
    desc: "Version-controlled formula repository with ingredient specifications, substitution rules, and allergen flags. Digital batch records capture actual usage, deviations, and operator sign-offs — replacing paper batch sheets entirely.",
  },
  {
    icon: HiShieldCheck,
    title: "FDA / EU Cosmetics Regulation Compliance",
    desc: "Ingredient INCI name management, prohibited substance screening, 21 CFR Part 11 electronic signature compliance, EU Cosmetics Regulation 1223/2009 documentation, and product safety assessment records — all linked to your batch records.",
  },
  {
    icon: HiClock,
    title: "Shelf-Life & Expiry Control",
    desc: "PAO (Period After Opening) tracking, lot-based expiry management, FEFO (First Expired First Out) picking rules, and automated expiry alerts before products reach warehouse or retail shelves.",
  },
  {
    icon: HiDocumentText,
    title: "Private Label Management",
    desc: "Manage multiple brand identities with separate labelling, component specifications, and regulatory declarations from a shared formula base. Private label customers get their own portal view of their products' status.",
  },
  {
    icon: HiGlobeAlt,
    title: "Retailer EDI Integration",
    desc: "EDI transaction processing for major retail chains — purchase orders (EDI 850), advance ship notices (EDI 856), invoices (EDI 810), and inventory queries. Automated compliance with retail routing guides and labelling requirements.",
  },
  {
    icon: HiCircleStack,
    title: "Raw Material & Ingredient Traceability",
    desc: "Full lot traceability from supplier certificate of analysis (CoA) through production batch to finished good shipment. One-click recall scope identification — know exactly which batches used a recalled ingredient within seconds.",
  },
  {
    icon: HiChartBarSquare,
    title: "Production Planning & Batch Scheduling",
    desc: "Production schedule based on demand forecasts, available ingredients, and filling line capacity. Batch size optimisation to minimise changeover waste and maximise filling line utilisation across multiple formulas.",
  },
  {
    icon: HiBolt,
    title: "Quality Control & Lab Integration",
    desc: "In-process quality checkpoints, finished goods release testing workflows, certificate of analysis generation, and optional LIMS integration for lab data. Non-conforming batch quarantine with investigation and disposition tracking.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Regulatory & Formula Audit",
    desc: "We review your current formula documentation, compliance obligations, and quality processes before designing any system architecture.",
  },
  {
    step: "02",
    title: "Data Model Design",
    desc: "Ingredient master, formula hierarchy, batch record structure, and lot traceability model designed for your product complexity.",
  },
  {
    step: "03",
    title: "Core Module Development",
    desc: "Formula management, batch records, and compliance documentation built in parallel sprints, tested against your actual products.",
  },
  {
    step: "04",
    title: "EDI & Retailer Setup",
    desc: "EDI connections configured for each retailer, tested with actual transaction samples before go-live.",
  },
  {
    step: "05",
    title: "Validation & Go-Live",
    desc: "IQ/OQ/PQ validation documentation if required, training for QC, production, and regulatory staff, and 30-day hypercare.",
  },
];

const TECH = [
  "Node.js", "React", "PostgreSQL", "Redis", "AWS S3",
  "EDI (X12 / EDIFACT)", "REST APIs", "Docker", "AWS",
  "PDF generation", "e-Signature (DocuSign)", "LIMS APIs",
];

const RESULTS = [
  { metric: "100%", label: "Compliance Audit Pass Rate", desc: "Complete digital audit trails satisfy FDA, EU, and retailer compliance inspections first time." },
  { metric: "30%", label: "Reduction in Production Waste", desc: "Optimised batch sizing, FEFO expiry management, and real-time yield tracking reduce raw material waste." },
  { metric: "2×", label: "Faster Product Launch", desc: "Formula-to-label documentation workflow and regulatory screening cut time-to-market in half." },
];

const RELATED = [
  {
    href: "/erp-development/manufacturing-erp-development",
    title: "Manufacturing ERP Development",
    desc: "Add full production planning, MRP scheduling, and shop floor control to your cosmetics ERP.",
  },
  {
    href: "/erp-development/inventory-management-system",
    title: "Inventory Management System",
    desc: "Extend raw material and finished goods management with multi-warehouse and RFID tracking.",
  },
  {
    href: "/document-management-system/legal-document-management",
    title: "Document Management System",
    desc: "Centralise your regulatory submissions, supplier agreements, and product safety assessments.",
  },
];

const FAQS = [
  {
    q: "Does your system support 21 CFR Part 11 electronic records?",
    a: "Yes. Our batch record and formula management modules support 21 CFR Part 11 compliant electronic signatures, audit trails, and record retention. We implement role-based access controls, time-stamped audit logs, and e-signature validation workflows that meet FDA's requirements for electronic records in pharmaceutical and cosmetic manufacturing.",
  },
  {
    q: "Can the system handle both contract manufacturing and private label simultaneously?",
    a: "Yes. The multi-brand architecture allows you to manage formulas shared across private label accounts, with brand-specific labelling, regulatory declarations, and customer portals — all from a single production floor and ingredient inventory. Confidential formula data is logically partitioned per customer.",
  },
  {
    q: "How does the ingredient traceability work for a recall scenario?",
    a: "Every batch record links to specific ingredient lots received, which link to supplier CoA records. In a recall scenario, you enter the affected ingredient lot number and the system immediately returns every batch that consumed it, every finished good lot produced from those batches, and every customer shipment containing those goods — typically in under 30 seconds.",
  },
  {
    q: "Can you integrate with our existing LIMS for lab test results?",
    a: "Yes. We build REST or database-level integrations with most LIMS platforms to pull test results directly into the ERP's quality management module. Test results automatically update batch disposition status, trigger release or rejection workflows, and populate certificate of analysis documents.",
  },
  {
    q: "How do you handle the retailer EDI requirements for major chains?",
    a: "We configure EDI mappings for each retailer's specific requirements — transaction set versions, segment mandates, and routing guide compliance. This includes Walmart, Target, Ulta, Sephora, and other major beauty retailers. We test all transactions with retailer test environments before going live, and maintain the EDI connections as retailer requirements change.",
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

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════════════════ */

export default function CosmeticERPPage() {
  return (
    <>
      <Script
        id="cosmetic-erp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav {...fadeUp(0)} className="flex items-center gap-2 text-slate-400 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <HiArrowRight className="w-3 h-3" />
            <Link href="/erp-development" className="hover:text-white transition-colors">ERP Development</Link>
            <HiArrowRight className="w-3 h-3" />
            <span className="text-slate-300">Cosmetic Industry ERP</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiCube className="w-3.5 h-3.5" />
                  Cosmetic Industry ERP Software
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl font-bold font-heading text-white leading-tight mb-6">
                ERP Software for the{" "}
                <span className="text-gradient">Cosmetics & Beauty</span> Industry
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Formula management, batch traceability, FDA/EU compliance, and private label
                operations — all in one purpose-built system. Purpose-designed for cosmetics
                and personal care manufacturers who've outgrown generic ERPs that don't
                understand regulatory requirements or formula complexity.
              </motion.p>
              <motion.div {...fadeUp(3)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Schedule Free Consultation
                  <HiArrowRight className="w-4 h-4" />
                </a>
                <Link href="/erp-development" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all">
                  All ERP Services
                </Link>
              </motion.div>
            </div>

            {/* Right panel */}
            <motion.div {...fadeUp(2)} className="hidden lg:block">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Quality & Compliance Dashboard</p>
                <p className="text-white font-bold text-xl mb-5">Batch Status — This Week</p>
                <div className="space-y-3">
                  {[
                    { label: "Batches Released", value: "42", color: "text-teal-400" },
                    { label: "Pending QC Release", value: "7", color: "text-amber-400" },
                    { label: "Compliance Documents", value: "100% Complete", color: "text-teal-400" },
                    { label: "Expiring Lots (30 days)", value: "3", color: "text-amber-400" },
                    { label: "Retailer EDI Orders", value: "18 processed", color: "text-white" },
                    { label: "Regulatory Alerts", value: "0 open", color: "text-teal-400" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2 border-b border-slate-700/60 last:border-0">
                      <span className="text-slate-400 text-sm">{row.label}</span>
                      <span className={`text-sm font-bold ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">
              Why Generic ERP Systems Fail Cosmetics Manufacturers
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Formula management done in shared spreadsheets with no version control",
              "Batch records still on paper, causing delays in audits and recalls",
              "No automated FDA/EU ingredient compliance screening",
              "Shelf-life and expiry tracked manually across warehouse rows",
              "Private label brand management requires duplicate data entry",
              "Retailer EDI requires manual re-keying of purchase orders",
            ].map((pain, i) => (
              <motion.div key={pain} {...fadeUp(i)} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                <span className="mt-0.5 text-red-400 font-bold text-lg leading-none">✕</span>
                <p className="text-slate-700 text-sm">{pain}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section className="bg-dots bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
              Cosmetics ERP Modules We Build
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div key={feat.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{feat.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">Delivery Process</p>
            <h2 className="text-3xl font-bold font-heading text-white">From Regulatory Audit to Validated System</h2>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-4">
            {PROCESS.map((p, i) => (
              <motion.div key={p.step} {...fadeUp(i)} className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
                <div className="text-4xl font-bold text-slate-700/60 mb-2 font-heading">{p.step}</div>
                <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p {...fadeUp(0)} className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</motion.p>
          <motion.h2 {...fadeUp(1)} className="text-2xl font-bold font-heading text-slate-900 mb-8">Built for Regulated Manufacturing</motion.h2>
          <motion.div {...fadeUp(2)} className="flex flex-wrap justify-center gap-3">
            {TECH.map((t) => (
              <span key={t} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:border-teal-400 hover:text-teal-700 transition-colors">{t}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="bg-dots bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">Compliance and Efficiency Gains</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:border-teal-300 hover:shadow-lg transition-all">
                <div className="text-5xl font-bold text-gradient mb-3">{r.metric}</div>
                <h3 className="font-bold text-slate-900 mb-2">{r.label}</h3>
                <p className="text-slate-500 text-sm">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div {...fadeUp(0)}>
          <BookingBanner
            heading="Ready to modernise your cosmetics operations?"
            subheading="Talk to a development team that understands formula management, regulatory compliance, and beauty industry workflows."
            cta="Book Cosmetics ERP Consultation"
          />
        </motion.div>
      </section>

      {/* ── RELATED ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Extend Your Cosmetics Platform</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((rel, i) => (
              <motion.div key={rel.href} {...fadeUp(i)}>
                <Link href={rel.href} className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all h-full">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">{rel.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{rel.desc}</p>
                  <div className="flex items-center gap-1 text-teal-600 text-sm font-semibold">
                    Learn more <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">Cosmetics ERP Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div key={faq.q} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION ─────────────────────────────────────────────── */}
      <BookingSection
        heading="Build Your Cosmetics ERP — Formula to Shelf"
        subheading="Schedule a 30-minute session with our cosmetics ERP team. We'll review your formula management, compliance needs, and retailer requirements."
        primaryCTA="Schedule Cosmetics ERP Consultation"
        stats={[
          { value: "100%", label: "Audit pass rate" },
          { value: "2×", label: "Faster product launch" },
          { value: "30%", label: "Less production waste" },
        ]}
        trustItems={[
          "NDA before any formula or formulation discussion",
          "FDA and EU regulatory expertise",
          "Full source code ownership",
        ]}
      />

      <Footer />
      <FloatingBookingButton label="Book ERP Call" />
    </>
  );
}
