"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTABanner from "../components/cta-banner";

const technologies = [
  {
    name: "React",
    category: "Frontend",
    color: "bg-sky-50 border-sky-200 text-sky-700",
    dot: "bg-sky-400",
    description:
      "Component-driven UI engineers experienced with Next.js, Redux, React Query, and complex state management.",
  },
  {
    name: "Angular",
    category: "Frontend",
    color: "bg-red-50 border-red-200 text-red-700",
    dot: "bg-red-400",
    description:
      "Enterprise Angular developers proficient in RxJS, NgRx, Angular Material, and large-scale SPA architecture.",
  },
  {
    name: "Node.js",
    category: "Backend",
    color: "bg-green-50 border-green-200 text-green-700",
    dot: "bg-green-400",
    description:
      "Backend engineers who build scalable REST and GraphQL APIs, microservices, and real-time systems.",
  },
  {
    name: "PHP",
    category: "Backend",
    color: "bg-violet-50 border-violet-200 text-violet-700",
    dot: "bg-violet-400",
    description:
      "Laravel and Symfony specialists for CMS platforms, e-commerce systems, and legacy PHP modernisation.",
  },
  {
    name: "Java",
    category: "Backend",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    dot: "bg-orange-400",
    description:
      "Spring Boot and enterprise Java engineers for high-throughput backend systems and microservices.",
  },
  {
    name: ".NET",
    category: "Backend",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    dot: "bg-indigo-400",
    description:
      "C# / ASP.NET Core developers for Windows-based enterprise apps, APIs, and Azure cloud integrations.",
  },
  {
    name: "Flutter",
    category: "Mobile",
    color: "bg-cyan-50 border-cyan-200 text-cyan-700",
    dot: "bg-cyan-400",
    description:
      "Cross-platform mobile engineers who ship pixel-perfect iOS and Android apps from a single Dart codebase.",
  },
  {
    name: "React Native",
    category: "Mobile",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    dot: "bg-blue-400",
    description:
      "Mobile developers with deep React Native experience across Expo and bare workflow, including native module integration.",
  },
  {
    name: "MEAN Stack",
    category: "Full Stack",
    color: "bg-teal-50 border-teal-200 text-teal-700",
    dot: "bg-teal-400",
    description:
      "MongoDB · Express · Angular · Node.js full-stack engineers ready to own the complete JavaScript ecosystem.",
  },
  {
    name: "MERN Stack",
    category: "Full Stack",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
    dot: "bg-emerald-400",
    description:
      "MongoDB · Express · React · Node.js developers who build and ship complete product features end to end.",
  },
  {
    name: "LAMP Stack",
    category: "Full Stack",
    color: "bg-amber-50 border-amber-200 text-amber-700",
    dot: "bg-amber-400",
    description:
      "Linux · Apache · MySQL · PHP engineers for traditional web platforms, WordPress customisation, and e-commerce.",
  },
];

const engagementModels = [
  {
    title: "Dedicated Full-Time",
    description:
      "A developer works exclusively on your product 5 days a week. Best for ongoing product development where deep context and team continuity matter.",
    details: ["40 hrs/week guaranteed", "Direct Slack / standup integration", "2-week trial period"],
  },
  {
    title: "Part-Time Augmentation",
    description:
      "20 hours per week from a vetted specialist. Ideal when you have a core team and need to accelerate a specific area without a full-time hire.",
    details: ["20 hrs/week", "Flexible scheduling across time zones", "No long-term lock-in"],
  },
  {
    title: "Project-Based Sprint",
    description:
      "Fixed-scope sprint with a pre-defined delivery. Works well for a well-defined feature, integration, or refactor where outcome matters more than ongoing availability.",
    details: ["Fixed scope & timeline", "Milestone-based delivery", "Works alongside your team or independently"],
  },
];

const process = [
  {
    step: "01",
    title: "Share Your Requirements",
    description:
      "Tell us the tech stack, seniority level, team timezone, and how long you need the developer. A quick call is usually enough.",
  },
  {
    step: "02",
    title: "We Match Within 48 Hours",
    description:
      "We shortlist 2–3 vetted developers from our bench who fit your exact requirements. You review profiles and conduct a technical interview.",
  },
  {
    step: "03",
    title: "Start With a Trial Week",
    description:
      "Begin with a paid trial week before committing. This gives both sides confidence before a longer engagement.",
  },
  {
    step: "04",
    title: "Integrate & Scale",
    description:
      "Once onboarded, the developer joins your standups, tools, and workflows. Scale the team up or down as your project evolves.",
  },
];

const categoryColors = {
  Frontend: "bg-sky-100 text-sky-700",
  Backend: "bg-green-100 text-green-700",
  Mobile: "bg-cyan-100 text-cyan-700",
  "Full Stack": "bg-teal-100 text-teal-700",
};

export default function StaffAugmentationPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-teal-600" />
              IT Staff Augmentation
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Extend your team with
              <br />
              <span className="text-gradient">vetted developers</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              Hire skilled developers across 11 technology stacks — on-demand,
              without the overhead of a full hiring process. They work in your
              tools, your timezone, and your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-teal-500/20"
              >
                Hire a Developer →
              </Link>
              <a
                href="#technologies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
              >
                View Technologies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "11+", label: "Technology stacks" },
              { value: "48h", label: "Time to first match" },
              { value: "3", label: "Engagement models" },
              { value: "IST", label: "Primary timezone (overlap-friendly)" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              Technologies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Developers across every major stack
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Whether you need a specialist in a niche framework or a versatile
              full-stack engineer, we have vetted developers ready to integrate
              with your team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`rounded-2xl border p-6 hover:shadow-md transition-all ${tech.color}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold">{tech.name}</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[tech.category]}`}
                  >
                    {tech.category}
                  </span>
                </div>
                <p className="text-sm leading-relaxed opacity-80">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              From requirement to code in days
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl border border-slate-200 p-7 h-full">
                  <div className="text-4xl font-bold text-slate-100 mb-4 leading-none">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-slate-300 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              Engagement Models
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Work the way your project demands
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagementModels.map((model, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {model.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
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
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-teal-500/20"
            >
              Tell us what you need →
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
