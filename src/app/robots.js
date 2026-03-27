export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://infonza.com/sitemap.xml",
    host: "https://infonza.com",
  };
}
