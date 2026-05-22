"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiCloud,
  HiChevronDown,
  HiCpuChip,
  HiCodeBracket,
  HiServer,
  HiCircleStack,
  HiRocketLaunch,
  HiShieldCheck,
  HiCurrencyDollar,
  HiUsers,
  HiClock,
  HiBolt,
  HiBuildingOffice2,
  HiGlobeAlt,
  HiChartBar,
  HiCog6Tooth,
  HiLockClosed,
  HiSparkles,
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
  { value: "40+", label: "SaaS Products Launched", icon: HiRocketLaunch },
  { value: "8M+", label: "End Users", icon: HiUsers },
  { value: "99.9%", label: "Avg Uptime", icon: HiBolt },
  { value: "$50M+", label: "ARR Enabled", icon: HiCurrencyDollar },
];

const SERVICES = [
  {
    href: "/saas-development/multi-tenant-saas-development",
    icon: HiBuildingOffice2,
    title: "Multi-Tenant SaaS Development",
    desc: "Tenant isolation strategies, schema-per-tenant, row-level security, white-labeling, and usage metering for 10K+ tenants.",
    tag: "Architecture",
  },
  {
    href: "/saas-development/crm-saas-development",
    icon: HiUsers,
    title: "CRM SaaS Development",
    desc: "Build a full CRM as a SaaS product — pipeline management, contact intelligence, email sequences, and open API.",
    tag: "CRM",
  },
  {
    href: "/saas-development/b2b-saas-development",
    icon: HiShieldCheck,
    title: "B2B SaaS Development",
    desc: "Enterprise B2B SaaS with SSO/SAML, RBAC, audit logs, usage analytics, enterprise billing, and SOC2/GDPR compliance.",
    tag: "Enterprise",
  },
  {
    href: "/saas-development/subscription-platform-development",
    icon: HiCurrencyDollar,
    title: "Subscription Platform",
    desc: "End-to-end billing — Stripe/Chargebee integration, plan tiers, usage-based billing, dunning, and MRR analytics.",
    tag: "Billing",
  },
  {
    href: "/saas-development/cloud-saas-solutions",
    icon: HiCloud,
    title: "Cloud SaaS Solutions",
    desc: "Cloud-native architecture: serverless, microservices, auto-scaling, CDN, multi-region, and observability.",
    tag: "Infrastructure",
  },
  {
    href: "/saas-development/b2b-saas-development",
    icon: HiChartBar,
    title: "SaaS Analytics & Reporting",
    desc: "Embedded analytics, usage dashboards, cohort analysis, churn prediction, and customer health scores.",
    tag: "Analytics",
  },
];

const DIFFERENTIATORS = [
  {
    icon: HiCog6Tooth,
    title: "Purpose-Built Architecture",
    desc: "Custom SaaS is designed around your domain model — not shoehorned into a generic low-code platform that charges per seat and blocks your growth.",
  },
  {
    icon: HiLockClosed,
    title: "Security by Design",
    desc: "We build tenant data isolation, encryption at rest/transit, and SOC2-ready audit trails from sprint one — not bolted on after a breach.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Flexible Monetization",
    desc: "No-code tools lock you into flat pricing. Custom SaaS lets you implement usage-based, seat-based, or tiered pricing exactly as your business demands.",
  },
  {
    icon: HiBolt,
    title: "Performance at Scale",
    desc: "Query optimized for 1M+ rows per tenant, Redis-cached hot paths, and CDN-fronted APIs — because Bubble.io won't carry your Series B traffic.",
  },
  {
    icon: HiGlobeAlt,
    title: "True White-Labeling",
    desc: "Custom domains, brand theming per tenant, and white-label email delivery — your customers see your brand, not a third-party platform's logo.",
  },
];

const PROCESS_STEPS = [
  { step: "01", icon: HiSparkles, title: "Ideation & Architecture", desc: "We map your business model to a SaaS architecture — tenant model, data schema, billing logic, and infrastructure diagram before a line of code is written." },
  { step: "02", icon: HiCodeBracket, title: "Core Development", desc: "Authentication, RBAC, tenant management, API layer, and core feature modules built in 2-week sprints with daily standups and continuous deployment." },
  { step: "03", icon: HiCurrencyDollar, title: "Multi-Tenancy & Billing", desc: "Tenant isolation, white-labeling, Stripe/Chargebee integration, plan management, usage tracking, and revenue recognition wired together." },
  { step: "04", icon: HiShieldCheck, title: "QA & Performance", desc: "Load testing at 10× projected traffic, security penetration testing, GDPR/SOC2 compliance audit, and automated regression suites before launch." },
  { step: "05", icon: HiRocketLaunch, title: "Launch & Scaling", desc: "Production deployment on AWS/GCP with Kubernetes, auto-scaling policies, observability dashboards, and a dedicated on-call escalation path." },
];

