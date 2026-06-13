"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTABanner from "../components/cta-banner";

const values = [
  {
    title: "Business-first thinking",
    description:
      "We ask why before we ask how. Every technical decision is filtered through the lens of business outcome.",
  },
  {
    title: "No surprises",
    description:
      "Weekly demos, constant communication, and written specs before we touch code. You're never left guessing.",
  },
  {
    title: "Ownership mindset",
    description:
      "We treat every project like it's our own product — because the software our clients ship reflects on us too.",
  },
  {
    title: "Long-term thinking",
    description:
      "We don't optimize for a fast close. We optimize for a client who stays, refers others, and builds with us again.",
  },
];

const products = [
  {
    title: "YuvaHire",
    description:
      "A SaaS platform connecting students, institutions, and employers. Features placement automation, resume screening, and employer dashboards.",
    image: "/images/product-yuvahire.png",
    link: "https://yuvahire.com",
    status: "Live",
  },
  {
    title: "Select",
    description:
      "A recruitment automation tool for agencies. Simplifies candidate sourcing, screening, and interview scheduling into one clean interface.",
    image: "/images/product-select.png",
    link: "https://select.yuvahire.com/",
    status: "Live",
  },
  {
    title: "YuvaTrack",
    description:
      "A web-based employee attendance and payroll management system designed for small and medium businesses.",
    image: "/images/product-yuvatrack.png",
    link: "#",
    status: "In Development",
  },
];

const stats = [
  { value: "50+", label: "Projects shipped" },
  { value: "30+", label: "US-based clients" },
  { value: "5+", label: "Years building" },
  { value: "4", label: "Industries served" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-teal-500" />
              About Us
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-6">
              We&apos;re not a code shop.
              <br />
              <span className="text-gradient">We&apos;re product thinkers.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Infonza Innovations builds software for US-based startups, agencies, and SMEs
              who need a technical partner that understands business, not just code.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 pt-10 border-t border-slate-800">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
                <span className="w-8 h-px bg-teal-600" />
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
                We started because we were tired of seeing good ideas fail due to bad execution
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Infonza was founded after working closely with US-based businesses who kept
                  running into the same problem: talented founders and operators with great ideas,
                  let down by development teams who built the wrong thing — or built the right
                  thing badly.
                </p>
                <p>
                  We built Infonza to be different. Not a vendor who takes specs and disappears
                  for 3 months. A team that asks uncomfortable questions upfront, pushes back
                  when something doesn&apos;t make business sense, and treats your project with
                  the same rigor we&apos;d apply to our own products.
                </p>
                <p>
                  Today we work with US startups, digital agencies, and enterprise operations
                  teams across insurance, construction, logistics, and education — building the
                  systems they depend on to run their business.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl overflow-hidden border border-slate-200"
            >
              <Image
                src="/images/about-hero.png"
                alt="About Infonza"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-8 h-px bg-teal-600" />
              How We Think
            </div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              The principles behind
              <br />
              <span className="text-gradient">every project we take on</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-8 h-px bg-teal-600" />
              Our Products
            </div>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-5">
              We build for clients.
              <br />
              <span className="text-gradient">We also build for the market.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed">
              In-house SaaS products we&apos;ve shipped — proof that we think in products, not just projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={375}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900">{product.title}</h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        product.status === "Live"
                          ? "bg-teal-50 text-teal-600"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {product.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">
                    {product.description}
                  </p>
                  {product.status === "Live" ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1"
                    >
                      Visit site →
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400 italic">Coming soon</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Office */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
                <span className="w-8 h-px bg-teal-600" />
                Our Home Base
              </div>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
                A real team.
                <br />
                <span className="text-gradient">A real office.</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  We&apos;re not a collection of freelancers working from coffee shops. Infonza operates
                  from a dedicated office in Chandigarh, India — a space built intentionally for
                  focused engineering work.
                </p>
                <p>
                  Our team shows up every day, works together in person, and holds itself accountable
                  to the same standards we set for every client engagement. That consistency is
                  what makes the difference between a vendor and a partner.
                </p>
                <p>
                  When you work with Infonza, you&apos;re working with a stable, committed team —
                  not an outsourcing marketplace.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg"
            >
              <Image
                src="/images/office-exterior.jpg"
                alt="Infonza office in Chandigarh, India"
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured client work */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-slate-200"
            >
              <Image
                src="/images/portfolio-glovebox.png"
                alt="Insurance Platform"
                width={700}
                height={450}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
                Featured Work
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Insurance Workflow Automation Platform
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A custom CRM with Hartford and carrier API integrations, built for a US
                insurance agency. The platform automated quote generation, policy tracking,
                and client onboarding — cutting processing time from 3 hours to 45 minutes.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Stack: React, Node.js, PostgreSQL, Hartford API, AWS
              </p>
              <div className="flex gap-4">
                <Link
                  href="/case-studies#glovebox"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Read Case Study →
                </Link>
                <Link
                  href="/portfolio"
                  className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:border-slate-400 transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
