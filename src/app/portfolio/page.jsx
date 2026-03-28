"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTABanner from "../components/cta-banner";

const featured = [
  {
    title: "GloveBox CRM",
    description:
      "A comprehensive SaaS-based CRM solution tailored for small and medium-sized insurance agencies to manage customer relationships, quotes, and policy workflows.",
    image: "/images/portfolio-glovebox.png",
    link: "https://glovebox.io/gloveboxcrm/",
    tags: ["Insurance", "CRM", "SaaS"],
  },
  {
    title: "Readybuild ERP",
    description:
      "An ERP solution designed for construction companies to streamline project management, bid tracking, accounting, and resource planning across multiple job sites.",
    image: "/images/portfolio-readybuild.png",
    link: "https://readybuild.com",
    tags: ["Construction", "ERP", "React"],
  },
  {
    title: "DNH Training",
    description:
      "An e-learning platform offering professional courses and certifications for various industries, with video hosting, progress tracking, and certificate generation.",
    image: "/images/portfolio-dnh.png",
    link: "https://www.dnhtraining.com",
    tags: ["E-Learning", "SaaS", "Next.js"],
  },
  {
    title: "BuilderWing Marketplace",
    description:
      "A marketplace platform connecting homeowners with trusted contractors for home improvement projects, with bidding, messaging, scheduling, and Stripe payments.",
    image: "/images/portfolio-builderwing.png",
    link: "https://www.builderwing.com/",
    tags: ["Marketplace", "Real Estate", "React"],
  },
];

const moreProjects = [
  {
    title: "The Load Off",
    description:
      "Unified operations platform replacing 5 disconnected tools for a US service provider — covering client management, task tracking, time logging, messaging, and billing in one place.",
    link: "https://www.theloadoff.com/",
    tags: ["Operations", "SaaS", "US Client"],
    category: "SaaS / Enterprise",
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Darren – Logistics Platform",
    description:
      "Multi-role logistics coordination system connecting cargo owners, fleet operators, and drivers with structured bidding, GPS tracking, proof of delivery, and a full audit trail.",
    link: null,
    tags: ["Logistics", "Multi-role", "React"],
    category: "Logistics & Operations",
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    title: "SheWatches",
    description:
      "Live video interaction platform for a US-based client — real-time peer matching, intelligent pairing algorithms, built-in moderation, and scalable concurrent video session handling.",
    link: "https://shewatches.com/",
    tags: ["Video Streaming", "Real-time", "WebRTC"],
    category: "SaaS / Enterprise",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    title: "EuroTile Pro – B2B Marketplace",
    description:
      "B2B tile marketplace connecting manufacturers, distributors, and retailers with tiered pricing by square footage, multi-vendor ordering, sample management, and supplier approval workflows.",
    link: "https://eurotile.pro/",
    tags: ["B2B Marketplace", "Tile Industry", "Multi-vendor"],
    category: "Marketplace",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "EuroTile – B2C Storefront",
    description:
      "Retail e-commerce platform for a European tile business with catalog browsing, attribute filters, sample ordering, real-time inventory, and a centralized admin backend.",
    link: "https://eurotile.com/",
    tags: ["E-Commerce", "Retail", "Node.js"],
    category: "E-Commerce",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "FairBnb – Booking Engine",
    description:
      "Advanced booking platform for service-based businesses with real-time availability, appointment scheduling, secure payments, automated reminders, and a post-service reviews system.",
    link: "https://fairbnb.coop/",
    tags: ["Booking", "Marketplace", "SaaS"],
    category: "Marketplace",
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    title: "PurveyPro",
    description:
      "SaaS loan management platform where professionals act as middlemen for borrowers — supporting personalized invite links, multiple lending options, and business funding plan generation.",
    link: "https://purveypro.com",
    tags: ["FinTech", "Loan Management", "SaaS"],
    category: "FinTech",
    gradient: "from-green-600 to-emerald-500",
  },
  {
    title: "Meals on Wheels 4U",
    description:
      "Food ordering and delivery platform with menu browsing, recurring delivery scheduling, real-time tracking, and an optional AI voice ordering integration via Twilio and DeepGram.",
    link: "https://mealsonwheels4u.com/",
    tags: ["Food Delivery", "AI Voice", "SaaS"],
    category: "Food & Retail",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "ConnectWithChain",
    description:
      "Multi-restaurant ordering platform with pickup and delivery, pre-orders, recurring orders, Google Maps integration, Stripe payments, and AI-powered phone ordering via Twilio and spaCy.",
    link: "https://connectwithchain.com/",
    tags: ["Multi-Restaurant", "AI Voice", "React"],
    category: "Food & Retail",
    gradient: "from-pink-600 to-rose-500",
  },
  {
    title: "LokBest – IoT eCommerce",
    description:
      "IoT-powered cashier-less in-store shopping for a German client. Customers order via mobile app and pick up in-store; entry is controlled by QR code with automated IoT access management.",
    link: "https://www.lokbest-store.com/",
    tags: ["IoT", "E-Commerce", "Germany"],
    category: "E-Commerce",
    gradient: "from-cyan-600 to-blue-500",
  },
  {
    title: "LambertLauzon – Inventory",
    description:
      "Centralized multi-warehouse inventory management module for a Canadian furniture company — tracking stock in/out and internal transfers across multiple provincial locations.",
    link: "https://www.lambertlauzon.com/",
    tags: ["Inventory", "ERP", "Furniture"],
    category: "SaaS / Enterprise",
    gradient: "from-slate-600 to-slate-500",
  },
  {
    title: "First of a Kind",
    description:
      "E-commerce platform with bulk CSV-based catalog management, enabling daily updates for thousands of products with images, SKUs, pricing, and inventory levels from a single spreadsheet.",
    link: "https://firstofakind.com",
    tags: ["E-Commerce", "Inventory", "Bulk Import"],
    category: "E-Commerce",
    gradient: "from-indigo-600 to-violet-500",
  },
];

const categories = ["All", "Marketplace", "SaaS / Enterprise", "E-Commerce", "Logistics & Operations", "FinTech", "Food & Retail"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? moreProjects
      : moreProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-teal-600" />
              Portfolio
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Projects we&apos;ve
              <br />
              <span className="text-gradient">shipped and stood behind</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              A selection of client projects across insurance, construction, logistics,
              e-commerce, fintech, food delivery, IoT, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-widest mb-10">
            <span className="w-8 h-px bg-slate-300" />
            Featured Work
          </div>
          {featured.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center mb-10 bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — Infonza project screenshot`}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-8 lg:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6 text-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* More Work */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-slate-300" />
              More Work
            </div>
            <p className="text-slate-500 text-sm">
              {moreProjects.length} additional projects across industries
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-teal-600 text-white shadow-sm"
                    : "bg-white text-slate-500 border border-slate-200 hover:border-teal-300 hover:text-teal-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                {/* Gradient Header */}
                <div
                  className={`h-28 bg-gradient-to-br ${project.gradient} flex items-end p-5`}
                >
                  <span className="text-white font-bold text-base leading-snug drop-shadow">
                    {project.title}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-xs font-medium text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="mt-5">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-teal-600 text-xs font-semibold hover:text-teal-700 transition-colors group"
                      >
                        View Live Project
                        <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                      </a>
                    ) : (
                      <span className="text-slate-300 text-xs font-medium">
                        Internal / Under NDA
                      </span>
                    )}
                  </div>
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
