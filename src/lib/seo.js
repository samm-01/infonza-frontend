const BASE_URL = "https://infonza.com";

/**
 * Creates a complete Next.js metadata object.
 * Guarantees OG, Twitter, canonical, and robots are populated on every page.
 */
export function createMetadata({
  title,
  description,
  keywords = [],
  path,
  ogImage = "/infonza-logo.jpg",
  ogType = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
  authors,
}) {
  const url = `${BASE_URL}${path}`;
  const resolvedImage = ogImage.startsWith("http") ? ogImage : `${BASE_URL}${ogImage}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      siteName: "Infonza Innovations",
      locale: "en_US",
      images: [{ url: resolvedImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
    },
  };
}

/**
 * Service JSON-LD schema for service landing pages.
 */
export function createServiceSchema({ name, description, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: "Infonza Innovations",
      url: BASE_URL,
      logo: `${BASE_URL}/infonza-logo.jpg`,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
    ],
    serviceType: name,
    ...(image ? { image: `${BASE_URL}${image}` } : {}),
  };
}

/**
 * FAQ JSON-LD schema for service pages.
 * faqs: [{ question: string, answer: string }]
 */
export function createFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

/**
 * Breadcrumb JSON-LD schema for nested pages.
 * items: [{ name: "Home", url: "/" }, { name: "AI Development", url: "/ai-development" }]
 */
export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, url }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${BASE_URL}${url}`,
    })),
  };
}

/**
 * Article JSON-LD schema for blog posts and case studies.
 */
export function createArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
  authorName = "Infonza Innovations",
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    image: image ? `${BASE_URL}${image}` : `${BASE_URL}/infonza-logo.jpg`,
    author: {
      "@type": "Organization",
      name: authorName,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Infonza Innovations",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/infonza-logo.jpg`,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${url}`,
    },
  };
}

/**
 * ProfessionalService schema for location-based landing pages.
 */
export function createLocalServiceSchema({ name, description, url, city, state, country = "United States" }) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Infonza Innovations",
    description,
    url: `${BASE_URL}${url}`,
    serviceType: name,
    areaServed: city
      ? {
          "@type": "City",
          name: city,
          ...(state ? { containedInPlace: { "@type": "State", name: state } } : {}),
        }
      : { "@type": "Country", name: country },
    provider: {
      "@type": "Organization",
      name: "Infonza Innovations",
      url: BASE_URL,
    },
  };
}

export { BASE_URL };
