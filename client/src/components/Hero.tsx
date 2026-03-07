/*
 * DESIGN: Granite Editorial — Hero
 * Full-viewport with Yosemite panorama. Left-aligned text over a subtle
 * warm gradient. The image sits at the bottom, creating a natural horizon line.
 * Typography is monumental but warm. Single CTA.
 * RESPONSIVE: Stacks vertically on mobile, reduced padding, smaller type.
 */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
    >
      {/* Background: warm white to transparent gradient over image */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/hero-yosemite-JyGpXqGZ99Y98gSPgqzrCT.webp"
          alt="Yosemite Valley at golden hour — El Capitan, Half Dome, and Bridalveil Fall"
          className="absolute inset-0 w-full h-full object-cover object-[center_60%] sm:object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient overlay: stronger on mobile for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.985_0.005_80)] via-[oklch(0.985_0.005_80/0.75)] via-50% to-[oklch(0.985_0.005_80/0.2)] sm:via-[oklch(0.985_0.005_80/0.7)] sm:via-55% sm:to-[oklch(0.985_0.005_80/0.15)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-5 sm:px-6 lg:px-12 pb-20 sm:pb-28 lg:pb-40 pt-24 sm:pt-32">
        <div className="max-w-2xl">
          <p className="section-label mb-4 sm:mb-6 fade-up">
            AI & Platform Engineering
          </p>

          <h1 className="fade-up fade-up-delay-1 text-[oklch(0.2_0.015_65)]">
            Clarity through
            <br />
            <span className="italic text-[oklch(0.72_0.12_65)]">
              transformation.
            </span>
          </h1>

          <p className="mt-5 sm:mt-8 text-base sm:text-lg lg:text-xl leading-relaxed text-[oklch(0.35_0.01_65)] max-w-lg fade-up fade-up-delay-2">
            I help engineering leaders adopt AI, build platforms, and ship
            software that moves the business forward.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 fade-up fade-up-delay-3">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:py-3 bg-[oklch(0.22_0.015_65)] text-[oklch(0.97_0.005_80)] text-sm font-sans font-medium tracking-wide rounded-sm hover:bg-[oklch(0.3_0.015_65)] transition-colors duration-300"
            >
              Book a Free Consultation
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="hidden sm:inline-flex text-sm font-sans text-[oklch(0.5_0.01_65)] hover:text-[oklch(0.25_0.015_65)] transition-colors duration-300"
            >
              Learn more
              <span className="ml-1.5">&#8595;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-[oklch(0.985_0.005_80)] to-transparent z-10" />
    </section>
  );
}
