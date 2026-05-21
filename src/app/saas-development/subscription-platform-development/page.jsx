"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiCurrencyDollar,
  HiChartBarSquare,
  HiBolt,
  HiShieldCheck,
  HiArrowPath,
  HiCog6Tooth,
  HiCircleStack,
  HiCodeBracket,
  HiSparkles,
  HiUsers,
  HiCreditCard,
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
    icon: HiCog6Tooth,
    title: "Plan Tier Management",
    desc: "Flexible plan builder for monthly, annual, and custom billing intervals. Unlimited plan tiers with feature-flag entitlements, usage limits, and seat-based restrictions. Plan migration rules handle prorated credits and charges automatically.",
  },
  {
    icon: HiChartBarSquare,
    title: "Usage-Based Metering & Billing",
    desc: "Capture API calls, storage, messages, or any metered resource in real time. Configurable aggregation periods, overage pricing tiers, and committed-use discounts. Usage ledgers accessible via API and customer dashboard.",
  },
  {
    icon: HiCreditCard,
    title: "Stripe / Chargebee / Paddle Integration",
    desc: "Deep integration with your preferred billing provider — payment method collection, 3DS2 handling, tax calculation, and invoice PDF generation. Multi-currency support with automatic exchange-rate application.",
  },
  {
    icon: HiUsers,
    title: "Trial & Freemium Management",
    desc: "Configurable trial periods with feature gating, in-app conversion nudges, and time-based expiry emails. Freemium tiers with hard usage ceilings that trigger upgrade prompts precisely when users hit the limit.",
  },
  {
    icon: HiArrowPath,
    title: "Smart Dunning & Failed Payment Recovery",
    desc: "Automated retry schedules, pre-dunning emails before expiry, and post-failure grace periods with customisable escalation sequences. Card updater integration recovers up to 40% of failed payments before the first dunning email is sent.",
  },
  {
    icon: HiSparkles,
    title: "Proration, Upgrades & Downgrades",
    desc: "Mid-cycle plan changes generate accurate prorated credits and charges posted to the next invoice. Immediate access to new entitlements on upgrade. Downgrade scheduling allows subscribers to finish the current period on their existing plan.",
  },
  {
    icon: HiShieldCheck,
    title: "Revenue Recognition (ASC 606)",
    desc: "Deferred revenue waterfall, monthly revenue recognition schedule per contract, and audit-ready journal entries. Reconciliation reports align billing events to recognised revenue for clean financial close.",
  },
  {
    icon: HiChartBarSquare,
    title: "Real-Time MRR / ARR / Churn Dashboard",
    desc: "Live metrics for MRR, ARR, new MRR, expansion MRR, contraction MRR, churned MRR, and net revenue retention. Cohort analysis, plan-level revenue breakdown, and churn reason tracking from cancellation surveys.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Billing Requirements Workshop",
    desc: "We map every plan tier, pricing model, trial workflow, and revenue recognition requirement before touching a line of code. Output: a billing specification document signed off by your team.",
  },
  {
    step: "02",
    title: "Architecture & Stripe Setup",
    desc: "Subscription data model, Stripe product/price hierarchy, and webhook event schema designed. Environment-specific Stripe accounts configured for development, staging, and production.",
  },
  {
    step: "03",
    title: "Core Billing Engine Development",
    desc: "Subscription lifecycle management, plan management UI, metering pipeline, and dunning engine built in sprints. Webhook handlers process Stripe events with idempotency guarantees.",
  },
  {
    step: "04",
    title: "Testing & Edge-Case Validation",
    desc: "Stripe test-mode validation of every billing scenario: upgrades, downgrades, proration, failed payments, trial conversions, and coupon application. Load testing of the metering pipeline.",
  },
  {
    step: "05",
    title: "Launch & Revenue Monitoring",
    desc: "Production cutover with live MRR dashboard activated from day one. First billing cycle monitored closely with reconciliation report reviewed by your finance team.",
  },
];

const TECH = [
  "Node.js", "Stripe API", "PostgreSQL", "Redis",
  "React", "AWS Lambda", "Webhooks", "BullMQ",
  "Stripe Radar (Fraud)", "Chargebee API", "Paddle API",
  "Docker", "GitHub Actions", "Datadog",
];

const RESULTS = [
  {
    metric: "15%",
    label: "Revenue Recovery via Smart Dunning",
    desc: "Automated card updater and intelligent retry scheduling recover failed payments that previously churned silently.",
  },
  {
    metric: "99.9%",
    label: "Payment Success Rate",
    desc: "Optimised Stripe integration with 3DS2 handling and SCA compliance delivers industry-leading authorisation rates.",
  },
  {
    metric: "Real-time",
    label: "MRR Dashboard",
    desc: "Live revenue metrics updated on every Stripe event — no waiting for overnight batch jobs or manual spreadsheet pulls.",
  },
];

const RELATED = [
  {
    href: "/saas-development/multi-tenant-saas-development",
    title: "Multi-Tenant SaaS Development",
    desc: "Pair your subscription billing engine with enterprise-grade tenant isolation and white-labelling capabilities.",
  },
  {
    href: "/saas-development/b2b-saas-development",
    title: "B2B SaaS Development",
    desc: "End-to-end B2B SaaS product development — from authentication and RBAC to subscription management and analytics.",
  },
  {
    href: "/insurance-software-development/quote-comparison-platform",
    title: "Quote Comparison Platform",
    desc: "Subscription and billing patterns applied to insurance premium collection and policy renewal workflows.",
  },
];

