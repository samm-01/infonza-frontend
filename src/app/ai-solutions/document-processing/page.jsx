"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiChevronDown,
  HiBolt,
  HiChartBar,
  HiCircleStack,
  HiDocumentText,
  HiShieldCheck,
  HiCpuChip,
  HiMagnifyingGlass,
  HiTableCells,
  HiClipboardDocumentCheck,
  HiSquares2X2,
  HiWrenchScrewdriver,
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
  { metric: "99%", label: "Extraction Accuracy", sub: "on structured document types" },
  { metric: "10×", label: "Faster Processing", sub: "vs manual document review" },
  { metric: "Zero", label: "Manual Data Entry", sub: "fully automated extraction" },
  { metric: "Any", label: "Document Format", sub: "PDF, scanned, image, form" },
];

const CAPABILITIES = [
  {
    icon: HiMagnifyingGlass,
    title: "OCR & Image Recognition",
    desc: "High-accuracy optical character recognition for scanned documents, handwritten notes, and photo-captured forms. GPT-4 Vision and AWS Textract combined for best-in-class accuracy across document quality levels.",
  },
  {
    icon: HiDocumentText,
    title: "PDF Data Extraction",
    desc: "Structured extraction of key fields, tables, line items, dates, amounts, and entities from native and scanned PDFs — insurance claim forms, invoices, tax documents, contracts, and medical records.",
  },
  {
    icon: HiSquares2X2,
    title: "Document Classification",
    desc: "AI models that automatically classify incoming documents by type — contract, invoice, claim form, ID document, medical record, tax filing — and route them to the correct processing workflow instantly.",
  },
  {
    icon: HiTableCells,
    title: "Form Processing",
    desc: "Intelligent form field detection and extraction for structured forms: insurance applications, medical intake forms, loan applications, and government forms — handling variable layouts and handwritten entries.",
  },
  {
    icon: HiCpuChip,
    title: "Document Intelligence",
    desc: "Beyond extraction — AI that understands document content. Summarization, entity recognition, clause identification in contracts, risk factor detection in insurance documents, and anomaly flagging in financial records.",
  },
  {
    icon: HiShieldCheck,
    title: "Compliance Verification",
    desc: "Automated compliance checks against regulatory requirements: verifying required fields are present, flagging missing signatures, checking date validity, confirming mandatory disclosures, and generating audit trails.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Document Audit",
    desc: "We analyze a representative sample of your document types — 200-500 documents across all variants, formats, and quality levels. We identify the highest-value extraction fields, assess OCR complexity, and map the downstream systems that need the extracted data.",
  },
  {
    step: "02",
    title: "Model Selection",
    desc: "We select the optimal processing stack for your document types: GPT-4 Vision for complex, variable-layout documents requiring reasoning; AWS Textract for high-volume structured forms with consistent layouts; Azure Form Recognizer for pre-built models on common document types like invoices and tax forms.",
  },
  {
    step: "03",
    title: "Training & Fine-tuning",
    desc: "For domain-specific documents, we fine-tune extraction models on your annotated document samples. Insurance claim forms, legal contracts, and medical records have specialized terminology and field layouts that benefit significantly from domain-specific training.",
  },
  {
    step: "04",
    title: "Integration",
    desc: "We build intake pipelines (email ingestion, SFTP, API upload, document management system connectors) and output integrations (database writes, CRM updates, ERP data push, downstream API calls) so extracted data flows directly into your operational systems.",
  },
  {
    step: "05",
    title: "Validation & QA",
    desc: "Every extraction pipeline includes confidence scoring, human review queues for low-confidence extractions, field validation logic (date formats, amount ranges, required field checks), and exception handling workflows. We set accuracy benchmarks and don't go live until they're met.",
  },
];

