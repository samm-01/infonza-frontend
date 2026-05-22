"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiQrCode,
  HiBuildingOffice2,
  HiChartBarSquare,
  HiArrowPath,
  HiShieldCheck,
  HiBolt,
  HiCpuChip,
  HiUsers,
  HiTruck,
  HiCircleStack,
  HiCog6Tooth,
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
    icon: HiArrowPath,
    title: "Receiving & Putaway Automation",
    desc: "Directed putaway rules assign every inbound pallet or carton to the optimal bin based on item velocity, zone affinity, weight/cube constraints, and cross-dock requirements. ASN matching, PO reconciliation, and GRN posting happen in real time as product is scanned at the dock.",
  },
  {
    icon: HiQrCode,
    title: "Barcode & RFID Scanning",
    desc: "Native support for 1D/2D barcodes, GS1-128 labels, and UHF RFID tags via handheld scanners, ring scanners, mobile devices, or fixed tunnel readers. Print-on-demand labels for items, pallets, and locations directly from the WMS without a separate label management system.",
  },
  {
    icon: HiBolt,
    title: "Pick-Pack-Ship Workflows",
    desc: "Configurable picking strategies — discrete, batch, wave, cluster, and zone — selected per order type or sales channel. Pick confirmation via scan, pack station cartonisation logic, weight verification, and carrier label generation all within a single scan-guided mobile interface.",
  },
  {
    icon: HiChartBarSquare,
    title: "Slot Optimisation & Replenishment",
    desc: "Velocity-based slotting analysis identifies fast-movers for golden zone placement and calculates travel-time savings per re-slot. Automatic replenishment triggers move bulk stock from reserve to pick faces before locations empty, eliminating pick shortages during peak shifts.",
  },
  {
    icon: HiUsers,
    title: "Labor Management & KPIs",
    desc: "Engineered labor standards set per-task time expectations for receiving, putaway, picking, and packing. Real-time productivity dashboards show units per hour, pick accuracy, and utilisation by associate, shift, and team — enabling data-driven coaching and incentive programs.",
  },
  {
    icon: HiTruck,
    title: "Yard & Dock Management",
    desc: "Trailer tracking from gate-in to gate-out with dock door assignment, inbound/outbound scheduling, live yard map, and carrier check-in via driver mobile app or kiosk. Yard moves, trailer swaps, and cross-dock opportunities visible in a single control tower view.",
  },
  {
    icon: HiCpuChip,
    title: "ERP Integration (SAP / Custom)",
    desc: "Bi-directional integration with SAP ERP, custom ERP systems, and accounting platforms. Stock movements, GRNs, inventory adjustments, and shipment confirmations flow automatically — eliminating double-entry and keeping your ERP's financial ledger in sync with the warehouse floor.",
  },
  {
    icon: HiCircleStack,
    title: "eCommerce Order Management",
    desc: "Real-time order ingestion from Shopify, WooCommerce, Amazon Seller Central, and custom storefronts. Available-to-promise (ATP) inventory reservation, multi-channel wave planning, and carrier rate shopping — with fulfillment status pushed back to the selling platform automatically.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Warehouse Audit & Gap Analysis",
    desc: "We walk your warehouse floor, document slotting layout, movement types, staffing structure, and current system pain points before any design work begins.",
  },
  {
    step: "02",
    title: "System Design & Data Model",
    desc: "Warehouse map digitised into zone/aisle/bay/bin hierarchy. Item master, UOM, and scanning rules designed. WMS architecture spec reviewed and signed off.",
  },
  {
    step: "03",
    title: "WMS Development & Configuration",
    desc: "Core receiving, putaway, picking, and shipping modules built in two-week sprints. Your warehouse team joins UAT from week 5 to validate workflows against real inventory.",
  },
  {
    step: "04",
    title: "Hardware & Integration Setup",
    desc: "Handheld scanners, label printers, and RFID readers configured and tested. ERP and eCommerce integrations built and validated with production data loads.",
  },
  {
    step: "05",
    title: "Go-Live & Hypercare",
    desc: "Phased go-live starting with a single zone or shift. On-site support during first three days of live operation, then 30-day hypercare with same-day response SLA.",
  },
];

