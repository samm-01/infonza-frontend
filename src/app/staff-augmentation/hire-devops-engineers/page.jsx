"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiCloud,
  HiBolt,
  HiShieldCheck,
  HiCog6Tooth,
  HiCodeBracket,
  HiChartBarSquare,
  HiClock,
  HiUsers,
  HiStar,
  HiCurrencyDollar,
  HiCommandLine,
  HiServer,
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

const SKILLS = [
  { category: "Cloud Platforms", items: ["AWS", "GCP", "Azure", "Multi-cloud"] },
  { category: "Infrastructure as Code", items: ["Terraform", "Pulumi", "CloudFormation", "Ansible"] },
  { category: "Container Orchestration", items: ["Kubernetes", "Helm", "EKS", "GKE", "AKS"] },
  { category: "Containerisation", items: ["Docker", "ECR", "Docker Compose", "Buildkit"] },
  { category: "CI/CD Pipelines", items: ["GitHub Actions", "GitLab CI", "ArgoCD", "CircleCI"] },
  { category: "Observability", items: ["Datadog", "New Relic", "Grafana", "Prometheus", "PagerDuty"] },
  { category: "GitOps", items: ["ArgoCD", "Flux", "Helm releases", "GitOps workflows"] },
  { category: "DevSecOps", items: ["Snyk", "Trivy", "SAST", "DAST", "Secret scanning"] },
  { category: "Cost Optimisation", items: ["FinOps", "Reserved Instances", "Spot Instances", "Rightsizing"] },
];

