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
  HiServer,
  HiCpuChip,
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
  "Node.js", "Express.js", "Fastify", "NestJS",
  "TypeScript", "PostgreSQL", "MongoDB", "Redis",
  "Docker", "REST APIs", "GraphQL", "AWS Lambda",
  "Socket.io", "BullMQ", "Prisma ORM", "Elasticsearch",
];

const RESULTS = [
  { value: "48h", label: "Placement Speed", icon: HiClock },
  { value: "5+", label: "Avg Years Experience", icon: HiStar },
  { value: "100+", label: "APIs Delivered", icon: HiServer },
  { value: "99.9%", label: "API Uptime Delivered", icon: HiRocketLaunch },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Full-Time",
    hours: "40 hrs/week",
    desc: "Dedicated Node.js engineer embedded in your team — attending standups, committed to your sprint velocity, and available during your core hours.",
    features: ["Dedicated to your team only", "Daily async + sync updates", "Sprint planning participation", "US/EU timezone overlap"],
    badge: "Most Popular",
    highlight: true,
  },
  {
    title: "Part-Time",
    hours: "20 hrs/week",
    desc: "A senior backend engineer working focused hours on your API layer — ideal for API optimization, new endpoint buildout, or database migrations.",
    features: ["Flexible scheduling", "Weekly sprint check-ins", "Async-first workflow", "Upgradeable to full-time"],
    badge: null,
    highlight: false,
  },
  {
    title: "Project-Based",
    hours: "Scoped deliverables",
    desc: "Fixed-scope backend engagement: REST/GraphQL API build, microservices migration, or database schema redesign with clear milestones.",
    features: ["Defined scope & milestones", "Milestone-based billing", "Post-delivery handoff docs", "30-day bug warranty"],
    badge: null,
    highlight: false,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Share Requirements",
    desc: "Describe your backend stack, API complexity, database needs, and performance targets. Takes under 5 minutes.",
  },
  {
    step: "02",
    title: "Profiles in 24h",
    desc: "We deliver 2–3 matched Node.js engineer profiles within 24 hours — pre-screened for your exact stack.",
  },
  {
    step: "03",
    title: "Technical Interview",
    desc: "Run your own interview. All candidates have passed our backend system design, API architecture, and database optimization evaluations.",
  },
  {
    step: "04",
    title: "Trial Sprint",
    desc: "Start with a one-week paid trial. Validate the engineer's performance in your actual codebase before committing.",
  },
  {
    step: "05",
    title: "Active from Day One",
    desc: "Engineer joins your repo, Jira, and Slack. First PR submitted within 48 hours of onboarding. Fully ramped in one sprint.",
  },
];

const WHY_INFONZA = [
  {
    icon: HiShieldCheck,
    title: "Backend-Specialized Vetting",
    desc: "Our Node.js candidates pass system design interviews covering API rate limiting, caching strategies, database indexing, and async concurrency — not just syntax quizzes.",
  },
  {
    icon: HiServer,
    title: "Production-Ready Engineers",
    desc: "Every engineer has shipped Node.js services handling real traffic — not just tutorial CRUD apps. We verify GitHub profiles and deployed project links.",
  },
  {
    icon: HiGlobeAlt,
    title: "US Timezone Overlap",
    desc: "Our engineers adjust working hours to align with your team's core collaboration window — 8 AM–12 PM EST or 9 AM–1 PM PST as needed.",
  },
  {
    icon: HiShieldCheck,
    title: "NDA & Source Code Protection",
    desc: "All engagements start with a mutual NDA. Your API logic, database schemas, and business rules are fully confidential and IP-assigned to you.",
  },
  {
    icon: HiBolt,
    title: "48-Hour Replacement SLA",
    desc: "If a Node.js engineer isn't delivering within the first two weeks, we replace them within 48 hours — no friction, no extra cost.",
  },
];

