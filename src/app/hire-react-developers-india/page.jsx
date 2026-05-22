"use client";

import Link from "next/link";
import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { BookingSection } from "../components/booking-cta";

const BASE_URL = "https://infonza.com";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hire React Developers India",
  description:
    "Hire pre-vetted senior React.js developers from India. React 18, Next.js 14, TypeScript, Redux Toolkit. Available in 72 hours.",
  url: `${BASE_URL}/hire-react-developers-india`,
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: BASE_URL,
    logo: `${BASE_URL}/infonza-logo.jpg`,
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Australia" },
  ],
  serviceType: "React.js Developer Staffing",
  offers: {
    "@type": "Offer",
    price: "35",
    priceCurrency: "USD",
    description: "Starting rate for senior React.js developers from India",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can I hire a React developer from Infonza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typical placement is 48–72 hours. You receive shortlisted candidates within 24 hours of your brief. Interview, select, and the developer starts within 72 hours. For specialist React/Next.js roles, we may take 3–5 days to ensure the right match.",
      },
    },
    {
      "@type": "Question",
      name: "What React.js seniority levels do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We place Mid-level developers (3–5 years experience), Senior developers (5–8 years), and Lead/Principal engineers (8+ years with architecture and team leadership experience). All developers are assessed on React architecture, performance optimisation, testing (Jest, Cypress), and Next.js App Router.",
      },
    },
    {
      "@type": "Question",
      name: "Do your React developers know Next.js?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most of our React developers have working knowledge of Next.js. We specifically assess Next.js 14+ App Router, server components, streaming, and ISR/SSG/SSR strategies. If you need a Next.js specialist, specify this in your brief.",
      },
    },
    {
      "@type": "Question",
      name: "What are the rates for hiring React developers from India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rates start at $35/hr for mid-level developers, $45–$55/hr for senior developers, and $60–$75/hr for lead/principal engineers. All rates are inclusive of management overhead and HR. No hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire React developers for a short-term project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Minimum engagement is 3 months for ongoing roles. For project-based work (MVP builds, specific feature sprints), we can accommodate shorter engagements — discuss your timeline in the initial call.",
      },
    },
    {
      "@type": "Question",
      name: "What if the developer doesn't meet expectations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a replacement guarantee. If a developer doesn't perform to expectations within the first 30 days, we replace them at no cost. We've placed hundreds of developers — this is rare, but the protection is there.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Staff Augmentation", item: `${BASE_URL}/staff-augmentation` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Hire React Developers India",
      item: `${BASE_URL}/hire-react-developers-india`,
    },
  ],
};

const SENIORITY_LEVELS = [
  {
    level: "Mid-Level React Developer",
    years: "3–5 years experience",
    rate: "$35–$40/hr",
    skills: ["React 18", "Next.js", "TypeScript", "Redux Toolkit", "REST APIs", "Jest"],
  },
  {
    level: "Senior React Developer",
    years: "5–8 years experience",
    rate: "$45–$55/hr",
    skills: ["React 18 Concurrent Mode", "Next.js 14 App Router", "Performance Optimisation", "Micro-frontends", "Cypress E2E", "GraphQL"],
  },
  {
    level: "Lead / Principal React Engineer",
    years: "8+ years experience",
    rate: "$60–$75/hr",
    skills: ["Architecture Design", "Team Leadership", "Code Review Standards", "CI/CD", "Technical Strategy", "Mentoring"],
  },
];

const TECH_COVERAGE = [
  "React 18 & Concurrent Features",
  "Next.js 14+ App Router",
  "TypeScript",
  "Redux Toolkit & Zustand",
  "React Query / SWR",
  "Tailwind CSS & Styled Components",
  "Jest & React Testing Library",
  "Cypress & Playwright",
  "GraphQL & REST APIs",
  "Storybook",
  "Webpack & Vite",
  "Performance & Core Web Vitals",
];

const FAQS = [
  {
    q: "How quickly can I hire a React developer from Infonza?",
    a: "Typical placement is 48–72 hours. You receive shortlisted candidates within 24 hours of your brief. Interview, select, and the developer starts within 72 hours.",
  },
  {
    q: "What React.js seniority levels do you offer?",
    a: "Mid-level (3–5 years), Senior (5–8 years), and Lead/Principal engineers (8+ years with architecture and team leadership). All assessed on React architecture, performance, testing, and Next.js App Router.",
  },
  {
    q: "Do your React developers know Next.js?",
    a: "Most do. We specifically assess Next.js 14+ App Router, server components, streaming, and ISR/SSG/SSR strategies. Specify Next.js in your brief for specialists.",
  },
  {
    q: "What are the rates for React developers from India?",
    a: "From $35/hr for mid-level, $45–$55/hr for senior, $60–$75/hr for lead engineers. All-inclusive — no hidden fees.",
  },
  {
    q: "Can I hire React developers for a short-term project?",
    a: "Minimum 3 months for ongoing roles. For project-based work (MVP builds, feature sprints), shorter engagements are possible — discuss in the initial call.",
  },
  {
    q: "What if the developer doesn't meet expectations?",
    a: "We offer a 30-day replacement guarantee at no cost. This is rare — our vetting process is thorough — but the protection is there.",
  },
];