const TECH = [
  "Node.js", "React", "PostgreSQL", "Redis", "RFID Middleware",
  "Barcode APIs", "AWS", "Docker", "React Native (Mobile)",
  "WebSockets", "REST & Webhook APIs", "SAP BAPI / RFC",
  "Shopify API", "WooCommerce REST", "Amazon SP-API",
];

const RESULTS = [
  {
    metric: "50%",
    label: "Picking Accuracy Improvement",
    desc: "Scan-verified pick confirmation and directed workflows eliminate mis-picks and short-ships that erode customer satisfaction.",
  },
  {
    metric: "35%",
    label: "Labor Cost Reduction",
    desc: "Optimised slotting, wave planning, and labor standards cut unproductive travel time and overtime spend on the warehouse floor.",
  },
  {
    metric: "3×",
    label: "Throughput Increase",
    desc: "Batch and cluster picking combined with dock-door scheduling allows the same team to process three times the daily order volume.",
  },
];

const RELATED = [
  {
    href: "/erp-development/inventory-management-system",
    title: "Inventory Management System",
    desc: "Real-time stock tracking, reorder automation, and demand forecasting — the supply-side foundation your WMS operates on.",
  },
  {
    href: "/erp-development/logistics-erp-software",
    title: "Logistics ERP Software",
    desc: "Extend warehouse visibility into fleet dispatch, freight, and last-mile delivery with a connected logistics ERP.",
  },
  {
    href: "/saas-development/b2b-saas-development",
    title: "B2B SaaS Development",
    desc: "Turn your WMS into a multi-tenant SaaS product offered to 3PL clients or franchisees under your own brand.",
  },
];

