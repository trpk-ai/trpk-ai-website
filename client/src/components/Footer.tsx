/*
 * DESIGN: Robinhood — Footer
 * Minimal. Uses CSS variables for full dark/light mode support.
 * Robin Neon accent dot on logo.
 */
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary border-t border-border py-10 sm:py-14 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
          {/* Logo + tagline */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-[0.875rem] font-bold tracking-tight text-foreground hover:text-[#CCFF00] transition-colors duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
              trpk.ai
            </Link>
            <p className="mt-2 text-[0.75rem] text-muted-foreground max-w-xs">
              Systems thinking across technology, health, and culture
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              { href: "/#about", label: "Worldview" },
              { href: "/blog", label: "Writing" },
              { href: "/#engage", label: "Engage" },
              { href: "/#connect", label: "Connect" },
            ].map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => {
                    const id = link.href.replace("/#", "");
                    if (window.location.pathname !== "/") {
                      window.location.href = link.href;
                    } else {
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-[0.8125rem] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.8125rem] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[0.75rem] text-muted-foreground">
            © {currentYear} trpk.ai — All rights reserved
          </p>
          <p className="text-[0.75rem] text-muted-foreground">
            Built with <span className="text-[#CCFF00]">●</span> and systems thinking
          </p>
        </div>
      </div>
    </footer>
  );
}
