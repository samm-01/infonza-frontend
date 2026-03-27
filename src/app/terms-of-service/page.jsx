import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Infonza Innovations — the terms governing use of our website and services.",
  alternates: {
    canonical: "https://infonza.com/terms-of-service",
  },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using the Infonza Innovations website (infonza.com) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.",
    ],
  },
  {
    title: "2. Services Description",
    content: [
      "Infonza Innovations provides custom software development services including web application development, SaaS product development, CRM/ERP system design, API integrations, and workflow automation.",
      "Specific terms, deliverables, timelines, and pricing for any development engagement are governed by a separate project agreement or statement of work (SOW) entered into between Infonza Innovations and the client.",
    ],
  },
  {
    title: "3. Website Use",
    content: [
      "You may use our website for lawful purposes only. You agree not to:",
      "Use the site in any way that violates applicable local, national, or international laws or regulations.",
      "Transmit unsolicited advertising, spam, or promotional material.",
      "Attempt to gain unauthorized access to any part of our systems.",
      "Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: [
      "All content on this website — including text, graphics, logos, and code — is the property of Infonza Innovations and is protected by applicable intellectual property laws.",
      "For client projects: upon full payment of all invoices, ownership of custom-developed code and deliverables transfers to the client as specified in the project agreement. Third-party libraries and open-source components remain subject to their respective licenses.",
    ],
  },
  {
    title: "5. Confidentiality",
    content: [
      "We treat all client project details, business information, and technical specifications as confidential. We do not disclose client information to third parties without explicit written consent, except as required by law.",
      "Clients are also expected to keep any proprietary methodologies, pricing structures, or non-public information about Infonza Innovations confidential.",
    ],
  },
  {
    title: "6. Payment Terms",
    content: [
      "Payment terms for development projects are established in individual project agreements. Unless otherwise agreed in writing, invoices are due within the period specified in the SOW.",
      "Infonza Innovations reserves the right to pause work on any project where invoices remain overdue beyond the agreed payment period.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "Infonza Innovations shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or services, even if we have been advised of the possibility of such damages.",
      "Our total liability for any claim arising from our services shall not exceed the total fees paid by the client for the specific service giving rise to the claim in the three months preceding the claim.",
    ],
  },
  {
    title: "8. Warranties & Disclaimers",
    content: [
      "Our website is provided 'as is' without warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses.",
      "For development services, we warrant that deliverables will conform to the agreed specifications for a period of 60 days post-launch, subject to the terms of the applicable project agreement.",
    ],
  },
  {
    title: "9. Governing Law",
    content: [
      "These Terms of Service shall be governed by and construed in accordance with applicable law. Any disputes shall first be attempted to be resolved through good-faith negotiation between the parties.",
    ],
  },
  {
    title: "10. Changes to Terms",
    content: [
      "We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of the website or services after changes constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "11. Contact",
    content: [
      "If you have questions about these Terms of Service, please contact us:",
      "Email: support@infonza.com",
      "Website: infonza.com/contact",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-widest mb-5">
              <span className="w-8 h-px bg-teal-600" />
              Legal
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-500 text-sm">
              Effective date:{" "}
              <span className="font-medium text-slate-700">January 1, 2025</span>
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
              and use of the Infonza Innovations website and services. Please
              read them carefully before engaging with us.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="border-t border-slate-100 pt-8">
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-slate-600 leading-relaxed text-sm">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer links */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Privacy Policy →
            </Link>
            <Link
              href="/contact"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
