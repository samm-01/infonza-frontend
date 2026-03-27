"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Web & Application Development",
    description:
      "Custom web apps built with React, Next.js, Node.js, and Laravel. We ship fast, build clean, and hand over maintainable codebases.",
    outcomes: [
      "Production-ready in weeks, not months",
      "Mobile-responsive and SEO-optimized",
      "Built for handover and future scale",
    ],
    href: "/services#web-development",
  },
  {
    number: "02",
    title: "SaaS Product Development",
    description:
      "Turn your product idea into a market-ready SaaS. We handle auth, billing, dashboards, roles, and the entire technical foundation.",
    outcomes: [
      "End-to-end product thinking",
      "Subscription & billing flows",
      "Admin dashboards and analytics",
    ],
    href: "/services#saas",
  },
  {
    number: "03",
    title: "CRM & ERP Systems",
    description:
      "Custom-built business systems for insurance, real estate, logistics, and manufacturing. Replace spreadsheets with smart workflows.",
    outcomes: [
      "Role-based access and multi-user",
      "Reporting, forecasting, and analytics",
      "Industry-specific workflows",
    ],
    href: "/services#crm-erp",
  },
  {
    number: "04",
    title: "API & Workflow Automation",
    description:
      "Connect your tools, eliminate manual data entry, and build intelligent workflows that run without your team's constant involvement.",
    outcomes: [
      "Third-party API integrations",
      "Process automation and triggers",
      "Real-time data sync across systems",
    ],
    href: "/services#api-automation",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-8 h-px bg-teal-600" />
            What We Build
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-5">
            We solve business problems
            <br />
            <span className="text-gradient">with the right technology</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Not every business needs the same solution. We listen first, then
            build exactly what you need — nothing more, nothing less.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={service.href}
                className="group flex flex-col p-8 rounded-2xl border border-slate-200 hover:border-teal-500/40 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 h-full"
              >
                {/* Number + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-sm font-bold text-teal-600/60 mt-1 flex-shrink-0">
                    {service.number}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mt-auto">
                  {service.outcomes.map((outcome, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2.5 text-sm text-slate-600"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="flex-shrink-0 text-teal-500"
                      >
                        <path
                          d="M2.5 7l3 3 6-6"
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

                <div className="mt-7 pt-5 border-t border-slate-100 text-sm font-semibold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M2 7h10M7 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
          >
            View full services breakdown →
          </Link>
        </div>
      </div>
    </section>
  );
}
