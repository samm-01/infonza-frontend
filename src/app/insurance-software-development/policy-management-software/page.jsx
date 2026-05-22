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
  HiDocumentText,
  HiChartBar,
  HiBolt,
  HiCalendarDays,
  HiStar,
  HiMagnifyingGlass,
  HiCurrencyDollar,
  HiCodeBracket,
  HiCpuChip,
  HiClipboardDocumentList,
  HiServer,
  HiCircleStack,
  HiArrowPath,
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

const PROBLEMS = [
  {
    title: "Policy Administration Systems Built in the 1990s",
    description: "Many carriers still run policy issuance on COBOL or Oracle Forms. These systems can't support API-first distribution, real-time endorsements, or the event-driven architectures modern insurtech ecosystems require.",
  },
  {
    title: "Multi-Line Complexity Breaks Single-System Designs",
    description: "Auto, home, commercial, life, and specialty lines each have unique underwriting rules, form sets, and regulatory filings. Bolting new lines onto legacy systems creates brittle customizations that collapse under rate changes.",
  },
  {
    title: "Endorsement and Cancellation Workflows Are Manual",
    description: "A mid-term endorsement — a name change, a new vehicle, a coverage adjustment — requires agents to call the carrier, submit a paper form, and wait 3–5 days. This creates policyholder frustration and operational cost.",
  },
  {
    title: "Compliance Breaks at the State Line",
    description: "Rate filings, form approvals, and regulatory rule changes differ by state and line. Without a rules-engine approach to policy administration, compliance teams chase every state DOI update manually.",
  },
];

const FEATURES = [
  {
    icon: HiDocumentText,
    title: "Underwriting Rules Engine",
    description: "Configurable underwriting rules by line, state, and risk class. Straight-through underwriting for clean risks; referral queues for exceptions — without code changes when rules evolve.",
  },
  {
    icon: HiBolt,
    title: "Policy Issuance & Document Generation",
    description: "Automated policy document generation with carrier-approved forms, declarations pages, and endorsement riders. PDF assembly, e-delivery, and DocuSign integration included.",
  },
  {
    icon: HiArrowPath,
    title: "Endorsement Workflow",
    description: "Self-service mid-term endorsements — coverage adjustments, driver adds/removes, address changes — processed in real-time with premium recalculation and immediate document delivery.",
  },
  {
    icon: HiCalendarDays,
    title: "Renewal Management",
    description: "Automated renewal cycle with configurable lead times, re-underwriting triggers, and outbound notification sequences. Non-renewing policies routed to re-marketing workflows.",
  },
  {
    icon: HiClipboardDocumentList,
    title: "Cancellation & Reinstatement",
    description: "Configurable cancellation reasons, notice periods, and pro-rata or flat-cancel premium return calculations. Reinstatement workflows with lapse-in-coverage handling and re-underwriting.",
  },
  {
    icon: HiShieldCheck,
    title: "Multi-Line Support",
    description: "Personal auto, homeowners, renters, commercial BOP, workers' comp, life, and specialty. Each line configured independently with line-specific forms, rates, and rules — not hacked onto a single schema.",
  },
  {
    icon: HiCircleStack,
    title: "Claims Initiation Integration",
    description: "First Notice of Loss (FNOL) integration with claims management systems. Policy verification, coverage confirmation, and deductible calculation surfaced instantly when a claim is filed.",
  },
  {
    icon: HiCog6Tooth,
    title: "Regulatory Compliance Engine",
    description: "State DOI rate and form filings tracked in the system. Policy issuance blocked on non-approved forms. Compliance audit reports generated on demand for regulatory submissions.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Line & State Scope Definition",
    description: "Define all lines of business, target states, carrier relationships, and regulatory obligations. Rate filing status and form inventory documented before architecture begins.",
  },
  {
    step: "02",
    title: "Policy Data Model & Rules Engine Design",
    description: "Insurance-specific data model — risk objects, coverage definitions, premium components, and policy status state machine — designed by engineers with policy administration experience.",
  },
  {
    step: "03",
    title: "Core Platform Build",
    description: "Underwriting engine, policy issuance, document generation, and premium calculation built in order of business priority. Each sprint delivers testable, demo-ready policy workflows.",
  },
  {
    step: "04",
    title: "Integration & Compliance Testing",
    description: "Integration with carrier rating APIs, billing systems, claims platforms, and agent portals. State-by-state compliance validation with your compliance counsel before go-live.",
  },
  {
    step: "05",
    title: "Production Launch & Support",
    description: "Parallel run with existing policy admin system. Data migration and validation. Cutover with rollback capability. Post-launch support SLA with dedicated policy admin engineers.",
  },
];

