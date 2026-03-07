/*
 * DESIGN: Granite Terminal — Connect/CTA
 * Dark granite background with Mirror Lake image. Teal accent lines.
 * Newsletter signup for subscription-ready architecture.
 * Three offering cards. Clean, futuristic-nature feel.
 */
import { useState } from "react";

export default function Connect() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

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
        <div className="absolute inset-0 bg-[oklch(0.12_0.01_260/0.88)]" />
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid opacity-10" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — CTA */}
          <div>
            <p className="font-mono text-[0.6875rem] tracking-[0.15em] uppercase text-[oklch(0.65_0.12_190)] mb-4 sm:mb-6 fade-up">
              // connect
            </p>

            <h2 className="font-heading text-[oklch(0.95_0.005_85)] fade-up fade-up-delay-1">
              Ready to turn complexity into{" "}
              <span className="gradient-text">leverage</span>?
            </h2>

            <p className="mt-4 sm:mt-6 text-[0.9375rem] sm:text-base leading-relaxed text-[oklch(0.7_0.005_85)] fade-up fade-up-delay-2">
              I offer complimentary initial consultations. No pitch, no
              pressure — just an honest conversation about what's possible.
            </p>

            {/* Offerings */}
            <div className="mt-8 sm:mt-10 space-y-4 fade-up fade-up-delay-3">
              {[
                {
                  label: "Free Consultation",
                  desc: "30-min strategy session",
                },
                {
                  label: "Executive Coaching",
                  desc: "Leadership in the AI era",
                },
                {
                  label: "Interview Prep",
                  desc: "System design at Staff+ level",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.12_190)] group-hover:shadow-[0_0_8px_oklch(0.65_0.12_190/0.5)] transition-shadow duration-300" />
                  <div className="flex items-baseline gap-3">
                    <p className="text-sm font-sans font-medium text-[oklch(0.95_0.005_85)]">
                      {item.label}
                    </p>
                    <p className="text-[0.6875rem] font-mono text-[oklch(0.55_0.005_85)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 fade-up fade-up-delay-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[oklch(0.65_0.12_190)] text-[oklch(0.98_0.005_85)] text-sm font-sans font-medium tracking-wide rounded-sm hover:bg-[oklch(0.72_0.12_190)] transition-colors duration-300"
              >
                Schedule a Call →
              </a>
              <a
                href="mailto:hello@trpk.ai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[oklch(0.95_0.005_85/0.15)] text-[oklch(0.8_0.005_85)] text-sm font-sans tracking-wide rounded-sm hover:border-[oklch(0.65_0.12_190/0.3)] hover:text-[oklch(0.95_0.005_85)] transition-all duration-300"
              >
                hello@trpk.ai
              </a>
            </div>
          </div>

          {/* Right — Newsletter */}
          <div className="flex items-end lg:items-center">
            <div className="w-full fade-up fade-up-delay-3">
              <div className="border border-[oklch(0.95_0.005_85/0.1)] rounded-sm p-6 sm:p-8 bg-[oklch(0.15_0.01_260/0.5)] backdrop-blur-sm">
                <p className="font-mono text-[0.625rem] tracking-[0.15em] uppercase text-[oklch(0.65_0.12_190)] mb-3">
                  // newsletter
                </p>
                <h3 className="font-heading font-semibold text-xl sm:text-2xl text-[oklch(0.95_0.005_85)] tracking-tight mb-2">
                  Weekly insights
                </h3>
                <p className="text-[0.8125rem] sm:text-sm leading-relaxed text-[oklch(0.6_0.005_85)] mb-6">
                  AI transformation, platform engineering, FinOps, and system
                  design — delivered to your inbox. Free and premium tiers
                  coming soon.
                </p>

                {subscribed ? (
                  <div className="flex items-center gap-2 text-sm text-[oklch(0.65_0.12_190)]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-mono text-[0.8125rem]">
                      You're on the list. Welcome.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 px-4 py-2.5 bg-[oklch(0.1_0.01_260)] border border-[oklch(0.95_0.005_85/0.1)] rounded-sm text-sm text-[oklch(0.9_0.005_85)] placeholder:text-[oklch(0.45_0.005_85)] font-mono focus:outline-none focus:border-[oklch(0.65_0.12_190/0.4)] transition-colors"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-[oklch(0.65_0.12_190)] text-[oklch(0.98_0.005_85)] text-sm font-sans font-medium rounded-sm hover:bg-[oklch(0.72_0.12_190)] transition-colors duration-300"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top circuit line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.12_190/0.2)] to-transparent" />
    </section>
  );
}
