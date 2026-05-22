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
  HiChartBar,
  HiBolt,
  HiCalendarDays,
  HiStar,
  HiCodeBracket,
  HiCircleStack,
  HiArrowPath,
  HiCog6Tooth,
  HiGlobeAlt,
  HiCurrencyDollar,
  HiDocumentText,
  HiClipboardDocumentList,
  HiRocketLaunch,
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
    title: "Agents Quote One Carrier at a Time",
    description: "Without a comparative rater, agents log into 8–12 carrier portals, copy data into each form, and manually compare quotes in a spreadsheet. A single household quote takes 45–90 minutes instead of 5.",
  },
  {
    title: "Carrier API Volatility Breaks Integrations",
    description: "Building direct carrier integrations in-house means your dev team spends 30% of their time maintaining breaks when carriers update their rating APIs — not building product.",
  },
  {
    title: "No Bind-Online Capability",
    description: "Shoppers who receive a competitive quote expect to bind immediately. Forcing them to call an agent to complete the purchase loses 35–50% of online intent traffic before conversion.",
  },
  {
    title: "Quote Data Doesn't Flow to Policy Admin",
    description: "Quotes generated outside the policy admin system require re-keying when a customer binds — a second data entry opportunity for errors, a compliance gap, and minutes of wasted agent time per bind.",
  },
];

const FEATURES = [
  {
    icon: HiCircleStack,
    title: "Multi-Carrier API Aggregation",
    description: "Concurrent API calls to all connected carriers return quotes in parallel. Carrier timeouts and errors handled gracefully — a carrier API failure surfaces partial results, not a broken page.",
  },
  {
    icon: HiBolt,
    title: "Sub-3 Second Quote Generation",
    description: "Asynchronous carrier API architecture with intelligent caching returns the first quotes in under 3 seconds. Carriers that respond later populate results progressively without blocking the UI.",
  },
  {
    icon: HiChartBar,
    title: "Side-by-Side Comparison",
    description: "Coverage-equivalent comparison across carriers — not just premium. Deductibles, limits, exclusions, and carrier financial strength ratings displayed in a standardized comparison view.",
  },
  {
    icon: HiArrowPath,
    title: "Rate Filing Integration",
    description: "Rate filing data integrated directly — your platform always presents DOI-approved rates for the policyholder's state and risk class. No stale rate cards, no rate-file discrepancies at bind.",
  },
  {
    icon: HiDocumentText,
    title: "Bind-Online Workflow",
    description: "Customer selects a quote, verifies information, e-signs disclosures via DocuSign, pays the first premium via Stripe or ACH, and receives a binder document — all without agent intervention.",
  },
  {
    icon: HiGlobeAlt,
    title: "White-Label & Multi-Tenant",
    description: "Agency partners and distribution channels get a branded quoting experience with their logo, colors, and contact information. Quote data attributed back to the producing agent or channel.",
  },
  {
    icon: HiCog6Tooth,
    title: "Carrier Management Console",
    description: "Add, configure, and disable carriers without code deployments. Carrier-specific question sets, eligibility rules, and rate mapping managed via the admin console by your ops team.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Policy Admin System Integration",
    description: "Bound quotes automatically create policy records in your PAS — no re-keying. Quote-to-bind data fidelity maintained with reconciliation reporting and discrepancy alerts.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Carrier & Distribution Scope",
    description: "Define target carriers, lines of business, and distribution channels. Carrier API credentials, documentation, and sandbox environments collected. State licensing and appointment requirements documented.",
  },
  {
    step: "02",
    title: "Data Model & API Architecture",
    description: "Canonical quote data model designed to normalize across carrier-specific schemas. API gateway and circuit-breaker architecture defined to handle carrier reliability variability.",
  },
  {
    step: "03",
    title: "Quoting Engine Build",
    description: "Core quoting engine with carrier adapters built and tested against carrier sandbox environments. Progressive loading UI and error handling implemented from day one.",
  },
  {
    step: "04",
    title: "Bind & Payment Integration",
    description: "Bind-online workflow, e-signature integration, and payment processing built and PCI compliance validated. End-to-end quote-to-binder tested across all carriers.",
  },
  {
    step: "05",
    title: "Launch & Carrier Onboarding",
    description: "Production launch with initial carrier set. Carrier management console enables your team to onboard additional carriers post-launch without Infonza involvement.",
  },
];

