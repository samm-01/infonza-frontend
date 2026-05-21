export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Infonza Innovations. Learn how we collect, use, and protect your personal data when you use our website or engage our services.",
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: "Privacy Policy | Infonza Innovations",
    description:
      "Privacy policy for Infonza Innovations. Learn how we collect, use, and protect your personal data.",
    url: "https://infonza.com/privacy-policy",
  },
  alternates: {
    canonical: "https://infonza.com/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
