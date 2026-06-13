"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiSparkles,
  HiChevronDown,
  HiCircleStack,
  HiCog6Tooth,
  HiChartBar,
  HiEnvelope,
  HiUserGroup,
  HiBolt,
  HiRectangleStack,
  HiMagnifyingGlass,
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
  { metric: "95%", label: "CRM Data Accuracy", sub: "AI-verified on every record update" },
  { metric: "80%", label: "Less Manual Data Entry", sub: "time saved for sales teams" },
  { metric: "Real-Time", label: "Record Updates", sub: "triggered by emails, calls & meetings" },
  { metric: "Any CRM", label: "We Integrate With", sub: "HubSpot, Salesforce, Zoho, Pipedrive" },
];

const CAPABILITIES = [
  {
    icon: HiCircleStack,
    title: "Auto-Record Creation & Updates",
    desc: "AI listens to emails, calls, and meeting notes to automatically create contacts, companies, and deals — and update existing records with new information without any manual input.",
  },
  {
    icon: HiChartBar,
    title: "AI Deal Stage Progression",
    desc: "Automatically advance deals through your pipeline based on activity signals — email opens, meeting bookings, proposal views — so your CRM always reflects the true state of every opportunity.",
  },
  {
    icon: HiMagnifyingGlass,
    title: "Contact Enrichment",
    desc: "Enrich CRM contacts with firmographic data, job titles, LinkedIn profiles, phone numbers, and intent signals pulled from Apollo, Clearbit, and web sources — automatically on every new contact.",
  },
  {
    icon: HiEnvelope,
    title: "Follow-up Trigger Automation",
    desc: "Set AI-triggered follow-up tasks, email sequences, and Slack alerts when deals go stale, high-value leads go cold, or renewal dates approach — zero manual monitoring required.",
  },
  {
    icon: HiRectangleStack,
    title: "CRM Reporting & Insights",
    desc: "AI-generated pipeline health reports, conversion rate analysis, and sales velocity metrics delivered to your inbox weekly — giving leadership visibility without manual report building.",
  },
  {
    icon: HiCog6Tooth,
    title: "Cross-CRM Data Sync",
    desc: "Sync data bidirectionally between HubSpot, Salesforce, your billing system, and marketing tools — keeping all platforms in agreement without manual exports or import jobs.",
  },
];

const PROCESS = [
  { step: "01", title: "CRM Audit", desc: "We review your current CRM setup, data quality issues, and manual workflow bottlenecks to identify the highest-ROI automation opportunities." },
  { step: "02", title: "Integration Mapping", desc: "We map all data sources — email, calendar, call recordings, web forms, and billing — to the correct CRM objects and fields for automated ingestion." },
  { step: "03", title: "Automation Build", desc: "We build and configure AI-powered automation workflows, enrichment pipelines, and trigger logic using n8n, Make, and native CRM APIs." },
  { step: "04", title: "Testing & Data Validation", desc: "Rigorous testing with real data to validate accuracy of record updates, enrichment quality, and trigger reliability before going live." },
  { step: "05", title: "Deployment & Monitoring", desc: "We deploy automations with monitoring dashboards so you can track data quality, automation run rates, and any errors in real time post-launch." },
];

