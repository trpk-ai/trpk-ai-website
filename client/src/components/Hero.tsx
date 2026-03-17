/*
 * DESIGN: Robinhood — Hero
 * Clean, bold hero. Robin Neon accent on key phrase.
 * Full dark/light mode support via CSS variables.
 */
import { useTheme } from "../contexts/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative min-h-[75svh] sm:min-h-[85svh] lg:min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/hero-yosemite-JyGpXqGZ99Y98gSPgqzrCT.webp"
          alt="Yosemite Valley panorama"
          className="w-full h-full object-cover object-[center_40%] sm:object-[center_30%]"
          loading="eager"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: isDark
              ? "linear-gradient(to top, #0F0F0F 0%, rgba(15,15,15,0.82) 45%, rgba(15,15,15,0.1) 100%)"
              : "linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0.82) 45%, rgba(255,255,255,0.1) 100%)",
          }}
        />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 pb-10 sm:pb-20 lg:pb-28 pt-20 sm:pt-24 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-5 sm:mb-7 fade-up">
            <span className="tag-neon">Platform Engineering · Agentic AI · Systems Thinking</span>
          </div>

          <h1 className="fade-up fade-up-delay-1 text-foreground">
            I spent 15 years building platforms.{" "}
            <span className="gradient-text">Now agents are the developer.</span>
          </h1>

          <p className="mt-5 sm:mt-7 text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-relaxed max-w-xl text-muted-foreground fade-up fade-up-delay-2">
            I think in systems. I write about the ones that matter — from
            agentic AI to what we put in our bodies.
          </p>

          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 fade-up fade-up-delay-3">
            <button
              onClick={() =>
                document.getElementById("writing")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-neon"
            >
              Read my latest
            </button>
            <button
              onClick={() =>
                document.getElementById("engage")?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-ghost"
            >
              Ways to engage
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#CCFF00]/20 to-transparent" />
    </section>
  );
}
