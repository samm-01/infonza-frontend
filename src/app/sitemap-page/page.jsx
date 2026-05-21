import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const sections = [
  {
    label: "Main Pages",
    icon: "🏠",
    links: [
      { href: "/", title: "Home", desc: "Overview of Infonza Innovations" },
      { href: "/about", title: "About Us", desc: "Our story, values, and team" },
      { href: "/contact", title: "Contact", desc: "Book a free strategy call" },
      { href: "/careers", title: "Careers", desc: "Join our engineering team" },
      { href: "/portfolio", title: "Portfolio", desc: "Projects we've shipped" },
    ],
  },
  {
    label: "Services",
    icon: "⚙️",
    links: [
      { href: "/services", title: "All Services", desc: "Full list of what we build" },
      { href: "/data-engineering", title: "Data Engineering", desc: "Pipelines, warehouses & analytics" },
      { href: "/staff-augmentation", title: "IT Staff Augmentation", desc: "Hire dedicated remote developers" },
      { href: "/cloud-solutions", title: "Cloud Solutions", desc: "AWS, Azure & GCP cloud services" },
      { href: "/software-development", title: "Software Development", desc: "Custom software build process" },
      { href: "/designing", title: "UI/UX Design", desc: "Product & interface design" },
      { href: "/services#web-development", title: "Web & App Development", desc: "Custom web apps and mobile-ready products" },
      { href: "/services#saas", title: "SaaS Development", desc: "End-to-end SaaS product builds" },
      { href: "/services#crm-erp", title: "CRM & ERP Systems", desc: "Business operations software" },
      { href: "/services#api-automation", title: "API & Automation", desc: "Integrations and workflow automation" },
    ],
  },
  {
    label: "Case Studies",
    icon: "💼",
    links: [
      { href: "/case-studies", title: "All Case Studies", desc: "Deep dives into client outcomes" },
      { href: "/case-studies/glovebox", title: "GloveBox", desc: "Insurance onboarding automation" },
      { href: "/case-studies/readybuild", title: "ReadyBuild", desc: "Construction ERP platform" },
      { href: "/case-studies/dnh", title: "D&H Distributing", desc: "Distribution & supply chain" },
      { href: "/case-studies/builderwing", title: "BuilderWing", desc: "Real estate SaaS platform" },
    ],
  },
  {
    label: "Blog",
    icon: "✍️",
    links: [
      { href: "/blog", title: "All Posts", desc: "Engineering, product, and business insights" },
      { href: "/blog/how-we-cut-insurance-onboarding-from-3-hours-to-45-minutes", title: "Insurance Onboarding Automation", desc: "How we cut onboarding from 3 hrs to 45 min" },
      { href: "/blog/why-most-saas-mvps-fail-and-how-to-avoid-it", title: "Why Most SaaS MVPs Fail", desc: "Common mistakes and how to avoid them" },
      { href: "/blog/choosing-the-right-stack-for-your-crm-project", title: "Choosing the Right CRM Stack", desc: "React vs Laravel vs low-code" },
      { href: "/blog/api-integrations-that-actually-hold-up-in-production", title: "Production-Ready API Integrations", desc: "Rate limits, retries, webhooks & monitoring" },
      { href: "/blog/what-us-startups-get-wrong-about-offshore-development", title: "Offshore Development Mistakes", desc: "What US startups get wrong" },
      { href: "/blog/erp-implementation-lessons-from-a-construction-company", title: "ERP Implementation Lessons", desc: "What actually matters in ERP projects" },
    ],
  },
  {
    label: "Legal",
    icon: "📄",
    links: [
      { href: "/privacy-policy", title: "Privacy Policy", desc: "How we handle your data" },
      { href: "/terms-of-service", title: "Terms of Service", desc: "Terms governing use of our services" },
    ],
  },
];

const totalPages = sections.reduce((sum, s) => sum + s.links.length, 0);

export default function SitemapPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-teal-600" />
              Sitemap
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Everything on
              <br />
              <span className="text-gradient">Infonza.com</span>
            </h1>
            <p className="text-lg text-slate-500 mb-3">
              A full index of every page on this site — {sections.length} sections &middot; {totalPages} pages.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sections.map((section) => (
              <div
                key={section.label}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                {/* Section header */}
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{section.icon}</span>
                    <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest">
                      {section.label}
                    </h2>
                  </div>
                  <span className="text-xs font-semibold text-teal-600 bg-teal-50 border border-teal-100 rounded-full px-2.5 py-0.5">
                    {section.links.length}
                  </span>
                </div>

                {/* Links */}
                <ul className="divide-y divide-slate-50">
                  {section.links.map((link) => (
                    <li key={link.href} className="group">
                      <Link
                        href={link.href}
                        className="flex items-start justify-between gap-4 px-6 py-4 hover:bg-slate-50 transition-colors"
                      >
                        <div>
                          <p className="text-sm font-semibold text-slate-800 group-hover:text-teal-600 transition-colors">
                            {link.title}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            {link.desc}
                          </p>
                        </div>
                        <span className="text-slate-300 group-hover:text-teal-500 transition-colors flex-shrink-0 mt-0.5 text-sm">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* XML sitemap note */}
          <div className="mt-10 flex items-center gap-3 text-sm text-slate-400">
            <span>Looking for the XML sitemap for search engines?</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              View sitemap.xml →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
