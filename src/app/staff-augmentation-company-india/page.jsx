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
  name: "IT Staff Augmentation Services",
  description:
    "Hire pre-vetted remote developers, AI engineers, QA specialists, and full product teams from India. Scale your engineering team in 48 hours.",
  url: `${BASE_URL}/staff-augmentation-company-india`,
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
    { "@type": "Country", name: "Canada" },
  ],
  serviceType: "IT Staff Augmentation",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How fast can I hire a developer through Infonza?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most placements complete within 48–72 hours. You'll receive 2–3 shortlisted candidates within 24 hours of your brief. Interview, select, and onboard within 48 hours. For senior AI engineers, typical placement is 3–5 days.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stacks do your developers specialise in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "React, Next.js, Node.js, Python, TypeScript, AWS, GCP, Azure, LangChain, LlamaIndex, PostgreSQL, MongoDB, Kubernetes, Terraform, and more. We staff 12+ technology specialisms across frontend, backend, AI/ML, DevOps, and QA.",
      },
    },
    {
      "@type": "Question",
      name: "Do your developers work in US timezones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer EST/PST overlap schedules with 5–8 hours of daily overlap. All developers communicate in English, use US-standard tools (Slack, Jira, GitHub), and join your existing team rituals — standups, sprint reviews, retrospectives.",
      },
    },
    {
      "@type": "Question",
      name: "How does staff augmentation differ from a development agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With staff augmentation, the developers join your team directly — working under your direction, in your codebase, using your tools. You get the output quality of an in-house team at offshore rates. An agency manages the team and process separately, which works for defined projects but not for ongoing product development.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum engagement period?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our standard minimum is 3 months. This gives enough time for the developer to integrate with your team and deliver meaningful output. For project-based engagements, we can discuss shorter timelines.",
      },
    },
    {
      "@type": "Question",
      name: "Are NDAs included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We sign mutual NDAs before any technical discussions begin. All developers also sign individual IP assignment and confidentiality agreements. Your codebase, business logic, and client data remain protected.",
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
      name: "Staff Augmentation Company India",
      item: `${BASE_URL}/staff-augmentation-company-india`,
    },
  ],
};

const ROLES = [
  { title: "React / Next.js Developers", link: "/staff-augmentation/hire-react-developers", rate: "From $35/hr" },
  { title: "Node.js Backend Engineers", link: "/staff-augmentation/hire-nodejs-developers", rate: "From $35/hr" },
  { title: "AI / ML Engineers", link: "/staff-augmentation/hire-ai-engineers", rate: "From $45/hr" },
  { title: "MERN Stack Developers", link: "/staff-augmentation/hire-mern-stack-developers", rate: "From $35/hr" },
  { title: "DevOps / Cloud Engineers", link: "/staff-augmentation/hire-devops-engineers", rate: "From $40/hr" },
  { title: "Dedicated Development Teams", link: "/staff-augmentation/dedicated-development-team", rate: "Custom" },
];

const PROCESS = [
  {
    step: "01",
    title: "Share Your Brief",
    desc: "Tell us the role, tech stack, level of seniority, and timeline. 15-minute call or written brief — your choice.",
  },
  {
    step: "02",
    title: "Receive Shortlisted Candidates",
    desc: "Within 24 hours, receive 2–3 pre-vetted candidates with profiles, code samples, and technical assessment results.",
  },
  {
    step: "03",
    title: "Interview & Select",
    desc: "Run your own technical interview. Select the candidate you want. We handle contracts and onboarding logistics.",
  },
  {
    step: "04",
    title: "Start in 48 Hours",
    desc: "The developer joins your team — Slack, GitHub, Jira, standups. Full integration, no handholding required.",
  },
];

const FAQS = [
  {
    q: "How fast can I hire a developer through Infonza?",
    a: "Most placements complete within 48–72 hours. You'll receive shortlisted candidates within 24 hours of your brief. For senior AI engineers, typical placement is 3–5 days.",
  },
  {
    q: "What tech stacks do your developers specialise in?",
    a: "React, Next.js, Node.js, Python, TypeScript, AWS, GCP, LangChain, PostgreSQL, Kubernetes, and more. We cover 12+ technology specialisms across frontend, backend, AI/ML, DevOps, and QA.",
  },
  {
    q: "Do your developers work in US timezones?",
    a: "Yes. EST/PST overlap schedules with 5–8 hours of daily overlap. All developers communicate in English and join your existing team rituals.",
  },
  {
    q: "How does staff augmentation differ from an agency?",
    a: "With staff augmentation, developers join your team directly under your direction, in your codebase, using your tools. You get in-house team quality at offshore rates.",
  },
  {
    q: "What is the minimum engagement period?",
    a: "Standard minimum is 3 months. This allows enough time for meaningful integration and delivery.",
  },
  {
    q: "Are NDAs included?",
    a: "Yes. Mutual NDAs are signed before any technical discussions begin. All developers also sign individual IP assignment and confidentiality agreements.",
  },
];

