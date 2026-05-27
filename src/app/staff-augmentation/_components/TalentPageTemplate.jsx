"use client";

/**
 * TalentPageTemplate.jsx
 *
 * Reusable full-page template for all "Hire [Technology] Developers" pages.
 * Pass a config object exported from ../_config/talent-data.js.
 *
 * Sections rendered (in order):
 *   Hero → Trust metrics → Skills → Engagement models →
 *   Hiring process → Why Infonza → Booking banner →
 *   Related services → FAQ → Full booking section → Footer
 */

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiChevronDown,
  HiCurrencyDollar,
  HiBolt,
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
  WHY_INFONZA,
  getEngagementModels,
  getProcess,
} from "../_config/talent-data";

/* ── Animation helper ───────────────────────────────────────────────────── */
const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

/* ── FAQ accordion ──────────────────────────────────────────────────────── */
function FAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <motion.div
          key={i}
          {...fadeUp(i)}
          className="border border-slate-200 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors"
            aria-expanded={open === i}
          >
            <span className="font-semibold text-slate-900">{item.q}</span>
            <HiChevronDown
              className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-180" : ""
              }`}
            />
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
   TEMPLATE
═══════════════════════════════════════════════════════════════════════════ */
export default function TalentPageTemplate({ config }) {
  const {
    tech,
    techDisplay,
    techShort,
    placementTime,
    startingRate,
    heroSubtitle,
    devProfiles,
    results,
    skills,
    canBuildItems,
    faqs,
    related,
  } = config;

  /* Shared sections generated from tech name */
  const engagementModels = getEngagementModels(tech);
  const process          = getProcess(tech);

  /* FAQ structured data */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Script
        id={`faq-jsonld-${config.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      {/* ════════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-slate-900 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/staff-augmentation" className="hover:text-teal-400 transition-colors">Staff Augmentation</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Hire {techDisplay}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <motion.div
                {...fadeUp(0)}
                className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6"
              >
                <HiBolt className="w-3.5 h-3.5" />
                Available in {placementTime}
              </motion.div>

              <motion.h1
                {...fadeUp(1)}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6"
              >
                Hire Dedicated{" "}
                <span className="text-gradient">{techDisplay}</span>
              </motion.h1>

              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 leading-relaxed mb-8">
                {heroSubtitle}
              </motion.p>

              <motion.div {...fadeUp(3)} className="flex items-center gap-3 mb-8">
                <span className="text-2xl font-bold text-white">
                  From {startingRate}
                  <span className="text-base font-normal text-slate-400">/hr</span>
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400 text-sm">No placement fee. No lock-in.</span>
              </motion.div>

              <motion.div {...fadeUp(4)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Hire a {techShort} Developer
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

            {/* Right — Developer profile card */}
            <motion.div {...fadeUp(2)} className="relative">
              <div className="bg-slate-800/70 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-widest">
                    Available Developers
                  </span>
                  <span className="text-xs bg-teal-900/60 text-teal-300 border border-teal-700/40 rounded-full px-3 py-1">
                    {devProfiles.length} available now
                  </span>
                </div>

                {devProfiles.map((dev, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-4 p-4 rounded-xl ${
                      i < devProfiles.length - 1
                        ? "border-b border-slate-700/40 mb-3 pb-4"
                        : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {dev.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-white font-semibold text-sm">{dev.name}</span>
                        <span className="text-slate-400 text-xs flex-shrink-0">{dev.exp}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {dev.skills.map((s) => (
                          <span
                            key={s}
                            className="text-xs bg-slate-700/60 text-slate-300 rounded px-2 py-0.5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-teal-400 font-medium">✓ {dev.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TRUST METRICS
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i)} className="text-center">
                <r.icon className="w-7 h-7 text-teal-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-slate-900 mb-1">{r.value}</div>
                <div className="text-sm text-slate-500">{r.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SKILLS / TECH STACK
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-dots py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              What Our {tech} Developers{" "}
              <span className="text-gradient">Know Cold</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Every developer on our {tech} bench has shipped production applications
              using these technologies — not just tutorial projects.
            </p>
          </motion.div>

          {/* Skill tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                {...fadeUp(i * 0.5)}
                className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium shadow-sm hover:border-teal-400 hover:text-teal-700 transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* What they can build */}
          <div className="grid md:grid-cols-3 gap-6">
            {canBuildItems.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i)}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
              >
                <HiCheckCircle className="w-6 h-6 text-teal-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          ENGAGEMENT MODELS
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Choose Your{" "}
              <span className="text-gradient">Engagement Model</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Flexible structures for every team size and project scope. Scale up or down with
              2 weeks' notice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model, i) => (
              <motion.div
                key={model.title}
                {...fadeUp(i)}
                className={`relative rounded-2xl p-7 border ${
                  model.highlight
                    ? "bg-gradient-to-br from-teal-900/60 to-blue-900/60 border-teal-600/50"
                    : "bg-slate-800/50 border-slate-700/50"
                }`}
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
              Starting from{" "}
              <strong className="text-white ml-1">{startingRate}/hour</strong>
              {" "}· No placement fees · Month-to-month contracts
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          HIRING PROCESS
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              From Brief to Billable in{" "}
              <span className="text-gradient">{placementTime}</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Our streamlined placement process eliminates weeks of interviewing. You meet only
              qualified, pre-assessed candidates.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600/20 via-teal-600/60 to-blue-600/20 mx-32" />
            <div className="grid lg:grid-cols-5 gap-8">
              {process.map((step, i) => (
                <motion.div key={step.step} {...fadeUp(i)} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-blue-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/20">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          WHY INFONZA
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Engineering Teams{" "}
              <span className="text-gradient">Choose Infonza</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Not a staffing marketplace. A technical partner with accountability built into
              every engagement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_INFONZA.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i)}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
              >
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

      {/* ════════════════════════════════════════════════════════════════
          BOOKING BANNER (mid-page)
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading={`Ready to hire your ${tech} developer?`}
            subheading="Tell us your requirements and we'll send you matching profiles within 24 hours."
            cta="Start Hiring Now"
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          RELATED SERVICES
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Related Services
            </h2>
            <p className="text-slate-500">Explore complementary engineering roles and services.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {related.map((item, i) => (
              <motion.div key={item.title} {...fadeUp(i)}>
                <Link
                  href={item.href}
                  className="group block bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-teal-400 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
                    <item.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
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

      {/* ════════════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked{" "}
              <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FULL BOOKING SECTION (page bottom)
      ════════════════════════════════════════════════════════════════ */}
      <BookingSection
        badge={`Hire in ${placementTime}`}
        heading={`Find Your Perfect ${tech} Developer Today`}
        subheading={`Stop searching job boards. Share your brief and we'll introduce you to senior, vetted ${tech} engineers within 24 hours.`}
        primaryCTA="Get Matching Profiles"
        secondaryCTA="Talk to Our Team"
        stats={[
          { value: placementTime,        label: "Placement speed" },
          { value: `${startingRate}/hr`, label: "Starting rate" },
          { value: "2-week",             label: "Replacement guarantee" },
        ]}
        trustItems={[
          "5-stage vetting process",
          "NDA signed before discussion",
          "US timezone overlap guaranteed",
        ]}
      />

      <Footer />

      <FloatingBookingButton label={`Hire ${techShort} Dev`} />
    </>
  );
}
