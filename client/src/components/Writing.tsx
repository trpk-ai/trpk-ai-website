/*
 * DESIGN: Granite Editorial — Writing Preview
 * Shows latest 4 articles in a clean editorial list.
 * Each entry: date, title, excerpt, category tag. Minimal, scannable.
 * RESPONSIVE: Single column on mobile, sticky header only on desktop.
 */
import { Link } from "wouter";
import { articles, formatDate } from "@/lib/data";

export default function Writing() {
  const latestArticles = articles.slice(0, 4);

  return (
    <section id="writing" className="py-16 sm:py-24 lg:py-36 bg-[oklch(0.985_0.005_80)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="strata-line mb-10 sm:mb-16 fade-up" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
          {/* Left — section header (sticky on desktop only) */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="section-label mb-4 sm:mb-6 fade-up">Writing</p>
              <h2 className="fade-up fade-up-delay-1">
                Thoughts on technology, strategy, and building well.
              </h2>
              <p className="mt-4 sm:mt-6 text-[0.875rem] sm:text-[0.9375rem] leading-[1.75] text-[oklch(0.5_0.01_65)] fade-up fade-up-delay-2">
                I write about the ideas shaping how we build software, lead
                teams, and live intentionally.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-sm font-sans font-medium text-[oklch(0.72_0.12_65)] hover:text-[oklch(0.62_0.14_65)] transition-colors duration-300 fade-up fade-up-delay-3"
              >
                View all articles
                <span className="text-base">&#8594;</span>
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
                  className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} group block py-6 sm:py-8 border-b border-[oklch(0.91_0.005_80)] first:pt-0 last:border-b-0 transition-colors duration-300`}
                >
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <time
                      dateTime={article.date}
                      className="text-[0.6875rem] sm:text-xs font-mono text-[oklch(0.6_0.01_65)] tracking-wide"
                    >
                      {formatDate(article.date)}
                    </time>
                    <span className="tag-pill !py-0.5 !px-2 !text-[0.5625rem] sm:!text-[0.625rem]">
                      {article.category}
                    </span>
                    <span className="text-[0.6875rem] sm:text-xs font-mono text-[oklch(0.65_0.01_65)]">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl lg:text-[1.375rem] text-[oklch(0.22_0.015_65)] group-hover:text-[oklch(0.72_0.12_65)] transition-colors duration-300 leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-[0.8125rem] sm:text-[0.875rem] leading-[1.7] text-[oklch(0.5_0.01_65)] line-clamp-2">
                    {article.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
