"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiUsers,
  HiBolt,
  HiShieldCheck,
  HiCog6Tooth,
  HiChartBarSquare,
  HiCodeBracket,
  HiClock,
  HiCurrencyDollar,
  HiStar,
  HiCommandLine,
  HiCpuChip,
  HiDevicePhoneMobile,
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

const TEAM_COMPOSITIONS = [
  {
    icon: HiCodeBracket,
    title: "Frontend Team",
    members: 3,
    roles: ["Senior React Developer", "Mid React Developer", "UI/UX Designer"],
    best: "SaaS dashboards, customer-facing products, design-system work",
  },
  {
    icon: HiCog6Tooth,
    title: "Full-Stack Product Team",
    members: 5,
    roles: ["Tech Lead", "Senior Full-Stack Dev", "Mid Full-Stack Dev", "QA Engineer", "UI/UX Designer"],
    best: "End-to-end product development, SaaS MVPs, platform builds",
  },
  {
    icon: HiCpuChip,
    title: "AI / ML Team",
    members: 3,
    roles: ["Senior AI/ML Engineer", "Backend Engineer (API)", "MLOps / DevOps Engineer"],
    best: "LLM applications, RAG pipelines, ML model deployment",
  },
  {
    icon: HiDevicePhoneMobile,
    title: "Mobile Team",
    members: 3,
    roles: ["Senior React Native Developer", "Mid React Native Developer", "QA Engineer (Mobile)"],
    best: "iOS and Android apps, cross-platform mobile products",
  },
];

const WHY_DEDICATED = [
  {
    icon: HiUsers,
    title: "Team Cohesion",
    desc: "Freelancers work in isolation. Your dedicated team builds shared context over sprints — architecture decisions, codebase knowledge, and product intuition compound over time.",
  },
  {
    icon: HiChartBarSquare,
    title: "Sprint-Based Velocity",
    desc: "A team that plans together and ships together delivers predictably. Sprint planning, daily standups, retrospectives, and weekly demos keep delivery on track without micromanagement.",
  },
  {
    icon: HiShieldCheck,
    title: "Accountability at Every Layer",
    desc: "Tech Lead owns architecture and code quality. QA owns test coverage. Project Lead owns communication. No single point of failure — the team is the contract.",
  },
  {
    icon: HiClock,
    title: "No Recruitment Overhead",
    desc: "Assembling an in-house team takes 6–9 months. Your dedicated team is assembled and onboarded within 72 hours — ready for sprint 1 before a job posting would even close.",
  },
  {
    icon: HiCurrencyDollar,
    title: "50% Lower Cost",
    desc: "A 5-person US-based team costs $600K–$800K per year in salary, benefits, and overhead. The same team composition from Infonza runs at $13,500/month — without quality compromise.",
  },
  {
    icon: HiBolt,
    title: "Scales Up and Down",
    desc: "Add a developer for a feature sprint, remove one after launch. Dedicated teams adjust to your product stage without severance, notice periods, or HR involvement.",
  },
];

const WHATS_INCLUDED = [
  "Daily async standup updates in your project management tool",
  "Sprint planning and backlog grooming every two weeks",
  "Code reviews on every pull request — no unreviewed code goes to main",
  "Technical documentation updated at the end of every sprint",
  "Weekly client demo call — 30 minutes, async recording available",
  "Monthly retrospective and velocity report",
  "Architecture decision records for significant technical choices",
  "NDA and IP assignment agreement before any code is written",
];

const ENGAGEMENT_MODELS = [
  {
    title: "Small Team",
    size: "3 members",
    price: "from $8,500/mo",
    desc: "Frontend-focused or specialist team — ideal for adding a product track without building an in-house team.",
    composition: "Senior Dev + Mid Dev + QA",
    highlight: false,
  },
  {
    title: "Standard Team",
    size: "5 members",
    price: "from $13,500/mo",
    desc: "Full product team with Tech Lead, developers, QA, and Designer. The most common configuration for SaaS and platform builds.",
    composition: "Tech Lead + 2 Devs + QA + Designer",
    highlight: true,
  },
  {
    title: "Enterprise Team",
    size: "8+ members",
    price: "Custom pricing",
    desc: "Large-scale product organisation with multiple specialisations — frontend, backend, AI, mobile, and DevOps in a single managed team.",
    composition: "Customised to product needs",
    highlight: false,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Define Scope & Team Needs",
    desc: "We run a 30-minute requirements call to understand your product, tech stack, team culture, and timezone requirements. Output: a team composition recommendation and engagement proposal.",
  },
  {
    step: "02",
    title: "Team Assembly (72 hours)",
    desc: "We match your requirements against our vetted engineering bench. You review individual profiles, interview any team member, and approve the composition before we proceed.",
  },
  {
    step: "03",
    title: "Onboarding & Sprint Planning",
    desc: "The team gets access to your repos, project management tools, and communication channels. Sprint 1 is planned together — user stories estimated, backlog prioritised, and a Definition of Done agreed.",
  },
  {
    step: "04",
    title: "Sprint-Based Delivery",
    desc: "Two-week sprints with daily standups, mid-sprint check-ins, and a demo at the end of every sprint. You see working software every two weeks, not just status updates.",
  },
  {
    step: "05",
    title: "Continuous Improvement",
    desc: "Monthly retrospectives identify process improvements. Velocity trends inform roadmap planning. Team composition adjusts as your product moves from MVP to scale.",
  },
];

