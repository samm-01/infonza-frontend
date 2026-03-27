"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "US-Based Clients" },
  { value: "5+", label: "Years Building" },
  { value: "98%", label: "Client Retention" },
];

export default function HeroHome() {
  return (
    <section className="relative min-h-screen bg-slate-900 flex flex-col justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid" />

      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Available for New Projects
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            We Build the Software
            <br />
            <span className="text-gradient">Your Business Runs On</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl"
          >
            From MVPs to enterprise CRM/ERP systems — we translate complex
            business operations into clean, automated software that works,
            scales, and delivers ROI.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-24"
          >
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold text-base hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-0.5"
            >
              Book a Strategy Call →
            </Link>
            <Link
              href="/case-studies"
              className="px-7 py-3.5 rounded-xl border border-slate-600 text-slate-200 font-semibold text-base hover:border-slate-400 hover:text-white transition-all"
            >
              See Our Work
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-slate-800"
          >
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
