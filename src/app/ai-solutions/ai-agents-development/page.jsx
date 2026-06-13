"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiSparkles,
  HiXCircle,
  HiChevronDown,
  HiShieldCheck,
  HiBolt,
  HiGlobeAlt,
  HiCpuChip,
  HiChartBar,
  HiCog6Tooth,
  HiCircleStack,
  HiUserGroup,
  HiRocketLaunch,
  HiCommandLine,
  HiWrenchScrewdriver,
  HiChatBubbleLeftRight,
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
  { metric: "10×", label: "Faster Task Execution", sub: "vs manual human workflows" },
  { metric: "50+", label: "Integrations Supported", sub: "APIs, SaaS, internal tools" },
  { metric: "Multi-Agent", label: "Systems Built", sub: "collaborative agent pipelines" },
  { metric: "6 Weeks", label: "To Production", sub: "from discovery to live deployment" },
];

const CAPABILITIES = [
  {
    icon: HiCpuChip,
    title: "Autonomous Agents",
    desc: "Goal-driven agents that decompose complex objectives into subtasks, plan execution paths, and adapt when steps fail — without human intervention at each step.",
  },
  {
    icon: HiUserGroup,
    title: "Multi-Agent Systems",
    desc: "Collaborative agent networks where specialized agents — researcher, planner, executor, critic — work in parallel or in sequence using CrewAI and LangGraph orchestration.",
  },
  {
    icon: HiBolt,
    title: "Agent Workflows",
    desc: "Structured agentic pipelines with conditional logic, retry mechanisms, human-in-the-loop checkpoints, and event-driven triggers for end-to-end process automation.",
  },
  {
    icon: HiWrenchScrewdriver,
    title: "Tool Integrations",
    desc: "Agents equipped with 50+ tool integrations — web search, code execution, CRM write-back, email dispatch, database queries, and custom internal API calls.",
  },
  {
    icon: HiCircleStack,
    title: "Agent Memory & Context",
    desc: "Long-term memory with Pinecone or Weaviate vector stores, short-term episodic buffers, and shared memory across multi-agent sessions for stateful execution.",
  },
  {
    icon: HiChartBar,
    title: "Agent Monitoring",
    desc: "Full observability dashboards with step-level traces, token usage, tool call logs, error rates, and goal completion metrics — LangSmith and custom tooling.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery & Architecture",
    desc: "We map your target workflows, define agent roles and responsibilities, select the right orchestration framework (LangGraph for stateful workflows, CrewAI for role-based systems), and design the agent graph before any code is written.",
  },
  {
    step: "02",
    title: "Agent Design & Prompt Engineering",
    desc: "Each agent receives a precisely engineered system prompt defining its persona, available tools, decision boundaries, and escalation criteria. We run adversarial testing to harden agent behavior.",
  },
  {
    step: "03",
    title: "Tool Integration",
    desc: "We build the tool layer — custom functions, API wrappers, and MCP-compatible tool definitions that agents can call reliably. Every tool gets input validation, error handling, and retry logic.",
  },
  {
    step: "04",
    title: "Testing & Evaluation",
    desc: "Agents are stress-tested on 100+ real task scenarios including edge cases and adversarial inputs. We measure goal completion rate, hallucination rate, and average steps-to-completion.",
  },
  {
    step: "05",
    title: "Deployment & Monitoring",
    desc: "Production deployment on your infrastructure (AWS, GCP, Azure, or on-premises) with LangSmith tracing, alerting, and a 30-day hypercare period post-launch.",
  },
];

