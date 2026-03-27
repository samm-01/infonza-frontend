import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Infonza Innovations — how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://infonza.com/privacy-policy",
  },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you voluntarily provide when you contact us, fill out our inquiry form, or book a strategy call. This may include your name, email address, company name, and project details.",
      "We may also collect basic usage data (pages visited, time on site) through analytics tools to improve our website experience. This data is aggregated and not linked to individual identities.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To respond to your inquiries and project requests.",
      "To schedule and conduct strategy calls or project discovery sessions.",
      "To send relevant follow-up communications related to your project inquiry.",
      "To improve our website and services based on aggregate usage patterns.",
      "We do not sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    title: "3. Data Storage & Security",
    content: [
      "Information submitted through our contact form is processed securely. We use industry-standard security measures to protect your data from unauthorized access, disclosure, or modification.",
      "We retain your information only as long as necessary to fulfill the purposes described in this policy or as required by applicable law.",
    ],
  },
  {
    title: "4. Third-Party Services",
    content: [
      "Our website may use the following third-party services, each governed by their own privacy policies:",
      "Google Forms — for inquiry collection",
      "LinkedIn — for professional networking and company presence",
      "Analytics providers — for aggregate website traffic analysis",
      "We encourage you to review the privacy policies of any third-party services you interact with.",
    ],
  },
  {
    title: "5. Cookies",
    content: [
      "Our website may use cookies to improve your browsing experience. These are small text files stored on your device. You can configure your browser to refuse cookies, though some features of the site may not function correctly as a result.",
      "We do not use cookies for advertising or cross-site tracking purposes.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, contact us at support@infonza.com.",
      "You may opt out of any marketing communications at any time by replying to any email with 'unsubscribe' or by contacting us directly.",
    ],
  },
  {
    title: "7. Children's Privacy",
    content: [
      "Our services are not directed toward individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      "If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:",
      "Email: support@infonza.com",
      "Website: infonza.com/contact",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm">
              Effective date:{" "}
              <span className="font-medium text-slate-700">January 1, 2025</span>
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              This Privacy Policy describes how Infonza Innovations
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              collects, uses, and protects your information when you visit our
              website or engage with our services.
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
              href="/terms-of-service"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Terms of Service →
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
