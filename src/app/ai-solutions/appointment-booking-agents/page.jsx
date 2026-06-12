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
  HiBolt,
  HiCalendarDays,
  HiChatBubbleLeftRight,
  HiDevicePhoneMobile,
  HiArrowPath,
  HiMapPin,
  HiCircleStack,
  HiUserGroup,
  HiCpuChip,
  HiCommandLine,
  HiCog6Tooth,
} from "react-icons/hi2";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  FAQItem,
  BookingSection,
  BookingBanner,
  FloatingBookingButton,
  BOOKING_URL,
} from "../../components/ai-solutions-shared";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════════ */

const METRICS = [
  { metric: "24/7", label: "Booking Availability", sub: "never miss an appointment request" },
  { metric: "40%", label: "Fewer No-Shows", sub: "automated reminders & confirmations" },
  { metric: "Zero", label: "Scheduling Conflicts", sub: "real-time calendar synchronization" },
  { metric: "Any", label: "Calendar Platform", sub: "Google, Outlook, Cal.com & more" },
];

const CAPABILITIES = [
  {
    icon: HiChatBubbleLeftRight,
    title: "Conversational Booking AI",
    desc: "Natural-language booking flows that understand intent, clarify requirements, and confirm appointments through chat, voice, or web widget — no forms, no friction.",
  },
  {
    icon: HiCalendarDays,
    title: "Calendar Integration",
    desc: "Deep two-way sync with Google Calendar, Microsoft Outlook, and Cal.com. Real-time availability checks, instant slot reservation, and automatic conflict detection.",
  },
  {
    icon: HiDevicePhoneMobile,
    title: "SMS & Email Reminders",
    desc: "Automated reminder sequences via Twilio SMS and transactional email — 24-hour, 2-hour, and 30-minute nudges with one-tap confirmation or reschedule links.",
  },
  {
    icon: HiArrowPath,
    title: "Rescheduling & Cancellation Flows",
    desc: "Fully automated handling of change requests. When a customer reschedules or cancels, the agent frees the slot, updates all parties, and offers the next available time.",
  },
  {
    icon: HiMapPin,
    title: "Multi-Location Support",
    desc: "Route bookings to the right location or team member based on availability, geography, service type, or custom business rules — all within a single AI booking agent.",
  },
  {
    icon: HiCircleStack,
    title: "CRM Sync on Booking",
    desc: "Every booking triggers automatic CRM record creation or update — contact details, appointment history, service notes, and follow-up task creation written back in real time.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Booking Flow Design",
    desc: "We map your existing appointment process — service types, duration, team availability, buffer rules, and cancellation policies — and design the conversational AI flow before any code is written.",
  },
  {
    step: "02",
    title: "Calendar Integration",
    desc: "We connect to your calendar platform(s) via official APIs, set up two-way sync, configure availability windows, and implement real-time conflict detection with appropriate buffer handling.",
  },
  {
    step: "03",
    title: "AI Conversation Build",
    desc: "We engineer the booking agent's conversation logic — slot negotiation, intent recognition, objection handling, and graceful fallback to a human when the request falls outside the agent's scope.",
  },
  {
    step: "04",
    title: "Notification Setup",
    desc: "We configure the full reminder stack: initial confirmation, pre-appointment reminders at customizable intervals, day-of notifications, and post-appointment follow-up sequences via SMS and email.",
  },
  {
    step: "05",
    title: "Testing",
    desc: "End-to-end scenario testing across 50+ booking journeys — new bookings, reschedules, cancellations, double-book attempts, after-hours requests, and edge-case business rules.",
  },
  {
    step: "06",
    title: "Launch",
    desc: "Production deployment with live monitoring, a 30-day hypercare period, and a weekly review of booking conversion rate, no-show rate, and agent deflection metrics.",
  },
];

