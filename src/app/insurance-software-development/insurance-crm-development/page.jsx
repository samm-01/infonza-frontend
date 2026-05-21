"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiShieldCheck,
  HiChevronDown,
  HiUserGroup,
  HiDocumentText,
  HiChartBar,
  HiBolt,
  HiCalendarDays,
  HiStar,
  HiMagnifyingGlass,
  HiCurrencyDollar,
  HiBuildingOffice2,
  HiClipboardDocumentList,
  HiCodeBracket,
  HiCpuChip,
  HiDevicePhoneMobile,
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

const PROBLEMS = [
  {
    title: "Generic CRMs Force Workarounds",
    description: "Salesforce and HubSpot were built for SaaS companies, not insurance agencies. Your team spends hours customizing fields, building clunky policy-tracking workarounds, and exporting data to spreadsheets just to run a basic renewal report.",
  },
  {
    title: "No Policy Lifecycle Visibility",
    description: "Without a unified view of each policy from quote to renewal, producers miss renewal windows, underwriters duplicate effort, and CSRs answer client questions from memory rather than data.",
  },
  {
    title: "Commission Management Is a Nightmare",
    description: "Manual commission tracking across multiple carriers and statement formats results in underpayments, disputes, and producer dissatisfaction. One missed carrier statement can cost thousands in unrecouped income.",
  },
  {
    title: "Compliance Without an Audit Trail",
    description: "State DOI audits require full documentation of every client interaction, advice given, and document shared. Generic CRMs provide no insurance-specific compliance audit trail — leaving agencies exposed.",
  },
];

const FEATURES = [
  {
    icon: HiUserGroup,
    title: "Lead & Opportunity Management",
    description: "Capture leads from website, referrals, and aggregators. Automated lead scoring, round-robin assignment, and follow-up sequences keep producers working their best opportunities.",
  },
  {
    icon: HiDocumentText,
    title: "Policy Lifecycle Tracking",
    description: "End-to-end policy view from quote to renewal — line of business, carrier, premium, effective dates, endorsements, and cancellations. Every change is versioned with timestamp and user attribution.",
  },
  {
    icon: HiCalendarDays,
    title: "Renewal Automation Engine",
    description: "Automated 90/60/30-day renewal outreach via email and SMS. Rule-based workflows route complex renewals to senior producers and flag policies requiring remarking before expiry.",
  },
  {
    icon: HiChartBar,
    title: "Agent Performance Dashboards",
    description: "Real-time KPIs: quotes written, policies bound, retention rate, premium in-force, and commission earned. Managers see team leaderboards; producers see personal scorecards.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Commission Management",
    description: "Import carrier statement data, reconcile against expected commissions, flag discrepancies, and generate producer pay stubs. Multi-carrier, multi-split commission support out of the box.",
  },
  {
    icon: HiBuildingOffice2,
    title: "Multi-Carrier Support",
    description: "Manage relationships and policy data across unlimited carriers from a single workspace. Carrier-specific fields, rating classes, and form requirements handled without custom code.",
  },
  {
    icon: HiShieldCheck,
    title: "Compliance Audit Trail",
    description: "Every client interaction, document shared, and advice documented with immutable audit trail. E&O-defensible records with role-based access and time-stamped activity logs.",
  },
  {
    icon: HiBolt,
    title: "Customer 360° View",
    description: "Complete household or commercial account view — all policies, claims history, communication history, documents, and notes — visible to any authorized team member in one screen.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Workflow Discovery",
    description: "We shadow your producers, CSRs, and managers for 2–3 days to map every workflow from first contact to renewal. Output is a detailed process map and requirements backlog.",
  },
  {
    step: "02",
    title: "Data Model & Integration Design",
    description: "Insurance-specific data model designed for your lines of business. Integration architecture defined for carrier APIs, rater platforms (EZLynx, TurboRater), and existing AMS systems.",
  },
  {
    step: "03",
    title: "CRM Core Build",
    description: "Agile sprints deliver lead management, policy tracking, contact records, and activity logging. Bi-weekly demos with your operations team keep the build aligned to real-world workflows.",
  },
  {
    step: "04",
    title: "Automation & Integration Layer",
    description: "Renewal workflows, commission reconciliation, email/SMS sequences, and carrier API integrations built and load-tested with production-volume data before go-live.",
  },
  {
    step: "05",
    title: "Training, Migration & Launch",
    description: "Historical data migrated from AMS360, Applied Epic, or spreadsheets. Role-specific training sessions delivered. Parallel run period ensures zero data loss before full cutover.",
  },
];

