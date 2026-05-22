"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiCircleStack,
  HiCpuChip,
  HiCube,
  HiTruck,
  HiBuildingOffice2,
  HiShoppingBag,
  HiWrenchScrewdriver,
  HiChartBarSquare,
  HiUserGroup,
  HiCurrencyDollar,
  HiGlobeAlt,
  HiShieldCheck,
  HiBolt,
  HiRocketLaunch,
  HiXCircle,
  HiCodeBracket,
  HiServer,
  HiCloud,
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
  { value: "80+", label: "ERP Projects Delivered", icon: HiCircleStack },
  { value: "15", label: "Industries Served", icon: HiBuildingOffice2 },
  { value: "40%", label: "Avg Cost Savings vs SAP", icon: HiCurrencyDollar },
  { value: "6 mo", label: "Average Delivery Timeline", icon: HiBolt },
];

const SERVICES = [
  {
    href: "/erp-development/manufacturing-erp-development",
    icon: HiWrenchScrewdriver,
    title: "Manufacturing ERP Development",
    desc: "MRP/MPS, shop floor control, BOM management, quality control, and machine utilization tracking built for your production floor.",
    tags: ["MRP", "Shop Floor", "BOM"],
  },
  {
    href: "/erp-development/logistics-erp-software",
    icon: HiTruck,
    title: "Logistics ERP Software",
    desc: "Fleet management, route optimization, freight billing, carrier management, and real-time tracking for logistics operations.",
    tags: ["Fleet", "Routing", "3PL"],
  },
  {
    href: "/erp-development/cosmetic-industry-erp",
    icon: HiCube,
    title: "Cosmetic Industry ERP",
    desc: "Formula & batch management, FDA/EU compliance, shelf-life control, private label management, and retailer EDI integration.",
    tags: ["Compliance", "Batch", "EDI"],
  },
  {
    href: "/erp-development/inventory-management-system",
    icon: HiCircleStack,
    title: "Inventory Management System",
    desc: "Real-time stock tracking, multi-warehouse support, barcode/RFID integration, reorder automation, and demand forecasting.",
    tags: ["RFID", "Multi-WH", "Forecasting"],
  },
  {
    href: "/erp-development/warehouse-management-system",
    icon: HiBuildingOffice2,
    title: "Warehouse Management System",
    desc: "Receiving, putaway, pick-pack-ship, slot optimization, labor management, and yard management in a unified WMS.",
    tags: ["Pick-Pack", "Slotting", "Labor"],
  },
  {
    href: "/erp-development/custom-erp-solutions",
    icon: HiChartBarSquare,
    title: "Custom ERP Solutions",
    desc: "Bespoke ERP covering finance, HR, project management, procurement, and reporting — when SAP is overkill and QuickBooks isn't enough.",
    tags: ["Finance", "HR", "Procurement"],
  },
];

const INDUSTRIES = [
  { name: "Manufacturing", icon: HiWrenchScrewdriver, color: "bg-teal-100 text-teal-700" },
  { name: "Logistics & 3PL", icon: HiTruck, color: "bg-blue-100 text-blue-700" },
  { name: "Construction", icon: HiBuildingOffice2, color: "bg-slate-100 text-slate-700" },
  { name: "Cosmetics & Beauty", icon: HiCube, color: "bg-rose-100 text-rose-700" },
  { name: "Distribution", icon: HiGlobeAlt, color: "bg-amber-100 text-amber-700" },
  { name: "Retail & eCommerce", icon: HiShoppingBag, color: "bg-violet-100 text-violet-700" },
];

const PROCESS = [
  {
    step: "01",
    title: "Requirements Audit",
    desc: "We map your current workflows, data flows, and pain points. Every module decision is backed by a gap analysis of your existing tools.",
  },
  {
    step: "02",
    title: "System Architecture",
    desc: "Database schema design, API contracts, module boundaries, and integration points defined before a single line of production code.",
  },
  {
    step: "03",
    title: "Module Development",
    desc: "Iterative development in 2-week sprints. Each module ships with unit tests, API docs, and a working staging environment.",
  },
  {
    step: "04",
    title: "Data Migration",
    desc: "Structured migration of historical data from your legacy systems — validated, reconciled, and rolled back if anything doesn't match.",
  },
  {
    step: "05",
    title: "Training & Go-Live",
    desc: "Role-based training, SOPs, and a hypercare period where our engineers are on-call for 30 days post-launch.",
  },
];

const TECH_STACK = [
  "Node.js", "React", "PostgreSQL", "Redis", "AWS", "Docker",
  "REST APIs", "GraphQL", "Stripe", "QuickBooks API", "Xero API",
  "Twilio", "SendGrid", "Elasticsearch", "Kubernetes", "Terraform",
];

