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
  HiCpuChip,
  HiCircleStack,
  HiShieldCheck,
  HiBolt,
  HiRocketLaunch,
  HiCodeBracket,
  HiMagnifyingGlass,
  HiCog6Tooth,
  HiBeaker,
  HiLockClosed,
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

const LLM_SERVICES = [
  {
    icon: HiCpuChip,
    title: "Supervised Fine-Tuning (SFT)",
    desc: "Fine-tune Llama 3, Mistral, Falcon, and Phi-3 models on your domain data — customer interactions, internal documents, code, and structured records — for task-specific accuracy that generic LLMs cannot match.",
    badge: "Most Common",
  },
  {
    icon: HiBeaker,
    title: "RLHF & Preference Optimization",
    desc: "Reinforcement Learning from Human Feedback and DPO (Direct Preference Optimization) to align model behavior with your specific quality and safety standards beyond what SFT alone achieves.",
    badge: null,
  },
  {
    icon: HiCodeBracket,
    title: "Custom LLM Architecture",
    desc: "When off-the-shelf architectures don't fit — specialized attention mechanisms, domain-specific tokenizers, reduced-parameter models optimized for edge deployment, and mixture-of-experts configurations.",
    badge: null,
  },
  {
    icon: HiMagnifyingGlass,
    title: "Model Evaluation Frameworks",
    desc: "Domain-specific evaluation harnesses with automated benchmarks, adversarial test suites, and human evaluation pipelines. Track model performance continuously across fine-tuning iterations.",
    badge: null,
  },
  {
    icon: HiLockClosed,
    title: "Private & On-Premise Deployment",
    desc: "Deploy fine-tuned models in your own VPC — AWS, Azure, or GCP — with NVIDIA A100/H100 inference optimization, quantization (GGUF/GPTQ), and vLLM for high-throughput serving.",
    badge: "Privacy-First",
  },
  {
    icon: HiCog6Tooth,
    title: "Model Optimization & Compression",
    desc: "Quantization (4-bit, 8-bit), LoRA/QLoRA for parameter-efficient fine-tuning, knowledge distillation to smaller models, and ONNX export for latency-sensitive deployment targets.",
    badge: null,
  },
];

const FINE_TUNING_COMPARISON = [
  { feature: "Domain accuracy", generic: "~65%", finetuned: "~90%", better: true },
  { feature: "Cost at 10M tokens/month", generic: "$30,000+", finetuned: "$3,000", better: true },
  { feature: "Inference latency", generic: "400–800ms", finetuned: "80–200ms", better: true },
  { feature: "Data privacy", generic: "Shared infrastructure", finetuned: "Private VPC", better: true },
  { feature: "Output consistency", generic: "Variable", finetuned: "High (domain-tuned)", better: true },
  { feature: "Prompt length required", generic: "Long (few-shot examples)", finetuned: "Short (model knows domain)", better: true },
];

const PROCESS = [
  {
    step: "01",
    title: "Data Strategy & Curation",
    desc: "We audit your available data — volume, quality, format diversity, and domain coverage. We establish minimum viability thresholds and build data cleaning, deduplication, and quality filtering pipelines.",
  },
  {
    step: "02",
    title: "Base Model Selection",
    desc: "Selection from Llama 3.1/3.2, Mistral, Phi-3, Gemma, and Falcon based on your parameter budget, deployment constraints, and task profile. We benchmark base models on your eval set before committing to fine-tuning.",
  },
  {
    step: "03",
    title: "Fine-Tuning Infrastructure",
    desc: "GPU cluster provisioning (A100/H100), distributed training setup with DeepSpeed or FSDP, checkpoint management, and experiment tracking with W&B or MLflow. QLoRA for cost-efficient adapter-based training.",
  },
  {
    step: "04",
    title: "Training & Iteration",
    desc: "Supervised fine-tuning with hyperparameter optimization, followed by optional RLHF/DPO alignment. Each training run is evaluated against your domain benchmarks — we iterate until targets are met.",
  },
  {
    step: "05",
    title: "Evaluation & Red Teaming",
    desc: "Comprehensive model evaluation: domain accuracy, instruction following, safety, bias, hallucination rate, and adversarial robustness. External red team testing for production readiness certification.",
  },
  {
    step: "06",
    title: "Deployment & Serving",
    desc: "Model quantization and optimization, vLLM or TGI serving infrastructure, load balancing, auto-scaling, and monitoring. OpenAI-compatible API endpoints for drop-in replacement in existing applications.",
  },
];