const TECH = [
  { label: "Node.js / TypeScript", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "React", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { label: "PostgreSQL", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "AWS Lambda", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "DocuSign", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  { label: "AWS S3", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { label: "Stripe / ACH", color: "bg-violet-100 text-violet-700 border-violet-200" },
  { label: "REST / SOAP APIs", color: "bg-slate-100 text-slate-700 border-slate-200" },
  { label: "Redis", color: "bg-red-100 text-red-700 border-red-200" },
  { label: "Kubernetes", color: "bg-purple-100 text-purple-700 border-purple-200" },
];

const RESULTS = [
  { metric: "70%", label: "Reduction in Manual Data Entry", desc: "Via automated underwriting, issuance, and document generation" },
  { metric: "2×", label: "Policy Issuance Speed", desc: "From application to issued policy, across all lines" },
  { metric: "99.9%", label: "Premium Calculation Accuracy", desc: "Rules-engine approach eliminates rounding and rater discrepancies" },
  { metric: "85%", label: "Straight-Through Processing Rate", desc: "Clean risks bound without human underwriting touch" },
];

const RELATED = [
  {
    title: "Insurance CRM Development",
    description: "Purpose-built CRM for insurance agencies with renewal automation, commission management, and agent dashboards.",
    href: "/insurance-software-development/insurance-crm-development",
    tag: "InsurTech",
  },
  {
    title: "Quote Comparison Platform",
    description: "Multi-carrier real-time quoting engine with API aggregation and bind-online workflow.",
    href: "/insurance-software-development/quote-comparison-platform",
    tag: "InsurTech",
  },
  {
    title: "Custom ERP Development",
    description: "Enterprise resource planning systems that unify operations, compliance, and finance for insurance carriers.",
    href: "/erp-development/custom-erp-solutions",
    tag: "ERP Solutions",
  },
];

const FAQS = [
  {
    q: "What lines of business does your policy management software support?",
    a: "We build systems supporting personal lines (auto, home, renters, umbrella), commercial lines (BOP, GL, commercial auto, workers' comp), specialty lines (E&O, D&O, cyber), and life insurance. Each line is configured with its own data model, rating rules, form set, and regulatory requirements — not forced into a single generic schema.",
  },
  {
    q: "Can your system integrate with existing carrier rating platforms?",
    a: "Yes. We integrate with ISO rating platforms, carrier proprietary rating APIs, and comparative rater platforms (EZLynx, TurboRater, QuoteRUSH). Rating integration is API-first — new carriers are added by configuration, not code changes.",
  },
  {
    q: "How do you handle state-by-state rate and form filings?",
    a: "The system includes a compliance configuration layer where approved rates and forms are mapped by state and line. Policy issuance is blocked on non-approved form versions. When a new form filing is approved, it's promoted via a configuration deployment, not a code release. Your compliance team manages this through a dedicated admin UI.",
  },
  {
    q: "Can we migrate existing policies from Guidewire or Duck Creek?",
    a: "Yes. We have migration experience from Guidewire PolicyCenter, Duck Creek Policy, and custom legacy systems. Migration includes policy data, endorsement history, claims history, and document archives. We run a parallel validation period before decommissioning the old system.",
  },
  {
    q: "What is the cost and timeline for a policy management system?",
    a: "A focused policy management system for one or two lines in a single state typically takes 16–24 weeks and costs $150K–$300K. A multi-line, multi-state carrier platform is a 9–18 month, $400K–$1M+ engagement. We provide a detailed estimate with fixed-price milestones after the discovery phase.",
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

export default function PolicyManagementPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insurance-software-development" className="hover:text-teal-400 transition-colors">Insurance Software</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Policy Management Software</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700/40 rounded-full px-4 py-1.5 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-7">
                <HiDocumentText className="w-3.5 h-3.5" />
                Policy Administration Experts
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 font-heading">
                Custom <span className="text-gradient">Policy Management</span> Software
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                End-to-end policy lifecycle management built for carriers and MGAs — underwriting rules engine, automated issuance, real-time endorsements, renewals, and multi-line compliance from a single modern platform.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["70% Less Manual Entry", "2× Faster Issuance", "99.9% Calculation Accuracy"].map((b) => (
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

            {/* Dashboard card */}
            <motion.div {...fadeUp(1)}>
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-slate-400 text-sm font-medium">Policy Administration — System Status</p>
                  <span className="flex items-center gap-1.5 text-xs text-green-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    All Systems Operational
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Policies In-Force", value: "142,680", color: "text-teal-400" },
                    { label: "Issued Today", value: "847", color: "text-blue-400" },
                    { label: "Pending Underwriting", value: "234", color: "text-amber-400" },
                    { label: "Endorsements (MTD)", value: "3,291", color: "text-purple-400" },
                  ].map((c) => (
                    <div key={c.label} className="bg-slate-700/60 rounded-xl p-4">
                      <div className={`${c.color} font-bold text-xl mb-0.5`}>{c.value}</div>
                      <div className="text-slate-500 text-xs">{c.label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { label: "STP Rate", value: 85, color: "from-teal-500 to-teal-400" },
                    { label: "Renewal Conversion", value: 88, color: "from-blue-500 to-indigo-400" },
                    { label: "System Uptime", value: 99.9, color: "from-green-500 to-emerald-400" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-slate-400">{row.label}</span>
                        <span className="text-white font-medium">{row.value}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-1.5">
                        <div className={`bg-gradient-to-r ${row.color} h-1.5 rounded-full`} style={{ width: `${row.value}%` }} />
                      </div>
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
              Why Legacy Policy Administration <span className="text-gradient">Holds Carriers Back</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Outdated policy admin systems cost carriers an estimated 8–12% of premium revenue in operational inefficiency, compliance risk, and failed distribution partnerships.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROBLEMS.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-md transition-all">
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
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-blue-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <HiCodeBracket className="w-3.5 h-3.5" />
              Platform Capabilities
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Every Stage of the <span className="text-gradient">Policy Lifecycle</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From application intake through final cancellation — every policy event handled by purpose-built software, not manual workarounds.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i)} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Our Policy Platform <span className="text-gradient">Build Process</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">A compliance-first, domain-driven delivery process for policy administration systems.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} {...fadeUp(i)} className="flex gap-6 items-start bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Policy Platform <span className="text-gradient">Results</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">Measured outcomes across carrier and MGA policy management deployments.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i)} className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 text-center hover:border-blue-700/50 transition-all">
                <div className="text-4xl font-bold text-blue-400 mb-2">{r.metric}</div>
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
              heading="Ready to replace your legacy policy admin system?"
              subheading="Book a free technical consultation. We'll assess your current PAS landscape, define the migration strategy, and give you an honest timeline estimate."
              cta="Book Policy Platform Consultation"
            />
          </motion.div>
        </div>
      </section>

      {/* ── RELATED ── */}
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

      {/* ── FAQ ── */}
      <section className="bg-slate-50 border-t border-slate-200 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 font-heading">Policy Management <span className="text-gradient">FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Policy Administration Specialists"
        heading="Modernize Your Policy Administration System"
        subheading="Schedule a free 30-minute session with our policy platform engineers. We'll review your current PAS, identify the top integration and compliance gaps, and outline a realistic modernization path."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Get Project Estimate"
      />
      <Footer />
      <FloatingBookingButton label="Book Policy Consult" />
    </>
  );
}
