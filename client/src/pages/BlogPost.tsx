/*
 * DESIGN: Granite Editorial — Blog Post
 * Clean, readable article layout. Narrow content column (max 680px).
 * Serif headings, sans body. Generous line-height and spacing.
 * RESPONSIVE: Full-width on mobile with comfortable reading margins.
 */
import { useParams, Link, Redirect } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getArticleBySlug, formatDate } from "@/lib/data";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  useScrollReveal();

  if (!article) {
    return <Redirect to="/blog" />;
  }

  // Simple markdown-like rendering: split by paragraphs, handle ## headings
  const renderContent = (content: string) => {
    const blocks = content.split("\n\n").filter((b) => b.trim());
    return blocks.map((block, i) => {
      const trimmed = block.trim();
      if (trimmed.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-serif text-lg sm:text-xl lg:text-2xl text-[oklch(0.22_0.015_65)] mt-8 sm:mt-12 mb-3 sm:mb-4"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      }
      if (trimmed.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="font-serif text-base sm:text-lg lg:text-xl text-[oklch(0.25_0.015_65)] mt-6 sm:mt-10 mb-2 sm:mb-3"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      }
      // Handle blockquotes
      if (trimmed.startsWith("> ")) {
        return (
          <blockquote
            key={i}
            className="border-l-2 border-[oklch(0.72_0.12_65/0.4)] pl-4 sm:pl-6 my-6 sm:my-8"
          >
            <p className="text-[0.9375rem] sm:text-[1.0625rem] leading-[1.85] text-[oklch(0.4_0.01_65)] italic">
              {trimmed.replace(/^> /, "")}
            </p>
          </blockquote>
        );
      }
      return (
        <p
          key={i}
          className="text-[0.9375rem] sm:text-[1.0625rem] leading-[1.85] text-[oklch(0.35_0.01_65)] mb-5 sm:mb-6"
        >
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[oklch(0.985_0.005_80)]">
      <Navbar />

      <article className="pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32">
        <div className="max-w-[680px] mx-auto px-5 sm:px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[0.8125rem] sm:text-sm font-sans text-[oklch(0.55_0.01_65)] hover:text-[oklch(0.72_0.12_65)] transition-colors mb-8 sm:mb-10 fade-up"
          >
            <span>&#8592;</span>
            Back to Writing
          </Link>

          {/* Header */}
          <header className="mb-8 sm:mb-12">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 fade-up">
              <span className="tag-pill">{article.category}</span>
              <span className="text-[0.6875rem] sm:text-xs font-mono text-[oklch(0.6_0.01_65)]">
                {article.readTime}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-[2.75rem] leading-[1.15] text-[oklch(0.18_0.015_65)] fade-up fade-up-delay-1">
              {article.title}
            </h1>

            <div className="mt-4 sm:mt-6 flex items-center gap-4 fade-up fade-up-delay-2">
              <time
                dateTime={article.date}
                className="text-[0.8125rem] sm:text-sm font-mono text-[oklch(0.55_0.01_65)]"
              >
                {formatDate(article.date)}
              </time>
            </div>
          </header>

          {/* Strata line */}
          <div className="strata-line mb-8 sm:mb-10 fade-up fade-up-delay-2" />

          {/* Content */}
          <div className="fade-up fade-up-delay-3">
            {renderContent(article.content)}
          </div>

          {/* End strata */}
          <div className="strata-line mt-12 sm:mt-16 mb-8 sm:mb-10" />

          {/* Footer CTA */}
          <div className="text-center">
            <p className="text-[0.8125rem] sm:text-sm text-[oklch(0.5_0.01_65)] mb-4">
              Interested in working together?
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-3 bg-[oklch(0.22_0.015_65)] text-[oklch(0.97_0.005_80)] text-sm font-sans font-medium tracking-wide rounded-sm hover:bg-[oklch(0.3_0.015_65)] transition-colors duration-300"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
