export const metadata = {
  title: "Sitemap",
  description: "A full index of all pages on Infonza.com.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://infonza.com/sitemap-page",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap",
    description: "",
    images: ["https://infonza.com/infonza-logo.jpg"],
  },
};

export default function SitemapPageLayout({ children }) {
  return children;
}
