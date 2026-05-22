"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiCloud,
  HiBolt,
  HiShieldCheck,
  HiArrowPath,
  HiCog6Tooth,
  HiCircleStack,
  HiChartBarSquare,
  HiCodeBracket,
  HiGlobeAlt,
  HiServer,
  HiRocketLaunch,
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

const FEATURES = [
  {
    icon: HiBolt,
    title: "Serverless-First Architecture",
    desc: "AWS Lambda and API Gateway for compute that scales to zero when idle and to millions of requests under load — with no servers to provision, patch, or manage. Pay only for what you use, with sub-millisecond cold-start optimization built in.",
  },
  {
    icon: HiCog6Tooth,
    title: "Microservices with API Gateway",
    desc: "Domain-driven microservice decomposition with a managed API gateway handling authentication, rate limiting, request routing, and canary deployments. Service mesh for inter-service communication with circuit-breaking and retries.",
  },
  {
    icon: HiArrowPath,
    title: "Auto-Scaling (0 → 10,000 req/s)",
    desc: "Horizontal pod autoscaling on ECS or EKS with predictive scaling policies informed by historical traffic patterns. Load testing to 10× peak capacity validates that auto-scaling kicks in before users notice degradation.",
  },
  {
    icon: HiGlobeAlt,
    title: "CDN & Edge Caching",
    desc: "CloudFront distribution with cache behaviour rules per route type. Static assets cached at 200+ edge locations. API responses cached at the edge for read-heavy endpoints. Cache invalidation strategies aligned to your data freshness requirements.",
  },
  {
    icon: HiShieldCheck,
    title: "Multi-Region Disaster Recovery",
    desc: "Active-passive or active-active multi-region architecture with automated failover. RDS Multi-AZ with read replicas in secondary regions. S3 cross-region replication for durable object storage. RTO under 15 minutes for all critical services.",
  },
  {
    icon: HiRocketLaunch,
    title: "CI/CD with Zero-Downtime Deploys",
    desc: "GitHub Actions pipelines with blue/green or canary deployment strategies eliminate deployment downtime. Automated rollback triggers on elevated error rate within the first 5 minutes post-deployment. Feature flags decouple deployment from release.",
  },
  {
    icon: HiChartBarSquare,
    title: "Observability (Datadog / New Relic)",
    desc: "Distributed tracing, custom metrics, and structured logging piped to Datadog or New Relic. SLO dashboards, anomaly detection alerts, and on-call runbooks ensure your team is notified before users report an issue.",
  },
  {
    icon: HiCodeBracket,
    title: "Infrastructure as Code (Terraform)",
    desc: "Every cloud resource defined in Terraform — VPCs, security groups, Lambda functions, RDS clusters, and CloudFront distributions. Version-controlled infrastructure enables reproducible environments and safe change management.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Architecture Design & Cloud Strategy",
    desc: "We assess your current architecture, define the target-state cloud design, select the right AWS services for each workload, and produce an Architecture Decision Record before any provisioning begins.",
  },
  {
    step: "02",
    title: "Infrastructure Setup (Terraform)",
    desc: "VPC, networking, security groups, IAM roles, and base AWS services provisioned via Terraform. Development, staging, and production environments created with identical configurations from day one.",
  },
  {
    step: "03",
    title: "Service Development & Containerisation",
    desc: "Microservices developed in parallel sprints. Each service containerised with Docker, published to ECR, and deployed to ECS or EKS with health checks, resource limits, and autoscaling policies.",
  },
  {
    step: "04",
    title: "Load Testing & Resilience Validation",
    desc: "k6 or Gatling load tests simulate 10× projected peak traffic. Chaos engineering exercises validate auto-scaling, circuit-breaker, and failover behaviour before the first user sees the product.",
  },
  {
    step: "05",
    title: "Production Launch & SRE Handover",
    desc: "Go-live with Datadog dashboards active, PagerDuty alerts configured, and SLOs defined. SRE runbooks handed to your operations team with 30-day hypercare support included.",
  },
];

const TECH = [
  "AWS Lambda", "AWS ECS / EKS", "CloudFront", "RDS Multi-AZ",
  "Terraform", "Docker", "Kubernetes", "GitHub Actions",
  "Datadog", "New Relic", "Redis (ElastiCache)", "S3",
  "API Gateway", "ArgoCD", "Prometheus", "Grafana",
];

