"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTABanner from "../components/cta-banner";

const projects = [
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

export default function Portfolio() {
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
              A selection of client projects across insurance, construction,
              e-learning, and real estate.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
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

      <CTABanner />
      <Footer />
    </>
  );
}
