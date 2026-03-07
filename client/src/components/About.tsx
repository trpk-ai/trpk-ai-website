/*
 * DESIGN: Granite Terminal — Manifesto (replaces About)
 * Worldview + journey. Not a job description. Not a service pitch.
 * Operator credibility: CTO, Director, Sr. Manager → now at Microsoft.
 * The thesis: platforms are being redesigned for agents, not humans.
 */

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-36 bg-[oklch(0.98_0.005_85)]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Circuit line divider */}
        <div className="circuit-line mb-10 sm:mb-16 fade-up" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          {/* Left column — manifesto text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="terminal-label mb-4 sm:mb-6 fade-up">// worldview</p>

            <h2 className="fade-up fade-up-delay-1">
              Software engineering is becoming a{" "}
              <span className="gradient-text">human-agent partnership</span>.
              The organizations that architect for this will win.
            </h2>

            <div className="mt-6 sm:mt-10 space-y-5 sm:space-y-6 fade-up fade-up-delay-2">
              <p className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8]">
                I've been a CTO and senior engineering leader — building
                platforms, scaling organizations, and leading cloud
                transformations across startups and enterprises for over 15
                years. I've lived the pain of building internal developer
                platforms, golden paths, and self-service infrastructure.
              </p>
              <p className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8]">
                Now I sit inside the ecosystem shaping the tools that are
                redefining all of it. I see how hundreds of enterprises are
                adopting — or failing to adopt — the agentic toolchain. GitHub
                Copilot coding agent, Claude Code, multi-agent orchestration,
                agent-consumable IaC — the platforms I spent a decade building
                for humans are being redesigned for agents.
              </p>
              <p className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8]">
                That dual perspective — operator who's built it, and ecosystem
                insider who sees the patterns — is what I write about and advise
                on. The rest will automate chaos.
              </p>
              <p className="text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8] text-[oklch(0.5_0.01_260)] italic">
                I find my clearest thinking on the granite trails of Yosemite.
                The same patience that shapes mountains shapes great engineering
                cultures.
              </p>
            </div>

            {/* Credential tags — operator credibility, not buzzwords */}
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-2 fade-up fade-up-delay-3">
              {[
                "Former CTO",
                "Senior Engineering Leader",
                "15+ Years Building Platforms",
                "FinOps X Speaker",
                "Multi-Agent Architecture",
                "GitHub & AI Toolchain",
                "Cloud Transformation",
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
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/portrait-final_01a1c3dc.png"
                alt="Pavan Tallapragada — Platform Engineering & AI Thought Leader"
                className="w-full aspect-[1/1] object-cover object-top rounded-sm bg-[oklch(0.96_0.005_85)]"
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
