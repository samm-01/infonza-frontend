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
  HiCpuChip,
  HiChartBar,
  HiCircleStack,
  HiEnvelope,
  HiEnvelopeOpen,
  HiInboxArrowDown,
  HiArrowPathRoundedSquare,
  HiCog6Tooth,
  HiUserGroup,
  HiChatBubbleLeftRight,
  HiTag,
  HiFaceSmile,
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

const METRICS = [
  { metric: "85%", label: "Emails Handled Automatically", sub: "without human intervention" },
  { metric: "3×", label: "Faster Response Times", sub: "AI drafts replies in seconds" },
  { metric: "Zero", label: "Missed Follow-ups", sub: "automated sequences fire on schedule" },
  { metric: "Both", label: "Works With Gmail & Outlook", sub: "and any IMAP/SMTP provider" },
];

const CAPABILITIES = [
  {
    icon: HiTag,
    title: "Email Classification & Routing",
    desc: "AI reads every incoming email and classifies it by intent, urgency, and topic — automatically routing support tickets, sales inquiries, invoices, and complaints to the right team or queue without manual sorting.",
  },
  {
    icon: HiEnvelopeOpen,
    title: "AI Smart Replies",
    desc: "Context-aware reply drafts generated from the email thread, your company tone guidelines, and relevant knowledge base content — ready to send or lightly edit, eliminating the time spent writing routine responses.",
  },
  {
    icon: HiArrowPathRoundedSquare,
    title: "Automated Follow-up Sequences",
    desc: "Time-based and behavior-triggered follow-up sequences that fire when contacts don't reply, when a deal goes cold, or when a specific keyword appears — all personalized with AI-generated content, not static templates.",
  },
  {
    icon: HiInboxArrowDown,
    title: "Inbox Automation",
    desc: "End-to-end inbox automation rules powered by AI classification — auto-archive low-priority threads, auto-label by sender domain, auto-assign to agents, and surface high-priority items requiring human attention.",
  },
  {
    icon: HiFaceSmile,
    title: "Email Sentiment Analysis",
    desc: "Every inbound email is scored for sentiment and urgency. Angry customers, escalating complaints, and high-value deals in risk are flagged immediately so your team focuses on the emails that matter most.",
  },
  {
    icon: HiRocketLaunch,
    title: "Lead Nurturing Flows",
    desc: "AI-personalized nurture sequences that adapt based on how prospects engage with previous emails — different follow-up copy for openers vs non-openers, clickers vs readers, accelerating pipeline without manual intervention.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Email Audit",
    desc: "We analyze your current email volume, response patterns, common email types, and existing manual workflows. We identify the highest-volume, most repetitive email categories to automate first — typically support, sales follow-up, and routing.",
  },
  {
    step: "02",
    title: "Classification Model",
    desc: "We build and fine-tune an email classification system using GPT-4 with few-shot examples from your actual email history. Categories, routing rules, and priority tiers are defined in collaboration with your team and validated on held-out samples.",
  },
  {
    step: "03",
    title: "Reply Generation",
    desc: "We engineer AI reply generation prompts anchored to your brand voice, product knowledge, and escalation policies. The system generates draft replies for review or fully automated responses for pre-approved categories like FAQ responses.",
  },
  {
    step: "04",
    title: "Sequence Builder",
    desc: "We build your automated follow-up sequences with conditional branching — different paths for different response scenarios, time delays, and engagement signals. Sequences are built in n8n or directly via Gmail/Outlook API depending on your existing stack.",
  },
  {
    step: "05",
    title: "Integration & Testing",
    desc: "Full integration with your Gmail or Outlook inbox, CRM, and help desk. We run a 2-week parallel test period where automation runs alongside manual handling to validate classification accuracy and reply quality before going fully live.",
  },
];

