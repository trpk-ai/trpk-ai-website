/*
 * DESIGN: Granite Editorial — Connect/CTA
 * Full-width section with Mirror Lake Yosemite background.
 * Dark overlay with light text. Single, clear call-to-action.
 * RESPONSIVE: Stacked offerings on mobile, full-width buttons.
 */

export default function Connect() {
  return (
    <section id="connect" className="relative py-20 sm:py-28 lg:py-40 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/cta-section-Eyi9jd693UL8JcJXmTUrPg.webp"
          alt="Mirror Lake at dawn, Yosemite — perfect reflections of granite cliffs"
          className="w-full h-full object-cover object-[center_40%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[oklch(0.15_0.01_65/0.85)] sm:bg-[oklch(0.15_0.01_65/0.82)]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="font-mono text-[0.6875rem] sm:text-xs tracking-[0.2em] uppercase text-[oklch(0.72_0.12_65)] mb-4 sm:mb-6 fade-up">
            Let's Connect
          </p>

          <h2 className="font-serif text-[oklch(0.95_0.005_80)] fade-up fade-up-delay-1">
            Ready to transform how your team builds software?
          </h2>

          <p className="mt-4 sm:mt-6 text-[0.9375rem] sm:text-base lg:text-lg leading-relaxed text-[oklch(0.75_0.005_80)] fade-up fade-up-delay-2">
            I offer complimentary initial consultations to understand your
            challenges and explore how I can help. No pitch, no pressure — just
            an honest conversation about what's possible.
          </p>

          {/* Offerings */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 fade-up fade-up-delay-3">
            {[
              {
                label: "Free Consultation",
                desc: "30-minute strategy session",
              },
              {
                label: "Executive Coaching",
                desc: "Leadership in the AI era",
              },
              {
                label: "Interview Prep",
                desc: "Technical & behavioral",
              },
            ].map((item) => (
              <div key={item.label} className="flex sm:flex-col items-baseline sm:items-start gap-2 sm:gap-1">
                <p className="text-sm font-sans font-medium text-[oklch(0.95_0.005_80)]">
                  {item.label}
                </p>
                <p className="text-xs font-mono text-[oklch(0.6_0.005_80)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 fade-up fade-up-delay-4">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[oklch(0.72_0.12_65)] text-[oklch(0.1_0.01_65)] text-sm font-sans font-medium tracking-wide rounded-sm hover:bg-[oklch(0.78_0.1_65)] transition-colors duration-300"
            >
              Schedule a Call
              <span>&#8594;</span>
            </a>
            <a
              href="mailto:hello@trpk.ai"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[oklch(0.95_0.005_80/0.2)] text-[oklch(0.85_0.005_80)] text-sm font-sans tracking-wide rounded-sm hover:border-[oklch(0.95_0.005_80/0.4)] hover:text-[oklch(0.95_0.005_80)] transition-all duration-300"
            >
              hello@trpk.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
