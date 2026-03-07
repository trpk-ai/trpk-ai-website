/*
 * DESIGN: Granite Editorial — About
 * Asymmetric two-column layout. Left: text block with editorial styling.
 * Right: Yosemite granite close-up photograph. Strata line divider above.
 * RESPONSIVE: Image stacks below text on mobile, reduced spacing.
 */

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-36 bg-[oklch(0.985_0.005_80)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Strata divider */}
        <div className="strata-line mb-10 sm:mb-16 fade-up" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Left column — text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="section-label mb-4 sm:mb-6 fade-up">About</p>

            <h2 className="fade-up fade-up-delay-1">
              Engineering leader at the intersection of AI and developer
              experience.
            </h2>

            <div className="mt-6 sm:mt-10 space-y-5 sm:space-y-6 fade-up fade-up-delay-2">
              <p className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8]">
                I'm a Senior Solutions Engineer at Microsoft, where I help
                enterprise organizations transform their software development
                lifecycle through GitHub Enterprise, GitHub Copilot, and
                AI-powered engineering workflows.
              </p>
              <p className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8]">
                My work sits at the convergence of three forces reshaping how
                software gets built: artificial intelligence, platform
                engineering, and developer productivity. I believe the best
                technology feels invisible — it removes friction rather than
                adding complexity.
              </p>
              <p className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8]">
                Outside of work, I find clarity on the trails of Yosemite
                National Park. The same principles that make great
                landscapes — patience, perspective, and respect for natural
                systems — apply to building great engineering cultures.
              </p>
            </div>

            {/* Credential tags */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 fade-up fade-up-delay-3">
              {[
                "Microsoft",
                "GitHub Enterprise",
                "AI Transformation",
                "Platform Engineering",
                "SDLC",
              ].map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — image */}
          <div className="lg:col-span-5 order-1 lg:order-2 fade-up fade-up-delay-2">
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/about-section-cgDE4bznwD2PHacj4KmDq7.webp"
                alt="Yosemite granite rock face with ferns growing from a crack — resilience and growth"
                className="w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] object-cover rounded-sm"
                loading="lazy"
              />
              {/* Caption */}
              <p className="mt-3 text-xs font-mono text-[oklch(0.6_0.01_65)] tracking-wide">
                Yosemite Valley — where clarity meets perspective
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