const TECH = [
  { n: "OpenAI GPT-4 Vision", c: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { n: "Claude", c: "bg-violet-50 border-violet-200 text-violet-700" },
  { n: "AWS Textract", c: "bg-orange-50 border-orange-200 text-orange-700" },
  { n: "Azure Form Recognizer", c: "bg-sky-50 border-sky-200 text-sky-700" },
  { n: "LangChain", c: "bg-teal-50 border-teal-200 text-teal-700" },
  { n: "FastAPI", c: "bg-amber-50 border-amber-200 text-amber-700" },
  { n: "PostgreSQL", c: "bg-blue-50 border-blue-200 text-blue-700" },
];

const INDUSTRIES = [
  {
    name: "Insurance",
    use: "Insurance claim forms, FNOL processing, policy documents, coverage verification, loss run reports, medical bills for claims — automated extraction and compliance checking",
  },
  {
    name: "Legal",
    use: "Contract analysis and clause extraction, due diligence document review, NDA processing, court filing extraction, legal discovery document classification",
  },
  {
    name: "Healthcare",
    use: "Medical records and clinical notes extraction, prior authorization forms, patient intake processing, lab result structuring, prescription data extraction",
  },
  {
    name: "Finance",
    use: "Invoice processing and three-way matching, tax document extraction, bank statement analysis, financial report data extraction, KYC document verification",
  },
  {
    name: "Logistics",
    use: "Bill of lading processing, customs declaration extraction, delivery receipt OCR, freight invoice automation, hazmat documentation compliance checks",
  },
  {
    name: "Government",
    use: "Permit application processing, license renewal form extraction, public record digitization, regulatory filing data extraction, compliance document verification",
  },
];

const WHY = [
  {
    title: "Document-Type Expertise",
    desc: "We've built extraction pipelines for insurance claim forms, legal contracts, medical records, invoices, and tax documents. We understand the field layouts, terminology, and edge cases specific to each document type — not just generic OCR.",
  },
  {
    title: "Accuracy-First Engineering",
    desc: "We don't ship extraction pipelines that don't meet accuracy benchmarks. Every pipeline is tested against a held-out validation set before go-live, with field-level accuracy metrics reported for each document type.",
  },
  {
    title: "Confidence-Based Routing",
    desc: "Low-confidence extractions are automatically routed to human review queues — we don't pretend the AI gets everything right every time. The system is designed to handle uncertainty gracefully rather than silently produce errors.",
  },
  {
    title: "End-to-End Integration",
    desc: "We build the full pipeline — document ingestion, extraction, validation, and downstream data push. Extracted data flows directly into your ERP, CRM, database, or operational systems without manual re-entry.",
  },
  {
    title: "Compliance & Audit Trails",
    desc: "Every document processed generates a complete audit log — extraction timestamp, confidence scores, fields extracted, validation results, and any human review actions. Essential for regulated industries like insurance, healthcare, and finance.",
  },
];

const FAQS = [
  {
    q: "What is AI document processing and how does it work?",
    a: "AI document processing combines optical character recognition (OCR), computer vision, and large language models to automatically extract structured data from unstructured documents — PDFs, scanned images, forms, and photos. The process involves: (1) ingesting the document, (2) applying OCR or vision models to recognize text and layout, (3) using AI to identify and extract specific fields (dates, amounts, names, entities, clauses), (4) validating extracted data against business rules, and (5) pushing structured data to downstream systems. The result is zero-touch data extraction that replaces manual document review.",
  },
  {
    q: "What types of documents can you process?",
    a: "We build processing pipelines for any document type where structured data extraction delivers business value. Common document types include: insurance claim forms and FNOL reports, legal contracts and NDAs, medical records and clinical notes, invoices and purchase orders, tax forms (W-2, 1099, Schedule C), bank statements, loan applications, medical intake forms, bills of lading, customs declarations, government permit applications, and identity documents. For each document type we build specialized extraction models rather than using generic off-the-shelf tools.",
  },
  {
    q: "How accurate is AI document extraction?",
    a: "Accuracy varies by document type and quality. For high-quality native PDFs with consistent layouts (invoices, standard forms), we achieve 97-99% field-level extraction accuracy. For scanned documents with good scan quality, 93-97% is typical. For low-quality scans, handwritten content, or highly variable layouts, accuracy is lower — typically 85-93% — and we implement confidence-based routing to send low-confidence extractions to human review. We always report field-level accuracy benchmarks before go-live and don't deploy pipelines that don't meet agreed accuracy thresholds.",
  },
  {
    q: "Can you process handwritten documents?",
    a: "Yes, with caveats. Modern vision models including GPT-4 Vision handle handwriting recognition significantly better than traditional OCR. Clean, legible handwriting on standard forms achieves 85-92% accuracy. Cursive, poor penmanship, or very degraded scans yield lower accuracy. We test on representative samples of your actual handwritten documents and set realistic accuracy expectations before committing to a deployment. For forms with handwriting, we typically combine multiple models — traditional OCR for printed fields, vision models for handwritten fields.",
  },
  {
    q: "How does document classification work?",
    a: "Document classification AI assigns incoming documents to predefined categories before routing them to the correct extraction pipeline. We train classification models on labeled samples of your document types — typically 50-200 examples per category. The classifier analyzes document structure, text patterns, and layout to assign a document type with a confidence score. High-confidence classifications route automatically; low-confidence ones go to a human review queue. Once classified, documents enter the extraction pipeline configured for that document type.",
  },
  {
    q: "Can AI extract data from tables inside documents?",
    a: "Yes — table extraction is a specific capability we build into document processing pipelines where needed. AWS Textract and GPT-4 Vision both support table structure detection and extraction, outputting rows and columns as structured data. This is essential for documents like insurance schedules, medical lab results, financial statements, and invoice line items. We handle multi-page tables, tables with merged cells, and tables with inconsistent column headers across document versions.",
  },
  {
    q: "How do you handle document variations and layout changes?",
    a: "This is one of the key challenges in production document processing. We address it through: (1) template-free extraction models that understand document semantics rather than relying on fixed field positions, (2) multi-model ensembles that combine spatial layout analysis with semantic understanding, (3) continuous monitoring to detect accuracy drops that signal layout changes, and (4) active learning pipelines that incorporate corrections from human reviewers to improve models over time. For documents with known vendor variants (e.g., different insurer claim forms), we maintain per-vendor extraction configurations.",
  },
  {
    q: "What happens when the AI can't extract a field with confidence?",
    a: "Low-confidence extractions are never silently dropped or randomly guessed. Our pipelines implement confidence thresholds for every field — when confidence falls below threshold, the document (or just the low-confidence field) is automatically routed to a human review queue with the AI's best guess pre-populated for quick human confirmation. This hybrid approach means you get the efficiency gains of automation on the 85-95% of documents where confidence is high, while maintaining accuracy on the exceptions. The human review rate decreases over time as models improve.",
  },
  {
    q: "Can you integrate with our existing document management systems?",
    a: "Yes — we build connectors for all major document sources and destinations. Input connectors include: email inbox monitoring (documents arriving as attachments), SharePoint and OneDrive, Google Drive, Dropbox, SFTP servers, document management systems like DocuWare and Laserfiche, and direct API upload. Output integrations include: database writes (PostgreSQL, SQL Server, MySQL), CRM push (Salesforce, HubSpot), ERP systems (SAP, NetSuite), and custom REST API calls. We implement bidirectional sync where needed — extracted data writing back to document metadata.",
  },
  {
    q: "Is the document processing system HIPAA and GDPR compliant?",
    a: "We build document processing infrastructure with compliance requirements as a first-class constraint. For HIPAA (healthcare): we deploy on HIPAA-eligible infrastructure (AWS or Azure with BAAs), implement end-to-end encryption in transit and at rest, enforce strict access controls with audit logging, and minimize data retention to what's operationally necessary. For GDPR: we implement data minimization, right-to-erasure workflows, processing records, and data residency controls to keep EU data in EU regions. For insurance and financial documents, we add additional access controls and audit trail requirements specific to those regulatory environments.",
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
  name: "AI Document Processing",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  description:
    "Extract, classify, and structure data from PDFs, scanned documents, and forms with AI. Built for insurance, legal, and healthcare document workflows.",
  areaServed: "Worldwide",
  serviceType: "AI Development",
  url: "https://infonza.com/ai-solutions/document-processing",
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

export default function DocumentProcessingPage() {
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
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">AI Document Processing</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-900/60 border border-indigo-700/40 rounded-full px-4 py-1.5 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiDocumentText className="w-3.5 h-3.5" />
                AI Document Processing
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Extract Intelligence From{" "}
                <span className="text-gradient">Any Document With AI</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                We build AI document processing pipelines that extract, classify, and structure
                data from PDFs, scanned documents, forms, and images — eliminating manual data
                entry across insurance, legal, and healthcare workflows.
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

            {/* Right — document processing visualization */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Document Processing — Active</span>
                  <span className="ml-auto text-xs text-slate-500">GPT-4 Vision + Textract</span>
                </div>
                <div className="p-5 space-y-3 min-h-[280px] font-mono text-xs">
                  {[
                    { status: "done", label: "Document ingested", detail: "insurance_claim_form_84729.pdf — 4 pages, scanned at 300dpi" },
                    { status: "done", label: "Classification", detail: "Document type: Auto Insurance Claim Form (98% confidence)" },
                    { status: "done", label: "OCR complete", detail: "Text extracted — 847 characters, 2 handwritten fields detected" },
                    { status: "done", label: "Field extraction", detail: "Claimant name, DOL, policy number, damage description, amount — extracted" },
                    { status: "active", label: "Validation running", detail: "Checking required fields, date formats, policy number format…" },
                    { status: "pending", label: "CRM push", detail: "Structured data queued for Salesforce claims pipeline injection" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                        step.status === "done" ? "bg-teal-400" :
                        step.status === "active" ? "bg-indigo-400 animate-pulse" :
                        "bg-slate-600"
                      }`} />
                      <div>
                        <span className={`font-semibold ${
                          step.status === "done" ? "text-teal-400" :
                          step.status === "active" ? "text-indigo-400" :
                          "text-slate-500"
                        }`}>[{step.label}]</span>
                        <span className="text-slate-400 ml-2">{step.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Today: 1,847 documents processed</span>
                  <span className="text-xs text-indigo-400">Zero manual entry</span>
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
              <span className="text-gradient">AI Document Processing</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six core capabilities delivered in every document intelligence system we architect and deploy.
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center mb-3">
                  <f.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENT TYPES CALLOUT ── */}
      <section className="bg-indigo-50 border-y border-indigo-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-base font-bold text-slate-800 mb-6">
            Document Types We Process
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              "Insurance Claim Forms",
              "Legal Contracts",
              "Medical Records",
              "Invoices & POs",
              "Tax Documents",
              "Bank Statements",
              "Loan Applications",
              "Prior Auth Forms",
              "Bills of Lading",
              "Customs Declarations",
              "Medical Intake Forms",
              "NDAs",
              "Court Filings",
              "Identity Documents",
              "Lab Results",
            ].map((doc) => (
              <span key={doc} className="px-3.5 py-1.5 rounded-full border border-indigo-200 bg-white text-xs font-semibold text-indigo-700">
                {doc}
              </span>
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
              How We Build Your <span className="text-gradient">Document Processing System</span>
            </h2>
            <p className="text-slate-400">From document audit to production pipeline in 4-6 weeks.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-indigo-700/60 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs font-mono">
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
              AI Document Processing Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We build document processing systems tailored to the specific document types, field structures, and compliance requirements of each industry.
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
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-indigo-200 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center">
                  <HiCheckCircle className="w-4 h-4 text-indigo-600" />
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
              Why Teams Choose <span className="text-gradient">Infonza</span> for Document Processing
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md transition-all"
              >
                <HiCheckCircle className="w-6 h-6 text-indigo-500 mb-3" />
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
            heading="How much time is your team spending on manual document processing?"
            subheading="Get a free document workflow audit. Send us 20-50 sample documents and we'll assess extraction feasibility, estimate accuracy, and scope the automation opportunity."
            cta="Schedule Free Document Audit"
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
                title: "AI Knowledge Base Systems",
                desc: "Build internal knowledge bases powered by AI — indexing your documents, policies, and SOPs for instant, accurate retrieval across your organization.",
                href: "/ai-solutions/knowledge-base-systems",
                icon: HiCircleStack,
              },
              {
                title: "AI Data Extraction Solutions",
                desc: "Structured data extraction from any source — websites, APIs, databases, and documents — feeding clean, structured data into your operational systems.",
                href: "/ai-solutions/data-extraction",
                icon: HiTableCells,
              },
              {
                title: "AI Business Process Automation",
                desc: "End-to-end automation of complex business workflows combining document processing, decision logic, integrations, and human-in-the-loop approvals.",
                href: "/ai-solutions/business-process-automation",
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
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-3 group-hover:bg-indigo-100 transition-colors">
                    <s.icon className="w-4 h-4 text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-indigo-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 flex-1 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-indigo-600 text-xs font-semibold">
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
              Technical answers about AI document processing, accuracy, and integration.
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
        badge="Free Document Processing Consultation"
        heading="Automate Your Document Workflows With AI"
        subheading="Schedule a 30-minute session with our document processing engineers. Share your document types, volume, and downstream systems — we'll assess feasibility, estimate accuracy, and scope the project."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to a Document AI Expert"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