const FAQS = [
  {
    q: "How long does a custom WMS implementation take?",
    a: "A focused WMS for a single-site warehouse with 50,000–200,000 sq ft typically takes 14–20 weeks from kickoff to go-live. That includes warehouse audit, system design, development, hardware setup, data migration, UAT, and a phased go-live. Multi-site or 3PL implementations with complex billing and customer portals run 24–32 weeks. We provide a detailed project plan after the discovery workshop.",
  },
  {
    q: "Can your WMS work with our existing ERP system?",
    a: "Yes. We build bi-directional integrations with SAP ECC, SAP S/4HANA, Microsoft Dynamics 365, NetSuite, and custom-built ERP systems. Integration covers purchase orders, GRNs, inventory adjustments, transfer orders, and shipment confirmations. If your ERP has an API, IDOC interface, or database we can connect to, we can integrate with it.",
  },
  {
    q: "What hardware is required for barcode scanning?",
    a: "We support any Windows CE/Android-based handheld scanners (Zebra, Honeywell, Datalogic), ring scanners for pick operations, mobile devices running our React Native app, and fixed tunnel readers at receiving docks. We do not mandate any specific hardware brand — you can use existing devices you already own or procure new hardware based on our recommendations.",
  },
  {
    q: "How does the WMS handle 3PL billing and client management?",
    a: "For 3PL operations, the WMS tracks all billable activities — storage, pick fees, labour charges, special handling — per customer. Client portals give each customer real-time visibility into their inventory and order status. Billing statements are generated automatically at the end of each billing cycle based on agreed rate cards.",
  },
  {
    q: "Can the WMS support cold-chain or hazardous-material warehouses?",
    a: "Yes. Temperature zone management, FEFO enforcement for cold-chain stock, regulated substance quantity limits by zone, and segregation rules for incompatible goods are all configurable in the WMS. Full lot traceability with expiry date tracking and mandatory FEFO picking is standard in our pharmaceutical and food-grade implementations.",
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

export default function WarehouseManagementSystemPage() {
  return (
    <>
      <Script
        id="wms-faq-schema"
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
            <span className="text-slate-300">Warehouse Management System</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiBuildingOffice2 className="w-3.5 h-3.5" />
                  WMS Development
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl font-bold font-heading text-white leading-tight mb-6">
                Custom <span className="text-gradient">Warehouse Management System</span> (WMS) Development
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Build a custom WMS that controls your warehouse floor — receiving, putaway, pick-pack-ship,
                slot optimisation, labor management, and seamless ERP/eCommerce integration. Built for your
                layout, your SKU mix, and your operational complexity.
              </motion.p>
              <motion.div {...fadeUp(3)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Schedule Free WMS Consultation
                  <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  Contact Our Team
                </Link>
              </motion.div>
            </div>

            {/* Right panel */}
            <motion.div {...fadeUp(2)} className="hidden lg:block">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Live View</p>
                <p className="text-white font-bold text-xl mb-5">Warehouse Floor Status</p>
                <div className="space-y-3 mb-5">
                  {[
                    { label: "Zone A", value: "94% utilized", color: "text-amber-400" },
                    { label: "Zone B", value: "78% utilized", color: "text-teal-400" },
                    { label: "Dock 1", value: "Receiving 12 pallets", color: "text-blue-400" },
                    { label: "Dock 2", value: "Shipping 8 orders", color: "text-teal-400" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2 border-b border-slate-700/60 last:border-0">
                      <span className="text-slate-400 text-sm font-medium">{row.label}</span>
                      <span className={`text-sm font-bold ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-700/50 rounded-xl px-4 py-3 flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Active picks</span>
                  <span className="text-teal-400 font-bold text-lg">47</span>
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
              Why Off-the-Shelf WMS Software Fails Growing Operations
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Generic WMS platforms promise flexibility but deliver rigid workflows designed for the average
              warehouse — not yours. Here is where they consistently fall short.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Rigid pick strategies cannot accommodate your mix of discrete, batch, and zone picking across different order types and sales channels",
              "Annual per-user license fees add up to six-figure sums — yet half the modules are never activated because they do not match your operation",
              "ERP integration is limited to pre-built connectors that require expensive middleware and break on every platform upgrade",
              "Slot optimisation and labor management are locked behind premium tiers that cost more than a custom build over a three-year horizon",
              "UI designed for a generic warehouse forces your team to navigate screens that do not reflect your floor layout or product categories",
              "Vendor roadmaps dictate your feature timeline — critical operational improvements wait years while the vendor prioritises larger enterprise clients",
            ].map((pain, i) => (
              <motion.div key={i} {...fadeUp(i)} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                <span className="mt-0.5 text-red-400 font-bold text-lg leading-none flex-shrink-0">✕</span>
                <p className="text-slate-700 text-sm leading-relaxed">{pain}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
              WMS Modules We Build
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every module is engineered to reflect how your warehouse actually operates — not how a
              generic template assumes it should.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  {...fadeUp(i)}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-teal-200 transition-all"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-slate-900 font-bold mb-2 text-sm">{feat.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Implementation Process</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              How We Deliver Your Custom WMS
            </h2>
          </motion.div>
          <div className="space-y-6">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                {...fadeUp(i)}
                className="flex gap-6 items-start bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <span className="text-4xl font-black text-teal-100 leading-none flex-shrink-0 select-none">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8">Technologies We Use</h2>
          </motion.div>
          <motion.div {...fadeUp(1)} className="flex flex-wrap justify-center gap-3">
            {TECH.map((t) => (
              <span key={t} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              What Our WMS Implementations Deliver
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div
                key={r.label}
                {...fadeUp(i)}
                className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 rounded-2xl p-8 text-center"
              >
                <p className="text-5xl font-black text-gradient mb-2">{r.metric}</p>
                <p className="text-slate-900 font-bold text-lg mb-2">{r.label}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ──────────────────────────────────────────────── */}
      <BookingBanner />

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Extend Your Warehouse Tech Stack</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((rel, i) => (
              <motion.div key={rel.href} {...fadeUp(i)}>
                <Link
                  href={rel.href}
                  className="block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-teal-200 transition-all group"
                >
                  <h3 className="text-slate-900 font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{rel.desc}</p>
                  <span className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium">
                    Learn more <HiArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              Warehouse Management System Questions
            </h2>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp(i)}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <h3 className="text-slate-900 font-bold mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION ─────────────────────────────────────────────── */}
      <BookingSection />

      <Footer />
      <FloatingBookingButton />
    </>
  );
}
