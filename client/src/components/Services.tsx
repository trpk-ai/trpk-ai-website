/*
 * DESIGN: Granite Terminal — Ways to Engage (replaces Services)
 * 3 engagement types in editorial grid. Not a service menu — ways to
 * interact with the thinking. Advisory, Coaching & Interview Prep, Speaking.
 * Teal number accents. Dot-grid hover. Terminal labels.
 */
import { engagements } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="engage"
      className="relative py-16 sm:py-24 lg:py-36 bg-[oklch(0.965_0.005_85)]"
    >
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="tag-neon mb-4 sm:mb-6 fade-up">// engage</p>
          <h2 className="fade-up fade-up-delay-1">
            Ways to work with{" "}
            <span className="gradient-text">my thinking</span>.
          </h2>
          <p className="mt-4 sm:mt-6 text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8] fade-up fade-up-delay-2">
            The writing is free. For deeper engagement — strategy sessions,
            coaching, or speaking — every conversation starts with
            understanding your specific challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {engagements.map((eng, i) => (
            <article
              key={eng.number}
              className={`fade-up fade-up-delay-${Math.min(i + 1, 3)} group relative bg-[oklch(0.99_0.003_85)] border border-border rounded-sm p-6 sm:p-8 lg:p-10 transition-all duration-500 rh-card-hover hover:border-[#CCFF00/0.2)]`}
            >
              {/* Number accent + tagline */}
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <span className="font-mono text-[0.6875rem] tracking-wider text-[#CCFF00] border border-[#CCFF00/0.2)] px-2 py-0.5 rounded-sm">
                  {eng.number}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-[1.25rem] text-foreground mb-1.5 tracking-tight leading-snug">
                {eng.title}
              </h3>

              <p className="text-[0.6875rem] sm:text-[0.75rem] font-mono text-[#CCFF00] tracking-wide mb-4">
                {eng.tagline}
              </p>

              <p className="text-[0.8125rem] sm:text-[0.875rem] leading-[1.75] text-[oklch(0.4_0.01_260)] mb-5 sm:mb-6">
                {eng.description}
              </p>

              <ul className="space-y-2">
                {eng.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-[0.75rem] sm:text-[0.8125rem] text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#CCFF00] flex-shrink-0 mt-1.5" />
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Hover dot-grid reveal */}
              <div className="absolute inset-0 dot-grid opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-sm pointer-events-none" />
            </article>
          ))}
        </div>

        {/* Single CTA below all cards */}
        <div className="mt-10 sm:mt-14 text-center fade-up">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 btn-neon text-sm font-sans font-medium tracking-wide rounded-sm hover:bg-[oklch(0.25_0.01_260)] transition-colors duration-300"
          >
            Start a conversation
          </a>
          <p className="mt-3 text-[0.75rem] font-mono text-[oklch(0.55_0.01_260)]">
            Free initial call · No commitment
          </p>
        </div>
      </div>
    </section>
  );
}
