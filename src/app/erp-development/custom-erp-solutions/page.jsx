"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiCircleStack,
  HiChartBarSquare,
  HiUsers,
  HiShoppingCart,
  HiFolder,
  HiShieldCheck,
  HiBolt,
  HiCog6Tooth,
  HiCurrencyDollar,
  HiCodeBracket,
  HiBuildingOffice2,
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
    icon: HiCurrencyDollar,
    title: "Financial Management & Accounting",
    desc: "General ledger, accounts payable and receivable, bank reconciliation, multi-currency support, and financial reporting. Real-time P&L, balance sheet, and cash-flow statements tailored to your chart of accounts and fiscal calendar.",
  },
  {
    icon: HiUsers,
    title: "HR & Payroll Management",
    desc: "Employee records, leave management, performance cycles, and payroll processing with statutory deduction rules. Self-service portals let staff update details, apply for leave, and download payslips without HR involvement.",
  },
  {
    icon: HiShoppingCart,
    title: "Procurement & Vendor Management",
    desc: "Purchase requisitions, approval workflows, purchase orders, GRN matching, and three-way invoice reconciliation. Vendor scorecards track on-time delivery, quality, and pricing to support renegotiation decisions.",
  },
  {
    icon: HiFolder,
    title: "Project Management & Billing",
    desc: "Project creation, milestone tracking, resource allocation, time logging, and budget vs. actual reporting. Automated client invoicing on milestones or time-and-materials basis, with project profitability dashboards.",
  },
  {
    icon: HiCircleStack,
    title: "Inventory & Order Management",
    desc: "Stock tracking, reorder point management, multi-location inventory, and sales order fulfilment — all connected to the same financial ledger so COGS and inventory valuation are always in sync.",
  },
  {
    icon: HiChartBarSquare,
    title: "Custom Reporting & Dashboards",
    desc: "Role-based dashboards and report builder lets each department see what matters to them. Scheduled reports emailed to stakeholders, drill-through from summary KPIs to transaction level, and export to Excel or PDF.",
  },
  {
    icon: HiShieldCheck,
    title: "Role-Based Access Control",
    desc: "Granular permissions down to field level ensure each user sees and edits only what their role requires. Full audit trail of every data change — who, what, when — satisfying both internal governance and external audit requirements.",
  },
  {
    icon: HiCodeBracket,
    title: "API Integration Ecosystem",
    desc: "Pre-built connectors for Stripe, QuickBooks, DocuSign, Shopify, and major banking APIs. Custom webhook endpoints allow third-party tools to push data in, and outbound webhooks notify downstream systems of ERP events.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Business Process Audit",
    desc: "We map every process that will touch the ERP — finance workflows, approval chains, reporting requirements, and integration points — before writing a single line of code.",
  },
  {
    step: "02",
    title: "Module Selection & Architecture",
    desc: "We recommend the exact module set your business needs now and design the data architecture to accommodate the modules you will add in 18 months. No over-engineering, no gaps.",
  },
  {
    step: "03",
    title: "Core ERP Development",
    desc: "Modules built in two-week sprints. Finance and HR ship first — the operational backbone. Procurement, inventory, and project modules added in subsequent sprints with your team testing each one.",
  },
  {
    step: "04",
    title: "Integration & Data Migration",
    desc: "Historical data migrated from QuickBooks, spreadsheets, or legacy systems. Integrations with Stripe, payroll providers, and third-party tools built and tested against production data.",
  },
  {
    step: "05",
    title: "Training, Go-Live & Support",
    desc: "Department-specific training sessions for finance, HR, operations, and management. Phased rollout starting with one department, then company-wide. 90-day post-launch support included.",
  },
];

const TECH = [
  "Node.js", "React", "PostgreSQL", "Redis", "AWS",
  "Stripe API", "QuickBooks API", "DocuSign API",
  "Docker", "GitHub Actions", "REST APIs", "Webhooks",
  "Puppeteer (PDF Reports)", "BullMQ (Job Queues)",
];

const RESULTS = [
  {
    metric: "40%",
    label: "Lower TCO vs SAP",
    desc: "No per-user license fees, no mandatory upgrade cycles, and infrastructure costs that scale proportionally with your actual usage.",
  },
  {
    metric: "3-Month",
    label: "Faster Implementation",
    desc: "Focused scope, no unnecessary modules, and a team that has done this before — versus 12–18 month SAP implementations that routinely overrun.",
  },
  {
    metric: "100%",
    label: "Feature Fit",
    desc: "Every workflow, approval chain, and report reflects your business rules — not a generic template you have to bend your operations to fit.",
  },
];

const RELATED = [
  {
    href: "/erp-development/manufacturing-erp-development",
    title: "Manufacturing ERP Development",
    desc: "Add production planning, BOM management, MRP, and shop floor control on top of your custom ERP foundation.",
  },
  {
    href: "/erp-development/inventory-management-system",
    title: "Inventory Management System",
    desc: "A standalone inventory system if you need stock tracking before committing to a full ERP implementation.",
  },
  {
    href: "/saas-development/b2b-saas-development",
    title: "B2B SaaS Development",
    desc: "Turn your custom ERP into a multi-tenant SaaS product for your industry vertical — sold as a subscription.",
  },
];