const WHAT_THEY_BUILD = [
  {
    title: "REST & GraphQL APIs",
    desc: "High-throughput APIs with rate limiting, auth middleware, pagination, and comprehensive error handling — documented with Swagger.",
  },
  {
    title: "Microservices Architecture",
    desc: "Decomposed service meshes with message queues (BullMQ, RabbitMQ), gRPC, and inter-service authentication.",
  },
  {
    title: "Real-Time Systems",
    desc: "WebSocket-based applications with Socket.io — live dashboards, chat, collaborative tools, and real-time notifications.",
  },
  {
    title: "Serverless Functions",
    desc: "AWS Lambda, Google Cloud Functions, and Vercel Edge Functions optimized for cold-start performance and cost efficiency.",
  },
  {
    title: "Database Engineering",
    desc: "Schema design, index optimization, query tuning, and migration management across PostgreSQL, MongoDB, and Redis.",
  },
  {
    title: "Third-Party Integrations",
    desc: "Stripe, Twilio, SendGrid, Salesforce, HubSpot, Plaid, and 50+ other APIs integrated with retry logic and webhook handling.",
  },
];

const FAQS = [
  {
    q: "What seniority levels are available for Node.js engineers?",
    a: "We place mid-level (3–5 years), senior (5–8 years), and lead (8+ years) Node.js engineers. We do not staff juniors for client engagements. All candidates have shipped production APIs with measurable traffic.",
  },
  {
    q: "Can the Node.js developer work with our existing backend codebase?",
    a: "Yes. Our engineers are experienced in inheriting and extending existing codebases, not just greenfield builds. During the selection process, we share your repo structure (under NDA) so candidates can assess fit before the interview.",
  },
  {
    q: "Do your Node.js engineers have DevOps and deployment skills?",
    a: "Most senior Node.js engineers on our bench have hands-on Docker and AWS/GCP experience — deploying containers, writing CI/CD pipelines, and configuring load balancers. If you need dedicated DevOps, we can supplement with a DevOps engineer.",
  },
  {
    q: "What databases do your Node.js developers specialize in?",
    a: "Our engineers cover relational (PostgreSQL, MySQL), NoSQL (MongoDB, DynamoDB), in-memory (Redis), and search (Elasticsearch). Most have worked across multiple database types and can advise on the right choice for your use case.",
  },
  {
    q: "How do you ensure the API code quality meets production standards?",
    a: "During vetting, we review candidates' GitHub contributions and past projects. For active engagements, we recommend code review workflows where our senior engineers review each other's PRs. We also offer optional architecture review sessions at engagement start.",
  },
];

const RELATED = [
  {
    title: "Hire React Developers",
    desc: "Frontend engineers for the UI layer that calls your Node.js APIs.",
    href: "/staff-augmentation/hire-react-developers",
    icon: HiCodeBracket,
  },
  {
    title: "Hire MERN Stack Developers",
    desc: "Full-stack engineers who own the entire MongoDB-Express-React-Node stack.",
    href: "/staff-augmentation/hire-mern-stack-developers",
    icon: HiCommandLine,
  },
  {
    title: "SaaS Development",
    desc: "End-to-end SaaS product engineering using Node.js backends and React frontends.",
    href: "/saas-development",
    icon: HiRocketLaunch,
  },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

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
  slug: "hire-nodejs-developers",
  techDisplay: "Node.js Developers",
  heroSubtitle: "Senior Node.js engineers — 4+ years with Express, NestJS, and REST/GraphQL API development — available to join your team within 48 hours. Vetted, NDA-protected, and backed by a 2-week replacement guarantee.",
  priceNumeric: "35",
  skills: SKILLS,
});

const breadcrumbSchema = buildBreadcrumbSchema({
  slug: "hire-nodejs-developers",
  techDisplay: "Node.js Developers",
});

const howToSchema = buildHowToSchema({
  tech: "Node.js",
  techDisplay: "Node.js Developers",
  placementTime: "48h",
});

