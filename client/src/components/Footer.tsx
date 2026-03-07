/*
 * DESIGN: Granite Editorial — Footer
 * Minimal, clean. Logo left, social links right. Strata line above.
 * RESPONSIVE: Fully stacked on mobile with proper spacing.
 */
import { Link } from "wouter";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "X", href: "https://x.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.985_0.005_80)] py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="strata-line mb-8 sm:mb-12" />

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <div>
            <Link
              href="/"
              className="font-mono text-sm tracking-wider text-[oklch(0.3_0.01_65)]"
            >
              trpk.ai
            </Link>
            <p className="mt-2 text-sm text-[oklch(0.55_0.01_65)] max-w-xs leading-relaxed">
              AI Transformation, Platform Engineering, and Developer
              Productivity consulting.
            </p>
          </div>

          {/* Center — nav */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-8">
            {[
              { label: "About", href: "/#about" },
              { label: "Services", href: "/#services" },
              { label: "Writing", href: "/blog" },
              { label: "Connect", href: "/#connect" },
            ].map((link) =>
              link.href.startsWith("/blog") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-sans tracking-wide text-[oklch(0.5_0.01_65)] hover:text-[oklch(0.25_0.015_65)] transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-sans tracking-wide text-[oklch(0.5_0.01_65)] hover:text-[oklch(0.25_0.015_65)] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Right — social */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono tracking-wide text-[oklch(0.55_0.01_65)] hover:text-[oklch(0.72_0.12_65)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[oklch(0.93_0.005_80)]">
          <p className="text-xs text-[oklch(0.65_0.01_65)]">
            &copy; {new Date().getFullYear()} TRPK.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
