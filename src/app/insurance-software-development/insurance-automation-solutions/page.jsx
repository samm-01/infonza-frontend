"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiShieldCheck,
  HiChevronDown,
  HiCpuChip,
  HiDocumentText,
  HiChartBar,
  HiBolt,
  HiCalendarDays,
  HiStar,
  HiCodeBracket,
  HiMagnifyingGlass,
  HiCurrencyDollar,
  HiArrowPath,
  HiServer,
  HiExclamationTriangle,
  HiSparkles,
  HiCircleStack,
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

const PROBLEMS = [
  {
    title: "Claims Adjusters Spend 60% of Time on Data Entry",
    description: "Adjusters manually key loss details from FNOL forms, extract figures from repair estimates, and re-enter reserve amounts into three separate systems. This administrative burden leaves less than 40% of adjuster time for actual investigation and settlement — the work that requires human judgment.",
  },
  {
    title: "Document Extraction Is Manual and Error-Prone",
    description: "Police reports, medical records, contractor estimates, and ACORD forms arrive as PDFs and images. Manual extraction takes 15–45 minutes per document and introduces 8–12% error rates into claim and underwriting data.",
  },
  {
    title: "Underwriting Rules Exist Only in Underwriters' Heads",
    description: "Without a codified underwriting rules engine, risk decisions vary by underwriter, creating inconsistent pricing, adverse selection, and audit exposure. Scaling the underwriting team becomes the only growth lever.",
  },
  {
    title: "Fraud Is Detected After Payment, Not Before",
    description: "Reactive fraud investigation after claim payment recovers cents on the dollar. Without predictive fraud signals integrated into the claims workflow, carriers pay 5–15% more in loss costs than necessary.",
  },
];

const FEATURES = [
  {
    icon: HiArrowPath,
    title: "Claims Processing Automation",
    description: "Rules-based and AI-driven straight-through processing for low-severity claims. Policy verification, coverage confirmation, deductible calculation, and payment authorization — without adjuster intervention for qualifying claims.",
  },
  {
    icon: HiDocumentText,
    title: "OCR + AI Document Extraction",
    description: "Multi-model OCR pipeline extracts structured data from police reports, repair estimates, medical records, ACORD forms, and EOBs. Extraction accuracy above 97% — validated against carrier-specific document templates.",
  },
  {
    icon: HiSparkles,
    title: "AI Underwriting Automation",
    description: "Machine learning models trained on historical policy and loss data recommend accept/decline/modify decisions with confidence scores. Human underwriters review only exceptions — the system handles the rest.",
  },
  {
    icon: HiMagnifyingGlass,
    title: "Fraud Detection Engine",
    description: "Network analysis, behavioral scoring, and anomaly detection identify fraud signals at FNOL — before claim payment. Flagged claims route to SIU with a structured evidence package automatically compiled.",
  },
  {
    icon: HiCpuChip,
    title: "Straight-Through Processing (STP)",
    description: "End-to-end STP for qualifying claim types — auto glass, minor property damage, and simple liability claims processed from FNOL to payment without human touch. Configurable STP eligibility rules by line and severity.",
  },
  {
    icon: HiServer,
    title: "Workflow Orchestration Engine",
    description: "Event-driven workflow engine routes claims, tasks, and documents based on configurable business rules. Escalation logic, SLA monitoring, and capacity-based assignment built in — not bolted on.",
  },
  {
    icon: HiCircleStack,
    title: "Integration Hub",
    description: "Pre-built connectors to ISO ClaimSearch, LexisNexis C.L.U.E., Verisk Xactimate, Mitchell International, and major reserve management systems. New integrations added via configuration, not code.",
  },
  {
    icon: HiChartBar,
    title: "Automation Analytics Dashboard",
    description: "Real-time visibility into STP rate, AI decision accuracy, fraud detection performance, and processing cost per claim. Continuous model monitoring with drift detection alerts.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Process Audit & Automation Opportunity Assessment",
    description: "Map every manual step in claims, underwriting, and document processing workflows. Quantify time spent, error rates, and automation potential for each step. Output: ranked automation roadmap with ROI estimates.",
  },
  {
    step: "02",
    title: "Data Assessment & Model Training Plan",
    description: "Evaluate historical claim and policy data quality for ML model training. Data cleaning, feature engineering, and model training plan defined. Minimum data requirements documented before build begins.",
  },
  {
    step: "03",
    title: "Rules Engine & OCR Pipeline Build",
    description: "Underwriting rules engine and OCR extraction pipeline built first — highest-ROI, lowest-risk automation. Document templates trained, extraction accuracy validated against holdout test sets.",
  },
  {
    step: "04",
    title: "AI Models & Integration Build",
    description: "Fraud detection and underwriting AI models trained, validated, and deployed behind feature flags. STP workflow and integration hub built and load-tested with production-volume claim data.",
  },
  {
    step: "05",
    title: "Phased Rollout & Model Monitoring",
    description: "Shadow-mode deployment runs automation alongside existing workflow for 4–8 weeks. Agreement rate validated before live automation. Post-launch model monitoring with weekly accuracy reports.",
  },
];