export default function HireReactDevelopersIndiaPage() {
  return (
    <>
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="bg-[#0a0a0a] text-white">
        {/* ── Breadcrumb ── */}
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/staff-augmentation" className="hover:text-teal-400 transition-colors">Staff Augmentation</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Hire React Developers India</span>
          </nav>
        </div>

        {/* ── Hero ── */}
        <section className="max-w-7xl mx-auto px-6 pt-8 pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-medium mb-6">
              Hire React Developers from India • 72-Hour Placement
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hire Senior{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                React Developers
              </span>{" "}
              from India
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-4 max-w-3xl">
              Pre-vetted senior React.js and Next.js developers from India. React 18, TypeScript, Redux
              Toolkit, Tailwind, and full-stack MERN capability. Placement in 72 hours.
            </p>
            <p className="text-gray-500 mb-10 max-w-3xl">
              Starting from{" "}
              <span className="text-teal-400 font-semibold">$35/hr</span>. NDA from day one.
              US/UK timezone overlap. 30-day replacement guarantee.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition-all text-sm"
              >
                Hire a React Developer Now
              </Link>
              <Link
                href="/staff-augmentation"
                className="px-8 py-4 border border-white/20 hover:border-teal-400/50 text-white rounded-lg transition-all text-sm"
              >
                View All Engineering Roles
              </Link>
            </div>
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <section className="border-y border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "72 hrs", label: "Average Placement" },
              { value: "Senior Only", label: "No Junior Candidates" },
              { value: "$35/hr", label: "Starting Rate" },
              { value: "30-day", label: "Replacement Guarantee" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-teal-400 mb-1">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Seniority Levels ── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">React Developer Seniority Levels</h2>
            <p className="text-gray-400 text-lg">
              Every candidate is assessed across architecture, performance, testing, and communication.
              You only interview candidates who've cleared our technical bar.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SENIORITY_LEVELS.map(({ level, years, rate, skills }) => (
              <div
                key={level}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-teal-500/30 transition-all"
              >
                <h3 className="font-semibold text-white mb-1">{level}</h3>
                <p className="text-sm text-gray-500 mb-2">{years}</p>
                <p className="text-teal-400 font-semibold text-sm mb-4">{rate}</p>
                <ul className="space-y-1">
                  {skills.map((skill) => (
                    <li key={skill} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-teal-500 flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech Coverage ── */}
        <section className="bg-white/5 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl font-bold mb-4">React Technology Coverage</h2>
              <p className="text-gray-400 text-lg">
                Every React developer is assessed on the full modern React ecosystem — not just component
                writing.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {TECH_COVERAGE.map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-3 rounded-lg border border-white/10 bg-[#0a0a0a] text-sm text-gray-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vetting Process ── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Our React Developer Vetting Process</h2>
            <p className="text-gray-400 text-lg">
              Only 8% of applicants pass our full assessment. You get the 8%.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Technical Screen",
                desc: "React architecture questions, component design patterns, performance optimisation, and TypeScript assessment.",
              },
              {
                step: "02",
                title: "Live Coding Interview",
                desc: "90-minute live coding session — React component building, state management, async data fetching, and debugging.",
              },
              {
                step: "03",
                title: "Take-Home Project",
                desc: "Real-world mini-project (Next.js + API + TypeScript). We review code quality, architecture decisions, and documentation.",
              },
              {
                step: "04",
                title: "Communication Assessment",
                desc: "English fluency, async written communication, and US-style collaboration norms evaluation.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step}>
                <div className="text-5xl font-bold text-teal-500/20 mb-3">{step}</div>
                <h3 className="font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="bg-white/5 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="p-6 rounded-xl border border-white/10 bg-[#0a0a0a]">
                  <h3 className="font-semibold text-white mb-3">{q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal Links ── */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-xl font-semibold mb-6 text-gray-300">Related Hiring Pages</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Hire Node.js Developers", href: "/staff-augmentation/hire-nodejs-developers" },
              { label: "Hire AI Engineers", href: "/staff-augmentation/hire-ai-engineers" },
              { label: "Hire MERN Stack Developers", href: "/staff-augmentation/hire-mern-stack-developers" },
              { label: "Hire DevOps Engineers", href: "/staff-augmentation/hire-devops-engineers" },
              { label: "Staff Augmentation Company India", href: "/staff-augmentation-company-india" },
              { label: "AI Development Company USA", href: "/ai-development-company-usa" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-400 hover:border-teal-400/30 hover:text-teal-400 transition-all"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        <BookingSection />
      </main>

      <Footer />
    </>
  );
}