const TECH = [
  { name: "OpenAI GPT-4", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { name: "Twilio SMS", color: "bg-red-50 border-red-200 text-red-700" },
  { name: "Google Calendar API", color: "bg-blue-50 border-blue-200 text-blue-700" },
  { name: "Outlook Calendar", color: "bg-sky-50 border-sky-200 text-sky-700" },
  { name: "Cal.com API", color: "bg-violet-50 border-violet-200 text-violet-700" },
  { name: "n8n", color: "bg-orange-50 border-orange-200 text-orange-700" },
  { name: "FastAPI", color: "bg-teal-50 border-teal-200 text-teal-700" },
  { name: "PostgreSQL", color: "bg-indigo-50 border-indigo-200 text-indigo-700" },
];

const INDUSTRIES = [
  { name: "Healthcare", use: "Patient appointment scheduling, telehealth booking, specialist referral management, and follow-up care reminders" },
  { name: "Legal", use: "Client consultation scheduling, case review meetings, court date reminders, and conflict-check-aware booking" },
  { name: "Real Estate", use: "Property viewing slots, agent availability management, buyer consultation booking, and open-house registration" },
  { name: "Beauty & Wellness", use: "Salon and spa bookings, therapist scheduling, recurring appointment management, and waitlist automation" },
  { name: "Finance", use: "Financial advisor consultations, mortgage review meetings, tax preparation slots, and compliance briefing scheduling" },
  { name: "Education", use: "Tutor and instructor booking, parent-teacher conference scheduling, admissions interview coordination, and campus tour registration" },
];

const FAQS = [
  {
    q: "How does an AI booking agent differ from a standard online booking widget?",
    a: "A standard booking widget is a static form — the customer selects from a fixed set of options. An AI booking agent conducts a natural conversation: it understands free-text requests like 'I need a 45-minute slot on a Thursday afternoon next week with someone who speaks Spanish,' negotiates availability, handles ambiguous requests, and gracefully manages edge cases. It can also pro-actively reach out to customers to fill open slots or follow up on incomplete bookings.",
  },
  {
    q: "Which calendar platforms do you integrate with?",
    a: "We integrate natively with Google Calendar (via Google Calendar API), Microsoft Outlook and Exchange (via Microsoft Graph API), and Cal.com via its open API. We also support Calendly webhooks for read-only availability checks. For enterprise environments with custom scheduling systems or EHR/EMR platforms (like Epic or Athenahealth), we build custom integration adapters. We can connect to multiple calendars simultaneously for multi-resource or multi-location businesses.",
  },
  {
    q: "How do the SMS and email reminders work?",
    a: "Reminders are sent through Twilio for SMS and a transactional email provider (SendGrid or Postmark) for email. You define the reminder schedule — for example, confirmation immediately on booking, a 24-hour reminder, a 2-hour reminder, and a 30-minute reminder. Each message includes a one-click confirm, reschedule, or cancel link that feeds back into the agent's availability pool in real time. Reminder timing, copy, and channel preference are all configurable per service type or customer segment.",
  },
  {
    q: "Can the booking agent handle multi-person or group appointments?",
    a: "Yes. The agent supports group bookings where multiple participants must all confirm attendance, and it tracks individual confirmation status. For group sessions with limited capacity, it manages a waitlist and auto-fills vacated spots. For appointments requiring multiple staff members (e.g., a consultation that needs both an advisor and a specialist), the agent checks combined availability across both calendars before confirming.",
  },
  {
    q: "How does the agent reduce no-shows?",
    a: "The typical 40% no-show reduction comes from three mechanisms: (1) automated multi-touch reminder sequences that make it trivial to confirm or reschedule rather than simply not show up, (2) a pre-appointment confirmation gate where patients or clients must actively confirm within a window or their slot is released, and (3) a waitlist system that instantly fills released slots — ensuring no-shows don't leave gaps in your calendar. Post-appointment, the agent can also analyze no-show patterns and apply smarter overbooking logic.",
  },
  {
    q: "Can the booking agent handle rescheduling and cancellations automatically?",
    a: "Yes, fully. When a customer requests a reschedule, the agent checks availability, presents alternatives conversationally, and confirms the new slot — all without human involvement. On cancellation, the agent immediately releases the slot, notifies the service provider, updates the CRM record, and if a waitlist exists, auto-contacts the next waitlisted customer with the newly available time.",
  },
  {
    q: "Does the booking agent support intake forms or pre-appointment questionnaires?",
    a: "Yes. The agent can collect intake information as part of the booking conversation — reason for visit, insurance details, preferences, or any custom fields your business requires. This information is stored alongside the appointment record and pushed to your CRM or practice management system, so staff have full context before the appointment begins. For sensitive data (healthcare PHI), we implement appropriate encryption and access controls.",
  },
  {
    q: "How does multi-location routing work?",
    a: "For businesses with multiple locations or teams, we configure routing logic based on your business rules: by geography (nearest location to the customer's address or ZIP code), by service type (only certain locations offer specific services), by individual staff availability, or by capacity balancing across locations. The customer simply states what they need, and the agent handles all routing logic transparently — presenting only relevant availability.",
  },
  {
    q: "What happens when the AI agent can't handle a booking request?",
    a: "We build explicit escalation paths for requests outside the agent's defined scope — unusual service combinations, complex custom requirements, VIP customers, or customers who explicitly request a human. The agent collects context, creates a ticket or CRM task with full conversation history, and either connects the customer to a human via live chat handoff or schedules a callback. No customer falls into a dead end.",
  },
  {
    q: "How long does it take to deploy an AI booking agent?",
    a: "A standard single-location booking agent with calendar integration, SMS/email reminders, and CRM sync typically deploys in 3–4 weeks. Multi-location deployments or integrations with custom EHR/EMR systems typically take 5–7 weeks. Timeline depends on the complexity of your business rules, the number of calendar integrations, and the availability of API credentials and test data from your existing systems.",
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
  name: "AI Appointment Booking Agents",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  description:
    "Deploy AI agents that book, confirm, and reschedule appointments 24/7 with calendar integrations, SMS/email reminders, and no-show reduction workflows.",
  areaServed: "Worldwide",
  serviceType: "AI Automation",
  url: "https://infonza.com/ai-solutions/appointment-booking-agents",
};

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function AppointmentBookingAgentsPage() {
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
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">AI Appointment Booking Agents</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiCalendarDays className="w-3.5 h-3.5" />
                AI Booking Agents
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                AI Agents That Schedule{" "}
                <span className="text-gradient">Appointments 24/7</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Deploy conversational AI agents that handle every step of appointment scheduling —
                booking, confirmation, reminders, rescheduling, and CRM sync — around the clock,
                without a single human touch.
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

            {/* Right — booking agent visualization */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Booking Agent — Active</span>
                  <span className="ml-auto text-xs text-slate-500">GPT-4 + Cal.com</span>
                </div>
                <div className="p-5 space-y-3 min-h-[280px] font-mono text-xs">
                  {[
                    { status: "done", label: "Request received", detail: "New consultation booking — legal services, Thursday PM preferred" },
                    { status: "done", label: "Calendar check", detail: "Queried attorney availability — 3 slots available Thu 2–5 PM" },
                    { status: "done", label: "Slot presented", detail: "Offered Thu 2:30 PM, 3:30 PM, 4:00 PM to client" },
                    { status: "done", label: "Slot confirmed", detail: "Client selected Thu 3:30 PM — slot reserved in Google Calendar" },
                    { status: "active", label: "Notifications", detail: "Sending confirmation email + SMS reminder sequence…" },
                    { status: "pending", label: "CRM sync", detail: "Writing contact record and appointment to HubSpot" },
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
                  <span className="text-xs text-slate-500">Steps: 4 / 6 complete</span>
                  <span className="text-xs text-teal-400">Booking confirmed — 18s elapsed</span>
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
              What Our <span className="text-gradient">AI Booking Agents</span> Do
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six core capabilities that eliminate manual scheduling from your business.
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-3">
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
              How We Build Your <span className="text-gradient">AI Booking Agent</span>
            </h2>
            <p className="text-slate-400">From flow design to live deployment in 3–4 weeks.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-teal-700/60 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs font-mono">
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
            {TECH.map(({ name, color }) => (
              <span key={name} className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold ${color}`}>
                {name}
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
              AI Booking Agents Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Deployed across high-appointment-volume industries where scheduling friction directly impacts revenue.
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
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-200 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                  <HiCheckCircle className="w-4 h-4 text-teal-600" />
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

      {/* ── BOOKING BANNER ── */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Stop losing bookings to missed calls and after-hours requests."
            subheading="Get a free workflow review and see exactly how an AI booking agent would fit into your scheduling process."
            cta="Schedule Free Workflow Review"
          />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "AI Voice Agents",
                desc: "Handle inbound and outbound booking calls with conversational AI voice agents that speak naturally and update your calendar in real time.",
                href: "/ai-solutions/ai-voice-agents",
                icon: HiCommandLine,
              },
              {
                title: "AI CRM Automation",
                desc: "Automatically write booking data, contact records, and appointment history back to HubSpot, Salesforce, or Zoho without manual entry.",
                href: "/ai-solutions/crm-automation",
                icon: HiCircleStack,
              },
              {
                title: "AI Customer Support Automation",
                desc: "Extend beyond scheduling — deflect inbound inquiries, answer FAQs, and route complex issues to the right team with AI support agents.",
                href: "/ai-solutions/customer-support-automation",
                icon: HiChatBubbleLeftRight,
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
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
                    <s.icon className="w-4 h-4 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-teal-700 transition-colors">
                    {s.title}
                  </h3>
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

      {/* ── FAQ ── */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
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
              Honest answers to technical questions about AI appointment scheduling.
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
        badge="Free Booking Agent Consultation"
        heading="Automate Your Appointment Scheduling With AI"
        subheading="Schedule a 30-minute session with our AI automation engineers. We'll map your current booking process, identify the highest-impact automation opportunities, and give you a clear deployment plan."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to an AI Engineer"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