function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div key={i} {...fadeUp(i)} className="border border-slate-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
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

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */
export default function HireNodejsDevelopersPage() {
  return (
    <>
      <Script
        id="faq-jsonld-nodejs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="service-jsonld-nodejs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-jsonld-nodejs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="howto-jsonld-nodejs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-green-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-teal-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/staff-augmentation" className="hover:text-teal-400 transition-colors">Staff Augmentation</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Hire Node.js Developers</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-green-900/60 border border-green-700/40 rounded-full px-4 py-1.5 text-green-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiBolt className="w-3.5 h-3.5" />
                Available in 48 Hours
              </motion.div>

              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6">
                Hire Dedicated{" "}
                <span className="text-gradient">Node.js Developers</span>
              </motion.h1>

              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 leading-relaxed mb-8">
                Senior backend engineers with 5+ years building production Node.js APIs, microservices, and real-time systems. Available in 48 hours — pre-vetted, NDA-protected, replaceable if not the right fit.
              </motion.p>

              <motion.div {...fadeUp(3)} className="flex items-center gap-3 mb-8">
                <span className="text-2xl font-bold text-white">From $35<span className="text-base font-normal text-slate-400">/hr</span></span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400 text-sm">No placement fee. Month-to-month contracts.</span>
              </motion.div>

              <motion.div {...fadeUp(4)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Hire a Node.js Developer
                  <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  Talk to Our Team
                </Link>
              </motion.div>
            </div>

            {/* Right — availability panel */}
            <motion.div {...fadeUp(2)}>
              <div className="bg-slate-800/70 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-green-400 uppercase tracking-widest">Available Engineers</span>
                  <span className="text-xs bg-green-900/60 text-green-300 border border-green-700/40 rounded-full px-3 py-1">4 available now</span>
                </div>
                {[
                  { name: "Senior Node.js / NestJS Engineer", exp: "7 years", skills: ["NestJS", "PostgreSQL", "Redis"], status: "Available in 24h" },
                  { name: "Backend API Architect", exp: "9 years", skills: ["Microservices", "GraphQL", "Docker"], status: "Available in 48h" },
                  { name: "Node.js + AWS Lambda Specialist", exp: "5 years", skills: ["Lambda", "DynamoDB", "SQS"], status: "Available in 48h" },
                ].map((dev, i) => (
                  <div key={i} className={`flex items-start gap-4 p-4 rounded-xl ${i < 2 ? "border-b border-slate-700/40 mb-3 pb-4" : ""}`}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {dev.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-white font-semibold text-sm">{dev.name}</span>
                        <span className="text-slate-400 text-xs flex-shrink-0">{dev.exp}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {dev.skills.map((s) => (
                          <span key={s} className="text-xs bg-slate-700/60 text-slate-300 rounded px-2 py-0.5">{s}</span>
                        ))}
                      </div>
                      <span className="text-xs text-green-400 font-medium">✓ {dev.status}</span>
                    </div>
                  </div>
                ))}
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

      {/* ── WHAT THEY BUILD ── */}
      <section className="bg-dots py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our Node.js Engineers <span className="text-gradient">Build & Deliver</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Backend systems that scale. Not tutorial APIs — production services handling real traffic for real businesses.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_THEY_BUILD.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <HiCheckCircle className="w-6 h-6 text-teal-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK CHIPS ── */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 {...fadeUp(0)} className="text-2xl font-bold text-slate-900 mb-8">Full Technology Coverage</motion.h2>
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
              Flexible <span className="text-gradient">Engagement Models</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">From a single backend engineer to a full API team. Scale as your product grows.</p>
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
                <div className="text-sm font-semibold text-teal-400 mb-1">{model.hours}</div>
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
              Your Developer, Live in <span className="text-gradient">48 Hours</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Skip the recruiter queue. Our pre-vetted bench means you meet qualified candidates immediately.</p>
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
              Why CTOs Trust <span className="text-gradient">Infonza for Backend Talent</span>
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
            heading="Need a backend engineer fast?"
            subheading="Send your brief and receive matched Node.js developer profiles within 24 hours."
            cta="Get Profiles Now"
          />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Related Services</h2>
            <p className="text-slate-500">Explore frontend, full-stack, and product engineering capabilities.</p>
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
        badge="Hire in 48 Hours"
        heading="Find Your Perfect Node.js Developer Today"
        subheading="Share your backend requirements and we'll introduce you to senior, vetted Node.js engineers within 24 hours."
        primaryCTA="Get Matching Profiles"
        secondaryCTA="Talk to Our Team"
        stats={[
          { value: "48h", label: "Placement speed" },
          { value: "$35/hr", label: "Starting rate" },
          { value: "5+", label: "Avg years exp." },
        ]}
        trustItems={[
          "Backend system design assessment",
          "NDA signed before discussion",
          "2-week replacement guarantee",
        ]}
      />

      <Footer />
      <FloatingBookingButton label="Hire Node.js Dev" />
    </>
  );
}
