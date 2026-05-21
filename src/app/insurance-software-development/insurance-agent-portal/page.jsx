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
  HiUsers,
  HiDocumentText,
  HiChartBar,
  HiBolt,
  HiCalendarDays,
  HiStar,
  HiCodeBracket,
  HiCurrencyDollar,
  HiBuildingOffice2,
  HiAcademicCap,
  HiClipboardDocumentList,
  HiCog6Tooth,
  HiIdentification,
  HiUserGroup,
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
    title: "Agent Onboarding Takes Weeks Instead of Days",
    description: "Collecting E&O certificates, state licenses, appointment paperwork, and training certifications via email and PDF attachments takes 3–6 weeks per agent. Every day of delay is premium revenue not being written.",
  },
  {
    title: "Agents Phone In for Every Status Question",
    description: "Without a self-service portal, agents call or email for commission statements, licensing renewal reminders, and policy status updates. Carrier ops teams field thousands of low-value inbound contacts per month.",
  },
  {
    title: "Book of Business Is Invisible",
    description: "Agents have no visibility into their book — expiring policies, lapsed customers, or cross-sell opportunities. This opacity leads to avoidable attrition and missed revenue on the existing book.",
  },
  {
    title: "Commission Disputes Are Constant",
    description: "Without transparent commission statements tied to specific policies and transactions, disputes are common and time-consuming to resolve. Trust erodes and top producers explore alternatives.",
  },
];

const FEATURES = [
  {
    icon: HiIdentification,
    title: "Appointment of Agent (AOA) Workflow",
    description: "Digital appointment process — agent submits application, uploads E&O certificate and license copies, completes background consent, and e-signs appointment agreement. Status tracked in real time.",
  },
  {
    icon: HiDocumentText,
    title: "Licensing & Compliance Tracking",
    description: "Active licenses tracked by state and line of business with automated renewal reminders. System blocks transactions in states where the agent's license has lapsed.",
  },
  {
    icon: HiChartBar,
    title: "Book of Business Dashboard",
    description: "Complete view of the agent's book — policies in-force, renewal pipeline, lapsed policies, and cross-sell opportunities. Filter by line, carrier, and expiry date.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Commission Statements & History",
    description: "Detailed commission statements by pay period — policy-level breakdown, split commissions, chargebacks, and net payout. Downloadable PDFs and CSV exports for producer tax preparation.",
  },
  {
    icon: HiAcademicCap,
    title: "Training & CE Management",
    description: "Carrier-required training courses, product knowledge assessments, and state CE credit tracking in a unified LMS. Agents blocked from selling new products until training is certified.",
  },
  {
    icon: HiBuildingOffice2,
    title: "Multi-Carrier Management",
    description: "Agents appointed with multiple carriers manage all relationships from one portal — appointment status, writing codes, commission schedules, and carrier contacts in a single workspace.",
  },
  {
    icon: HiCog6Tooth,
    title: "Admin Management Console",
    description: "Carrier and MGA administrators manage the agent network — approve appointments, review licenses, set commission schedules, publish announcements, and run network-wide compliance reports.",
  },
  {
    icon: HiUserGroup,
    title: "Sub-Agent & Agency Hierarchy",
    description: "Support for agency principals, sub-agents, and support staff with hierarchical permissions. Agency-level book of business rolled up from individual producer records.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Workflow Audit",
    description: "Map the current agent onboarding, licensing, commission, and support workflows. Identify every step that currently requires carrier staff intervention — these become self-service automation targets.",
  },
  {
    step: "02",
    title: "Portal Architecture & Integrations",
    description: "Portal data model and integration architecture designed — CRM, policy admin, licensing database (NIPR), commission calculation engine, and e-signature provider.",
  },
  {
    step: "03",
    title: "Core Portal Build",
    description: "Agent profile, appointment workflow, licensing tracker, commission dashboard, and book of business view built in priority order. Bi-weekly releases with agent user testing.",
  },
  {
    step: "04",
    title: "Training Module & Admin Console",
    description: "Training course delivery, assessment engine, and CE tracking built alongside the admin management console. Role-based permissions and audit trails validated.",
  },
  {
    step: "05",
    title: "Rollout & Agent Onboarding",
    description: "Phased rollout to top-producing agents first for feedback. Bulk agent data migration from existing systems. Training session and FAQ library delivered before full network launch.",
  },
];

