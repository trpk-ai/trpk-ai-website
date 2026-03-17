/*
 * DESIGN: Robinhood — Navbar
 * Clean, minimal fixed nav. Sans-serif logo with Robin Neon dot accent.
 * Transparent → frosted glass on scroll. Theme toggle for light/dark mode.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "../contexts/ThemeContext";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  const toggleMobile = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  const navLinks = [
    { href: "/#about", label: "Worldview" },
    { href: "/blog", label: "Writing" },
    { href: "/#engage", label: "Engage" },
    { href: "/#connect", label: "Connect" },
  ];

  const isHome = location === "/";

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      if (!isHome) {
        window.location.href = href;
      } else {
        const id = href.replace("/#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isDark = theme === "dark";

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-[#0F0F0F]/92 backdrop-blur-2xl border-b border-[#2E2E2E]"
              : "bg-white/92 backdrop-blur-2xl border-b border-[#E8E8E8]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between h-14 lg:h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-[0.875rem] font-bold tracking-tight text-foreground hover:text-[#CCFF00] transition-colors duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-[#CCFF00] neon-pulse" />
            trpk.ai
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
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

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* CTA */}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon text-[0.8125rem] py-2 px-5"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile: Theme Toggle + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={toggleMobile}
              className="w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-foreground transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-start justify-center px-8 transition-all duration-300 ${
          isDark ? "bg-[#0F0F0F]/97 backdrop-blur-3xl" : "bg-white/97 backdrop-blur-3xl"
        } ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-7">
          {navLinks.map((link, i) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.href}
                onClick={() => {
                  toggleMobile();
                  handleNavClick(link.href);
                }}
                className="text-left font-bold text-3xl tracking-tight text-foreground hover:text-[#CCFF00] transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-bold text-3xl tracking-tight text-foreground hover:text-[#CCFF00] transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon mt-4 self-start"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </>
  );
}
