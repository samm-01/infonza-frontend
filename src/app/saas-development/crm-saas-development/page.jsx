"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiChevronDown,
  HiUsers,
  HiShieldCheck,
  HiEnvelope,
  HiChartBar,
  HiBolt,
  HiCodeBracket,
  HiCog6Tooth,
  HiGlobeAlt,
  HiSparkles,
  HiCurrencyDollar,
  HiPhone,
  HiRocketLaunch,
  HiServer,
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
    q: "Why build a CRM as a SaaS product instead of licensing Salesforce?",
    a: "Salesforce costs $150–$300 per user per month for enterprise tiers. If you build a vertical CRM SaaS for a specific industry (insurance, real estate, legal), your customers pay a fraction of that while you own a recurring revenue stream. Custom CRM SaaS lets you bundle domain-specific workflows that generic CRMs can never match.",
  },
  {
    q: "What core modules does a CRM SaaS need at launch?",
    a: "A viable CRM SaaS MVP includes: contact and company management, deal pipeline with stages and probability, activity tracking (calls, emails, meetings), email sequence automation, basic reporting, and a mobile-responsive interface. We scope your MVP to ship in 3–4 months and layer advanced features in subsequent sprints.",
  },
  {
    q: "How do you build pipeline management in a multi-tenant CRM?",
    a: "We build a flexible pipeline engine: each tenant can create custom stages, set win/loss reasons, define deal fields, and configure automation triggers. The pipeline data is fully tenant-isolated via RLS. Stage transitions trigger webhook events that power automation workflows and reporting aggregations.",
  },
  {
    q: "Can you build white-label options so our customers rebrand the CRM?",
    a: "Yes. We implement a white-label layer: custom domains (app.yourclientsdomain.com), per-tenant logo and color theming, white-label email sending via their own SMTP or SendGrid account, and suppression of all Infonza or your company branding in the product UI.",
  },
  {
    q: "How do you handle CRM integrations with email, calendar, and third-party tools?",
    a: "We build OAuth-based integrations with Gmail, Outlook, and Google Calendar for two-way sync. For third-party tools, we provide a webhook system and a REST API with API key management so customers can integrate your CRM with their own stack. We also build native integrations with popular tools like Slack, Zapier, and QuickBooks on request.",
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
    icon: HiChartBar,
    title: "Visual Pipeline Management",
    desc: "Drag-and-drop Kanban pipeline with customizable stages, probability weights, deal value tracking, and automated stage-transition triggers per tenant.",
  },
  {
    icon: HiUsers,
    title: "Contact Intelligence Engine",
    desc: "Enriched contact profiles with activity timeline, deal associations, communication history, tag-based segmentation, and custom field builder.",
  },
  {
    icon: HiEnvelope,
    title: "Email Sequence Automation",
    desc: "Multi-step drip sequences with conditional branching, open/click tracking, reply detection, automatic sequence pause on reply, and A/B subject testing.",
  },
  {
    icon: HiGlobeAlt,
    title: "Webhook & Integration Layer",
    desc: "Outbound webhooks on every entity event, inbound webhook receiver, REST API with OpenAPI docs, and native integrations with Gmail, Outlook, and Slack.",
  },
  {
    icon: HiCodeBracket,
    title: "Open API Architecture",
    desc: "Full REST API with API key management, rate limiting per plan tier, request logging, and an API explorer embedded in the product for developer customers.",
  },
  {
    icon: HiSparkles,
    title: "White-Label Options",
    desc: "Custom domains, per-tenant brand theming, white-label email delivery, custom login pages, and suppression of all platform branding in the UI.",
  },
  {
    icon: HiCog6Tooth,
    title: "Workflow Automation Builder",
    desc: "Visual no-code automation builder: trigger → condition → action chains covering deal updates, contact tag changes, email opens, and custom events.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Revenue Analytics",
    desc: "MRR/ARR tracking, pipeline conversion funnel, win rate by stage, deal velocity, rep leaderboards, and forecasting with weighted probability.",
  },
];

const PROCESS = [
  { step: "01", title: "Product & Market Scoping", desc: "Define your target vertical, ICP, and the workflows that justify a custom CRM over Salesforce for your market." },
  { step: "02", title: "Data Model & Architecture", desc: "Design the contact, company, deal, and activity schemas with tenant isolation, custom fields, and activity timeline." },
  { step: "03", title: "Core CRM Build", desc: "Pipeline management, contact intelligence, email integration, and activity tracking — shipped in 2-week sprints with continuous deployment." },
  { step: "04", title: "Automation & Integrations", desc: "Email sequences, webhook system, open API, and native integrations with Gmail, Outlook, Slack, and billing tools." },
  { step: "05", title: "Launch & Iteration", desc: "Production launch with monitoring, in-app onboarding flows, and a roadmap for V2 features driven by your first customer cohort." },
];

const TECH = ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "SendGrid", "AWS SES", "Stripe", "Prisma", "Elasticsearch"];

