"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiSparkles,
  HiXCircle,
  HiChevronDown,
  HiShieldCheck,
  HiBolt,
  HiGlobeAlt,
  HiCpuChip,
  HiChartBar,
  HiCog6Tooth,
  HiPhone,
  HiPhoneArrowUpRight,
  HiPhoneArrowDownLeft,
  HiSpeakerWave,
  HiMicrophone,
  HiClipboardDocumentList,
  HiChatBubbleLeftRight,
  HiRocketLaunch,
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

const METRICS = [
  { metric: "24/7", label: "Call Handling", sub: "zero downtime, no shifts" },
  { metric: "80%", label: "Call Deflection Rate", sub: "without human agents" },
  { metric: "<500ms", label: "Response Latency", sub: "natural conversation flow" },
  { metric: "Both", label: "Inbound & Outbound", sub: "full telephony coverage" },
];

const CAPABILITIES = [
  {
    icon: HiPhoneArrowDownLeft,
    title: "AI Call Handling",
    desc: "Answer every inbound call instantly — no hold times, no IVR trees. The agent understands natural speech, handles complex questions, and resolves issues end-to-end.",
  },
  {
    icon: HiSpeakerWave,
    title: "Voice Support Agents",
    desc: "AI-powered customer support over the phone — trained on your product documentation, FAQs, and support playbooks to resolve the most common call types autonomously.",
  },
  {
    icon: HiClipboardDocumentList,
    title: "Voice Booking Systems",
    desc: "Automated appointment and reservation booking via phone — checks calendar availability in real time, captures caller details, confirms bookings, and sends follow-up confirmations.",
  },
  {
    icon: HiGlobeAlt,
    title: "Inbound Call Automation",
    desc: "Replace multi-level IVR menus with a single conversational AI that routes, resolves, and escalates based on caller intent — dramatically reducing average handle time.",
  },
  {
    icon: HiPhoneArrowUpRight,
    title: "Outbound Dialing Agents",
    desc: "Proactive outbound AI that calls your leads and customers — appointment reminders, payment follow-ups, survey collection, and re-engagement campaigns at scale.",
  },
  {
    icon: HiCog6Tooth,
    title: "Voice-to-CRM Updates",
    desc: "Every call automatically updates your CRM — contact record, call summary, outcomes, and next actions written back to Salesforce, HubSpot, or your custom system in real time.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Call Flow Design",
    desc: "We map your top call types by volume, script optimal conversation flows for each intent, define escalation triggers, and design the agent's persona and speaking style before any build begins.",
  },
  {
    step: "02",
    title: "Voice Model Selection",
    desc: "We select the right voice synthesis model from ElevenLabs' library — matching tone, accent, and cadence to your brand. Custom voice cloning is available for exact brand consistency.",
  },
  {
    step: "03",
    title: "Telephony Integration",
    desc: "We wire the voice agent into your phone infrastructure via Twilio's programmable voice API or SIP trunking for existing PBX systems. Number provisioning, call routing, and recording setup handled by our team.",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    desc: "Agents are tested on 200+ real call scenarios — edge cases, angry callers, accent variations, and background noise. We measure transcription accuracy, resolution rate, and escalation precision.",
  },
  {
    step: "05",
    title: "Live Deployment & Monitoring",
    desc: "Staged rollout starting at 10% of call volume. Real-time dashboards track call outcomes, escalation rates, and average handle time. Continuous improvement cycles in the first 60 days post-launch.",
  },
];

