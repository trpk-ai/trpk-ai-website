/*
 * DESIGN: Granite Terminal — Services
 * 3 services in a responsive grid. Each card has a teal number accent,
 * dot-grid background on hover, and glow effect. Terminal-style labels.
 * Services: AI/Agentic, Platform Engineering (with FinOps baked in), System Design Interview Prep
 */
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 lg:py-36 bg-[oklch(0.965_0.005_85)]"
    >
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="terminal-label mb-4 sm:mb-6 fade-up">// services</p>
          <h2 className="fade-up fade-up-delay-1">
            Focused expertise for organizations ready to{" "}
            <span className="gradient-text">move faster</span>.
          </h2>
          <p className="mt-4 sm:mt-6 text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8] fade-up fade-up-delay-2">
            Free initial consultations. Executive coaching. Deep advisory
            engagements. Every engagement starts with understanding your
            specific challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, i) => (
            <article
              key={service.number}
              className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} group relative bg-[oklch(0.99_0.003_85)] border border-[oklch(0.91_0.008_260)] rounded-sm p-6 sm:p-8 lg:p-10 transition-all duration-500 glow-teal-hover hover:border-[oklch(0.65_0.12_190/0.2)]`}
            >
              {/* Number accent — teal */}
              <div className="flex items-start justify-between mb-5 sm:mb-6">
                <span className="font-mono text-[0.6875rem] tracking-wider text-[oklch(0.65_0.12_190)] border border-[oklch(0.65_0.12_190/0.2)] px-2 py-0.5 rounded-sm">
                  {service.number}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-lg sm:text-xl lg:text-[1.25rem] text-[oklch(0.18_0.01_260)] mb-3 sm:mb-4 tracking-tight leading-snug">
                {service.title}
              </h3>

              <p className="text-[0.8125rem] sm:text-[0.875rem] leading-[1.75] text-[oklch(0.4_0.01_260)] mb-5 sm:mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 text-[0.75rem] sm:text-[0.8125rem] text-[oklch(0.5_0.01_260)]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[oklch(0.65_0.12_190)] flex-shrink-0 mt-1.5" />
                    {outcome}
                  </li>
                ))}
              </ul>

              {/* Hover dot-grid reveal */}
              <div className="absolute inset-0 dot-grid opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-sm pointer-events-none" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