const RELATED = [
  { href: "/saas-development/multi-tenant-saas-development", label: "Multi-Tenant Architecture", desc: "The isolation and white-label foundation your CRM SaaS is built on." },
  { href: "/insurance-software-development/insurance-crm-development", label: "Insurance CRM Development", desc: "Vertical CRM built for insurance agencies with carrier integrations." },
  { href: "/ai-development/openai-integration-services", label: "OpenAI Integration Services", desc: "Add AI-powered contact enrichment and deal scoring to your CRM." },
];

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
      <span className="w-6 h-px bg-teal-600" />
      {children}
    </div>
  );
}

export default function CRMSaaSPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Script id="crm-saas-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/saas-development" className="hover:text-teal-600 transition-colors">SaaS Development</Link>
            <span>/</span>
            <span className="text-slate-600">CRM SaaS Development</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                CRM SaaS Product Builders
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
                Custom CRM SaaS{" "}
                <span className="text-gradient">Development</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Build a full-featured CRM as a SaaS product — pipeline management, contact intelligence, email sequences, webhook integrations, open API, and white-label options. Give your customers a 5× cheaper alternative to Salesforce with industry-specific workflows they can&apos;t get anywhere else.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-0.5 transition-all">
                  Schedule Free Consultation <HiArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-teal-400 hover:bg-teal-50 hover:-translate-y-0.5 transition-all">
                  Talk to a CRM Expert
                </Link>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { value: "5×", label: "Salesforce cost reduction" },
                  { value: "2 weeks", label: "Time-to-value" },
                  { value: "99.9%", label: "Uptime SLA" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-xl px-4 py-2">
                    <span className="text-lg font-bold text-teal-700">{m.value}</span>
                    <span className="text-xs text-slate-500">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CRM Dashboard panel */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden lg:block">
              <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-700">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-slate-400">CRM Pipeline</p>
                    <p className="text-white font-bold">Sales Dashboard · Q2</p>
                  </div>
                  <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { stage: "Prospect", count: 42, value: "$210K" },
                    { stage: "Qualified", count: 18, value: "$340K" },
                    { stage: "Proposal", count: 7, value: "$175K" },
                  ].map((s) => (
                    <div key={s.stage} className="bg-slate-800 rounded-xl p-3">
                      <p className="text-slate-400 text-xs">{s.stage}</p>
                      <p className="text-white font-bold text-sm mt-1">{s.count} deals</p>
                      <p className="text-teal-400 text-xs">{s.value}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2.5 mb-4">
                  {[
                    { name: "Acme Enterprise", stage: "Proposal", value: "$48K", prob: "80%" },
                    { name: "BuilderPro LLC", stage: "Qualified", value: "$22K", prob: "55%" },
                    { name: "Finstream Inc", stage: "Prospect", value: "$15K", prob: "30%" },
                  ].map((d) => (
                    <div key={d.name} className="flex items-center gap-3 bg-slate-800 rounded-xl px-3 py-2">
                      <div className="flex-1">
                        <p className="text-white text-xs font-semibold">{d.name}</p>
                        <p className="text-slate-400 text-xs">{d.stage}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-teal-400 text-xs font-bold">{d.value}</p>
                        <p className="text-slate-400 text-xs">{d.prob} prob</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-800 rounded-xl p-3 flex items-center justify-between">
                  <span className="text-slate-400 text-xs">Pipeline Value</span>
                  <span className="text-teal-400 font-bold text-sm">$725K</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>What We Build</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Every module your CRM SaaS needs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:border-teal-200 transition-all">
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
              Build Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">From concept to launched CRM SaaS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
                <span className="text-teal-400 font-bold text-lg">{p.step}</span>
                <h3 className="font-bold text-white text-sm mt-2 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionLabel>Tech Stack</SectionLabel>
            <h2 className="text-2xl font-bold text-slate-900">Technologies powering your CRM SaaS</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="px-4 py-2 rounded-xl border border-teal-200 bg-teal-50 text-teal-800 text-sm font-semibold">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What CRM SaaS clients achieve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { metric: "5×", label: "Salesforce Cost Reduction", desc: "Customers switch from $300/seat Salesforce to your CRM at $60/seat — retaining more value in your product." },
              { metric: "2 Weeks", label: "Time-to-Value", desc: "New tenants go from signup to actively working deals within 2 weeks including onboarding and data migration." },
              { metric: "99.9%", label: "Uptime SLA", desc: "Production CRM platforms with sub-minute failover, monitored 24/7 with automated alert and recovery." },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg hover:border-teal-200 transition-all">
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
          <BookingBanner heading="Ready to build your CRM SaaS?" subheading="Get a free product scoping session. We&apos;ll map your vertical&apos;s workflows to a CRM SaaS MVP you can ship in 3 months." cta="Book Product Scoping Call" />
        </div>
      </section>

      {/* ── RELATED ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>Related Services</SectionLabel>
            <h2 className="text-2xl font-bold text-slate-900">Commonly paired with CRM SaaS development</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {RELATED.map((r) => (
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
            <h2 className="text-3xl font-bold text-slate-900">CRM SaaS development questions answered</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
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
        heading="Let&apos;s Build Your CRM SaaS Product"
        subheading="Free 30-minute session with our SaaS engineers. We&apos;ll scope your vertical CRM, define the MVP feature set, and give you a timeline and cost estimate."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to a CRM Expert"
      />

      <Footer />
      <FloatingBookingButton label="Book Call" />
    </>
  );
}
