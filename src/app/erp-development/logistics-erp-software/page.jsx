"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiTruck,
  HiMapPin,
  HiDocumentText,
  HiGlobeAlt,
  HiChartBarSquare,
  HiShieldCheck,
  HiBolt,
  HiCircleStack,
  HiCpuChip,
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
    icon: HiTruck,
    title: "Fleet Management & Asset Tracking",
    desc: "Real-time GPS tracking of every vehicle, trailer, and asset. Driver assignment, licence expiry alerts, fuel consumption logging, and vehicle lifecycle management in one system.",
  },
  {
    icon: HiMapPin,
    title: "Route Optimisation & Dispatch",
    desc: "Algorithm-driven route planning that accounts for delivery windows, vehicle load capacity, driver hours-of-service regulations, and live traffic data. Reduce fuel consumption and driver overtime simultaneously.",
  },
  {
    icon: HiDocumentText,
    title: "Freight Billing & Revenue Management",
    desc: "Automated freight invoice generation from confirmed deliveries, lane-based rate management, fuel surcharge calculations, accessorial charges, and customer-specific tariff structures.",
  },
  {
    icon: HiGlobeAlt,
    title: "Carrier & Vendor Management",
    desc: "Carrier scorecards, contract rate management, lane bid management, and preferred carrier routing rules. Full visibility into third-party carrier performance against SLAs.",
  },
  {
    icon: HiBolt,
    title: "Real-Time Shipment Tracking",
    desc: "Customer-facing shipment tracking portals, automated ETA notifications via SMS/email, proof of delivery capture, and exception alerting for delays, damages, and missed windows.",
  },
  {
    icon: HiShieldCheck,
    title: "Customs & Trade Compliance",
    desc: "Country-of-origin tracking, HS code management, customs documentation generation, denied party screening, and compliance audit trails for cross-border shipments.",
  },
  {
    icon: HiCircleStack,
    title: "3PL Integration & EDI",
    desc: "EDI 204/210/214 transaction sets for third-party logistics providers. API integrations with major 3PLs, freight brokers, and carrier networks including FedEx, UPS, and DHL.",
  },
  {
    icon: HiChartBarSquare,
    title: "Logistics Analytics & KPI Dashboards",
    desc: "On-time delivery rates, cost-per-mile, lane profitability, driver performance, and fuel efficiency — all in configurable dashboards with drill-down to individual shipment level.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Operations Discovery",
    desc: "We map your freight lanes, carrier mix, billing structures, and exception workflows before any architecture decisions are made.",
  },
  {
    step: "02",
    title: "System Design",
    desc: "Route engine architecture, carrier API integrations, billing rules engine, and real-time tracking infrastructure designed to your scale.",
  },
  {
    step: "03",
    title: "Core Module Build",
    desc: "Fleet management, dispatch, and billing built in parallel sprints. Your operations team tests with live routes from week 4.",
  },
  {
    step: "04",
    title: "Carrier & Integration Setup",
    desc: "EDI connections, carrier API integrations, GPS hardware provisioning, and customer portal deployment.",
  },
  {
    step: "05",
    title: "Go-Live & Training",
    desc: "Dispatcher training, driver app rollout, and 30-day hypercare with our team available for operational questions.",
  },
];

const TECH = [
  "Node.js", "React", "PostgreSQL", "PostGIS", "Redis",
  "Google Maps API", "HERE Maps", "AWS", "Docker",
  "WebSockets", "EDI (X12)", "FedEx API", "UPS API",
  "Twilio SMS", "SendGrid", "Kafka",
];

const RESULTS = [
  { metric: "28%", label: "Fuel Cost Reduction", desc: "Route optimisation and load consolidation algorithms reduce empty miles and fuel waste." },
  { metric: "40%", label: "Faster Dispatch Cycle", desc: "Automated load assignment and optimised routing eliminates manual dispatch bottlenecks." },
  { metric: "99.8%", label: "Shipment Accuracy Rate", desc: "Digital POD capture and real-time exception management eliminate misdeliveries." },
];

const RELATED = [
  {
    href: "/erp-development/warehouse-management-system",
    title: "Warehouse Management System",
    desc: "Connect your logistics ERP to a WMS for seamless inbound and outbound dock management.",
  },
  {
    href: "/erp-development/inventory-management-system",
    title: "Inventory Management System",
    desc: "Link your fleet and freight system to inventory for real-time in-transit stock visibility.",
  },
  {
    href: "/ai-development/ai-workflow-automation",
    title: "AI Workflow Automation",
    desc: "Add predictive ETAs, anomaly detection, and intelligent load planning to your logistics ERP.",
  },
];

