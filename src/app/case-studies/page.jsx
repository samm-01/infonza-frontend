"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTABanner from "../components/cta-banner";

const caseStudies = [
  {
    id: "glovebox",
    tag: "Insurance · CRM · API Integration",
    client: "US Insurance Agency Platform",
    title: "Quote-to-bind in 45 minutes instead of 3 hours",
    summary:
      "An independent insurance agency was managing their entire book of business across spreadsheets, email, and three disconnected tools. Quoting required manually logging into carrier portals, copying data, and emailing PDFs. Client onboarding took days.",
    challenge:
      "The agency needed a unified platform where agents could pull client data, generate quotes from multiple carriers via API, track policy status, and onboard clients — all in one place without switching tabs.",
    solution:
      "We built a custom insurance CRM with Hartford and other carrier API integrations. The platform automates quote generation, tracks pipeline stages, manages documents, and sends automated follow-ups to clients.",
    results: [
      { metric: "60%", label: "Reduction in quote processing time" },
      { metric: "3 hrs → 45 min", label: "Client onboarding time" },
      { metric: "100%", label: "Elimination of manual data entry" },
      { metric: "4 tools", label: "Replaced with one platform" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Hartford API", "AWS", "Stripe"],
    image: "/images/portfolio-glovebox.png",
    duration: "12 weeks",
    teamSize: "3 engineers",
  },
  {
    id: "readybuild",
    tag: "Construction · ERP · Project Management",
    client: "Mid-size Construction Company",
    title: "From bid to invoice — all in one system",
    summary:
      "A growing construction firm was managing 15+ simultaneous projects using a combination of Excel, WhatsApp groups, and QuickBooks. Project managers had no visibility into overall budget status. Invoicing was delayed by weeks.",
    challenge:
      "They needed a system where project managers could track bids, assign tasks, monitor material costs, log daily progress, and trigger invoicing — without a separate tool for each function.",
    solution:
      "We built a full construction ERP with modules for bid management, project tracking, task assignment, budget monitoring, supplier management, and invoice generation with PDF output. The system included a field worker mobile view.",
    results: [
      { metric: "40 hrs", label: "Saved per week across team" },
      { metric: "28 days → 4 days", label: "Invoice generation cycle" },
      { metric: "100%", label: "Budget visibility across projects" },
      { metric: "0", label: "Missed billing cycles post-launch" },
    ],
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "PDF generation"],
    image: "/images/portfolio-readybuild.png",
    duration: "14 weeks",
    teamSize: "4 engineers",
  },
  {
    id: "dnh",
    tag: "E-Learning · SaaS · White-label",
    client: "Corporate Training Provider",
    title: "White-label training platform launched in 6 weeks",
    summary:
      "A corporate training company was delivering courses through a mix of Zoom sessions, emailed PDFs, and a third-party LMS they'd outgrown. They wanted their own branded platform with video hosting, progress tracking, and certificates.",
    challenge:
      "Build a clean, fast e-learning platform with course management, video streaming, quiz engine, progress tracking, and branded certificates — on a tight timeline before a major client onboarding event.",
    solution:
      "We shipped an MVP in 6 weeks covering course authoring, video hosting via cloud CDN, quiz engine, learner progress dashboards, certificate generation, and an admin panel to manage organizations and users.",
    results: [
      { metric: "6 weeks", label: "MVP to production launch" },
      { metric: "500+", label: "Learners onboarded in month 1" },
      { metric: "40%", label: "Reduction in trainer admin time" },
      { metric: "NPS 72", label: "Learner satisfaction score" },
    ],
    stack: ["Next.js", "Node.js", "AWS S3", "CloudFront", "PostgreSQL", "Stripe"],
    image: "/images/portfolio-dnh.png",
    duration: "6 weeks (MVP)",
    teamSize: "3 engineers",
  },
  {
    id: "builderwing",
    tag: "Marketplace · Real Estate · React",
    client: "Home Improvement Marketplace",
    title: "A two-sided marketplace connecting homeowners and contractors",
    summary:
      "A startup building a home improvement marketplace needed a platform where homeowners could post jobs, contractors could bid, and both parties could communicate, schedule, and transact — all in one place.",
    challenge:
      "Build the full marketplace infrastructure: contractor profiles, job posting, bid management, in-app messaging, scheduling, payment escrow, review system, and an admin panel to manage disputes and payouts.",
    solution:
      "We architected and built the full platform with separate homeowner and contractor interfaces, a real-time messaging system, Stripe Connect for split payments, and a moderation dashboard for the operations team.",
    results: [
      { metric: "120+", label: "Contractors onboarded at launch" },
      { metric: "$180K", label: "Transaction volume in month 2" },
      { metric: "4.8/5", label: "Average contractor rating" },
      { metric: "16 wks", label: "Concept to launch" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Stripe Connect", "Socket.io", "AWS"],
    image: "/images/portfolio-builderwing.png",
    duration: "16 weeks",
    teamSize: "4 engineers",
  },
  {
    id: "theloadoff",
    tag: "Operations · SaaS · US Client",
    client: "US-based Service Provider",
    title: "Five disconnected tools replaced by one unified operations platform",
    summary:
      "A US-based service provider was managing customer requests, task assignments, team communication, time tracking, and billing across five separate tools. Admins had no single view of business operations, leading to missed tasks, delayed invoices, and fragmented client communication.",
    challenge:
      "Build a unified platform with clear role separation for admins, service managers, and clients — covering the full service lifecycle from request intake through task execution to invoice generation, without any tool-switching.",
    solution:
      "We designed and built a custom operations platform with six tightly integrated modules: client management with request intake, task management with priority and due-date tracking, time logging per task, task-based messaging with a centralized inbox, automated invoice generation from logged hours, and a reporting dashboard covering workload, overdue tasks, and team performance.",
    results: [
      { metric: "5 → 1", label: "Tools replaced by one platform" },
      { metric: "100%", label: "Visibility on all active service requests" },
      { metric: "3 roles", label: "Admin, Manager, Client — fully separated" },
      { metric: "Auto", label: "Invoice generation from tracked time" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Socket.io"],
    image: "/images/portfolio-glovebox.png",
    duration: "12 weeks",
    teamSize: "3 engineers",
  },
  {
    id: "darren",
    tag: "Logistics · SaaS · Multi-role Platform",
    client: "Logistics Startup",
    title: "From MVP to commercial SaaS — a logistics platform built to scale",
    summary:
      "A logistics startup needed a platform that could connect cargo owners with verified fleet operators and drivers for transparent, end-to-end freight coordination. The existing process relied on phone calls, WhatsApp groups, and manual paperwork — with no accountability or visibility.",
    challenge:
      "Build a multi-role logistics ecosystem where cargo owners post jobs, fleet owners bid and assign drivers, and drivers manage pickups, deliveries, and proof-of-delivery uploads — with a super admin layer governing the entire platform.",
    solution:
      "We shipped an MVP in Phase 1 covering cargo job posting, bidding workflows, vehicle and driver assignment, basic document handling, and POD uploads. After gathering real user feedback from cargo companies and fleet operators, we evolved the platform into a commercial SaaS in Phase 2 — adding live GPS-based tracking, structured bid revision support, driver verification and vehicle compliance checks, cancellation workflows with full audit trail, and a super admin dashboard with complete operational visibility.",
    results: [
      { metric: "2-phase", label: "MVP to commercial SaaS delivery" },
      { metric: "5 roles", label: "Super Admin, Admin, Cargo Owner, Fleet Owner, Driver" },
      { metric: "Live GPS", label: "Real-time route tracking per shipment" },
      { metric: "100%", label: "Timestamped audit trail on all actions" },
    ],
    stack: ["React.js", "Node.js", "MongoDB", "Google Maps API", "SendGrid", "FCM", "TailwindCSS"],
    image: "/images/portfolio-readybuild.png",
    duration: "16 weeks (MVP + Phase 2)",
    teamSize: "4 engineers",
  },
  {
    id: "eurotile",
    tag: "B2B Marketplace · E-Commerce · Multi-vendor",
    client: "European Tile Manufacturer",
    title: "Two platforms, one product line — B2B marketplace and B2C storefront for a tile business",
    summary:
      "A European tile manufacturer needed two distinct platforms: a B2B marketplace to connect manufacturers, distributors, and retailers for bulk trade, and a separate B2C storefront for direct retail sales to consumers and interior designers.",
    challenge:
      "The B2B platform required tiered pricing by square footage, multi-vendor ordering, supplier approval workflows, sample ordering before bulk commitment, and dynamic order windows aligned to supply cycles. The B2C platform needed to be simpler — clean catalog, real-time inventory, and a smooth checkout — but fully admin-controlled.",
    solution:
      "We built EuroTile Pro (B2B) with vendor and buyer approval flows, tiered volume pricing, a multi-vendor cart with structured checkout, sample and demo ordering, and shipping reference tracking since fulfillment is handled off-platform. In parallel, we built EuroTile B2C as a retail-focused storefront with attribute-based filtering, sample ordering, real-time inventory visibility, and a centralized admin backend for managing products, pricing, and orders.",
    results: [
      { metric: "2", label: "Platforms built (B2B + B2C) in parallel" },
      { metric: "Tiered", label: "Pricing by order volume in sq ft" },
      { metric: "Real-time", label: "Inventory visibility across both platforms" },
      { metric: "Sample", label: "Ordering workflow before full purchase" },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "REST APIs"],
    image: "/images/portfolio-dnh.png",
    duration: "14 weeks",
    teamSize: "3 engineers",
  },
];

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
              We don&apos;t do vague case studies. Here are the actual problems our clients
              faced, what we built, and what changed — across insurance, construction,
              logistics, operations, e-commerce, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, i) => (
        <section
          key={study.id}
          id={study.id}
          className={`py-24 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tag + Client */}
            <div className="mb-10">
              <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-2">
                {study.tag}
              </div>
              <p className="text-sm text-slate-400">{study.client}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-12">
              {/* Left: Story */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-8">
                  {study.title}
                </h2>

                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Background
                    </h4>
                    <p className="text-sm">{study.summary}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      The Challenge
                    </h4>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      What We Built
                    </h4>
                    <p className="text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 mt-6 text-sm text-slate-400">
                  <span>
                    <span className="font-semibold text-slate-700">Timeline:</span>{" "}
                    {study.duration}
                  </span>
                  <span>
                    <span className="font-semibold text-slate-700">Team:</span>{" "}
                    {study.teamSize}
                  </span>
                </div>
              </motion.div>

              {/* Right: Image + Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="space-y-6"
              >
                {/* Image */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9]">
                  <Image
                    src={study.image}
                    alt={study.client}
                    width={700}
                    height={394}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Results */}
                <div className="bg-white rounded-2xl border border-slate-200 p-7">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-5">
                    Results After Launch
                  </h4>
                  <div className="grid grid-cols-2 gap-5">
                    {study.results.map((result, j) => (
                      <div key={j} className="border-l-2 border-teal-500 pl-4">
                        <div className="text-xl font-bold text-slate-900 leading-tight">
                          {result.metric}
                        </div>
                        <div className="text-xs text-slate-400 mt-1 leading-snug">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="border-t border-slate-100" />
          </div>
        </section>
      ))}

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
