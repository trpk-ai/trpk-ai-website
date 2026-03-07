/*
 * DESIGN: Granite Editorial — Navbar
 * Minimal, transparent-to-solid on scroll. Left-aligned logo in monospace,
 * right-aligned nav links in sans-serif. No borders until scrolled.
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
            ? "bg-[oklch(0.985_0.005_80/0.92)] backdrop-blur-xl shadow-[0_1px_0_oklch(0.91_0.005_80)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-sm tracking-wider text-[oklch(0.3_0.01_65)] hover:text-[oklch(0.72_0.12_65)] transition-colors duration-300"
          >
            trpk.ai
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[0.8125rem] font-sans font-normal tracking-wide text-[oklch(0.5_0.01_65)] hover:text-[oklch(0.25_0.015_65)] transition-colors duration-300"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.8125rem] font-sans font-normal tracking-wide text-[oklch(0.5_0.01_65)] hover:text-[oklch(0.25_0.015_65)] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8125rem] font-sans font-medium text-[oklch(0.72_0.12_65)] hover:text-[oklch(0.62_0.14_65)] transition-colors duration-300"
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
              className={`block w-5 h-[1.5px] bg-[oklch(0.3_0.01_65)] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[oklch(0.3_0.01_65)] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[oklch(0.985_0.005_80/0.98)] backdrop-blur-2xl flex flex-col items-start justify-center px-8 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link, i) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.href}
                onClick={() => {
                  toggleMobile();
                  handleNavClick(link.href);
                }}
                className="text-left font-serif text-3xl text-[oklch(0.25_0.015_65)] hover:text-[oklch(0.72_0.12_65)] transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-3xl text-[oklch(0.25_0.015_65)] hover:text-[oklch(0.72_0.12_65)] transition-colors"
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
            className="font-serif text-3xl text-[oklch(0.72_0.12_65)]"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </>
  );
}
