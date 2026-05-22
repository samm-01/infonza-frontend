"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import CTABanner from "../../components/cta-banner";
import { caseStudies } from "../data";

/* ─── PDF Download Modal ─────────────────────────────────────────────────── */

function PdfModal({ study, onClose }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/case-study-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, studyId: study.id, studyTitle: study.title }),
      });
      if (!res.ok) throw new Error("Request failed");
      setDone(true);
      // Trigger download
      const a = document.createElement("a");
      a.href = `/case-studies/${study.id}.pdf`;
      a.download = `Infonza-${study.id}-case-study.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25 }}
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {!done ? (
          <>
            {/* Icon */}
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center mb-6">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M11 3v10m0 0l-3-3m3 3l3-3M5 17h12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-1">Download Case Study</h3>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Enter your name and email and we&apos;ll send the full PDF your way — and start the download immediately.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition"
                  required
                />
              </div>

              {error && (
                <p className="text-xs text-red-500 font-medium">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="3" />
                      <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Processing…
                  </>
                ) : (
                  "Download PDF →"
                )}
              </button>
            </form>

            <p className="text-xs text-slate-400 text-center mt-4">
              No spam. We&apos;ll only follow up if it&apos;s relevant.
            </p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14l5.5 5.5L22 8" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Download started!</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Your PDF is downloading now. We&apos;ll also email a copy to you shortly.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────────── */

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const [showModal, setShowModal] = useState(false);

  const study = caseStudies.find((s) => s.id === slug);
  if (!study) return notFound();

  const currentIndex = caseStudies.indexOf(study);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <Navbar />

      <AnimatePresence>
        {showModal && (
          <PdfModal study={study} onClose={() => setShowModal(false)} />
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/case-studies" className="hover:text-teal-600 transition-colors">
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-slate-600">{study.client}</span>
          </div>

          <div className="max-w-4xl">
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-3">
              {study.tag}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {study.title}
            </h1>

            {/* Meta strip */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <span>
                <span className="font-semibold text-slate-700">Client:</span>{" "}
                {study.client}
              </span>
              <span>
                <span className="font-semibold text-slate-700">Timeline:</span>{" "}
                {study.duration}
              </span>
              <span>
                <span className="font-semibold text-slate-700">Team:</span>{" "}
                {study.teamSize}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Results bar */}
      <section className="py-10 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {study.results.map((r, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {r.metric}
                </div>
                <div className="text-xs text-teal-100 mt-1 leading-snug">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              Background
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              The situation before we started
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              {study.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              The Challenge
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              What made this hard
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">{study.challenge}</p>

            <div className="space-y-3">
              {study.challengePoints.map((point, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-2xl border border-slate-200 p-5">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="text-red-500 text-xs font-bold">✕</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              Our Approach
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-10">
              How we built it
            </h2>

            <div className="space-y-6">
              {study.approachSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </div>
                    {i < study.approachSteps.length - 1 && (
                      <div className="w-px flex-1 bg-slate-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-sm font-bold text-slate-900 mb-2">
                      {step.phase}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              What We Delivered
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Features shipped
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {study.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl border border-slate-200 px-5 py-4">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="flex-shrink-0 mt-0.5 text-teal-500"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm text-slate-600">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              Technical Architecture
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              How it&apos;s built
            </h2>
            <p className="text-slate-600 leading-relaxed text-base mb-8">
              {study.architecture}
            </p>
            <div className="flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              Results
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              What changed after launch
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {study.results.map((r, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 text-center"
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600 leading-tight">
                    {r.metric}
                  </div>
                  <div className="text-xs text-slate-400 mt-2 leading-snug">{r.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Download CTA */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl px-8 py-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-1">
                Get the full case study as a PDF
              </h3>
              <p className="text-sm text-slate-400">
                Includes detailed architecture diagrams and implementation notes — free to download.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-teal-500/30 whitespace-nowrap"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8m0 0l-2.5-2.5M8 10l2.5-2.5M3 13h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Next case study */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Next Case Study
          </p>
          <Link
            href={`/case-studies/${nextStudy.id}`}
            className="group flex items-center justify-between gap-6 bg-white rounded-2xl border border-slate-200 px-7 py-6 hover:border-teal-300 hover:shadow-md transition-all"
          >
            <div>
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-1">
                {nextStudy.tag}
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                {nextStudy.title}
              </h3>
            </div>
            <span className="text-slate-400 group-hover:translate-x-1 transition-transform text-xl">
              →
            </span>
          </Link>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