export default function StaffAugmentationIndiaPage() {
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
            <span className="text-gray-300">Staff Augmentation Company India</span>
          </nav>
        </div>

        {/* ── Hero ── */}
        <section className="max-w-7xl mx-auto px-6 pt-8 pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-xs font-medium mb-6">
              India's Leading Staff Augmentation Company • 200+ Engineers Placed
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Staff Augmentation Company{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                India
              </span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-4 max-w-3xl">
              Hire pre-vetted developers, AI engineers, and QA specialists from India. Senior engineers
              only. US/UK timezone overlap. Placement in 48 hours. NDA from day one.
            </p>
            <p className="text-gray-500 mb-10 max-w-3xl">
              Stop interviewing 40 candidates to hire one developer. Our vetting process — technical
              assessment, live coding interview, communication evaluation — means the first 2–3 candidates
              you meet are deployment-ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-black font-semibold rounded-lg transition-all text-sm"
              >
                Hire a Developer in 48 Hours
              </Link>
              <Link
                href="/staff-augmentation"
                className="px-8 py-4 border border-white/20 hover:border-teal-400/50 text-white rounded-lg transition-all text-sm"
              >
                View All Roles
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-y border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "48 hrs", label: "Average Placement Time" },
              { value: "200+", label: "Engineers Placed" },
              { value: "12+", label: "Tech Specialisms" },
              { value: "94%", label: "Client Retention" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Roles ── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Engineering Roles Available Now</h2>
            <p className="text-gray-400 text-lg">
              Every role comes with pre-vetted candidates, technical assessment results, and portfolio
              evidence. You interview only people worth hiring.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ROLES.map(({ title, link, rate }) => (
              <Link
                key={title}
                href={link}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-teal-500/40 transition-all group"
              >
                <h3 className="font-semibold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-teal-400 mb-4">{rate}</p>
                <span className="text-gray-500 text-xs">View profiles →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Hiring Process ── */}
        <section className="bg-white/5 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold mb-4">How the Hiring Process Works</h2>
              <p className="text-gray-400 text-lg">
                From brief to onboarded developer in 48 hours. No agency overhead, no six-week recruiter
                process.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS.map(({ step, title, desc }) => (
                <div key={step} className="relative">
                  <div className="text-5xl font-bold text-teal-500/20 mb-3">{step}</div>
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why India ── */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why India for Software Engineering?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Cost Advantage Without Quality Compromise",
                    desc: "Senior engineers at $35–$55/hr vs $150–$200/hr for equivalent US talent. Same seniority, same output, 60–70% cost reduction.",
                  },
                  {
                    title: "Largest English-Speaking Engineering Talent Pool",
                    desc: "India produces 1.5M+ engineering graduates annually. The senior talent pool for React, Node.js, Python, AI, and cloud engineering is unmatched globally.",
                  },
                  {
                    title: "Proven Track Record with US Companies",
                    desc: "Every major US tech company runs significant engineering operations in India. The model works — the risk is vendor selection, not the location.",
                  },
                  {
                    title: "Mature Agile Delivery Culture",
                    desc: "India's top engineering teams have adopted US-standard development practices — sprint-based delivery, GitHub-first workflows, daily standups, retrospectives.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white text-sm mb-1">{title}</div>
                      <div className="text-sm text-gray-400">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 p-8">
              <h3 className="text-xl font-bold mb-4">Engagement Model Comparison</h3>
              <div className="space-y-4 text-sm">
                {[
                  { label: "US in-house hire", cost: "$180K+ / year all-in", time: "60–90 day hiring cycle" },
                  { label: "US staffing agency", cost: "$80–120K / year + 20% fee", time: "4–6 weeks placement" },
                  { label: "Infonza staff augmentation", cost: "$60–100K / year all-in", time: "48 hour placement" },
                ].map(({ label, cost, time }) => (
                  <div key={label} className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 last:border-0">
                    <div className="font-medium text-white">{label}</div>
                    <div className="text-right">
                      <div className="text-teal-400">{cost}</div>
                      <div className="text-gray-500 text-xs">{time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
          <h2 className="text-xl font-semibold mb-6 text-gray-300">Explore by Role</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Hire React Developers India", href: "/staff-augmentation/hire-react-developers" },
              { label: "Hire Node.js Developers", href: "/staff-augmentation/hire-nodejs-developers" },
              { label: "Hire AI Engineers", href: "/staff-augmentation/hire-ai-engineers" },
              { label: "Hire MERN Stack Developers", href: "/staff-augmentation/hire-mern-stack-developers" },
              { label: "Hire DevOps Engineers", href: "/staff-augmentation/hire-devops-engineers" },
              { label: "Dedicated Development Team", href: "/staff-augmentation/dedicated-development-team" },
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
