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
};

export default function SitemapPageLayout({ children }) {
  return children;
}
