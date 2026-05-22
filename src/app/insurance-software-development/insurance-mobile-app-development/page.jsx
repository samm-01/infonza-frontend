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
  HiDevicePhoneMobile,
  HiDocumentText,
  HiChartBar,
  HiBolt,
  HiCalendarDays,
  HiStar,
  HiCodeBracket,
  HiCurrencyDollar,
  HiCamera,
  HiChatBubbleLeftRight,
  HiBellAlert,
  HiIdentification,
  HiCpuChip,
  HiGlobeAlt,
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
    title: "Policyholders Expect a Digital-First Experience",
    description: "87% of insurance shoppers expect to manage their policies on mobile. Carriers without a consumer app see higher lapse rates and lower NPS scores as digital-native competitors offer instant FNOL, digital ID cards, and payment management.",
  },
  {
    title: "FNOL Phone Calls Are Expensive and Slow",
    description: "Traditional FNOL via phone call costs $40–$80 per claim and takes 15–45 minutes. Mobile FNOL with photo/video capture and pre-fill from policy data reduces that to under 5 minutes and triggers automatic assignment to the right adjuster.",
  },
  {
    title: "Paper ID Cards and Policy Documents",
    description: "Customers need to pull out printed ID cards at traffic stops and insurance verification. Digital ID cards accepted in all 50 states — available offline — eliminate a persistent friction point that drives customer satisfaction down.",
  },
  {
    title: "Customer Support Costs Balloon Without Self-Service",
    description: "Policy questions, billing inquiries, and certificate requests drive high call center volume. Mobile self-service for 80% of common inquiries reduces support costs by $25–$40 per contact avoided.",
  },
];

const FEATURES = [
  {
    icon: HiIdentification,
    title: "Digital Policy Wallet",
    description: "All policies — auto, home, renters, umbrella — in one mobile wallet. Coverage details, declarations pages, and endorsements accessible in one tap. Available offline for traffic stops and verification requests.",
  },
  {
    icon: HiDocumentText,
    title: "Digital ID Cards",
    description: "State-compliant digital insurance ID cards accepted in all 50 US states and most Canadian provinces. Auto-updates when coverage renews. Shareable PDFs for verification requests.",
  },
  {
    icon: HiCamera || HiDocumentText,
    title: "Mobile FNOL — Photo Claims",
    description: "Guided First Notice of Loss flow — policyholders photograph damage, capture scene details, and submit a claim in under 5 minutes. AI damage assessment pre-populates claim fields and routes to the correct adjuster automatically.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Payment & Billing",
    description: "Premium payments via Apple Pay, Google Pay, ACH, or card. Payment plan management, autopay enrollment, and billing history. Real-time payment confirmations and receipt emails.",
  },
  {
    icon: HiChatBubbleLeftRight,
    title: "Live Agent Chat",
    description: "In-app live chat connects policyholders with licensed agents during business hours. AI-powered chatbot handles common inquiries 24/7 with seamless handoff to human agents for complex situations.",
  },
  {
    icon: HiBellAlert,
    title: "Renewal & Alert Notifications",
    description: "Push notifications for renewal reminders, payment due dates, claim status updates, and severe weather alerts for the policyholder's insured property address.",
  },
  {
    icon: HiChartBar,
    title: "Claims Status Tracking",
    description: "Real-time claims status — from FNOL to settlement. Policyholders see adjuster assignment, inspection scheduled, estimate approved, and payment issued without calling the claims department.",
  },
  {
    icon: HiGlobeAlt,
    title: "Multi-Policy Household Management",
    description: "One login for the entire household — multiple vehicles, multiple properties, multiple named insureds. Account sharing and authorized user management for spouse and family members.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "UX Research & App Strategy",
    description: "User research with policyholders and agents to map the 10 highest-friction interactions. App strategy document defines feature prioritization, platform selection (React Native or Flutter), and store submission plan.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Insurance-specific UX design with accessibility compliance (WCAG 2.1 AA). Interactive prototype tested with real policyholders before a line of code is written.",
  },
  {
    step: "03",
    title: "Core App Build",
    description: "Policy wallet, digital ID cards, FNOL flow, and payment integration built first — the features with the highest policyholder impact. Bi-weekly TestFlight and Play Store beta releases.",
  },
  {
    step: "04",
    title: "Backend Integration & Testing",
    description: "Integration with policy admin system, claims management, billing processor, and customer service platform. Load testing, security penetration testing, and App Store compliance review.",
  },
  {
    step: "05",
    title: "App Store Launch & Iteration",
    description: "App Store and Google Play submission, launch marketing assets, and push notification strategy delivered. Post-launch analytics dashboard tracks feature usage and churn indicators.",
  },
];

