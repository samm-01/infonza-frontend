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
  HiCpuChip,
  HiCircleStack,
  HiCog6Tooth,
  HiDocumentText,
  HiGlobeAlt,
  HiArrowDownTray,
  HiTableCells,
  HiArrowPathRoundedSquare,
  HiRocketLaunch,
  HiMagnifyingGlass,
  HiServerStack,
  HiCommandLine,
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
  { metric: "99%", label: "Data Accuracy", sub: "AI-validated extraction with error detection" },
  { metric: "10,000+", label: "Pages/Hour", sub: "at full pipeline throughput" },
  { metric: "Any", label: "Source Format", sub: "web, PDF, image, API, database" },
  { metric: "Real-Time", label: "Pipelines", sub: "event-driven or scheduled delivery" },
];

const CAPABILITIES = [
  {
    icon: HiGlobeAlt,
    title: "Intelligent Web Scraping",
    desc: "AI-powered scrapers that navigate dynamic JavaScript-rendered pages, handle authentication flows, rotate proxies, and adapt to site structure changes — extracting structured data reliably at scale from thousands of URLs.",
  },
  {
    icon: HiDocumentText,
    title: "PDF & Document Extraction",
    desc: "Extract structured data from PDFs, scanned documents, and images using OCR and GPT-4 Vision — including complex layouts like tables, forms, financial statements, contracts, and mixed text-image documents.",
  },
  {
    icon: HiServerStack,
    title: "Structured Data Pipelines",
    desc: "End-to-end data pipelines that extract, transform, validate, and load data into your destination systems — databases, data warehouses, APIs, or spreadsheets — with schema enforcement and data quality checks at every step.",
  },
  {
    icon: HiBolt,
    title: "Real-Time Data Feeds",
    desc: "Event-driven extraction pipelines that monitor source systems for new or changed data and push updates to downstream systems in near real-time — for pricing feeds, news monitoring, competitive intelligence, and market data.",
  },
  {
    icon: HiTableCells,
    title: "Data Cleaning & Normalization",
    desc: "AI-powered data cleaning pipelines that deduplicate records, normalize formats (dates, currencies, addresses, phone numbers), resolve entity names, and flag anomalies — delivering consistent, analysis-ready datasets.",
  },
  {
    icon: HiArrowDownTray,
    title: "API Data Delivery",
    desc: "Extracted data delivered via REST API, webhook, or direct database write — making your extraction pipeline a live data service that downstream applications can query on demand or subscribe to for real-time updates.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Source Analysis",
    desc: "We analyze your target data sources — website structures, document formats, API schemas, or database layouts — and define the exact fields to extract, the expected data types, and the validation rules that define a quality extraction. We identify anti-scraping measures, rate limits, and structural variability upfront.",
  },
  {
    step: "02",
    title: "Extraction Architecture",
    desc: "We design the extraction architecture: scraper technology selection (Playwright for JS-heavy sites, lightweight HTTP for static pages), chunking and batching strategy, error recovery and retry logic, proxy rotation configuration, and the data schema for structured output.",
  },
  {
    step: "03",
    title: "Pipeline Build",
    desc: "We build the extraction pipeline with AI-assisted field identification using GPT-4 Vision for complex layouts, LangChain for document parsing, and Playwright/Puppeteer for web scraping. Data flows through validation and normalization layers before reaching the output destination.",
  },
  {
    step: "04",
    title: "Validation",
    desc: "The pipeline is tested against a representative sample of real source data covering edge cases — irregular layouts, missing fields, currency formats, date variations, scanned vs native PDFs. We measure field-level extraction accuracy and iterate until all critical fields hit target accuracy.",
  },
  {
    step: "05",
    title: "Delivery & Monitoring",
    desc: "Production deployment with real-time monitoring: extraction success rate per source, field-level accuracy tracking, data freshness alerts, and automatic notifications on source structure changes that break extraction. Pipelines self-heal from transient errors and alert on persistent failures.",
  },
];