const RESULTS = [
  {
    metric: "10×",
    label: "Faster than Hiring In-House",
    desc: "Assembling a dedicated team in 72 hours versus the 6–9 month cycle for recruiting, interviewing, and onboarding in-house engineers.",
  },
  {
    metric: "50%",
    label: "Lower Cost than US Team",
    desc: "Same seniority level and sprint velocity at half the fully-loaded cost of an equivalent US or EU-based engineering team.",
  },
  {
    metric: "12+",
    label: "Dedicated Teams Active",
    desc: "Currently running 12+ dedicated development teams across SaaS, ERP, insurance, and AI product verticals — with NPS scores above 90.",
  },
];

const RELATED = [
  {
    href: "/staff-augmentation/hire-react-developers",
    title: "Hire React Developers",
    desc: "Need frontend-only capacity? Hire individual senior React developers without a full team engagement.",
  },
  {
    href: "/staff-augmentation/hire-ai-engineers",
    title: "Hire AI Engineers",
    desc: "Add dedicated AI/ML engineers to your team for LLM development, RAG pipelines, and ML infrastructure.",
  },
  {
    href: "/saas-development/b2b-saas-development",
    title: "B2B SaaS Development",
    desc: "Need us to own the product outcome, not just provide the team? Explore our full-ownership SaaS development service.",
  },
];