const ENGAGEMENT_MODELS = [
  {
    title: "Full-Time",
    hours: "40 hrs/week",
    from: "from $45/hr",
    desc: "A dedicated senior DevOps engineer embedded in your team — owning your infrastructure roadmap, attending sprint ceremonies, and managing production operations.",
    features: [
      "Exclusive to your team",
      "Daily async standup",
      "Full infra ownership",
      "US/EU timezone overlap",
      "NDA protected",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    title: "Part-Time",
    hours: "20 hrs/week",
    from: "from $50/hr",
    desc: "Focused DevOps sprints — ideal for CI/CD pipeline setup, Kubernetes migration, or ongoing infrastructure maintenance alongside your existing team.",
    features: [
      "Dedicated sprint blocks",
      "Weekly architecture sync",
      "Async-first workflow",
      "Upgradeable to full-time",
    ],
    highlight: false,
    badge: null,
  },
  {
    title: "Project-Based",
    hours: "Fixed scope",
    from: "Custom pricing",
    desc: "A defined-scope engagement for a specific deliverable — cloud migration, Kubernetes cluster setup, DR implementation, or CI/CD pipeline build.",
    features: [
      "Fixed deliverable & timeline",
      "Milestone-based billing",
      "Knowledge transfer included",
      "30-day post-launch support",
    ],
    highlight: false,
    badge: null,
  },
];

const HIRING_PROCESS = [
  {
    step: "01",
    title: "Share Requirements",
    desc: "Tell us your cloud stack, team size, current pain points, and timeline. A 15-minute call is often enough to understand what you need.",
  },
  {
    step: "02",
    title: "Profile Review (24 hours)",
    desc: "We match your requirements against our vetted DevOps bench and send two to three profiles with CVs, GitHub/portfolio links, and availability.",
  },
  {
    step: "03",
    title: "Technical Interview",
    desc: "You interview shortlisted engineers directly. We do not add an intermediary layer — you evaluate them the same way you would an in-house hire.",
  },
  {
    step: "04",
    title: "Infrastructure Trial Task",
    desc: "Optional paid trial task covering a real piece of infrastructure work — Terraform module, CI/CD pipeline design, or Kubernetes configuration — so you can validate technical depth before committing.",
  },
  {
    step: "05",
    title: "Onboard in 72 Hours",
    desc: "Once you select, the engineer is onboarded to your tools, granted appropriate access, and ready for the first sprint within 72 hours of confirmation.",
  },
];

const WHY_INFONZA = [
  {
    icon: HiClock,
    title: "72-Hour Placement Guarantee",
    desc: "We maintain a bench of vetted DevOps engineers ready to start. If we cannot present matching profiles within 72 hours, we tell you upfront.",
  },
  {
    icon: HiStar,
    title: "AWS Certified Engineers",
    desc: "Every engineer on our DevOps bench holds at least one AWS certification (Solutions Architect or DevOps Professional). Many hold CKA as well.",
  },
  {
    icon: HiShieldCheck,
    title: "NDA Protected",
    desc: "Mutual NDA executed before any engineer accesses your codebase, infrastructure, or credentials. IP stays yours.",
  },
  {
    icon: HiUsers,
    title: "Production-Hardened Experience",
    desc: "Our engineers have managed production infrastructure handling millions of requests per day — not just greenfield projects.",
  },
  {
    icon: HiCurrencyDollar,
    title: "No Recruitment Fees",
    desc: "Flat hourly or monthly rate — no placement fees, no hidden markups, no lock-in contracts beyond a 30-day notice period.",
  },
];

const RESULTS = [
  {
    metric: "60%",
    label: "Avg Infrastructure Cost Reduction",
    desc: "Right-sized auto-scaling, Reserved Instance commitments, and FinOps practices cut cloud bills without sacrificing performance.",
  },
  {
    metric: "99.99%",
    label: "Uptime Delivered",
    desc: "Multi-AZ deployments, automated failover, and proactive monitoring eliminate unplanned downtime on client infrastructure.",
  },
  {
    metric: "72-Hour",
    label: "Placement Guarantee",
    desc: "Matching DevOps engineer profiles presented within 72 hours of receiving your requirements — or we tell you we cannot match.",
  },
];

const RELATED = [
  {
    href: "/staff-augmentation/hire-ai-engineers",
    title: "Hire AI Engineers",
    desc: "Add LLM, RAG pipeline, and MLOps expertise to the same team running your cloud infrastructure.",
  },
  {
    href: "/staff-augmentation/dedicated-development-team",
    title: "Dedicated Development Team",
    desc: "Scale beyond a single DevOps engineer to a fully-managed development team with developers, QA, and design.",
  },
  {
    href: "/saas-development/cloud-saas-solutions",
    title: "Cloud SaaS Solutions",
    desc: "Need the architecture designed before the engineer to build it? Start with our cloud SaaS design engagement.",
  },
];

const FAQS = [
  {
    q: "What is the difference between a DevOps engineer and an SRE?",
    a: "DevOps engineers focus on CI/CD pipelines, infrastructure automation, and deployment processes — enabling development teams to ship faster. Site Reliability Engineers (SREs) apply software engineering practices to operations, focusing on reliability, SLO definition, incident response, and capacity planning. In practice, the roles overlap significantly. Our engineers can fill either role — we match based on your specific needs during the requirements call.",
  },
  {
    q: "Can your DevOps engineers work in our timezone?",
    a: "Yes. Our engineers based in India work in IST (UTC+5:30) but we specifically hire for and schedule US EST and EU overlap. A full-time engagement includes a minimum 4-hour overlap window with your core working hours for synchronous collaboration, standups, and urgent production issues.",
  },
  {
    q: "Do your engineers have experience with our specific cloud provider?",
    a: "Our DevOps bench includes AWS-certified engineers (Solutions Architect and DevOps Professional), GCP-certified engineers, and Azure-certified engineers. When you share your requirements, we match specifically on your cloud provider and the services you use most — not just general cloud experience. We will tell you if we do not have a strong match for a niche requirement.",
  },
  {
    q: "How do you handle knowledge transfer if the engineer ends the engagement?",
    a: "Infrastructure knowledge transfer is a structured process, not an afterthought. All Terraform modules, runbooks, architecture diagrams, and incident playbooks are maintained in your own repositories throughout the engagement. Monthly documentation reviews ensure nothing lives only in the engineer's head. A 30-day notice period gives you time to overlap a replacement engineer before the outgoing engineer leaves.",
  },
  {
    q: "Can we hire the engineer full-time after the engagement?",
    a: "Yes. After a 12-month engagement, clients can hire the engineer directly without a conversion fee. For engagements shorter than 12 months, a conversion fee applies — the exact amount depends on the engagement length and is documented in the contract upfront. We are transparent about this from day one.",
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

export default function HireDevOpsEngineersPage() {
  return (
    <>
      <Script
        id="devops-faq-schema"
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
            <span className="text-slate-300">Hire DevOps Engineers</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiCommandLine className="w-3.5 h-3.5" />
                  DevOps Specialists
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl font-bold font-heading text-white leading-tight mb-6">
                Hire <span className="text-gradient">Dedicated DevOps Engineers</span>
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Hire senior DevOps engineers in 72 hours — AWS/GCP/Azure certified, Kubernetes experts,
                CI/CD architects with real production experience managing systems at scale. Dedicated,
                NDA-protected, and available in your timezone.
              </motion.p>
              <motion.div {...fadeUp(3)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Hire a DevOps Engineer
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

            {/* Right panel — developer profile card */}
            <motion.div {...fadeUp(2)} className="hidden lg:block">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-4">Sample Profile</p>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-black text-lg">DS</span>
                  </div>
                  <div>
                    <p className="text-white font-bold">Senior DevOps Engineer</p>
                    <p className="text-slate-400 text-sm">7 years experience</p>
                    <span className="inline-flex items-center gap-1 bg-teal-900/60 border border-teal-700/40 rounded-full px-3 py-0.5 text-teal-300 text-xs font-semibold mt-1">
                      ✓ Available in 72hrs
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["AWS", "Kubernetes", "Terraform", "GitHub Actions", "Docker", "Datadog"].map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-slate-700/60 rounded-lg text-slate-300 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="border-t border-slate-700/60 pt-4">
                  <p className="text-slate-500 text-xs mb-2">Certifications</p>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 bg-amber-900/30 border border-amber-700/30 rounded-lg text-amber-300 text-xs font-medium">AWS Solutions Architect</span>
                    <span className="px-2.5 py-1 bg-blue-900/30 border border-blue-700/30 rounded-lg text-blue-300 text-xs font-medium">CKA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Technical Depth</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              DevOps Skills Across the Full Stack
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-4">
            {SKILLS.map((group, i) => (
              <motion.div
                key={group.category}
                {...fadeUp(i)}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5"
              >
                <p className="text-slate-900 font-bold text-sm mb-3">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600 text-xs font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGAGEMENT MODELS ───────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Engagement Models</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              How You Can Work With Our DevOps Engineers
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <motion.div
                key={model.title}
                {...fadeUp(i)}
                className={`rounded-2xl p-6 border ${
                  model.highlight
                    ? "bg-gradient-to-br from-teal-600 to-blue-600 border-transparent text-white"
                    : "bg-white border-slate-200"
                }`}
              >
                {model.badge && (
                  <span className="inline-block bg-white/20 rounded-full px-3 py-0.5 text-xs font-bold mb-3 text-white">
                    {model.badge}
                  </span>
                )}
                <p className={`text-xl font-bold mb-0.5 ${model.highlight ? "text-white" : "text-slate-900"}`}>
                  {model.title}
                </p>
                <p className={`text-sm mb-1 ${model.highlight ? "text-teal-100" : "text-slate-500"}`}>
                  {model.hours}
                </p>
                <p className={`text-sm font-bold mb-3 ${model.highlight ? "text-white" : "text-teal-600"}`}>
                  {model.from}
                </p>
                <p className={`text-sm leading-relaxed mb-4 ${model.highlight ? "text-teal-100" : "text-slate-600"}`}>
                  {model.desc}
                </p>
                <ul className="space-y-1.5">
                  {model.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2 text-sm ${model.highlight ? "text-white" : "text-slate-700"}`}>
                      <HiCheckCircle className={`w-4 h-4 flex-shrink-0 ${model.highlight ? "text-teal-200" : "text-teal-500"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING PROCESS ──────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              From Requirement to Onboarded in 72 Hours
            </h2>
          </motion.div>
          <div className="space-y-6">
            {HIRING_PROCESS.map((step, i) => (
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

      {/* ── WHY INFONZA ─────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Infonza</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              What Sets Our DevOps Engineers Apart
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_INFONZA.map((item, i) => {
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

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              What Our DevOps Engineers Deliver
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
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Extend Your Engineering Capacity</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((rel, i) => (
              <motion.div key={rel.href} {...fadeUp(i)}>
                <Link
                  href={rel.href}
                  className="block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-teal-200 transition-all group"
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
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              Hiring DevOps Engineers — Common Questions
            </h2>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp(i)}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
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
