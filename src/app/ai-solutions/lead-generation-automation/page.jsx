"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiChevronDown,
  HiBolt,
  HiChartBar,
  HiCircleStack,
  HiRocketLaunch,
  HiEnvelope,
  HiMagnifyingGlass,
  HiClipboardDocumentList,
  HiFunnel,
  HiStar,
  HiArrowDownTray,
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

const METRICS = [
  { metric: "10×", label: "Faster Lead Sourcing", sub: "vs manual research methods" },
  { metric: "85%", label: "Qualification Accuracy", sub: "ICP match scoring via AI" },
  { metric: "5000+", label: "Leads/Day Processing", sub: "fully automated pipeline" },
  { metric: "2×", label: "Higher Response Rates", sub: "vs non-personalized outreach" },
];

const CAPABILITIES = [
  {
    icon: HiMagnifyingGlass,
    title: "Lead Scraping & Discovery",
    desc: "Automated lead sourcing from Apollo.io, LinkedIn, Google Maps, company websites, and niche directories. Our scrapers run continuously, finding new ICP-matched prospects and feeding them into your pipeline daily.",
  },
  {
    icon: HiFunnel,
    title: "AI Lead Qualification",
    desc: "LLM-powered qualification models analyze each lead against your ICP criteria — company size, industry, tech stack, growth signals, and intent data — scoring and routing prospects automatically without human review.",
  },
  {
    icon: HiCircleStack,
    title: "Contact Data Enrichment",
    desc: "Automated enrichment appends verified email addresses, direct phone numbers, LinkedIn profiles, company revenue, headcount, technology stack, and recent funding data to every prospect record.",
  },
  {
    icon: HiEnvelope,
    title: "Outreach Automation",
    desc: "AI-generated personalized email and LinkedIn sequences launch automatically once a lead is qualified and enriched — using their specific company context, role, and pain points for genuinely relevant messaging.",
  },
  {
    icon: HiStar,
    title: "Lead Scoring",
    desc: "Dynamic lead scoring models continuously update scores based on engagement signals — email opens, clicks, site visits, LinkedIn interactions — surfacing hot leads to your sales team at the optimal moment.",
  },
  {
    icon: HiArrowDownTray,
    title: "CRM Pipeline Injection",
    desc: "Qualified, enriched leads are automatically pushed into HubSpot or Salesforce with the correct pipeline stage, owner assignment, and all enriched data fields populated — zero manual data entry required.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Target Profile Definition",
    desc: "We translate your sales strategy into a machine-readable Ideal Customer Profile — industry codes, company size ranges, technology signals, growth indicators, geographic markets, and exclusion filters. This ICP governs all automated sourcing and qualification downstream.",
  },
  {
    step: "02",
    title: "Lead Data Collection",
    desc: "We build and deploy automated scraping pipelines targeting your highest-yield data sources: Apollo.io for broad B2B coverage, LinkedIn for role and intent data, industry-specific directories, job boards for hiring signal detection, and news APIs for company event triggers.",
  },
  {
    step: "03",
    title: "AI Qualification",
    desc: "Each collected lead is scored by an AI qualification model trained on your ICP definition and historical conversion data. Leads above your qualification threshold are moved forward; below-threshold leads are archived or placed in long-term nurture sequences.",
  },
  {
    step: "04",
    title: "Enrichment",
    desc: "Qualified leads are enriched with verified contact data from Hunter.io, Clearbit, or Apollo — appending emails, direct dials, LinkedIn URLs, company financials, and technology stack information. We validate email deliverability before any outreach is triggered.",
  },
  {
    step: "05",
    title: "Automated Outreach",
    desc: "Enriched, qualified leads automatically enter personalized outreach sequences — multi-touch email and LinkedIn campaigns with AI-generated personalization using company news, role context, and product-fit signals. Sequences adapt based on engagement behavior.",
  },
  {
    step: "06",
    title: "CRM Sync",
    desc: "Every qualified lead, outreach activity, and engagement signal syncs in real time to your CRM. Deal records are created on positive engagement, owner assignment is automated based on territory or round-robin rules, and pipeline dashboards update continuously.",
  },
];

