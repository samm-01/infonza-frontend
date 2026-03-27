"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Infonza didn't just build what I asked for — they pushed back on a few of my early decisions that would've caused real problems down the line. That kind of thinking is rare in a dev partner.",
    name: "Dineth A.",
    role: "Founder, US-based SaaS Startup",
    image: "/avatars/dineth.jpg",
  },
  {
    quote:
      "We've worked with four development agencies over the years. Infonza is the only team that felt like a genuine business partner, not just a vendor taking tickets.",
    name: "Karl B.",
    role: "Agency Owner, Digital Marketing",
    image: "/avatars/karl.jpg",
  },
  {
    quote:
      "Our insurance onboarding used to take 3 hours per client. After the system Infonza built, it's down to under 45 minutes — fully automated. The ROI was clear within 60 days.",
    name: "John G.",
    role: "Operations Director, Insurance Agency",
    image: "/avatars/john.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-8 h-px bg-teal-600" />
            Client Stories
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            What clients say
            <br />
            <span className="text-gradient">after working with us</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col bg-white rounded-2xl p-8 border border-slate-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="#F59E0B"
                  >
                    <path d="M7 1l1.7 3.45L12.5 5l-2.75 2.68.65 3.78L7 9.5l-3.4 1.96.65-3.78L1.5 5l3.8-.55L7 1z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate-700 leading-relaxed mb-8 flex-1 text-[0.925rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover ring-2 ring-slate-100"
                />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
