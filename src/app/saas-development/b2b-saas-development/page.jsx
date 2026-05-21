"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import {
  HiCheckCircle,
  HiArrowRight,
  HiChevronDown,
  HiShieldCheck,
  HiLockClosed,
  HiUsers,
  HiChartBar,
  HiBuildingOffice2,
  HiCurrencyDollar,
  HiDocumentText,
  HiCog6Tooth,
  HiGlobeAlt,
  HiBolt,
  HiServer,
  HiCodeBracket,
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

const FAQS = [
  {
    q: "What makes B2B SaaS different from consumer SaaS to build?",
    a: "B2B SaaS must support organizational hierarchies (companies, teams, users), enterprise authentication (SSO/SAML), granular RBAC, audit logs for compliance, enterprise billing (invoicing, NET-30, purchase orders), and contractual SLAs. These are not optional add-ons — enterprise buyers require them before signing. We design these from sprint one.",
  },
  {
    q: "How do you implement SSO and SAML for enterprise customers?",
    a: "We integrate SAML 2.0 via providers like Auth0 or implement it directly. Each enterprise tenant configures their IdP (Okta, Azure AD, Google Workspace) in a self-serve SSO settings page. We support Just-In-Time provisioning (auto-create user accounts on first login), attribute mapping for roles, and SP-initiated and IdP-initiated flows.",
  },
  {
    q: "What does RBAC look like in a production B2B SaaS?",
    a: "We implement a permission model with roles (Owner, Admin, Member, Viewer, custom roles) and resource-level permissions (e.g., can_edit_deal, can_view_billing, can_manage_users). Permissions are enforced at both the API level (middleware) and the UI level (conditional rendering). Admins manage roles in a self-serve settings panel.",
  },
  {
    q: "How do you handle enterprise billing — invoicing, NET-30, and purchase orders?",
    a: "We integrate Stripe with custom invoice generation for NET-30 terms. Enterprise tenants receive invoices via email with PDF download, configurable payment methods (ACH, wire, credit card), and PO number fields for procurement compliance. We integrate with Stripe's revenue recognition for ASC 606 compliance.",
  },
  {
    q: "What does a SOC2-ready B2B SaaS require technically?",
    a: "SOC2 Type II requires evidence across 5 trust principles. Technically this means: immutable audit logs on all sensitive operations, encrypted secrets management (AWS Secrets Manager), automated vulnerability scanning in CI/CD, access review tooling, incident response procedures, and employee background check documentation. We build the technical controls; your auditor reviews the evidence.",
  },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const FEATURES = [
  {
    icon: HiLockClosed,
    title: "SSO / SAML 2.0",
    desc: "Enterprise single sign-on with SAML 2.0 and OIDC. Per-tenant IdP configuration (Okta, Azure AD, Google), JIT provisioning, and SP/IdP-initiated flows.",
  },
  {
    icon: HiUsers,
    title: "Role-Based Access Control",
    desc: "Granular RBAC with custom role definitions, resource-level permissions, permission inheritance, and a self-serve role management UI for admin users.",
  },
  {
    icon: HiDocumentText,
    title: "Immutable Audit Logs",
    desc: "Every sensitive operation logged with user, timestamp, IP, resource, and before/after values. Exportable as CSV/JSON for compliance audits with retention policies.",
  },
  {
    icon: HiChartBar,
    title: "Usage Analytics Dashboard",
    desc: "Per-tenant usage dashboards for account health scoring, feature adoption tracking, seat utilization, and API consumption — inputs for CSM workflows and churn prediction.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Enterprise Billing",
    desc: "Invoiced billing with NET-30/60 terms, PO number fields, ACH/wire payment support, custom contract pricing, and Stripe's revenue recognition for ASC 606.",
  },
  {
    icon: HiShieldCheck,
    title: "SOC2 & GDPR Controls",
    desc: "Technical controls required for SOC2 Type II certification: encrypted secrets, automated vuln scanning, incident response, data residency, and DPA generation.",
  },
  {
    icon: HiBuildingOffice2,
    title: "Org Hierarchy Management",
    desc: "Company > Team > User hierarchy with delegated admin at each level, department-level access policies, and cross-org collaboration controls.",
  },
  {
    icon: HiCog6Tooth,
    title: "Enterprise Integrations",
    desc: "SCIM 2.0 for automated user provisioning/deprovisioning, webhook system for enterprise automation, Salesforce and HubSpot CRM sync, and Slack notifications.",
  },
];

const PROCESS = [
  { step: "01", title: "Enterprise Requirements Audit", desc: "Review your target enterprise buyer&apos;s security questionnaire, procurement requirements, and compliance checklist to scope technical requirements." },
  { step: "02", title: "Architecture & Auth Design", desc: "Design the multi-tenant org model, RBAC schema, SSO integration pattern, and audit log architecture before development begins." },
  { step: "03", title: "Core Enterprise Feature Build", desc: "SSO/SAML, RBAC, audit logs, usage analytics, and enterprise billing shipped in milestone-based sprints with working demos every 2 weeks." },
  { step: "04", title: "Compliance & Security Review", desc: "SOC2 control implementation, penetration testing, GDPR compliance review, and security questionnaire documentation for your first enterprise deal." },
  { step: "05", title: "Enterprise Launch & CSM Tools", desc: "Production deployment with CSM dashboard, account health scoring, and runbooks for enterprise onboarding and escalation workflows." },
];

const TECH = ["Next.js", "Node.js", "PostgreSQL", "Auth0", "SAML 2.0", "SCIM 2.0", "Stripe", "AWS", "Terraform", "Datadog"];

const RELATED = [
  { href: "/saas-development/multi-tenant-saas-development", label: "Multi-Tenant Architecture", desc: "The tenant isolation foundation that enterprise RBAC and SSO sits on top of." },
  { href: "/saas-development/subscription-platform-development", label: "Subscription Platform", desc: "Enterprise billing, invoicing, and NET-30 payment terms for B2B SaaS." },
  { href: "/erp-development", label: "ERP Development", desc: "When your B2B SaaS grows into a full enterprise resource planning suite." },
];

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-4">
      <span className="w-6 h-px bg-teal-600" />
      {children}
    </div>
  );
}