const COMPARISON = [
  {
    criteria: "Implementation Time",
    custom: "4–8 months",
    sap: "12–24 months",
    offShelf: "3–6 months",
    winner: "custom",
  },
  {
    criteria: "Total Cost of Ownership",
    custom: "Low (no per-user fees)",
    sap: "Very high (licenses + consultants)",
    offShelf: "Medium (recurring SaaS fees)",
    winner: "custom",
  },
  {
    criteria: "Workflow Fit",
    custom: "100% tailored",
    sap: "Requires process changes",
    offShelf: "60–80% fit",
    winner: "custom",
  },
  {
    criteria: "Scalability",
    custom: "Scales with your architecture",
    sap: "Yes, but expensive",
    offShelf: "Limited by vendor roadmap",
    winner: "custom",
  },
  {
    criteria: "Integration Flexibility",
    custom: "Any system, custom APIs",
    sap: "SAP-native preferred",
    offShelf: "Vendor-approved integrations",
    winner: "custom",
  },
  {
    criteria: "Ongoing Control",
    custom: "You own the source code",
    sap: "Vendor-controlled",
    offShelf: "Vendor-controlled",
    winner: "custom",
  },
];

const RELATED = [
  {
    href: "/ai-development/ai-workflow-automation",
    title: "AI Workflow Automation",
    desc: "Add AI-driven automation to your ERP — intelligent approval flows, anomaly detection, and predictive restocking.",
  },
  {
    href: "/saas-development",
    title: "SaaS Development",
    desc: "Turn your ERP into a multi-tenant SaaS product and offer it to your industry vertical.",
  },
  {
    href: "/document-management-system",
    title: "Document Management System",
    desc: "Attach a DMS to your ERP for contract management, compliance documentation, and audit trails.",
  },
];

