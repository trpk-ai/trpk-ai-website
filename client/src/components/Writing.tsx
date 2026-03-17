/*
 * DESIGN: Granite Terminal — Writing (THE core section)
 * Writing IS the product. This is the most prominent section after the hero.
 * Latest 4 articles in editorial list. Terminal-style date/category labels.
 * Teal hover accents. Tags on each card. Sticky sidebar header.
 */
import { Link } from "wouter";
import { articles, formatDate } from "@/lib/data";

export default function Writing() {
  const latestArticles = articles.slice(0, 4);

  return (
    <section id="writing" className="py-16 sm:py-24 lg:py-36 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="rh-divider mb-10 sm:mb-16 fade-up" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          {/* Left — section header (sticky on desktop) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="tag-neon mb-4 sm:mb-6 fade-up">// writing</p>
              <h2 className="fade-up fade-up-delay-1">
                Ideas shaped by{" "}
                <span className="gradient-text">building</span>,{" "}
                not just observing.
              </h2>
              <p className="mt-4 sm:mt-6 text-[0.875rem] sm:text-[0.9375rem] leading-[1.75] text-muted-foreground fade-up fade-up-delay-2">
                On agentic AI, platform engineering, biohacking, food,
                travel, and the systems that shape how we build and live.
                Perspectives from 15 years of building — not from the sidelines.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-sm font-mono font-medium text-[#CCFF00] hover:text-[oklch(0.72_0.12_190)] transition-colors duration-300 fade-up fade-up-delay-3"
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
                  className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} group block py-6 sm:py-8 border-b border-border first:pt-0 last:border-b-0 transition-colors duration-300`}
                >
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <time
                      dateTime={article.date}
                      className="text-[0.625rem] sm:text-[0.6875rem] font-mono text-[oklch(0.55_0.01_260)] tracking-wider"
                    >
                      {formatDate(article.date)}
                    </time>
                    <span className="w-px h-3 bg-[oklch(0.88_0.008_260)]" />
                    <span className="tag-neon !py-0 !px-2 !text-[0.5625rem]">
                      {article.category}
                    </span>
                    <span className="text-[0.625rem] sm:text-[0.6875rem] font-mono text-[oklch(0.6_0.01_260)]">
                      {article.readTime}
                    </span>
                    {article.featured && (
                      <span className="tag-neon">Featured</span>
                    )}
                  </div>

                  <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-[1.375rem] text-foreground group-hover:text-[#CCFF00] transition-colors duration-300 leading-snug tracking-tight">
                    {article.title}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-[0.8125rem] sm:text-[0.875rem] leading-[1.7] text-muted-foreground line-clamp-2">
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
