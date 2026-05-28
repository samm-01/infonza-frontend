"use client";

/**
 * IndustryPageTemplate.jsx
 *
 * Reusable full-page template for all Industry pages.
 * Pass a config object exported from ../_config/industry-data.js.
 *
 * Sections rendered (in order):
 *   Hero → Trust stats → Solutions grid → Pain points →
 *   Process → Tech stack → Booking banner →
 *   Related services → Industries We Also Serve →
 *   FAQ accordion → Full booking section → Footer
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiArrowRight,
  HiChevronDown,
  HiCheckCircle,
  HiCalendarDays,
  HiBolt,
  HiClipboardDocumentList,
  HiMagnifyingGlass,
  HiCodeBracket,
  HiRocketLaunch,
  HiUserGroup,
  HiShieldCheck,
} from "react-icons/hi2";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  BookingSection,
  BookingBanner,
  FloatingBookingButton,
  BOOKING_URL,
} from "../../components/booking-cta";
import { ALL_INDUSTRY_LINKS } from "../_config/industry-data";

/* ── Constants ──────────────────────────────────────────────────────────── */

const BASE_URL = "https://infonza.com";

const PROCESS_STEPS = [
  {
    icon: HiMagnifyingGlass,
    step: "01",
    title: "Discovery & Requirements",
    desc: "We spend 30–60 minutes understanding your domain, users, existing systems, and success metrics — not just the feature list.",
  },
  {
    icon: HiClipboardDocumentList,
    step: "02",
    title: "Architecture & Roadmap",
    desc: "Our senior architects produce a solution blueprint with tech stack recommendations, integration map, and phased delivery milestones.",
  },
  {
    icon: HiCodeBracket,
    step: "03",
    title: "Agile Development",
    desc: "2-week sprints with demo-ready deliverables. You see working software every fortnight — no long silent build periods.",
  },
  {
    icon: HiShieldCheck,
    step: "04",
    title: "QA, Security & Compliance",
    desc: "Automated test suites, manual UAT, penetration testing, and compliance review (HIPAA, GDPR, PCI DSS, or industry-specific) before any release.",
  },
  {
    icon: HiRocketLaunch,
    step: "05",
    title: "Launch & Long-Term Support",
    desc: "Zero-downtime deployment, post-launch monitoring, performance tuning, and a retainer option for ongoing feature development.",
  },
];

