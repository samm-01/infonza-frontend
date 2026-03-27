"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTABanner from "../components/cta-banner";

const services = [
  {
    id: "web-development",
    tag: "01 · Web & App Development",
    title: "Custom Web Applications Built to Last",
    problem:
      "You've outgrown templates and off-the-shelf tools. Your business has specific workflows, edge cases, and requirements that generic software can't handle — so your team ends up working around the tool instead of with it.",
    solution:
      "We build custom web applications from the ground up using React, Next.js, Node.js, and Laravel. Every component is designed around your actual users and business logic — not retrofitted from a template.",
    outcomes: [
      "Full-stack web applications ready for production",
      "Mobile-responsive across all device sizes",
      "Optimized for performance and Core Web Vitals",
      "Clean, documented codebases your team can maintain",
      "Deployed to AWS, Vercel, or your preferred infrastructure",
    ],
    stack: ["React", "Next.js", "Node.js", "Laravel", "PHP", "PostgreSQL", "AWS"],
    timeline: "4–12 weeks depending on scope",
  },
  {
    id: "saas",
    tag: "02 · SaaS Development",
    title: "From Product Idea to Paying Customers",
    problem:
      "You have a clear SaaS idea but no technical co-founder. Building a product that handles auth, billing, multi-tenancy, and a clean user experience is genuinely complex — and most freelancers can't see the full picture.",
    solution:
      "We build SaaS products end-to-end. That means user auth, subscription billing, admin dashboards, role-based access, email notifications, onboarding flows, and the API architecture that holds it all together.",
    outcomes: [
      "Market-ready MVP in 6–10 weeks",
      "Stripe or Paddle subscription billing",
      "Multi-tenant architecture from day one",
      "Admin dashboard and user management",
      "Analytics and usage tracking built in",
    ],
    stack: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Redis", "AWS"],
    timeline: "6–10 weeks for MVP",
  },
  {
    id: "crm-erp",
    tag: "03 · CRM & ERP Systems",
    title: "Replace Spreadsheets with Systems That Scale",
    problem:
      "Your operations run on spreadsheets, email threads, and tribal knowledge. As you grow, things fall through the cracks. You're spending more time managing data than using it. Off-the-shelf ERPs cost $50K+/year and don't fit your workflow.",
    solution:
      "We build custom CRM and ERP systems tailored to your exact business. Insurance agencies, construction firms, logistics companies, and manufacturers — we've built systems for all of them. The result is software that fits how you actually work.",
    outcomes: [
      "Workflows designed around your team's process",
      "Role-based access for different team members",
      "Reporting and analytics dashboards",
      "Document management and e-signature ready",
      "Integration with your existing tools and APIs",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "REST APIs", "PDF generation"],
    timeline: "8–16 weeks depending on complexity",
  },
  {
    id: "api-automation",
    tag: "04 · API & Workflow Automation",
    title: "Eliminate the Manual Work Your Team Does Every Day",
    problem:
      "Your team is copying data between systems, sending the same emails over and over, and manually triggering processes that should happen automatically. This is expensive, error-prone, and demoralizing.",
    solution:
      "We audit your current workflows, identify what can be automated, and build the integrations and automation pipelines to make it happen. Insurance APIs like Hartford, real estate data feeds, payment processors, CRMs — we've integrated them all.",
    outcomes: [
      "Third-party API integrations (insurance, real estate, payments)",
      "Automated triggers and scheduled workflows",
      "Real-time data sync across platforms",
      "Webhook handlers and event-driven architecture",
      "Reduced manual work and human error",
    ],
    stack: ["Node.js", "REST APIs", "Webhooks", "Zapier", "AWS Lambda", "Cron jobs"],
    timeline: "2–6 weeks per integration",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-teal-600" />
              Services
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
              We build what your
              <br />
              <span className="text-gradient">business actually needs</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              Four service areas. All focused on the same outcome — software
              that reduces friction, saves time, and creates real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
                  {service.tag}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-8">
                  {service.title}
                </h2>

                {/* Problem */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-500 text-xs font-bold">✕</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      The Problem
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-7">
                    {service.problem}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-teal-600 text-xs font-bold">→</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Our Approach
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed pl-7">
                    {service.solution}
                  </p>
                </div>
              </motion.div>

              {/* Right column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="space-y-6"
              >
                {/* Outcomes */}
                <div className="bg-white rounded-2xl border border-slate-200 p-7">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-5">
                    What You Get
                  </h4>
                  <ul className="space-y-3">
                    {service.outcomes.map((outcome, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="flex-shrink-0 mt-0.5 text-teal-500"
                        >
                          <path
                            d="M3 8l3.5 3.5L13 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack + Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Typical Timeline
                    </h4>
                    <p className="text-sm font-semibold text-slate-900">
                      {service.timeline}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Exact scope determines final timeline
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-teal-500/20"
                >
                  Discuss This Project →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTABanner />
      <Footer />
    </>
  );
}
