/*
 * DESIGN: Granite Terminal — About
 * Business-value focused. No job title. Two short punchy paragraphs.
 * Asymmetric layout with Yosemite image. Teal circuit accents.
 * Credential tags in terminal-style pills.
 */

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-36 bg-[oklch(0.98_0.005_85)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Circuit line divider */}
        <div className="circuit-line mb-10 sm:mb-16 fade-up" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Left column — text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="terminal-label mb-4 sm:mb-6 fade-up">// about</p>

            <h2 className="fade-up fade-up-delay-1">
              I help engineering teams{" "}
              <span className="gradient-text">deliver business value</span>{" "}
              through technology transformation.
            </h2>

            <div className="mt-6 sm:mt-10 space-y-5 sm:space-y-6 fade-up fade-up-delay-2">
              <p className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8]">
                Most organizations are drowning in AI pilots that never reach
                production, platforms that create more friction than they remove,
                and cloud bills that grow faster than revenue. I fix that.
              </p>
              <p className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8]">
                My approach is grounded in real-world engineering leadership —
                shipping multi-agent systems, designing internal developer
                platforms, and building FinOps practices that connect engineering
                decisions to business outcomes. No frameworks for the sake of
                frameworks. Just clarity, execution, and measurable results.
              </p>
              <p className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8] text-[oklch(0.5_0.01_260)]">
                I find my best thinking on the granite trails of Yosemite. The
                same patience that shapes mountains shapes great engineering
                cultures.
              </p>
            </div>

            {/* Credential tags — terminal style */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 fade-up fade-up-delay-3">
              {[
                "Multi-Agent Systems",
                "Platform Engineering",
                "FinOps",
                "GitHub Copilot",
                "SDLC Optimization",
                "FinOps X Speaker",
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
                alt="Yosemite granite rock face — resilience and growth"
                className="w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] object-cover rounded-sm"
                loading="lazy"
              />
              {/* Teal accent line under image */}
              <div className="mt-3 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-[oklch(0.65_0.12_190/0.3)] to-transparent" />
                <p className="text-[0.625rem] font-mono text-[oklch(0.65_0.12_190)] tracking-wider">
                  Yosemite Valley
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
