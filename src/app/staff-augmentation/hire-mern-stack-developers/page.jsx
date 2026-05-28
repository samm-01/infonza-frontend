"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiUsers,
  HiClock,
  HiStar,
  HiCodeBracket,
  HiShieldCheck,
  HiBolt,
  HiGlobeAlt,
  HiRocketLaunch,
  HiChevronDown,
  HiCurrencyDollar,
  HiCommandLine,
  HiCircleStack,
  HiCube,
  HiSparkles,
} from "react-icons/hi2";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  BookingSection,
  BookingBanner,
  FloatingBookingButton,
  BOOKING_URL,
} from "../../components/booking-cta";
import {
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildHowToSchema,
} from "../_utils/schema-builders";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════════ */

const SKILLS = [
  "MongoDB", "Express.js", "React 18", "Node.js",
  "TypeScript", "REST APIs", "GraphQL", "JWT / OAuth2",
  "AWS / Vercel / Railway", "Docker", "Mongoose", "Redux Toolkit",
  "Next.js", "Socket.io", "Jest", "Stripe Integration",
];

const RESULTS = [
  { value: "3 days", label: "Placement Speed", icon: HiClock },
  { value: "120+", label: "MERN Projects Delivered", icon: HiRocketLaunch },
  { value: "100%", label: "End-to-End Delivery", icon: HiCheckCircle },
  { value: "4.9/5", label: "Client Satisfaction", icon: HiStar },
];

const WHAT_OWNERSHIP_MEANS = [
  {
    layer: "Database",
    tech: "MongoDB / Mongoose",
    desc: "Schema design, indexing strategy, aggregation pipelines, and backup configuration — built for performance at scale.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    layer: "API Layer",
    tech: "Node.js / Express.js",
    desc: "RESTful and GraphQL APIs with authentication middleware, rate limiting, file upload handling, and comprehensive error responses.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    layer: "Frontend",
    tech: "React 18 / Next.js",
    desc: "Pixel-perfect, accessible UIs with server-side rendering, optimistic updates, and seamless API integration.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    layer: "Auth & Security",
    tech: "JWT / OAuth2 / NextAuth",
    desc: "Multi-role authentication flows, refresh token rotation, social login, and session management built to OWASP standards.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    layer: "Deployment",
    tech: "AWS / Vercel / Railway",
    desc: "CI/CD pipelines, environment management, domain configuration, SSL, and monitoring setup — production-ready on launch day.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Solo Full-Stack Engineer",
    subtitle: "One engineer, full product",
    desc: "A senior MERN developer who owns your entire application — from MongoDB schema to React UI. Ideal for MVPs, feature sprints, and scaling an early-stage product.",
    features: ["Full product ownership", "40 hrs/week dedicated", "Daily progress updates", "Direct communication"],
    badge: "Most Popular",
    highlight: true,
  },
  {
    title: "Team Lead + Engineers",
    subtitle: "Lead who builds + delegates",
    desc: "A senior MERN lead paired with 1–2 additional engineers. Suitable when delivery velocity matters and you need multiple parallel workstreams.",
    features: ["Managed team structure", "Lead handles technical decisions", "Sprint-based delivery", "Code reviews included"],
    badge: null,
    highlight: false,
  },
  {
    title: "Project-Based Delivery",
    subtitle: "Fixed scope, defined timeline",
    desc: "Full MERN product built and delivered against agreed milestones. Perfect for an MVP launch, legacy modernization, or a new product line.",
    features: ["Fixed price options", "Milestone payments", "Full handover & docs", "60-day post-launch support"],
    badge: null,
    highlight: false,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Share Your Brief",
    desc: "Describe your product, tech requirements, and timeline. Tell us if you need a solo engineer or a small team.",
  },
  {
    step: "02",
    title: "Profiles in 24h",
    desc: "We match and send MERN developer profiles within 24 hours — each profile includes their GitHub, past projects, and tech breakdown.",
  },
  {
    step: "03",
    title: "Technical Interview",
    desc: "Your interview, your questions. We guarantee candidates are pre-screened on both frontend and backend depth.",
  },
  {
    step: "04",
    title: "Trial Sprint",
    desc: "Start with a 1-week paid trial sprint. See real code quality and communication before making a longer commitment.",
  },
  {
    step: "05",
    title: "Onboard & Ship",
    desc: "Developer joins your workflow within 3 days. First feature shipped by end of first sprint.",
  },
];

const WHY_INFONZA = [
  {
    icon: HiCube,
    title: "Genuine Full-Stack Depth",
    desc: "Our MERN developers aren't \"full-stack\" in name only. We verify both frontend and backend capability through separate technical assessments for each layer.",
  },
  {
    icon: HiShieldCheck,
    title: "Product Thinking, Not Just Coding",
    desc: "Senior MERN engineers ask why before they code. They push back on poor technical decisions and flag scope risks early — acting as a technical partner, not just an executor.",
  },
  {
    icon: HiGlobeAlt,
    title: "US & EU Timezone Coverage",
    desc: "Timezone-matched working hours with US EST and EU CET windows. Your MERN engineer attends your standups in real time.",
  },
  {
    icon: HiShieldCheck,
    title: "IP Assignment & NDA",
    desc: "All source code, database schemas, and API designs created during the engagement are assigned to your company under our standard IP agreement.",
  },
  {
    icon: HiRocketLaunch,
    title: "MVPs Shipped in Weeks",
    desc: "Our MERN engineers have shipped over 120 production applications. They know how to prioritize, cut scope intelligently, and launch without over-engineering.",
  },
];

