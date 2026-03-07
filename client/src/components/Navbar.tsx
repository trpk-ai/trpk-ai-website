/*
 * DESIGN: Granite Terminal — Navbar
 * Minimal fixed nav. Monospace logo with teal dot accent.
 * Transparent → frosted glass on scroll. Clean geometric links.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

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
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = mobileOpen ? "" : "hidden";
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/blog", label: "Writing" },
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

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[oklch(0.98_0.005_85/0.88)] backdrop-blur-2xl shadow-[0_1px_0_oklch(0.65_0.12_190/0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12 flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 font-mono text-[0.8125rem] tracking-wider text-[oklch(0.18_0.01_260)] hover:text-[oklch(0.65_0.12_190)] transition-colors duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.12_190)]" />
            trpk.ai
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[0.8125rem] font-sans font-medium tracking-tight text-[oklch(0.45_0.01_260)] hover:text-[oklch(0.18_0.01_260)] transition-colors duration-300"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.8125rem] font-sans font-medium tracking-tight text-[oklch(0.45_0.01_260)] hover:text-[oklch(0.18_0.01_260)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.75rem] font-mono font-medium tracking-wide text-[oklch(0.65_0.12_190)] border border-[oklch(0.65_0.12_190/0.25)] px-4 py-1.5 rounded-sm hover:bg-[oklch(0.65_0.12_190/0.06)] hover:border-[oklch(0.65_0.12_190/0.4)] transition-all duration-300"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMobile}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block w-5 h-[1.5px] bg-[oklch(0.18_0.01_260)] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[oklch(0.18_0.01_260)] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[oklch(0.98_0.005_85/0.97)] backdrop-blur-3xl flex flex-col items-start justify-center px-8 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link, i) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.href}
                onClick={() => {
                  toggleMobile();
                  handleNavClick(link.href);
                }}
                className="text-left font-heading font-semibold text-3xl tracking-tight text-[oklch(0.18_0.01_260)] hover:text-[oklch(0.65_0.12_190)] transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading font-semibold text-3xl tracking-tight text-[oklch(0.18_0.01_260)] hover:text-[oklch(0.65_0.12_190)] transition-colors"
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
            className="font-mono text-lg text-[oklch(0.65_0.12_190)] mt-4"
          >
            Book a Call →
          </a>
        </nav>
      </div>
    </>
  );
}