const TECH = [
  { label: "React / Next.js", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { label: "Node.js", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "PostgreSQL", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "Redis", color: "bg-red-100 text-red-700 border-red-200" },
  { label: "Twilio", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "SendGrid", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  { label: "EZLynx API", color: "bg-teal-100 text-teal-700 border-teal-200" },
  { label: "AWS", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { label: "DocuSign", color: "bg-violet-100 text-violet-700 border-violet-200" },
];

const RESULTS = [
  { metric: "45%", label: "Faster Quote-to-Bind", desc: "Average across agency CRM deployments vs. prior workflow" },
  { metric: "3×", label: "Agent Productivity", desc: "More policies managed per producer per month" },
  { metric: "60%", label: "Renewal Rate Increase", desc: "Driven by automated outreach and pipeline visibility" },
  { metric: "98%", label: "Commission Accuracy", desc: "Versus industry average of 72% with manual reconciliation" },
];

const RELATED = [
  {
    title: "Insurance Agent Portal",
    description: "Self-service portal for agents to manage appointments, licensing, book of business, and commissions.",
    href: "/insurance-software-development/insurance-agent-portal",
    tag: "InsurTech",
  },
  {
    title: "Policy Management Software",
    description: "End-to-end policy lifecycle platform covering underwriting, issuance, endorsements, and renewals.",
    href: "/insurance-software-development/policy-management-software",
    tag: "InsurTech",
  },
  {
    title: "CRM SaaS Development",
    description: "Build a multi-tenant CRM SaaS product with white-labeling and usage-based billing.",
    href: "/saas-development/crm-saas-development",
    tag: "SaaS Development",
  },
];

const FAQS = [
  {
    q: "How is a custom insurance CRM different from Salesforce with insurance plugins?",
    a: "Generic CRMs require heavy customization to support insurance-specific workflows — policy lifecycles, multi-carrier commission splits, compliance audit trails, and renewal automation. A custom insurance CRM has these concepts as first-class data models, not bolt-on fields. The result is faster user adoption, half the training time, and workflows that match how producers actually work.",
  },
  {
    q: "Can you migrate our data from AMS360 or Applied Epic?",
    a: "Yes. We have data migration playbooks for AMS360, Applied Epic, Hawksoft, QQ Catalyst, and custom agency management systems. Historical policy records, client contacts, activity notes, and commission history are migrated with full validation reports before go-live.",
  },
  {
    q: "How long does a custom insurance CRM build take?",
    a: "A focused agency CRM with lead management, policy tracking, renewal automation, and reporting typically takes 14–20 weeks from discovery to go-live. Adding commission management and multi-carrier integrations adds 4–6 weeks. We'll give you a precise timeline after the discovery phase.",
  },
  {
    q: "Will the CRM integrate with our rating platform?",
    a: "Yes. We integrate with EZLynx, TurboRater, Vertafore Rating, and carrier direct rating APIs. Quote data flows bidirectionally — new quotes appear in the CRM automatically, and bound policies update in the rater. We'll document all integration points before build begins.",
  },
  {
    q: "How do you handle multi-branch or franchise agency models?",
    a: "The CRM is built with a multi-location, hierarchical permission model. Branch managers see their team's data; agency principals see the full book. White-labeling and branded client portals are available for franchise groups that need per-location branding.",
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

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div {...fadeUp(index)} className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900">{q}</span>
        <HiChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
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

export default function InsuranceCRMPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insurance-software-development" className="hover:text-teal-400 transition-colors">Insurance Software</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Insurance CRM Development</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-7">
                <HiShieldCheck className="w-3.5 h-3.5" />
                Insurance CRM Specialists
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 font-heading">
                Custom <span className="text-gradient">Insurance CRM</span> Development
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                A CRM built for insurance agencies — not retrofitted from a SaaS template. Lead management, policy lifecycle tracking, renewal automation, and commission reconciliation designed around how producers actually work.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["45% Faster Quote-to-Bind", "3× Agent Productivity", "60% More Renewals"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 bg-teal-900/40 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-sm font-medium">
                    <HiCheckCircle className="w-3.5 h-3.5" />
                    {b}
                  </span>
                ))}
              </div>
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
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-slate-400 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  Get Project Estimate <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Dashboard card */}
            <motion.div {...fadeUp(1)}>
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-400 text-sm font-medium">Agency CRM — Live View</p>
                  <span className="flex items-center gap-1.5 text-xs text-teal-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    Live
                  </span>
                </div>
                <div className="space-y-4 mb-5">
                  {[
                    { label: "Open Leads", value: 342, max: 400, color: "from-teal-500 to-teal-400" },
                    { label: "Renewal Pipeline (30 days)", value: 87, max: 100, color: "from-amber-500 to-orange-400" },
                    { label: "Bound This Month", value: 218, max: 250, color: "from-blue-500 to-indigo-400" },
                    { label: "Commission Reconciled", value: 95, max: 100, color: "from-emerald-500 to-green-400" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-400">{row.label}</span>
                        <span className="text-white font-medium">{row.value}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-1.5">
                        <div className={`bg-gradient-to-r ${row.color} h-1.5 rounded-full`} style={{ width: `${(row.value / row.max) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Avg Quote-to-Bind", value: "6.2 days" },
                    { label: "Producer Retention", value: "91.4%" },
                  ].map((c) => (
                    <div key={c.label} className="bg-slate-700/60 rounded-xl p-4 text-center">
                      <div className="text-teal-400 font-bold text-xl mb-0.5">{c.value}</div>
                      <div className="text-slate-500 text-xs">{c.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="bg-dots py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Why Insurance Agencies Struggle with <span className="text-gradient">Off-the-Shelf CRMs</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Generic CRMs cost agencies 15–25% of potential revenue in missed renewals, under-reconciled commissions, and producer attrition driven by poor tooling.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROBLEMS.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="text-slate-900 font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-500 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 text-teal-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <HiCodeBracket className="w-3.5 h-3.5" />
              Platform Features
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Built for Insurance, <span className="text-gradient">Top to Bottom</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Every feature designed around insurance-specific workflows — not adapted from a generic SaaS template.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i)} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-slate-900 font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Our CRM Build <span className="text-gradient">Process</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Five stages from workflow discovery to full production launch — with your team involved at every decision point.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} {...fadeUp(i)} className="flex gap-6 items-start bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">{step.step}</span>
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
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 font-heading">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {TECH.map((t) => (
                <span key={t.label} className={`inline-flex items-center px-4 py-2 rounded-lg border text-sm font-medium ${t.color}`}>{t.label}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">
              Results Our Agency <span className="text-gradient">Clients Achieve</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">Measured outcomes across insurance CRM deployments — from independent agencies to multi-state MGAs.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i)} className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 text-center hover:border-teal-700/50 transition-all">
                <div className="text-4xl font-bold text-teal-400 mb-2">{r.metric}</div>
                <div className="text-white font-semibold mb-2">{r.label}</div>
                <div className="text-slate-400 text-sm">{r.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)}>
            <BookingBanner
              heading="Ready to replace your agency's spreadsheet CRM?"
              subheading="Let's map your current workflow and show you what a purpose-built insurance CRM would look like for your agency."
              cta="Schedule Free Discovery Session"
            />
          </motion.div>
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="bg-dots py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Related Insurance Services</h2>
            <p className="text-slate-500">Pair your insurance CRM with these complementary platforms for end-to-end operations.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((rel, i) => (
              <motion.div key={rel.title} {...fadeUp(i)}>
                <Link href={rel.href} className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-7 hover:border-teal-300 hover:shadow-lg transition-all hover:-translate-y-1">
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-3">{rel.tag}</span>
                  <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-teal-600 transition-colors">{rel.title}</h3>
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
            <h2 className="text-3xl font-bold text-slate-900 font-heading">
              Insurance CRM <span className="text-gradient">FAQ</span>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Insurance CRM Specialists"
        heading="Build the CRM Your Producers Actually Want to Use"
        subheading="Schedule a free 30-minute consultation with an insurance CRM engineer. We'll review your current toolstack, identify the top three workflow bottlenecks, and outline a practical build plan."
        primaryCTA="Schedule Free CRM Consultation"
        secondaryCTA="Get a Project Estimate"
      />
      <Footer />
      <FloatingBookingButton label="Book CRM Consult" />
    </>
  );
}