const FAQS = [
  {
    q: "When does it make sense to build a custom ERP instead of buying SAP or NetSuite?",
    a: "A custom ERP makes sense when off-the-shelf systems require extensive customisation to match your workflows (which often costs more than a build), when recurring license fees are projected to exceed build cost within 3–4 years, or when your processes are genuinely unique and vendor roadmaps will never accommodate them. We provide a build-vs-buy analysis in our discovery phase to help you make a data-driven decision.",
  },
  {
    q: "How many users can the custom ERP support?",
    a: "Our ERP architecture is designed to scale horizontally. A typical implementation starts handling 20–200 concurrent users comfortably on mid-tier AWS infrastructure. With read replicas, caching layers, and horizontal pod scaling on ECS, the same architecture has handled 2,000+ concurrent users in production. User count is not the primary constraint — the architecture is.",
  },
  {
    q: "Can we start with one module and add more later?",
    a: "Yes, and this is the approach we recommend for most clients. We design the full data model and architecture upfront to ensure modules integrate cleanly, but we build and deploy in phases. A typical phase one covers Finance and HR — the operational backbone. Procurement, Inventory, and Projects are added in phases two and three based on your priorities and budget cadence.",
  },
  {
    q: "What happens if our business processes change after launch?",
    a: "Because you own the source code and we document it thoroughly, changes are straightforward. Configuration-driven features — approval thresholds, report parameters, user permissions — are updated without a developer. Workflow changes or new features go through our standard sprint process. Most post-launch change requests are completed within one to two sprints.",
  },
  {
    q: "Do you provide ongoing support and maintenance after launch?",
    a: "Yes. We offer three support tiers: a 90-day post-launch support period included in every engagement, a monthly retainer for ongoing feature development and maintenance, and an ad-hoc support arrangement for businesses that prefer to handle maintenance in-house. All engagements include full source code handover, technical documentation, and deployment runbooks.",
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

export default function CustomERPSolutionsPage() {
  return (
    <>
      <Script
        id="custom-erp-faq-schema"
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
            <span className="text-slate-300">Custom ERP Solutions</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiBuildingOffice2 className="w-3.5 h-3.5" />
                  Custom ERP
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl font-bold font-heading text-white leading-tight mb-6">
                <span className="text-gradient">Custom ERP Solutions</span> for Growing Businesses
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                When SAP/Oracle is too expensive and QuickBooks isn&apos;t powerful enough — we build fully
                custom ERP systems that fit your exact operations, team, and growth trajectory. No license
                fees. No unused modules. 100% yours.
              </motion.p>
              <motion.div {...fadeUp(3)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Schedule Free ERP Consultation
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

            {/* Right panel — modular ERP dashboard */}
            <motion.div {...fadeUp(2)} className="hidden lg:block">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">System Overview</p>
                <p className="text-white font-bold text-xl mb-5">Modular ERP Dashboard</p>
                <div className="space-y-3">
                  {[
                    { label: "Finance", status: "✓ Active", color: "text-teal-400" },
                    { label: "HR / Payroll", status: "✓ Active", color: "text-teal-400" },
                    { label: "Procurement", status: "✓ Active", color: "text-teal-400" },
                    { label: "Inventory", status: "✓ Active", color: "text-teal-400" },
                    { label: "Projects", status: "🔧 Configuring", color: "text-amber-400" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2 border-b border-slate-700/60 last:border-0">
                      <span className="text-slate-300 text-sm font-medium">{row.label}</span>
                      <span className={`text-sm font-semibold ${row.color}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-teal-900/40 border border-teal-700/30 rounded-xl p-3 text-center">
                  <p className="text-teal-300 text-xs font-medium">5 of 5 modules deployed</p>
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
              The Gap Between SMB Tools and Enterprise ERP
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Growing businesses hit a painful inflection point — too complex for QuickBooks, too small
              (or too unique) for SAP. The standard options leave you with expensive compromises.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "SAP and Oracle implementations for mid-market companies routinely cost $500K–$2M and take 18 months, often delivering less than 60% of promised functionality",
              "QuickBooks and Xero break when you add multi-entity consolidation, project billing, or inventory management beyond a few thousand SKUs",
              "Off-the-shelf ERP modules require you to reshape your business processes to fit the software, instead of the other way around",
              "Per-user license fees compound as you grow — a 150-person company paying $150/user/month spends $270K annually before any customisation costs",
              "Integration limitations force parallel spreadsheet workflows for processes the ERP cannot handle natively, creating reconciliation nightmares",
              "Vendor-imposed upgrade cycles break customisations and consume IT resources for years after the initial implementation",
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
              ERP Modules We Design and Build
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Start with the modules you need today. Each module is built to integrate cleanly with
              every other module you add tomorrow.
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
              How We Build and Deliver Your Custom ERP
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
              What Clients Achieve with a Custom ERP
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

      <BookingBanner />

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Extend Your ERP Platform</h2>
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
              Custom ERP Development Questions
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

      <BookingSection />
      <Footer />
      <FloatingBookingButton />
    </>
  );
}
