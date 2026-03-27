"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-28 bg-slate-900 relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid" />

      {/* Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-teal-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-48 bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Ready to build something
            <br />
            <span className="text-gradient">that actually works?</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-12 max-w-xl mx-auto">
            Book a 30-minute strategy call. No sales pitch — just an honest
            conversation about your project and the best way to approach it.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold text-base hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-0.5"
            >
              Book a Strategy Call →
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 rounded-xl border border-slate-600 text-slate-200 font-semibold text-base hover:border-slate-400 hover:text-white transition-all"
            >
              See Case Studies
            </Link>
          </div>

          {/* Trust signal */}
          <p className="mt-10 text-sm text-slate-500">
            30-min call · No commitment · Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