const FAQS = [
  {
    q: "Can the route optimisation engine handle time-window delivery constraints?",
    a: "Yes. The routing engine supports hard and soft delivery windows, service time at each stop, driver hours-of-service regulations (HOS), vehicle capacity constraints by weight and volume, and multi-day route planning. It re-optimises dynamically when new orders are added during the dispatch cycle.",
  },
  {
    q: "How does the GPS tracking integrate with our existing fleet hardware?",
    a: "We integrate with most major GPS hardware vendors via their MQTT or REST APIs — including Samsara, Verizon Connect, Geotab, and Omnitracs. For newer fleets, we can recommend appropriate hardware and manage the provisioning.",
  },
  {
    q: "Can we give customers access to track their own shipments?",
    a: "Yes. We build customer-facing shipment tracking portals with automated ETA updates via SMS and email. Customers see their shipment on a live map with milestone updates from pick-up through delivery. Proof of delivery photos are available immediately upon capture.",
  },
  {
    q: "How do you handle freight billing with multiple customer rate structures?",
    a: "The billing engine supports customer-specific rate tables, lane-based pricing, distance-based calculations, volume tiers, fuel surcharge formulas, and accessorial charge schedules. Invoices generate automatically from confirmed delivery data and can be exported to your accounting system.",
  },
  {
    q: "Can this work for a 3PL operation serving multiple shippers?",
    a: "Yes. We've built multi-shipper 3PL platforms with shipper-specific reporting, rate management, and customer portals alongside the core operations system. The architecture keeps shipper data logically separated while allowing consolidated operations visibility for the 3PL.",
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

export default function LogisticsERPPage() {
  return (
    <>
      <Script
        id="logistics-erp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav {...fadeUp(0)} className="flex items-center gap-2 text-slate-400 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <HiArrowRight className="w-3 h-3" />
            <Link href="/erp-development" className="hover:text-white transition-colors">ERP Development</Link>
            <HiArrowRight className="w-3 h-3" />
            <span className="text-slate-300">Logistics ERP Software</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiTruck className="w-3.5 h-3.5" />
                  Logistics ERP Software Development
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl font-bold font-heading text-white leading-tight mb-6">
                Custom <span className="text-gradient">Logistics ERP Software</span> Development
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Fleet management, intelligent route optimisation, freight billing, and carrier
                management built as one integrated system — not a patchwork of disconnected tools.
                Purpose-built for carriers, freight brokers, 3PLs, and in-house logistics operations.
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
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Fleet Operations Dashboard</p>
                <p className="text-white font-bold text-xl mb-5">Today's Dispatch Summary</p>
                <div className="space-y-3">
                  {[
                    { label: "Active Vehicles", value: "47 / 52", color: "text-teal-400" },
                    { label: "Shipments In Transit", value: "183", color: "text-white" },
                    { label: "On-Time Delivery Rate", value: "99.1%", color: "text-teal-400" },
                    { label: "Deliveries Completed", value: "94", color: "text-teal-400" },
                    { label: "Exceptions / Delays", value: "3", color: "text-amber-400" },
                    { label: "Avg Route Efficiency", value: "91.4%", color: "text-teal-400" },
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
              Why Generic TMS and ERP Systems Fall Short for Logistics
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Route planning done in spreadsheets or disconnected mapping tools",
              "Freight billing requires manual data re-entry from dispatch records",
              "No single view of fleet location, load status, and driver availability",
              "Customer calls for shipment status because there's no self-service portal",
              "Carrier rate management locked in email threads and Excel sheets",
              "Compliance documentation generated manually for each cross-border shipment",
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
              Logistics ERP Modules We Build
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
            <h2 className="text-3xl font-bold font-heading text-white">From Operations Discovery to Go-Live</h2>
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
          <motion.h2 {...fadeUp(1)} className="text-2xl font-bold font-heading text-slate-900 mb-8">Logistics-Grade Technology</motion.h2>
          <motion.div {...fadeUp(2)} className="flex flex-wrap justify-center gap-3">
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
            <h2 className="text-3xl font-bold font-heading text-slate-900">Measurable Logistics Performance Gains</h2>
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
            heading="Ready to optimise your logistics operations?"
            subheading="Talk to an ERP architect who has built fleet and freight systems for carriers, 3PLs, and logistics divisions."
            cta="Book Logistics ERP Consultation"
          />
        </motion.div>
      </section>

      {/* ── RELATED ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Extend Your Logistics Platform</h2>
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
            <h2 className="text-3xl font-bold font-heading text-slate-900">Logistics ERP Questions</h2>
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
        heading="Build a Logistics ERP That Keeps Your Fleet Moving"
        subheading="Schedule a 30-minute session with our logistics ERP team to map your operations and define a realistic delivery plan."
        primaryCTA="Schedule Logistics ERP Consultation"
        stats={[
          { value: "28%", label: "Avg fuel cost reduction" },
          { value: "6 mo", label: "Typical delivery" },
          { value: "100%", label: "Source code ownership" },
        ]}
        trustItems={[
          "NDA before any operations discussion",
          "Engineers with logistics domain experience",
          "Integrates with your existing GPS hardware",
        ]}
      />

      <Footer />
      <FloatingBookingButton label="Book ERP Call" />
    </>
  );
}
