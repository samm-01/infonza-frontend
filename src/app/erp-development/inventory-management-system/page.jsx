"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiCircleStack,
  HiQrCode,
  HiBuildingOffice2,
  HiChartBarSquare,
  HiArrowPath,
  HiShieldCheck,
  HiBolt,
  HiCpuChip,
  HiUsers,
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
    icon: HiCircleStack,
    title: "Real-Time Stock Tracking",
    desc: "Every inventory movement — receipts, transfers, picks, adjustments, and returns — updates stock levels instantly. No batch processing delays. Live dashboards show exact on-hand, on-order, and allocated quantities by location, lot, and serial number.",
  },
  {
    icon: HiBuildingOffice2,
    title: "Multi-Warehouse & Location Management",
    desc: "Manage stock across unlimited warehouses, zones, aisles, bays, and bin positions. Inter-warehouse transfers with in-transit visibility, warehouse-specific reorder points, and consolidated reporting across the entire network.",
  },
  {
    icon: HiQrCode,
    title: "Barcode & RFID Integration",
    desc: "Native barcode scanning via mobile devices, handheld scanners, or fixed readers. RFID tag management for high-velocity or high-value inventory. Print labels for any item, lot, or pallet directly from the system.",
  },
  {
    icon: HiArrowPath,
    title: "Reorder Automation & Purchase Triggers",
    desc: "Configurable reorder points and reorder quantities per item and location. Automated purchase order generation when stock hits min levels. Safety stock calculations based on lead time variability and demand history.",
  },
  {
    icon: HiChartBarSquare,
    title: "Demand Forecasting & Planning",
    desc: "Statistical demand models using moving average, exponential smoothing, and seasonal decomposition. Forecast accuracy tracking and override capability for promotions, seasonality, or known demand events.",
  },
  {
    icon: HiUsers,
    title: "Supplier & Vendor Management",
    desc: "Supplier lead times, minimum order quantities, price breaks, and performance scorecards. Purchase order management from creation through GRN matching and 3-way invoice reconciliation.",
  },
  {
    icon: HiShieldCheck,
    title: "Lot, Serial & Expiry Traceability",
    desc: "Full forward and backward lot traceability for regulated industries. Serial number tracking for high-value assets. FEFO and FIFO picking rules enforced at the warehouse level to minimise expiry write-offs.",
  },
  {
    icon: HiBolt,
    title: "Cycle Count & Stock Take Management",
    desc: "Planned and unplanned cycle count workflows via mobile app. Blind count enforcement, variance approval workflows, and automatic inventory adjustment posting. Eliminate annual full stock takes with ongoing cycle counting.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Inventory Process Audit",
    desc: "We document your item master structure, warehouse layout, movement types, and reporting needs before any system design.",
  },
  {
    step: "02",
    title: "Data Model & Item Master Design",
    desc: "Item hierarchy, unit of measure conversions, lot and serial tracking rules, and valuation method selected and documented.",
  },
  {
    step: "03",
    title: "Core Module Development",
    desc: "Stock tracking, reorder automation, and mobile scanning built in sprints. Your warehouse team tests from week 4.",
  },
  {
    step: "04",
    title: "Data Migration & Setup",
    desc: "Historical stock balances, open purchase orders, and supplier records migrated and validated before go-live.",
  },
  {
    step: "05",
    title: "Training & Go-Live",
    desc: "Warehouse staff trained on mobile scanning, cycle count procedures, and exception handling. 30-day hypercare support.",
  },
];

const TECH = [
  "Node.js", "React", "PostgreSQL", "Redis", "AWS",
  "WebSockets", "Barcode / QR", "RFID (EPC Gen 2)",
  "React Native (Mobile)", "Docker", "REST APIs",
  "QuickBooks API", "Xero API", "Shopify / WooCommerce",
];

const RESULTS = [
  { metric: "60%", label: "Reduction in Stockouts", desc: "Automated reorder triggers and demand forecasting eliminate manual reorder guesswork." },
  { metric: "45%", label: "Lower Inventory Carrying Costs", desc: "Right-sized safety stocks and demand-driven replenishment cut excess inventory holding." },
  { metric: "99.97%", label: "Inventory Accuracy Rate", desc: "Real-time movement tracking and continuous cycle counting replace error-prone manual counts." },
];

const RELATED = [
  {
    href: "/erp-development/warehouse-management-system",
    title: "Warehouse Management System",
    desc: "Add directed putaway, pick-pack-ship, and slot optimisation on top of your inventory system.",
  },
  {
    href: "/erp-development/manufacturing-erp-development",
    title: "Manufacturing ERP Development",
    desc: "Link inventory management to production planning, BOM consumption, and MRP replenishment.",
  },
  {
    href: "/erp-development/logistics-erp-software",
    title: "Logistics ERP Software",
    desc: "Extend inventory visibility into your fleet and freight system for in-transit stock tracking.",
  },
];

