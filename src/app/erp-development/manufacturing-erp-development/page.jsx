"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiWrenchScrewdriver,
  HiCpuChip,
  HiCube,
  HiChartBarSquare,
  HiCircleStack,
  HiBolt,
  HiShieldCheck,
  HiClock,
  HiCalendarDays,
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
    icon: HiCalendarDays,
    title: "MRP / MPS Production Scheduling",
    desc: "Material Requirements Planning and Master Production Scheduling engines that calculate what to make, when, and in what quantity — based on live sales orders, BOM structures, and current inventory levels.",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Shop Floor Control & Work Orders",
    desc: "Digital work orders with real-time status tracking across work centres. Operators update job progress from tablets on the floor; supervisors see capacity loading in real time.",
  },
  {
    icon: HiCube,
    title: "Bill of Materials Management",
    desc: "Multi-level BOM with version control, engineering change orders (ECO), and automatic cost roll-up. Changes propagate instantly to production schedules and inventory requirements.",
  },
  {
    icon: HiShieldCheck,
    title: "Quality Control & Inspection",
    desc: "Inline quality gates at each production stage, configurable inspection checklists, non-conformance reports, corrective action tracking, and full lot traceability from raw material to finished good.",
  },
  {
    icon: HiChartBarSquare,
    title: "Machine Utilisation & OEE",
    desc: "Real-time OEE (Overall Equipment Effectiveness) dashboards pulling data from PLC integrations or manual entry. Identify availability, performance, and quality losses before they compound.",
  },
  {
    icon: HiCpuChip,
    title: "Preventive Maintenance Scheduling",
    desc: "Asset-based maintenance plans with usage-based triggers, spare parts inventory linkage, and downtime logging. Reduce unplanned stoppages with data-driven maintenance intervals.",
  },
  {
    icon: HiCircleStack,
    title: "Inventory & Raw Material Control",
    desc: "Bi-directional inventory movement across receiving, production consumption, and finished goods — with real-time valuation using FIFO, FEFO, or weighted average costing.",
  },
  {
    icon: HiBolt,
    title: "Production Reporting & Analytics",
    desc: "Shift reports, production efficiency summaries, scrap analysis, and cost-per-unit dashboards. All data live — no waiting for month-end Excel consolidation.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Production Workflow Mapping",
    desc: "We walk your production floor and document every process step, decision point, and exception — routing, work centres, shifts, and quality gates.",
  },
  {
    step: "02",
    title: "Data Model & BOM Architecture",
    desc: "Design the item master, BOM structure, routing definitions, and work centre hierarchy before writing a single line of production code.",
  },
  {
    step: "03",
    title: "Core Module Development",
    desc: "MRP engine, work order system, and shop floor interface built in parallel sprints with your production team testing against real orders.",
  },
  {
    step: "04",
    title: "Integration & Data Migration",
    desc: "Connect to existing accounting systems, quality tools, and IoT devices. Historical production data migrated and reconciled.",
  },
  {
    step: "05",
    title: "Go-Live & Hypercare",
    desc: "Parallel-run period with your legacy system, then a phased cutover. Our team is on-call for 30 days post-launch.",
  },
];

const TECH = [
  "Node.js", "React", "PostgreSQL", "Redis", "TimescaleDB",
  "MQTT (IoT)", "REST APIs", "AWS", "Docker", "Kubernetes",
  "Barcode / RFID", "OPC-UA", "WebSockets",
];

const RESULTS = [
  { metric: "35%", label: "Production Efficiency Increase", desc: "Measured as output per labour hour vs. pre-implementation baseline." },
  { metric: "50%", label: "Reduction in Unplanned Downtime", desc: "Preventive maintenance scheduling and real-time OEE alerts." },
  { metric: "99.2%", label: "On-Time Delivery Rate", desc: "MPS-driven scheduling with realistic capacity constraints." },
];

const RELATED = [
  {
    href: "/erp-development/inventory-management-system",
    title: "Inventory Management System",
    desc: "Extend manufacturing ERP with a dedicated inventory system covering multi-warehouse and RFID tracking.",
  },
  {
    href: "/erp-development/custom-erp-solutions",
    title: "Custom ERP Solutions",
    desc: "Add finance, HR, and project management modules to your manufacturing ERP for a complete business system.",
  },
  {
    href: "/saas-development/b2b-saas-development",
    title: "B2B SaaS Development",
    desc: "Turn your manufacturing ERP into a multi-tenant SaaS offering for others in your vertical.",
  },
];

