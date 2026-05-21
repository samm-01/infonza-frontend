"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiShieldCheck,
  HiClock,
  HiBolt,
  HiGlobeAlt,
  HiChevronDown,
  HiStar,
  HiCodeBracket,
  HiCpuChip,
  HiRocketLaunch,
  HiCloud,
  HiServer,
  HiCircleStack,
  HiDevicePhoneMobile,
  HiBuildingOffice2,
  HiSparkles,
  HiUserGroup,
  HiUsers,
  HiChartBar,
  HiDocumentText,
  HiCurrencyDollar,
  HiClipboardDocumentList,
  HiWrenchScrewdriver,
  HiCalendarDays,
  HiExclamationTriangle,
  HiLightBulb,
  HiMagnifyingGlass,
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
  { value: "50+", label: "Insurance Projects Delivered", icon: HiRocketLaunch },
  { value: "200K+", label: "Policies Managed in Prod", icon: HiDocumentText },
  { value: "3×", label: "Faster Claims Processing", icon: HiBolt },
  { value: "12+", label: "Years in InsurTech", icon: HiStar },
];

const SERVICES = [
  {
    icon: HiUserGroup,
    title: "Insurance CRM Development",
    description: "Lead management, policy tracking, renewal automation, and agent performance dashboards purpose-built for insurance agencies.",
    href: "/insurance-software-development/insurance-crm-development",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: HiDocumentText,
    title: "Policy Management Software",
    description: "End-to-end policy lifecycle — underwriting, issuance, endorsements, renewals, and multi-line support across all insurance verticals.",
    href: "/insurance-software-development/policy-management-software",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: HiChartBar,
    title: "Quote Comparison Platform",
    description: "Multi-carrier real-time quoting engine with API aggregation, rate filing integration, and bind-online workflow.",
    href: "/insurance-software-development/quote-comparison-platform",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: HiBuildingOffice2,
    title: "Insurance Agent Portal",
    description: "Self-service portals for agents — AOA licensing, book of business, commissions, and training resources in one platform.",
    href: "/insurance-software-development/insurance-agent-portal",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: HiDevicePhoneMobile,
    title: "Insurance Mobile App Development",
    description: "Customer-facing iOS and Android apps — policy wallet, digital ID cards, FNOL claims, payments, and live agent chat.",
    href: "/insurance-software-development/insurance-mobile-app-development",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: HiCpuChip,
    title: "Insurance Automation Solutions",
    description: "AI-powered automation for claims processing, OCR document extraction, underwriting, fraud detection, and straight-through processing.",
    href: "/insurance-software-development/insurance-automation-solutions",
    color: "from-emerald-500 to-teal-500",
  },
];

const PAIN_POINTS = [
  {
    icon: HiServer,
    title: "Legacy System Debt",
    description: "COBOL-era policy administration systems and on-premise data silos that can't integrate with modern APIs, marketplaces, or analytics stacks — costing $2–5M/yr in maintenance.",
  },
  {
    icon: HiDocumentText,
    title: "Manual Paper Processes",
    description: "Agents printing, faxing, and re-keying data across disconnected systems. Every manual touch adds error risk and drives up operational costs by 40–60% versus digitized competitors.",
  },
  {
    icon: HiShieldCheck,
    title: "Compliance Complexity",
    description: "State-by-state regulatory requirements, NAIC guidelines, SOC 2, and emerging GDPR/CCPA obligations demand audit trails and role-based access controls most legacy systems can't provide.",
  },
  {
    icon: HiUsers,
    title: "Poor Agent Experience",
    description: "Agents juggling 6–8 tabs across legacy portals, spreadsheets, and email. High frustration scores directly correlate with producer attrition and $50K+ per-agent replacement costs.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Requirements",
    description: "Deep-dive sessions with underwriting, claims, compliance, and IT leadership to map current-state workflows, integration points, and regulatory constraints. Output: signed architecture blueprint.",
  },
  {
    step: "02",
    title: "Architecture & Compliance Design",
    description: "System architecture designed for NAIC, state DOI, SOC 2, and data residency requirements. API contracts defined for carrier, payment, and third-party integrations before a line of code is written.",
  },
  {
    step: "03",
    title: "Core Platform Build",
    description: "Agile sprints with bi-weekly demos. Insurance domain logic — rating engines, policy lifecycle state machines, claims workflows — built by engineers with prior InsurTech experience.",
  },
  {
    step: "04",
    title: "Integration & Compliance Testing",
    description: "End-to-end integration with carrier APIs, payment processors (Stripe, PayPal), DocuSign, Twilio, and existing core systems. Penetration testing and compliance audit prior to go-live.",
  },
  {
    step: "05",
    title: "Launch & Ongoing Support",
    description: "Phased rollout with parallel-run period, agent training materials, and 24/7 production monitoring. SLA-backed support with dedicated InsurTech engineers post-launch.",
  },
];

