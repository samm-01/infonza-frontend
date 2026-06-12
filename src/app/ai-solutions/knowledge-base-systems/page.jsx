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
  HiBolt,
  HiCpuChip,
  HiChartBar,
  HiCircleStack,
  HiMagnifyingGlass,
  HiDocumentText,
  HiRocketLaunch,
  HiCommandLine,
  HiCog6Tooth,
  HiChatBubbleLeftRight,
  HiArrowUpTray,
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

const METRICS = [
  { metric: "90%", label: "Faster Information Retrieval", sub: "vs manual search through docs" },
  { metric: "Zero", label: "Hallucinations From Your Data", sub: "answers grounded in real sources" },
  { metric: "Any", label: "Document Format Supported", sub: "PDF, Word, Notion, Confluence, wikis" },
  { metric: "3 Weeks", label: "To Deployment", sub: "from audit to live knowledge system" },
];

const CAPABILITIES = [
  {
    icon: HiMagnifyingGlass,
    title: "RAG Knowledge Search",
    desc: "Retrieval-Augmented Generation systems that search your document corpus in real time, retrieve the most relevant chunks, and pass them to the LLM to generate accurate, cited answers.",
  },
  {
    icon: HiDocumentText,
    title: "Internal Documentation AI",
    desc: "Transform static internal wikis, SOPs, playbooks, and handbooks into a conversational knowledge layer that any employee can query in plain English and get an immediate, accurate answer.",
  },
  {
    icon: HiMagnifyingGlass,
    title: "Enterprise Search",
    desc: "Semantic search across all your data sources — SharePoint, Confluence, Google Drive, Notion, Jira, Slack archives — unified in a single intelligent search interface.",
  },
  {
    icon: HiChatBubbleLeftRight,
    title: "Knowledge Assistants",
    desc: "Conversational AI assistants embedded in your internal tools, Slack, or web portal that let employees ask follow-up questions, get explanations, and navigate complex policy documents without reading them end-to-end.",
  },
  {
    icon: HiArrowUpTray,
    title: "Multi-Source Ingestion",
    desc: "Automated ingestion pipelines that connect to your existing content sources — S3, SharePoint, Confluence, databases, APIs — and keep the knowledge index continuously updated as documents change.",
  },
  {
    icon: HiCog6Tooth,
    title: "Continuous Knowledge Updates",
    desc: "Scheduled sync and event-driven re-indexing ensure that when a policy changes, a new SOP is uploaded, or a wiki page is edited, the knowledge base reflects it within minutes — not weeks.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Knowledge Audit",
    desc: "We inventory your existing documentation landscape — identify all content sources, assess document quality and coverage gaps, and define the scope of what the knowledge system will serve. We prioritize high-value, high-frequency use cases.",
  },
  {
    step: "02",
    title: "Data Ingestion & Chunking",
    desc: "We build ingestion pipelines for every content source, implement intelligent chunking strategies (semantic chunking rather than fixed-size splits), and enrich each chunk with metadata — document title, section, last updated, author — to improve retrieval precision.",
  },
  {
    step: "03",
    title: "Vector Embedding",
    desc: "Documents are embedded using state-of-the-art embedding models (OpenAI text-embedding-3-large, Cohere embed-v3) and stored in a production vector database (Pinecone or Weaviate). We tune embedding strategy and index configuration for your specific retrieval patterns.",
  },
  {
    step: "04",
    title: "Search UI Build",
    desc: "We build the user-facing search experience — a web interface, Slack bot, or embedded widget — with conversational follow-up, source citations showing which document each answer came from, and confidence indicators for ambiguous results.",
  },
  {
    step: "05",
    title: "Deployment & Monitoring",
    desc: "Production deployment with query logging, retrieval quality metrics, user feedback loops, and an admin panel for adding new content sources. We monitor answer accuracy over time and run monthly retrieval quality reviews.",
  },
];