const TECH = [
  { label: "React Native", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { label: "Flutter (alt)", color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
  { label: "iOS / Swift", color: "bg-slate-100 text-slate-700 border-slate-200" },
  { label: "Android / Kotlin", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "Node.js API", color: "bg-lime-100 text-lime-700 border-lime-200" },
  { label: "Firebase (Push)", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "Stripe Mobile SDK", color: "bg-violet-100 text-violet-700 border-violet-200" },
  { label: "AWS S3 / Lambda", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { label: "Twilio (Chat)", color: "bg-red-100 text-red-700 border-red-200" },
];

const RESULTS = [
  { metric: "4.8★", label: "Average App Store Rating", desc: "Across iOS and Android insurance app deployments" },
  { metric: "60%", label: "Digital Claims Adoption", desc: "Policyholders submitting FNOL via mobile vs. phone" },
  { metric: "35%", label: "Support Cost Reduction", desc: "Driven by mobile self-service for billing and policy inquiries" },
  { metric: "28%", label: "Improved Retention Rate", desc: "Digital-engaged policyholders renew at higher rates" },
];

const RELATED = [
  {
    title: "Insurance Agent Portal",
    description: "Self-service portal for agents — appointments, book of business, commissions, and training.",
    href: "/insurance-software-development/insurance-agent-portal",
    tag: "InsurTech",
  },
  {
    title: "Insurance Automation Solutions",
    description: "AI-powered claims automation, OCR document extraction, and fraud detection to back your mobile claims flow.",
    href: "/insurance-software-development/insurance-automation-solutions",
    tag: "InsurTech",
  },
  {
    title: "AI Chatbot Development",
    description: "GPT-4 powered AI chatbots for in-app customer service — 70% ticket deflection before human handoff.",
    href: "/ai-development/ai-chatbot-development",
    tag: "AI Development",
  },
];

const FAQS = [
  {
    q: "Do you build native iOS and Android apps, or cross-platform?",
    a: "We recommend React Native for most insurance mobile apps — it delivers near-native performance, shares 85%+ of the codebase between iOS and Android, and reduces development cost by 35–45% vs. two native builds. For carriers with very high performance requirements (complex animations, heavy camera use), we recommend Flutter. We build truly native Swift/Kotlin apps when required by carrier technical standards.",
  },
  {
    q: "How do you handle offline access to policy documents and ID cards?",
    a: "Policy data and digital ID cards are synced to the device's secure local storage when the app is online and remain accessible offline. The offline data set is encrypted using the device's secure enclave. When connectivity is restored, any updates from the policy admin system are automatically synced.",
  },
  {
    q: "Are digital insurance ID cards accepted by law enforcement?",
    a: "Yes. All 50 US states accept digital insurance ID cards displayed on a mobile device as proof of insurance. We implement the ACORD digital ID card standard with carrier, policy number, effective dates, and vehicle information displayed in the format accepted by state DMVs and law enforcement.",
  },
  {
    q: "How do you integrate the app with our existing policy administration system?",
    a: "We build a REST API middleware layer that translates between your PAS (Guidewire, Duck Creek, Applied, or custom) and the mobile app. The middleware handles authentication, rate limiting, data transformation, and caching — isolating the mobile app from PAS API changes. Most PAS integrations take 4–8 weeks depending on API quality.",
  },
  {
    q: "What does insurance mobile app development cost and take?",
    a: "A core insurance consumer app — policy wallet, digital ID cards, FNOL, and payments — typically takes 16–22 weeks and costs $150K–$280K for both iOS and Android using React Native. Adding live chat, claims tracking, and backend integrations adds 6–10 weeks. We provide a detailed estimate after scoping your feature requirements.",
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

export default function InsuranceMobileAppPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insurance-software-development" className="hover:text-teal-400 transition-colors">Insurance Software</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Insurance Mobile App Development</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-rose-900/60 border border-rose-700/40 rounded-full px-4 py-1.5 text-rose-300 text-xs font-semibold uppercase tracking-widest mb-7">
                <HiDevicePhoneMobile className="w-3.5 h-3.5" />
                InsurTech Mobile Specialists
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 font-heading">
                Insurance <span className="text-gradient">Mobile App</span> Development
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Customer-facing iOS and Android insurance apps with 4.8-star App Store ratings — policy wallet, digital ID cards, photo FNOL, instant payments, and live agent chat built for modern policyholders.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["4.8★ App Store Rating", "60% Digital Claims", "35% Lower Support Cost"].map((b) => (
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

            {/* Mobile app mockup panel */}
            <motion.div {...fadeUp(1)}>
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-400 text-sm font-medium">Insurance App — Policy Wallet</p>
                  <div className="flex items-center gap-1.5">
                    <HiStar className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 font-bold text-sm">4.8</span>
                    <span className="text-slate-500 text-xs">App Store</span>
                  </div>
                </div>
                <div className="space-y-3 mb-5">
                  {[
                    { policy: "Auto Insurance", carrier: "Progressive", premium: "$127/mo", status: "Active", statusColor: "text-emerald-400" },
                    { policy: "Homeowners", carrier: "Nationwide", premium: "$214/mo", status: "Active", statusColor: "text-emerald-400" },
                    { policy: "Umbrella", carrier: "Chubb", premium: "$42/mo", status: "Renewal in 14d", statusColor: "text-amber-400" },
                  ].map((p) => (
                    <div key={p.policy} className="bg-slate-700/60 rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <div className="text-white font-medium text-sm">{p.policy}</div>
                        <div className="text-slate-400 text-xs">{p.carrier}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-bold text-sm">{p.premium}</div>
                        <div className={`text-xs ${p.statusColor}`}>{p.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: "File Claim", icon: "📸" },
                    { label: "Pay Bill", icon: "💳" },
                    { label: "Live Chat", icon: "💬" },
                  ].map((btn) => (
                    <div key={btn.label} className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 border border-teal-700/40 rounded-xl p-3 text-center cursor-pointer hover:border-teal-500/60 transition-colors">
                      <div className="text-xl mb-1">{btn.icon}</div>
                      <div className="text-teal-300 text-xs font-medium">{btn.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between bg-rose-900/30 border border-rose-700/40 rounded-xl px-4 py-2.5">
                  <span className="text-rose-300 text-sm font-medium">Active Claim #CLM-8841</span>
                  <span className="text-rose-400 text-xs">Estimate Pending</span>
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
              What Carriers Lose Without a <span className="text-gradient">Customer Mobile App</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROBLEMS.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-rose-300 hover:shadow-md transition-all">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">App <span className="text-gradient">Features</span> That Drive Engagement</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Every feature benchmarked against top-rated insurance apps — USAA, Lemonade, Hippo — and designed for maximum policyholder adoption.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i)} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-rose-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center mb-4">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Mobile App <span className="text-gradient">Build Process</span></h2>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} {...fadeUp(i)} className="flex gap-6 items-start bg-white border border-slate-200 rounded-2xl p-6 hover:border-rose-300 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Mobile App <span className="text-gradient">Results</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i)} className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 text-center hover:border-rose-700/50 transition-all">
                <div className="text-4xl font-bold text-rose-400 mb-2">{r.metric}</div>
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
            <BookingBanner heading="Ready to give policyholders the app they expect?" subheading="Let's scope your feature list, policy admin integrations, and App Store launch plan — then give you a precise build estimate." cta="Book Free Mobile App Consultation" />
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
            <h2 className="text-3xl font-bold text-slate-900 font-heading">Mobile App <span className="text-gradient">FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Insurance Mobile App Specialists"
        heading="Build an Insurance App That Policyholders Actually Use"
        subheading="Schedule a free 30-minute session with our mobile app engineers. We'll scope your feature list, map your policy admin integrations, and give you a realistic App Store launch timeline."
        primaryCTA="Schedule Free App Consultation"
        secondaryCTA="Get Project Estimate"
      />
      <Footer />
      <FloatingBookingButton label="Book App Dev Call" />
    </>
  );
}
