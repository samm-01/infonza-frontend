"use client";

import Link from "next/link";
import { BOOKING_URL, TRUST_SIGNALS, CORE_SERVICES, INDUSTRIES } from "../../lib/geo-data";
import { BookingSection } from "./booking-cta";

/**
 * GeoPageTemplate — reusable full-page template for all GEO SEO landing pages.
 *
 * config shape:
 * {
 *   breadcrumbs:   [{ name, url }]
 *   badge:         string
 *   headline:      string
 *   headlineSub:   string   (shown in gradient)
 *   subheadline:   string
 *   description:   string
 *   stats:         [{ value, label }]   (defaults to GLOBAL_STATS)
 *   whyPoints:     [{ title, desc }]
 *   services:      [{ title, desc, link }]   (defaults to CORE_SERVICES)
 *   localPresence: { headline, paragraphs: [string], highlights: [string] }
 *   midCtaHeadline: string
 *   industries:    [string]   (defaults to INDUSTRIES)
 *   caseStudy:     { tag, client, title, desc, link }
 *   faqs:          [{ q, a }]
 *   relatedLinks:  [{ label, href }]
 *   bookingProps:  object   (passed to BookingSection)
 * }
 */
export default function GeoPageTemplate({ config }) {
  const {
    breadcrumbs = [],
    badge,
    headline,
    headlineSub,
    subheadline,
    description,
    stats,
    whyPoints = [],
    services = CORE_SERVICES,
    localPresence,
    midCtaHeadline = "Ready to Build with Us?",
    industries = INDUSTRIES,
    caseStudy,
    faqs = [],
    relatedLinks = [],
    bookingProps = {},
  } = config;

  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* ── Breadcrumb ── */}
      {breadcrumbs.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-4">
          <nav className="text-sm text-gray-500" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.url}>
                {i < breadcrumbs.length - 1 ? (
                  <>
                    <Link href={crumb.url} className="hover:text-teal-400 transition-colors">
                      {crumb.name}
                    </Link>
                    <span className="mx-2">/</span>
                  </>
                ) : (
                  <span className="text-gray-300">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 pt-8 pb-20">
        <div className="max-w-4xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-medium mb-6">
              {badge}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {headline}{" "}
            {headlineSub && (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                {headlineSub}
              </span>
            )}
          </h1>
          {subheadline && (
            <p className="text-xl text-gray-400 leading-relaxed mb-4 max-w-3xl">
              {subheadline}
            </p>
          )}
          {description && (
            <p className="text-gray-500 mb-10 max-w-3xl leading-relaxed">{description}</p>
          )}
          <div className="flex flex-wrap gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition-all text-sm"
            >
              Schedule Free Consultation
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 hover:border-teal-400/50 text-white rounded-lg transition-all text-sm"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      {stats && stats.length > 0 && (
        <section className="border-y border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Why Infonza ── */}
      {whyPoints.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Infonza?</h2>
            <p className="text-gray-400 text-lg">
              Engineering excellence, transparent delivery, and senior talent — without the overhead of
              US or UK hiring costs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map(({ title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-teal-500/30 transition-colors"
              >
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Services ── */}
      <section className="bg-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">
              End-to-end software engineering — from architecture and build to deployment and ongoing
              support.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ title, desc, link }) => (
              <Link
                key={title}
                href={link}
                className="p-6 rounded-xl border border-white/10 bg-[#0a0a0a] hover:border-teal-500/40 transition-all group"
              >
                <h3 className="font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{desc}</p>
                <span className="text-teal-400 text-sm font-medium">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local Presence ── */}
      {localPresence && (
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">{localPresence.headline}</h2>
              <div className="space-y-4">
                {(localPresence.paragraphs || []).map((para, i) => (
                  <p key={i} className="text-gray-400 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {(localPresence.highlights || []).map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-lg border border-white/10 bg-white/5"
                >
                  <span className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Mid-page CTA ── */}
      <section className="bg-teal-500/10 border-y border-teal-500/20 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">{midCtaHeadline}</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a free 30-minute strategy session. No sales pitch — honest technical advice on your
            specific challenge.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition-all text-sm"
            >
              Book Discovery Call
            </a>
            <Link
              href="/case-studies"
              className="px-8 py-4 border border-white/20 hover:border-teal-400/50 text-white rounded-lg transition-all text-sm"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-400 text-lg">
            Deep domain expertise across industries where software reliability, compliance, and
            performance are non-negotiable.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300 text-center"
            >
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* ── Case Study ── */}
      {caseStudy && (
        <section className="bg-white/5 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8 md:p-12 max-w-4xl">
              <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-3">
                {caseStudy.tag}
              </div>
              <h3 className="text-2xl font-bold mb-2">{caseStudy.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{caseStudy.client}</p>
              <p className="text-gray-400 mb-6 leading-relaxed">{caseStudy.desc}</p>
              <Link
                href={caseStudy.link}
                className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors text-sm"
              >
                Read the full case study →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Trust Signals ── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold mb-8 text-gray-300">Enterprise Trust Signals</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TRUST_SIGNALS.map(({ label, value }) => (
            <div
              key={label}
              className="p-4 rounded-xl border border-white/10 bg-white/5 text-center"
            >
              <div className="text-teal-400 font-semibold text-sm mb-1">{value}</div>
              <div className="text-gray-500 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQs ── */}
      {faqs.length > 0 && (
        <section className="bg-white/5 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  className="p-6 rounded-xl border border-white/10 bg-[#0a0a0a]"
                >
                  <h3 className="font-semibold text-white mb-3">{q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Links ── */}
      {relatedLinks.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-xl font-semibold mb-6 text-gray-300">Explore Related Services</h2>
          <div className="flex flex-wrap gap-3">
            {relatedLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-400 hover:border-teal-400/30 hover:text-teal-400 transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Final CTA ── */}
      <BookingSection {...bookingProps} />

      {/* ── Mobile floating CTA ── */}
      <div className="fixed bottom-6 left-4 right-4 z-50 md:hidden">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-xl shadow-2xl shadow-teal-500/30 transition-all text-sm"
        >
          Book Free Consultation
        </a>
      </div>
    </main>
  );
}
