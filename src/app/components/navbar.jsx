"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HiCpuChip,
  HiShieldCheck,
  HiCircleStack,
  HiCloud,
  HiDocumentText,
  HiChevronDown,
  HiCalendarDays,
  HiArrowRight,
  HiXMark,
  HiBars3,
  /* Staff Augmentation mega menu */
  HiServerStack,
  HiSparkles,
  HiCodeBracket,
  HiUserGroup,
  HiComputerDesktop,
  HiDevicePhoneMobile,
  HiWrenchScrewdriver,
  /* Industries mega menu */
  HiAcademicCap,
  HiBanknotes,
  HiShoppingCart,
  HiHome,
  HiHeart,
  HiTruck,
  HiGlobeAlt,
  HiFilm,
  HiBeaker,
  /* Resources dropdown */
  HiBriefcase,
  HiNewspaper,
  /* AI Solutions mega menu */
  HiChatBubbleLeftRight,
  HiMicrophone,
  HiChartBar,
  HiMagnifyingGlass,
  HiEnvelope,
  HiCog6Tooth,
  HiRectangleStack,
  HiBolt,
  HiRocketLaunch,
} from "react-icons/hi2";

const BOOKING_URL = "https://calendar.app.google/tCXYTm21YtV7AkXFA";

/* ── AI Solutions top-level nav data ────────────────────────────────────── */
const AI_SOLUTIONS_LINKS = [
  { href: "/ai-solutions/ai-agents-development",       label: "AI Agents Development",           icon: HiCpuChip,              desc: "Autonomous agents that plan & execute tasks" },
  { href: "/ai-development/ai-chatbot-development",    label: "AI Chatbot Development",           icon: HiChatBubbleLeftRight,  desc: "GPT-4 chatbots with RAG & omnichannel deploy" },
  { href: "/ai-solutions/ai-voice-agents",             label: "AI Voice Agents",                  icon: HiMicrophone,           desc: "Voice AI for inbound & outbound calls" },
  { href: "/ai-solutions/customer-support-automation", label: "AI Customer Support",              icon: HiUserGroup,            desc: "Resolve 70%+ tickets automatically" },
  { href: "/ai-solutions/sales-automation",            label: "AI Sales Automation",              icon: HiChartBar,             desc: "Prospecting, outreach & lead qualification" },
  { href: "/ai-solutions/lead-generation-automation",  label: "AI Lead Generation",               icon: HiMagnifyingGlass,      desc: "Scrape, qualify & sequence leads on autopilot" },
  { href: "/ai-solutions/document-processing",         label: "AI Document Processing",           icon: HiDocumentText,         desc: "OCR, PDF extraction & document intelligence" },
  { href: "/ai-solutions/knowledge-base-systems",      label: "AI Knowledge Base",                icon: HiCircleStack,          desc: "RAG enterprise search from your internal docs" },
  { href: "/ai-solutions/email-automation",            label: "AI Email Automation",              icon: HiEnvelope,             desc: "Smart replies, classification & follow-ups" },
  { href: "/ai-solutions/business-process-automation", label: "AI Business Process Automation",  icon: HiCog6Tooth,            desc: "Automate operations, HR & finance workflows" },
  { href: "/ai-solutions/data-extraction-solutions",   label: "AI Data Extraction",               icon: HiRectangleStack,       desc: "Structured pipelines from any source" },
  { href: "/ai-solutions/appointment-booking-agents",  label: "AI Appointment Booking",           icon: HiCalendarDays,         desc: "24/7 scheduling, reminders & rescheduling" },
  { href: "/ai-solutions/crm-automation",              label: "AI CRM Automation",                icon: HiBolt,                 desc: "Auto-update HubSpot, Salesforce & Zoho" },
  { href: "/ai-solutions/ai-copilot-development",      label: "AI Copilot Development",           icon: HiCodeBracket,          desc: "Internal & product-embedded AI assistants" },
  { href: "/ai-development/generative-ai-development", label: "Generative AI Development",        icon: HiSparkles,             desc: "Custom GenAI apps & content generation" },
  { href: "/ai-development/rag-development-services",  label: "RAG Development Services",         icon: HiCircleStack,          desc: "Ground AI in your proprietary data" },
  { href: "/ai-development/llm-development-company",   label: "LLM Development",                  icon: HiRocketLaunch,         desc: "Fine-tuned & custom large language models" },
  { href: "/ai-development/openai-integration-services", label: "OpenAI Integration Services",   icon: HiBolt,                 desc: "GPT-4, DALL-E & Whisper API integration" },
  { href: "/ai-development/ai-workflow-automation",    label: "AI Workflow Automation",           icon: HiCog6Tooth,            desc: "n8n, Make & Zapier AI workflow pipelines" },
];