const TECH_STACK = [
  { name: "Next.js", color: "bg-slate-100 text-slate-800 border-slate-200" },
  { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
  { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { name: "Redis", color: "bg-red-100 text-red-800 border-red-200" },
  { name: "Stripe", color: "bg-violet-100 text-violet-800 border-violet-200" },
  { name: "AWS", color: "bg-orange-100 text-orange-800 border-orange-200" },
  { name: "GCP", color: "bg-sky-100 text-sky-800 border-sky-200" },
  { name: "Kubernetes", color: "bg-teal-100 text-teal-800 border-teal-200" },
  { name: "Docker", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
  { name: "Terraform", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  { name: "TypeScript", color: "bg-blue-100 text-blue-800 border-blue-200" },
  { name: "GraphQL", color: "bg-pink-100 text-pink-800 border-pink-200" },
];

const RELATED = [
  { href: "/ai-development", label: "AI Development", desc: "Add AI features to your SaaS — LLM, RAG, and workflow automation." },
  { href: "/erp-development", label: "ERP Development", desc: "Build enterprise resource planning modules on top of your SaaS core." },
  { href: "/staff-augmentation", label: "Staff Augmentation", desc: "Extend your SaaS engineering team with pre-vetted senior developers." },
];

const FAQS = [
  {
    q: "How much does it cost to build a custom SaaS product?",
    a: "SaaS development costs vary widely depending on feature complexity, integrations, and compliance requirements. A focused MVP typically ranges from $40K–$120K. A full-featured multi-tenant B2B SaaS with billing, SSO, and analytics can run $150K–$400K. We provide a detailed estimate after a 30-minute discovery call.",
  },
  {
    q: "How long does it take to build a SaaS product from scratch?",
    a: "A production-ready SaaS MVP takes 3–5 months with a dedicated team. Full-featured B2B SaaS with enterprise compliance, white-labeling, and a billing engine typically takes 6–10 months. We use milestone-based delivery with working software every 2 weeks so you're never waiting.",
  },
  {
    q: "What multi-tenancy model do you recommend — shared database or silo?",
    a: "It depends on your compliance requirements, expected tenant count, and pricing model. Shared database with row-level security is the most cost-efficient and operationally simple for 95% of SaaS products. Silo (separate database per tenant) is reserved for high-compliance verticals like healthcare or defense. We advise on the right model during architecture review.",
  },
  {
    q: "How do you handle SaaS security and compliance (SOC2, GDPR)?",
    a: "We implement security controls from the first sprint: encrypted secrets management, audit log tables, RBAC enforcement, data residency configuration, and automated vulnerability scanning in CI/CD. We produce the technical evidence artifacts required for SOC2 Type II audits and map our controls to GDPR data processor obligations.",
  },
  {
    q: "Can you take over and scale an existing SaaS product?",
    a: "Yes. We conduct a technical audit covering architecture debt, security posture, test coverage, and scaling bottlenecks. We then deliver a prioritized remediation roadmap and embed our engineers alongside your team. We've scaled multiple SaaS products from 500 to 50,000+ tenants without rewriting from scratch.",
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

/* ═══════════════════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════════════════ */

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
      <span className="w-6 h-px bg-teal-600" />
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function SaaSDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Script
        id="saas-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen pt-28 pb-16 bg-white overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(circle, #0d9488 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                SaaS Development Company
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] mb-6">
                Build Scalable SaaS Products That{" "}
                <span className="text-gradient">Enterprises Trust</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed max-w-xl mb-8">
                End-to-end SaaS development — from architecture and multi-tenancy to subscription billing, security compliance, and cloud infrastructure that scales with your ARR.
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
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-teal-400 hover:bg-teal-50 hover:-translate-y-0.5 transition-all"
                >
                  See Our SaaS Work
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: HiShieldCheck, label: "SOC2 Ready" },
                  { icon: HiBolt, label: "Agile Delivery" },
                  { icon: HiClock, label: "12+ Yrs Exp" },
                  { icon: HiGlobeAlt, label: "Global Clients" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5">
                    <Icon className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — SaaS Metrics Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">SaaS Product Dashboard</p>
                    <h3 className="text-white font-bold text-lg">Live Metrics</h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Live
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "MRR", value: "$124K", change: "+8.2%", color: "text-emerald-400" },
                    { label: "Active Users", value: "8,420", change: "+312", color: "text-teal-400" },
                    { label: "Uptime", value: "99.97%", change: "30-day avg", color: "text-blue-400" },
                    { label: "Churn Rate", value: "1.8%", change: "-0.3%", color: "text-violet-400" },
                  ].map((m) => (
                    <motion.div
                      key={m.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="bg-slate-800 rounded-2xl p-4"
                    >
                      <p className="text-xs text-slate-400 mb-1">{m.label}</p>
                      <p className={`text-xl font-bold ${m.color}`}>{m.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{m.change}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-slate-800 rounded-2xl p-4">
                  <div className="flex justify-between text-xs mb-3">
                    <span className="text-slate-400 font-medium">MRR Growth — Last 6 Months</span>
                    <span className="text-emerald-400 font-bold">+42%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 52, 58, 68, 82, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-teal-600 to-blue-500"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.6 + i * 0.08, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between bg-teal-900/40 border border-teal-700/40 rounded-xl px-4 py-3">
                  <span className="text-xs text-teal-300 font-medium">Tenant Count</span>
                  <span className="text-teal-400 font-bold text-sm">2,847 active</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STATS ──────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">
            Trusted by SaaS founders, B2B companies, and enterprise product teams
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {TRUST_STATS.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-sm text-slate-400">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES GRID ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Our SaaS Services</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Every layer of your SaaS product — covered
            </h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              From multi-tenancy architecture to subscription billing and cloud infrastructure, we build the full SaaS stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={s.href}
                    className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{s.tag}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">{s.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-teal-600 text-xs font-semibold">
                      Learn more <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CUSTOM SAAS ──────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Why Custom SaaS</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Why custom SaaS beats no-code platforms
            </h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              Bubble, Webflow, and Outsystems are useful for prototypes. When you&apos;re building a product that needs to scale and generate real ARR, custom wins every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-teal-200 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              From idea to production-grade SaaS in 5 phases
            </h2>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute top-9 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-400 via-blue-400 to-teal-400 opacity-30" />
            <div className="grid grid-cols-5 gap-4">
              {PROCESS_STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-white border-2 border-teal-200 flex flex-col items-center justify-center shadow-sm mb-5 hover:border-teal-500 hover:shadow-md transition-all">
                      <Icon className="w-6 h-6 text-teal-600 mb-0.5" />
                      <span className="text-[10px] font-bold text-teal-600">{s.step}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-2">{s.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:hidden space-y-5">
            {PROCESS_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-5 bg-slate-50 border border-slate-200 rounded-2xl p-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex flex-col items-center justify-center">
                    <Icon className="w-5 h-5 text-teal-600" />
                    <span className="text-[10px] font-bold text-teal-600">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{s.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. TECH STACK ───────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>Tech Stack</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Technologies we build SaaS products with
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((t, i) => (
              <motion.span
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`px-4 py-2 rounded-xl border text-sm font-semibold ${t.color}`}
              >
                {t.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BOOKING BANNER ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Ready to architect your SaaS product?"
            subheading="Get a free 30-minute architecture review with our senior SaaS engineers. We&apos;ll map your business model to the right multi-tenancy and billing approach."
            cta="Schedule Architecture Review"
          />
        </div>
      </section>

      {/* ── 8. RELATED VERTICALS ────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>Related Services</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Commonly paired with SaaS development
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {RELATED.map((r, i) => (
              <motion.div
                key={r.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={r.href}
                  className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{r.label}</h3>
                  <p className="text-sm text-slate-500">{r.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-teal-600 text-xs font-semibold">
                    Explore <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              SaaS development questions, answered
            </h2>
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
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-900 text-sm leading-snug">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                    <HiChevronDown className={`w-5 h-5 transition-colors ${openFaq === i ? "text-teal-600" : "text-slate-400"}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-200 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. BOOKING SECTION ─────────────────────────────────────────── */}
      <BookingSection
        heading="Let&apos;s Build Your SaaS Product Together"
        subheading="Schedule a free 30-minute strategy session with our senior SaaS engineers. We&apos;ll review your business model, tenant architecture, and billing strategy — no pitch, just honest advice."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to a SaaS Architect"
      />

      <Footer />
      <FloatingBookingButton label="Book SaaS Call" />
    </>
  );
}
