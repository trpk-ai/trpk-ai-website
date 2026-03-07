/*
 * DESIGN: Granite Terminal — Hero (Thought Leadership)
 * Full-viewport hero with Yosemite panorama background.
 * Thesis statement as headline — worldview, not service pitch.
 * Primary CTA: Read my latest. Secondary: Work with me.
 */

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/hero-yosemite-JyGpXqGZ99Y98gSPgqzrCT.webp"
          alt="Yosemite Valley panorama — granite cliffs, morning mist, ancient forests"
          className="w-full h-full object-cover object-[center_30%]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlay — bottom heavy for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.98_0.005_85)] via-[oklch(0.98_0.005_85/0.7)] via-45% to-[oklch(0.98_0.005_85/0.08)]" />
        {/* Dot grid overlay for tech texture */}
        <div className="absolute inset-0 dot-grid opacity-25" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 pb-14 sm:pb-20 lg:pb-28 pt-24 w-full">
        <div className="max-w-3xl">
          {/* Thesis label — not a service list */}
          <p className="terminal-label mb-5 sm:mb-6 fade-up">
            Platform Engineering · Agentic AI · Engineering Leadership
          </p>

          {/* Thesis statement — worldview, not pitch */}
          <h1 className="fade-up fade-up-delay-1">
            I spent a decade building platforms for developers.{" "}
            <span className="gradient-text">Now agents are the developer.</span>
          </h1>

          {/* Credibility line — operator, not consultant */}
          <p className="mt-5 sm:mt-7 text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-relaxed max-w-xl text-[oklch(0.38_0.01_260)] fade-up fade-up-delay-2">
            15 years building platforms, scaling engineering orgs, and leading
            cloud transformations. Writing about what comes next.
          </p>

          {/* CTAs — Ideas first, engagement second */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 fade-up fade-up-delay-3">
            <button
              onClick={() =>
                document
                  .getElementById("writing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[oklch(0.18_0.01_260)] text-[oklch(0.95_0.005_85)] text-sm font-sans font-medium tracking-wide rounded-sm hover:bg-[oklch(0.25_0.01_260)] transition-colors duration-300"
            >
              Read my latest
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("engage")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 text-sm font-sans font-medium text-[oklch(0.45_0.01_260)] hover:text-[oklch(0.65_0.12_190)] transition-colors duration-300"
            >
              Ways to engage
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5">
                <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Circuit line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.12_190/0.3)] to-transparent" />
    </section>
  );
}
