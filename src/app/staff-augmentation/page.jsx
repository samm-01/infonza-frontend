"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiXCircle,
  HiArrowRight,
  HiShieldCheck,
  HiClock,
  HiBolt,
  HiGlobeAlt,
  HiChevronDown,
  HiStar,
  HiCodeBracket,
  HiCpuChip,
  HiRocketLaunch,
  HiCloud,
  HiServer,
  HiCircleStack,
  HiDevicePhoneMobile,
  HiBuildingOffice2,
  HiAcademicCap,
  HiTruck,
  HiShoppingBag,
  HiHome,
  HiHeart,
  HiCurrencyDollar,
  HiUserGroup,
  HiUsers,
  HiSparkles,
  HiCube,
} from "react-icons/hi2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════════ */

const HERO_BADGES = [
  { label: "React", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { label: "Next.js", color: "bg-slate-100 text-slate-700 border-slate-200" },
  { label: "Node.js", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "Python", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  { label: "AWS", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "Flutter", color: "bg-cyan-100 text-cyan-700 border-cyan-200" },
  { label: "LangChain", color: "bg-violet-100 text-violet-700 border-violet-200" },
  { label: "PostgreSQL", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "Laravel", color: "bg-red-100 text-red-700 border-red-200" },
];

const TRUST_STATS = [
  { value: "12+", label: "Years Delivering", icon: HiClock },
  { value: "150+", label: "Global Clients", icon: HiGlobeAlt },
  { value: "500+", label: "Projects Delivered", icon: HiRocketLaunch },
  { value: "94%", label: "Client Retention", icon: HiStar },
];

const COMPARISON = {
  criteria: [
    "Hiring Speed",
    "Cost Efficiency",
    "Technical Expertise",
    "Scalability",
    "Communication",
    "Project Management",
    "Reliability",
    "Full Accountability",
  ],
  columns: [
    {
      name: "In-House",
      subtitle: "Full-time employees",
      header: "bg-slate-100",
      badge: "bg-slate-100 text-slate-600",
      values: [
        { type: "bad", text: "2–6 months" },
        { type: "bad", text: "High cost" },
        { type: "ok", text: "Varies" },
        { type: "bad", text: "Slow to scale" },
        { type: "good", text: "Excellent" },
        { type: "good", text: "Strong" },
        { type: "good", text: "High" },
        { type: "good", text: "Full" },
      ],
    },
    {
      name: "Freelancers",
      subtitle: "Independent contractors",
      header: "bg-amber-50",
      badge: "bg-amber-100 text-amber-700",
      values: [
        { type: "ok", text: "Days–weeks" },
        { type: "ok", text: "Moderate" },
        { type: "bad", text: "Inconsistent" },
        { type: "bad", text: "Hard to manage" },
        { type: "bad", text: "Unreliable" },
        { type: "bad", text: "Self-managed" },
        { type: "bad", text: "Variable" },
        { type: "bad", text: "Low" },
      ],
    },
    {
      name: "Infonza",
      subtitle: "Managed offshore team",
      header: "bg-gradient-to-r from-teal-600 to-blue-600 text-white",
      badge: "bg-emerald-100 text-emerald-700",
      highlight: true,
      values: [
        { type: "best", text: "48 hours" },
        { type: "best", text: "50–70% savings" },
        { type: "best", text: "Pre-vetted seniors" },
        { type: "best", text: "Unlimited" },
        { type: "best", text: "Daily standups" },
        { type: "best", text: "Dedicated PM" },
        { type: "best", text: "Guaranteed" },
        { type: "best", text: "Fully accountable" },
      ],
    },
  ],
};

const ROLES = [
  {
    title: "Full Stack Developers",
    exp: "3–12 yrs",
    icon: HiCodeBracket,
    techs: ["React", "Node.js", "PostgreSQL", "AWS"],
    avail: "Immediate",
    color: "from-teal-50 to-cyan-50 border-teal-200",
    iconColor: "text-teal-600 bg-teal-100",
  },
  {
    title: "React Developers",
    exp: "2–10 yrs",
    icon: HiCube,
    techs: ["React", "Next.js", "Redux", "TypeScript"],
    avail: "Immediate",
    color: "from-sky-50 to-blue-50 border-sky-200",
    iconColor: "text-sky-600 bg-sky-100",
  },
  {
    title: "Next.js Developers",
    exp: "2–8 yrs",
    icon: HiRocketLaunch,
    techs: ["Next.js", "React", "Vercel", "tRPC"],
    avail: "Within 48h",
    color: "from-slate-50 to-zinc-50 border-slate-200",
    iconColor: "text-slate-700 bg-slate-100",
  },
  {
    title: "Node.js Developers",
    exp: "3–10 yrs",
    icon: HiServer,
    techs: ["Node.js", "Express", "GraphQL", "Redis"],
    avail: "Immediate",
    color: "from-green-50 to-emerald-50 border-green-200",
    iconColor: "text-green-600 bg-green-100",
  },
  {
    title: "Laravel Developers",
    exp: "2–8 yrs",
    icon: HiCodeBracket,
    techs: ["Laravel", "PHP", "MySQL", "Vue"],
    avail: "Within 48h",
    color: "from-red-50 to-rose-50 border-red-200",
    iconColor: "text-red-600 bg-red-100",
  },
  {
    title: "MERN Stack Developers",
    exp: "3–10 yrs",
    icon: HiCircleStack,
    techs: ["MongoDB", "Express", "React", "Node.js"],
    avail: "Immediate",
    color: "from-emerald-50 to-teal-50 border-emerald-200",
    iconColor: "text-emerald-600 bg-emerald-100",
  },
  {
    title: "AI Engineers",
    exp: "2–8 yrs",
    icon: HiCpuChip,
    techs: ["LangChain", "OpenAI", "RAG", "Python"],
    avail: "Within 48h",
    color: "from-violet-50 to-purple-50 border-violet-200",
    iconColor: "text-violet-600 bg-violet-100",
  },
  {
    title: "DevOps Engineers",
    exp: "3–10 yrs",
    icon: HiCloud,
    techs: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    avail: "Within 48h",
    color: "from-orange-50 to-amber-50 border-orange-200",
    iconColor: "text-orange-600 bg-orange-100",
  },
  {
    title: "QA Engineers",
    exp: "2–8 yrs",
    icon: HiShieldCheck,
    techs: ["Selenium", "Cypress", "Jest", "Postman"],
    avail: "Immediate",
    color: "from-lime-50 to-green-50 border-lime-200",
    iconColor: "text-lime-700 bg-lime-100",
  },
  {
    title: "UI/UX Designers",
    exp: "2–8 yrs",
    icon: HiSparkles,
    techs: ["Figma", "Framer", "Tailwind", "Storybook"],
    avail: "Within 48h",
    color: "from-pink-50 to-rose-50 border-pink-200",
    iconColor: "text-pink-600 bg-pink-100",
  },
  {
    title: "Mobile Developers",
    exp: "2–8 yrs",
    icon: HiDevicePhoneMobile,
    techs: ["Flutter", "React Native", "Swift", "Kotlin"],
    avail: "Immediate",
    color: "from-cyan-50 to-sky-50 border-cyan-200",
    iconColor: "text-cyan-600 bg-cyan-100",
  },
  {
    title: "ERP Developers",
    exp: "4–12 yrs",
    icon: HiBuildingOffice2,
    techs: ["SAP", "Odoo", "Custom ERP", "Power BI"],
    avail: "Within 48h",
    color: "from-indigo-50 to-blue-50 border-indigo-200",
    iconColor: "text-indigo-600 bg-indigo-100",
  },
];

const ENGAGEMENT_MODELS = [
  {
    icon: HiUsers,
    title: "Dedicated Team",
    tag: "Most Popular",
    tagColor: "bg-teal-100 text-teal-700",
    description:
      "A fully dedicated engineering team working exclusively on your product. Ideal for long-term product development.",
    useCase: "SaaS companies, enterprises, scaling startups",
    structure: "2–12 engineers + PM + QA",
    pricing: "Monthly retainer — predictable budget",
    scale: "Add or remove headcount anytime",
    highlight: true,
  },
  {
    icon: HiUserGroup,
    title: "Team Augmentation",
    tag: "Flexible",
    tagColor: "bg-blue-100 text-blue-700",
    description:
      "Extend your existing team with 1–3 specialized engineers who integrate into your workflow and tools.",
    useCase: "Teams with skill gaps or bandwidth crunch",
    structure: "1–5 embedded engineers",
    pricing: "Per-resource monthly billing",
    scale: "Scale individual roles up or down",
    highlight: false,
  },
  {
    icon: HiRocketLaunch,
    title: "Project-Based Delivery",
    tag: "Fixed Scope",
    tagColor: "bg-amber-100 text-amber-700",
    description:
      "Fixed-scope, milestone-based delivery. Best for well-defined builds like MVPs, portals, or integrations.",
    useCase: "MVPs, product launches, API builds",
    structure: "Cross-functional pod assigned per scope",
    pricing: "Fixed price or T&M — your choice",
    scale: "Clearly defined deliverables",
    highlight: false,
  },
  {
    icon: HiBuildingOffice2,
    title: "Offshore Dev Center",
    tag: "Enterprise",
    tagColor: "bg-violet-100 text-violet-700",
    description:
      "Your own dedicated R&D unit in India — Infonza manages HR, infrastructure, compliance, and delivery.",
    useCase: "Enterprises building long-term India presence",
    structure: "Full team: devs, PM, QA, DevOps",
    pricing: "Managed service with full transparency",
    scale: "10–100+ engineers as you grow",
    highlight: false,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement Discovery",
    desc: "Share your stack, seniority level, time zone preferences, and project context. 30 minutes is all it takes.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Talent Shortlisting",
    desc: "We match from our vetted bench. You receive 2–3 curated profiles within 48 hours — not 48 strangers.",
    icon: "🎯",
  },
  {
    step: "03",
    title: "Technical Interviews",
    desc: "You interview candidates directly. We coordinate, handle scheduling, and prepare each engineer beforehand.",
    icon: "💬",
  },
  {
    step: "04",
    title: "Team Onboarding",
    desc: "Engineers are added to your Slack, Jira, and GitHub. Day-one standups. Zero ramp-up friction.",
    icon: "🚀",
  },
  {
    step: "05",
    title: "Sprint Execution",
    desc: "Delivery begins. Weekly check-ins with our PM. You retain full control of priorities and pace.",
    icon: "⚡",
  },
];

const TECH_STACK = {
  Frontend: {
    icon: HiCodeBracket,
    color: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    techs: ["React", "Next.js", "Angular", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  Backend: {
    icon: HiServer,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
    techs: ["Node.js", "Laravel", "PHP", "Python", "Django", "Express.js"],
  },
  Database: {
    icon: HiCircleStack,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
    techs: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "DynamoDB", "Supabase"],
  },
  Cloud: {
    icon: HiCloud,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    techs: ["AWS", "Azure", "Google Cloud", "Vercel", "Docker", "Kubernetes"],
  },
  AI: {
    icon: HiCpuChip,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    techs: ["OpenAI API", "LangChain", "Pinecone", "RAG Systems", "HuggingFace", "Vector DBs"],
  },
  Mobile: {
    icon: HiDevicePhoneMobile,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-200",
    techs: ["Flutter", "React Native", "Swift", "Kotlin", "Expo", "Firebase"],
  },
};

const INDUSTRIES = [
  { icon: HiCurrencyDollar, title: "Fintech", color: "text-emerald-600 bg-emerald-50", desc: "Payment gateways, lending platforms, trading dashboards, KYC automation" },
  { icon: HiShieldCheck, title: "Insurance", color: "text-blue-600 bg-blue-50", desc: "CRM platforms, carrier API integrations, claims management, policy portals" },
  { icon: HiHeart, title: "Healthcare", color: "text-red-600 bg-red-50", desc: "Patient portals, telemedicine apps, HIPAA-compliant data systems, EHR integrations" },
  { icon: HiTruck, title: "Logistics", color: "text-orange-600 bg-orange-50", desc: "Fleet management, real-time tracking, warehouse automation, route optimization" },
  { icon: HiShoppingBag, title: "E-commerce", color: "text-violet-600 bg-violet-50", desc: "Custom storefronts, marketplace builds, inventory systems, payment orchestration" },
  { icon: HiHome, title: "Real Estate", color: "text-amber-600 bg-amber-50", desc: "Property portals, MLS integrations, CRM for agents, mortgage tools" },
  { icon: HiAcademicCap, title: "EdTech", color: "text-teal-600 bg-teal-50", desc: "LMS platforms, video-based learning, quiz engines, certification systems" },
];

const CASE_STUDIES_MINI = [
  {
    tag: "Insurance · CRM · API Integration",
    title: "Insurance CRM Platform",
    metric1: { value: "60%", label: "faster quote processing" },
    metric2: { value: "4 tools", label: "replaced with one platform" },
    points: ["Automated multi-carrier quote generation", "Hartford API integration with real-time rates", "Document vault and client self-service portal"],
    gradient: "from-blue-600 to-teal-500",
  },
  {
    tag: "Construction · ERP · Project Management",
    title: "Construction ERP Platform",
    metric1: { value: "40hrs", label: "saved per week" },
    metric2: { value: "28→4 days", label: "invoice cycle" },
    points: ["Bid-to-invoice workflow automation", "Real-time budget vs. actual tracking", "Field worker mobile view for daily logs"],
    gradient: "from-orange-500 to-amber-400",
  },
  {
    tag: "AI · SaaS · Workflow Automation",
    title: "AI-Powered SaaS Platform",
    metric1: { value: "3x", label: "faster workflows" },
    metric2: { value: "NPS 72", label: "user satisfaction" },
    points: ["LangChain-powered document processing", "RAG system for enterprise knowledge base", "Automated report generation via GPT-4o"],
    gradient: "from-violet-600 to-purple-500",
  },
];

const WHY_INDIA = [
  { icon: HiCurrencyDollar, title: "50–70% Cost Savings", desc: "Senior-level engineers at a fraction of US/UK hiring costs — without compromising quality." },
  { icon: HiUsers, title: "5M+ Engineering Talent", desc: "India produces the world's largest pool of English-speaking software engineers annually." },
  { icon: HiGlobeAlt, title: "English-First Teams", desc: "Clear written and spoken communication. Our teams are trained in async and remote-first workflows." },
  { icon: HiClock, title: "Timezone Overlap", desc: "IST overlaps with US EST mornings and EU afternoons — enabling real collaboration, not just async." },
  { icon: HiBolt, title: "Faster Delivery", desc: "Extended working windows mean faster sprint cycles and quicker turnaround on reviews and feedback." },
];

const TESTIMONIALS = [
  {
    name: "Ryan Mitchell",
    role: "CTO, Builderwing",
    company: "US Startup",
    rating: 5,
    text: "Infonza's engineers plugged into our React codebase on day one. No ramp-up lag, no hand-holding. We shipped the marketplace MVP 2 weeks ahead of schedule.",
  },
  {
    name: "Sarah Thompson",
    role: "Product Lead, Insurance Agency",
    company: "US Insurance",
    rating: 5,
    text: "The Hartford API integration was complex — multiple auth flows, different rate schemas. Infonza's team mapped it all in the first week and delivered exactly what we spec'd.",
  },
  {
    name: "James Okonkwo",
    role: "Founder, EdTech Platform",
    company: "UK EdTech",
    rating: 5,
    text: "We needed to launch before a major client onboarding event. Infonza delivered a full LMS in 6 weeks. The team worked EST hours to align with our sprints.",
  },
];

const FAQS = [
  {
    q: "How fast can we onboard developers from Infonza?",
    a: "We shortlist matching profiles within 48 hours of your requirement brief. After your technical interview and confirmation, engineers are onboarded into your tools — Slack, Jira, GitHub — within the same week. Most engagements start active sprint work within 5–7 business days.",
  },
  {
    q: "Do you provide dedicated, full-time developers?",
    a: "Yes. Our most common engagement is a dedicated full-time developer working exclusively on your product — 40 hours per week, attending your standups, using your tools, reporting to your team leads. They integrate as an extension of your in-house team.",
  },
  {
    q: "What engagement models are available?",
    a: "We offer four: Dedicated Team (full-time engineers on your product), Team Augmentation (1–3 specialists embedded in your existing team), Project-Based Delivery (fixed-scope builds), and Offshore Development Center (a full managed R&D unit in India).",
  },
  {
    q: "How do you ensure code quality and delivery standards?",
    a: "Every Infonza engineer is pre-vetted through technical assessments, coding challenges, and communication evaluations. Active engagements include a dedicated PM layer, weekly delivery reviews, and code review SLAs. We follow your coding standards and contribute to your existing QA pipelines.",
  },
  {
    q: "Do you work in US or European time zones?",
    a: "Yes. IST (India Standard Time) offers a natural overlap of 4–6 hours with US EST mornings and EU afternoon sessions. For US clients who need full-day coverage, we offer extended-hours arrangements. Engineers attend daily standups and async review cycles in your preferred tool.",
  },
  {
    q: "Is there a trial period before a long-term commitment?",
    a: "Absolutely. We encourage a paid 2-week trial sprint before committing to a longer engagement. This gives you real signal on technical quality, communication, and fit — without lock-in risk.",
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

/* ═══════════════════════════════════════════════════════════════════════════
   HELPER COMPONENTS
═══════════════════════════════════════════════════════════════════════════ */

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
      <span className="w-6 h-px bg-teal-600" />
      {children}
    </div>
  );
}

function ComparisonIcon({ type }) {
  if (type === "best")
    return <HiCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />;
  if (type === "good")
    return <HiCheckCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />;
  if (type === "ok")
    return (
      <span className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
        <span className="w-2 h-0.5 bg-amber-500 rounded-full" />
      </span>
    );
  return <HiXCircle className="w-5 h-5 text-red-400 flex-shrink-0" />;
}

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function StaffAugmentationPage() {
  const [activeTechTab, setActiveTechTab] = useState("Frontend");
  const [openFaq, setOpenFaq] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.08 } },
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />
      <Navbar />

      {/* ──────────────────────────────────────────────────────────────────
          1. HERO
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen pt-28 pb-16 bg-white overflow-hidden flex items-center">
        {/* Background mesh */}
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
          style={{ background: "radial-gradient(circle, #0d9488 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                  IT Staff Augmentation · Hire in 48 Hours
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6"
              >
                Scale Your Engineering
                <br />
                Team in{" "}
                <span className="text-gradient">Days, Not Months</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-slate-500 leading-relaxed max-w-xl mb-8">
                Hire pre-vetted remote developers, AI engineers, QA specialists,
                and product teams that integrate seamlessly with your business —
                your tools, your timezone, your workflow.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-0.5 transition-all"
                >
                  Hire Developers <HiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-teal-400 hover:bg-teal-50 hover:-translate-y-0.5 transition-all"
                >
                  Schedule Consultation
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: HiClock, label: "12+ Years Exp." },
                  { icon: HiGlobeAlt, label: "Global Clients" },
                  { icon: HiBolt, label: "Agile Delivery" },
                  { icon: HiShieldCheck, label: "NDA Protected" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5"
                  >
                    <Icon className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">{label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — animated team dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Floating tech badges */}
              {HERO_BADGES.map((badge, i) => {
                const positions = [
                  "top-4 -left-8", "top-16 right-0", "top-1/3 -left-12",
                  "-bottom-4 left-8", "bottom-16 -right-6", "bottom-1/3 left-0",
                  "top-1/2 right-4", "-top-4 left-1/3", "bottom-8 right-16",
                ];
                return (
                  <motion.span
                    key={badge.label}
                    className={`absolute z-10 px-3 py-1.5 rounded-xl border text-xs font-semibold ${badge.color} ${positions[i]}`}
                    animate={{ y: [0, i % 2 === 0 ? -8 : 6, 0] }}
                    transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {badge.label}
                  </motion.span>
                );
              })}

              {/* Dashboard card */}
              <div className="relative bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-700 mx-8">
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Your Remote Team</p>
                    <h3 className="text-white font-bold text-lg">Sprint 4 · Active</h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Team members */}
                <div className="space-y-3 mb-5">
                  {[
                    { init: "RK", name: "Raj Kumar", role: "Senior React Dev", status: "Coding", color: "bg-teal-500" },
                    { init: "AP", name: "Anya Patel", role: "Node.js Engineer", status: "In Review", color: "bg-blue-500" },
                    { init: "MS", name: "Milan Shah", role: "AI Engineer", status: "Standup", color: "bg-violet-500" },
                    { init: "DG", name: "Dev Gupta", role: "QA Engineer", status: "Testing", color: "bg-emerald-500" },
                  ].map((m, i) => (
                    <motion.div
                      key={m.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-2.5"
                    >
                      <div className={`w-8 h-8 rounded-lg ${m.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {m.init}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-xs font-semibold truncate">{m.name}</p>
                        <p className="text-slate-400 text-xs truncate">{m.role}</p>
                      </div>
                      <span className="text-xs text-slate-400 bg-slate-700 px-2 py-0.5 rounded-md flex-shrink-0">
                        {m.status}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Sprint progress */}
                <div className="bg-slate-800 rounded-xl p-4">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-400 font-medium">Sprint Progress</span>
                    <span className="text-teal-400 font-bold">74%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-teal-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: "74%" }}
                      transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex gap-4 mt-3">
                    <div className="text-center">
                      <p className="text-white font-bold text-sm">18</p>
                      <p className="text-slate-400 text-xs">Done</p>
                    </div>
                    <div className="text-center">
                      <p className="text-amber-400 font-bold text-sm">4</p>
                      <p className="text-slate-400 text-xs">In Progress</p>
                    </div>
                    <div className="text-center">
                      <p className="text-slate-300 font-bold text-sm">2</p>
                      <p className="text-slate-400 text-xs">Blocked</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          2. TRUST / STATS BAR
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-10">
            Trusted by startups, agencies, and growing businesses globally
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {TRUST_STATS.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-2">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-1">{value}</div>
                <div className="text-sm text-slate-400">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          3. WHY CHOOSE INFONZA — Comparison
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Why Infonza</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              How we compare to your alternatives
            </h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              Most teams choose between slow in-house hiring or risky freelancers.
              There&apos;s a better third option.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              {/* Header row */}
              <div className="grid grid-cols-4 gap-3 mb-3">
                <div />
                {COMPARISON.columns.map((col) => (
                  <div
                    key={col.name}
                    className={`rounded-2xl px-4 py-4 text-center ${col.header} ${col.highlight ? "" : ""}`}
                  >
                    <p className={`font-bold text-sm ${col.highlight ? "text-white" : "text-slate-800"}`}>
                      {col.name}
                    </p>
                    <p className={`text-xs mt-0.5 ${col.highlight ? "text-teal-100" : "text-slate-500"}`}>
                      {col.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              {/* Criteria rows */}
              {COMPARISON.criteria.map((criterion, ri) => (
                <motion.div
                  key={criterion}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ri * 0.05 }}
                  className="grid grid-cols-4 gap-3 mb-2"
                >
                  <div className="flex items-center text-sm font-medium text-slate-700 bg-slate-50 rounded-xl px-4 py-3">
                    {criterion}
                  </div>
                  {COMPARISON.columns.map((col, ci) => (
                    <div
                      key={ci}
                      className={`flex items-center gap-2 rounded-xl px-4 py-3 text-xs font-medium ${
                        col.highlight
                          ? "bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200"
                          : "bg-slate-50 border border-slate-100"
                      }`}
                    >
                      <ComparisonIcon type={col.values[ri].type} />
                      <span className={col.highlight ? "text-slate-800 font-semibold" : "text-slate-600"}>
                        {col.values[ri].text}
                      </span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-teal-500/25 transition-all"
            >
              Get Started with Infonza <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          4. ROLES WE PROVIDE
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Roles We Provide</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Pre-vetted engineers across every role
            </h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              From frontend specialists to AI engineers — all assessed for technical depth,
              communication, and delivery cadence.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {ROLES.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px -8px rgba(13,148,136,0.15)" }}
                  className={`bg-gradient-to-br ${role.color} border rounded-2xl p-5 cursor-default transition-all`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${role.iconColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{role.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">{role.exp} experience</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {role.techs.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded-md bg-white/70 text-xs text-slate-700 font-medium border border-white/80">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Availability</span>
                    <span className={`font-semibold ${role.avail === "Immediate" ? "text-emerald-600" : "text-teal-600"}`}>
                      {role.avail}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          5. ENGAGEMENT MODELS
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Engagement Models</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Work the way your project demands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {ENGAGEMENT_MODELS.map((model, i) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className={`relative rounded-3xl border p-7 transition-all ${
                    model.highlight
                      ? "bg-gradient-to-br from-teal-600 to-blue-600 border-teal-500 text-white shadow-xl shadow-teal-500/25"
                      : "bg-white border-slate-200 hover:border-teal-300 hover:shadow-lg"
                  }`}
                >
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-4 ${model.highlight ? "bg-white/20 text-white" : model.tagColor}`}>
                    {model.tag}
                  </span>

                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${model.highlight ? "bg-white/20" : "bg-teal-50"}`}>
                    <Icon className={`w-5 h-5 ${model.highlight ? "text-white" : "text-teal-600"}`} />
                  </div>

                  <h3 className={`font-bold text-lg mb-2 ${model.highlight ? "text-white" : "text-slate-900"}`}>
                    {model.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-5 ${model.highlight ? "text-teal-100" : "text-slate-500"}`}>
                    {model.description}
                  </p>

                  <div className={`space-y-2.5 text-xs ${model.highlight ? "text-teal-100" : "text-slate-500"}`}>
                    {[
                      { label: "Best for", value: model.useCase },
                      { label: "Team", value: model.structure },
                      { label: "Pricing", value: model.pricing },
                      { label: "Scale", value: model.scale },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex gap-2">
                        <span className={`font-semibold flex-shrink-0 w-14 ${model.highlight ? "text-white" : "text-slate-700"}`}>
                          {label}
                        </span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          6. HIRING PROCESS
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Hiring Process</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              From requirement to first commit in days
            </h2>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* connector line */}
              <div className="absolute top-9 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-400 via-blue-400 to-teal-400 opacity-30" />

              <div className="grid grid-cols-5 gap-4">
                {PROCESS_STEPS.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Circle */}
                    <div className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-white border-2 border-teal-200 flex flex-col items-center justify-center shadow-sm mb-5 group hover:border-teal-500 hover:shadow-teal-500/15 hover:shadow-md transition-all">
                      <span className="text-2xl mb-0.5">{s.icon}</span>
                      <span className="text-[10px] font-bold text-teal-600">{s.step}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-2">{s.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden space-y-5">
            {PROCESS_STEPS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 bg-white border border-slate-200 rounded-2xl p-5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex flex-col items-center justify-center">
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-[10px] font-bold text-teal-600">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          7. TECH STACK (Tabbed)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel>Tech Stack</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Deep expertise across the full stack
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.keys(TECH_STACK).map((tab) => {
              const { icon: TabIcon, color, bg, border } = TECH_STACK[tab];
              const isActive = activeTechTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTechTab(tab)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                    isActive
                      ? `${bg} ${border} ${color} shadow-sm`
                      : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? color : "text-slate-400"}`} />
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Tech grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTechTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3"
            >
              {TECH_STACK[activeTechTab].techs.map((tech, i) => {
                const { color, bg, border } = TECH_STACK[activeTechTab];
                return (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`${bg} ${border} border rounded-2xl px-4 py-5 text-center hover:shadow-md transition-all`}
                  >
                    <div className={`text-lg font-bold ${color} mb-1`}>
                      {["Frontend", "AI"].includes(activeTechTab) ? "⚡" :
                        activeTechTab === "Backend" ? "⚙️" :
                        activeTechTab === "Database" ? "🗄️" :
                        activeTechTab === "Cloud" ? "☁️" : "📱"}
                    </div>
                    <p className="text-xs font-semibold text-slate-700 leading-snug">{tech}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          8. INDUSTRY EXPERTISE
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Industry Expertise</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Domain knowledge, not just developers
            </h2>
            <p className="text-slate-500 mt-3 leading-relaxed">
              We&apos;ve built production systems across these industries —
              our engineers understand the domain, not just the stack.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map(({ icon: Icon, title, color, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-200 hover:shadow-lg transition-all"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          9. CASE STUDIES
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Real teams. Real outcomes.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES_MINI.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all group"
              >
                {/* Gradient header */}
                <div className={`bg-gradient-to-br ${cs.gradient} p-6`}>
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                    {cs.tag}
                  </p>
                  <h3 className="text-lg font-bold text-white">{cs.title}</h3>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 border-b border-slate-100">
                  {[cs.metric1, cs.metric2].map((m, j) => (
                    <div key={j} className={`px-5 py-4 ${j === 0 ? "border-r border-slate-100" : ""}`}>
                      <div className="text-xl font-bold text-slate-900">{m.value}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Points */}
                <div className="p-5 space-y-2.5">
                  {cs.points.map((pt, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <HiCheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {pt}
                    </div>
                  ))}
                </div>

                <div className="px-5 pb-5">
                  <Link
                    href="/case-studies"
                    className="text-xs font-semibold text-teal-600 group-hover:text-teal-700 flex items-center gap-1"
                  >
                    Read full case study <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          10. WHY INDIA
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-teal-400" />
              Why India
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The world&apos;s engineering hub — at your timezone
            </h2>
            <p className="text-slate-400 mt-3 leading-relaxed">
              India has been the backbone of global tech delivery for 25+ years.
              Here&apos;s why it still makes strategic sense.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WHY_INDIA.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-teal-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          11. TESTIMONIALS
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Client Testimonials</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              What our clients say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-7 hover:shadow-md hover:border-teal-200 transition-all"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <HiStar key={j} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-sm text-slate-600 leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          12. FAQ
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Questions we hear most
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-900 text-sm leading-snug">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                  >
                    <HiChevronDown className={`w-5 h-5 transition-colors ${openFaq === i ? "text-teal-600" : "text-slate-400"}`} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          13. FINAL CTA
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-teal-600 via-teal-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Developers available — hire within 48 hours
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Build Your Remote Engineering
              <br />
              Team with Infonza
            </h2>
            <p className="text-teal-100 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Stop losing months to slow hiring. Talk to us today and have your
              first vetted engineer ready to sprint within the week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-700 font-bold hover:bg-teal-50 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Book Free Consultation <HiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 hover:border-white/70 hover:-translate-y-0.5 transition-all"
              >
                Hire Dedicated Developers
              </Link>
            </div>

            {/* Bottom trust row */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-teal-100 text-xs font-medium">
              {["No lock-in contracts", "2-week trial period", "NDA on day one", "Dedicated PM included"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <HiCheckCircle className="w-4 h-4 text-teal-300" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
