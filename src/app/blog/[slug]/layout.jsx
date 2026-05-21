import { posts } from "../posts";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This blog post does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Infonza Blog`,
      description: post.excerpt,
      url: `https://infonza.com/blog/${post.slug}`,
      type: "article",
    },
    alternates: {
      canonical: `https://infonza.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostLayout({ children }) {
  return children;
}
