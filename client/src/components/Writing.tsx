/*
 * DESIGN: Granite Terminal — Writing Preview
 * Latest 4 articles in editorial list. Terminal-style date/category labels.
 * Teal hover accents. Premium/Free indicators for subscription readiness.
 * Tags displayed on each article card.
 */
import { Link } from "wouter";
import { articles, formatDate } from "@/lib/data";

export default function Writing() {
  const latestArticles = articles.slice(0, 4);

  return (
    <section id="writing" className="py-16 sm:py-24 lg:py-36 bg-[oklch(0.98_0.005_85)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="circuit-line mb-10 sm:mb-16 fade-up" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          {/* Left — section header (sticky on desktop) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="terminal-label mb-4 sm:mb-6 fade-up">// writing</p>
              <h2 className="fade-up fade-up-delay-1">
                Ideas on building{" "}
                <span className="gradient-text">what matters</span>.
              </h2>
              <p className="mt-4 sm:mt-6 text-[0.875rem] sm:text-[0.9375rem] leading-[1.75] text-[oklch(0.5_0.01_260)] fade-up fade-up-delay-2">
                Technology, strategy, health, and the products shaping how we
                live and work. New articles weekly.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-sm font-mono font-medium text-[oklch(0.65_0.12_190)] hover:text-[oklch(0.72_0.12_190)] transition-colors duration-300 fade-up fade-up-delay-3"
              >
                View all articles
                <span className="text-base">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Right — article list */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {latestArticles.map((article, i) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} group block py-6 sm:py-8 border-b border-[oklch(0.91_0.008_260)] first:pt-0 last:border-b-0 transition-colors duration-300`}
                >
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <time
                      dateTime={article.date}
                      className="text-[0.625rem] sm:text-[0.6875rem] font-mono text-[oklch(0.55_0.01_260)] tracking-wider"
                    >
                      {formatDate(article.date)}
                    </time>
                    <span className="w-px h-3 bg-[oklch(0.88_0.008_260)]" />
                    <span className="tag-pill !py-0 !px-2 !text-[0.5625rem]">
                      {article.category}
                    </span>
                    <span className="text-[0.625rem] sm:text-[0.6875rem] font-mono text-[oklch(0.6_0.01_260)]">
                      {article.readTime}
                    </span>
                    {article.featured && (
                      <span className="tag-premium">Featured</span>
                    )}
                  </div>

                  <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-[1.375rem] text-[oklch(0.18_0.01_260)] group-hover:text-[oklch(0.65_0.12_190)] transition-colors duration-300 leading-snug tracking-tight">
                    {article.title}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-[0.8125rem] sm:text-[0.875rem] leading-[1.7] text-[oklch(0.5_0.01_260)] line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  {article.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.5625rem] font-mono text-[oklch(0.55_0.01_260)] tracking-wider"
                        >
                          #{tag.toLowerCase().replace(/\s+/g, "-")}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
