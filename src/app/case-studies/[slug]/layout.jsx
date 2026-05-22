import { caseStudies } from "../data";

const BASE_URL = "https://infonza.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);

  if (!study) {
    return {
      title: "Case Study Not Found | Infonza",
      description: "This case study does not exist.",
      robots: { index: false, follow: false },
    };
  }

  const url = `${BASE_URL}/case-studies/${study.id}`;
  const image = study.image
    ? `${BASE_URL}${study.image}`
    : `${BASE_URL}/infonza-logo.jpg`;

  return {
    title: `${study.title} — ${study.client} | Infonza Case Study`,
    description: study.summary,
    keywords: [
      study.tag,
      "case study",
      "software development case study",
      "enterprise software project",
      "Infonza",
    ].filter(Boolean),
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title: `${study.title} | Infonza Case Study`,
      description: study.summary,
      url,
      type: "article",
      siteName: "Infonza Innovations",
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: study.title }],
      authors: ["https://infonza.com/about"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | Infonza Case Study`,
      description: study.summary,
      images: [image],
    },
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.id }));
}

export default function CaseStudySlugLayout({ children }) {
  return children;
}
