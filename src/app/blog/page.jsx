"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTABanner from "../components/cta-banner";

const posts = [
  {
    slug: "how-we-cut-insurance-onboarding-from-3-hours-to-45-minutes",
    title: "How We Cut Insurance Onboarding from 3 Hours to 45 Minutes",
    excerpt:
      "A deep dive into the workflow automation system we built for a US insurance agency — what we built, why we built it that way, and the results.",
    category: "Case Study",
    date: "March 18, 2025",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "why-most-saas-mvps-fail-and-how-to-avoid-it",
    title: "Why Most SaaS MVPs Fail (And How to Avoid It)",
    excerpt:
      "After building 50+ products, we've seen the same mistakes over and over. Here's what separates MVPs that get traction from ones that get scrapped.",
    category: "Product",
    date: "February 28, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    slug: "choosing-the-right-stack-for-your-crm-project",
    title: "Choosing the Right Stack for Your CRM Project",
    excerpt:
      "React + Node vs Laravel vs low-code: a practical framework for picking the right stack based on scale, team, and long-term maintenance cost.",
    category: "Engineering",
    date: "February 10, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "api-integrations-that-actually-hold-up-in-production",
    title: "API Integrations That Actually Hold Up in Production",
    excerpt:
      "Rate limits, retries, webhooks, and error handling — the unglamorous work that separates a demo-ready integration from a production-ready one.",
    category: "Engineering",
    date: "January 22, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "what-us-startups-get-wrong-about-offshore-development",
    title: "What US Startups Get Wrong About Offshore Development",
    excerpt:
      "Bad offshore experiences usually come down to three things: unclear specs, no accountability structure, and treating developers as order-takers.",
    category: "Business",
    date: "January 8, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "erp-implementation-lessons-from-a-construction-company",
    title: "ERP Implementation Lessons from a Construction Company",
    excerpt:
      "Building Readybuild taught us that ERP projects live or die on change management, not technology. Here's what actually mattered.",
    category: "Case Study",
    date: "December 15, 2024",
    readTime: "6 min read",
    featured: false,
  },
];

const categoryColors = {
  "Case Study": "bg-teal-50 text-teal-700 border-teal-100",
  Product: "bg-blue-50 text-blue-700 border-blue-100",
  Engineering: "bg-slate-100 text-slate-600 border-slate-200",
  Business: "bg-amber-50 text-amber-700 border-amber-100",
};

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-teal-600" />
              Blog
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Thinking out loud
              <br />
              <span className="text-gradient">on software & business</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Product decisions, engineering lessons, and honest takes on
              building software that actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Featured
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 rounded-2xl p-10 lg:p-14 border border-slate-800 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="relative">
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-5 ${categoryColors[featured.category]}`}
                >
                  {featured.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-4 max-w-2xl">
                  {featured.title}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8 max-w-xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-6">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Read Article →
                  </Link>
                  <span className="text-xs text-slate-500">
                    {featured.date} · {featured.readTime}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All posts */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
            All Posts
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
              >
                <span
                  className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full border mb-4 ${categoryColors[post.category]}`}
                >
                  {post.category}
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-400">
                    {post.date} · {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-teal-600 hover:text-teal-700"
                  >
                    Read →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