/* ── Service pillar clusters (Services mega menu) ───────────────────────── */
const PILLARS = [
  {
    href: "/ai-development",
    label: "AI Development",
    shortDesc: "ChatGPT, LLMs, RAG & workflow AI",
    icon: HiCpuChip,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    sub: [
      { href: "/ai-development/ai-chatbot-development",     label: "AI Chatbot Development" },
      { href: "/ai-development/generative-ai-development",  label: "Generative AI Development" },
      { href: "/ai-development/rag-development-services",   label: "RAG Development" },
      { href: "/ai-development/llm-development-company",    label: "LLM Development" },
    ],
  },
  {
    href: "/insurance-software-development",
    label: "Insurance Software",
    shortDesc: "Portals, automation & CRM for insurers",
    icon: HiShieldCheck,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    sub: [
      { href: "/insurance-software-development/insurance-crm-development", label: "Insurance CRM" },
      { href: "/insurance-software-development/policy-management-software", label: "Policy Management" },
      { href: "/insurance-software-development/insurance-agent-portal", label: "Agent Portal" },
      { href: "/insurance-software-development/insurance-automation-solutions", label: "Automation Solutions" },
    ],
  },
  {
    href: "/erp-development",
    label: "ERP Development",
    shortDesc: "Custom ERP for manufacturing & logistics",
    icon: HiCircleStack,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    sub: [
      { href: "/erp-development/manufacturing-erp-development", label: "Manufacturing ERP" },
      { href: "/erp-development/logistics-erp-software", label: "Logistics ERP" },
      { href: "/erp-development/inventory-management-system", label: "Inventory Management" },
      { href: "/erp-development/custom-erp-solutions", label: "Custom ERP Solutions" },
    ],
  },
  {
    href: "/saas-development",
    label: "SaaS Development",
    shortDesc: "Multi-tenant cloud SaaS products",
    icon: HiCloud,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    sub: [
      { href: "/saas-development/multi-tenant-saas-development", label: "Multi-Tenant SaaS" },
      { href: "/saas-development/b2b-saas-development", label: "B2B SaaS Development" },
      { href: "/saas-development/crm-saas-development", label: "CRM SaaS" },
      { href: "/saas-development/cloud-saas-solutions", label: "Cloud SaaS Solutions" },
    ],
  },
  {
    href: "/document-management-system",
    label: "Document Management",
    shortDesc: "Enterprise DMS & workflow automation",
    icon: HiDocumentText,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    sub: [
      { href: "/document-management-system/enterprise-document-management", label: "Enterprise DMS" },
      { href: "/document-management-system/document-workflow-automation", label: "Workflow Automation" },
      { href: "/document-management-system/legal-document-management", label: "Legal DMS" },
      { href: "/document-management-system/cloud-document-storage", label: "Cloud Storage" },
    ],
  },
];

/* ── Staff Augmentation mega menu data ──────────────────────────────────── */