const FAQS = [
  {
    q: "Can you integrate with our existing PLC or SCADA systems?",
    a: "Yes. We integrate with PLCs via OPC-UA, Modbus, or direct database polling depending on your equipment. For SCADA systems, we consume published data feeds and map them into the ERP's machine utilisation and downtime modules.",
  },
  {
    q: "How do you handle multi-plant manufacturing operations?",
    a: "Our architecture supports multi-site deployments with a shared item master and BOM, site-specific routing and work centres, consolidated reporting across plants, and inter-plant transfer orders.",
  },
  {
    q: "Does the MRP engine work with make-to-order and make-to-stock simultaneously?",
    a: "Yes. The MRP engine supports mixed-mode manufacturing — items can be flagged as MTS (make-to-stock), MTO (make-to-order), ATO (assemble-to-order), or ETO (engineer-to-order) with appropriate demand sourcing logic for each.",
  },
  {
    q: "Can shop floor operators use it on tablets or touchscreens?",
    a: "We build a dedicated shop floor interface optimised for touch, large text, and gloved operation. Works offline with sync when connectivity is restored — critical for environments with unreliable Wi-Fi coverage.",
  },
  {
    q: "How do you handle engineering change orders (ECOs) and BOM versioning?",
    a: "All BOM changes go through an ECO workflow with approval stages. Effective date, effective quantity, and supersession rules control when the change becomes active in production. Full history is preserved for audit purposes.",
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

export default function ManufacturingERPPage() {
  return (
    <>
      <Script
        id="mfg-erp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.nav {...fadeUp(0)} className="flex items-center gap-2 text-slate-400 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <HiArrowRight className="w-3 h-3" />
            <Link href="/erp-development" className="hover:text-white transition-colors">ERP Development</Link>
            <HiArrowRight className="w-3 h-3" />
            <span className="text-slate-300">Manufacturing ERP</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiWrenchScrewdriver className="w-3.5 h-3.5" />
                  Manufacturing ERP Development
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl font-bold font-heading text-white leading-tight mb-6">
                Custom <span className="text-gradient">Manufacturing ERP</span> Development
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Production planning, shop floor control, and quality management built around your
                actual plant layout — not a generic ERP template. Stop managing your factory in
                spreadsheets or working around an ERP that doesn't understand your routing logic.
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
                <Link
                  href="/erp-development"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  All ERP Services
                </Link>
              </motion.div>
            </div>

            {/* Right panel */}
            <motion.div {...fadeUp(2)} className="hidden lg:block">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Live Production Dashboard</p>
                <p className="text-white font-bold text-xl mb-5">Shift Status — Line 3</p>
                <div className="space-y-3">
                  {[
                    { label: "Work Orders Open", value: "14", color: "text-white" },
                    { label: "On-Time Completion", value: "97.4%", color: "text-teal-400" },
                    { label: "OEE (Overall Equipment Eff.)", value: "82.1%", color: "text-teal-400" },
                    { label: "Scrap Rate", value: "0.8%", color: "text-amber-400" },
                    { label: "Quality Holds", value: "2", color: "text-amber-400" },
                    { label: "Next Maintenance Due", value: "18:00 today", color: "text-slate-300" },
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
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6">
              Why Off-the-Shelf ERPs Fail on the Manufacturing Floor
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Generic routing logic that doesn't match your work centre setup",
              "BOM structures that can't handle your product configurations",
              "MRP engines that ignore real-world capacity constraints",
              "No integration with your PLCs, SCADA, or IoT sensors",
              "Quality control modules designed for warehouses, not process manufacturing",
              "Per-user licensing that penalises you for putting tablets on the shop floor",
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
              Manufacturing ERP Modules We Build
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Each module is designed around real manufacturing workflows — not adapted from
              a distribution or retail ERP template.
            </p>
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
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">Delivery Process</p>
            <h2 className="text-3xl font-bold font-heading text-white mb-4">
              From Plant Floor to Production System in 5 Phases
            </h2>
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
          <motion.div {...fadeUp(0)}>
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8">Built on Proven Manufacturing Technology</h2>
          </motion.div>
          <motion.div {...fadeUp(1)} className="flex flex-wrap justify-center gap-3">
            {TECH.map((t) => (
              <span key={t} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:border-teal-400 hover:text-teal-700 transition-colors">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="bg-dots bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">Measurable Impact on Production Operations</h2>
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
            heading="Ready to modernise your manufacturing operations?"
            subheading="Talk to an ERP architect who has delivered production systems to manufacturers across multiple industries."
            cta="Book Manufacturing ERP Consultation"
          />
        </motion.div>
      </section>

      {/* ── RELATED ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Extend Your Manufacturing ERP</h2>
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
            <h2 className="text-3xl font-bold font-heading text-slate-900">Manufacturing ERP Questions</h2>
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
        heading="Let's Build Your Manufacturing ERP"
        subheading="Schedule a 30-minute session with our manufacturing ERP team. We'll map your production workflows and outline a delivery plan."
        primaryCTA="Schedule Manufacturing ERP Consultation"
        stats={[
          { value: "35%", label: "Avg efficiency gain" },
          { value: "6 mo", label: "Typical delivery" },
          { value: "100%", label: "Source code ownership" },
        ]}
        trustItems={[
          "NDA before any workflow discussion",
          "Engineers with real manufacturing experience",
          "Fixed-scope delivery available",
        ]}
      />

      <Footer />
      <FloatingBookingButton label="Book ERP Call" />
    </>
  );
}