const RESULTS = [
  {
    metric: "70%",
    label: "Infrastructure Cost Reduction",
    desc: "Serverless architecture and right-sized auto-scaling eliminate over-provisioned fixed capacity that traditional deployments require.",
  },
  {
    metric: "Auto-scales",
    label: "to 10× Traffic Spikes",
    desc: "Predictive and reactive scaling policies absorb sudden traffic spikes without pre-warming or manual intervention.",
  },
  {
    metric: "Sub-100ms",
    label: "Global Latency",
    desc: "CloudFront edge caching and multi-region read replicas deliver fast response times to users worldwide.",
  },
];

const RELATED = [
  {
    href: "/saas-development/multi-tenant-saas-development",
    title: "Multi-Tenant SaaS Development",
    desc: "Layer enterprise-grade tenant isolation and data partitioning on top of your cloud-native infrastructure.",
  },
  {
    href: "/ai-development",
    title: "AI Development",
    desc: "Deploy LLM inference, RAG pipelines, and ML model serving on the same cloud-native infrastructure.",
  },
  {
    href: "/erp-development",
    title: "ERP Development",
    desc: "Build mission-critical ERP systems on cloud-native infrastructure with the reliability your operations depend on.",
  },
];

const FAQS = [
  {
    q: "When should we choose serverless over containers for our SaaS?",
    a: "Serverless (Lambda) is ideal for event-driven workloads, APIs with variable traffic, and batch jobs where cost efficiency at low utilisation matters. Containers (ECS/EKS) are better for long-running processes, stateful services, GPU workloads, or services with strict cold-start latency requirements. Most SaaS products benefit from a hybrid: serverless for APIs and event processors, containers for background workers and ML inference.",
  },
  {
    q: "How do you achieve zero-downtime deployments?",
    a: "We implement blue/green deployments on ECS where a complete copy of the new version is spun up before any traffic is shifted. Load balancer target group weights are shifted gradually — 10% → 50% → 100% — with automated rollback triggered if the error rate exceeds a configurable threshold within the first five minutes. Feature flags allow code to be deployed to 100% of infrastructure while features are released to 0% of users.",
  },
  {
    q: "What does multi-region disaster recovery actually look like?",
    a: "For most SaaS products, we implement active-passive multi-region: primary region handles all traffic, secondary region maintains a warm standby with an RDS read replica promoted to primary on failover. Route 53 health checks trigger automatic DNS failover when the primary region fails. RTO is typically under 15 minutes. For financial or healthcare SaaS requiring near-zero RTO, we architect active-active with DynamoDB Global Tables or Aurora Global Database.",
  },
  {
    q: "How do you keep cloud costs predictable as we scale?",
    a: "We implement a FinOps discipline from day one: AWS Cost Anomaly Detection alerts for unexpected spend increases, Reserved Instance and Savings Plan commitments for baseline compute, auto-scaling policies that scale down aggressively during off-peak hours, and monthly cloud cost reviews with recommendations. Our architecture reviews have reduced client cloud bills by 40–70% compared to their previous lift-and-shift deployments.",
  },
  {
    q: "Can you migrate an existing monolithic application to cloud-native architecture?",
    a: "Yes. We use the Strangler Fig pattern to incrementally extract capabilities from a monolith into independent services without a risky big-bang rewrite. Typically we start with the highest-traffic or most independently deployable capability, extract it to a Lambda or container service, route traffic through an API gateway, and iterate. The monolith shrinks gradually while production continues running on the existing system throughout the migration.",
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

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

/* ═══════════════════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════════════════ */

export default function CloudSaaSSolutionsPage() {
  return (
    <>
      <Script
        id="cloud-saas-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative bg-slate-900 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav {...fadeUp(0)} className="flex items-center gap-2 text-slate-400 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <HiArrowRight className="w-3 h-3" />
            <Link href="/saas-development" className="hover:text-white transition-colors">SaaS Development</Link>
            <HiArrowRight className="w-3 h-3" />
            <span className="text-slate-300">Cloud SaaS Solutions</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fadeUp(0)}>
                <span className="inline-flex items-center gap-2 bg-teal-900/60 border border-teal-700/40 rounded-full px-4 py-1.5 text-teal-300 text-xs font-semibold uppercase tracking-widest mb-6">
                  <HiCloud className="w-3.5 h-3.5" />
                  Cloud-Native SaaS
                </span>
              </motion.div>
              <motion.h1 {...fadeUp(1)} className="text-4xl sm:text-5xl font-bold font-heading text-white leading-tight mb-6">
                <span className="text-gradient">Cloud SaaS Solutions</span> Development
              </motion.h1>
              <motion.p {...fadeUp(2)} className="text-lg text-slate-400 mb-8 leading-relaxed">
                Build cloud-native SaaS on AWS/GCP — serverless architecture, microservices, auto-scaling
                infrastructure, CDN delivery, multi-region failover, and enterprise-grade observability.
                Infrastructure that scales with your ambition.
              </motion.p>
              <motion.div {...fadeUp(3)} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-all hover:shadow-2xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
                >
                  Schedule Architecture Review
                  <HiArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all"
                >
                  Contact Our Team
                </Link>
              </motion.div>
            </div>

            {/* Right panel — infrastructure status */}
            <motion.div {...fadeUp(2)} className="hidden lg:block">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl">
                <p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-1">All Systems</p>
                <p className="text-white font-bold text-xl mb-5">Infrastructure Status</p>
                <div className="space-y-3">
                  {[
                    { label: "API Gateway", status: "✓ 99.99%", color: "text-teal-400" },
                    { label: "Lambda Functions", status: "✓ 2.4M/day", color: "text-teal-400" },
                    { label: "CloudFront CDN", status: "✓ 48ms avg", color: "text-teal-400" },
                    { label: "RDS Multi-AZ", status: "✓ 0 incidents", color: "text-teal-400" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center py-2 border-b border-slate-700/60 last:border-0">
                      <span className="text-slate-400 text-sm">{row.label}</span>
                      <span className={`text-sm font-bold ${row.color}`}>{row.status}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-teal-900/40 border border-teal-700/30 rounded-xl p-3 flex items-center justify-between">
                  <span className="text-slate-300 text-sm">Overall uptime</span>
                  <span className="text-teal-400 font-bold">99.99%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">The Problem</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">
              Why Monolithic Apps Fail at Scale
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Monolithic SaaS applications work at 100 users. They become a liability at 10,000.
              Here is what teams discover when their architecture cannot keep up.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "A single component failure brings down the entire application — there are no blast-radius boundaries between services",
              "Scaling the application means scaling the entire monolith even when only one endpoint is under load, wasting 80% of compute spend",
              "Deployment requires a full application restart — even a typo fix causes 3–5 minutes of downtime",
              "Database bottlenecks emerge when a single RDS instance handles OLTP queries and reporting analytics simultaneously",
              "Teams step on each other's changes — a bug in the billing service breaks the user authentication module in the same codebase",
              "Infrastructure is impossible to replicate consistently across environments, causing production-only bugs that cannot be reproduced locally",
            ].map((pain, i) => (
              <motion.div key={i} {...fadeUp(i)} className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
                <span className="mt-0.5 text-red-400 font-bold text-lg leading-none flex-shrink-0">✕</span>
                <p className="text-slate-700 text-sm leading-relaxed">{pain}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Solution</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-4">
              Cloud-Native Capabilities We Deliver
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  {...fadeUp(i)}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-teal-200 transition-all"
                >
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <h3 className="text-slate-900 font-bold mb-2 text-sm">{feat.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Delivery Process</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              From Architecture to Production
            </h2>
          </motion.div>
          <div className="space-y-6">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                {...fadeUp(i)}
                className="flex gap-6 items-start bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <span className="text-4xl font-black text-teal-100 leading-none flex-shrink-0 select-none">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8">Technologies We Deploy</h2>
          </motion.div>
          <motion.div {...fadeUp(1)} className="flex flex-wrap justify-center gap-3">
            {TECH.map((t) => (
              <span key={t} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 text-sm font-medium">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Results</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              Infrastructure Performance Delivered
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RESULTS.map((r, i) => (
              <motion.div
                key={r.label}
                {...fadeUp(i)}
                className="bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-100 rounded-2xl p-8 text-center"
              >
                <p className="text-5xl font-black text-gradient mb-2">{r.metric}</p>
                <p className="text-slate-900 font-bold text-lg mb-2">{r.label}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingBanner />

      {/* ── RELATED SERVICES ────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Related Services</p>
            <h2 className="text-2xl font-bold font-heading text-slate-900">Build on Cloud-Native Foundations</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {RELATED.map((rel, i) => (
              <motion.div key={rel.href} {...fadeUp(i)}>
                <Link
                  href={rel.href}
                  className="block bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md hover:border-teal-200 transition-all group"
                >
                  <h3 className="text-slate-900 font-bold mb-2 group-hover:text-teal-600 transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3">{rel.desc}</p>
                  <span className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium">
                    Learn more <HiArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-12">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl font-bold font-heading text-slate-900">
              Cloud SaaS Architecture Questions
            </h2>
          </motion.div>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp(i)}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <h3 className="text-slate-900 font-bold mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
      <Footer />
      <FloatingBookingButton />
    </>
  );
}
