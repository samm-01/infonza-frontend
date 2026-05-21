import { posts } from "./blog/posts";

const baseUrl = "https://infonza.com";

export default function sitemap() {
  const now = new Date();

  // Static pages
  const staticRoutes = [
    // Core — highest priority
    { url: baseUrl,                           changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/services`,             changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/case-studies`,         changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/staff-augmentation`,   changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/data-engineering`,     changeFrequency: "monthly", priority: 0.85 },

    // Individual case studies
    { url: `${baseUrl}/case-studies/glovebox`,    changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/case-studies/readybuild`,  changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/case-studies/dnh`,         changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/case-studies/builderwing`, changeFrequency: "yearly", priority: 0.8 },

    // Other service pages
    { url: `${baseUrl}/cloud-solutions`,      changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/software-development`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/designing`,            changeFrequency: "monthly", priority: 0.75 },

    // Company pages
    { url: `${baseUrl}/about`,     changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`,   changeFrequency: "yearly",  priority: 0.8 },
    { url: `${baseUrl}/portfolio`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/careers`,   changeFrequency: "monthly", priority: 0.6 },

    // Blog index — updated fortnightly, keep weekly for crawl signal
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },

    // Legal — low priority, rarely changes
    { url: `${baseUrl}/privacy-policy`,   changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Dynamic blog post URLs from posts.js
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.65,
  }));

  return [
    ...staticRoutes.map((route) => ({ ...route, lastModified: now })),
    ...blogRoutes,
  ];
}
