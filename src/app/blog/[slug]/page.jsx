import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { posts, getPost } from "../posts";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://infonza.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    alternates: {
      canonical: `https://infonza.com/blog/${post.slug}`,
    },
  };
}

const categoryColors = {
  "Case Study": "bg-teal-50 text-teal-700 border-teal-100",
  Product: "bg-blue-50 text-blue-700 border-blue-100",
  Engineering: "bg-slate-100 text-slate-600 border-slate-200",
  Business: "bg-amber-50 text-amber-700 border-amber-100",
};

export default function BlogPost({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "Infonza Innovations" },
    publisher: {
      "@type": "Organization",
      name: "Infonza Innovations",
      url: "https://infonza.com",
    },
    url: `https://infonza.com/blog/${post.slug}`,
    datePublished: post.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <article className="pt-32 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors mb-10"
          >
            ← Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <span
              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-5 ${categoryColors[post.category]}`}
            >
              {post.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-400 pb-8 border-b border-slate-100">
              <span>Infonza Innovations</span>
              <span>·</span>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Body */}
          <div className="prose-custom">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-slate-900 mt-10 mb-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <p
                  key={i}
                  className="text-slate-600 leading-relaxed mb-5 text-[1.0625rem]"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              Working on something like this?
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              We help US-based startups and businesses build software that actually works.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Free Strategy Call →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