const TECH = [
  { n: "OpenAI GPT-4", c: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { n: "Claude (Anthropic)", c: "bg-violet-50 border-violet-200 text-violet-700" },
  { n: "Pinecone", c: "bg-teal-50 border-teal-200 text-teal-700" },
  { n: "Weaviate", c: "bg-cyan-50 border-cyan-200 text-cyan-700" },
  { n: "Supabase", c: "bg-green-50 border-green-200 text-green-700" },
  { n: "LangChain", c: "bg-amber-50 border-amber-200 text-amber-700" },
  { n: "FastAPI", c: "bg-sky-50 border-sky-200 text-sky-700" },
  { n: "PostgreSQL", c: "bg-blue-50 border-blue-200 text-blue-700" },
];

const INDUSTRIES = [
  { name: "SaaS", use: "Product documentation search, support agent knowledge base, onboarding knowledge assistant" },
  { name: "Healthcare", use: "Clinical protocol search, formulary lookup AI, compliance documentation assistant" },
  { name: "Insurance", use: "Policy wording search, claims guidelines AI, underwriting rules knowledge base" },
  { name: "Legal", use: "Case law search, contract template knowledge base, internal precedent retrieval" },
  { name: "Manufacturing", use: "Equipment maintenance manuals, quality procedure search, safety SOP assistant" },
  { name: "Education", use: "Curriculum knowledge search, faculty handbook AI, student policy assistant" },
];

const WHY = [
  {
    title: "RAG-First Architecture",
    desc: "We design knowledge systems grounded in retrieval-augmented generation from day one — not chatbots retrofitted with document search. Every architectural decision optimizes for retrieval precision and answer accuracy.",
  },
  {
    title: "Source Citation Built In",
    desc: "Every answer in our systems includes a citation linking back to the exact source document and section. Users can verify answers and navigate to primary sources — eliminating the black-box trust problem.",
  },
  {
    title: "Zero Hallucination Guarantee",
    desc: "Our retrieval architecture is tuned to only answer from retrieved context, with fallback responses for out-of-scope queries rather than generating plausible-sounding fiction from model weights.",
  },
  {
    title: "Connect Any Data Source",
    desc: "We've built ingestion connectors for SharePoint, Confluence, Notion, Google Drive, Jira, S3, PostgreSQL, and custom REST APIs. Most enterprise content ecosystems require three or more sources.",
  },
  {
    title: "Ongoing Retrieval Tuning",
    desc: "We analyze retrieval logs post-launch to identify common failure patterns — missed retrievals, irrelevant chunks — and tune chunking strategies, embedding models, and retrieval parameters.",
  },
];

const FAQS = [
  {
    q: "What is a RAG-based knowledge base and how is it different from a regular chatbot?",
    a: "A RAG (Retrieval-Augmented Generation) knowledge base is an AI system that retrieves relevant passages from your actual documents before generating an answer. Unlike a standard chatbot that relies on its pre-trained knowledge, a RAG system fetches content from your specific internal documents in real time, then uses an LLM only to synthesize a natural-language answer from those retrieved passages. This grounds every response in your actual content, eliminates hallucination, and allows the system to cite its sources.",
  },
  {
    q: "What document formats and content sources can be ingested?",
    a: "We support any text-containing format: PDF, Word (.docx), Excel, PowerPoint, plain text, Markdown, HTML, and structured data from databases. For content platforms, we build connectors to Confluence, Notion, SharePoint, Google Drive, Jira, Slack message archives, S3, and custom REST APIs. If your content lives somewhere specific, we'll build a custom ingestion connector for it.",
  },
  {
    q: "How do you prevent the AI from making up answers that aren't in our documents?",
    a: "We implement strict retrieval-grounded prompting that instructs the LLM to answer only from retrieved context and to explicitly say 'I don't have information on that' when the retrieval returns no relevant results. We also use confidence thresholds — if the retrieved chunks score below a similarity threshold, we suppress the answer rather than letting the model speculate. All responses are logged with their source chunks for auditability.",
  },
  {
    q: "How current will the knowledge base be? What happens when documents are updated?",
    a: "We build continuous sync pipelines that monitor your content sources for changes. When a document is updated, the relevant chunks are re-embedded and the vector index is updated within minutes. For SharePoint, Confluence, and Notion we use webhook-based triggers for near-real-time updates. For file system sources we implement scheduled polling at configurable intervals.",
  },
  {
    q: "Can employees query the knowledge base in natural language or must they use specific search terms?",
    a: "Natural language queries are the primary interface. Employees can ask questions exactly as they'd phrase them to a colleague — 'What's our refund policy for enterprise customers?', 'How do I escalate a P1 incident?', 'What are the requirements for ISO 27001 certification?' The semantic search layer understands intent and meaning, not just keyword matching, so it finds relevant content even when the exact words in the query don't appear in the document.",
  },
  {
    q: "How does the system handle questions that span multiple documents?",
    a: "Our retrieval pipeline fetches the top-k most relevant chunks from across all indexed documents, regardless of which document they originate from. The LLM then synthesizes a coherent answer that draws on multiple sources, with each source cited in the response. For complex multi-document queries we use a re-ranking step to ensure the most relevant chunks from the best sources are passed to the model.",
  },
  {
    q: "What vector databases do you use and why?",
    a: "We primarily use Pinecone for managed, scalable production deployments with high query throughput requirements. For self-hosted or open-source preferences we use Weaviate, which also supports hybrid search (combining vector and keyword search). For smaller deployments or prototypes, we use pgvector in PostgreSQL to minimize infrastructure complexity. The choice depends on your scale, hosting preferences, and existing infrastructure.",
  },
  {
    q: "Can we restrict which teams or users can access which documents?",
    a: "Yes. We implement document-level access control by tagging each chunk with metadata indicating which teams, roles, or departments can access it. At query time, the retrieval step filters to only surface chunks the authenticated user is authorized to see. This means sensitive HR documents, executive strategy, or confidential client data won't surface in searches by users who don't have permission to access those documents.",
  },
  {
    q: "How long does it take to build and deploy an AI knowledge base?",
    a: "A standard deployment covering 3–5 content sources with a web search UI and basic access control typically ships in 3 weeks. A larger deployment with 10+ sources, custom ingestion connectors, Slack integration, and a full admin panel typically takes 5–6 weeks. Timeline is primarily influenced by the number of content sources, the complexity of access control requirements, and how much time is needed to clean and structure existing documentation.",
  },
  {
    q: "What does the search UI look like — is it just a chat window?",
    a: "The default UI is a conversational search interface where users type a question and receive an answer with cited sources. But we can also build more structured interfaces — a classic search bar with ranked document results, an embedded widget that sits inside an existing internal tool, a Slack slash command, or an API endpoint that feeds into a custom internal dashboard. The front end is always built to match your team's existing workflows.",
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Knowledge Base Systems",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  description:
    "Build AI-powered knowledge bases and enterprise search systems using RAG. Give employees instant answers from your internal documentation, SOPs, and wikis.",
  areaServed: "Worldwide",
  serviceType: "AI Development",
  url: "https://infonza.com/ai-solutions/knowledge-base-systems",
};

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENTS
═══════════════════════════════════════════════════════════════════════════ */

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

export default function KnowledgeBaseSystemsPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">AI Knowledge Base Systems</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiMagnifyingGlass className="w-3.5 h-3.5" />
                AI Knowledge Base
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Give Your Team Instant Access{" "}
                <span className="text-gradient">to Company Knowledge</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                We build AI-powered knowledge bases and enterprise search systems using RAG — so
                your employees get accurate, cited answers from your internal documentation, SOPs,
                and wikis in seconds instead of hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            {/* Right — knowledge search visualization */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Knowledge Search — Active</span>
                  <span className="ml-auto text-xs text-slate-500">RAG + GPT-4</span>
                </div>
                <div className="p-5 space-y-3 min-h-[280px] font-mono text-xs">
                  <div className="bg-slate-700/50 rounded-lg px-4 py-2.5 text-slate-300 text-xs">
                    &gt; &quot;What is our SLA for P1 incidents in enterprise accounts?&quot;
                  </div>
                  {[
                    { status: "done", label: "Query embedded", detail: "Semantic vector generated in 12ms" },
                    { status: "done", label: "Retrieved 4 chunks", detail: "incident-sla-policy.pdf (score: 0.94), enterprise-support.docx (0.87)" },
                    { status: "done", label: "Re-ranked", detail: "Top 3 chunks selected for context window" },
                    { status: "active", label: "Generating answer", detail: "Synthesizing from retrieved policy content…" },
                    { status: "pending", label: "Citation injection", detail: "Linking sources to final response" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                        step.status === "done" ? "bg-teal-400" :
                        step.status === "active" ? "bg-blue-400 animate-pulse" :
                        "bg-slate-600"
                      }`} />
                      <div>
                        <span className={`font-semibold ${
                          step.status === "done" ? "text-teal-400" :
                          step.status === "active" ? "text-blue-400" :
                          "text-slate-500"
                        }`}>[{step.label}]</span>
                        <span className="text-slate-400 ml-2">{step.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Sources: 47,832 indexed chunks</span>
                  <span className="text-xs text-teal-400">Answer in 1.2s</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {METRICS.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">{r.metric}</div>
                <div className="font-semibold text-slate-900 text-sm">{r.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{r.sub}</div>
              </motion.div>
            ))}
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
              What We Build for{" "}
              <span className="text-gradient">AI Knowledge</span> Systems
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six core capabilities delivered in every knowledge base and enterprise search system we architect.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CAPABILITIES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-blue-600 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="relative bg-slate-900 py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              How We Build Your <span className="text-gradient">AI Knowledge System</span>
            </h2>
            <p className="text-slate-400">From knowledge audit to live deployment in 3 weeks.</p>
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

      {/* ── TECH STACK ── */}
      <section className="bg-slate-50 py-12 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {TECH.map(({ n, c }) => (
              <span key={n} className={`px-3.5 py-1.5 rounded-full border text-xs font-semibold ${c}`}>
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              AI Knowledge Systems Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We build knowledge systems tailored to the specific documentation types and search patterns of your industry.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-teal-200 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center">
                  <HiCheckCircle className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm mb-0.5">{ind.name}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{ind.use}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY INFONZA ── */}
      <section className="bg-slate-50 py-16 lg:py-20 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Why Teams Choose <span className="text-gradient">Infonza</span> for AI Knowledge Systems
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <HiCheckCircle className="w-6 h-6 text-teal-500 mb-3" />
                <h3 className="font-bold text-slate-900 text-sm mb-2">{w.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING BANNER ── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner
            heading="Ready to build your AI knowledge system?"
            subheading="Get a free knowledge audit from a senior RAG engineer. We'll map your content sources and scope a system in 30 minutes."
            cta="Schedule Free Knowledge Audit"
          />
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "RAG Development Services",
                desc: "Custom retrieval-augmented generation pipelines built for your specific data and query patterns — from prototype to production.",
                href: "/ai-development/rag-development-services",
                icon: HiCircleStack,
              },
              {
                title: "AI Document Processing",
                desc: "Intelligent document ingestion, extraction, and classification pipelines that turn unstructured documents into structured, searchable data.",
                href: "/ai-solutions/document-processing",
                icon: HiDocumentText,
              },
              {
                title: "AI Copilot Development",
                desc: "Context-aware AI copilots embedded in your internal tools — powered by your company's knowledge base and real-time data.",
                href: "/ai-solutions/ai-copilot-development",
                icon: HiCpuChip,
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
                  <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center mb-3 group-hover:bg-teal-100 transition-colors">
                    <s.icon className="w-4.5 h-4.5 text-teal-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-teal-700 transition-colors">
                    {s.title}
                  </h3>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Honest answers about AI knowledge bases, RAG systems, and enterprise search.
            </p>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <FAQItem key={i} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Free Knowledge System Consultation"
        heading="Build Your AI Knowledge System"
        subheading="Schedule a 30-minute session with our RAG engineers. We'll audit your documentation landscape, map your content sources, and scope a knowledge system that gives your team instant answers."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to a RAG Engineer"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
