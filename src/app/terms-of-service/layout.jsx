export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Infonza Innovations. Read the terms governing use of our website and software development services.",
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: "Terms of Service | Infonza Innovations",
    description:
      "Terms of service for Infonza Innovations. Read the terms governing use of our website and services.",
    url: "https://infonza.com/terms-of-service",
  },
  alternates: {
    canonical: "https://infonza.com/terms-of-service",
  },
};

export default function TermsLayout({ children }) {
  return children;
}
