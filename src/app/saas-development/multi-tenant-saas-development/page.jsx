"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiChevronDown,
  HiBuildingOffice2,
  HiShieldCheck,
  HiCircleStack,
  HiCpuChip,
  HiServer,
  HiCodeBracket,
  HiSparkles,
  HiBolt,
  HiClock,
  HiGlobeAlt,
  HiCog6Tooth,
  HiLockClosed,
  HiSwatchIcon,
  HiChartBar,
  HiUsers,
} from "react-icons/hi2";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  BookingSection,
  BookingBanner,
  FloatingBookingButton,
  BOOKING_URL,
} from "../../components/booking-cta";

const FAQS = [
  {
    q: "What is multi-tenant SaaS and why does it matter?",
    a: "Multi-tenant SaaS means multiple customers (tenants) share the same application infrastructure while their data remains fully isolated. It dramatically reduces per-tenant infrastructure cost and simplifies operations. The key challenge — which we specialize in — is achieving strict data separation without sacrificing query performance.",
  },
  {
    q: "What tenant isolation strategy should we use — shared database, hybrid, or silo?",
    a: "Shared database with row-level security handles 90%+ of SaaS products efficiently and at the lowest operational cost. Hybrid (separate schema per tenant within shared PostgreSQL cluster) suits mid-market compliance requirements. Full silo (dedicated database per tenant) is reserved for regulated industries like healthcare or finance. We evaluate your compliance requirements and expected tenant count to recommend the right model.",
  },
  {
    q: "How do you handle tenant onboarding automation?",
    a: "We build automated provisioning pipelines: when a new tenant registers, the system creates their isolated data partition, seeds default configuration, sets up their custom domain, and sends welcome emails — all within seconds. This eliminates manual setup and enables self-serve growth.",
  },
  {
    q: "Can we support white-labeling for each tenant?",
    a: "Yes. Our white-labeling architecture supports custom domains (CNAME configuration), per-tenant brand theming (logo, colors, fonts stored in a tenant config table), custom email sender domains, and tenant-specific feature flags — all managed through a superadmin console.",
  },
  {
    q: "How do you implement usage metering for consumption-based billing?",
    a: "We instrument your application with event-based metering: every billable action (API call, data storage, user seat, document processed) emits an event to a metering service (Stripe Meters or custom Redis counters). These aggregate into usage invoices reconciled against tenant plan limits. We integrate with Stripe, Chargebee, or custom billing engines.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const FEATURES = [
  {
    icon: HiCircleStack,
    title: "Tenant Isolation Strategies",
    desc: "Architect the right isolation model for your compliance and scale requirements: shared database with row-level security, schema-per-tenant, or fully siloed databases.",
  },
  {
    icon: HiShieldCheck,
    title: "Schema-Per-Tenant Architecture",
    desc: "PostgreSQL schema isolation with automated migration tooling — each tenant gets their own schema boundary with zero cross-contamination risk.",
  },
  {
    icon: HiLockClosed,
    title: "Row-Level Security (RLS)",
    desc: "Database-enforced tenant filtering via PostgreSQL RLS policies — impossible to query another tenant&apos;s data even with an application bug.",
  },
  {
    icon: HiBolt,
    title: "Automated Tenant Onboarding",
    desc: "Self-serve signup flow with automated provisioning: data partition creation, configuration seeding, domain setup, and welcome sequences — all in under 10 seconds.",
  },
  {
    icon: HiSwatchIcon || HiSparkles,
    title: "White-Labeling Engine",
    desc: "Custom domains, per-tenant brand theming (logo, colors, typography), white-label email, and tenant-specific feature flags — all managed via a superadmin console.",
  },
  {
    icon: HiChartBar,
    title: "Usage Metering & Limits",
    desc: "Event-based consumption tracking, plan limit enforcement, overage alerting, and Stripe Meters integration for accurate usage-based billing.",
  },
  {
    icon: HiCog6Tooth,
    title: "Tenant Management Console",
    desc: "Superadmin dashboard to view all tenants, manage subscriptions, impersonate accounts for support, configure feature flags, and run data exports.",
  },
  {
    icon: HiGlobeAlt,
    title: "Data Residency Controls",
    desc: "Route tenant data to region-specific databases (US, EU, APAC) to meet GDPR data residency requirements — transparent to the application layer.",
  },
];

const PROCESS = [
  { step: "01", title: "Tenant Model Design", desc: "We map your product, compliance requirements, and expected tenant volume to the optimal isolation strategy and data model." },
  { step: "02", title: "Database Schema Architecture", desc: "Design and implement the tenant-aware schema with RLS policies, migration tooling, and index strategies for multi-tenant query patterns." },
  { step: "03", title: "Onboarding Pipeline Build", desc: "Automated provisioning flow: tenant registration, data partition creation, custom domain setup, and email sequences wired end-to-end." },
  { step: "04", title: "White-Label & Feature Flags", desc: "Tenant config system, theme engine, custom domain CNAME routing, and feature flag service integrated with your plan tiers." },
  { step: "05", title: "Metering & Compliance Testing", desc: "Load testing with simulated 10K+ tenant traffic, RLS isolation verification, penetration testing, and usage metering accuracy validation." },
];

const TECH = ["PostgreSQL", "Redis", "Node.js", "Next.js", "Stripe Meters", "Terraform", "AWS RDS", "Prisma ORM", "Docker", "Kubernetes"];

const RELATED = [
  { href: "/saas-development/b2b-saas-development", label: "B2B SaaS Development", desc: "Enterprise features — SSO, RBAC, audit logs — built on top of your multi-tenant core." },
  { href: "/saas-development/subscription-platform-development", label: "Subscription Platform", desc: "Wire your multi-tenant architecture into a full subscription billing engine." },
  { href: "/erp-development/custom-erp-solutions", label: "Custom ERP Solutions", desc: "Multi-tenant architecture applied to enterprise ERP systems with complex org hierarchies." },
];

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
      <span className="w-6 h-px bg-teal-600" />
      {children}
    </div>
  );
}