const TECH = [
  { label: "Python / FastAPI", color: "bg-yellow-100 text-yellow-700 border-yellow-200" },
  { label: "AWS Textract (OCR)", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { label: "OpenAI GPT-4o", color: "bg-slate-100 text-slate-700 border-slate-200" },
  { label: "Apache Kafka", color: "bg-red-100 text-red-700 border-red-200" },
  { label: "PostgreSQL", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "scikit-learn / XGBoost", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { label: "AWS SageMaker", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { label: "Node.js API", color: "bg-green-100 text-green-700 border-green-200" },
  { label: "React Dashboard", color: "bg-sky-100 text-sky-700 border-sky-200" },
  { label: "Docker / Kubernetes", color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
];

const RESULTS = [
  { metric: "80%", label: "Claims Automation Rate", desc: "Qualifying low-severity claims processed without adjuster touch" },
  { metric: "3×", label: "Processing Speed Increase", desc: "FNOL to reserve set from 2 days to under 4 hours for STP claims" },
  { metric: "$2.1M", label: "Avg Annual Savings", desc: "Operational cost reduction across claims and underwriting functions" },
  { metric: "97.2%", label: "OCR Extraction Accuracy", desc: "On carrier-specific document templates after model training" },
];

const RELATED = [
  {
    title: "Policy Management Software",
    description: "Policy administration platform that feeds the underwriting automation engine with structured policy data.",
    href: "/insurance-software-development/policy-management-software",
    tag: "InsurTech",
  },
  {
    title: "AI Workflow Automation",
    description: "Enterprise AI workflow automation beyond insurance — document processing, intelligent routing, and decision automation.",
    href: "/ai-development/ai-workflow-automation",
    tag: "AI Development",
  },
  {
    title: "Document Workflow Automation",
    description: "End-to-end document management and workflow automation for insurance document-heavy processes.",
    href: "/document-management-system/document-workflow-automation",
    tag: "Document Management",
  },
];

const FAQS = [
  {
    q: "How accurate is AI-powered document extraction on insurance documents?",
    a: "Accuracy depends on document type and training data quality. For structured forms (ACORD, standard FNOL templates), we achieve 97–99% field-level extraction accuracy after model training on 500+ carrier-specific document samples. For unstructured documents like handwritten contractor estimates or medical records, accuracy runs 85–93% and human review queues catch exceptions. We report accuracy by document type and set SLA thresholds before production deployment.",
  },
  {
    q: "What data do you need to train the fraud detection and underwriting AI models?",
    a: "Fraud detection models require historical claim records with adjuster fraud determinations — typically 3–5 years of claims data with at minimum 2,000 confirmed fraud cases. Underwriting models require policy application data matched to loss history — typically 50,000+ policy years. We conduct a data quality assessment before committing to model performance targets.",
  },
  {
    q: "How do you ensure AI decisions are explainable for regulatory and audit purposes?",
    a: "We use interpretable ML approaches (SHAP values, decision tree surrogates) that generate human-readable explanations for every AI decision. Regulatory explainability requirements vary by state and line — we design for the most restrictive requirements in scope. Every AI decision is logged with its explanation, confidence score, and input features for audit access.",
  },
  {
    q: "Can the automation layer integrate with Guidewire ClaimCenter?",
    a: "Yes. We have integration experience with Guidewire ClaimCenter, PolicyCenter, and BillingCenter via their REST APIs and message bus. Automation events trigger Guidewire workflow actions via API; Guidewire claim data feeds the automation engine via webhook or polling. We also integrate with Duck Creek Claims, Mitchell WorkCenter, and Xactimate.",
  },
  {
    q: "What is the ROI timeline for insurance automation?",
    a: "Most clients see positive ROI within 8–14 months of go-live. The fastest returns come from OCR-driven document extraction (immediate labor savings) and STP for high-volume, low-severity claims (direct LAE reduction). Fraud detection ROI materializes over 12–18 months as the model accumulates production signal. We build a detailed ROI model with your ops finance team during the discovery phase.",
  },
];

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

const FAQ_SCHEMA = {
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
    <motion.div {...fadeUp(index)} className="border border-slate-200 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors">
        <span className="font-semibold text-slate-900">{q}</span>
        <HiChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-6 pb-5 text-slate-600 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function InsuranceAutomationPage() {
  return (
    <>
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 flex-wrap">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insurance-software-development" className="hover:text-teal-400 transition-colors">Insurance Software</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">Insurance Automation Solutions</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 bg-emerald-900/60 border border-emerald-700/40 rounded-full px-4 py-1.5 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-7">
                <HiCpuChip className="w-3.5 h-3.5" />
                InsurTech AI Automation Experts
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5 font-heading">
                Insurance Process <span className="text-gradient">Automation Solutions</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                AI-powered automation that eliminates manual claims processing, document extraction bottlenecks, and inconsistent underwriting decisions — with measurable LAE reduction and average annual savings of $2.1M.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["80% Claims Automation", "3× Processing Speed", "$2.1M Avg Savings"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5 bg-teal-900/40 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-sm font-medium">
                    <HiCheckCircle className="w-3.5 h-3.5" />
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5">
                  <HiCalendarDays className="w-5 h-5" />
                  Schedule Free Consultation
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-600 text-slate-300 font-semibold hover:border-slate-400 hover:text-white transition-all hover:-translate-y-0.5">
                  Get ROI Estimate <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Automation dashboard */}
            <motion.div {...fadeUp(1)}>
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-400 text-sm font-medium">Automation Engine — Live Metrics</p>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Processing
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "STP Rate", value: "81.4%", color: "text-emerald-400" },
                    { label: "Claims Today", value: "2,841", color: "text-teal-400" },
                    { label: "OCR Accuracy", value: "97.2%", color: "text-blue-400" },
                    { label: "Fraud Flagged", value: "47", color: "text-amber-400" },
                  ].map((c) => (
                    <div key={c.label} className="bg-slate-700/60 rounded-xl p-4">
                      <div className={`${c.color} font-bold text-xl mb-0.5`}>{c.value}</div>
                      <div className="text-slate-500 text-xs">{c.label}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mb-4">
                  {[
                    { label: "Auto Glass STP", value: 96, color: "from-emerald-500 to-teal-400" },
                    { label: "Minor Property", value: 78, color: "from-blue-500 to-indigo-400" },
                    { label: "Underwriting Rules", value: 83, color: "from-violet-500 to-purple-400" },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400">{row.label}</span>
                        <span className="text-white font-medium">{row.value}% automated</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-1.5">
                        <div className={`bg-gradient-to-r ${row.color} h-1.5 rounded-full`} style={{ width: `${row.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between bg-emerald-900/30 border border-emerald-700/40 rounded-xl px-4 py-2.5">
                  <span className="text-emerald-300 text-sm font-medium">LAE Saved This Month</span>
                  <span className="text-emerald-400 font-bold">$183,420</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="bg-dots py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              The Manual Operations <span className="text-gradient">Driving Up Your Loss Adjustment Expense</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Every manual step in claims and underwriting is a LAE cost, an accuracy risk, and a competitive disadvantage against carriers that have already automated.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROBLEMS.map((p, i) => (
              <motion.div key={p.title} {...fadeUp(i)} className="bg-white border border-slate-200 rounded-2xl p-7 hover:border-emerald-300 hover:shadow-md transition-all">
                <h3 className="text-slate-900 font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-slate-500 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 text-emerald-700 text-xs font-semibold uppercase tracking-widest mb-5">
              <HiCpuChip className="w-3.5 h-3.5" />
              Automation Capabilities
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">
              AI-Powered <span className="text-gradient">Insurance Automation</span> Stack
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Production-grade automation components — not RPA scripts. Purpose-built AI models trained on insurance-specific document types, claim patterns, and risk profiles.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} {...fadeUp(i)} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-slate-900 font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-slate-50 border-y border-slate-200 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 font-heading">Automation <span className="text-gradient">Deployment Process</span></h2>
            <p className="text-slate-500 max-w-xl mx-auto">From process audit to live automation — a disciplined approach that de-risks AI deployment in regulated insurance environments.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} {...fadeUp(i)} className="flex gap-6 items-start bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-300 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ── */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-2xl font-bold text-slate-900 mb-8 font-heading">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {TECH.map((t) => <span key={t.label} className={`inline-flex items-center px-4 py-2 rounded-lg border text-sm font-medium ${t.color}`}>{t.label}</span>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 font-heading">Automation <span className="text-gradient">Results</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">Measured outcomes across insurance carrier and TPA automation deployments.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div key={r.label} {...fadeUp(i)} className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 text-center hover:border-emerald-700/50 transition-all">
                <div className="text-4xl font-bold text-emerald-400 mb-2">{r.metric}</div>
                <div className="text-white font-semibold mb-2">{r.label}</div>
                <div className="text-slate-400 text-sm">{r.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)}>
            <BookingBanner
              heading="Ready to quantify your automation opportunity?"
              subheading="Book a free 30-minute session. We'll audit your claims and underwriting workflows and deliver a LAE reduction estimate and automation roadmap — no commitment required."
              cta="Book Free Automation ROI Assessment"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-dots py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 font-heading">Related Insurance Services</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((rel, i) => (
              <motion.div key={rel.title} {...fadeUp(i)}>
                <Link href={rel.href} className="group flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-7 hover:border-teal-300 hover:shadow-lg transition-all hover:-translate-y-1">
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-3">{rel.tag}</span>
                  <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-teal-600 transition-colors">{rel.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{rel.description}</p>
                  <div className="flex items-center gap-1 text-teal-600 text-sm font-medium mt-5">
                    Explore <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-200 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 font-heading">Insurance Automation <span className="text-gradient">FAQ</span></h2>
          </motion.div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} index={i} />)}
          </div>
        </div>
      </section>

      <BookingSection
        badge="Insurance AI Automation Specialists"
        heading="Automate 80% of Your Claims Processing"
        subheading="Schedule a free 30-minute session with our InsurTech automation engineers. We'll assess your claims volume, document types, and current LAE — then give you an honest automation ROI projection."
        primaryCTA="Schedule Free Automation Assessment"
        secondaryCTA="Get ROI Estimate"
        stats={[
          { value: "$2.1M", label: "Avg annual savings" },
          { value: "80%", label: "STP rate achieved" },
          { value: "Free", label: "ROI assessment" },
        ]}
        trustItems={[
          "Insurance domain AI engineers on every engagement",
          "Shadow-mode deployment before live automation",
          "Regulatory explainability built in from day one",
        ]}
      />
      <Footer />
      <FloatingBookingButton label="Book Automation Call" />
    </>
  );
}
