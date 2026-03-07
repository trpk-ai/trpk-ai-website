/*
 * DESIGN: Granite Editorial — Blog Listing
 * Clean editorial blog index. Category filter as horizontal pills.
 * Articles in a single-column list with generous spacing.
 * RESPONSIVE: Horizontal scrolling filter pills on mobile, stacked meta.
 */
import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { categories, formatDate, getArticlesByCategory } from "@/lib/data";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredArticles = getArticlesByCategory(activeCategory);

  useScrollReveal();

  return (
    <div className="min-h-screen bg-[oklch(0.985_0.005_80)]">
      <Navbar />

      {/* Hero */}
      <header className="relative pt-24 pb-10 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
          <p className="section-label mb-4 sm:mb-6 fade-up">Writing</p>
          <h1 className="max-w-2xl fade-up fade-up-delay-1">
            Ideas worth sharing.
          </h1>
          <p className="mt-4 sm:mt-6 text-[0.9375rem] sm:text-base lg:text-lg leading-relaxed text-[oklch(0.45_0.01_65)] max-w-xl fade-up fade-up-delay-2">
            Thoughts on technology, health, consumer products, strategy, and
            building things that matter.
          </p>
        </div>
      </header>

      {/* Category filter — horizontally scrollable on mobile */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 mb-8 sm:mb-12">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-[0.6875rem] sm:text-xs tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm border transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeCategory === cat
                  ? "bg-[oklch(0.22_0.015_65)] text-[oklch(0.95_0.005_80)] border-[oklch(0.22_0.015_65)]"
                  : "bg-transparent text-[oklch(0.5_0.01_65)] border-[oklch(0.91_0.005_80)] hover:border-[oklch(0.72_0.12_65/0.4)] hover:text-[oklch(0.35_0.01_65)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Article list */}
      <main className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 pb-16 sm:pb-24 lg:pb-36">
        <div className="strata-line mb-0 fade-up" />

        {filteredArticles.length === 0 ? (
          <p className="py-16 text-center text-[oklch(0.55_0.01_65)] font-sans">
            No articles in this category yet.
          </p>
        ) : (
          <div>
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="fade-up group block py-7 sm:py-10 border-b border-[oklch(0.93_0.005_80)] last:border-b-0 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-4 lg:gap-8 items-start">
                  {/* Meta column */}
                  <div className="lg:col-span-3 flex flex-wrap lg:flex-col items-center lg:items-start gap-2 sm:gap-3">
                    <time
                      dateTime={article.date}
                      className="text-[0.6875rem] sm:text-xs font-mono text-[oklch(0.6_0.01_65)] tracking-wide whitespace-nowrap"
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

                  {/* Content column */}
                  <div className="lg:col-span-9">
                    <h2 className="font-serif text-lg sm:text-xl lg:text-2xl text-[oklch(0.22_0.015_65)] group-hover:text-[oklch(0.72_0.12_65)] transition-colors duration-300 leading-snug">
                      {article.title}
                    </h2>
                    <p className="mt-2 sm:mt-3 text-[0.8125rem] sm:text-[0.9375rem] leading-[1.75] text-[oklch(0.5_0.01_65)] line-clamp-2 max-w-2xl">
                      {article.excerpt}
                    </p>
                    <span className="inline-block mt-3 sm:mt-4 text-[0.8125rem] sm:text-sm font-sans text-[oklch(0.72_0.12_65)] group-hover:translate-x-1 transition-transform duration-300">
                      Read article &#8594;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
