/*
 * DESIGN: Granite Terminal — Connect (Thought Leadership)
 * Newsletter-first. Booking secondary. Dark granite background with Mirror Lake.
 * Framing: "Stay close to the thinking" not "hire me".
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
        <div className="absolute inset-0 dot-grid opacity-10" />
      </div>

      <div className="relative z-10 max-w-[700px] mx-auto px-5 sm:px-6 lg:px-12 text-center">
        <p className="font-mono text-[0.6875rem] tracking-[0.15em] uppercase text-[oklch(0.65_0.12_190)] mb-5 sm:mb-6 fade-up">
          // connect
        </p>

        <h2 className="font-heading text-[oklch(0.95_0.005_85)] fade-up fade-up-delay-1">
          Stay close to the{" "}
          <span className="gradient-text">thinking</span>.
        </h2>

        <p className="mt-4 sm:mt-6 text-[0.9375rem] sm:text-base leading-[1.8] text-[oklch(0.7_0.005_85)] max-w-lg mx-auto fade-up fade-up-delay-2">
          Weekly perspectives on agentic AI, platform engineering, biohacking,
          and the systems that shape how we build and live — from someone who’s
          built for 15 years, not just studied it. No spam. Unsubscribe anytime.
        </p>

        {/* Newsletter form */}
        <div className="mt-8 sm:mt-10 fade-up fade-up-delay-3">
          {subscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.65_0.12_190/0.1)] border border-[oklch(0.65_0.12_190/0.2)] rounded-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8.5l3 3 7-7" stroke="oklch(0.65 0.12 190)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-sm font-mono text-[oklch(0.65_0.12_190)]">
                You're in. First issue coming soon.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 bg-[oklch(0.1_0.01_260/0.6)] border border-[oklch(0.95_0.005_85/0.12)] rounded-sm text-sm font-sans text-[oklch(0.95_0.005_85)] placeholder:text-[oklch(0.5_0.005_85)] focus:outline-none focus:border-[oklch(0.65_0.12_190/0.4)] focus:ring-1 focus:ring-[oklch(0.65_0.12_190/0.2)] transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[oklch(0.65_0.12_190)] text-[oklch(0.98_0.005_85)] text-sm font-sans font-medium tracking-wide rounded-sm hover:bg-[oklch(0.72_0.12_190)] transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Secondary CTA — booking */}
        <div className="mt-10 sm:mt-14 fade-up fade-up-delay-4">
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[oklch(0.65_0.12_190/0.3)] to-transparent mb-6 sm:mb-8" />
          <p className="text-[0.8125rem] text-[oklch(0.6_0.005_85)] mb-3">
            Want to go deeper? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-mono font-medium text-[oklch(0.65_0.12_190)] hover:text-[oklch(0.72_0.12_190)] transition-colors duration-300"
            >
              Book a free call →
            </a>
            <span className="hidden sm:block w-px h-4 bg-[oklch(0.95_0.005_85/0.15)]" />
            <a
              href="mailto:hello@trpk.ai"
              className="inline-flex items-center gap-2 text-sm font-mono text-[oklch(0.55_0.005_85)] hover:text-[oklch(0.65_0.12_190)] transition-colors duration-300"
            >
              hello@trpk.ai
            </a>
          </div>
        </div>
      </div>

      {/* Top circuit line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.12_190/0.2)] to-transparent" />
    </section>
  );
}
