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
  HiMagnifyingGlass,
  HiCircleStack,
  HiCpuChip,
  HiShieldCheck,
  HiCodeBracket,
  HiBolt,
  HiRocketLaunch,
  HiChatBubbleLeftRight,
  HiDocumentText,
  HiAdjustmentsHorizontal,
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

const RAG_COMPONENTS = [
  {
    icon: HiDocumentText,
    title: "Document Ingestion Pipelines",
    desc: "Ingest PDFs, Word docs, HTML, Confluence, Notion, SharePoint, and custom data sources — with intelligent chunking strategies that preserve semantic meaning across paragraph and section boundaries.",
  },
  {
    icon: HiCircleStack,
    title: "Vector Database Architecture",
    desc: "Purpose-built vector store selection and configuration — Pinecone for managed scale, Weaviate for hybrid search, pgvector for existing Postgres stacks, Chroma for local development.",
  },
  {
    icon: HiCpuChip,
    title: "Embedding Model Selection",
    desc: "Model selection across OpenAI text-embedding-3-large, Cohere embed-v3, and open-source alternatives — benchmarked on your domain for retrieval accuracy before committing.",
  },
  {
    icon: HiMagnifyingGlass,
    title: "Hybrid Retrieval System",
    desc: "Combine dense vector similarity with sparse BM25 keyword search. Hybrid retrieval consistently outperforms pure vector search on domain-specific terminology and named entities.",
  },
  {
    icon: HiAdjustmentsHorizontal,
    title: "Re-Ranking & Query Optimization",
    desc: "Cross-encoder re-ranking of candidate chunks for precision. Query decomposition, HyDE (Hypothetical Document Embeddings), and query expansion for improved recall on complex questions.",
  },
  {
    icon: HiShieldCheck,
    title: "Guardrails & Hallucination Prevention",
    desc: "Retrieval confidence thresholds, source grounding validation, citation injection, and factual consistency checks — so every answer is traceable to a source document.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Data Audit & Corpus Analysis",
    desc: "We audit your document corpus — volume, formats, quality, structure, and update frequency — to inform chunking strategy, embedding model selection, and retrieval architecture decisions.",
  },
  {
    step: "02",
    title: "Embedding & Indexing Pipeline",
    desc: "Build the ingestion pipeline: document parsing, intelligent chunking (semantic, token-aware, or hierarchical based on content structure), embedding generation, and vector store indexing with metadata.",
  },
  {
    step: "03",
    title: "Retrieval System Build",
    desc: "Implement hybrid retrieval (dense + sparse), re-ranking, and query optimization strategies. Benchmark retrieval metrics — Recall@K, MRR, NDCG — against a held-out evaluation set from your documents.",
  },
  {
    step: "04",
    title: "Generation Pipeline & Guardrails",
    desc: "Wire the retrieval layer to your LLM with prompt templates optimized for grounded answering. Add confidence scoring, citation formatting, and fallback behavior for out-of-corpus queries.",
  },
  {
    step: "05",
    title: "Evaluation & Continuous Improvement",
    desc: "RAGAS-based evaluation framework covering faithfulness, answer relevancy, context precision, and context recall. Continuous monitoring with drift detection as your document corpus evolves.",
  },
];

const RESULTS = [
  { metric: "85%", label: "Hallucination reduction", sub: "vs naive RAG implementations without re-ranking" },
  { metric: "<200ms", label: "Retrieval latency (p95)", sub: "across production deployments with 10M+ docs" },
  { metric: "10M+", label: "Documents supported", sub: "largest corpus we've indexed and served at production" },
];

const HALLUCINATION_PREVENTION = [
  "Retrieval confidence scoring — low-confidence retrievals return 'I don't know' rather than hallucinating",
  "Chunk-level citation injection — every claim links to its source passage",
  "Faithfulness validation using NLI models to verify answer is entailed by retrieved context",
  "Source document metadata tracking — answers include source title, date, and relevance score",
  "Out-of-corpus detection — explicit routing for questions outside the knowledge base",
];

