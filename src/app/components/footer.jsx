import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";
import {
  HiCheckBadge,
  HiShieldCheck,
  HiGlobeAlt,
  HiBolt,
  HiLockClosed,
  HiClock,
  HiBuildingOffice2,
} from "react-icons/hi2";

const footerLinks = {
  services: [
    { href: "/services#web-development", label: "Web Development" },
    { href: "/services#saas", label: "SaaS Development" },
    { href: "/services#crm-erp", label: "CRM & ERP Systems" },
    { href: "/services#api-automation", label: "API & Automation" },
    { href: "/data-engineering", label: "Data Engineering" },
    { href: "/staff-augmentation", label: "IT Staff Augmentation" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
};

/* ─── Global Trust Strip ─────────────────────────────────────────────────── */
const TRUST_STRIP = [
  {
    icon: HiCheckBadge,
    label: "D-U-N-S® Registered",
    detail: "771974280",
  },
  {
    icon: HiClock,
    label: "12+ Years Experience",
    detail: "Since 2012",
  },
  {
    icon: HiGlobeAlt,
    label: "US & Global Clients",
    detail: "15+ Countries",
  },
  {
    icon: HiBolt,
    label: "Agile Delivery",
    detail: "Bi-weekly sprints",
  },
];

/* ─── Footer Trust Signals ───────────────────────────────────────────────── */
const FOOTER_TRUST = [
  {
    icon: HiCheckBadge,
    label: "D-U-N-S® Registered",
    detail: "771974280",
    color: "text-teal-400",
  },
  {
    icon: HiShieldCheck,
    label: "NDA Protected",
    detail: "Every engagement",
    color: "text-blue-400",
  },
  {
    icon: HiGlobeAlt,
    label: "Global Clients",
    detail: "US, UK, AU & more",
    color: "text-emerald-400",
  },
  {
    icon: HiBolt,
    label: "Agile Delivery",
    detail: "Sprint-based execution",
    color: "text-amber-400",
  },
  {
    icon: HiLockClosed,
    label: "Secure Development",
    detail: "OWASP-aligned practices",
    color: "text-violet-400",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">

      {/* ── Global Trust Strip ────────────────────────────────────────── */}
      <div className="bg-slate-800/60 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Label */}
          <p className="text-center text-[11px] font-semibold text-slate-400 uppercase tracking-[0.18em] mb-5">
            Trusted Technology Partner for Startups, Agencies &amp; Enterprises
          </p>

          {/* 4 trust items */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:divide-x sm:divide-slate-700/70">
            {TRUST_STRIP.map(({ icon: Icon, label, detail }, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 sm:px-8 first:pl-0 last:pr-0"
              >
                <div className="w-7 h-7 rounded-lg bg-teal-600/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-teal-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-200 leading-none">
                    {label}
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5 leading-none">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main footer content ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <div className="bg-white/95 rounded-xl px-3 py-1.5 inline-block">
                <Image
                  src="/infonza-logo-transparent.png"
                  alt="Infonza Innovations"
                  width={130}
                  height={44}
                  className="h-9 w-auto"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              We build software that powers business operations — from MVPs to
              enterprise ERP systems.
            </p>
            <p className="text-xs text-slate-500 mb-3">support@infonza.com</p>
            <div className="flex items-start gap-2 mb-5">
              <HiBuildingOffice2 className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-500 leading-snug">
                Chandigarh, India
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/infonza-innovations/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <FaLinkedinIn size={13} className="text-slate-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <FaFacebookF size={13} className="text-slate-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors"
              >
                <FaYoutube size={13} className="text-slate-300" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-5">
              Start a Project
            </h4>
            <p className="text-sm leading-relaxed mb-6">
              Have a project in mind? Let&apos;s talk about what you&apos;re
              building.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Free Call →
            </Link>

            {/* D-U-N-S callout in CTA column */}
            <div className="mt-6 flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <HiBuildingOffice2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-slate-200 leading-snug">
                  D-U-N-S® Verified Business
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5 font-mono tracking-wider">
                  771974280
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer Trust Signals ────────────────────────────────────── */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:gap-x-10">
            {FOOTER_TRUST.map(({ icon: Icon, label, detail, color }, i) => (
              <div key={i} className="flex items-center gap-2">
                <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xs font-semibold text-slate-300">
                    {label}
                  </span>
                  <span className="hidden sm:inline text-[10px] text-slate-600">
                    ·
                  </span>
                  <span className="hidden sm:inline text-[10px] text-slate-500">
                    {detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────────── */}
        <div className="py-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Infonza Innovations. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-slate-500 hover:text-slate-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-slate-500 hover:text-slate-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap-page"
              className="text-xs text-slate-500 hover:text-slate-400 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