/** Left panel — role-based hire cards, one per dedicated landing page */
const HIRE_ROLES = [
  {
    href: "/staff-augmentation/hire-react-developers",
    label: "Hire React Developers",
    desc: "Senior React & Next.js engineers",
    icon: HiCpuChip,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    href: "/staff-augmentation/hire-nodejs-developers",
    label: "Hire Node.js Developers",
    desc: "Node.js, Express & REST API experts",
    icon: HiServerStack,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    href: "/staff-augmentation/hire-ai-engineers",
    label: "Hire AI Engineers",
    desc: "LLM, ML & generative AI specialists",
    icon: HiSparkles,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    href: "/staff-augmentation/hire-devops-engineers",
    label: "Hire DevOps Engineers",
    desc: "CI/CD, Kubernetes & cloud infrastructure",
    icon: HiCloud,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    href: "/staff-augmentation/hire-mern-stack-developers",
    label: "Hire MERN Stack Developers",
    desc: "Mongo, Express, React & Node full stack",
    icon: HiCodeBracket,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    href: "/staff-augmentation/dedicated-development-team",
    label: "Dedicated Dev Team",
    desc: "Fully managed remote development pod",
    icon: HiUserGroup,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

/** Right panel — technologies grouped by category */
const TECH_GROUPS = [
  {
    label: "Frontend",
    icon: HiComputerDesktop,
    items: [
      { href: "/staff-augmentation/hire-react-developers",   label: "React.js" },
      { href: "/staff-augmentation/hire-nextjs-developers",  label: "Next.js" },
      { href: "/staff-augmentation/hire-vuejs-developers",   label: "Vue.js" },
      { href: "/staff-augmentation/hire-angular-developers", label: "Angular" },
    ],
  },
  {
    label: "Mobile",
    icon: HiDevicePhoneMobile,
    items: [
      { href: "/staff-augmentation/hire-react-native-developers", label: "React Native" },
      { href: "/staff-augmentation/hire-flutter-developers",      label: "Flutter" },
      { href: "/staff-augmentation/hire-ios-developers",          label: "iOS (Swift)" },
      { href: "/staff-augmentation/hire-android-developers",      label: "Android (Kotlin)" },
    ],
  },
  {
    label: "Backend",
    icon: HiServerStack,
    items: [
      { href: "/staff-augmentation/hire-nodejs-developers", label: "Node.js" },
      { href: "/staff-augmentation/hire-python-developers", label: "Python / Django" },
      { href: "/staff-augmentation/hire-php-developers",    label: "PHP / Laravel" },
      { href: "/staff-augmentation/hire-nodejs-developers", label: "Express.js" },
    ],
  },
  {
    label: "Others",
    icon: HiWrenchScrewdriver,
    items: [
      { href: "/staff-augmentation/hire-ai-engineers",          label: "AI / ML Engineers" },
      { href: "/staff-augmentation/hire-devops-engineers",      label: "DevOps Engineers" },
      { href: "/staff-augmentation/hire-mern-stack-developers", label: "MERN Stack Devs" },
      { href: "/staff-augmentation/dedicated-development-team", label: "Full Stack Teams" },
    ],
  },
];

/* ── Industries mega menu data ──────────────────────────────────────────── */
const INDUSTRIES = [
  {
    href: "/industries/education",
    label: "Education",
    desc: "EdTech platforms & LMS solutions",
    icon: HiAcademicCap,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    href: "/industries/food-beverage",
    label: "Food & Beverage",
    desc: "Ordering, inventory & delivery apps",
    icon: HiBeaker,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    href: "/industries/finance",
    label: "Finance",
    desc: "Fintech, banking & payment systems",
    icon: HiBanknotes,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    href: "/industries/retail-ecommerce",
    label: "Retail & eCommerce",
    desc: "Storefronts, POS & commerce platforms",
    icon: HiShoppingCart,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    href: "/industries/real-estate",
    label: "Real Estate",
    desc: "Property portals & CRM systems",
    icon: HiHome,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    href: "/industries/healthcare",
    label: "Healthcare",
    desc: "Patient portals, HMS & telemedicine",
    icon: HiHeart,
    iconBg: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    href: "/industries/transport-logistics",
    label: "Transport & Logistics",
    desc: "Fleet, tracking & supply chain tools",
    icon: HiTruck,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    href: "/industries/travel-hospitality",
    label: "Travel & Hospitality",
    desc: "Booking, CRS & guest experience apps",
    icon: HiGlobeAlt,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    href: "/industries/manufacturing",
    label: "Manufacturing",
    desc: "ERP, QMS & production management",
    icon: HiWrenchScrewdriver,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
  },
  {
    href: "/industries/media-entertainment",
    label: "Media & Entertainment",
    desc: "Streaming, CMS & content platforms",
    icon: HiFilm,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
];

/* ── Resources dropdown data ─────────────────────────────────────────────── */
const RESOURCES = [
  {
    href: "/case-studies",
    label: "Case Studies",
    desc: "Real client success stories & outcomes",
    icon: HiDocumentText,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    desc: "Products and systems we've delivered",
    icon: HiBriefcase,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    href: "/blog",
    label: "Blog",
    desc: "Insights, engineering guides & updates",
    icon: HiNewspaper,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
];

/** Plain nav links (no mega menu) */
const NAV_LINKS = [
  { href: "/about", label: "About" },
];

/* ── AI Solutions MegaMenu (desktop overlay) ────────────────────────────── */
function AISolutionsMegaMenu({ open, onClose }) {
  return (
    <div
      role="region"
      aria-label="AI Solutions menu"
      aria-hidden={!open}
      className={`absolute top-full left-0 mt-2 w-[780px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/12 z-50 overflow-hidden transition-all duration-200 ease-out origin-top-left ${
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-violet-50/60 to-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center flex-shrink-0">
            <HiSparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 leading-tight">AI Solutions</p>
            <p className="text-xs text-slate-400 mt-0.5">Agents, automation &amp; intelligent AI applications</p>
          </div>
        </div>
        <Link
          href="/ai-solutions"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 hover:text-teal-700 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg transition-colors"
        >
          View all <HiArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* 3-column grid of services */}
      <div className="p-4 grid grid-cols-3 gap-1">
        {AI_SOLUTIONS_LINKS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-50 group transition-all duration-150"
            >
              <span className="w-7 h-7 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-violet-100 transition-colors">
                <Icon className="w-3.5 h-3.5 text-violet-600" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-slate-800 group-hover:text-teal-600 leading-tight transition-colors duration-150">
                  {item.label}
                </p>
                <p className="text-[11px] text-slate-400 leading-snug mt-0.5 line-clamp-1">{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between px-5 py-3 bg-slate-50 border-t border-slate-100">
        <p className="text-xs text-slate-400">19 AI services · end-to-end delivery</p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          <HiCalendarDays className="w-3.5 h-3.5" />
          Book AI Consultation
        </a>
      </div>
    </div>
  );
}

/* ── Services MegaMenu (desktop overlay) ───────────────────────────────── */
function MegaMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/10 z-50 overflow-hidden">
      {/* Pillar grid — add/remove entries in PILLARS array above */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-slate-100">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div key={pillar.href} className="bg-white p-5 hover:bg-slate-50 transition-colors group">
              {/* Pillar header */}
              <Link href={pillar.href} onClick={onClose} className="flex items-start gap-3 mb-3">
                <span className={`flex-shrink-0 w-9 h-9 rounded-lg ${pillar.iconBg} flex items-center justify-center`}>
                  <Icon className={`w-4.5 h-4.5 ${pillar.iconColor}`} />
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-tight">
                    {pillar.label}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-snug">{pillar.shortDesc}</p>
                </div>
              </Link>
              {/* Subpage quick links */}
              <ul className="space-y-1 pl-12">
                {pillar.sub.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      onClick={onClose}
                      className="flex items-center gap-1 text-xs text-slate-500 hover:text-teal-600 transition-colors py-0.5"
                    >
                      <HiArrowRight className="w-2.5 h-2.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      {/* Footer strip */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-t border-slate-100">
        <Link
          href="/services"
          onClick={onClose}
          className="text-xs font-semibold text-slate-500 hover:text-teal-600 transition-colors"
        >
          View all services →
        </Link>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          <HiCalendarDays className="w-3.5 h-3.5" />
          Schedule Free Consultation
        </a>
      </div>
    </div>
  );
}

/* ── Staff Augmentation MegaMenu (desktop overlay) ─────────────────────── */
function StaffAugMegaMenu({ open, onClose }) {
  return (
    /*
     * Render-always + CSS transition approach:
     *   open  → opacity-100, translate-y-0, pointer-events-auto
     *   closed → opacity-0,  -translate-y-2, pointer-events-none
     * This gives a smooth fade+slide without mount/unmount flicker.
     */
    <div
      role="region"
      aria-label="Staff Augmentation menu"
      aria-hidden={!open}
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[860px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/10 z-50 overflow-hidden transition-all duration-200 ease-out origin-top ${
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="flex min-h-0">

        {/* ── Left panel: Hire Talent For ─────────────────────────────── */}
        <div className="w-[300px] flex-shrink-0 bg-slate-50/80 border-r border-slate-100 p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">
            Hire Talent For
          </p>
          <ul className="space-y-0.5">
            {HIRE_ROLES.map((role) => {
              const Icon = role.icon;
              return (
                <li key={role.href}>
                  <Link
                    href={role.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white hover:shadow-sm group transition-all duration-150"
                  >
                    <span
                      className={`w-8 h-8 rounded-lg ${role.iconBg} flex items-center justify-center flex-shrink-0 transition-transform duration-150 group-hover:scale-110`}
                    >
                      <Icon className={`w-4 h-4 ${role.iconColor}`} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 group-hover:text-teal-600 leading-tight transition-colors duration-150">
                        {role.label}
                      </p>
                      <p className="text-xs text-slate-400 leading-snug mt-0.5">{role.desc}</p>
                    </div>
                    <HiArrowRight className="w-3 h-3 text-slate-300 group-hover:text-teal-400 ml-auto flex-shrink-0 transition-all duration-150 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ── Right panel: Technologies ────────────────────────────────── */}
        <div className="flex-1 p-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 px-1">
            Technologies
          </p>
          {/* 2×2 grid of tech groups — add/remove groups in TECH_GROUPS above */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-5">
            {TECH_GROUPS.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.label}>
                  {/* Group header */}
                  <div className="flex items-center gap-1.5 mb-2 px-2">
                    <GroupIcon className="w-3.5 h-3.5 text-slate-400" />
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      {group.label}
                    </p>
                  </div>
                  {/* Tech items */}
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={`${group.label}-${item.label}`}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-slate-600 hover:text-teal-600 hover:bg-teal-50 transition-colors group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-teal-400 flex-shrink-0 transition-colors" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Footer strip ────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-t border-slate-100">
        <Link
          href="/staff-augmentation"
          onClick={onClose}
          className="text-xs font-semibold text-slate-500 hover:text-teal-600 transition-colors"
        >
          View all hiring options →
        </Link>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          <HiCalendarDays className="w-3.5 h-3.5" />
          Hire Dedicated Developers
        </a>
      </div>
    </div>
  );
}

/* ── Industries MegaMenu (desktop overlay) ──────────────────────────────── */
function IndustriesMegaMenu({ open, onClose }) {
  return (
    <div
      role="region"
      aria-label="Industries menu"
      aria-hidden={!open}
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/10 z-50 overflow-hidden transition-all duration-200 ease-out origin-top ${
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="p-5">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 px-1">
          Industries We Serve
        </p>
        {/* 2-column grid — 10 industries, 5 per column */}
        <div className="grid grid-cols-2 gap-1">
          {INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <Link
                key={industry.href}
                href={industry.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 group transition-all duration-150"
              >
                <span
                  className={`w-8 h-8 rounded-lg ${industry.iconBg} flex items-center justify-center flex-shrink-0 transition-transform duration-150 group-hover:scale-110`}
                >
                  <Icon className={`w-4 h-4 ${industry.iconColor}`} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-teal-600 leading-tight transition-colors duration-150">
                    {industry.label}
                  </p>
                  <p className="text-xs text-slate-400 leading-snug mt-0.5">{industry.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer strip */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-t border-slate-100">
        <span className="text-xs text-slate-400">
          Software solutions tailored to your industry
        </span>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-teal-600 to-blue-600 px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          <HiCalendarDays className="w-3.5 h-3.5" />
          Discuss Your Industry
        </a>
      </div>
    </div>
  );
}

/* ── Resources Dropdown (desktop overlay) ───────────────────────────────── */
function ResourcesDropdown({ open, onClose }) {
  return (
    <div
      role="region"
      aria-label="Resources menu"
      aria-hidden={!open}
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[280px] bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/10 z-50 overflow-hidden transition-all duration-200 ease-out origin-top ${
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="p-3">
        <ul className="space-y-0.5">
          {RESOURCES.map((res) => {
            const Icon = res.icon;
            return (
              <li key={res.href}>
                <Link
                  href={res.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 group transition-all duration-150"
                >
                  <span
                    className={`w-8 h-8 rounded-lg ${res.iconBg} flex items-center justify-center flex-shrink-0 transition-transform duration-150 group-hover:scale-110`}
                  >
                    <Icon className={`w-4 h-4 ${res.iconColor}`} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-teal-600 leading-tight transition-colors duration-150">
                      {res.label}
                    </p>
                    <p className="text-xs text-slate-400 leading-snug mt-0.5">{res.desc}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ── Navbar ─────────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop dropdown state
  const [aiSolutionsOpen, setAISolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [staffAugOpen, setStaffAugOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Mobile accordion state
  const [mobileAISolutionsOpen, setMobileAISolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileStaffAugOpen, setMobileStaffAugOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const pathname = usePathname();
  const isDarkPage = pathname === "/";

  // Refs for click-outside detection
  const aiSolutionsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const staffAugDropdownRef = useRef(null);
  const industriesDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);

  /* scroll → sticky shadow */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* click outside → close whichever dropdown is open */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (aiSolutionsDropdownRef.current && !aiSolutionsDropdownRef.current.contains(e.target)) {
        setAISolutionsOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (staffAugDropdownRef.current && !staffAugDropdownRef.current.contains(e.target)) {
        setStaffAugOpen(false);
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(e.target)) {
        setIndustriesOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* route change → close everything */
  useEffect(() => {
    setAISolutionsOpen(false);
    setServicesOpen(false);
    setStaffAugOpen(false);
    setIndustriesOpen(false);
    setResourcesOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const isTransparent = isDarkPage && !scrolled;

  const isAISolutionsActive =
    pathname === "/ai-solutions" || pathname.startsWith("/ai-solutions/");

  const isServicesActive = PILLARS.some(
    (p) => pathname === p.href || pathname.startsWith(p.href + "/")
  );
  const isStaffAugActive =
    pathname === "/staff-augmentation" || pathname.startsWith("/staff-augmentation/");
  const isIndustriesActive = pathname.startsWith("/industries");
  const isResourcesActive =
    pathname === "/case-studies" ||
    pathname.startsWith("/case-studies/") ||
    pathname === "/portfolio" ||
    pathname.startsWith("/portfolio/") ||
    pathname === "/blog" ||
    pathname.startsWith("/blog/");

  /** Shared button classes for desktop mega-menu triggers */
  const triggerClass = (active) =>
    `flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      active
        ? isTransparent
          ? "text-white bg-white/10"
          : "text-teal-600 bg-teal-50"
        : isTransparent
        ? "text-slate-200 hover:text-white hover:bg-white/10"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
    }`;

  /** Shared classes for plain desktop nav links */
  const navLinkClass = (active) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      active
        ? isTransparent
          ? "text-white bg-white/10"
          : "text-teal-600 bg-teal-50"
        : isTransparent
        ? "text-slate-200 hover:text-white hover:bg-white/10"
        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
    }`;

  return (
    <header
      className={`fixed top-[41px] left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isDarkPage
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className={`transition-all duration-300 rounded-xl ${isTransparent ? "bg-white/95 px-3 py-1.5" : ""}`}>
              <Image
                src="/infonza-logo-transparent.png"
                alt="Infonza Innovations"
                width={130}
                height={44}
                className="h-9 w-auto"
                priority
              />
            </div>
          </Link>

          {/* ── Desktop nav ─────────────────────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">

            {/* Services mega menu trigger */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => {
                  setServicesOpen((v) => !v);
                  setAISolutionsOpen(false);
                  setStaffAugOpen(false);
                  setIndustriesOpen(false);
                  setResourcesOpen(false);
                }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={triggerClass(isServicesActive)}
              >
                Services
                <HiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <MegaMenu open={servicesOpen} onClose={() => setServicesOpen(false)} />
            </div>

            {/* AI Solutions mega menu trigger */}
            <div className="relative" ref={aiSolutionsDropdownRef}>
              <button
                onClick={() => {
                  setAISolutionsOpen((v) => !v);
                  setServicesOpen(false);
                  setStaffAugOpen(false);
                  setIndustriesOpen(false);
                  setResourcesOpen(false);
                }}
                aria-expanded={aiSolutionsOpen}
                aria-haspopup="true"
                className={triggerClass(isAISolutionsActive)}
              >
                AI Solutions
                <HiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${aiSolutionsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AISolutionsMegaMenu open={aiSolutionsOpen} onClose={() => setAISolutionsOpen(false)} />
            </div>

            {/* Staff Augmentation mega menu trigger */}
            <div className="relative" ref={staffAugDropdownRef}>
              <button
                onClick={() => {
                  setStaffAugOpen((v) => !v);
                  setServicesOpen(false);
                  setIndustriesOpen(false);
                  setResourcesOpen(false);
                }}
                aria-expanded={staffAugOpen}
                aria-haspopup="true"
                className={triggerClass(isStaffAugActive)}
              >
                Staff Augmentation
                <HiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${staffAugOpen ? "rotate-180" : ""}`}
                />
              </button>
              <StaffAugMegaMenu
                open={staffAugOpen}
                onClose={() => setStaffAugOpen(false)}
              />
            </div>

            {/* Industries mega menu trigger */}
            <div className="relative" ref={industriesDropdownRef}>
              <button
                onClick={() => {
                  setIndustriesOpen((v) => !v);
                  setServicesOpen(false);
                  setStaffAugOpen(false);
                  setResourcesOpen(false);
                }}
                aria-expanded={industriesOpen}
                aria-haspopup="true"
                className={triggerClass(isIndustriesActive)}
              >
                Industries
                <HiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <IndustriesMegaMenu
                open={industriesOpen}
                onClose={() => setIndustriesOpen(false)}
              />
            </div>

            {/* Resources dropdown trigger */}
            <div className="relative" ref={resourcesDropdownRef}>
              <button
                onClick={() => {
                  setResourcesOpen((v) => !v);
                  setServicesOpen(false);
                  setStaffAugOpen(false);
                  setIndustriesOpen(false);
                }}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
                className={triggerClass(isResourcesActive)}
              >
                Resources
                <HiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <ResourcesDropdown
                open={resourcesOpen}
                onClose={() => setResourcesOpen(false)}
              />
            </div>

            {/* Plain nav links (About) */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navLinkClass(pathname === link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop CTAs ─────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-px"
            >
              <HiCalendarDays className="w-4 h-4" />
              Book a Call
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent ? "text-white hover:bg-white/10" : "text-slate-600 hover:bg-slate-100"
            }`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">

            {/* Services accordion */}
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Services
              <HiChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 space-y-0.5">
                {PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <Link
                      key={pillar.href}
                      href={pillar.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                    >
                      <span className={`w-7 h-7 rounded-md ${pillar.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-3.5 h-3.5 ${pillar.iconColor}`} />
                      </span>
                      {pillar.label}
                    </Link>
                  );
                })}
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  View all services →
                </Link>
              </div>
            )}

            {/* AI Solutions accordion */}
            <button
              onClick={() => setMobileAISolutionsOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              AI Solutions
              <HiChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileAISolutionsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileAISolutionsOpen && (
              <div className="pl-3 space-y-0.5">
                {AI_SOLUTIONS_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                    >
                      <span className="w-7 h-7 rounded-md bg-violet-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-violet-600" />
                      </span>
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/ai-solutions"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  View all AI solutions →
                </Link>
              </div>
            )}

            {/* Staff Augmentation accordion */}
            <button
              onClick={() => setMobileStaffAugOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Staff Augmentation
              <HiChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileStaffAugOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileStaffAugOpen && (
              <div className="pl-3 space-y-0.5">
                {HIRE_ROLES.map((role) => {
                  const Icon = role.icon;
                  return (
                    <Link
                      key={role.href}
                      href={role.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                    >
                      <span className={`w-7 h-7 rounded-md ${role.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-3.5 h-3.5 ${role.iconColor}`} />
                      </span>
                      {role.label}
                    </Link>
                  );
                })}
                <Link
                  href="/staff-augmentation"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  View all hiring options →
                </Link>
              </div>
            )}

            {/* Industries accordion */}
            <button
              onClick={() => setMobileIndustriesOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Industries
              <HiChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileIndustriesOpen && (
              <div className="pl-3 space-y-0.5">
                {INDUSTRIES.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                    >
                      <span className={`w-7 h-7 rounded-md ${industry.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-3.5 h-3.5 ${industry.iconColor}`} />
                      </span>
                      {industry.label}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Resources accordion */}
            <button
              onClick={() => setMobileResourcesOpen((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Resources
              <HiChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileResourcesOpen && (
              <div className="pl-3 space-y-0.5">
                {RESOURCES.map((res) => {
                  const Icon = res.icon;
                  return (
                    <Link
                      key={res.href}
                      href={res.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                    >
                      <span className={`w-7 h-7 rounded-md ${res.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-3.5 h-3.5 ${res.iconColor}`} />
                      </span>
                      {res.label}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Plain nav links + Contact */}
            {[...NAV_LINKS, { href: "/contact", label: "Contact" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-teal-600 bg-teal-50"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-2">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold"
              >
                <HiCalendarDays className="w-4 h-4" />
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
