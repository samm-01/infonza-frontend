"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiAcademicCap,
  HiBeaker,
  HiBanknotes,
  HiShoppingCart,
  HiHome,
  HiHeart,
  HiTruck,
  HiGlobeAlt,
  HiWrenchScrewdriver,
  HiFilm,
  HiArrowRight,
  HiCalendarDays,
} from "react-icons/hi2";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  BookingSection,
  FloatingBookingButton,
} from "../components/booking-cta";

const INDUSTRIES = [
  {
    href: "/industries/education",
    label: "Education",
    desc: "LMS platforms, student portals, AI tutoring, and EdTech SaaS built for schools, universities, and online learning companies.",
    icon: HiAcademicCap,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    tag: "EdTech",
  },
  {
    href: "/industries/food-beverage",
    label: "Food & Beverage",
    desc: "Online ordering, POS integrations, loyalty apps, and inventory systems that cut third-party commissions and build direct customer relationships.",
    icon: HiBeaker,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    tag: "F&B Tech",
  },
  {
    href: "/industries/finance",
    label: "Finance",
    desc: "Fintech platforms, payment gateways, lending systems, and compliance-first financial software for banks, fintechs, and wealth managers.",
    icon: HiBanknotes,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    tag: "Fintech",
  },
  {
    href: "/industries/retail-ecommerce",
    label: "Retail & eCommerce",
    desc: "Custom storefronts, POS systems, headless commerce platforms, and omnichannel order management for retailers and D2C brands.",
    icon: HiShoppingCart,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    tag: "Commerce",
  },
  {
    href: "/industries/real-estate",
    label: "Real Estate",
    desc: "Property listing portals, CRM systems, virtual tour platforms, and transaction management software for agencies and PropTech companies.",
    icon: HiHome,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    tag: "PropTech",
  },
  {
    href: "/industries/healthcare",
    label: "Healthcare",
    desc: "HIPAA-compliant patient portals, telemedicine platforms, HMS, and clinical workflow automation for hospitals, clinics, and digital health startups.",
    icon: HiHeart,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
    tag: "HealthTech",
  },
  {
    href: "/industries/transport-logistics",
    label: "Transport & Logistics",
    desc: "Fleet management systems, real-time tracking platforms, warehouse management, and supply chain automation for logistics operators.",
    icon: HiTruck,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    tag: "LogTech",
  },
  {
    href: "/industries/travel-hospitality",
    label: "Travel & Hospitality",
    desc: "Booking engines, CRS, property management systems, and guest experience apps for hotels, OTAs, and travel businesses.",
    icon: HiGlobeAlt,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    tag: "TravelTech",
  },
  {
    href: "/industries/manufacturing",
    label: "Manufacturing",
    desc: "Custom ERP, MES, quality management systems, and production planning tools that modernize factory operations and supply chains.",
    icon: HiWrenchScrewdriver,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    tag: "Industry 4.0",
  },
  {
    href: "/industries/media-entertainment",
    label: "Media & Entertainment",
    desc: "Streaming platforms, CMS, content delivery systems, and audience engagement tools for media companies, studios, and content creators.",
    icon: HiFilm,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    tag: "Media Tech",
  },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.06 },
});

export default function IndustriesPage() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative bg-slate-900 pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6"
          >
            Industries We Serve
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight mb-6"
          >
            Domain-Expert Software for{" "}
            <span className="text-gradient">Every Industry</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We don't build generic software. Every platform we deliver is shaped by deep industry knowledge, compliance requirements, and the specific workflows of your domain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://calendar.app.google/tCXYTm21YtV7AkXFA"
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
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INDUSTRIES GRID
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3">
              10 Verticals
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Choose Your Industry
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Each industry page covers the specific solutions, technology, compliance requirements, and case studies relevant to your sector.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div key={ind.href} {...fadeUp(i)}>
                  <Link
                    href={ind.href}
                    className="group flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10 p-6 transition-all duration-300 hover:-translate-y-1 h-full"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`w-11 h-11 rounded-xl ${ind.iconBg} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className={`w-5 h-5 ${ind.iconColor}`} />
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          {ind.tag}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900 leading-tight group-hover:text-teal-700 transition-colors">
                          {ind.label}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed flex-grow">{ind.desc}</p>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-teal-600 group-hover:text-teal-700 mt-4 transition-colors">
                      View solutions{" "}
                      <HiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BOOKING SECTION
      ══════════════════════════════════════════════════════════════ */}
      <BookingSection
        badge="Industry Discovery Session"
        heading="Not Sure Which Solution Fits Your Business?"
        subheading="Book a free 30-minute call with our engineering team. We'll map your industry-specific challenges and recommend the right approach — no commitment required."
        primaryCTA="Book Free Discovery Call"
        secondaryCTA="Send Us a Message"
      />

      <Footer />
      <FloatingBookingButton label="Book Consultation" />
    </>
  );
}