export default function MultiTenantSaaSPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Script
        id="multi-tenant-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/saas-development" className="hover:text-teal-600 transition-colors">SaaS Development</Link>
            <span>/</span>
            <span className="text-slate-600">Multi-Tenant SaaS Development</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                Multi-Tenant Architecture Experts
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
                Multi-Tenant SaaS{" "}
                <span className="text-gradient">Development Services</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Build SaaS platforms that serve thousands of tenants with guaranteed data isolation, sub-millisecond query performance, and automated onboarding. We architect the right isolation strategy for your compliance requirements and scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-0.5 transition-all"
                >
                  Schedule Free Consultation <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-teal-400 hover:bg-teal-50 hover:-translate-y-0.5 transition-all"
                >
                  Talk to an Architect
                </Link>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { value: "10K+", label: "Tenants supported" },
                  { value: "3ms", label: "Avg query isolation" },
                  { value: "99.99%", label: "Data separation" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-xl px-4 py-2">
                    <span className="text-lg font-bold text-teal-700">{m.value}</span>
                    <span className="text-xs text-slate-500">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Dashboard panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-700">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-sm font-bold text-white">Tenant Isolation Overview</p>
                  <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full">99.99% isolation</span>
                </div>
                <div className="space-y-3 mb-5">
                  {[
                    { name: "Acme Corp", plan: "Enterprise", users: 842, color: "bg-teal-500" },
                    { name: "BuilderCo", plan: "Pro", users: 234, color: "bg-blue-500" },
                    { name: "Finstream", plan: "Enterprise", users: 1204, color: "bg-violet-500" },
                    { name: "LegalEdge", plan: "Starter", users: 45, color: "bg-emerald-500" },
                  ].map((t) => (
                    <div key={t.name} className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${t.color} flex-shrink-0`} />
                      <div className="flex-1">
                        <p className="text-white text-xs font-semibold">{t.name}</p>
                        <p className="text-slate-400 text-xs">{t.plan}</p>
                      </div>
                      <span className="text-slate-300 text-xs font-medium">{t.users} users</span>
                      <HiShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Total Tenants", value: "2,847" },
                    { label: "Avg Query", value: "3ms" },
                    { label: "Isolation", value: "99.99%" },
                  ].map((s) => (
                    <div key={s.label} className="bg-slate-800 rounded-xl p-3 text-center">
                      <p className="text-teal-400 font-bold text-sm">{s.value}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Multi-tenancy is where SaaS products fail at scale
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Most SaaS products are built with single-tenant assumptions and retrofitted with tenant filtering as an afterthought. The result: data leaks under load, noisy-neighbor performance degradation, and compliance failures during enterprise deals. We design multi-tenancy correctly from sprint one.
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Full-stack multi-tenant capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:border-teal-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-teal-400" />
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              How we architect multi-tenant SaaS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all"
              >
                <span className="text-teal-400 font-bold text-lg">{p.step}</span>
                <h3 className="font-bold text-white text-sm mt-2 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionLabel>Tech Stack</SectionLabel>
            <h2 className="text-2xl font-bold text-slate-900">Technologies we use</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-4 py-2 rounded-xl border border-teal-200 bg-teal-50 text-teal-800 text-sm font-semibold"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>Results</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What clients achieve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { metric: "10K+", label: "Tenants Supported", desc: "Single platform serving enterprise clients to startups with zero isolation incidents." },
              { metric: "3ms", label: "Avg Query Isolation", desc: "Row-level security adds under 3ms overhead even at 100M+ row tenant tables." },
              { metric: "99.99%", label: "Data Separation Guarantee", desc: "Zero cross-tenant data leaks across all production deployments." },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg hover:border-teal-200 transition-all"
              >
                <div className="text-4xl font-bold text-gradient mb-2">{r.metric}</div>
                <div className="font-bold text-slate-900 mb-2">{r.label}</div>
                <p className="text-sm text-slate-500">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Ready to design your multi-tenant architecture?"
            subheading="Get a free 30-minute architecture review. We&apos;ll recommend the right isolation model for your compliance requirements and tenant volume."
            cta="Book Architecture Review"
          />
        </div>
      </section>

      {/* ── RELATED ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>Related Services</SectionLabel>
            <h2 className="text-2xl font-bold text-slate-900">Commonly paired with multi-tenant architecture</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {RELATED.map((r, i) => (
              <Link key={r.href} href={r.href} className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{r.label}</h3>
                <p className="text-sm text-slate-500">{r.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-teal-600 text-xs font-semibold">
                  Learn more <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-bold text-slate-900">Multi-tenancy questions answered</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-semibold text-slate-900 text-sm leading-snug">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                    <HiChevronDown className={`w-5 h-5 ${openFaq === i ? "text-teal-600" : "text-slate-400"}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
                      <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-200 pt-4">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection
        heading="Let&apos;s Build Your Multi-Tenant SaaS Architecture"
        subheading="Free 30-minute session with our SaaS architects. We&apos;ll map your product requirements to the right isolation strategy, data model, and scaling approach."
        primaryCTA="Schedule Free Architecture Review"
        secondaryCTA="Talk to an Engineer"
      />

      <Footer />
      <FloatingBookingButton label="Book Call" />
    </>
  );
}
