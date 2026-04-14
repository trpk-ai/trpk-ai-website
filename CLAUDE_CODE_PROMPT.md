# Claude Code Prompt: TRPK.AI Launch Execution

You are an expert React developer, SEO specialist, and technical writer. Your task is to execute the final launch upgrades for the `trpk-ai-website` repository.

**CRITICAL CONSTRAINT:** The current visual design, colors (Granite Terminal theme), and typography are LOCKED. Do not change the CSS, colors, or visual styling. Your focus is strictly on Information Architecture (IA), SEO, content, and deployment prep.

---

## Phase 1: Information Architecture & Functional Upgrades

**1. Contact Form (Netlify Forms)**
The current Connect section has only a mailto link. Add a functional, accessible contact form to `client/src/components/Connect.tsx` with fields: Name (required), Email (required), Subject (required), Message (required).
- **CRITICAL NETLIFY SPA FIX:** Because this is a React SPA, the Netlify build bot cannot detect the form dynamically. You MUST add a hidden static HTML version of the form to `client/index.html` right after the `<body>` tag so Netlify registers it at build time.
- Add `data-netlify="true"` to the `<form>` tag in `Connect.tsx` and a hidden input `<input type="hidden" name="form-name" value="contact" />`.

**2. Three New Pages**
Add these to the router in `client/src/App.tsx` and to `client/src/components/Navbar.tsx` (Home | Writing | About | Speaking | Start Here):

`/about` (`client/src/pages/About.tsx`):
- Opening statement: "I've spent 15 years building the platforms that power how engineers work. Now I'm watching agents become the engineers."
- Career timeline section: Staff Engineer → Principal Engineer → Distinguished Engineer → CTO
- Core expertise grid: Platform Engineering, Agentic AI, FinOps, System Design, Engineering Leadership, Biohacking, Food Systems, Travel
- A "Currently" section: currently reading (placeholder), currently building (trpk.ai), currently thinking about (the agentic control plane)
- Speaking credentials section
- CTA row: link to /speaking and newsletter signup

`/speaking` (`client/src/pages/Speaking.tsx`):
- Three topic cards (Platform Engineering in the Agentic Era, The Human-Agent Engineering Partnership, FinOps for AI: Governing the GPU Economy)
- Past speaking venues section with placeholder text: "Available for conferences, executive offsites, and engineering leadership summits"
- Booking CTA: replace the `https://calendly.com` placeholder with `mailto:hello@trpk.ai?subject=Speaking%20Inquiry` and display text "Email hello@trpk.ai to discuss"

`/start-here` (`client/src/pages/StartHere.tsx`):
- Intro: "New here? Start with these."
- Curated reading list organized by topic: Agentic AI (3 posts), Platform Engineering (3 posts), Biohacking (2 posts), Systems Thinking (2 posts) — pull from the existing articles in `data.ts`
- "The one post to read first" featured callout linking to the new flagship post (slug: `agentic-control-plane-new-internal-developer-platform`)
- Newsletter signup form using Netlify Forms (remember the hidden HTML fallback rule)

**3. Update Footer**
Update `client/src/components/Footer.tsx` to include the three new page links and replace the placeholder social hrefs with:
- LinkedIn: `https://www.linkedin.com/in/ptallapragada/`
- GitHub: `https://github.com/trpk-ai`
- X: `https://x.com/ptallapragada`

---

## Phase 2: SEO & Accessibility

**1. SEO Updates in `client/index.html`**
- Add Google Tag Manager: insert the GTM `<script>` snippet in `<head>` and the `<noscript>` iframe in `<body>`, using placeholder container ID `GTM-TRPKAI1`.
- Add full Open Graph tags: `og:title`, `og:description`, `og:image` (use `https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/hero-yosemite-JyGpXqGZ99Y98gSPgqzrCT.webp`), `og:url`, `og:type`.
- Add full Twitter Card tags: `twitter:card` (summary_large_image), `twitter:site`, `twitter:title`, `twitter:description`, `twitter:image`.
- Complete the existing JSON-LD Person schema: add `sameAs` array with the LinkedIn, GitHub, and X URLs above; add `jobTitle: "CTO & Platform Engineering Advisor"`, `description`, and `url`.
- Add `<link rel="canonical" href="https://trpk.ai/" />`.

**2. Accessibility Fixes**
- Remove `maximum-scale=1` from the viewport meta tag (WCAG violation).
- Add `aria-label` to the scroll-to-top button and the mobile menu toggle button.
- Add `role="navigation"` and `aria-label="Main navigation"` to the `<nav>` element.

---

## Phase 3: Flagship Blog Post

Add the following entry to `client/src/lib/data.ts` at the **very top** of the `articles` array:

```typescript
{
  slug: "agentic-control-plane-new-internal-developer-platform",
  title: "The Agentic Control Plane: Your New Internal Developer Platform",
  excerpt: "I spent 15 years building internal developer platforms. The next one I'd build wouldn't have a UI, a portal, or a golden path wizard. It would have an agent. Here's the complete architecture.",
  category: "Technology",
  date: "2026-04-14",
  readTime: "14 min",
  featured: true,
  tags: ["Platform Engineering", "Agentic AI", "IaC", "FinOps", "Multi-Agent Systems"],
  content: `[WRITE FULL CONTENT HERE — see requirements below]`,
}
```

**Content requirements:**
- Minimum 1,800 words written in Pavan's voice — authoritative, practitioner-first, specific.
- **CRITICAL STATS TO INCLUDE:** You must cite that "40% of companies spend >$10M annually on AI" (CloudZero) and that "98% of organizations now manage AI spend" (FinOps Foundation 2026). Use these to anchor the FinOps governance section.
- **CRITICAL ARCHITECTURE TO INCLUDE:** In the "What I'd Build Now" section, you must explicitly recommend a stack composed of **LangGraph for orchestration, Temporal for durable execution, and GitOps for drift remediation**.
- Structure: Opening hook → The Stack Is Collapsing → The Four Pillars → What I'd Build Now → The Human Stays in the Loop → Bottom Line.
- Embed the two infographic images at natural section breaks using standard markdown image syntax inside the content string:

```
![Architecture: Before vs After the Agentic Control Plane — the old 5-layer human-driven stack collapsed into the new agent-driven control plane](/infographics/agentic-control-plane-architecture.png)
```

```
![Framework: Four Pillars of the Agentic Control Plane — Agent-Consumable Patterns, Policy-as-Code, Embedded FinOps, Continuous Drift Remediation](/infographics/agentic-control-plane-four-pillars.png)
```

---

## Phase 4: Cleanup

1. Delete `.github/workflows/deploy.yml` (removing GitHub Pages CI/CD — Netlify replaces it).
2. Delete `vite.config.ghpages.ts` if it exists.
3. Do NOT touch `client/public/_redirects` — it is already correct for Netlify SPA routing.