export default function B2BSaaSPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Script id="b2b-saas-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8">
            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/saas-development" className="hover:text-teal-600 transition-colors">SaaS Development</Link>
            <span>/</span>
            <span className="text-slate-600">B2B SaaS Development</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                B2B SaaS Development Company
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
                B2B SaaS{" "}
                <span className="text-gradient">Development Services</span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Build enterprise B2B SaaS products that pass security reviews and close enterprise deals — SSO/SAML, granular RBAC, immutable audit logs, usage analytics, enterprise billing, and SOC2/GDPR compliance built in from day one.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold hover:opacity-90 hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-0.5 transition-all">
                  Schedule Free Consultation <HiArrowRight className="w-4 h-4" />
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-teal-400 hover:bg-teal-50 hover:-translate-y-0.5 transition-all">
                  Talk to a B2B SaaS Expert
                </Link>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { value: "6 months", label: "Avg time to market" },
                  { value: "40%", label: "Lower churn via enterprise features" },
                  { value: "$2M+", label: "ARR for first customer" },
                ].map((m) => (
                  <div key={m.label} className="flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-xl px-4 py-2">
                    <span className="text-lg font-bold text-teal-700">{m.value}</span>
                    <span className="text-xs text-slate-500">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enterprise Dashboard */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="hidden lg:block">
              <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-700">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-slate-400">B2B SaaS Admin</p>
                    <p className="text-white font-bold">Enterprise Overview</p>
                  </div>
                  <span className="text-xs text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full font-semibold">SOC2 Ready</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Enterprise Tenants", value: "47", color: "text-teal-400" },
                    { label: "SSO Enabled", value: "38 / 47", color: "text-blue-400" },
                    { label: "Audit Log Events", value: "2.4M", color: "text-violet-400" },
                    { label: "Avg Churn", value: "0.9%", color: "text-emerald-400" },
                  ].map((m) => (
                    <div key={m.label} className="bg-slate-800 rounded-xl p-3">
                      <p className="text-slate-400 text-xs">{m.label}</p>
                      <p className={`font-bold text-sm mt-1 ${m.color}`}>{m.value}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    { company: "Global Insurance Co", users: 840, sso: true, plan: "Enterprise" },
                    { company: "BuildCorp Ltd", users: 342, sso: true, plan: "Enterprise" },
                    { company: "TechVentures Inc", users: 124, sso: false, plan: "Business" },
                  ].map((t) => (
                    <div key={t.company} className="flex items-center gap-3 bg-slate-800 rounded-xl px-3 py-2.5">
                      <div className="flex-1">
                        <p className="text-white text-xs font-semibold">{t.company}</p>
                        <p className="text-slate-400 text-xs">{t.users} users · {t.plan}</p>
                      </div>
                      {t.sso && <span className="text-xs text-teal-400 bg-teal-500/20 px-2 py-0.5 rounded-full font-medium">SSO</span>}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Enterprise Features</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Built for enterprise deals from day one</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }} className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg hover:border-teal-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-6 h-px bg-teal-400" />
              Build Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How we build enterprise-grade B2B SaaS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
                <span className="text-teal-400 font-bold text-lg">{p.step}</span>
                <h3 className="font-bold text-white text-sm mt-2 mb-2">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionLabel>Tech Stack</SectionLabel>
            <h2 className="text-2xl font-bold text-slate-900">Enterprise-proven technology choices</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="px-4 py-2 rounded-xl border border-teal-200 bg-teal-50 text-teal-800 text-sm font-semibold">
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ─────────────────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>Results</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What B2B SaaS clients achieve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { metric: "6 months", label: "Average Time to Market", desc: "Enterprise-grade B2B SaaS in production with all compliance features and a paying customer within 6 months." },
              { metric: "40%", label: "Lower Churn via Enterprise Features", desc: "SSO, RBAC, and audit logs make it harder for customers to leave — sticky enterprise features reduce logo churn by 40%." },
              { metric: "$2M+", label: "ARR for First Customer", desc: "First enterprise client signed within 90 days of launch, generating over $2M ARR in the first contract cycle." },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg hover:border-teal-200 transition-all">
                <div className="text-4xl font-bold text-gradient mb-2">{r.metric}</div>
                <div className="font-bold text-slate-900 mb-2">{r.label}</div>
                <p className="text-sm text-slate-500">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingBanner heading="Ready to build your enterprise B2B SaaS?" subheading="Get a free enterprise requirements review. We&apos;ll identify which enterprise features are blocking your first major deal and how fast we can ship them." cta="Book Enterprise Review" />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel>Related Services</SectionLabel>
            <h2 className="text-2xl font-bold text-slate-900">Commonly paired with B2B SaaS development</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {RELATED.map((r) => (
              <Link key={r.href} href={r.href} className="group block bg-white border border-slate-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-lg transition-all">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">{r.label}</h3>
                <p className="text-sm text-slate-500">{r.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-teal-600 text-xs font-semibold">
                  Learn more <HiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-bold text-slate-900">B2B SaaS development questions answered</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-semibold text-slate-900 text-sm leading-snug">{faq.q}</span>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0">
                    <HiChevronDown className={`w-5 h-5 ${openFaq === i ? "text-teal-600" : "text-slate-400"}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden">
                      <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-200 pt-4">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection
        heading="Let&apos;s Build Your Enterprise B2B SaaS Product"
        subheading="Free 30-minute consultation with our B2B SaaS experts. We&apos;ll review your compliance requirements, enterprise features roadmap, and time-to-market plan."
        primaryCTA="Schedule Free Consultation"
        secondaryCTA="Talk to a B2B SaaS Expert"
      />

      <Footer />
      <FloatingBookingButton label="Book Call" />
    </>
  );
}