const FAQS = [
  {
    q: "How long does a custom ERP take to build?",
    a: "Most custom ERPs are delivered in 4–8 months depending on the number of modules and complexity of integrations. We phase delivery so your core modules go live first while secondary modules are developed in parallel.",
  },
  {
    q: "Why not just buy SAP or Oracle?",
    a: "SAP and Oracle are built for Fortune 500 companies with standardized processes. If your workflows are unique to your industry or operations, you'll spend more adapting your processes to SAP than it would cost to build a system that works exactly as you do.",
  },
  {
    q: "Can you migrate data from our existing system?",
    a: "Yes. We handle migrations from legacy ERPs, spreadsheets, SQL databases, QuickBooks, Tally, and third-party SaaS tools. All migrations include validation reports and rollback capability.",
  },
  {
    q: "Do we get the source code?",
    a: "Yes. You own 100% of the source code, database schemas, and documentation. We recommend a code escrow arrangement for long-term projects, and we always deliver full Git repository access at project completion.",
  },
  {
    q: "Can you integrate the ERP with our existing tools?",
    a: "Absolutely. We build REST API integrations with accounting software (QuickBooks, Xero, Tally), payment gateways (Stripe, Razorpay), shipping carriers (FedEx, UPS, DHL), eCommerce platforms, and any system that exposes an API or data feed.",
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
   COMPONENT
═══════════════════════════════════════════════════════════════════════════ */

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

export default function ERPDevelopmentPage() {
  return (
    <>
      <Script
        id="erp-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-0 w-[700px] h-[500px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiCircleStack className="w-3.5 h-3.5" />
                  Custom ERP Development
                </span>
              </motion.div>
              <motion.h1
                {...fadeUp(1)}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold font-heading text-white leading-tight mb-6"
              >
                Custom ERP Software{" "}
                <span className="text-gradient">Development</span> That Fits
                Your Operations
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Stop bending your workflows to fit SAP or Oracle. We build fully custom ERP systems
                designed around the exact way your manufacturing plant, logistics operation, or
                distribution centre works — at a fraction of the enterprise software cost.
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
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  View ERP Case Studies
                </Link>
              </motion.div>
            </div>

            {/* Right panel — ERP dashboard card */}
            <motion.div {...fadeUp(2)} className="hidden lg:block">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">Live Dashboard</p>
                    <p className="text-white font-semibold text-lg">Production Orders Today</p>
                  </div>
                  <span className="text-3xl font-bold text-teal-400">842</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Inventory", status: "Synced", color: "text-teal-400" },
                    { label: "Procurement", status: "3 POs Pending", color: "text-amber-400" },
                    { label: "Manufacturing", status: "On Schedule", color: "text-teal-400" },
                    { label: "HR / Payroll", status: "Processed", color: "text-teal-400" },
                  ].map((m) => (
                    <div key={m.label} className="bg-slate-900 rounded-xl p-4 border border-slate-700">
                      <div className="flex items-center gap-2 mb-1">
                        <HiCheckCircle className={`w-4 h-4 ${m.color}`} />
                        <span className="text-slate-300 text-xs font-medium">{m.label}</span>
                      </div>
                      <p className={`text-xs font-semibold ${m.color}`}>{m.status}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700 flex items-center gap-3">
                  <div className="flex-1 bg-slate-900 rounded-lg h-2">
                    <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-lg w-3/4" />
                  </div>
                  <span className="text-slate-400 text-xs">74% capacity utilisation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ─────────────────────────────────────────────────── */}
      <section className="bg-slate-800 border-y border-slate-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div key={stat.label} {...fadeUp(i)} className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ───────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">ERP Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
              Custom ERP Modules We Build
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From manufacturing shop floors to cosmetics compliance, we develop ERP systems
              tuned to the operational realities of your industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div key={svc.href} {...fadeUp(i)}>
                  <Link href={svc.href} className="group block h-full bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">{svc.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-slate-100 text-slate-600 rounded-full px-3 py-1 font-medium">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-teal-600 text-sm font-semibold">
                      Learn more <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────────────────────── */}
      <section className="bg-dots bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Industries</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">15 Industries, One ERP Framework</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Our ERP architects have deployed production systems across a wide range of
              capital-intensive and process-driven industries.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.name} {...fadeUp(i)} className="text-center bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 transition-all">
                  <div className={`w-10 h-10 rounded-lg ${ind.color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-slate-700 text-sm font-semibold">{ind.name}</p>
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
            <p className="text-teal-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              How We Deliver Your ERP
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              A structured delivery process that keeps your team informed and your project
              on schedule — from requirements to go-live.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-5 gap-6">
            {PROCESS.map((p, i) => (
              <motion.div key={p.step} {...fadeUp(i)} className="relative">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 h-full">
                  <div className="text-5xl font-bold text-slate-700/60 mb-3 font-heading">{p.step}</div>
                  <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
                {i < PROCESS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-10 text-slate-600">
                    <HiArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Technology</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">The Stack We Build On</h2>
          </motion.div>
          <motion.div {...fadeUp(1)} className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200 hover:border-teal-400 hover:text-teal-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOOKING BANNER ──────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div {...fadeUp(0)}>
          <BookingBanner
            heading="Ready to scope your ERP project?"
            subheading="Get a free technical consultation from our ERP architects. We'll map your requirements and give you an honest delivery estimate."
            cta="Schedule Free ERP Consultation"
          />
        </motion.div>
      </section>

      {/* ── COMPARISON TABLE ────────────────────────────────────────────── */}
      <section className="bg-dots bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Custom</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
              Custom ERP vs SAP / Oracle vs Off-the-Shelf
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Enterprise software licensing costs and implementation overhead can exceed $2M for
              mid-market companies. Here's how the options compare.
            </p>
          </motion.div>
          <motion.div {...fadeUp(1)} className="overflow-x-auto">
            <table className="w-full text-sm border-collapse bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left px-6 py-4 font-semibold">Criteria</th>
                  <th className="px-6 py-4 font-semibold text-teal-400">Custom ERP (Infonza)</th>
                  <th className="px-6 py-4 font-semibold text-slate-400">SAP / Oracle</th>
                  <th className="px-6 py-4 font-semibold text-slate-400">Off-the-Shelf SaaS</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.criteria} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 font-semibold text-slate-800">{row.criteria}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <HiCheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                        <span className="text-teal-700 font-medium">{row.custom}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center text-slate-500">{row.sap}</td>
                    <td className="px-6 py-4 text-center text-slate-500">{row.offShelf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED VERTICALS ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Extend Your ERP Ecosystem</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((rel, i) => (
              <motion.div key={rel.href} {...fadeUp(i)}>
                <Link href={rel.href} className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all h-full">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">{rel.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{rel.desc}</p>
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
            <h2 className="text-3xl font-bold font-heading text-slate-900">Common Questions About Custom ERP</h2>
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
        heading="Replace Your Legacy ERP with a System Built for You"
        subheading="Schedule a free 30-minute ERP architecture session. We'll review your current setup, identify the biggest inefficiencies, and outline a realistic delivery roadmap."
        primaryCTA="Schedule Free ERP Consultation"
        stats={[
          { value: "30 min", label: "ERP architecture session" },
          { value: "Free", label: "No commitment" },
          { value: "6 mo", label: "Average delivery" },
        ]}
        trustItems={[
          "NDA signed before discussion",
          "Senior ERP architects on every call",
          "You own 100% of the source code",
        ]}
      />

      <Footer />
      <FloatingBookingButton label="Book ERP Call" />
    </>
  );
}