const TECH = [
  { n: "OpenAI GPT-4", c: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { n: "Claude", c: "bg-violet-50 border-violet-200 text-violet-700" },
  { n: "Apollo.io", c: "bg-orange-50 border-orange-200 text-orange-700" },
  { n: "LinkedIn API", c: "bg-sky-50 border-sky-200 text-sky-700" },
  { n: "Hunter.io", c: "bg-amber-50 border-amber-200 text-amber-700" },
  { n: "n8n", c: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  { n: "LangChain", c: "bg-teal-50 border-teal-200 text-teal-700" },
  { n: "PostgreSQL", c: "bg-blue-50 border-blue-200 text-blue-700" },
  { n: "Pinecone", c: "bg-pink-50 border-pink-200 text-pink-700" },
];

const INDUSTRIES = [
  { name: "SaaS", use: "Automated trial user sourcing, competitor customer targeting, expansion signal detection, product-led growth outreach pipelines" },
  { name: "Insurance", use: "Agency and broker prospecting, small business policy targeting, trigger-based outreach on company milestones, renewal lead generation" },
  { name: "Real Estate", use: "Property owner lead generation from public records, investor identification, seller intent signal detection, developer prospect sourcing" },
  { name: "Finance", use: "High-net-worth prospect identification, business funding lead targeting, financial event-triggered outreach, AUM-qualified prospect sourcing" },
  { name: "E-commerce", use: "Wholesale buyer prospecting, supplier lead generation, marketplace seller targeting, D2C brand partnership outreach automation" },
  { name: "Legal", use: "Business prospect generation for legal services, corporate event-triggered outreach, compliance-need detection, in-house counsel targeting" },
];

const WHY = [
  {
    title: "Data Source Expertise",
    desc: "We know which data sources yield the highest-quality leads for each industry. We combine Apollo, LinkedIn, niche directories, and public records to build the richest possible prospect database for your ICP.",
  },
  {
    title: "Qualification Before Outreach",
    desc: "We never launch outreach to unqualified lists. Every lead passes through AI qualification before entering any sequence — protecting your domain reputation and ensuring sales time is spent on real opportunities.",
  },
  {
    title: "Deliverability-First Infrastructure",
    desc: "We build sending infrastructure with warmed domains, per-mailbox sending limits, bounce rate monitoring, and suppression list management — so your outreach lands in inboxes, not spam folders.",
  },
  {
    title: "Personalization Engine",
    desc: "Every outreach message is generated with prospect-specific context. We build the enrichment pipeline that feeds real intelligence into GPT-4 — not just first name and company name mail-merge.",
  },
  {
    title: "End-to-End Ownership",
    desc: "We own the entire process from lead sourcing to CRM injection. You get a single vendor accountable for pipeline volume, quality, and cost per qualified meeting — not a patchwork of disconnected tools.",
  },
];

const FAQS = [
  {
    q: "What is AI lead generation automation?",
    a: "AI lead generation automation is a system that autonomously sources, qualifies, enriches, and initiates contact with potential customers — without human intervention at each step. It combines data scraping (collecting prospects from sources like Apollo.io, LinkedIn, and directories), AI qualification (scoring leads against your ICP), data enrichment (appending verified emails, phone numbers, and company data), and automated outreach (AI-personalized email and LinkedIn sequences). The result is a continuous, scalable pipeline that runs 24/7 and feeds qualified leads directly into your CRM.",
  },
  {
    q: "How do you source leads — what data sources do you use?",
    a: "The primary sources are Apollo.io (450M+ B2B contacts with verified emails), LinkedIn Sales Navigator (for role, intent, and network data), Hunter.io and Clearbit for additional email verification and enrichment, Google Maps and industry-specific directories for local or niche markets, public business registries, job board APIs for hiring signal detection, and news APIs for company event triggers (funding rounds, executive hires, product launches). The optimal mix depends on your ICP — we select and configure sources based on where your target buyers actually exist.",
  },
  {
    q: "How accurate is AI lead qualification?",
    a: "On well-defined ICPs with sufficient historical data, our AI qualification models achieve 80-90% accuracy on ICP match scoring. Accuracy improves over time as the model learns from your CRM conversion data — leads that progressed to closed-won provide positive training signal, and disqualified leads provide negative signal. We set up feedback loops from your CRM to continuously retrain qualification models, so the system gets smarter every week.",
  },
  {
    q: "Can you generate leads for highly niche or specialized markets?",
    a: "Yes — niche markets often yield better results because the ICP is tighter and personalization is more precise. For specialized verticals we combine multiple data sources: industry-specific directories, professional association member lists (where publicly available), job board scraping for role-specific signals, LinkedIn industry group analysis, and custom web scraping of niche market directories. We've built lead generation systems for markets as specific as independent insurance agencies in the US Southeast and Series A SaaS companies using specific technology stacks.",
  },
  {
    q: "How does the system handle duplicate leads and existing customers?",
    a: "We implement deduplication at multiple levels: email-based deduplication against your existing CRM contacts and customers before any lead enters the pipeline, domain-based deduplication to prevent multiple contacts at the same company entering simultaneously, and suppression list management for leads who have previously unsubscribed or been marked as not interested. Leads already in your CRM can be routed to re-engagement sequences rather than new prospect outreach.",
  },
  {
    q: "What volume of leads can the system process per day?",
    a: "The system scales horizontally — we've built pipelines processing 5,000+ leads per day through qualification and enrichment. Outreach volume is intentionally rate-limited based on your sending infrastructure: we typically cap initial deployments at 200-500 outreach contacts per day per domain to protect deliverability, scaling up once bounce rates and engagement metrics confirm healthy performance. The qualification and enrichment pipeline can process far higher volumes than the outreach layer — acting as a buffer that prioritizes the best leads for outreach first.",
  },
  {
    q: "How long does it take to build a lead generation automation system?",
    a: "A full lead generation system — data sourcing, AI qualification, enrichment, outreach sequences, and CRM integration — typically takes 3-5 weeks to build and deploy. The first qualified leads enter your pipeline in week 2 as we configure sources and run initial qualification passes. Full deployment with CRM integration, outreach sequences live, and performance dashboards operational is typically complete by end of week 4-5.",
  },
  {
    q: "Will the outreach be compliant with GDPR and CAN-SPAM?",
    a: "Compliance is built into every deployment. For GDPR (EU), we source only business contact data with legitimate interest basis, implement right-to-erasure workflows, include mandatory unsubscribe mechanisms, and maintain records of consent and data processing. For CAN-SPAM (US), every email includes physical sender address, unsubscribe link, accurate subject lines, and sender identification. For specific industries with additional regulations (healthcare, finance, insurance), we add further compliance layers including content restrictions and disclosure requirements.",
  },
  {
    q: "Can the system integrate with my existing CRM and outreach tools?",
    a: "Yes — CRM and tool integration is central to every deployment. We integrate natively with HubSpot, Salesforce, Pipedrive, and Close.io for lead injection and pipeline management. For outreach, we can integrate with your existing Outreach.io, Salesloft, Instantly, or Smartlead accounts, or build a custom sending infrastructure. The lead generation pipeline feeds your existing stack rather than replacing it, so your sales team works in familiar tools.",
  },
  {
    q: "How do you measure the ROI of lead generation automation?",
    a: "We track five core metrics from day one: cost per qualified lead (CPL), qualification rate (what percentage of sourced leads pass ICP scoring), outreach response rate, meeting book rate, and cost per booked meeting. We connect these metrics to your CRM pipeline to track downstream conversion — qualified meetings to opportunities, opportunities to closed-won deals. Most clients see positive ROI on pipeline generated vs. automation cost within 60-90 days of full deployment.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Lead Generation Automation",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  description:
    "Build an AI-powered lead generation engine that scrapes leads, qualifies them, enriches data, and launches automated outreach — all on autopilot.",
  areaServed: "Worldwide",
  serviceType: "AI Automation",
  url: "https://infonza.com/ai-solutions/lead-generation-automation",
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════════════════════════════════ */

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-slate-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-sm sm:text-base">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <HiChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function LeadGenerationAutomationPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">AI Lead Generation Automation</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700/40 rounded-full px-4 py-1.5 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiMagnifyingGlass className="w-3.5 h-3.5" />
                AI Lead Generation
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Build Your Pipeline on{" "}
                <span className="text-gradient">Autopilot With AI</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                We build AI-powered lead generation engines that source, qualify, enrich, and
                launch personalized outreach to thousands of ICP-matched prospects — running
                continuously without human intervention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Schedule Free Consultation <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            {/* Right — lead gen pipeline visualization */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Lead Gen Pipeline — Active</span>
                  <span className="ml-auto text-xs text-slate-500">Apollo + GPT-4</span>
                </div>
                <div className="p-5 space-y-3 min-h-[280px] font-mono text-xs">
                  {[
                    { status: "done", label: "Scraping complete", detail: "1,247 prospects sourced from Apollo — SaaS CTOs in North America" },
                    { status: "done", label: "ICP qualification", detail: "312 leads passed (25%) — 50-500 employees, Series A+, using Salesforce" },
                    { status: "done", label: "Data enrichment", detail: "Verified emails, LinkedIn URLs, company funding appended to all 312" },
                    { status: "done", label: "Personalization", detail: "GPT-4 generated opening lines using company news + LinkedIn activity" },
                    { status: "active", label: "Outreach launching", detail: "97 emails sent today (rate limit) — 8 opens, 2 replies so far…" },
                    { status: "pending", label: "CRM injection", detail: "Qualified leads queued for HubSpot pipeline push" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                        step.status === "done" ? "bg-teal-400" :
                        step.status === "active" ? "bg-blue-400 animate-pulse" :
                        "bg-slate-600"
                      }`} />
                      <div>
                        <span className={`font-semibold ${
                          step.status === "done" ? "text-teal-400" :
                          step.status === "active" ? "text-blue-400" :
                          "text-slate-500"
                        }`}>[{step.label}]</span>
                        <span className="text-slate-400 ml-2">{step.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Today: 312 qualified leads added</span>
                  <span className="text-xs text-blue-400">2 meetings booked</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {METRICS.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">{r.metric}</div>
                <div className="font-semibold text-slate-900 text-sm">{r.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{r.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="bg-dots bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What We Build in Your{" "}
              <span className="text-gradient">Lead Generation Engine</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six core capabilities that power a fully automated lead generation system from source to CRM.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="relative bg-slate-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              How We Build Your <span className="text-gradient">Lead Generation System</span>
            </h2>
            <p className="text-slate-400">From target profile to qualified pipeline in 3-5 weeks.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-blue-700/60 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center text-white font-bold text-xs font-mono">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {TECH.map(({ n, c }) => (
              <span key={n} className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold ${c}`}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              AI Lead Generation Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We build industry-specific lead generation systems with the right data sources, qualification criteria, and compliance requirements for your market.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <HiCheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-0.5">{ind.name}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{ind.use}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INFONZA ── */}
      <section className="bg-slate-50 py-16 lg:py-20 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Why Teams Choose <span className="text-gradient">Infonza</span> for Lead Generation
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <HiCheckCircle className="w-6 h-6 text-blue-500 mb-3" />
                <h3 className="font-bold text-slate-900 text-sm mb-2">{w.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Want to see how many qualified leads your market holds?"
            subheading="Get a free lead generation audit. We'll analyze your ICP, identify the best data sources for your market, and estimate the pipeline volume an AI system can generate for you."
            cta="Schedule Free Lead Gen Audit"
          />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "AI Sales Automation",
                desc: "Automate your full sales pipeline — prospecting, personalized outreach, qualification, CRM updates, and follow-up sequences that run 24/7.",
                href: "/ai-solutions/sales-automation",
                icon: HiRocketLaunch,
              },
              {
                title: "AI CRM Automation",
                desc: "Automate CRM data entry, deal progression, activity logging, and pipeline reporting with AI that integrates natively with HubSpot and Salesforce.",
                href: "/ai-solutions/crm-automation",
                icon: HiCircleStack,
              },
              {
                title: "AI Email Automation",
                desc: "AI-driven email sequences that personalize at scale, adapt to engagement signals, and optimize send timing for maximum reply rates.",
                href: "/ai-solutions/email-automation",
                icon: HiEnvelope,
              },
            ].map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                    <s.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-blue-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 flex-1 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-blue-600 text-xs font-semibold">
                    Learn more <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Honest answers to the questions growth teams ask before automating lead generation.
            </p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <FAQItem key={i} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Free Lead Gen Consultation"
        heading="Start Building Your Lead Pipeline With AI"
        subheading="Schedule a 30-minute session with our lead generation engineers. We'll analyze your ICP, map your best data sources, and give you a realistic estimate of pipeline volume and cost before you commit."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to a Lead Gen Expert"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
