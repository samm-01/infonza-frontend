"use client";

const techBadges = [
  "React & Next.js",
  "Node.js & Express",
  "Laravel & PHP",
  "PostgreSQL & MongoDB",
  "AWS & Cloud",
  "REST & GraphQL APIs",
  "Stripe & Payments",
  "Insurance APIs",
  "Framer Motion",
  "Tailwind CSS",
  "React & Next.js",
  "Node.js & Express",
  "Laravel & PHP",
  "PostgreSQL & MongoDB",
  "AWS & Cloud",
  "REST & GraphQL APIs",
  "Stripe & Payments",
  "Insurance APIs",
  "Framer Motion",
  "Tailwind CSS",
];

const industries = [
  "Insurance",
  "Real Estate",
  "Construction",
  "E-Commerce",
  "Healthcare",
  "Logistics",
  "Education",
  "Fintech",
];

export default function TrustBar() {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Industries & Technologies We Work With
        </p>

        {/* Scrolling tech strip */}
        <div className="overflow-hidden relative mb-8">
          <div className="flex gap-3 animate-scroll w-max">
            {techBadges.map((badge, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-4 py-2 rounded-full border border-slate-200 text-slate-600 text-sm font-medium bg-slate-50 whitespace-nowrap"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Industry list — static */}
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, i) => (
            <span
              key={i}
              className="px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wide"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