const FAQS = [
  {
    q: "Should we build our own billing engine or use Stripe Billing / Chargebee out of the box?",
    a: "For standard subscription models with two to five plan tiers, Stripe Billing out of the box is often sufficient and faster to ship. We build custom billing engines when you need metered billing on custom dimensions, complex usage aggregation logic, B2B invoicing with net-30/60 terms, or revenue recognition schedules that billing platforms cannot model accurately. We help you decide which approach fits your product during the requirements workshop.",
  },
  {
    q: "How do you handle revenue recognition for annual subscriptions paid upfront?",
    a: "Annual subscriptions paid upfront create deferred revenue that must be recognised over 12 months. Our billing engine posts a deferred revenue entry on payment and a monthly journal entry that recognises 1/12 of the annual value each month. Reconciliation reports show recognised vs deferred revenue by contract, customer, and plan — aligned to your chart of accounts for clean financial close.",
  },
  {
    q: "Can the dunning system handle B2B invoices with net-30 payment terms?",
    a: "Yes. B2B payment flows differ significantly from consumer subscriptions. We build separate dunning sequences for invoice-based customers with net-30/60 terms — including pre-due reminder emails, overdue escalation sequences, account suspension after configurable grace periods, and account manager notification for high-value accounts before automated action is taken.",
  },
  {
    q: "How is metered usage tracked and billed accurately at scale?",
    a: "Usage events are written to a Redis-backed metering pipeline that aggregates counts in real time. At billing cycle close, the aggregated usage is posted to Stripe as a usage record, triggering the invoice line item. The pipeline uses idempotent event IDs to prevent double-counting even when events are delivered more than once. We load-test the metering pipeline to the projected peak event volume before launch.",
  },
  {
    q: "What happens when a customer upgrades mid-cycle?",
    a: "The upgrade is effective immediately. Stripe calculates the prorated credit for the unused portion of the current plan and the prorated charge for the new plan, posting both to the next invoice. The customer's feature entitlements are updated in real time via a webhook handler that flips the relevant feature flags in your application database — no manual intervention required.",
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

export default function SubscriptionPlatformDevelopmentPage() {
  return (
    <>
      <Script
        id="subscription-faq-schema"
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
            <Link href="/saas-development" className="hover:text-white transition-colors">SaaS Development</Link>
            <HiArrowRight className="w-3 h-3" />
            <span className="text-slate-300">Subscription Platform Development</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiCreditCard className="w-3.5 h-3.5" />
                  Subscription Billing
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl font-bold font-heading text-white leading-tight mb-6">
                <span className="text-gradient">Subscription & Billing Platform</span> Development
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Build a robust subscription billing engine — plan tiers, usage-based billing, Stripe
                integration, dunning management, trial workflows, and real-time MRR analytics. Revenue
                infrastructure that scales with your SaaS.
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
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  Contact Our Team
                </Link>
              </motion.div>
            </div>

            {/* Right panel — billing dashboard */}
            <motion.div {...fadeUp(2)} className="hidden lg:block">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Live Metrics</p>
                <p className="text-white font-bold text-xl mb-5">Billing Dashboard</p>
                <div className="space-y-3">
                  {[
                    { label: "MRR", value: "$124,580", sub: "+8.3% MoM", valueColor: "text-white", subColor: "text-teal-400" },
                    { label: "Active Subscribers", value: "2,847", sub: "", valueColor: "text-white", subColor: "" },
                    { label: "Churn Rate", value: "1.8%", sub: "Industry avg 5.2%", valueColor: "text-teal-400", subColor: "text-slate-500" },
                    { label: "Failed Payments Recovery", value: "73%", sub: "via smart dunning", valueColor: "text-teal-400", subColor: "text-slate-500" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2 border-b border-slate-700/60 last:border-0">
                      <span className="text-slate-400 text-sm">{row.label}</span>
                      <div className="text-right">
                        <span className={`text-sm font-bold ${row.valueColor}`}>{row.value}</span>
                        {row.sub && <p className={`text-xs ${row.subColor}`}>{row.sub}</p>}
                      </div>
                    </div>
                  ))}
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
              Why Off-the-Shelf Billing Tools Limit Growth
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Generic billing platforms work until your pricing model gets complex, your customer
              base grows, or your finance team needs accurate revenue data. Here is where they break.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Rigid plan structures cannot accommodate usage-based, seat-based, and flat-rate components within a single subscription",
              "Revenue analytics are delayed by 24–48 hours, meaning finance decisions are made on stale data",
              "Platform transaction fees compound at scale — a billing tool taking 0.5% of revenue costs $50K on $10M ARR",
              "Dunning sequences are generic and cannot be personalised by plan tier, customer segment, or payment history",
              "B2B invoicing, purchase order numbers, and net-30/60 payment terms are afterthoughts, not first-class features",
              "Revenue recognition logic is non-existent or requires expensive accounting integrations to function correctly",
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
              Subscription Billing Capabilities We Build
            </h2>
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
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              Billing Platform Implementation Process
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
              Revenue Impact Delivered
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
            <h2 className="text-2xl font-bold font-heading text-slate-900">Complete Your SaaS Stack</h2>
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
              Subscription Billing Development Questions
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