const TECH_STACK = [
  { label: "React / Next.js", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { label: "Node.js", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "Python", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  { label: "PostgreSQL", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "AWS / Azure", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "Stripe / PayPal", color: "bg-violet-100 text-violet-700 border-violet-200" },
  { label: "Twilio", color: "bg-red-100 text-red-700 border-red-200" },
  { label: "DocuSign", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  { label: "Salesforce", color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
  { label: "React Native", color: "bg-teal-100 text-teal-700 border-teal-200" },
  { label: "REST / SOAP APIs", color: "bg-slate-100 text-slate-700 border-slate-200" },
  { label: "Docker / Kubernetes", color: "bg-purple-100 text-purple-700 border-purple-200" },
];

const RELATED = [
  {
    title: "AI Workflow Automation",
    description: "Automate underwriting decisions, claims triage, and document extraction with production-grade AI pipelines.",
    href: "/ai-development/ai-workflow-automation",
    tag: "AI Development",
  },
  {
    title: "Custom ERP Development",
    description: "Enterprise resource planning systems that unify finance, operations, and compliance for insurance carriers.",
    href: "/erp-development",
    tag: "ERP Solutions",
  },
  {
    title: "SaaS Product Development",
    description: "Build multi-tenant InsurTech SaaS platforms with usage-based billing, white-labeling, and carrier APIs.",
    href: "/saas-development",
    tag: "SaaS Development",
  },
];

const FAQS = [
  {
    q: "How long does it take to build custom insurance software?",
    a: "Timeline depends on scope and complexity. A focused MVP — such as an agent portal or policy management module — typically takes 10–16 weeks. A full-stack insurance platform with carrier integrations, payment processing, and compliance features is a 6–12 month engagement. We provide a detailed project roadmap with milestones after the discovery phase.",
  },
  {
    q: "How do you handle state-by-state insurance compliance requirements?",
    a: "Our InsurTech engineers have built systems that operate across 40+ US states. We design audit trails, role-based access controls, and data retention policies aligned with NAIC guidelines and individual state DOI requirements. We work alongside your compliance counsel throughout the architecture phase to ensure every workflow meets regulatory standards before build begins.",
  },
  {
    q: "Can you integrate with our existing core policy administration system?",
    a: "Yes. We have integration experience with major policy administration platforms including Guidewire, Applied Epic, Duck Creek, Majesco, and custom legacy systems via REST, SOAP, and file-based APIs. Integration scope is mapped during discovery and we maintain a parallel-run period to validate data fidelity before cutover.",
  },
  {
    q: "What does custom insurance software development cost?",
    a: "Engagements typically range from $80K for a focused module (e.g., agent portal, quoting tool) to $300K–$800K+ for a full insurance platform. We offer fixed-price milestone contracts for well-scoped projects and time-and-materials for complex, evolving platforms. You receive a detailed estimate after the free discovery session — no obligation.",
  },
  {
    q: "Do you provide post-launch maintenance and support?",
    a: "Yes. Every engagement includes a 3-month hypercare period with dedicated support engineers. Beyond that, we offer SLA-backed retainer agreements covering bug fixes, security patches, carrier API updates, and feature development. Our clients average 4.2 years of ongoing engagement after initial launch.",
  },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════════════════════════════════ */

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div {...fadeUp(index)} className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900">{q}</span>
        <HiChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function InsuranceSoftwareDevelopmentPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-8">
                <HiShieldCheck className="w-3.5 h-3.5" />
                Insurance Technology Experts
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6 font-heading">
                Custom{" "}
                <span className="text-gradient">Insurance Software</span>{" "}
                Development
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                We build modern insurance platforms that eliminate manual processes and legacy bottlenecks — policy portals, agent CRMs, quote engines, mobile apps, and AI-powered claims automation trusted by carriers and MGAs across North America.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  <HiCalendarDays className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
                <Link
                  href="/case-studies/glovebox"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-slate-400 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  View Insurance Case Studies
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Dashboard card */}
            <motion.div {...fadeUp(1)}>
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Live Operations Dashboard</p>
                    <p className="text-white font-semibold mt-0.5">Policy Renewals Today</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-teal-400">1,247</span>
                    <span className="text-slate-500 text-sm ml-1">/ 1,400 target</span>
                  </div>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-6">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full" style={{ width: "89%" }} />
                </div>
                <div className="space-y-3 mb-5">
                  {[
                    { label: "Active Policies", value: "84,312", pct: 92, color: "from-teal-500 to-teal-400" },
                    { label: "Pending Claims", value: "1,089", pct: 45, color: "from-amber-500 to-orange-400" },
                    { label: "Agent Performance", value: "94.7%", pct: 94, color: "from-blue-500 to-indigo-400" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-slate-400">{row.label}</span>
                        <span className="text-white font-medium">{row.value}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-1.5">
                        <div
                          className={`bg-gradient-to-r ${row.color} h-1.5 rounded-full`}
                          style={{ width: `${row.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Quote to Bind", value: "< 8 min", status: "green" },
                    { label: "Claims STP", value: "78%", status: "green" },
                    { label: "Compliance", value: "100%", status: "green" },
                  ].map((card) => (
                    <div key={card.label} className="bg-slate-700/60 rounded-xl p-3 text-center">
                      <div className="w-2 h-2 rounded-full bg-teal-400 mx-auto mb-1.5" />
                      <div className="text-white font-bold text-sm">{card.value}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{card.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST STATS ── */}
      <section className="bg-white border-b border-slate-100 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_STATS.map((stat, i) => (
              <motion.div key={stat.label} {...fadeUp(i)} className="text-center">
                <stat.icon className="w-8 h-8 text-teal-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="bg-dots py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 text-teal-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <HiCodeBracket className="w-3.5 h-3.5" />
              Our InsurTech Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              End-to-End <span className="text-gradient">Insurance Software</span> Capabilities
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              From greenfield InsurTech platforms to modernizing 20-year-old legacy systems, our engineering team covers every layer of the insurance technology stack.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div key={svc.title} {...fadeUp(i)}>
                <Link
                  href={svc.href}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-7 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 transition-all hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5`}>
                    <svc.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{svc.description}</p>
                  <div className="flex items-center gap-1 text-teal-600 text-sm font-medium mt-5">
                    Learn more <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-red-900/40 border border-red-700/30 rounded-full px-4 py-1.5 text-red-300 text-xs font-semibold uppercase tracking-widest mb-5">
              <HiExclamationTriangle className="w-3.5 h-3.5" />
              Industry Challenges
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
              The Operational Debt Holding Your <span className="text-gradient">Insurance Business</span> Back
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              These are the systemic problems we're called in to solve — consistently, across carriers, MGAs, and agencies.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {PAIN_POINTS.map((pt, i) => (
              <motion.div
                key={pt.title}
                {...fadeUp(i)}
                className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-900/40 border border-red-700/30 flex items-center justify-center">
                  <pt.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{pt.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pt.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <HiClipboardDocumentList className="w-3.5 h-3.5" />
              Our Delivery Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 font-heading">
              How We Build <span className="text-gradient">Insurance Platforms</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              A compliance-first, agile process refined across 50+ insurance software engagements — from discovery to production.
            </p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                {...fadeUp(i)}
                className="flex gap-6 items-start bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:bg-teal-50/30 transition-all"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="bg-slate-50 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
              Insurance Technology Stack
            </h2>
            <p className="text-slate-500">
              Modern, battle-tested technologies selected for reliability, compliance, and InsurTech ecosystem compatibility.
            </p>
          </motion.div>
          <motion.div {...fadeUp(1)} className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech) => (
              <span
                key={tech.label}
                className={`inline-flex items-center px-4 py-2 rounded-lg border text-sm font-medium ${tech.color}`}
              >
                {tech.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)}>
            <BookingBanner
              heading="Ready to scope your insurance software project?"
              subheading="Talk to an InsurTech engineer — not a sales rep. We'll map your requirements, flag compliance risks, and give you an honest timeline estimate in 30 minutes."
              cta="Book Free Technical Consultation"
            />
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDY CALLOUT ── */}
      <section className="bg-dots py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeUp(0)}
            className="bg-gradient-to-br from-teal-600 to-blue-700 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-white text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiStar className="w-3.5 h-3.5" />
                  Featured Case Study
                </div>
                <h2 className="text-3xl font-bold mb-4 font-heading">
                  GloveBox: Insurance Onboarding 3 hrs → 45 min
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  We rebuilt GloveBox's customer onboarding and policy digitization workflow — replacing a manual, paper-heavy process with a mobile-first platform. The result: 4× faster onboarding, 60% reduction in document errors, and a 4.8-star App Store rating from policyholders.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Policy Digitization", "Mobile App", "E-Signature", "Agent Portal"].map((tag) => (
                    <span key={tag} className="bg-white/20 border border-white/30 rounded-full px-3 py-1 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/case-studies/glovebox"
                  className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  Read Full Case Study
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "3 hrs → 45 min", label: "Onboarding time" },
                  { metric: "60%", label: "Fewer doc errors" },
                  { metric: "4.8★", label: "App Store rating" },
                  { metric: "40%", label: "Higher retention" },
                ].map((m) => (
                  <div key={m.label} className="bg-white/15 border border-white/20 rounded-2xl p-5 text-center">
                    <div className="text-2xl font-bold mb-1">{m.metric}</div>
                    <div className="text-white/70 text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RELATED VERTICALS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 font-heading">
              Related Technology Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Insurance software rarely lives in isolation. Explore adjacent capabilities our clients pair with InsurTech projects.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((rel, i) => (
              <motion.div key={rel.title} {...fadeUp(i)}>
                <Link
                  href={rel.href}
                  className="group flex flex-col h-full bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-teal-300 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-3">{rel.tag}</span>
                  <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-teal-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{rel.description}</p>
                  <div className="flex items-center gap-1 text-teal-600 text-sm font-medium mt-5">
                    Explore <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-50 border-t border-slate-200 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 text-teal-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <HiMagnifyingGlass className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl font-bold text-slate-900 font-heading">
              Insurance Software <span className="text-gradient">FAQ</span>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING SECTION ── */}
      <BookingSection
        badge="Insurance Software Specialists"
        heading="Ready to Modernize Your Insurance Operations?"
        subheading="Schedule a free 30-minute session with our InsurTech engineering team. We'll assess your current system landscape, identify quick wins, and outline a practical modernization roadmap — no obligation."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to an InsurTech Engineer"
        stats={[
          { value: "30 min", label: "Discovery session" },
          { value: "Free", label: "No commitment" },
          { value: "50+", label: "Insurance projects" },
        ]}
        trustItems={[
          "NDA signed before any discussion",
          "Insurance domain engineers on every call",
          "Compliance-first architecture review",
        ]}
      />

      <Footer />
      <FloatingBookingButton label="Book InsurTech Call" />
    </>
  );
}