const TECH = [
  { label: "React / Next.js", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { label: "Node.js", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "Redis (Quote Cache)", color: "bg-red-100 text-red-700 border-red-200" },
  { label: "PostgreSQL", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "AWS API Gateway", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "Stripe / ACH", color: "bg-violet-100 text-violet-700 border-violet-200" },
  { label: "DocuSign", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
  { label: "REST / SOAP APIs", color: "bg-slate-100 text-slate-700 border-slate-200" },
  { label: "AWS Lambda", color: "bg-amber-100 text-amber-700 border-amber-200" },
];

const RESULTS = [
  { metric: "5×", label: "Quote Volume Increase", desc: "Agents quote more carriers with less effort per household" },
  { metric: "< 3s", label: "Quote Generation Speed", desc: "Parallel carrier API architecture with progressive loading" },
  { metric: "40%", label: "Higher Bind Conversion", desc: "Bind-online capability captures intent at peak engagement" },
  { metric: "75%", label: "Less Agent Admin Time", desc: "Per-quote time reduced from 60+ minutes to under 8 minutes" },
];

const RELATED = [
  {
    title: "Policy Management Software",
    description: "End-to-end policy lifecycle platform — underwriting, issuance, and renewals — that your quoting platform flows into at bind.",
    href: "/insurance-software-development/policy-management-software",
    tag: "InsurTech",
  },
  {
    title: "Insurance Agent Portal",
    description: "Agent self-service portal with book of business, commissions, and quoting workflow integrated in one place.",
    href: "/insurance-software-development/insurance-agent-portal",
    tag: "InsurTech",
  },
  {
    title: "AI Workflow Automation",
    description: "AI-powered prefill from MVR, CLUE reports, and public data to accelerate quote intake and reduce application abandonment.",
    href: "/ai-development/ai-workflow-automation",
    tag: "AI Development",
  },
];

const FAQS = [
  {
    q: "How many carriers can your platform integrate with?",
    a: "We've built platforms with 5 to 80+ carrier integrations. The carrier adapter architecture means each carrier is an isolated integration module — adding a new carrier doesn't require changes to the core platform. Your ops team can onboard carriers via the management console post-launch for carriers with standard APIs.",
  },
  {
    q: "How do you handle carriers that don't have public APIs?",
    a: "For carriers without REST APIs, we integrate via ACORD XML/SOAP, flat-file exchange, or screen-scraping adapters where permitted. We'll assess each carrier's integration options during discovery and recommend the most reliable approach. Some legacy carrier integrations require coordination with the carrier's IT team.",
  },
  {
    q: "Can the platform support both personal and commercial lines?",
    a: "Yes. Personal lines (auto, home, renters, umbrella) and commercial lines (BOP, GL, commercial auto, workers' comp) can be supported on the same platform. Each line has its own question set, eligibility rules, and carrier routing — the UI adapts to the line of business selected.",
  },
  {
    q: "How do you ensure the platform shows DOI-approved rates?",
    a: "Rate data is sourced directly from carrier rating APIs, which reflect current DOI-approved rates in real time. We do not use third-party rate databases that may lag carrier updates. Rate filing compliance is the carrier's responsibility at the API layer; our platform surfaces exactly what the carrier API returns.",
  },
  {
    q: "What does a quote comparison platform build cost and how long does it take?",
    a: "A platform with 10–15 carrier integrations, bind-online capability, and agent portal typically takes 18–24 weeks and costs $200K–$400K. Simpler embedded quoting widgets for 3–5 carriers can be built in 10–14 weeks for $80K–$150K. Timeline is heavily influenced by carrier API quality and availability.",
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

export default function QuoteComparisonPlatformPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insurance-software-development" className="hover:text-teal-400 transition-colors">Insurance Software</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Quote Comparison Platform</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-violet-900/60 border border-violet-700/40 rounded-full px-4 py-1.5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-7">
                <HiRocketLaunch className="w-3.5 h-3.5" />
                InsurTech Quoting Experts
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 font-heading">
                Insurance <span className="text-gradient">Quote Comparison</span> Platform Development
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Multi-carrier real-time quoting engines that return comparative quotes in under 3 seconds — with bind-online capability that converts intent into premium at point of sale.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["5× Quote Volume", "Sub-3s Generation", "40% Higher Conversion"].map((b) => (
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
                  Get Project Estimate <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Live quoting dashboard */}
            <motion.div {...fadeUp(1)}>
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-400 text-sm font-medium">Live Quote Engine — Auto Insurance</p>
                  <span className="text-xs text-violet-400 font-medium bg-violet-900/40 border border-violet-700/40 rounded-full px-2.5 py-1">2.8s avg</span>
                </div>
                <div className="space-y-3 mb-5">
                  {[
                    { carrier: "Progressive", premium: "$127/mo", diff: "Best Price", color: "text-emerald-400", badge: "bg-emerald-900/40 border-emerald-700/40 text-emerald-300" },
                    { carrier: "Nationwide", premium: "$134/mo", diff: "+$7/mo", color: "text-blue-400", badge: "" },
                    { carrier: "Allstate", premium: "$141/mo", diff: "+$14/mo", color: "text-amber-400", badge: "" },
                    { carrier: "State Farm", premium: "$156/mo", diff: "+$29/mo", color: "text-slate-400", badge: "" },
                  ].map((row) => (
                    <div key={row.carrier} className="flex items-center justify-between bg-slate-700/60 rounded-xl px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-600 flex items-center justify-center text-xs font-bold text-slate-300">
                          {row.carrier[0]}
                        </div>
                        <span className="text-slate-300 font-medium text-sm">{row.carrier}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`font-bold ${row.color}`}>{row.premium}</span>
                        {row.badge ? (
                          <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${row.badge}`}>{row.diff}</span>
                        ) : (
                          <span className="text-slate-500 text-xs">{row.diff}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Quotes/Day", value: "4,200+" },
                    { label: "Bind Rate", value: "18.4%" },
                    { label: "Uptime", value: "99.97%" },
                  ].map((c) => (
                    <div key={c.label} className="bg-slate-700/60 rounded-xl p-3 text-center">
                      <div className="text-violet-400 font-bold text-sm mb-0.5">{c.value}</div>
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
              Why Insurance Distribution Loses Volume Without a <span className="text-gradient">Comparative Rater</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROBLEMS.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-violet-300 hover:shadow-md transition-all">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              Quote Engine <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Every component built for the speed, reliability, and compliance requirements of production insurance distribution.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i)} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-4">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Build Process</h2>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} {...fadeUp(i)} className="flex gap-6 items-start bg-white border border-slate-200 rounded-2xl p-6 hover:border-violet-300 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Quoting Platform <span className="text-gradient">Results</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i)} className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 text-center hover:border-violet-700/50 transition-all">
                <div className="text-4xl font-bold text-violet-400 mb-2">{r.metric}</div>
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
            <BookingBanner heading="Ready to build a real-time quoting engine?" subheading="Let's scope your carrier list, distribution channels, and bind-online requirements — then give you a precise build estimate." cta="Book Free Quoting Platform Consultation" />
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
            <h2 className="text-3xl font-bold text-slate-900 font-heading">Quote Platform <span className="text-gradient">FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="InsurTech Quoting Specialists"
        heading="Build a Quote Engine That Converts"
        subheading="Schedule a free 30-minute session with our insurance platform engineers. We'll review your carrier wishlist, distribution channels, and bind-online requirements to build the right scoped plan."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Get Estimate"
      />
      <Footer />
      <FloatingBookingButton label="Book Quote Engine Call" />
    </>
  );
}