const TECH_STACK = [
  { n: "LangChain", c: "bg-violet-100 text-violet-800 border-violet-200" },
  { n: "LlamaIndex", c: "bg-purple-100 text-purple-800 border-purple-200" },
  { n: "Pinecone", c: "bg-teal-100 text-teal-800 border-teal-200" },
  { n: "Weaviate", c: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  { n: "pgvector", c: "bg-sky-100 text-sky-800 border-sky-200" },
  { n: "GPT-4o", c: "bg-green-100 text-green-800 border-green-200" },
  { n: "text-embedding-3-large", c: "bg-blue-100 text-blue-800 border-blue-200" },
  { n: "BM25 / Elasticsearch", c: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  { n: "RAGAS", c: "bg-rose-100 text-rose-800 border-rose-200" },
  { n: "FastAPI", c: "bg-teal-100 text-teal-800 border-teal-200" },
];

const FAQS = [
  {
    q: "What makes your RAG implementation better than basic document Q&A?",
    a: "Basic RAG implementations use fixed-size chunks, cosine similarity retrieval, and direct LLM generation — and typically hallucinate 30–40% of the time on complex queries. Our RAG systems use semantic-aware chunking, hybrid dense-sparse retrieval, cross-encoder re-ranking, query decomposition for complex questions, and multi-layer hallucination guardrails. The result is 85% fewer hallucinations and significantly higher answer relevancy scores.",
  },
  {
    q: "How do you handle documents that update frequently?",
    a: "We build incremental indexing pipelines — documents are hashed and only re-embedded when content changes. Update events trigger selective re-indexing via webhooks from your CMS, SharePoint, or Confluence. We implement document versioning so the system can answer questions about current vs historical versions if needed.",
  },
  {
    q: "Can RAG handle 10 million+ documents without performance degradation?",
    a: "Yes, with the right architecture. At scale, we implement metadata filtering to narrow the search space before vector similarity (dramatically reducing retrieval latency), HNSW indexing for sub-linear search complexity, namespace partitioning in Pinecone or collection sharding in Weaviate, and semantic caching for popular queries. Our largest production RAG system serves 12M+ documents with sub-200ms retrieval at p95.",
  },
  {
    q: "How do you evaluate RAG quality before launch?",
    a: "We use RAGAS (Retrieval-Augmented Generation Assessment) to evaluate four dimensions: faithfulness (is the answer grounded in retrieved context?), answer relevancy (does the answer address the question?), context precision (are retrieved chunks relevant?), and context recall (does retrieval find the right chunks?). We establish baselines before launch and monitor these metrics continuously in production.",
  },
  {
    q: "What happens when a user asks something outside the knowledge base?",
    a: "We design explicit out-of-corpus detection at two levels: if retrieval confidence is below threshold, the system responds with a clear 'this isn't in our knowledge base' message and optionally routes to a human or external search. We never let the LLM speculate about things not in your documents. This is a design choice, not an afterthought.",
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

export default function RAGDevelopmentServicesPage() {
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
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-development" className="hover:text-teal-400 transition-colors">AI Development</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">RAG Development Services</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiMagnifyingGlass className="w-3.5 h-3.5" />
                RAG Development Services
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                <span className="text-gradient">RAG Development</span> Services — Retrieval-Augmented Generation
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                Build AI systems that answer from your proprietary data — not hallucinations.
                Enterprise-grade RAG pipelines with hybrid retrieval, re-ranking, and
                citation-level transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Schedule RAG Consultation <HiArrowRight className="w-4 h-4" />
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

            {/* Right — RAG pipeline visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-200">RAG Pipeline — Query Trace</span>
                  <span className="text-xs font-mono text-teal-400">hybrid retrieval</span>
                </div>
                <div className="space-y-2.5 font-mono text-xs">
                  {[
                    { label: "Query", val: '"What is our SLA for P1 incidents?"', color: "text-slate-300", bg: "bg-slate-900/70 border-slate-700/40" },
                    { label: "Dense retrieval", val: "→ 25 candidates (cosine sim > 0.72)", color: "text-blue-300", bg: "bg-slate-800/60 border-slate-600/30" },
                    { label: "BM25 sparse", val: "→ 18 candidates (keyword overlap)", color: "text-violet-300", bg: "bg-slate-800/60 border-slate-600/30" },
                    { label: "Reciprocal Rank Fusion", val: "→ 12 merged candidates", color: "text-yellow-300", bg: "bg-slate-800/60 border-slate-600/30" },
                    { label: "Cross-encoder rerank", val: "→ Top 4 chunks (scores: 0.97, 0.94, 0.91, 0.88)", color: "text-teal-300", bg: "bg-slate-800/60 border-slate-600/30" },
                    { label: "Faithfulness check", val: "✓ Answer entailed by source (NLI: 0.96)", color: "text-green-300", bg: "bg-green-900/20 border-green-700/30" },
                  ].map((item, i) => (
                    <div key={i} className={`px-3 py-2 rounded-lg border ${item.bg}`}>
                      <span className="text-slate-500">{item.label}:</span>{" "}
                      <span className={item.color}>{item.val}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-slate-700/60 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>Latency: 185ms</span>
                  <span>Chunks retrieved: 4</span>
                  <span className="text-green-400">● No hallucination flags</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RAG COMPONENTS ── */}
      <section className="bg-dots bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Enterprise RAG <span className="text-gradient">Architecture Components</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six critical layers that separate a production RAG system from a weekend prototype.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RAG_COMPONENTS.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-indigo-600 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HALLUCINATION PREVENTION ── */}
      <section className="bg-slate-50 py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                85% <span className="text-gradient">Hallucination Reduction</span>
              </h2>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Hallucinations are a systemic failure of naive RAG — not an inevitable
                limitation of LLMs. We engineer multi-layer prevention so your AI only
                says things it can back up with sources.
              </p>
              <div className="space-y-3">
                {HALLUCINATION_PREVENTION.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <HiShieldCheck className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6"
            >
              <h3 className="font-bold text-slate-900 mb-4">RAGAS Evaluation Scores</h3>
              <div className="space-y-3">
                {[
                  { label: "Faithfulness", score: 0.94, desc: "Answer grounded in retrieved context" },
                  { label: "Answer Relevancy", score: 0.91, desc: "Answer addresses the question asked" },
                  { label: "Context Precision", score: 0.88, desc: "Retrieved chunks are relevant" },
                  { label: "Context Recall", score: 0.87, desc: "Key information was retrieved" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-slate-700">{m.label}</span>
                      <span className="text-sm font-bold text-teal-600">{m.score}</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div
                        className="bg-gradient-to-r from-teal-500 to-blue-500 h-1.5 rounded-full"
                        style={{ width: `${m.score * 100}%` }}
                      />
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{m.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-4">Measured using RAGAS framework on held-out eval sets.</p>
            </motion.div>
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
              How We Build <span className="text-gradient">Production RAG Systems</span>
            </h2>
            <p className="text-slate-400">End-to-end delivery in 6–10 weeks for most corpus sizes.</p>
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
          <h3 className="text-lg font-bold text-slate-900 mb-5">RAG Technology Stack</h3>
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
            heading="Want AI that actually knows your data?"
            subheading="Free 30-minute RAG architecture consultation — we'll assess your document corpus and recommend the right retrieval architecture."
            cta="Book RAG Consultation"
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
                desc: "Combine RAG with custom fine-tuned LLMs for the highest accuracy on domain-specific tasks.",
                href: "/ai-development/llm-development-company",
                icon: HiCpuChip,
              },
              {
                title: "AI Chatbot Development",
                desc: "Deploy your RAG system as a customer-facing chatbot with multi-channel support and human handoff.",
                href: "/ai-development/ai-chatbot-development",
                icon: HiChatBubbleLeftRight,
              },
              {
                title: "Document Management System",
                desc: "Pair RAG with an enterprise document management system for a complete intelligent knowledge platform.",
                href: "/document-management-system",
                icon: HiDocumentText,
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
            <p className="text-slate-500">Technical answers about RAG systems from our AI engineering team.</p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((f, i) => <FAQItem key={i} {...f} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Free RAG Architecture Consultation"
        heading="Build an AI System Grounded in Your Data"
        subheading="Schedule a 30-minute RAG architecture review with our senior AI engineers. We'll assess your document corpus, recommend retrieval strategies, and give you a realistic accuracy estimate before you commit."
        primaryCTA="Book RAG Consultation"
        secondaryCTA="Talk to RAG Engineers"
      />

      <FloatingBookingButton label="Book RAG Consult" />
      <Footer />
    </>
  );
}