const FAQS = [
  {
    q: "What can a MERN stack developer build independently?",
    a: "A senior MERN developer can independently plan, architect, build, and deploy a full web application — including the MongoDB database, Express/Node.js backend API, React/Next.js frontend, authentication system, third-party integrations (Stripe, SendGrid, etc.), and production deployment on AWS, Vercel, or Railway.",
  },
  {
    q: "Can a MERN developer work as a solo engineer on my product?",
    a: "Yes, and this is our most common engagement model. Solo senior MERN engineers are ideal for startups and early-stage products that need full product ownership without the overhead of a large team. They work directly with founders, communicate daily, and ship across the full stack.",
  },
  {
    q: "How do you assess MERN stack depth — both frontend and backend?",
    a: "Our vetting process includes separate assessments for React (component architecture, state management, performance optimization) and Node.js (API design, database modeling, auth patterns). A candidate must pass both to be classified as a MERN developer on our bench.",
  },
  {
    q: "Can MERN developers handle deployment and DevOps?",
    a: "Senior MERN developers typically handle basic deployment on Vercel, Railway, or AWS Elastic Beanstalk — including CI/CD pipeline setup, environment variable management, and domain configuration. For Kubernetes, advanced infrastructure, or multi-cloud environments, we recommend pairing with a DevOps engineer.",
  },
  {
    q: "What's included in the 60-day post-launch support for project-based engagements?",
    a: "Post-launch support covers bug fixes, minor feature adjustments (under 4 hours per issue), performance monitoring, and emergency patches for critical production issues. It does not cover net-new feature development, which would require a new engagement scope.",
  },
];