const TECH = [
  { label: "React / Next.js", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { label: "Node.js", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "PostgreSQL", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "DocuSign", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  { label: "Twilio (SMS)", color: "bg-red-100 text-red-700 border-red-200" },
  { label: "NIPR API", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "AWS S3", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { label: "SendGrid", color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
  { label: "Stripe", color: "bg-violet-100 text-violet-700 border-violet-200" },
];

const RESULTS = [
  { metric: "80%", label: "Reduction in Admin Tasks", desc: "Agent inquiries resolved self-service vs. staff-assisted" },
  { metric: "50%", label: "Faster Agent Onboarding", desc: "From 3–6 weeks to 5–10 business days average" },
  { metric: "95%", label: "Agent Satisfaction Score", desc: "NPS measured across deployed agent portal networks" },
  { metric: "22%", label: "Increase in Premium Per Agent", desc: "More time selling, less time on paperwork" },
];

const RELATED = [
  {
    title: "Insurance CRM Development",
    description: "Lead management, renewal automation, and agent performance dashboards for insurance agencies.",
    href: "/insurance-software-development/insurance-crm-development",
    tag: "InsurTech",
  },
  {
    title: "Insurance Mobile App Development",
    description: "Mobile companion apps for agents — policy lookups, FNOL submission, and client communication on the go.",
    href: "/insurance-software-development/insurance-mobile-app-development",
    tag: "InsurTech",
  },
  {
    title: "IT Staff Augmentation",
    description: "Embed senior InsurTech engineers directly into your development team for portal builds and integrations.",
    href: "/staff-augmentation",
    tag: "Staff Augmentation",
  },
];

const FAQS = [
  {
    q: "Can the agent portal integrate with NIPR for real-time license verification?",
    a: "Yes. We integrate with the NIPR (National Insurance Producer Registry) API to verify active licenses, look up resident and non-resident appointments, and pull licensing history. License data is refreshed on a configurable schedule, and transactions are blocked when a license is found to be inactive or expired.",
  },
  {
    q: "How do you handle the complexity of multi-state, multi-carrier agent appointments?",
    a: "The portal is built with a state-and-carrier matrix data model — each agent record stores licensing status per state, appointment status per carrier, and writing codes per line of business. The system enforces eligibility rules automatically: an agent can't submit a commercial auto quote in Texas if they're not appointed with that carrier in Texas.",
  },
  {
    q: "Can agents access the portal on mobile?",
    a: "Yes. The agent portal is built as a responsive web application accessible on any device. For carriers that want a native mobile experience, we can develop companion iOS and Android apps — see our Insurance Mobile App Development service.",
  },
  {
    q: "How is the commission data sourced?",
    a: "Commission data can be sourced from your existing policy admin system via API, imported from carrier statement files (CSV, EDI), or calculated by the portal's commission engine using configurable commission schedules. Most implementations combine all three sources.",
  },
  {
    q: "What does an agent portal build take in terms of time and cost?",
    a: "A core agent portal — appointment workflow, licensing tracking, commission statements, and book of business — typically takes 12–18 weeks and costs $100K–$200K. Adding a training module, admin console, and NIPR integration adds 4–8 weeks. We provide a detailed estimate after a 30-minute discovery call.",
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
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors">
        <span className="font-semibold text-slate-900">{q}</span>
        <HiChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-6 pb-5 text-slate-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function InsuranceAgentPortalPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-1/3 w-[600px] h-[400px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insurance-software-development" className="hover:text-teal-400 transition-colors">Insurance Software</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Insurance Agent Portal</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-orange-900/60 border border-orange-700/40 rounded-full px-4 py-1.5 text-orange-300 text-xs font-semibold uppercase tracking-widest mb-7">
                <HiBuildingOffice2 className="w-3.5 h-3.5" />
                Agent Distribution Technology
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 font-heading">
                Insurance <span className="text-gradient">Agent Portal</span> Development
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Self-service portals that give agents everything they need — appointments, licensing, book of business, commissions, and training — without calling your operations team.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["80% Less Admin", "50% Faster Onboarding", "95% Agent Satisfaction"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 bg-teal-900/40 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-sm font-medium">
                    <HiCheckCircle className="w-3.5 h-3.5" />
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5">
                  <HiCalendarDays className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-slate-400 hover:text-white transition-all hover:-translate-y-0.5">
                  Get Estimate <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Agent portal dashboard */}
            <motion.div {...fadeUp(1)}>
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-400 text-sm font-medium">Agent Portal — Producer Dashboard</p>
                  <span className="text-xs text-orange-400 font-medium">Sarah M. — Gold Producer</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Active Licenses", value: "12 States", color: "text-teal-400" },
                    { label: "Carriers Appointed", value: "8 Carriers", color: "text-blue-400" },
                    { label: "Book Premium", value: "$2.4M", color: "text-orange-400" },
                    { label: "Pending Commission", value: "$18,240", color: "text-emerald-400" },
                  ].map((c) => (
                    <div key={c.label} className="bg-slate-700/60 rounded-xl p-4">
                      <div className={`${c.color} font-bold text-lg mb-0.5`}>{c.value}</div>
                      <div className="text-slate-500 text-xs">{c.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-700/40 rounded-xl p-4 mb-3">
                  <p className="text-slate-400 text-xs mb-2 font-medium">License Renewals Due</p>
                  {[
                    { state: "Texas P&C", days: "14 days", status: "urgent" },
                    { state: "California Life", days: "42 days", status: "warning" },
                    { state: "New York P&C", days: "89 days", status: "ok" },
                  ].map((l) => (
                    <div key={l.state} className="flex items-center justify-between py-1.5 border-b border-slate-600/40 last:border-0">
                      <span className="text-slate-300 text-sm">{l.state}</span>
                      <span className={`text-xs font-medium ${l.status === "urgent" ? "text-red-400" : l.status === "warning" ? "text-amber-400" : "text-emerald-400"}`}>{l.days}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between bg-teal-900/30 border border-teal-700/40 rounded-xl px-4 py-3">
                  <span className="text-teal-300 text-sm font-medium">Onboarding Status</span>
                  <span className="text-teal-400 font-bold text-sm">7 → 3 Business Days</span>
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
              Why Insurance Distribution Networks <span className="text-gradient">Struggle Without Self-Service</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROBLEMS.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-orange-300 hover:shadow-md transition-all">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Agent Portal <span className="text-gradient">Capabilities</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Everything your agent network needs to be productive, compliant, and self-sufficient — without calling your ops team.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i)} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-4">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Agent Portal <span className="text-gradient">Build Process</span></h2>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} {...fadeUp(i)} className="flex gap-6 items-start bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
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

      {/* ── TECH ── */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 font-heading">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {TECH.map((t) => <span key={t.label} className={`inline-flex items-center px-4 py-2 rounded-lg border text-sm font-medium ${t.color}`}>{t.label}</span>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Agent Portal <span className="text-gradient">Results</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i)} className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 text-center hover:border-orange-700/50 transition-all">
                <div className="text-4xl font-bold text-orange-400 mb-2">{r.metric}</div>
                <div className="text-white font-semibold mb-2">{r.label}</div>
                <div className="text-slate-400 text-sm">{r.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)}>
            <BookingBanner heading="Ready to eliminate agent onboarding bottlenecks?" subheading="Let's walk through your current agent workflow and show you what a self-service portal would save in staff time and producer satisfaction." cta="Book Free Agent Portal Consultation" />
          </motion.div>
        </div>
      </section>

      <section className="bg-dots py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Related Insurance Services</h2>
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

      <section className="bg-slate-50 border-t border-slate-200 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 font-heading">Agent Portal <span className="text-gradient">FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Insurance Distribution Technology"
        heading="Give Your Agent Network the Portal They Deserve"
        subheading="Schedule a free 30-minute session with our insurance platform engineers. We'll review your current agent workflow and show you exactly what a self-service portal would eliminate."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Get Project Estimate"
      />
      <Footer />
      <FloatingBookingButton label="Book Agent Portal Call" />
    </>
  );
}