/* ── Animation ──────────────────────────────────────────────────────────── */
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
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                key="answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                  {item.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   TEMPLATE
═══════════════════════════════════════════════════════════════════════════ */
export default function IndustryPageTemplate({ config }) {
  const {
    slug,
    label,
    badgeText,
    badgeIcon: BadgeIcon,
    headline,
    subheadline,
    heroVisual,
    trustStats,
    solutions,
    painPoints,
    techStack,
    relatedServices,
    faqs,
    bookingStats,
    trustItems,
    floatingButtonLabel,
  } = config;

  /* ── JSON-LD ────────────────────────────────────────────────────────────── */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${label} Software Development`,
    description: subheadline,
    serviceType: "Custom Software Development",
    url: `${BASE_URL}/industries/${slug}`,
    provider: {
      "@type": "Organization",
      name: "Infonza Innovations",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/infonza-logo.jpg` },
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${BASE_URL}/industries` },
      { "@type": "ListItem", position: 3, name: label, item: `${BASE_URL}/industries/${slug}` },
    ],
  };

  /* "Also Serve" pill links — exclude current page */
  const otherIndustries = ALL_INDUSTRY_LINKS.filter((l) => l.href !== `/industries/${slug}`);

  return (
    <>
      <Script
        id={`faq-jsonld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id={`service-jsonld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id={`breadcrumb-jsonld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-slate-900 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap list-none p-0">
              <li>
                <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
              </li>
              <li aria-hidden="true"><span>/</span></li>
              <li>
                <Link href="/industries" className="hover:text-teal-400 transition-colors">Industries</Link>
              </li>
              <li aria-hidden="true"><span>/</span></li>
              <li>
                <span className="text-slate-300 font-medium" aria-current="page">{label}</span>
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <motion.div
                {...fadeUp(0)}
                className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6"
              >
                {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" />}
                {badgeText}
              </motion.div>

              <motion.h1
                {...fadeUp(1)}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6"
              >
                {headline}
              </motion.h1>

              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 leading-relaxed mb-8">
                {subheadline}
              </motion.p>

              <motion.div {...fadeUp(3)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  <HiCalendarDays className="w-5 h-5" />
                  Book Free Consultation
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  Talk to Our Team
                </Link>
              </motion.div>
            </div>

            {/* Right — KPI card */}
            <motion.div {...fadeUp(2)} className="relative">
              <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-300">{heroVisual.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{heroVisual.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                    <span className="text-xs text-teal-400 font-medium">Live</span>
                  </div>
                </div>

                {/* Main stat */}
                <div className="text-center py-5 mb-5 bg-gradient-to-br from-teal-600/20 to-blue-600/20 rounded-xl border border-teal-600/20">
                  <p className="text-5xl font-bold text-white mb-1">{heroVisual.mainStat}</p>
                  <p className="text-sm text-slate-400">{heroVisual.mainStatLabel}</p>
                </div>

                {/* Metrics grid */}
                <div className="grid grid-cols-2 gap-3">
                  {heroVisual.metrics.map((m) => (
                    <div key={m.label} className="bg-slate-700/40 rounded-xl p-3.5">
                      <p className="text-xl font-bold text-teal-400 mb-0.5">{m.value}</p>
                      <p className="text-xs text-slate-400 leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-teal-600/5 rounded-3xl blur-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TRUST STATS
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  {...fadeUp(i)}
                  className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-200"
                >
                  {Icon && (
                    <span className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </span>
                  )}
                  <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-slate-500 leading-snug">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SOLUTIONS
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3">
              Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Software Solutions for {label}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Purpose-built systems that solve the real operational challenges in {label.toLowerCase()} — not generic software repurposed for your industry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.title}
                  {...fadeUp(i)}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sol.color} flex items-center justify-center mb-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {Icon && <Icon className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow">
                    {sol.description}
                  </p>
                  {sol.href && (
                    <Link
                      href={sol.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 mt-4 transition-colors"
                    >
                      Learn more <HiArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PAIN POINTS
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-teal-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-3">
              Industry Challenges
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Problems We Solve for {label}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Every {label.toLowerCase()} business faces the same structural technology gaps. We've solved them before.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {painPoints.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={pt.title}
                  {...fadeUp(i)}
                  className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 hover:border-teal-600/40 hover:bg-slate-800/80 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal-600/20 border border-teal-600/20 flex items-center justify-center flex-shrink-0">
                      {Icon && <Icon className="w-5 h-5 text-teal-400" />}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">{pt.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{pt.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How We Deliver {label} Software
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              A structured, collaborative process that delivers working software — not endless planning decks.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {PROCESS_STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    {...fadeUp(i)}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-teal-500/20 relative z-10">
                      {Icon && <Icon className="w-7 h-7 text-white" />}
                    </div>
                    <span className="text-[10px] font-bold text-teal-600 tracking-widest uppercase mb-1">
                      Step {step.step}
                    </span>
                    <h3 className="font-semibold text-slate-900 mb-2 leading-snug">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TECH STACK
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3">
              Technology Stack
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Technologies We Use for {label} Projects
            </h2>
          </motion.div>

          <motion.div {...fadeUp(1)} className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.label}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${tech.color}`}
              >
                {tech.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BOOKING BANNER (mid-page)
      ══════════════════════════════════════════════════════════════ */}
      <BookingBanner
        heading={`Have a ${label} project in mind?`}
        subheading={`Get a free technical consultation from our ${label.toLowerCase()} domain experts. No sales pitch — just honest advice.`}
        cta="Schedule Free Discovery Call"
      />

      {/* ══════════════════════════════════════════════════════════════
          RELATED SERVICES
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3">
              Related Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Services That Power {label} Platforms
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                {...fadeUp(i)}
                className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-widest text-teal-600 bg-teal-50 border border-teal-200 rounded-full px-3 py-1 mb-4 w-fit">
                  {svc.tag}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-grow">
                  {svc.description}
                </p>
                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-700 mt-4 transition-colors"
                >
                  Explore service <HiArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INDUSTRIES WE ALSO SERVE
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">
              Our Reach
            </p>
            <h2 className="text-2xl font-bold text-slate-900">
              Industries We Also Serve
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp(1)}
            className="flex flex-wrap justify-center gap-3"
          >
            {otherIndustries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium border border-slate-200 text-slate-600 bg-white hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50 transition-all duration-150"
              >
                {ind.label}
                <HiArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3">FAQ</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BOOKING SECTION (full-width)
      ══════════════════════════════════════════════════════════════ */}
      <BookingSection
        badge={`${label} Discovery Session`}
        heading={`Ready to Build Your ${label} Platform?`}
        subheading={`Schedule a free 30-minute consultation with our ${label.toLowerCase()} domain experts. We'll map your requirements, recommend a tech approach, and give you a realistic scope estimate.`}
        primaryCTA={`Book ${label} Consultation`}
        secondaryCTA="Talk to Our Team"
        stats={
          bookingStats ?? [
            { value: "30 min", label: "Discovery session" },
            { value: "Free", label: "No commitment" },
            { value: "24 hr", label: "Response time" },
          ]
        }
        trustItems={
          trustItems ?? [
            "NDA signed before any discussion",
            "Senior engineers on every call",
            "Honest assessment, not a sales pitch",
          ]
        }
      />

      <Footer />
      <FloatingBookingButton label={floatingButtonLabel ?? "Book Consultation"} />
    </>
  );
}
