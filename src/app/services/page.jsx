"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiCpuChip,
  HiShieldCheck,
  HiCircleStack,
  HiUsers,
  HiCloud,
  HiDocumentText,
  HiArrowRight,
  HiCheckCircle,
  HiCalendarDays,
  HiStar,
  HiGlobeAlt,
  HiRocketLaunch,
  HiClock,
} from "react-icons/hi2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { BookingSection, BookingBanner } from "../components/booking-cta";
import { BOOKING_URL } from "../components/booking-cta";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const CLUSTERS = [
  {
    href: "/ai-development",
    label: "AI Development",
    desc: "Build production-grade AI — GPT-4 chatbots, RAG pipelines, LLM fine-tuning, workflow automation, and generative AI applications.",
    icon: HiCpuChip,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    tag: "High Demand",
    tagColor: "bg-violet-100 text-violet-700",
    subpages: [
      "AI Chatbot Development",
      "AI Workflow Automation",
      "Generative AI",
      "OpenAI Integration",
      "RAG Development",
      "LLM Development",
    ],
    metric: "100+ AI projects delivered",
  },
  {
    href: "/insurance-software-development",
    label: "Insurance Software Development",
    desc: "Custom insurance technology — policy management platforms, agent portals, quote comparison engines, mobile apps, and claims automation.",
    icon: HiShieldCheck,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    tag: "Top Vertical",
    tagColor: "bg-blue-100 text-blue-700",
    subpages: [
      "Insurance CRM",
      "Policy Management",
      "Quote Comparison",
      "Agent Portal",
      "Mobile App",
      "Automation",
    ],
    metric: "50+ insurance platforms built",
  },
  {
    href: "/erp-development",
    label: "ERP Development",
    desc: "Replace SAP/Oracle with a custom ERP built exactly for your operations — manufacturing, logistics, cosmetics, distribution, and more.",
    icon: HiCircleStack,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    tag: "Enterprise",
    tagColor: "bg-orange-100 text-orange-700",
    subpages: [
      "Manufacturing ERP",
      "Logistics ERP",
      "Cosmetics ERP",
      "Inventory Management",
      "Warehouse Management",
      "Custom ERP",
    ],
    metric: "80+ ERP systems delivered",
  },
  {
    href: "/staff-augmentation",
    label: "IT Staff Augmentation",
    desc: "Hire senior engineers in 72 hours — React, Node.js, MERN, AI/ML, DevOps. Dedicated developers who join your team and ship like your own.",
    icon: HiUsers,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    tag: "Fast Hire",
    tagColor: "bg-teal-100 text-teal-700",
    subpages: [
      "Hire React Developers",
      "Hire Node.js Developers",
      "Hire MERN Developers",
      "Hire AI Engineers",
      "Hire DevOps Engineers",
      "Dedicated Team",
    ],
    metric: "72-hour placement guarantee",
  },
  {
    href: "/saas-development",
    label: "SaaS Development",
    desc: "End-to-end SaaS product development — multi-tenancy, Stripe billing, SSO, audit logs, and cloud-native architecture that scales to millions.",
    icon: HiCloud,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    tag: "Product Build",
    tagColor: "bg-sky-100 text-sky-700",
    subpages: [
      "Multi-Tenant SaaS",
      "CRM SaaS",
      "B2B SaaS",
      "Subscription Platform",
      "Cloud SaaS",
    ],
    metric: "$50M+ ARR enabled",
  },
  {
    href: "/document-management-system",
    label: "Document Management System",
    desc: "Replace paper chaos with intelligent DMS — approval workflows, e-signatures, full-text search, OCR classification, and compliance-ready audit trails.",
    icon: HiDocumentText,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    tag: "Enterprise",
    tagColor: "bg-emerald-100 text-emerald-700",
    subpages: [
      "Enterprise DMS",
      "Workflow Automation",
      "Legal DMS",
      "Cloud Storage",
      "Approval System",
    ],
    metric: "500M+ documents managed",
  },
];

const TRUST_STATS = [
  { value: "12+", label: "Years of Experience", icon: HiClock },
  { value: "150+", label: "Global Clients", icon: HiGlobeAlt },
  { value: "500+", label: "Projects Delivered", icon: HiRocketLaunch },
  { value: "94%", label: "Client Retention Rate", icon: HiStar },
];