const TECH = [
  { n: "ElevenLabs", c: "bg-violet-50 border-violet-200 text-violet-700" },
  { n: "OpenAI Realtime API", c: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { n: "Twilio", c: "bg-red-50 border-red-200 text-red-700" },
  { n: "Whisper (STT)", c: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { n: "LangChain", c: "bg-amber-50 border-amber-200 text-amber-700" },
  { n: "FastAPI", c: "bg-sky-50 border-sky-200 text-sky-700" },
  { n: "PostgreSQL", c: "bg-blue-50 border-blue-200 text-blue-700" },
  { n: "Redis", c: "bg-rose-50 border-rose-200 text-rose-700" },
];

const INDUSTRIES = [
  { name: "Insurance", use: "FNOL intake over the phone, policy renewal outbound calls, claims status updates" },
  { name: "Healthcare", use: "Appointment booking, prescription refill reminders, post-discharge follow-up calls" },
  { name: "Real Estate", use: "Inbound property inquiry handling, viewing appointment scheduling, lead qualification" },
  { name: "Legal", use: "Initial client intake over the phone, appointment scheduling, document request automation" },
  { name: "Logistics", use: "Delivery status calls, exception handling, driver check-in automation" },
  { name: "SaaS", use: "Trial-to-paid outbound sequences, renewal reminders, churn recovery calls" },
];

const WHY = [
  {
    title: "Low-Latency Architecture",
    desc: "We build around the OpenAI Realtime API and WebSocket-based audio pipelines to achieve sub-500ms response times — critical for natural-feeling conversations.",
  },
  {
    title: "ElevenLabs Voice Quality",
    desc: "Our voice agents use ElevenLabs' highest-quality Turbo v2.5 models for studio-quality speech synthesis that callers consistently fail to identify as AI.",
  },
  {
    title: "Full Telephony Stack",
    desc: "We handle the entire telephony layer — Twilio number provisioning, SIP integration, call recording, PCI-compliant payment flows, and warm handoff to human agents.",
  },
  {
    title: "CRM Integration Depth",
    desc: "Every call outcome is written back to your CRM automatically. Contact enrichment, call summaries, sentiment scoring, and follow-up task creation — all without manual data entry.",
  },
  {
    title: "Compliance-Aware Builds",
    desc: "We implement TCPA-compliant outbound dialing, PII redaction in call recordings, call consent logging, and DNC list checking for regulated industries.",
  },
];

const FAQS = [
  {
    q: "How natural does the AI voice sound to callers?",
    a: "Using ElevenLabs' latest Turbo v2.5 models, our voice agents sound indistinguishable from a professional human agent in blind listening tests. You can select from dozens of pre-built voices or we can clone a custom voice from a 10-minute recording of your choosing. Filler words, breathing pauses, and natural speech patterns are built in. The main tell for callers is typically the very short response latency — which most interpret as efficiency rather than artificiality.",
  },
  {
    q: "What is the OpenAI Realtime API and why does it matter?",
    a: "The OpenAI Realtime API provides a persistent WebSocket connection for streaming bidirectional audio directly to GPT-4o — eliminating the speech-to-text → LLM → text-to-speech pipeline latency that plagued earlier voice AI. This reduces response latency from 2–3 seconds to under 500ms, which is the threshold for a conversation to feel natural. We use this as the core engine for all our voice agent builds.",
  },
  {
    q: "How do you integrate with existing phone systems?",
    a: "We integrate with your existing phone infrastructure via Twilio Programmable Voice, which provides a SIP gateway compatible with major PBX systems (Cisco, Avaya, RingCentral, 3CX). If you use a cloud contact center platform like Genesys or Five9, we integrate at the SIP or API level. For businesses without an existing system, we provision Twilio phone numbers directly. The integration work typically takes 1–2 weeks of the overall project.",
  },
  {
    q: "Can the voice agent handle accents and noisy call environments?",
    a: "Yes. We use Whisper large-v3 for speech-to-text, which leads the industry in accent robustness and noise tolerance. We test across 15+ accent variations and simulate typical call center background noise levels during QA. For particularly challenging environments (factory floors, crowded spaces) we can implement background noise suppression as a pre-processing step.",
  },
  {
    q: "How does the voice agent know when to transfer to a human?",
    a: "We define explicit escalation triggers during the call flow design phase: caller sentiment (we track sentiment in real time), specific intents that require human judgment, explicit caller requests for a human, and confidence thresholds on key decisions. When escalation triggers fire, the agent delivers a warm handoff — briefing the human agent with a real-time call summary, intent classification, and conversation transcript before the transfer completes.",
  },
  {
    q: "What call types are AI voice agents best suited for?",
    a: "Voice agents excel at high-volume, transactional call types with predictable intent patterns: appointment scheduling and reminders, order/delivery status updates, basic customer support (account info, password resets, FAQs), payment reminders, lead qualification calls, and post-service surveys. They are less suited to complex complaint resolution requiring discretionary judgment, sensitive emotional support conversations, and novel situations outside their training distribution — these are routed to humans.",
  },
  {
    q: "How do you handle outbound dialing compliance?",
    a: "We implement full TCPA compliance for US outbound campaigns: DNC list checking before every dial, consent status validation, calling hour restrictions by timezone, maximum attempt limits per contact, and comprehensive call log records for audit purposes. For international campaigns we adapt to the relevant jurisdiction (GDPR, CASL, etc.). PCI-compliant payment capture over voice is also available using Twilio's PCI-mode call handling.",
  },
  {
    q: "Can the voice agent update our CRM after each call?",
    a: "Yes — CRM write-back is a standard component of every voice agent we build. After each call the agent writes a structured call summary, intent classification, outcome (resolved/escalated/no answer), caller sentiment score, and any data captured during the call (booking details, contact info, issue description) directly to Salesforce, HubSpot, or your custom CRM via API. Follow-up tasks and pipeline stage updates can also be automated.",
  },
  {
    q: "What kind of reporting and analytics do we get?",
    a: "We build custom analytics dashboards showing: call volume by intent type, resolution rate vs escalation rate, average call duration, caller satisfaction scores (from post-call SMS surveys), cost per call vs human-handled equivalent, and first-call resolution rate. Real-time monitoring with alerts for unusual escalation spikes or technical failures is also included.",
  },
  {
    q: "How long does it take to build and deploy a voice agent?",
    a: "A focused inbound voice agent for a single call type (e.g., appointment booking or order status) ships in 4–5 weeks. A full inbound + outbound deployment covering 5–8 call types with deep CRM integration typically takes 8–12 weeks. Timeline drivers include the number of call flow variants, complexity of telephony integration (existing PBX vs. fresh Twilio setup), and how many backend systems the agent needs to interact with.",
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
  name: "AI Voice Agents",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  description:
    "Build AI voice agents for inbound and outbound calls using ElevenLabs, OpenAI Realtime API, and Twilio. Handle customer support, booking, and sales calls 24/7 without human agents.",
  areaServed: "Worldwide",
  serviceType: "AI Development",
  url: "https://infonza.com/ai-solutions/ai-voice-agents",
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

export default function AIVoiceAgentsPage() {
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
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">AI Voice Agents</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-violet-900/60 border border-violet-700/40 rounded-full px-4 py-1.5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiPhone className="w-3.5 h-3.5" />
                AI Voice Agents
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                AI Voice Agents That{" "}
                <span className="text-gradient">Handle Calls</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Deploy AI voice agents for inbound and outbound calls — powered by ElevenLabs
                for natural speech, OpenAI Realtime API for sub-500ms response, and Twilio
                for reliable telephony. Handle support, booking, and sales calls 24/7.
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

            {/* Right — live call simulation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Infonza Voice Agent — Call Active</span>
                  <span className="ml-auto text-xs text-slate-500">ElevenLabs + Realtime API</span>
                </div>
                <div className="p-5 space-y-4 min-h-[280px]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-violet-500 rounded-full"
                          style={{
                            height: `${8 + Math.sin(i * 0.8) * 8 + Math.random() * 8}px`,
                            opacity: 0.6 + Math.random() * 0.4,
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-violet-400 font-mono ml-2">02:14</span>
                  </div>
                  {[
                    { role: "caller", msg: "Hi, I need to reschedule my appointment from Thursday to next Monday." },
                    { role: "agent", msg: "Of course! I can see your appointment on Thursday the 15th at 2:30 PM with Dr. Chen. Let me check Monday's availability — I have 10:00 AM and 3:15 PM open. Which would you prefer?" },
                    { role: "caller", msg: "3:15 works perfectly." },
                    { role: "agent", msg: "Done — I've moved your appointment to Monday the 19th at 3:15 PM with Dr. Chen. You'll receive a confirmation text within a few minutes. Is there anything else I can help you with?" },
                  ].map((m, i) => (
                    <div key={i} className={`flex ${m.role === "caller" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        m.role === "caller"
                          ? "bg-slate-600 text-slate-200 rounded-br-sm"
                          : "bg-violet-800/60 text-violet-100 rounded-bl-sm"
                      }`}>
                        {m.msg}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Response latency: 340ms</span>
                  <span className="text-xs text-teal-400">Resolved — no human needed</span>
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
              What Your{" "}
              <span className="text-gradient">AI Voice Agent</span> Can Do
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six production-ready capabilities for inbound and outbound voice automation.
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-violet-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center mb-3">
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
              How We Build Your <span className="text-gradient">Voice Agent</span>
            </h2>
            <p className="text-slate-400">From call flow design to live deployment in 4–8 weeks.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-violet-700/60 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center text-white font-bold text-xs font-mono">
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
              AI Voice Agents Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Industry-specific voice agents trained on domain terminology, compliance requirements, and real call transcripts.
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
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-violet-200 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center">
                  <HiCheckCircle className="w-4 h-4 text-violet-600" />
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
              Why Teams Choose <span className="text-gradient">Infonza</span> for Voice AI
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-violet-200 hover:shadow-md transition-all"
              >
                <HiCheckCircle className="w-6 h-6 text-violet-500 mb-3" />
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
            heading="Ready to add AI voice to your phone lines?"
            subheading="Book a free call flow audit. We'll assess your top call types, estimate deflection potential, and scope your first voice agent deployment."
            cta="Book Free Call Flow Audit"
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
                title: "AI Customer Support Automation",
                desc: "Automate customer support across channels — chat, email, and phone — with AI that resolves 70%+ of tickets.",
                href: "/ai-solutions/customer-support-automation",
                icon: HiUserGroup,
              },
              {
                title: "AI Chatbot Development",
                desc: "Text-based AI chatbots for web, Slack, WhatsApp, and Zendesk — the perfect complement to voice channels.",
                href: "/ai-development/ai-chatbot-development",
                icon: HiChatBubbleLeftRight,
              },
              {
                title: "AI Appointment Booking Agents",
                desc: "Dedicated AI agents for scheduling — online booking, inbound phone booking, and outbound confirmation calls.",
                href: "/ai-solutions/ai-agents-development",
                icon: HiClipboardDocumentList,
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
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-violet-300 hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center mb-3 group-hover:bg-violet-100 transition-colors">
                    <s.icon className="w-4.5 h-4.5 text-violet-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-violet-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 flex-1 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-violet-600 text-xs font-semibold">
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
              Everything you need to know about building production AI voice agents.
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
        badge="Free Voice AI Consultation"
        heading="Add AI Voice to Your Business"
        subheading="Talk to our voice AI engineers. We'll assess your call volume, identify the highest-ROI automation opportunities, and demo a prototype voice agent on your actual call scripts."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to a Voice AI Engineer"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