const TECH = [
  { n: "OpenAI GPT-4o", c: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { n: "Claude (Anthropic)", c: "bg-violet-50 border-violet-200 text-violet-700" },
  { n: "LangChain", c: "bg-amber-50 border-amber-200 text-amber-700" },
  { n: "LangGraph", c: "bg-orange-50 border-orange-200 text-orange-700" },
  { n: "CrewAI", c: "bg-sky-50 border-sky-200 text-sky-700" },
  { n: "AutoGen", c: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  { n: "Pinecone", c: "bg-teal-50 border-teal-200 text-teal-700" },
  { n: "Weaviate", c: "bg-cyan-50 border-cyan-200 text-cyan-700" },
  { n: "FastAPI", c: "bg-sky-50 border-sky-200 text-sky-700" },
  { n: "PostgreSQL", c: "bg-blue-50 border-blue-200 text-blue-700" },
];

const INDUSTRIES = [
  { name: "Insurance", use: "Automated claims investigation, policy renewal agents, underwriting data collection" },
  { name: "Healthcare", use: "Prior authorization agents, patient intake automation, clinical document processing" },
  { name: "Legal", use: "Contract review agents, due diligence automation, legal research and citation agents" },
  { name: "SaaS", use: "Autonomous onboarding agents, technical support agents, usage-based billing analysis" },
  { name: "E-commerce", use: "Product sourcing agents, pricing intelligence, order exception handling" },
  { name: "Finance", use: "Transaction monitoring agents, compliance reporting, financial data extraction" },
  { name: "HR & Recruitment", use: "CV screening agents, interview scheduling, onboarding workflow orchestration" },
];

const WHY = [
  {
    title: "Agentic-First Team",
    desc: "Our engineers specialize in agentic systems — not LLM wrappers. We've built multi-agent pipelines in LangGraph, CrewAI, and AutoGen across production environments.",
  },
  {
    title: "Tool & Integration Depth",
    desc: "We build robust tool layers — not just sample code. Every tool integration includes error handling, retries, input sanitization, and observability hooks.",
  },
  {
    title: "Evaluation-Driven Development",
    desc: "Every agent is evaluated against a benchmark task suite before release. We track goal completion rate, hallucination rate, and wall-clock time per workflow.",
  },
  {
    title: "Production-Ready Architecture",
    desc: "Agents deployed to real infrastructure with monitoring, alerting, horizontal scaling, and graceful degradation — not just a Jupyter notebook demo.",
  },
  {
    title: "Post-Launch Partnership",
    desc: "30-day hypercare with weekly agent performance reviews. We tune prompts, fix tool failures, and expand capabilities based on live data from your first month.",
  },
];

const FAQS = [
  {
    q: "What is an AI agent and how is it different from a chatbot?",
    a: "A chatbot responds to individual messages in a turn-by-turn conversation. An AI agent is a system that autonomously plans and executes a sequence of actions — using tools, making API calls, processing results, and adapting its approach — to complete a multi-step goal. Agents operate without a human confirming each step, making them suitable for complex, long-horizon tasks like research compilation, data pipeline execution, or multi-system workflow orchestration.",
  },
  {
    q: "What frameworks do you use to build AI agents?",
    a: "We primarily use LangGraph for stateful, graph-based agent workflows where you need precise control over agent state transitions and human-in-the-loop checkpoints. For role-based multi-agent systems we use CrewAI. For complex multi-agent conversation patterns we use AutoGen. All agents use LangChain for tool abstraction and LangSmith for observability. The choice of framework depends on your workflow's statefulness, team size, and control requirements.",
  },
  {
    q: "How long does it take to build a production AI agent?",
    a: "A focused single-agent deployment (one clear objective, 5–10 tools) typically ships in 4–6 weeks. A multi-agent system with shared memory, parallel execution, and deep system integrations typically takes 8–12 weeks. Timeline is heavily influenced by the number and complexity of tool integrations, availability of existing APIs, and how much process documentation you can provide upfront.",
  },
  {
    q: "Can AI agents integrate with our existing internal systems?",
    a: "Yes — tool integrations are central to agent utility. We build custom tool functions for your internal APIs, databases, and SaaS platforms. Common integrations include Salesforce, HubSpot, Jira, Confluence, Notion, Slack, Google Workspace, SharePoint, custom REST APIs, and direct database queries. Every tool gets proper authentication, error handling, and rate-limit management.",
  },
  {
    q: "How do you prevent agents from making costly mistakes or taking wrong actions?",
    a: "We implement multiple safety layers: strict input/output validation on every tool call, confidence thresholds before irreversible actions, human-in-the-loop checkpoints for high-stakes steps (e.g., sending emails, making payments), action dry-run modes during testing, comprehensive logging of every decision point, and rollback mechanisms for stateful operations. For financial or compliance-sensitive workflows we add an explicit approval gate.",
  },
  {
    q: "What is LangGraph and why do you use it?",
    a: "LangGraph is a graph-based orchestration framework built on top of LangChain that models agent workflows as stateful graphs with nodes (agent steps) and edges (conditional transitions). It excels at workflows requiring branching logic, looping, parallel sub-tasks, and human-in-the-loop interrupts — things that linear chain-based frameworks handle poorly. We use LangGraph for most production agent deployments because it gives us explicit state management and makes complex workflows debuggable.",
  },
  {
    q: "Can a multi-agent system work across different LLMs?",
    a: "Yes. A well-designed multi-agent system can route tasks to the most appropriate model — GPT-4o for complex reasoning, Claude for long-context document analysis, smaller models for fast classification tasks. We frequently build mixed-model pipelines to balance cost and capability. Each agent in the system can use a different underlying LLM based on its role and the complexity of its tasks.",
  },
  {
    q: "How do you handle agent memory and context across long workflows?",
    a: "We implement a layered memory architecture: short-term working memory (in-context state passed between nodes in LangGraph), episodic memory (a session log stored in Redis or PostgreSQL that agents can query), and long-term semantic memory (vector embeddings in Pinecone or Weaviate for retrieving relevant past experiences). For multi-session workflows, agents can recall prior runs, decisions made, and outcomes — enabling genuine continuity across days or weeks.",
  },
  {
    q: "What does agent observability look like in production?",
    a: "We deploy with LangSmith for step-level tracing — every LLM call, tool invocation, decision branch, and state transition is logged with inputs, outputs, latency, and token costs. We also build custom dashboards (typically in Grafana or a simple Next.js admin panel) showing goal completion rate, average steps per workflow, tool error rates, and cost per run. Alerts fire on anomalous failure rates or cost spikes.",
  },
  {
    q: "Do you offer ongoing support and agent improvement after launch?",
    a: "Yes. Every engagement includes a 30-day hypercare period with weekly performance reviews. We analyze real-world execution traces, identify failure patterns, tune prompts and tool logic, and expand agent capabilities. Beyond hypercare we offer a monthly retainer for continued improvement, new tool integrations, and adapting agents to evolving business processes.",
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
  name: "AI Agents Development",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  description:
    "Build autonomous AI agents that plan, reason, and execute multi-step tasks. We develop single agents, multi-agent systems, and agentic workflows using LangGraph, CrewAI, and AutoGen.",
  areaServed: "Worldwide",
  serviceType: "AI Development",
  url: "https://infonza.com/ai-solutions/ai-agents-development",
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

export default function AIAgentsDevelopmentPage() {
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
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">AI Agents Development</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-orange-900/60 border border-orange-700/40 rounded-full px-4 py-1.5 text-orange-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiCpuChip className="w-3.5 h-3.5" />
                AI Agents Development
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Autonomous AI Agents{" "}
                <span className="text-gradient">That Get Work Done</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                We build AI agents that plan, reason, and execute complex multi-step workflows
                autonomously — single agents, multi-agent systems, and full agentic pipelines
                using LangGraph, CrewAI, and AutoGen.
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

            {/* Right — agent execution visualization */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Research Agent — Active</span>
                  <span className="ml-auto text-xs text-slate-500">LangGraph + GPT-4o</span>
                </div>
                <div className="p-5 space-y-3 min-h-[280px] font-mono text-xs">
                  {[
                    { status: "done", label: "Goal received", detail: "Compile competitive analysis for Q3 prospects in fintech" },
                    { status: "done", label: "Planner agent", detail: "Decomposed into 4 subtasks → dispatching to specialized agents" },
                    { status: "done", label: "Web research agent", detail: "Fetched 18 sources across Crunchbase, LinkedIn, news APIs" },
                    { status: "done", label: "Summarizer agent", detail: "Extracted key insights, funding rounds, tech stack signals" },
                    { status: "active", label: "Writer agent", detail: "Drafting executive summary with citations…" },
                    { status: "pending", label: "Review agent", detail: "Fact-check and final quality gate" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                        step.status === "done" ? "bg-teal-400" :
                        step.status === "active" ? "bg-orange-400 animate-pulse" :
                        "bg-slate-600"
                      }`} />
                      <div>
                        <span className={`font-semibold ${
                          step.status === "done" ? "text-teal-400" :
                          step.status === "active" ? "text-orange-400" :
                          "text-slate-500"
                        }`}>[{step.label}]</span>
                        <span className="text-slate-400 ml-2">{step.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Steps: 4 / 6 complete</span>
                  <span className="text-xs text-orange-400">Running — 42s elapsed</span>
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
              <span className="text-gradient">AI Agent</span> Deployments
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six core capabilities delivered in every agentic system we architect and deploy.
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center mb-3">
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
              How We Build Your <span className="text-gradient">AI Agents</span>
            </h2>
            <p className="text-slate-400">From discovery to production-ready deployment in 6 weeks.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-orange-700/60 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-orange-600 to-amber-500 flex items-center justify-center text-white font-bold text-xs font-mono">
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
              AI Agents Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We build domain-specific agents trained on industry workflows, terminology, and compliance requirements.
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
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-orange-200 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center">
                  <HiCheckCircle className="w-4 h-4 text-orange-600" />
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
              Why Teams Choose <span className="text-gradient">Infonza</span> for AI Agents
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-200 hover:shadow-md transition-all"
              >
                <HiCheckCircle className="w-6 h-6 text-orange-500 mb-3" />
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
            heading="Ready to deploy your first AI agent?"
            subheading="Get a free architecture review of your target workflow from a senior AI engineer."
            cta="Schedule Free Architecture Review"
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
                title: "AI Voice Agents",
                desc: "Extend your agentic systems to voice channels — inbound and outbound call handling with full conversational AI.",
                href: "/ai-solutions/ai-voice-agents",
                icon: HiCommandLine,
              },
              {
                title: "AI Chatbot Development",
                desc: "Conversational AI chatbots for customer support, sales, and internal use — powered by GPT-4 and RAG.",
                href: "/ai-development/ai-chatbot-development",
                icon: HiChatBubbleLeftRight,
              },
              {
                title: "AI Workflow Automation",
                desc: "End-to-end workflow automation combining AI agents with n8n, Zapier, and custom integration pipelines.",
                href: "/ai-development/ai-workflow-automation",
                icon: HiBolt,
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
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center mb-3 group-hover:bg-orange-100 transition-colors">
                    <s.icon className="w-4.5 h-4.5 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-orange-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 flex-1 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-orange-600 text-xs font-semibold">
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
              Honest answers to technical questions about AI agents development.
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
        badge="Free Agents Consultation"
        heading="Ready to Deploy Your First AI Agent?"
        subheading="Schedule a 30-minute session with our AI agents engineers. We'll review your target workflow, recommend the right orchestration framework, and give you a realistic scope before you commit."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to an AI Engineer"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
