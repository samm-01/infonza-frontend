import { posts } from "../posts";

const BASE_URL = "https://infonza.com";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Infonza Blog",
      description: "This blog post does not exist.",
      robots: { index: false, follow: false },
    };
  }

  const url = `${BASE_URL}/blog/${post.slug}`;
  const image = `${BASE_URL}/infonza-logo.jpg`;

  return {
    title: `${post.title} | Infonza Blog`,
    description: post.excerpt,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title: `${post.title} | Infonza Blog`,
      description: post.excerpt,
      url,
      type: "article",
      siteName: "Infonza Innovations",
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: ["https://infonza.com/about"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Infonza Blog`,
      description: post.excerpt,
      images: [image],
    },
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostLayout({ children }) {
  return children;
}
