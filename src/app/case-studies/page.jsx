"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTABanner from "../components/cta-banner";
import { caseStudies } from "./data";

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-teal-600" />
              Case Studies
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Real projects.
              <br />
              <span className="text-gradient">Honest outcomes.</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              We don&apos;t do vague case studies. Here are the actual problems
              our clients faced, what we built, and what changed after launch.
            </p>
          </div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/case-studies/${study.id}`}
                  className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200 overflow-hidden hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300"
                >
                  {/* Tag bar */}
                  <div className="px-8 pt-8 pb-0">
                    <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-1">
                      {study.tag}
                    </div>
                    <p className="text-xs text-slate-400">{study.client}</p>
                  </div>

                  {/* Title & Summary */}
                  <div className="px-8 pt-5 pb-6 flex-1">
                    <h2 className="text-xl font-bold text-slate-900 leading-snug mb-3 group-hover:text-teal-700 transition-colors">
                      {study.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {study.summary}
                    </p>
                  </div>

                  {/* Metrics strip */}
                  <div className="px-8 py-5 border-t border-slate-100 grid grid-cols-2 gap-4">
                    {study.results.slice(0, 2).map((r, j) => (
                      <div key={j} className="border-l-2 border-teal-500 pl-3">
                        <div className="text-lg font-bold text-slate-900 leading-tight">
                          {r.metric}
                        </div>
                        <div className="text-xs text-slate-400 leading-snug mt-0.5">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stack + CTA */}
                  <div className="px-8 pb-8 pt-0 flex items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {study.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                      {study.stack.length > 3 && (
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-400">
                          +{study.stack.length - 3}
                        </span>
                      )}
                    </div>
                    <span className="flex-shrink-0 text-sm font-semibold text-teal-600 group-hover:translate-x-1 transition-transform">
                      Read case study →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Want to be next? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400 mb-2">Want to be the next case study?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-teal-500/20"
          >
            Start Your Project →
          </Link>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