const RELATED = [
  {
    title: "Hire React Developers",
    desc: "Frontend-specialized React engineers for UI-heavy workloads.",
    href: "/staff-augmentation/hire-react-developers",
    icon: HiCodeBracket,
  },
  {
    title: "Hire Node.js Developers",
    desc: "Backend-focused Node.js engineers for API and microservices work.",
    href: "/staff-augmentation/hire-nodejs-developers",
    icon: HiCommandLine,
  },
  {
    title: "B2B SaaS Development",
    desc: "End-to-end MERN-powered SaaS product development for B2B companies.",
    href: "/saas-development/b2b-saas-development",
    icon: HiRocketLaunch,
  },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div key={i} {...fadeUp(i)} className="border border-slate-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
          >
            <span className="font-semibold text-slate-900">{item.q}</span>
            <HiChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100">
              {item.a}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ── Structured data ──────────────────────────────────────────────────────── */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = buildServiceSchema({
  slug: "hire-mern-stack-developers",
  techDisplay: "MERN Stack Developers",
  heroSubtitle: "Senior MERN Stack engineers — full-stack ownership of MongoDB, Express.js, React, and Node.js — available within 72 hours. Pre-vetted, NDA-protected, and backed by a 2-week replacement guarantee.",
  priceNumeric: "35",
  skills: SKILLS,
});

const breadcrumbSchema = buildBreadcrumbSchema({
  slug: "hire-mern-stack-developers",
  techDisplay: "MERN Stack Developers",
});

const howToSchema = buildHowToSchema({
  tech: "MERN Stack",
  techDisplay: "MERN Stack Developers",
  placementTime: "72h",
});

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */
export default function HireMernStackDevelopersPage() {
  return (
    <>
      <Script
        id="faq-jsonld-mern"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="service-jsonld-mern"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-jsonld-mern"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="howto-jsonld-mern"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-teal-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/staff-augmentation" className="hover:text-teal-400 transition-colors">Staff Augmentation</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Hire MERN Stack Developers</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700/40 rounded-full px-4 py-1.5 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiBolt className="w-3.5 h-3.5" />
                3-Day Placement
              </motion.div>

              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6">
                Hire Dedicated{" "}
                <span className="text-gradient">MERN Stack Developers</span>
              </motion.h1>

              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 leading-relaxed mb-8">
                Full-stack MERN engineers who own every layer — MongoDB schema to React UI. 120+ production applications delivered. Available in 3 days, built for full product ownership.
              </motion.p>

              <motion.div {...fadeUp(3)} className="flex items-center gap-3 mb-8">
                <span className="text-2xl font-bold text-white">From $35<span className="text-base font-normal text-slate-400">/hr</span></span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400 text-sm">Solo engineers or small teams available.</span>
              </motion.div>

              <motion.div {...fadeUp(4)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Hire a MERN Developer
                  <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  Discuss Your Project
                </Link>
              </motion.div>
            </div>

            {/* Right — Stack visual */}
            <motion.div {...fadeUp(2)}>
              <div className="bg-slate-800/70 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Full Stack Coverage</span>
                  <span className="text-xs bg-blue-900/60 text-blue-300 border border-blue-700/40 rounded-full px-3 py-1">M · E · R · N</span>
                </div>
                {[
                  { layer: "M — MongoDB", desc: "Schema design, indexing, aggregation", color: "text-green-400" },
                  { layer: "E — Express.js", desc: "REST/GraphQL APIs, middleware, auth", color: "text-yellow-400" },
                  { layer: "R — React / Next.js", desc: "SSR, CSR, UI components, state mgmt", color: "text-sky-400" },
                  { layer: "N — Node.js", desc: "Runtime, async I/O, real-time, queues", color: "text-lime-400" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${i < 3 ? "border-b border-slate-700/40 mb-2" : ""}`}>
                    <span className={`text-sm font-bold ${item.color} w-36 flex-shrink-0`}>{item.layer}</span>
                    <span className="text-slate-400 text-sm">{item.desc}</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-700/40 flex items-center gap-2">
                  <HiCheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span className="text-teal-300 text-xs font-semibold">Full product ownership — solo or as team lead</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="bg-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i)} className="text-center">
                <r.icon className="w-7 h-7 text-teal-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{r.value}</div>
                <div className="text-sm text-slate-500">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL STACK OWNERSHIP ── */}
      <section className="bg-dots py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What <span className="text-gradient">Full Product Ownership</span> Looks Like
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Unlike front-end-only or backend-only hires, a MERN developer owns every layer of your application — no hand-offs, no gaps, no blame shifting.
            </p>
          </motion.div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {WHAT_OWNERSHIP_MEANS.map((item, i) => (
              <motion.div key={item.layer} {...fadeUp(i)} className={`flex items-start gap-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm`}>
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-xs font-bold ${item.color}`}>{item.layer}</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">{item.tech}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK CHIPS ── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...fadeUp(0)} className="text-2xl font-bold text-slate-900 mb-8">Technology Coverage</motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill, i) => (
              <motion.span
                key={skill}
                {...fadeUp(i * 0.4)}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium shadow-sm hover:border-teal-400 hover:text-teal-700 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ── */}
      <section className="bg-slate-900 py-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Engagement <span className="text-gradient">Options</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">Solo full-stack engineer, lead + team, or scoped project delivery — your call.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <motion.div
                key={model.title}
                {...fadeUp(i)}
                className={`relative rounded-2xl p-7 border ${model.highlight ? "bg-gradient-to-br from-teal-900/60 to-blue-900/60 border-teal-600/50" : "bg-slate-800/50 border-slate-700/50"}`}
              >
                {model.badge && (
                  <span className="absolute -top-3 left-6 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {model.badge}
                  </span>
                )}
                <div className="text-sm font-semibold text-teal-400 mb-1">{model.subtitle}</div>
                <h3 className="text-xl font-bold text-white mb-3">{model.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{model.desc}</p>
                <ul className="space-y-2">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <HiCheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp(3)} className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 text-slate-400 text-sm bg-slate-800/50 border border-slate-700/50 rounded-full px-6 py-3">
              <HiCurrencyDollar className="w-4 h-4 text-teal-500" />
              Starting from <strong className="text-white ml-1">$35/hour</strong> · No placement fees · Month-to-month contracts
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HIRING PROCESS ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              MERN Developer on Your Team in <span className="text-gradient">3 Days</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">No long sourcing cycles. Our MERN bench is pre-assessed and ready to be matched.</p>
          </motion.div>
          <div className="grid lg:grid-cols-5 gap-8 relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600/20 via-teal-600/60 to-blue-600/20 mx-32" />
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} {...fadeUp(i)} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/20">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INFONZA ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why <span className="text-gradient">Infonza MERN Engineers</span> Deliver More
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_INFONZA.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Ready to build your full-stack product?"
            subheading="Tell us your idea and we'll match you with a senior MERN engineer in 3 days."
            cta="Start Building Now"
          />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Related Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i)}>
                <Link href={item.href} className="group block bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-teal-400 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <span className="text-teal-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <HiArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* ── BOOKING SECTION ── */}
      <BookingSection
        badge="Hire in 72 Hours"
        heading="Find Your Perfect MERN Developer Today"
        subheading="From database to deployment — one senior engineer to own your entire product. Share your brief and get profiles in 24 hours."
        primaryCTA="Get Matching Profiles"
        secondaryCTA="Talk to Our Team"
        stats={[
          { value: "3 days", label: "Placement speed" },
          { value: "120+", label: "MERN apps delivered" },
          { value: "$35/hr", label: "Starting rate" },
        ]}
        trustItems={[
          "Full-stack depth verified",
          "IP assignment included",
          "60-day post-launch support on projects",
        ]}
      />

      <Footer />
      <FloatingBookingButton label="Hire MERN Dev" />
    </>
  );
}