const FAQS = [
  {
    q: "Can your system handle multiple units of measure (UOM) for the same item?",
    a: "Yes. Each item can have a primary stocking UOM and multiple alternate UOMs for purchasing, production, and sales — with configurable conversion factors. For example, you might purchase in pallets, stock in cases, pick in eaches, and receive customer orders in boxes, all tracked and reported correctly.",
  },
  {
    q: "How does the system handle consignment inventory?",
    a: "Consignment inventory is tracked as a separate ownership category at the same physical location. Stock movements, valuation, and reporting distinguish between owned and consignment inventory. Consignment settlement reports are generated based on agreed consumption intervals.",
  },
  {
    q: "Can it integrate with our existing eCommerce platform for order-driven picking?",
    a: "Yes. We build real-time integrations with Shopify, WooCommerce, Magento, Amazon Seller Central, and custom eCommerce platforms. Orders flow in, inventory is allocated and reserved, and fulfillment status updates flow back to the selling platform automatically.",
  },
  {
    q: "How do cycle counts work without shutting down the warehouse?",
    a: "Our cycle count module supports perpetual counting — specific locations or item groups are counted on a rotating schedule while normal warehouse operations continue. Discrepancies are flagged for investigation before posting adjustments. The system tracks count frequency and ensures high-velocity and high-value items are counted more frequently.",
  },
  {
    q: "Can the demand forecasting handle seasonal products?",
    a: "Yes. The forecasting engine supports seasonal index calculation from historical sales patterns, promotion uplift modelling, new product introduction forecasting using analogous item history, and manual override for known future events. Forecast accuracy is tracked per item and the model auto-adjusts based on actual vs. forecast variance.",
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

export default function InventoryManagementPage() {
  return (
    <>
      <Script
        id="ims-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav {...fadeUp(0)} className="flex items-center gap-2 text-slate-400 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <HiArrowRight className="w-3 h-3" />
            <Link href="/erp-development" className="hover:text-white transition-colors">ERP Development</Link>
            <HiArrowRight className="w-3 h-3" />
            <span className="text-slate-300">Inventory Management System</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiCircleStack className="w-3.5 h-3.5" />
                  Custom Inventory Management System Development
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl font-bold font-heading text-white leading-tight mb-6">
                Custom <span className="text-gradient">Inventory Management System</span> Development
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Real-time stock tracking, multi-warehouse management, barcode and RFID integration,
                automated reorder triggers, and demand forecasting — built as one unified system
                that eliminates the spreadsheets, stockouts, and inventory write-offs holding your
                operations back.
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
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Inventory Dashboard</p>
                <p className="text-white font-bold text-xl mb-5">Stock Summary — Live</p>
                <div className="space-y-3">
                  {[
                    { label: "Total SKUs Tracked", value: "4,821", color: "text-white" },
                    { label: "Inventory Accuracy", value: "99.97%", color: "text-teal-400" },
                    { label: "Stockout Alerts", value: "2 items", color: "text-amber-400" },
                    { label: "Reorder Orders Pending", value: "8 POs", color: "text-white" },
                    { label: "In-Transit Stock", value: "$142K", color: "text-teal-400" },
                    { label: "Cycle Count Completion", value: "94% this month", color: "text-teal-400" },
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
              Why Growing Operations Outgrow Generic Inventory Tools
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Stock levels updated overnight or manually — decisions made on yesterday's data",
              "No barcode scanning, requiring manual count entry that introduces errors",
              "Reorder decisions rely on gut feel rather than data-driven triggers",
              "Multi-warehouse operations managed in separate spreadsheets per location",
              "No lot or serial tracking, making recalls and warranties impossible to manage",
              "Inventory valuation reports take days to produce at month-end",
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
              Inventory Management Modules We Build
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
            <h2 className="text-3xl font-bold font-heading text-white">From Inventory Audit to Live System</h2>
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
          <motion.h2 {...fadeUp(1)} className="text-2xl font-bold font-heading text-slate-900 mb-8">Inventory Management Technology</motion.h2>
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
            <h2 className="text-3xl font-bold font-heading text-slate-900">Measurable Inventory Performance Gains</h2>
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
            heading="Ready to eliminate stockouts and inventory surprises?"
            subheading="Get a free inventory system consultation from a team that has built stock management solutions across manufacturing, distribution, and retail."
            cta="Book Inventory System Consultation"
          />
        </motion.div>
      </section>

      {/* ── RELATED ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Extend Your Inventory System</h2>
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
            <h2 className="text-3xl font-bold font-heading text-slate-900">Inventory Management Questions</h2>
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
        heading="Build an Inventory System That Gives You Accurate Stock Data"
        subheading="Schedule a 30-minute session with our inventory system team. We'll map your current process, identify the biggest accuracy and efficiency gaps, and outline a delivery plan."
        primaryCTA="Schedule Inventory System Consultation"
        stats={[
          { value: "60%", label: "Fewer stockouts" },
          { value: "99.97%", label: "Inventory accuracy" },
          { value: "45%", label: "Lower carrying costs" },
        ]}
        trustItems={[
          "NDA before any operations discussion",
          "RFID and barcode hardware expertise",
          "Integrates with existing ERP or accounting software",
        ]}
      />

      <Footer />
      <FloatingBookingButton label="Book IMS Call" />
    </>
  );
}