const FAQS = [
  {
    q: "What is the difference between a dedicated team and staff augmentation?",
    a: "Staff augmentation places individual engineers into your existing team — you manage them directly within your own process. A dedicated team is a self-managing unit with a Tech Lead, developers, and QA who operate as a cohesive team. They run their own sprint ceremonies, maintain documentation, and manage code quality internally. You interact with the team through sprint demos and a designated project contact — not by managing each engineer individually.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You own everything. All source code, documentation, infrastructure configurations, and design assets created by the team are assigned to you. We execute an IP assignment agreement and NDA before the team writes a single line of code. We do not retain rights to reuse or repurpose any work produced for you.",
  },
  {
    q: "How do you maintain code quality across the team?",
    a: "The Tech Lead reviews every pull request before merge. We enforce a no-unreviewed-code-to-main rule. Code quality standards — ESLint configuration, test coverage thresholds, naming conventions — are agreed in sprint 1 and applied consistently. We track test coverage, code complexity, and dependency health as part of our monthly engineering health report.",
  },
  {
    q: "What happens if we are not satisfied with a team member's performance?",
    a: "We handle it internally. If you flag performance concerns, we first attempt to resolve them with coaching and additional support. If the issue persists, we replace the team member within 72 hours at no cost to you. Your sprint velocity does not drop — the replacement engineer is onboarded by the outgoing team member before they leave.",
  },
  {
    q: "Can we start with a smaller team and scale up?",
    a: "Yes, and this is the most common pattern. Many clients start with a 3-person team to validate the working relationship and establish the codebase architecture, then scale to 5 or 8 when they need parallel development tracks. Adding team members is straightforward — the existing Tech Lead onboards them within the first sprint, maintaining team cohesion and knowledge continuity.",
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

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════════════════ */

export default function DedicatedDevelopmentTeamPage() {
  return (
    <>
      <Script
        id="ddt-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav {...fadeUp(0)} className="flex items-center gap-2 text-slate-400 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <HiArrowRight className="w-3 h-3" />
            <Link href="/staff-augmentation" className="hover:text-white transition-colors">Staff Augmentation</Link>
            <HiArrowRight className="w-3 h-3" />
            <span className="text-slate-300">Dedicated Development Team</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiUsers className="w-3.5 h-3.5" />
                  Dedicated Teams
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl font-bold font-heading text-white leading-tight mb-6">
                Hire a <span className="text-gradient">Dedicated Development Team</span> from India
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Get a fully-managed dedicated development team — not freelancers. Tech Lead + developers
                + QA + Designer, all working together in sprint cycles with daily standups and weekly
                demos. Assembled in 72 hours. 50% lower cost than a US team.
              </motion.p>
              <motion.div {...fadeUp(3)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Build My Team
                  <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  Share Requirements
                </Link>
              </motion.div>
            </div>

            {/* Right panel — sprint dashboard */}
            <motion.div {...fadeUp(2)} className="hidden lg:block">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">Team Activity</p>
                <p className="text-white font-bold text-xl mb-2">Team Dashboard</p>
                <p className="text-teal-400 text-sm font-semibold mb-5">Sprint 14 in progress</p>
                <div className="space-y-3 mb-5">
                  {[
                    { role: "Tech Lead", status: "✓ Active" },
                    { role: "Senior React Dev", status: "✓ Active" },
                    { role: "Node.js Dev", status: "✓ Active" },
                    { role: "QA Engineer", status: "✓ Active" },
                  ].map((row) => (
                    <div key={row.role} className="flex justify-between items-center py-2 border-b border-slate-700/60 last:border-0">
                      <span className="text-slate-300 text-sm">{row.role}</span>
                      <span className="text-teal-400 text-sm font-semibold">{row.status}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center bg-slate-700/40 rounded-xl px-4 py-3">
                  <div>
                    <p className="text-slate-400 text-xs">Sprint velocity</p>
                    <p className="text-white font-bold">47 story points</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-xs">Daily standup</p>
                    <p className="text-teal-400 font-semibold text-sm">10:00 AM EST</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TEAM COMPOSITIONS ───────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Team Structures</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              Pre-Designed Team Compositions
            </h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Every composition is a starting point. We customise the exact role mix based on your
              product, tech stack, and delivery priorities.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_COMPOSITIONS.map((team, i) => {
              const Icon = team.icon;
              return (
                <motion.div
                  key={team.title}
                  {...fadeUp(i)}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-teal-200 transition-all"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-slate-900 font-bold mb-1">{team.title}</h3>
                  <p className="text-teal-600 text-xs font-semibold mb-3">{team.members} members</p>
                  <ul className="space-y-1 mb-4">
                    {team.roles.map((role) => (
                      <li key={role} className="flex items-center gap-2 text-slate-600 text-xs">
                        <HiCheckCircle className="w-3.5 h-3.5 text-teal-500 flex-shrink-0" />
                        {role}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-400 text-xs">
                    <span className="font-medium text-slate-500">Best for:</span> {team.best}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY DEDICATED ───────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Dedicated</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              Why a Dedicated Team Beats Freelancers
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_DEDICATED.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp(i)}
                  className="bg-white border border-slate-200 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-slate-900 font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ─────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Included</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              What Every Dedicated Team Includes
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-3">
            {WHATS_INCLUDED.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(i)}
                className="flex items-start gap-3 bg-teal-50 border border-teal-100 rounded-xl p-4"
              >
                <HiCheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ───────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              Team Sizes & Pricing
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <motion.div
                key={model.title}
                {...fadeUp(i)}
                className={`rounded-2xl p-6 border ${
                  model.highlight
                    ? "bg-gradient-to-br from-teal-600 to-blue-600 border-transparent"
                    : "bg-white border-slate-200"
                }`}
              >
                <p className={`text-xl font-bold mb-1 ${model.highlight ? "text-white" : "text-slate-900"}`}>
                  {model.title}
                </p>
                <p className={`text-sm mb-1 ${model.highlight ? "text-teal-100" : "text-slate-500"}`}>
                  {model.size}
                </p>
                <p className={`text-lg font-black mb-3 ${model.highlight ? "text-white" : "text-teal-600"}`}>
                  {model.price}
                </p>
                <p className={`text-sm leading-relaxed mb-4 ${model.highlight ? "text-teal-100" : "text-slate-600"}`}>
                  {model.desc}
                </p>
                <div className={`text-xs font-semibold rounded-lg px-3 py-2 ${model.highlight ? "bg-white/20 text-white" : "bg-slate-50 text-slate-700 border border-slate-200"}`}>
                  {model.composition}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              From Requirement to First Sprint in 72 Hours
            </h2>
          </motion.div>
          <div className="space-y-6">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                {...fadeUp(i)}
                className="flex gap-6 items-start bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <span className="text-4xl font-black text-teal-100 leading-none flex-shrink-0 select-none">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              What Dedicated Teams Deliver
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div
                key={r.label}
                {...fadeUp(i)}
                className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 rounded-2xl p-8 text-center"
              >
                <p className="text-5xl font-black text-gradient mb-2">{r.metric}</p>
                <p className="text-slate-900 font-bold text-lg mb-2">{r.label}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingBanner />

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Other Ways to Scale Your Team</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((rel, i) => (
              <motion.div key={rel.href} {...fadeUp(i)}>
                <Link
                  href={rel.href}
                  className="block bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-teal-200 transition-all group"
                >
                  <h3 className="text-slate-900 font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{rel.desc}</p>
                  <span className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium">
                    Learn more <HiArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              Dedicated Development Team Questions
            </h2>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp(i)}
                className="bg-white border border-slate-200 rounded-2xl p-6"
              >
                <h3 className="text-slate-900 font-bold mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
      <Footer />
      <FloatingBookingButton />
    </>
  );
}
