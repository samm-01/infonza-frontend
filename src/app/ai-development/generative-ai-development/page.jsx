"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiSparkles,
  HiChevronDown,
  HiPhoto,
  HiCodeBracket,
  HiDocumentText,
  HiMusicalNote,
  HiCpuChip,
  HiShieldCheck,
  HiRocketLaunch,
  HiGlobeAlt,
  HiBolt,
  HiStar,
} from "react-icons/hi2";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  BookingSection,
  BookingBanner,
  FloatingBookingButton,
  BOOKING_URL,
} from "../../components/booking-cta";

/* ═══════════════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════════════ */

const CAPABILITIES = [
  {
    icon: HiDocumentText,
    title: "Content Generation Pipelines",
    desc: "Automated content at scale — product descriptions, marketing copy, technical documentation, and SEO content. Style-consistent output that matches your brand voice through fine-tuning.",
    use: "E-commerce, Publishing, Marketing",
  },
  {
    icon: HiPhoto,
    title: "AI Image Generation & Synthesis",
    desc: "Custom image generation workflows using Stable Diffusion, DALL-E 3, and Midjourney APIs — with fine-tuning on your brand assets for style-consistent visual outputs.",
    use: "Design, E-commerce, Advertising",
  },
  {
    icon: HiCodeBracket,
    title: "AI Code Assistant Integration",
    desc: "Embed code generation and review capabilities into your developer tools — custom-trained on your codebase conventions, internal libraries, and architecture patterns.",
    use: "Engineering Platforms, Developer Tools",
  },
  {
    icon: HiCpuChip,
    title: "Multimodal AI Applications",
    desc: "Applications that process and generate across text, images, audio, and video simultaneously — document analysis with visual understanding, audio transcription with semantic tagging.",
    use: "Media, Healthcare, Legal Tech",
  },
  {
    icon: HiGlobeAlt,
    title: "AI-Powered Personalization",
    desc: "GenAI-driven personalization engines that generate unique content, recommendations, and experiences for each user — at scale, without manual content creation.",
    use: "SaaS, E-commerce, EdTech",
  },
  {
    icon: HiBolt,
    title: "Synthetic Data Generation",
    desc: "Generate high-quality synthetic training data for downstream ML models — bypassing data scarcity and privacy constraints in regulated industries.",
    use: "Healthcare, Finance, Insurance",
  },
];

const DIFFERENTIATORS = [
  {
    title: "Fine-Tuning for Brand Consistency",
    desc: "Generic GenAI produces generic output. We fine-tune models on your brand voice, domain terminology, and style guidelines — so outputs are immediately on-brand without manual editing.",
    icon: HiStar,
  },
  {
    title: "Quality Evaluation Frameworks",
    desc: "Every GenAI pipeline ships with automated quality metrics: factual consistency, style adherence, coherence, and domain accuracy. Not vibes — measurable quality at scale.",
    icon: HiCheckCircle,
  },
  {
    title: "Responsible AI Architecture",
    desc: "Content safety filters, bias detection, and human-in-the-loop review for high-stakes outputs. We design GenAI systems that won't embarrass your brand.",
    icon: HiShieldCheck,
  },
  {
    title: "Cost Optimization at Scale",
    desc: "At GenAI scale, model costs compound quickly. We architect intelligent caching, model routing (GPT-4o for complex, GPT-4o-mini for simple tasks), and batching strategies to minimize cost.",
    icon: HiRocketLaunch,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "GenAI Use Case Discovery",
    desc: "We map your content and generation needs against available GenAI capabilities, prioritize by business impact, and define quality metrics before any build work begins.",
  },
  {
    step: "02",
    title: "Model Selection & Fine-Tuning",
    desc: "Foundation model selection (GPT-4o, Claude, Gemini, Llama) based on your use case. Fine-tuning on your proprietary data for style, domain, and quality alignment.",
  },
  {
    step: "03",
    title: "Pipeline Architecture",
    desc: "Design the end-to-end generation pipeline — prompt management, output post-processing, quality gates, caching layers, and human review workflows.",
  },
  {
    step: "04",
    title: "Evaluation & Red Teaming",
    desc: "Systematic evaluation against quality dimensions. Adversarial testing to find failure modes before launch. Outputs reviewed by domain experts against your success criteria.",
  },
  {
    step: "05",
    title: "Production Deployment & Scaling",
    desc: "Cloud-native deployment with auto-scaling, rate limiting, cost monitoring dashboards, and feedback loops that improve generation quality continuously.",
  },
];

