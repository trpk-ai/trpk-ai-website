/*
 * DESIGN: Granite Editorial — Scroll to Top
 * Minimal floating button that appears after scrolling down.
 * Uses amber accent, subtle shadow, smooth animation.
 */
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[oklch(0.22_0.015_65)] text-[oklch(0.95_0.005_80)] shadow-lg transition-all duration-500 hover:bg-[oklch(0.3_0.015_65)] ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 13V3M3 7l5-5 5 5" />
      </svg>
    </button>
  );
}
