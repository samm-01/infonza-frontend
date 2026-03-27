"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We spend the first week understanding your business — not just your requirements. Most dev shops skip this. We don't.",
    detail: "Business analysis · Stakeholder calls · Requirements doc",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Before a line of code is written, we design the system. DB schema, API structure, user flows — all planned and agreed on.",
    detail: "Technical spec · Wireframes · Project roadmap",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Weekly sprints with live demos every Friday. You always know what's done, what's next, and what needs your input.",
    detail: "Weekly demos · Slack updates · Staging environment",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "We stay engaged after shipping — fixing issues, monitoring performance, and planning the next phase together.",
    detail: "Deployment · Monitoring · 60-day support",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-8 h-px bg-teal-600" />
            How We Work
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-5">
            A process built for
            <br />
            <span className="text-gradient">predictable results</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            No surprises. No scope creep. Clear communication and consistent
            delivery — every time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl p-7 border border-slate-200"
            >
              {/* Number */}
              <div className="text-6xl font-bold text-slate-100 leading-none mb-5 select-none">
                {step.number}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                {step.description}
              </p>

              <div className="text-xs text-teal-600 font-medium pt-4 border-t border-slate-100 leading-relaxed">
                {step.detail}
              </div>

              {/* Connector (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-slate-300 z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
