"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const caseStudies = [
  {
    company: "Insurance Agency Platform",
    title: "Built a quote-to-bind workflow that cut processing time by 60%",
    tags: ["Insurance CRM", "API Integration", "Automation"],
    metric: "60%",
    metricLabel: "Faster Processing",
    image: "/images/portfolio-glovebox.png",
    href: "/case-studies#glovebox",
    color: "teal",
  },
  {
    company: "Construction ERP",
    title:
      "Replaced spreadsheets with a full project management ERP — from bid to invoice",
    tags: ["ERP", "Construction", "React"],
    metric: "40 hrs",
    metricLabel: "Saved Per Week",
    image: "/images/portfolio-readybuild.png",
    href: "/case-studies#readybuild",
    color: "blue",
  },
  {
    company: "E-Learning Platform",
    title: "Launched a white-label training platform in under 6 weeks",
    tags: ["SaaS", "E-Learning", "Next.js"],
    metric: "6 wks",
    metricLabel: "To Launch",
    image: "/images/portfolio-dnh.png",
    href: "/case-studies#dnh",
    color: "violet",
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-8 h-px bg-teal-600" />
              Case Studies
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
              Real projects.
              <br />
              <span className="text-gradient">Measurable outcomes.</span>
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="flex-shrink-0 text-sm font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1.5 group"
          >
            View all case studies
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
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={study.href}
                className="group flex flex-col rounded-2xl border border-slate-200 overflow-hidden hover:border-teal-500/40 hover:shadow-2xl hover:shadow-slate-200/80 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.company}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7">
                  {/* Metric highlight */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="text-3xl font-bold text-teal-600">
                      {study.metric}
                    </div>
                    <div className="text-sm text-slate-400 leading-tight">
                      {study.metricLabel}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 mb-2">{study.company}</p>
                  <h3 className="font-bold text-slate-900 leading-snug group-hover:text-teal-700 transition-colors text-base">
                    {study.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
