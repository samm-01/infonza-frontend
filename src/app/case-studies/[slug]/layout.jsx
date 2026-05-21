import { caseStudies } from "../data";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.id === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      description: "This case study does not exist.",
    };
  }

  return {
    title: `${study.title} — ${study.client}`,
    description: study.summary,
    openGraph: {
      title: `${study.title} | Infonza Case Study`,
      description: study.summary,
      url: `https://infonza.com/case-studies/${study.id}`,
    },
    alternates: {
      canonical: `https://infonza.com/case-studies/${study.id}`,
    },
  };
}

export default function CaseStudySlugLayout({ children }) {
  return children;
}
