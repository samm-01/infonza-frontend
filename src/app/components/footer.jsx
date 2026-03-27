import Link from "next/link";
import Image from "next/image";
import { FaLinkedinIn, FaYoutube, FaFacebookF } from "react-icons/fa";

const footerLinks = {
  services: [
    { href: "/services#web-development", label: "Web Development" },
    { href: "/services#saas", label: "SaaS Development" },
    { href: "/services#crm-erp", label: "CRM & ERP Systems" },
    { href: "/services#api-automation", label: "API & Automation" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
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
            <p className="text-xs text-slate-500 mb-5">support@infonza.com</p>
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
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
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
