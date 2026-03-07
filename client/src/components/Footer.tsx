/*
 * DESIGN: Granite Terminal — Footer
 * Minimal. Dark granite background. Teal accent dot.
 * Monospace links. Copyright. Social links placeholder.
 */
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.12_0.01_260)] py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-1.5 font-mono text-[0.8125rem] tracking-wider text-[oklch(0.85_0.005_85)] hover:text-[oklch(0.65_0.12_190)] transition-colors duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.12_190)]" />
              trpk.ai
            </Link>
            <p className="mt-3 text-[0.75rem] font-mono text-[oklch(0.45_0.005_85)] tracking-wider">
              AI Transformation · Platform Engineering · Agentic Systems
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { href: "/#about", label: "About" },
              { href: "/#services", label: "Services" },
              { href: "/blog", label: "Writing" },
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
                  className="text-[0.75rem] font-mono text-[oklch(0.55_0.005_85)] hover:text-[oklch(0.65_0.12_190)] transition-colors duration-300 tracking-wider"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.75rem] font-mono text-[oklch(0.55_0.005_85)] hover:text-[oklch(0.65_0.12_190)] transition-colors duration-300 tracking-wider"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 sm:mt-12 h-px bg-gradient-to-r from-[oklch(0.65_0.12_190/0.15)] via-[oklch(0.65_0.12_190/0.08)] to-transparent" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[0.6875rem] font-mono text-[oklch(0.4_0.005_85)] tracking-wider">
            &copy; {currentYear} trpk.ai &mdash; All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.6875rem] font-mono text-[oklch(0.45_0.005_85)] hover:text-[oklch(0.65_0.12_190)] transition-colors duration-300 tracking-wider"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.6875rem] font-mono text-[oklch(0.45_0.005_85)] hover:text-[oklch(0.65_0.12_190)] transition-colors duration-300 tracking-wider"
            >
              GitHub
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.6875rem] font-mono text-[oklch(0.45_0.005_85)] hover:text-[oklch(0.65_0.12_190)] transition-colors duration-300 tracking-wider"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
