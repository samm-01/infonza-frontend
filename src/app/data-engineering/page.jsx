"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTABanner from "../components/cta-banner";

const capabilities = [
  {
    icon: "⚡",
    title: "Real-Time Data Pipelines",
    description:
      "Stream processing architectures using Kafka and Apache Spark that handle millions of events per day with sub-second latency.",
  },
  {
    icon: "🏗️",
    title: "Data Warehouse Design",
    description:
      "Scalable warehouse schemas on Snowflake, BigQuery, or Redshift — built for analytics workloads, not OLTP guesswork.",
  },
  {
    icon: "🔄",
    title: "ETL / ELT Engineering",
    description:
      "Robust data transformation pipelines with dbt, AWS Glue, and Airflow. Clean, tested, documented transformations your analysts can trust.",
  },
  {
    icon: "📊",
    title: "BI & Dashboard Delivery",
    description:
      "End-to-end from raw data to insight: Metabase, Looker, Power BI, or custom React dashboards wired to your warehouse.",
  },
  {
    icon: "🤖",
    title: "ML Feature Engineering",
    description:
      "Feature stores and data prep pipelines that feed your models with clean, versioned, reproducible feature sets.",
  },
  {
    icon: "🔒",
    title: "Data Governance & Quality",
    description:
      "Data contracts, lineage tracking, and automated quality checks so bad data never reaches production dashboards.",
  },
];

const projects = [
  {
    tag: "E-Commerce · Real-Time Analytics",
    title: "50M-Event Streaming Pipeline",
    description:
      "An e-commerce platform was flying blind — pageviews, cart actions, and purchases landed in the warehouse 24 hours late. We rebuilt their ingestion layer using Kafka + Apache Spark Structured Streaming, cutting data latency from 24 hours to under 90 seconds.",
    outcomes: [
      "50M+ events processed per day at peak",
      "Data latency reduced from 24 hours to <90 seconds",
      "Clickstream, cart, and revenue data unified in one schema",
      "Self-healing pipeline with dead-letter queue and alerting",
    ],
    stack: ["Apache Kafka", "Spark Streaming", "Snowflake", "Airflow", "AWS S3"],
    metric: "24h → 90s latency",
  },
  {
    tag: "Manufacturing · Data Warehouse",
    title: "Legacy SQL Server to BigQuery Migration",
    description:
      "A manufacturing firm ran 40+ reports off a 10-year-old SQL Server. Queries took 20+ minutes and analysts had duplicated logic across hundreds of stored procedures. We migrated to BigQuery with a dbt model layer — consolidating logic, adding tests, and cutting query times dramatically.",
    outcomes: [
      "Full migration of 12TB of historical data to BigQuery",
      "Query runtimes cut from 20+ minutes to under 90 seconds",
      "dbt model layer with 100% test coverage on critical metrics",
      "Rollback capability maintained throughout migration",
    ],
    stack: ["BigQuery", "dbt", "Python", "Cloud Composer", "Looker Studio"],
    metric: "80% faster queries",
  },
  {
    tag: "Insurance · Data Consolidation",
    title: "Multi-Source ETL & Reporting Hub",
    description:
      "An insurance agency pulled data from five disconnected systems — a policy management platform, a CRM, a claims tool, a payment processor, and spreadsheets. Analysts spent 3 days per month stitching it together manually. We built a unified ETL pipeline and Metabase dashboard layer that produces the same reports overnight.",
    outcomes: [
      "5 source systems consolidated into a single Redshift warehouse",
      "Monthly reporting time reduced from 3 days to under 2 hours",
      "Real-time KPI dashboards for agency principals",
      "Historical data preserved back to 2018",
    ],
    stack: ["AWS Glue", "Redshift", "Python", "Metabase", "REST APIs"],
    metric: "3 days → 2 hours reporting",
  },
  {
    tag: "Fintech · ML Infrastructure",
    title: "Fraud Detection Feature Store",
    description:
      "A fintech startup had a promising fraud detection model but inconsistent training data — features computed differently in notebooks vs. production. We built a feature store with versioning, backfill capabilities, and automated freshness checks that the DS team could trust for both training and inference.",
    outcomes: [
      "Unified feature definitions across training and production",
      "Feature freshness monitoring with Slack alerting",
      "3-year historical backfill for model retraining",
      "Model accuracy improved 14% after consistent feature delivery",
    ],
    stack: ["Feast", "dbt", "Airflow", "PostgreSQL", "Python", "AWS S3"],
    metric: "+14% model accuracy",
  },
];

const techStack = [
  "Apache Kafka", "Apache Spark", "Apache Airflow", "dbt",
  "Snowflake", "BigQuery", "AWS Redshift", "AWS Glue",
  "Python", "SQL", "AWS S3", "PostgreSQL",
  "Metabase", "Looker", "Power BI", "Docker",
];

export default function DataEngineeringPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-teal-600" />
              Data Engineering
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Data pipelines that
              <br />
              <span className="text-gradient">actually work in prod</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
              From raw event streams to reliable analytics warehouses — we build
              the data infrastructure your business decisions depend on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-teal-500/20"
              >
                Discuss Your Data Stack →
              </Link>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
              >
                See Our Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              What We Deliver
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              The full data engineering stack
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white rounded-2xl border border-slate-200 p-7 hover:border-teal-200 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-4">{cap.icon}</div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center mb-8">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-xs font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
              Recent Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Real pipelines, real outcomes
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Every engagement starts with understanding your data sources,
              business questions, and team constraints — then we build for your
              specific situation.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`rounded-3xl border border-slate-200 overflow-hidden ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left */}
                  <div className="p-8 lg:p-12">
                    <div className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-4">
                      {project.tag}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-5">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Metric badge */}
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-50 border border-teal-100">
                      <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                        Key Result:
                      </span>
                      <span className="text-sm font-semibold text-teal-800">
                        {project.metric}
                      </span>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-slate-200 space-y-6">
                    {/* Outcomes */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                        Outcomes
                      </h4>
                      <ul className="space-y-2.5">
                        {project.outcomes.map((outcome, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-sm text-slate-600"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              className="flex-shrink-0 mt-0.5 text-teal-500"
                            >
                              <path
                                d="M3 8l3.5 3.5L13 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                        Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
