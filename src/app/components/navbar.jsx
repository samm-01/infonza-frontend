"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  HiCpuChip,
  HiShieldCheck,
  HiCircleStack,
  HiUsers,
  HiCloud,
  HiDocumentText,
  HiChevronDown,
  HiCalendarDays,
  HiArrowRight,
  HiXMark,
  HiBars3,
} from "react-icons/hi2";

const BOOKING_URL = "https://calendar.app.google/tCXYTm21YtV7AkXFA";

/* ── Six pillar clusters ─────────────────────────────────────────────────── */
const PILLARS = [
  {
    href: "/ai-development",
    label: "AI Development",
    shortDesc: "ChatGPT, LLMs, RAG & workflow AI",
    icon: HiCpuChip,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    sub: [
      { href: "/ai-development/ai-chatbot-development", label: "AI Chatbot Development" },
      { href: "/ai-development/generative-ai-development", label: "Generative AI Development" },
      { href: "/ai-development/rag-development-services", label: "RAG Development" },
      { href: "/ai-development/llm-development-company", label: "LLM Development" },
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
    href: "/staff-augmentation",
    label: "Staff Augmentation",
    shortDesc: "Hire dedicated remote developers",
    icon: HiUsers,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    sub: [
      { href: "/staff-augmentation/hire-react-developers", label: "Hire React Developers" },
      { href: "/staff-augmentation/hire-nodejs-developers", label: "Hire Node.js Developers" },
      { href: "/staff-augmentation/hire-ai-engineers", label: "Hire AI Engineers" },
      { href: "/staff-augmentation/dedicated-development-team", label: "Dedicated Dev Team" },
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

const NAV_LINKS = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

/* ── MegaMenu desktop overlay ───────────────────────────────────────────── */
function MegaMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[820px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/10 z-50 overflow-hidden">
      {/* Grid of 6 pillars */}
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

/* ── Navbar component ────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isDarkPage = pathname === "/";
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const isTransparent = isDarkPage && !scrolled;
  const isServicesActive = PILLARS.some(
    (p) => pathname === p.href || pathname.startsWith(p.href + "/")
  );

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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Services mega menu trigger */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isServicesActive
                    ? isTransparent
                      ? "text-white bg-white/10"
                      : "text-teal-600 bg-teal-50"
                    : isTransparent
                    ? "text-slate-200 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                Services
                <HiChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <MegaMenu open={servicesOpen} onClose={() => setServicesOpen(false)} />
            </div>

            {/* Regular nav links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? isTransparent
                      ? "text-white bg-white/10"
                      : "text-teal-600 bg-teal-50"
                    : isTransparent
                    ? "text-slate-200 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isTransparent ? "text-slate-300 hover:text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Contact
            </Link>
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

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-slate-600 hover:bg-slate-100"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <HiXMark className="w-6 h-6" />
              : <HiBars3 className="w-6 h-6" />
            }
          </button>
        </div>
      </div>

      {/* ── Mobile menu ─────────────────────────────────────────────────── */}
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
                    <div key={pillar.href}>
                      <Link
                        href={pillar.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-teal-600 transition-colors"
                      >
                        <span className={`w-7 h-7 rounded-md ${pillar.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-3.5 h-3.5 ${pillar.iconColor}`} />
                        </span>
                        {pillar.label}
                      </Link>
                    </div>
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

            {/* Regular links */}
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