const TECH = [
  { n: "OpenAI GPT-4 Vision", c: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  { n: "Claude (Anthropic)", c: "bg-violet-50 border-violet-200 text-violet-700" },
  { n: "Playwright", c: "bg-green-50 border-green-200 text-green-700" },
  { n: "Puppeteer", c: "bg-yellow-50 border-yellow-200 text-yellow-700" },
  { n: "AWS Textract", c: "bg-orange-50 border-orange-200 text-orange-700" },
  { n: "LangChain", c: "bg-amber-50 border-amber-200 text-amber-700" },
  { n: "FastAPI", c: "bg-sky-50 border-sky-200 text-sky-700" },
  { n: "PostgreSQL", c: "bg-blue-50 border-blue-200 text-blue-700" },
  { n: "Redis", c: "bg-red-50 border-red-200 text-red-700" },
];

const INDUSTRIES = [
  { name: "Insurance", use: "Claims data extraction from PDFs, policy document parsing, third-party data ingestion" },
  { name: "Finance", use: "Financial statement extraction, market data feeds, regulatory filing parsing, SEC document processing" },
  { name: "Legal", use: "Contract data extraction, court filing scraping, regulatory database monitoring, due diligence data collection" },
  { name: "Real Estate", use: "Property listing aggregation, MLS data scraping, market price tracking, permit data extraction" },
  { name: "E-commerce", use: "Competitor pricing feeds, product catalog aggregation, review scraping, inventory monitoring" },
  { name: "Healthcare", use: "Clinical trial data extraction, drug database feeds, provider directory scraping, formulary parsing" },
];

const WHY = [
  {
    title: "AI-Augmented Extraction",
    desc: "We use GPT-4 Vision and Claude to extract data from documents that would defeat traditional pattern-matching — complex table layouts, scanned forms, mixed-language documents, and irregular report formats.",
  },
  {
    title: "Extraction Accuracy Guarantees",
    desc: "We measure and report field-level extraction accuracy before and during production. Critical fields are validated against known ground truth samples. We don't ship pipelines that don't hit accuracy targets.",
  },
  {
    title: "Anti-Detection Engineering",
    desc: "Our web scraping infrastructure includes residential proxy rotation, browser fingerprint randomization, human-like request timing, and CAPTCHA handling — built to remain operational against modern bot detection.",
  },
  {
    title: "Schema Evolution Management",
    desc: "Websites change and documents evolve. We build pipelines with schema change detection that alerts when a source structure breaks the extraction, and we maintain the pipeline to adapt to source changes.",
  },
  {
    title: "Compliance-Aware Scraping",
    desc: "We review terms of service, implement robots.txt compliance, enforce rate limiting, and advise on legal data use. We build extraction pipelines that respect the data sources they depend on.",
  },
];

const FAQS = [
  {
    q: "What types of data sources can you extract from?",
    a: "We extract from any text-bearing source: public and authenticated websites (including JavaScript-rendered single-page applications), PDF documents (native and scanned), Word documents, Excel files, images, email attachments, REST APIs, SOAP APIs, database exports, FTP feeds, and IoT data streams. If data exists in digital form, we can build a pipeline to extract it.",
  },
  {
    q: "How do you handle websites that use JavaScript rendering or require login?",
    a: "We use Playwright for JavaScript-rendered sites — it runs a full browser, executes JavaScript, and can interact with dynamic content just like a human user. For authenticated sites, we implement secure session management — storing credentials in an encrypted vault, handling login flows including multi-factor authentication, and maintaining session state across requests. We also handle cookie consent dialogs and age verification gates that block simpler scrapers.",
  },
  {
    q: "How accurate is AI-powered data extraction from PDFs and scanned documents?",
    a: "For native (text-layer) PDFs, structured field extraction typically achieves 97–99% accuracy. For scanned documents, accuracy depends heavily on scan quality — high-quality scans achieve 94–98% accuracy on printed text. For complex tables in scanned documents, we combine AWS Textract with GPT-4 Vision post-processing to achieve 90–95% accuracy on well-formed tables. We always measure and report accuracy against a validation sample before production deployment.",
  },
  {
    q: "How do you prevent web scrapers from being blocked?",
    a: "We use a layered anti-detection approach: residential and datacenter proxy rotation (matching geographic origin to target site expectations), browser fingerprint randomization to avoid bot detection signatures, human-like request timing with randomized delays, realistic browser headers and user agents, CAPTCHA solving via third-party services for high-value targets, and adaptive throttling that backs off when rate limit signals are detected. We also monitor block rates in real time and rotate infrastructure when block rates spike.",
  },
  {
    q: "Can you build real-time data feeds, or is this batch-only?",
    a: "Both modes are supported. For real-time feeds, we implement event-driven pipelines that monitor source systems via RSS/Atom feeds, API webhooks, or polling at short intervals (1–5 minutes). Extracted data is pushed to downstream systems via webhooks or message queues (Redis Pub/Sub, AWS SQS) for near-real-time delivery. For batch processing, we run scheduled pipelines at daily, hourly, or custom intervals with full incremental update support.",
  },
  {
    q: "How do you handle data quality and validation?",
    a: "Every extraction pipeline includes field-level validation rules: type checking, value range validation, regex pattern matching for structured fields (phone numbers, postal codes, dates), mandatory field presence checks, and cross-field consistency checks. Rows that fail validation are quarantined to a review queue rather than passed to downstream systems. Summary validation reports are available after every pipeline run showing pass rates per field.",
  },
  {
    q: "What happens when a website changes its structure and breaks the scraper?",
    a: "We build structural change detection into every scraper — the pipeline monitors for changes in target page layouts and fires an alert when extraction rates or field accuracy drop below threshold. We include a maintenance SLA in our engagements covering scraper repair when target sites change. For critical data feeds, we implement redundant extraction paths using multiple field selectors so minor layout changes don't halt the pipeline.",
  },
  {
    q: "How is extracted data delivered — CSV files, database, API?",
    a: "Delivery format is entirely your choice. We can write directly to your PostgreSQL or MySQL database, push to a REST API endpoint, deliver to an S3 bucket as CSV or JSON, send to a data warehouse (BigQuery, Redshift, Snowflake), or serve extracted data through an API endpoint we build for you. Many pipelines use multiple delivery targets simultaneously — database for querying and S3 for archival, for example.",
  },
  {
    q: "Is web scraping legally compliant?",
    a: "The legality of web scraping depends on the specific site, data type, and jurisdiction. We review robots.txt compliance, terms of service, and relevant case law for your target sources before building. We implement rate limiting to avoid disrupting target servers, and we advise on legally safe data use practices. We do not build scrapers for sources that have explicitly and specifically prohibited automated access in legally enforceable terms, or that would access private user data without appropriate authorization.",
  },
  {
    q: "What is the typical timeline and cost for a data extraction pipeline?",
    a: "A single-source extraction pipeline (one website or document type) typically takes 2–3 weeks to build, validate, and deploy. A multi-source pipeline covering 5–10 sources takes 4–6 weeks. Ongoing maintenance is typically scoped as a monthly retainer covering source change monitoring and scraper repairs. Cost depends on the complexity of anti-detection measures required, number of sources, and real-time vs batch delivery requirements.",
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
  name: "AI Data Extraction Solutions",
  provider: {
    "@type": "Organization",
    name: "Infonza Innovations",
    url: "https://infonza.com",
  },
  description:
    "Build intelligent data extraction pipelines that scrape websites, parse PDFs, and convert unstructured data into clean structured datasets — at scale.",
  areaServed: "Worldwide",
  serviceType: "AI Development",
  url: "https://infonza.com/ai-solutions/data-extraction-solutions",
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

export default function DataExtractionSolutionsPage() {
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
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ai-solutions" className="hover:text-teal-400 transition-colors">AI Solutions</Link>
            <span>/</span>
            <span className="text-slate-300 font-medium">AI Data Extraction Solutions</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-cyan-900/60 border border-cyan-700/40 rounded-full px-4 py-1.5 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-6">
                <HiArrowDownTray className="w-3.5 h-3.5" />
                AI Data Extraction
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] mb-6">
                Extract Structured Data From Anywhere{" "}
                <span className="text-gradient">With AI</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
                We build intelligent data extraction pipelines that scrape websites, parse complex
                PDFs, and convert unstructured data from any source into clean, structured datasets
                — at 10,000+ pages per hour with 99% field-level accuracy.
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

            {/* Right — data extraction pipeline visualization */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="bg-slate-800/80 border border-slate-700/60 rounded-2xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-slate-700/60 bg-slate-800">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-sm font-medium text-slate-200">Data Pipeline — Running</span>
                  <span className="ml-auto text-xs text-slate-500">Playwright + GPT-4 Vision</span>
                </div>
                <div className="p-5 space-y-3 min-h-[280px] font-mono text-xs">
                  {[
                    { status: "done", label: "Source: 8,240 URLs queued", detail: "competitor pricing pages — batch started 09:00 UTC" },
                    { status: "done", label: "Scraper running", detail: "Playwright + residential proxy pool | 2,841 pages scraped" },
                    { status: "done", label: "AI field extraction", detail: "product_name, price, currency, stock_status extracted per page" },
                    { status: "done", label: "Validation pass", detail: "99.2% field accuracy | 67 anomalies flagged → review queue" },
                    { status: "active", label: "Normalization", detail: "Currency → USD | Dates → ISO 8601 | Entity dedup running…" },
                    { status: "pending", label: "Delivery", detail: "PostgreSQL write + S3 CSV export + webhook push" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${
                        step.status === "done" ? "bg-teal-400" :
                        step.status === "active" ? "bg-cyan-400 animate-pulse" :
                        "bg-slate-600"
                      }`} />
                      <div>
                        <span className={`font-semibold ${
                          step.status === "done" ? "text-teal-400" :
                          step.status === "active" ? "text-cyan-400" :
                          "text-slate-500"
                        }`}>[{step.label}]</span>
                        <span className="text-slate-400 ml-2">{step.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3 border-t border-slate-700/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Throughput: 11,200 pages/hr</span>
                  <span className="text-xs text-cyan-400">ETA: 43 minutes remaining</span>
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
              <span className="text-gradient">AI Data Extraction</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Six core capabilities that turn any unstructured data source into clean, structured, analysis-ready datasets.
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-cyan-300 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center mb-3">
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
              How We Build Your <span className="text-gradient">Data Extraction Pipeline</span>
            </h2>
            <p className="text-slate-400">From source analysis to live production pipeline with validated accuracy.</p>
          </motion.div>
          <div className="space-y-4">
            {PROCESS.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-5 p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-cyan-700/60 transition-colors"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-white font-bold text-xs font-mono">
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
              Data Extraction Across <span className="text-gradient">Industries</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We build extraction pipelines calibrated to your industry's specific data sources, formats, and quality requirements.
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
                className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-200 transition-colors"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                  <HiCheckCircle className="w-4 h-4 text-cyan-600" />
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
              Why Teams Choose <span className="text-gradient">Infonza</span> for Data Extraction
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
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-cyan-200 hover:shadow-md transition-all"
              >
                <HiCheckCircle className="w-6 h-6 text-cyan-500 mb-3" />
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
            heading="Ready to build your data extraction pipeline?"
            subheading="Get a free source analysis from our data engineers. We'll assess your target data sources and scope a pipeline with accuracy and throughput estimates."
            cta="Schedule Free Source Analysis"
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
                title: "AI Document Processing",
                desc: "Intelligent document ingestion and classification pipelines that extract structured data from any document format at enterprise scale.",
                href: "/ai-solutions/document-processing",
                icon: HiDocumentText,
              },
              {
                title: "AI Knowledge Base Systems",
                desc: "Turn your extracted structured data into a searchable AI knowledge base — giving your team instant answers from any data source.",
                href: "/ai-solutions/knowledge-base-systems",
                icon: HiMagnifyingGlass,
              },
              {
                title: "AI Business Process Automation",
                desc: "Feed extracted data directly into automated business workflows — eliminating manual data entry and accelerating downstream processes.",
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
                  className="group flex flex-col h-full bg-white border border-slate-200 rounded-xl p-5 hover:border-cyan-300 hover:shadow-lg transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-3 group-hover:bg-cyan-100 transition-colors">
                    <s.icon className="w-4.5 h-4.5 text-cyan-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-cyan-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 flex-1 leading-relaxed">{s.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-cyan-600 text-xs font-semibold">
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
              Honest answers about AI data extraction, web scraping, and structured data pipelines.
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
        badge="Free Data Extraction Consultation"
        heading="Build Your Data Extraction Pipeline"
        subheading="Schedule a 30-minute session with our data engineers. We'll analyze your target sources, assess extraction feasibility, and give you a pipeline scope with accuracy and throughput projections."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to a Data Engineer"
      />

      <FloatingBookingButton label="Book Consultation" />
      <Footer />
    </>
  );
}