const TECH_STACK = [
  { name: "HubSpot API", color: "bg-orange-50 border-orange-200 text-orange-700" },
  { name: "Salesforce API", color: "bg-blue-50 border-blue-200 text-blue-700" },
  { name: "Zoho CRM API", color: "bg-red-50 border-red-200 text-red-700" },
  { name: "Pipedrive API", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { name: "OpenAI GPT-4", color: "bg-teal-50 border-teal-200 text-teal-700" },
  { name: "n8n", color: "bg-rose-50 border-rose-200 text-rose-700" },
  { name: "Make (Integromat)", color: "bg-violet-50 border-violet-200 text-violet-700" },
  { name: "Apollo.io", color: "bg-amber-50 border-amber-200 text-amber-700" },
  { name: "Clearbit", color: "bg-sky-50 border-sky-200 text-sky-700" },
  { name: "FastAPI", color: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  { name: "PostgreSQL", color: "bg-slate-100 border-slate-200 text-slate-700" },
];

const INDUSTRIES = ["SaaS", "Insurance", "Real Estate", "Finance", "E-commerce", "Healthcare", "Legal", "Logistics"];

const WHY_INFONZA = [
  { title: "CRM-Agnostic Expertise", desc: "We've automated HubSpot, Salesforce, Zoho, Pipedrive, and custom CRMs — we know the quirks, rate limits, and best patterns for each platform." },
  { title: "Data Quality Focus", desc: "We don't just push data — we validate, deduplicate, and normalize every field. You get clean, trustworthy CRM data from day one." },
  { title: "End-to-End Integration", desc: "We connect your CRM to email, calendar, calls, billing, and marketing — creating a single source of truth across your entire revenue stack." },
  { title: "No-Code + Custom Code", desc: "We use the right tool for each job: n8n/Make for standard workflows, custom FastAPI services for complex logic that no-code tools can't handle." },
  { title: "Ongoing Maintenance", desc: "CRM APIs change. We monitor your automations and update integrations proactively so you never wake up to broken workflows." },
  { title: "Measurable ROI", desc: "We instrument every automation so you can see exactly how many hours are saved, how much data quality improved, and what revenue impact resulted." },
];

const FAQS = [
  { q: "Which CRMs do you automate?", a: "We automate HubSpot, Salesforce, Zoho CRM, Pipedrive, and custom-built CRMs. We also integrate these with billing platforms (Stripe, Chargebee), marketing tools (Mailchimp, Klaviyo), and communication tools (Slack, Gmail, Outlook)." },
  { q: "Can AI really keep CRM data accurate without manual entry?", a: "Yes. We set up AI pipelines that parse emails, call transcripts, and meeting notes to extract key information and map it to CRM fields automatically. Combined with contact enrichment from Apollo and Clearbit, your CRM stays current without anyone manually updating records." },
  { q: "How do you handle duplicate records in the CRM?", a: "We build deduplication logic as part of the automation setup — using email address, phone number, and company domain as matching keys. When a duplicate is detected, we merge records intelligently and alert the relevant rep if the merge is ambiguous." },
  { q: "Will this work with our existing CRM data and customizations?", a: "Yes. We always start with a CRM audit to understand your custom fields, pipeline stages, and existing automations. We build around your current setup rather than requiring a clean slate." },
  { q: "Can you automate deal stage changes in our pipeline?", a: "Absolutely. We set up activity-based triggers — email responses, meeting scheduled, proposal sent, contract viewed — that automatically advance deals to the correct stage, so your pipeline always reflects reality without reps manually dragging cards." },
  { q: "How long does CRM automation implementation take?", a: "A focused CRM automation (e.g., auto-enrichment + follow-up triggers) takes 2–3 weeks. A full CRM + multi-platform integration project typically takes 4–8 weeks depending on the number of systems involved." },
  { q: "Can you connect our CRM to our email and calendar?", a: "Yes. We sync Gmail, Outlook, and Google Calendar or Outlook Calendar bi-directionally with your CRM — logging all emails and meetings against the correct contact and deal automatically, without any manual BCC or manual logging." },
  { q: "What happens when a CRM API changes or breaks?", a: "We set up monitoring and alerting on all automations. If a webhook fails or an API change causes an issue, we receive alerts immediately and fix it proactively — usually before you even notice. We include ongoing maintenance in our support packages." },
  { q: "Can AI generate CRM reports automatically?", a: "Yes. We build AI-generated weekly pipeline summaries, deal health reports, and conversion analytics that are delivered directly to Slack or email — giving leadership CRM insights without anyone building reports manually." },
  { q: "Do you offer CRM cleanup before setting up automation?", a: "Yes. We offer a CRM data cleanup service as part of the onboarding process — deduplicating contacts, standardizing field formats, filling missing data via enrichment, and archiving dead records — so your automation starts from a clean foundation." },
];

const RELATED = [
  { icon: HiChartBar, title: "AI Sales Automation", desc: "Automate prospecting, outreach, and lead qualification end-to-end.", href: "/ai-solutions/sales-automation" },
  { icon: HiMagnifyingGlass, title: "AI Lead Generation", desc: "Scrape, qualify, enrich, and sequence leads automatically.", href: "/ai-solutions/lead-generation-automation" },
  { icon: HiEnvelope, title: "AI Email Automation", desc: "Smart replies, follow-up sequences, and inbox automation at scale.", href: "/ai-solutions/email-automation" },
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
  name: "AI CRM Automation",
  description: "Automate CRM workflows with AI — eliminate manual data entry, auto-update records, and keep your pipeline clean and current across HubSpot, Salesforce, Zoho, and Pipedrive.",
  provider: { "@type": "Organization", name: "Infonza Innovations", url: "https://infonza.com" },
  serviceType: "AI CRM Automation",
  areaServed: ["US", "UK", "AU", "CA", "IN"],
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
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-slate-200 rounded-xl overflow-hidden"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors">
        <span className="text-sm font-semibold text-slate-900">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
          <HiChevronDown className="w-4 h-4 text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function CRMAutomationPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />

      {/* HERO */}
      <section className="relative bg-slate-900 overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-gradient-to-bl from-orange-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">AI CRM Automation</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-orange-900/60 border border-orange-700/40 rounded-full px-4 py-1.5 text-orange-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiSparkles className="w-3.5 h-3.5" />
                AI CRM Automation
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Keep Your CRM Clean and <span className="text-gradient">Current With AI</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Eliminate manual data entry and keep HubSpot, Salesforce, Zoho, and Pipedrive automatically updated with AI that listens to every email, call, and meeting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-teal-900/30">
                  Schedule Free Consultation <HiArrowRight className="w-4 h-4" />
                </a>
                <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/20 transition-colors">
                  View Case Studies
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="hidden lg:block">
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 shadow-2xl">
                <div className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  CRM Automation — Live
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Contact created from email", crm: "HubSpot", status: "✓ Done" },
                    { label: "Deal stage advanced", crm: "Salesforce", status: "✓ Done" },
                    { label: "Contact enriched (Apollo)", crm: "Zoho CRM", status: "✓ Done" },
                    { label: "Follow-up task triggered", crm: "Pipedrive", status: "✓ Done" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-slate-900/60 rounded-xl px-4 py-3">
                      <div>
                        <div className="text-white text-xs font-medium">{item.label}</div>
                        <div className="text-slate-500 text-xs">{item.crm}</div>
                      </div>
                      <span className="text-emerald-400 text-xs font-semibold">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {METRICS.map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <div className="text-3xl sm:text-4xl font-bold text-gradient">{m.metric}</div>
                <div className="text-sm font-semibold text-slate-900 mt-1">{m.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{m.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-dots bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What We <span className="text-gradient">Automate</span> in Your CRM
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Six automation pillars that eliminate manual CRM work and improve data quality.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl transition-all group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM PLATFORMS */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">CRM Platforms We Automate</h2>
            <p className="text-slate-400">Native API integrations with all major CRM platforms and custom-built systems.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {["HubSpot", "Salesforce", "Zoho CRM", "Pipedrive", "Custom CRMs", "Monday CRM", "Freshsales", "Close.io"].map((crm, i) => (
              <motion.span key={crm} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.06 }} className="px-5 py-2.5 rounded-full bg-slate-800 border border-slate-600 text-sm font-semibold text-slate-200">
                {crm}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our <span className="text-gradient">Process</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">How we go from your messy CRM to a fully automated, always-accurate system.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm font-mono">{step.step}</div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-dots bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Technology Stack</h2>
            <p className="text-slate-500">Tools we use to automate and integrate your CRM stack.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <motion.span key={tech.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className={`px-4 py-2 rounded-full border text-sm font-semibold ${tech.color}`}>
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Industries We Serve</h2>
          <p className="text-slate-500 mb-8">CRM automation for every industry where sales and pipeline management matters.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((ind, i) => (
              <motion.span key={ind} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors">
                {ind}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY INFONZA */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why <span className="text-gradient">Infonza</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">We've automated CRM workflows for 50+ companies across every major platform.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_INFONZA.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex gap-4 p-5 rounded-xl bg-white border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <HiCheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING BANNER */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner heading="Ready to automate your CRM?" subheading="Book a free 30-minute call with our team. We'll review your current CRM setup and show you exactly what can be automated." cta="Schedule Discovery Call" />
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related AI Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {RELATED.map((s, i) => (
              <motion.div key={s.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <Link href={s.href} className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
                    <s.icon className="w-4 h-4 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-teal-700 transition-colors">{s.title}</h3>
                  <p className="text-xs text-slate-500 flex-1 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-teal-600 text-xs font-semibold">
                    Learn more <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-24 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Common questions about AI CRM automation.</p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection badge="Free CRM Automation Consultation" heading="Automate Your CRM Workflows With AI" subheading="Schedule a 30-minute session with our engineers. We'll audit your CRM, identify automation opportunities, and provide a realistic implementation plan." primaryCTA="Schedule Free Consultation" secondaryCTA="Talk to Our Team" />
      <FloatingBookingButton label="Automate My CRM" />
      <Footer />
    </>
  );
}