const RESULTS = [
  { metric: "40%", label: "Better domain accuracy", sub: "vs GPT-4 on specialized domain tasks post fine-tuning" },
  { metric: "90%", label: "Cost reduction at scale", sub: "fine-tuned OSS vs GPT-4 at 10M+ tokens/month" },
  { metric: "3–8 weeks", label: "Typical delivery timeline", sub: "from data audit to production-ready model" },
];

const TECH_STACK = [
  { n: "Llama 3.1/3.2", c: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { n: "Mistral / Mixtral", c: "bg-orange-100 text-orange-800 border-orange-200" },
  { n: "PyTorch", c: "bg-red-100 text-red-800 border-red-200" },
  { n: "Hugging Face", c: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { n: "DeepSpeed / FSDP", c: "bg-blue-100 text-blue-800 border-blue-200" },
  { n: "QLoRA / LoRA", c: "bg-violet-100 text-violet-800 border-violet-200" },
  { n: "vLLM", c: "bg-green-100 text-green-800 border-green-200" },
  { n: "TGI (Text Generation Inference)", c: "bg-teal-100 text-teal-800 border-teal-200" },
  { n: "W&B / MLflow", c: "bg-slate-100 text-slate-800 border-slate-200" },
  { n: "AWS SageMaker / Azure ML", c: "bg-orange-100 text-orange-800 border-orange-200" },
  { n: "NVIDIA A100 / H100", c: "bg-green-100 text-green-800 border-green-200" },
];

const FAQS = [
  {
    q: "When does it make sense to fine-tune vs use RAG or prompt engineering?",
    a: "Fine-tuning makes sense when: (1) you need consistent domain-specific behavior across thousands of requests, not variable prompt-dependent outputs; (2) you have high token volume where GPT-4 costs are prohibitive; (3) data privacy requires models to run in your own infrastructure; (4) latency requirements demand sub-100ms responses; (5) the task requires deep domain knowledge that exceeds what in-context examples can provide. For most use cases, we recommend RAG or prompt engineering first, and fine-tuning when volume or accuracy requirements justify the investment.",
  },
  {
    q: "How much training data do we need for effective fine-tuning?",
    a: "It depends on the task complexity and the chosen base model. For instruction fine-tuning with QLoRA on a well-pretrained base like Llama 3.1, high-quality datasets of 1,000–10,000 examples often produce significant improvements. For RLHF, you need preference pairs — typically 2,000–20,000 comparison pairs for meaningful alignment. Data quality is far more important than quantity. We'll audit your available data in the discovery phase and tell you honestly if you have enough to justify fine-tuning.",
  },
  {
    q: "Can you deploy fine-tuned models in our private cloud without data leaving our environment?",
    a: "Yes — private deployment is one of our primary specializations. We deploy fine-tuned models in your AWS VPC (SageMaker, EC2 with A100s), Azure ML workspace, or GCP Vertex AI. All training and inference happens in your environment. No proprietary data touches Infonza's infrastructure — we work within your cloud account. This is the architecture required for HIPAA, SOC 2, and highly regulated industry use cases.",
  },
  {
    q: "How do fine-tuned open-source models compare to GPT-4 at scale?",
    a: "For general-purpose tasks, GPT-4 remains the best option. For domain-specific tasks, fine-tuned open-source models (Llama 3, Mistral) consistently outperform GPT-4 when measured on in-domain benchmarks — because the fine-tuning teaches the model exactly what your task requires. Cost difference at 10M tokens/month: GPT-4o costs approximately $30,000; a fine-tuned Llama 3.1 70B on your own hardware costs approximately $3,000 in GPU compute. The ROI equation becomes compelling quickly.",
  },
  {
    q: "What ongoing maintenance is required after the model is deployed?",
    a: "Production LLMs require ongoing monitoring for performance drift (as real-world inputs evolve away from training distribution), periodic retraining on new data (typically quarterly), model evaluation against updated benchmarks, and infrastructure maintenance (GPU driver updates, serving framework upgrades). We offer retainer-based model maintenance programs, or we can hand off to your ML team with comprehensive documentation and training.",
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

export default function LLMDevelopmentCompanyPage() {
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
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-red-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-development" className="hover:text-teal-400 transition-colors">AI Development</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">LLM Development Company</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-900/40 border border-red-700/40 rounded-full px-4 py-1.5 text-red-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiCpuChip className="w-3.5 h-3.5" />
                LLM Development Company
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                <span className="text-gradient">LLM Development</span> & Fine-Tuning Services
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Custom large language models fine-tuned on your proprietary data — 40%
                better domain accuracy than generic LLMs and 90% cost reduction at scale
                vs GPT-4. Private deployment in your own VPC.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Schedule LLM Consultation <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  View Case Studies
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

            {/* Right — training metrics visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-200">Fine-Tuning Run — Epoch 3/5</span>
                  <span className="text-xs font-mono text-violet-400">Llama-3.1-70B + QLoRA</span>
                </div>
                <div className="space-y-3 font-mono text-xs mb-4">
                  {[
                    { label: "Training loss", val: "0.312 ↓ 18%", color: "text-green-400" },
                    { label: "Eval loss", val: "0.341 ↓ 14%", color: "text-teal-400" },
                    { label: "Domain accuracy", val: "87.4% ↑ +22%", color: "text-blue-400" },
                    { label: "BLEU-4 score", val: "0.73 ↑ +0.19", color: "text-violet-400" },
                    { label: "Hallucination rate", val: "4.2% ↓ -11%", color: "text-green-400" },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-2 bg-slate-900/70 rounded-lg border border-slate-700/40">
                      <span className="text-slate-400">{m.label}</span>
                      <span className={m.color}>{m.val}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-700/40 rounded-xl p-3 border border-slate-600/30 mb-3">
                  <div className="text-xs text-slate-400 mb-1.5">Training progress</div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full" style={{ width: "60%" }} />
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>Step 1,840 / 3,080</span>
                    <span>ETA: ~2.4 hrs</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {[
                    { label: "GPU", val: "4× A100", color: "text-orange-400" },
                    { label: "VRAM used", val: "78%", color: "text-yellow-400" },
                    { label: "$/hour", val: "$12.40", color: "text-slate-300" },
                  ].map((m) => (
                    <div key={m.label} className="bg-slate-900/60 rounded-lg py-2">
                      <div className={`font-bold ${m.color}`}>{m.val}</div>
                      <div className="text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LLM SERVICES ── */}
      <section className="bg-dots bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              LLM Development <span className="text-gradient">Services</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six LLM engineering capabilities — from fine-tuning to private deployment to model compression.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LLM_SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl transition-all"
              >
                {s.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold">
                    {s.badge}
                  </span>
                )}
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-violet-600 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Fine-Tuned LLM vs <span className="text-gradient">Generic GPT-4</span>
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              For domain-specific applications at scale, fine-tuned open-source LLMs
              consistently win on accuracy, cost, and privacy.
            </p>
          </motion.div>
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-900 text-white">
              <div className="p-4 font-semibold text-sm text-slate-300">Dimension</div>
              <div className="p-4 font-semibold text-sm text-center text-slate-300">Generic GPT-4</div>
              <div className="p-4 font-semibold text-sm text-center text-teal-300">Fine-Tuned LLM</div>
            </div>
            {FINE_TUNING_COMPARISON.map((row, i) => (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`grid grid-cols-3 border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
              >
                <div className="p-4 text-sm font-medium text-slate-700">{row.feature}</div>
                <div className="p-4 text-sm text-slate-500 text-center">{row.generic}</div>
                <div className="p-4 text-sm text-teal-700 font-semibold text-center flex items-center justify-center gap-1.5">
                  <HiCheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  {row.finetuned}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              How We Build <span className="text-gradient">Custom LLMs</span>
            </h2>
            <p className="text-slate-400">From data audit to production-ready model in 3–8 weeks.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-teal-700/60 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs font-mono">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ── */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-5">LLM Technology Stack</h3>
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
            heading="Is fine-tuning right for your use case?"
            subheading="Free 30-minute LLM strategy session — we'll assess your data, use case, and whether fine-tuning is genuinely the right investment."
            cta="Book LLM Strategy Session"
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
                title: "RAG Development Services",
                desc: "Combine fine-tuned LLMs with RAG for the highest possible accuracy on domain-specific knowledge retrieval.",
                href: "/ai-development/rag-development-services",
                icon: HiMagnifyingGlass,
              },
              {
                title: "Generative AI Development",
                desc: "Build production GenAI applications powered by your custom fine-tuned models.",
                href: "/ai-development/generative-ai-development",
                icon: HiSparkles,
              },
              {
                title: "Hire AI Engineers",
                desc: "Embed dedicated AI engineers into your team — LLM specialists for ongoing model development.",
                href: "/staff-augmentation/hire-ai-engineers",
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
            <p className="text-slate-500">Technical answers about LLM fine-tuning and custom model development from our team.</p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((f, i) => <FAQItem key={i} {...f} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Free LLM Strategy Session"
        heading="Build a Custom LLM That Knows Your Domain"
        subheading="Schedule a 30-minute strategy session with our LLM engineers. We'll assess your data, evaluate whether fine-tuning is right for your use case, and give you a realistic cost-benefit analysis."
        primaryCTA="Book LLM Strategy Session"
        secondaryCTA="Talk to LLM Engineers"
      />

      <FloatingBookingButton label="Book LLM Session" />
      <Footer />
    </>
  );
}