const TECH = [
  { n: "OpenAI GPT-4", c: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { n: "Claude (Anthropic)", c: "bg-violet-50 border-violet-200 text-violet-700" },
  { n: "Gmail API", c: "bg-red-50 border-red-200 text-red-700" },
  { n: "Microsoft Graph API", c: "bg-blue-50 border-blue-200 text-blue-700" },
  { n: "n8n", c: "bg-orange-50 border-orange-200 text-orange-700" },
  { n: "LangChain", c: "bg-amber-50 border-amber-200 text-amber-700" },
  { n: "FastAPI", c: "bg-sky-50 border-sky-200 text-sky-700" },
];

const INDUSTRIES = [
  { name: "SaaS", use: "Trial conversion follow-ups, churn detection emails, support ticket auto-replies" },
  { name: "Insurance", use: "Claims acknowledgement automation, policy renewal sequences, agent routing" },
  { name: "Real Estate", use: "Lead response automation, showing follow-ups, listing inquiry classification" },
  { name: "E-commerce", use: "Order inquiry automation, return request routing, post-purchase nurture" },
  { name: "Legal", use: "Client intake classification, deadline reminder sequences, document request follow-ups" },
  { name: "Finance", use: "KYC document request automation, advisor follow-up sequences, compliance email routing" },
];

const WHY = [
  {
    title: "Inbox-Native Integration",
    desc: "We connect directly to your Gmail or Outlook via official APIs — no forwarding rules or email gateway changes. AI acts on your actual inbox, reads thread context, and understands reply chains.",
  },
  {
    title: "Brand Voice Preservation",
    desc: "Every AI-generated reply is engineered to match your brand's tone, formality level, and vocabulary. We fine-tune on your actual past email samples so replies sound like your best team member wrote them.",
  },
  {
    title: "Human-in-the-Loop Controls",
    desc: "We build configurable confidence thresholds — high-confidence, low-risk emails send automatically; ambiguous or high-stakes emails queue for human review. Your team stays in control of every critical communication.",
  },
  {
    title: "CRM Sync Built In",
    desc: "Every email processed is logged to your CRM with classification tags, sentiment scores, and thread summaries. Sales teams see a full engagement history without manually updating records.",
  },
  {
    title: "Compliance-Aware Automation",
    desc: "We build compliance guardrails for regulated industries — financial advice disclaimers, HIPAA-compliant handling, GDPR opt-out detection — so automation never creates regulatory exposure.",
  },
];

const FAQS = [
  {
    q: "Which email platforms does AI email automation work with?",
    a: "We integrate with Gmail and Google Workspace via the Gmail API, and with Microsoft Outlook and Office 365 via the Microsoft Graph API. For custom or legacy email systems we use IMAP/SMTP protocols. The automation layer sits on top of your existing email provider — there's no email migration or change of service required.",
  },
  {
    q: "How does the AI classify emails accurately for my specific business?",
    a: "We fine-tune the classification system using examples from your actual email history. You provide 50–200 labeled examples per category (or we help you label them), and the system learns your specific email taxonomy. Classification categories are entirely custom to your business — we don't impose generic categories. Accuracy is validated against a held-out test set before going live.",
  },
  {
    q: "Can AI reply to emails fully automatically, or does a human always need to approve?",
    a: "Both modes are supported and typically combined. Low-risk, high-confidence email types (e.g., FAQ responses, out-of-office acknowledgements, basic appointment confirmations) can be sent fully automatically. Higher-stakes or ambiguous emails are queued as AI-generated drafts for a human to review and send with one click. Thresholds are configurable per email category and adjusted based on your comfort level.",
  },
  {
    q: "Will AI-generated replies sound robotic or obviously automated?",
    a: "Not if built correctly. We engineer reply prompts that are grounded in your existing email samples, brand voice guidelines, and product knowledge. The AI generates replies that match your tone, use your vocabulary, and reflect your specific policies — not generic LLM output. We also include instructions to vary phrasing across similar emails so bulk automation doesn't produce identical boilerplate.",
  },
  {
    q: "How are follow-up sequences different from traditional drip email tools?",
    a: "Traditional drip tools send static templates on a fixed schedule regardless of what the contact does. Our AI-powered sequences adapt — different follow-up copy based on whether the previous email was opened, clicked, or ignored; different messaging for contacts who replied with questions vs contacts who went silent; and AI-generated personalization using data from your CRM rather than just a first name merge tag.",
  },
  {
    q: "What happens to sensitive emails — customer complaints, legal correspondence, confidential deals?",
    a: "We implement keyword and semantic pattern detection for sensitive categories. Emails matching defined sensitive patterns are immediately flagged, quarantined from automation, and routed directly to the appropriate human. Legal threats, escalating complaints, and high-value enterprise deals are examples of categories we configure to bypass automation entirely and surface for immediate human review.",
  },
  {
    q: "Can the automation integrate with our CRM and help desk?",
    a: "Yes. We build integrations to log classified emails, generated replies, and engagement events to your CRM (Salesforce, HubSpot, Pipedrive) and help desk (Zendesk, Freshdesk, Intercom). New leads identified in the inbox are automatically created as CRM contacts. Support tickets are created in your help desk from inbound emails with classification tags and priority scores attached.",
  },
  {
    q: "How do we measure whether the email automation is actually working?",
    a: "We deploy an analytics dashboard showing: volume of emails processed vs. automated vs. escalated, classification accuracy per category, average response time before and after automation, follow-up sequence engagement rates, and CRM update lag time. You can see exactly which email categories the AI handles well and which still need tuning.",
  },
  {
    q: "What is the implementation timeline for AI email automation?",
    a: "A standard implementation covering classification, smart replies for 3–5 email categories, and basic follow-up sequences takes 3–4 weeks. A full deployment including multi-channel sequences, CRM sync, help desk integration, and custom analytics typically takes 5–7 weeks. The 2-week parallel testing period is included in these timelines.",
  },
  {
    q: "Is our email data used to train AI models?",
    a: "No. We use OpenAI and Anthropic APIs with data processing agreements in place that prohibit using API inputs for model training. Your email content is processed in transit for inference only — it is not stored by the model provider or used to train future models. All email data processed through our pipelines can be configured to stay within your chosen geographic region.",
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
  name: "AI Email Automation",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  description:
    "Automate your inbox with AI — classify emails, generate smart replies, trigger follow-up sequences, and eliminate manual email management at scale.",
  areaServed: "Worldwide",
  serviceType: "AI Automation",
  url: "https://infonza.com/ai-solutions/email-automation",
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

export default function EmailAutomationPage() {
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
            <span className="text-slate-300 font-medium">AI Email Automation</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700/40 rounded-full px-4 py-1.5 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiEnvelope className="w-3.5 h-3.5" />
                AI Email Automation
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Automate Every Email Workflow{" "}
                <span className="text-gradient">With AI</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                We build AI email automation systems that classify every inbound email, generate
                smart replies in your brand voice, and trigger personalized follow-up sequences —
                handling 85% of your inbox without human intervention.
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

            {/* Right — email automation visualization */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Email Automation — Processing</span>
                  <span className="ml-auto text-xs text-slate-500">GPT-4 + Gmail API</span>
                </div>
                <div className="p-5 space-y-3 min-h-[280px] font-mono text-xs">
                  {[
                    { status: "done", label: "Inbound: support@company.com", detail: "Subject: 'Urgent: Invoice #4821 — payment issue'" },
                    { status: "done", label: "Classified", detail: "Category: billing_issue | Priority: high | Sentiment: frustrated" },
                    { status: "done", label: "Routed", detail: "→ Billing team queue | CRM contact updated | Ticket #8821 created" },
                    { status: "done", label: "Reply drafted", detail: "Acknowledgement + 4h SLA promise (brand voice: professional, empathetic)" },
                    { status: "active", label: "Sending reply", detail: "Auto-send approved (billing_ack category — confidence: 0.96)…" },
                    { status: "pending", label: "Follow-up scheduled", detail: "T+4h: check ticket resolved, if not → escalate to manager" },
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
                  <span className="text-xs text-slate-500">Today: 1,247 emails processed</span>
                  <span className="text-xs text-blue-400">84% automated — 16% escalated</span>
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
              What We Build for{" "}
              <span className="text-gradient">AI Email</span> Automation
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six core capabilities that eliminate manual email handling and accelerate your team's response capacity.
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
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-3">
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
              How We Automate Your <span className="text-gradient">Email Workflows</span>
            </h2>
            <p className="text-slate-400">From audit to full inbox automation in 4 weeks.</p>
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
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs font-mono">
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
              AI Email Automation Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We build email automation systems calibrated to your industry's specific communication patterns and compliance requirements.
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
              Why Teams Choose <span className="text-gradient">Infonza</span> for Email Automation
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
            heading="Ready to automate your inbox with AI?"
            subheading="Get a free email audit from our automation engineers. We'll identify your highest-volume email categories and scope an automation system in 30 minutes."
            cta="Schedule Free Email Audit"
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
                desc: "End-to-end sales workflow automation — prospecting, outreach sequencing, follow-ups, and CRM updates powered by AI.",
                href: "/ai-solutions/sales-automation",
                icon: HiRocketLaunch,
              },
              {
                title: "AI Customer Support Automation",
                desc: "Automate first-line customer support with AI — ticket classification, instant replies, and smart escalation to human agents.",
                href: "/ai-solutions/customer-support-automation",
                icon: HiChatBubbleLeftRight,
              },
              {
                title: "AI CRM Automation",
                desc: "Keep your CRM automatically updated — AI logs every interaction, updates deal stages, and surfaces at-risk accounts without manual data entry.",
                href: "/ai-solutions/crm-automation",
                icon: HiCircleStack,
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
                    <s.icon className="w-4.5 h-4.5 text-blue-600" />
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
              Honest answers about AI email automation, smart replies, and inbox management.
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
        badge="Free Email Automation Consultation"
        heading="Automate Your Email Workflows With AI"
        subheading="Schedule a 30-minute session with our email automation engineers. We'll audit your inbox, identify your top automation opportunities, and scope a system that handles your most repetitive email work."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to an Automation Engineer"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