const WHY_US = [
  "Senior engineers only — no juniors on client projects",
  "NDA signed before any discussion",
  "Agile delivery with weekly sprint demos",
  "US timezone overlap — EST/PST working hours available",
  "D-U-N-S® Registered: 771974280 — verified enterprise vendor",
  "SOC-2 & GDPR-aware development practices",
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-8">
              <HiRocketLaunch className="w-3.5 h-3.5" />
              Software Development Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Enterprise Software
              <br />
              <span className="text-gradient">Built to Win</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl">
              From AI-powered products to custom ERP systems — Infonza engineers full-stack solutions
              across 6 high-demand verticals. Senior teams, transparent delivery, results you can measure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
              >
                <HiCalendarDays className="w-5 h-5" />
                Schedule Free Consultation
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
              >
                View Case Studies
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Trust stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {TRUST_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Service Clusters ─────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-teal-600" />
              Service Verticals
              <span className="w-6 h-px bg-teal-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Six Specialised{" "}
              <span className="text-gradient">Practice Areas</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Deep domain expertise across the verticals that matter most to mid-market and enterprise buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {CLUSTERS.map((cluster, i) => {
              const Icon = cluster.icon;
              return (
                <motion.div
                  key={cluster.href}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group bg-white border border-slate-200 rounded-2xl p-8 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/5 transition-all"
                >
                  <div className="flex items-start gap-5 mb-5">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${cluster.iconBg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${cluster.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                          {cluster.label}
                        </h3>
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${cluster.tagColor}`}>
                          {cluster.tag}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">{cluster.desc}</p>
                    </div>
                  </div>

                  {/* Subpage pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cluster.subpages.map((sp) => (
                      <span key={sp} className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-full">
                        {sp}
                      </span>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400 font-medium">{cluster.metric}</span>
                    <Link
                      href={cluster.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group-hover:gap-2.5"
                    >
                      Explore
                      <HiArrowRight className="w-3.5 h-3.5 transition-all" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Infonza ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 bg-dots">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Why 150+ Companies{" "}
              <span className="text-gradient">Choose Infonza</span>
            </h2>
            <p className="text-slate-500">Our commitments on every engagement.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-5"
              >
                <HiCheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Banner ───────────────────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Not sure which service fits your project?"
            subheading="Book a free 30-minute discovery call. Our senior engineers will map the right solution to your exact challenge — no fluff, no obligation."
            cta="Book Strategy Call"
          />
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Every engagement follows the same proven five-step process.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { step: "01", title: "Discovery & Scoping", desc: "30-min strategy call → technical requirements document → fixed-price quote or T&M proposal within 48 hours." },
              { step: "02", title: "Architecture & Planning", desc: "System design, database schema, API contracts, and sprint plan delivered before a single line of code is written." },
              { step: "03", title: "Sprint-Based Development", desc: "2-week sprints with demo calls. You see real working software every fortnight — no months-long black boxes." },
              { step: "04", title: "QA, Security & Performance", desc: "Automated test coverage, manual QA, OWASP security review, and load testing before every release." },
              { step: "05", title: "Launch & Long-Term Support", desc: "Deployment to your infrastructure, knowledge transfer, documentation, and ongoing support plans available." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-6 bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-200 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{s.step}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related case studies ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Recent <span className="text-gradient">Case Studies</span>
            </h2>
            <Link href="/case-studies" className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1">
              All case studies <HiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/case-studies/glovebox", title: "GloveBox", tag: "Insurance · Automation", metric: "3 hrs → 45 min onboarding" },
              { href: "/case-studies/readybuild", title: "ReadyBuild", tag: "Construction · ERP", metric: "40% ops cost reduction" },
              { href: "/case-studies/dnh", title: "D&H Distributing", tag: "Distribution · Supply Chain", metric: "99.8% shipment accuracy" },
              { href: "/case-studies/builderwing", title: "BuilderWing", tag: "Real Estate · SaaS", metric: "5× quote-to-close rate" },
            ].map((cs, i) => (
              <motion.div
                key={cs.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={cs.href}
                  className="block p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:border-teal-200 hover:bg-white hover:shadow-lg hover:shadow-teal-500/5 transition-all group"
                >
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
                    {cs.tag}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                    {cs.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{cs.metric}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-teal-600">
                    Read case study <HiArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection
        heading="Start Your Project Today"
        subheading="Schedule a free strategy session. Our senior engineers will scope your project, recommend the right architecture, and give you an honest timeline and budget estimate."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Discuss Your Project"
      />

      <Footer />
    </>
  );
}