const RESULTS = [
  { metric: "10×", label: "Content throughput", sub: "same team, dramatically higher output volume" },
  { metric: "65%", label: "Cost reduction in content ops", sub: "vs manual content creation at scale" },
  { metric: "4.6/5", label: "Average content quality score", sub: "rated by domain expert reviewers" },
];

const TECH_STACK = [
  { n: "GPT-4o", c: "bg-green-100 text-green-800 border-green-200" },
  { n: "Claude 3.5 Sonnet", c: "bg-orange-100 text-orange-800 border-orange-200" },
  { n: "Stable Diffusion XL", c: "bg-purple-100 text-purple-800 border-purple-200" },
  { n: "DALL-E 3", c: "bg-blue-100 text-blue-800 border-blue-200" },
  { n: "Llama 3.1", c: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { n: "LangChain", c: "bg-violet-100 text-violet-800 border-violet-200" },
  { n: "Hugging Face", c: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { n: "FastAPI", c: "bg-teal-100 text-teal-800 border-teal-200" },
  { n: "ComfyUI", c: "bg-slate-100 text-slate-800 border-slate-200" },
  { n: "AWS SageMaker", c: "bg-orange-100 text-orange-800 border-orange-200" },
];

const FAQS = [
  {
    q: "What's the difference between GenAI development and just calling the OpenAI API?",
    a: "Calling the OpenAI API is a starting point, not a product. Enterprise GenAI development involves fine-tuning for brand alignment, building quality evaluation frameworks, designing content safety guardrails, implementing caching and cost optimization, creating human-in-the-loop review workflows, and building the full pipeline from input to production-ready output. The API call is maybe 5% of the work.",
  },
  {
    q: "Can you fine-tune a model on our proprietary content and style guidelines?",
    a: "Yes — and we strongly recommend it for content-heavy use cases. We fine-tune GPT-4o-mini, Llama 3, and Mistral models on your existing content, style guides, and brand voice documentation. Fine-tuned models produce significantly more on-brand output and require shorter, cheaper prompts — typically reducing per-generation cost by 40–70%.",
  },
  {
    q: "How do you handle content quality assurance at scale?",
    a: "We build automated quality evaluation into every GenAI pipeline: factual consistency scoring against source material, style adherence metrics, toxicity and bias checks, and semantic coherence scoring. For high-stakes content (legal, medical, financial), we add human review queues with expert annotators. Metrics are tracked in real-time dashboards so you can see quality trends over time.",
  },
  {
    q: "What about intellectual property and copyright for AI-generated content?",
    a: "This is an evolving legal landscape, and we take it seriously. We help clients implement source tracking (knowing what training data influenced outputs), establish usage policies, and in many cases fine-tune on their own proprietary content to reduce dependence on potentially contested training data. We recommend consulting IP counsel for high-stakes commercial applications.",
  },
  {
    q: "How do you keep GenAI costs manageable at high volume?",
    a: "GenAI cost optimization is a first-class engineering concern for us. We implement intelligent model routing (complex tasks → GPT-4o, simple tasks → GPT-4o-mini or fine-tuned open-source), semantic caching (reuse similar previous generations), request batching, and prompt compression. In practice, these optimizations reduce cloud AI costs by 50–75% vs naive single-model implementations.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-slate-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-semibold text-slate-900 text-sm sm:text-base">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <HiChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════════════════════════════ */

export default function GenerativeAIDevelopmentPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-20 right-0 w-[700px] h-[500px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-development" className="hover:text-teal-400 transition-colors">AI Development</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Generative AI Development</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-violet-900/60 border border-violet-700/40 rounded-full px-4 py-1.5 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiSparkles className="w-3.5 h-3.5" />
                Generative AI Development Company
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                <span className="text-gradient">Generative AI</span> Development Services
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Custom GenAI applications that generate text, images, code, and structured data
                at enterprise scale — fine-tuned on your data, aligned to your brand, and
                monitored for quality and safety.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Schedule Free Consultation <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  View GenAI Case Studies
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                {RESULTS.map((r) => (
                  <div key={r.label}>
                    <div className="text-2xl font-bold text-gradient">{r.metric}</div>
                    <div className="text-xs text-slate-400 mt-0.5 leading-tight">{r.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Generation preview */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-200">Content Generation Pipeline</span>
                  <span className="text-xs text-violet-400 font-mono">GPT-4o + Fine-tuned</span>
                </div>
                <div className="bg-slate-900/70 rounded-xl p-4 mb-4 font-mono text-xs space-y-1 border border-slate-700/40">
                  <div className="text-slate-500">{"// Input prompt"}</div>
                  <div className="text-violet-300">
                    Generate product description for: Titanium Pro Laptop Stand
                  </div>
                  <div className="text-slate-500 mt-2">{"// Style: brand voice (professional, concise)"}</div>
                </div>
                <div className="bg-slate-700/40 rounded-xl p-4 border border-slate-600/30 mb-4">
                  <div className="text-xs text-teal-400 font-semibold mb-2">Generated Output:</div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    Elevate your workspace with the Titanium Pro — a precision-engineered
                    laptop stand machined from aircraft-grade aluminum. Adjustable from 15° to
                    60°, it reduces neck strain by 40% and improves airflow to keep your
                    machine running at peak performance. Built for professionals who demand
                    both form and function.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { label: "Quality Score", val: "4.8/5", color: "text-green-400" },
                    { label: "Brand Fit", val: "96%", color: "text-teal-400" },
                    { label: "Latency", val: "1.2s", color: "text-blue-400" },
                  ].map((m) => (
                    <div key={m.label} className="bg-slate-900/60 rounded-lg p-2">
                      <div className={`font-bold text-sm font-mono ${m.color}`}>{m.val}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="bg-dots bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              GenAI <span className="text-gradient">Capabilities</span> We Build
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six production-grade generative AI application categories — each with a defined
              quality framework and measurable business outcome.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{c.desc}</p>
                <div className="text-xs text-slate-400 font-medium">
                  Industries: <span className="text-teal-600">{c.use}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="relative bg-slate-900 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Why Our GenAI Delivers <span className="text-gradient">Production Results</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.09 }}
                className="flex gap-4 p-5 bg-slate-800/60 border border-slate-700/60 rounded-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-600/20 border border-violet-600/30 flex items-center justify-center">
                  <d.icon className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{d.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              How We Build <span className="text-gradient">GenAI Applications</span>
            </h2>
            <p className="text-slate-500">A systematic process built for production quality — not impressive demos.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/20 transition-all"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs font-mono">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ── */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-5">GenAI Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {TECH_STACK.map(({ n, c }) => (
              <span key={n} className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold ${c}`}>{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Want to build a generative AI product?"
            subheading="Free consultation with our GenAI team — we'll scope your use case and recommend the right architecture."
            cta="Schedule GenAI Consultation"
          />
        </div>
      </section>

      {/* ── RELATED ── */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "LLM Development & Fine-Tuning",
                desc: "Build custom LLMs fine-tuned on your domain data — the foundation for powerful GenAI applications.",
                href: "/ai-development/llm-development-company",
                icon: HiCpuChip,
              },
              {
                title: "OpenAI Integration Services",
                desc: "Fast-track GPT-4 API integration into your existing products — function calling, fine-tuning, embeddings.",
                href: "/ai-development/openai-integration-services",
                icon: HiSparkles,
              },
              {
                title: "B2B SaaS Development",
                desc: "Build a GenAI-powered SaaS product from scratch — we handle full-stack development and AI integration.",
                href: "/saas-development/b2b-saas-development",
                icon: HiRocketLaunch,
              },
            ].map((s, i) => (
              <motion.div
                key={s.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={s.href}
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-3">
                    <s.icon className="w-4 h-4 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-teal-700 transition-colors">{s.title}</h3>
                  <p className="text-xs text-slate-500 flex-1 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-teal-600 text-xs font-semibold">
                    Learn more <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500">Straightforward answers about building generative AI from our engineering team.</p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((f, i) => <FAQItem key={i} {...f} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Free GenAI Consultation"
        heading="Build a Generative AI Application That Scales"
        subheading="Schedule a 30-minute consultation with our GenAI engineers. We'll assess your use case, recommend the right model architecture, and provide a realistic project estimate."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to GenAI Team"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
