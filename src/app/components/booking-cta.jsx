"use client";
import Link from "next/link";
import {
  HiCalendarDays,
  HiPhone,
  HiCheckCircle,
  HiArrowRight,
  HiSparkles,
  HiClock,
  HiShieldCheck,
  HiBolt,
} from "react-icons/hi2";

export const BOOKING_URL = "https://calendar.app.google/tCXYTm21YtV7AkXFA";

/* ─────────────────────────────────────────────────────────────────────────────
   BOOKING SECTION
   Full-width dark section — use at the bottom of every service page
───────────────────────────────────────────────────────────────────────────── */
export function BookingSection({
  badge = "Free Consultation",
  heading = "Ready to Start Your Project?",
  subheading = "Schedule a free 30-minute strategy session with our senior engineers. No sales pitch — just honest technical advice on your specific challenge.",
  primaryCTA = "Schedule Free Consultation",
  secondaryCTA = "Talk to Our Experts",
  stats = [
    { value: "30 min", label: "Discovery call" },
    { value: "Free", label: "No commitment" },
    { value: "24 hr", label: "Response time" },
  ],
  trustItems = [
    "NDA signed before discussion",
    "Senior engineers on every call",
    "Honest assessment, not a sales pitch",
  ],
}) {
  return (
    <section className="relative bg-slate-900 py-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-8">
            <HiCalendarDays className="w-3.5 h-3.5" />
            {badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-6">
            {heading}
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{subheading}</p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
          >
            <HiCalendarDays className="w-5 h-5" />
            {primaryCTA}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all hover:-translate-y-0.5"
          >
            <HiPhone className="w-5 h-5" />
            {secondaryCTA}
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:divide-x sm:divide-slate-700/60 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="px-8 py-3 text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust items */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
              <HiCheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   BOOKING BANNER
   Inline light-bg banner — for mid-page consultation prompts
───────────────────────────────────────────────────────────────────────────── */
export function BookingBanner({
  heading = "Have a project in mind?",
  subheading = "Get a free technical consultation from our senior engineering team.",
  cta = "Schedule Discovery Session",
}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200/60 rounded-2xl p-8">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center">
            <HiCalendarDays className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">{heading}</h3>
            <p className="text-slate-500 text-sm mt-0.5">{subheading}</p>
          </div>
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-0.5 whitespace-nowrap"
        >
          <HiCalendarDays className="w-4 h-4" />
          {cta}
          <HiArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STICKY HERO CTA STRIP
   Thin strip shown beneath hero sections
───────────────────────────────────────────────────────────────────────────── */
export function BookingStrip({
  text = "Trusted by 150+ companies worldwide",
  cta = "Book Strategy Call",
  items = [
    { icon: HiShieldCheck, label: "NDA Protected" },
    { icon: HiBolt, label: "Agile Delivery" },
    { icon: HiClock, label: "Fast Ramp-Up" },
    { icon: HiSparkles, label: "Top 1% Engineers" },
  ],
}) {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
            {items.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                <Icon className="w-3.5 h-3.5 text-teal-600" />
                {label}
              </div>
            ))}
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          >
            <HiCalendarDays className="w-3.5 h-3.5" />
            {cta}
            <HiArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   FLOATING BUTTON
   Fixed mobile button — import on "use client" pages only
───────────────────────────────────────────────────────────────────────────── */
export function FloatingBookingButton({ label = "Book Call" }) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold shadow-2xl shadow-teal-500/40 hover:opacity-90 active:scale-95 transition-all"
    >
      <HiCalendarDays className="w-4 h-4" />
      {label}
    </a>
  );
}
