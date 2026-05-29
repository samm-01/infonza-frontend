"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getAttribution } from "@/lib/analytics/attribution";
import { events } from "@/lib/analytics/events";

const projectTypes = [
  "Web / App Development",
  "SaaS Product",
  "CRM / ERP System",
  "API Integration",
  "Automation Workflow",
  "Something Else",
];

const budgetRanges = [
  "Under $5K",
  "$5K – $15K",
  "$15K – $30K",
  "$30K – $60K",
  "$60K+",
  "Not sure yet",
];

const faqs = [
  {
    q: "How quickly can you start?",
    a: "Usually within 1–2 weeks of our discovery call. We'll scope the project, agree on the plan, and kick off with a proper technical brief.",
  },
  {
    q: "Do you work with US-based clients remotely?",
    a: "Yes, most of our clients are US-based and we work fully remotely. We schedule calls across US time zones (EST/PST) and provide daily async updates.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Discovery → Technical spec → Weekly sprints with Friday demos → Launch → 60-day support. You'll always know what's being built and when.",
  },
  {
    q: "Can you work with our existing codebase?",
    a: "Yes. We do audits, take over existing projects, and build new features on top of existing systems. We'll review the codebase first and give you an honest assessment.",
  },
  {
    q: "What if we're not sure what we need?",
    a: "That's what the strategy call is for. We'll ask the right questions and help you clarify scope, timeline, and budget before you make any commitment.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", projectType: "", budget: "", message: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          attribution: getAttribution(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSubmitted(true);
      events.contactFormSubmit({
        service: formData.projectType || undefined,
        source: "contact_page",
        page: "/contact",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-teal-600" />
              Get In Touch
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Let&apos;s talk about
              <br />
              <span className="text-gradient">what you&apos;re building</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              No pressure, no pitch. Just a 30-minute conversation to understand your
              project and give you honest advice on the best path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Tell us about your project
              </h2>

              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-teal-600">
                      <path
                        d="M4 10l4 4 8-8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">You&apos;re all set</h3>
                  <p className="text-slate-500 text-sm">
                    We&apos;ve received your message. We&apos;ll follow up within 24 hours with next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Alex Johnson"
                        aria-required="true"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Work Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        placeholder="alex@company.com"
                        aria-required="true"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company / Startup Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      What are you building? <span className="text-red-400">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <label key={type} className="cursor-pointer">
                          <input
                            type="radio"
                            name="projectType"
                            value={type}
                            className="sr-only peer"
                            checked={formData.projectType === type}
                            onChange={handleChange}
                          />
                          <span className="block px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 peer-checked:border-teal-500 peer-checked:bg-teal-50 peer-checked:text-teal-700 hover:border-slate-300 transition-all">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-3">
                      Budget Range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((range) => (
                        <label key={range} className="cursor-pointer">
                          <input
                            type="radio"
                            name="budget"
                            value={range}
                            className="sr-only peer"
                            checked={formData.budget === range}
                            onChange={handleChange}
                          />
                          <span className="block px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 peer-checked:border-teal-500 peer-checked:bg-teal-50 peer-checked:text-teal-700 hover:border-slate-300 transition-all">
                            {range}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Describe your project <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      aria-required="true"
                      placeholder="Tell us what you're building, the problem it solves, and where you're at today..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold text-base hover:opacity-90 transition-all hover:shadow-lg hover:shadow-teal-500/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : "Send Message →"}
                  </button>

                  <p className="text-xs text-center text-slate-400">
                    We respond within 24 hours · No spam · No commitment required
                  </p>
                </form>
              )}
            </motion.div>

            {/* Side info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-8"
            >
              {/* What to expect */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-6">What happens next</h3>
                <div className="space-y-5">
                  {[
                    {
                      step: "01",
                      title: "We review your message",
                      desc: "Within 24 hours, a senior team member reviews your project brief.",
                    },
                    {
                      step: "02",
                      title: "Strategy call (30 min)",
                      desc: "We ask the right questions, understand your goals, and give honest feedback.",
                    },
                    {
                      step: "03",
                      title: "Proposal & timeline",
                      desc: "A clear scope document, timeline, and fixed-price estimate. No vague retainers.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="text-xs font-bold text-teal-600 flex-shrink-0 mt-0.5 w-5">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 mb-1">
                          {item.title}
                        </div>
                        <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-5">Direct contact</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                    <a
                      href="mailto:support@infonza.com"
                      className="text-sm text-teal-600 font-medium hover:text-teal-700"
                    >
                      support@infonza.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/company/infonza-innovations/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-teal-600 font-medium hover:text-teal-700"
                    >
                      Infonza Innovations
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Response time</p>
                    <p className="text-sm text-slate-600">Within 24 hours, weekdays</p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { number: "50+", label: "Projects" },
                  { number: "30+", label: "US Clients" },
                  { number: "98%", label: "Retention" },
                ].map((badge, i) => (
                  <div key={i} className="bg-teal-50 rounded-xl p-4 border border-teal-100">
                    <div className="text-xl font-bold text-teal-700">{badge.number}</div>
                    <div className="text-xs text-teal-600 mt-1">{badge.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Common questions
            </h2>
            <p className="text-slate-500">
              Still on the fence? These might help.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-slate-900 text-sm">
                    {faq.q}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`flex-shrink-0 text-slate-400 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M3 6l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
