"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  HiArrowRight,
  HiChevronDown,
  HiSparkles,
  HiCheckCircle,
} from "react-icons/hi2";
import {
  BookingSection,
  BookingBanner,
  FloatingBookingButton,
  BOOKING_URL,
} from "./booking-cta";

/* ── Reusable FAQ accordion item ─────────────────────────────────────────── */
export function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="border border-slate-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-sm font-semibold text-slate-900">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <HiChevronDown className="w-4 h-4 text-slate-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Hero section for AI solution sub-pages ──────────────────────────────── */
export function AIServiceHero({
  badge,
  title,
  titleHighlight,
  description,
  accentFrom = "teal",
  accentTo = "blue",
  metrics = [],
  breadcrumb = [],
  primaryCTA = "Schedule Free Consultation",
  secondaryCTA = "View Case Studies",
  secondaryCTAHref = "/case-studies",
  dashboard,
}) {
  const gradientMap = {
    teal: "from-teal-600/10",
    blue: "from-blue-600/10",
    violet: "from-violet-600/10",
    emerald: "from-emerald-600/10",
    orange: "from-orange-600/10",
    rose: "from-rose-600/10",
  };
  const badgeMap = {
    teal: "bg-teal-900/60 border-teal-700/40 text-teal-300",
    blue: "bg-blue-900/60 border-blue-700/40 text-blue-300",
    violet: "bg-violet-900/60 border-violet-700/40 text-violet-300",
    emerald: "bg-emerald-900/60 border-emerald-700/40 text-emerald-300",
    orange: "bg-orange-900/60 border-orange-700/40 text-orange-300",
    rose: "bg-rose-900/60 border-rose-700/40 text-rose-300",
  };

  return (
    <section className="relative bg-slate-900 overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className={`absolute top-0 right-0 w-[700px] h-[500px] bg-gradient-to-bl ${gradientMap[accentFrom]} to-transparent rounded-full blur-3xl pointer-events-none`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-8">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.href || crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-slate-600">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-teal-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-400">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`inline-flex items-center gap-2 ${badgeMap[accentFrom]} border rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6`}
            >
              <HiSparkles className="w-3.5 h-3.5" />
              {badge}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
              {title}{" "}
              {titleHighlight && (
                <span className="text-gradient">{titleHighlight}</span>
              )}
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-teal-900/30"
              >
                {primaryCTA}
                <HiArrowRight className="w-4 h-4" />
              </a>
              <Link
                href={secondaryCTAHref}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/20 transition-colors"
              >
                {secondaryCTA}
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {dashboard ? (
              dashboard
            ) : (
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 shadow-2xl">
                <div className="space-y-3">
                  {metrics.map((m, i) => (
                    <div
                      key={m.label}
                      className="flex items-center gap-3 bg-slate-900/60 rounded-xl p-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                        {m.icon && <m.icon className="w-5 h-5 text-white" />}
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg leading-none">
                          {m.value}
                        </div>
                        <div className="text-slate-400 text-xs mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Metrics / trust stats bar ───────────────────────────────────────────── */
export function AIMetricsBar({ metrics }) {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-gradient">
                {m.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services / capabilities grid ────────────────────────────────────────── */
export function AIServiceGrid({ title, subtitle, services, cols = 3 }) {
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[cols] || "md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="bg-dots bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">{subtitle}</p>
          )}
        </motion.div>

        <div className={`grid ${colClass} gap-6`}>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4">
                {s.icon && <s.icon className="w-5 h-5 text-white" />}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                {s.desc}
              </p>
              {s.href && (
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1 text-teal-600 text-xs font-semibold hover:gap-2 transition-all"
                >
                  Learn More <HiArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process steps section ───────────────────────────────────────────────── */
export function AIProcessSection({ title, subtitle, steps }) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-500 max-w-xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm font-mono">
                {step.step}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-teal-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tech stack badges ───────────────────────────────────────────────────── */
export function AITechStack({ title = "Technology Stack", subtitle, techs }) {
  return (
    <section className="bg-dots bg-slate-50 py-16 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
          {subtitle && <p className="text-slate-500">{subtitle}</p>}
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {techs.map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`px-4 py-2 rounded-full border text-sm font-semibold ${tech.color}`}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Use cases section ───────────────────────────────────────────────────── */
export function AIUseCases({ title, subtitle, cases }) {
  return (
    <section className="bg-slate-900 py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-4">
                {c.icon && <c.icon className="w-5 h-5 text-white" />}
              </div>
              <h3 className="font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Industries served ───────────────────────────────────────────────────── */
export function AIIndustrySection({ title, subtitle, industries }) {
  return (
    <section className="bg-slate-50 py-16 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
          {subtitle && <p className="text-slate-500">{subtitle}</p>}
        </motion.div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind, i) => (
            <motion.span
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-colors"
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why Infonza differentiators ─────────────────────────────────────────── */
export function AIWhyInfonza({ points }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why <span className="text-gradient">Infonza</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            12+ years delivering enterprise software. Now applying that foundation to AI.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
            >
              <HiCheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ section ─────────────────────────────────────────────────────────── */
export function AIFAQSection({ title = "Frequently Asked Questions", subtitle, faqs }) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {subtitle && <p className="text-slate-500">{subtitle}</p>}
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Related services grid ───────────────────────────────────────────────── */
export function AIRelatedServices({ services }) {
  return (
    <section className="bg-slate-50 py-14 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
          Related AI Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={s.href}
                className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
                  {s.icon && <s.icon className="w-4 h-4 text-teal-600" />}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-teal-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 flex-1 leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-3 flex items-center gap-1 text-teal-600 text-xs font-semibold">
                  Learn more{" "}
                  <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Re-export booking components for convenience ────────────────────────── */
export { BookingSection, BookingBanner, FloatingBookingButton, BOOKING_URL };
