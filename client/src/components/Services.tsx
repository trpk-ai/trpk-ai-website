/*
 * DESIGN: Granite Editorial — Services
 * Numbered service cards with oversized section numbers as background anchors.
 * Clean 2x2 grid on desktop, stacked on mobile. Subtle mist background.
 * RESPONSIVE: Single column on mobile, reduced card padding, smaller numbers.
 */
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 lg:py-36 bg-[oklch(0.965_0.005_80)]"
    >
      {/* Subtle mist background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/services-bg-apc3xGKZBHYDkPMaPi3FkG.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="section-label mb-4 sm:mb-6 fade-up">Services</p>
          <h2 className="fade-up fade-up-delay-1">
            Focused expertise for engineering organizations ready to evolve.
          </h2>
          <p className="mt-4 sm:mt-6 text-[0.9375rem] sm:text-base lg:text-[1.0625rem] leading-[1.8] fade-up fade-up-delay-2">
            I offer free initial consultations, executive coaching, and
            interview preparation alongside deep advisory engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, i) => (
            <article
              key={service.number}
              className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} group relative bg-white/70 backdrop-blur-sm border border-[oklch(0.91_0.005_80)] rounded-sm p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-[oklch(0.72_0.12_65/0.3)] hover:shadow-[0_8px_40px_oklch(0.72_0.12_65/0.06)]`}
            >
              {/* Large background number */}
              <span className="absolute top-4 right-6 sm:top-6 sm:right-8 font-serif text-[4rem] sm:text-[5rem] lg:text-[6rem] leading-none text-[oklch(0.93_0.005_80)] select-none transition-colors duration-500 group-hover:text-[oklch(0.72_0.12_65/0.1)]">
                {service.number}
              </span>

              <div className="relative z-10">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-[oklch(0.22_0.015_65)] mb-3 sm:mb-4 pr-12">
                  {service.title}
                </h3>
                <p className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.75] text-[oklch(0.4_0.01_65)] mb-5 sm:mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-center gap-3 text-[0.8125rem] sm:text-sm text-[oklch(0.5_0.01_65)]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.12_65)] flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
