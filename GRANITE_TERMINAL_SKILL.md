# Granite Terminal Design System — Manus Skill

## Overview

The **Granite Terminal** design system is the visual language for `trpk.ai`, the personal brand site of Pavan Tallapragada — CTO, platform engineering leader, and agentic AI practitioner. It is a thought leadership design system: editorial, precise, and grounded in nature. The name comes from the granite walls of Yosemite, which serve as both the hero background and a metaphor for the brand's philosophy.

**When to use this skill:** Any time Manus, Claude Code, or another agent needs to create a new component, page, or visual asset for `trpk.ai`, reference this file to ensure perfect design consistency.

---

## Design Philosophy

The system balances three tensions:
- **Warmth vs. Precision** — warm stone backgrounds against monospace terminal labels
- **Editorial vs. Technical** — serif-adjacent heading font (Sora) against IBM Plex Mono code labels
- **Nature vs. Engineering** — Yosemite imagery against dot-grid overlays and circuit lines

The result is a site that feels like a CTO's notebook: opinionated, structured, and human.

---

## Color Palette

All colors use the OKLCH color space for perceptual uniformity. The following are the canonical values:

| Token | OKLCH Value | Hex Equivalent | Usage |
| :--- | :--- | :--- | :--- |
| `--color-bg` | `oklch(0.98 0.005 85)` | `#F9F8F5` | Page background, warm off-white |
| `--color-surface` | `oklch(0.96 0.006 85)` | `#F3F1EC` | Card backgrounds, subtle elevation |
| `--color-border` | `oklch(0.91 0.008 260)` | `#E2E0DC` | Dividers, borders |
| `--color-text-primary` | `oklch(0.18 0.01 260)` | `#1A1A24` | Headlines, primary text |
| `--color-text-secondary` | `oklch(0.45 0.01 260)` | `#5A5A70` | Body copy, secondary text |
| `--color-text-muted` | `oklch(0.55 0.01 260)` | `#7A7A90` | Captions, metadata |
| `--color-teal` | `oklch(0.65 0.12 190)` | `#14B8A6` | Primary accent — teal |
| `--color-teal-light` | `oklch(0.72 0.12 190)` | `#2DD4BF` | Teal hover state |
| `--color-amber` | `oklch(0.72 0.14 75)` | `#D97706` | Secondary accent — amber/gold |
| `--color-dark-bg` | `oklch(0.08 0.01 260)` | `#0D0D14` | Dark sections (Connect, footer) |
| `--color-dark-surface` | `oklch(0.12 0.01 260)` | `#14141E` | Dark card backgrounds |

### Gradient Text
The signature gradient used on key headline words:
```css
.gradient-text {
  background: linear-gradient(135deg, oklch(0.65 0.12 190), oklch(0.72 0.14 75));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Typography

| Role | Font Family | Weight | Size Scale |
| :--- | :--- | :--- | :--- |
| **Headings** | Sora | 600–700 | `text-4xl` → `text-6xl` (responsive) |
| **Body** | Instrument Sans | 400–500 | `text-sm` → `text-lg` |
| **Labels / Code** | IBM Plex Mono | 400–500 | `text-[0.625rem]` → `text-sm` |
| **Future: Article Body** | Lora (serif) | 400 | `text-base` → `text-lg` (for blog posts) |

CSS variables:
```css
--font-sans: "Instrument Sans", system-ui, -apple-system, sans-serif;
--font-heading: "Sora", system-ui, sans-serif;
--font-mono: "IBM Plex Mono", "Fira Code", monospace;
```

Google Fonts import (already in `index.html`):
```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## Spacing & Layout

| Token | Value | Usage |
| :--- | :--- | :--- |
| Max content width | `1200px` | `max-w-[1200px] mx-auto` |
| Horizontal padding | `px-5 sm:px-6 lg:px-12` | All sections |
| Section vertical padding | `py-16 sm:py-24 lg:py-36` | Standard sections |
| Card border radius | `rounded-sm` (2px) | Buttons, cards — deliberately minimal |
| Card padding | `p-6 sm:p-8` | Standard card padding |

---

## Signature UI Patterns

### Terminal Label
Small monospace section label with `//` prefix:
```tsx
<p className="terminal-label mb-4 sm:mb-6">// worldview</p>
```
CSS:
```css
.terminal-label {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  color: oklch(0.65 0.12 190);
  text-transform: uppercase;
}
```

### Circuit Line (Section Divider)
```tsx
<div className="circuit-line mb-10 sm:mb-16" />
```
CSS:
```css
.circuit-line {
  height: 1px;
  background: linear-gradient(90deg, oklch(0.65 0.12 190 / 0.3), oklch(0.65 0.12 190 / 0.08), transparent);
}
```

### Dot Grid Background Texture
```tsx
<div className="absolute inset-0 dot-grid opacity-15" />
```
CSS:
```css
.dot-grid {
  background-image: radial-gradient(circle, oklch(0.65 0.12 190 / 0.4) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### Tag Pill
```tsx
<span className="tag-pill">Platform Engineering</span>
```
CSS:
```css
.tag-pill {
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.5rem;
  border: 1px solid oklch(0.65 0.12 190 / 0.25);
  color: oklch(0.65 0.12 190);
  border-radius: 2px;
  text-transform: uppercase;
}
```

### Scroll Reveal Animation
```tsx
<div className="fade-up fade-up-delay-1">...</div>
```
CSS:
```css
.fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
.fade-up-delay-1 { transition-delay: 0.1s; }
.fade-up-delay-2 { transition-delay: 0.2s; }
.fade-up-delay-3 { transition-delay: 0.3s; }
.fade-up-delay-4 { transition-delay: 0.4s; }
```

---

## Page Structure & Routes

| Route | Component | Purpose |
| :--- | :--- | :--- |
| `/` | `Home.tsx` | Hero → About (Worldview) → Writing → Services (Engage) → Connect |
| `/blog` | `Blog.tsx` | Article index with category filter |
| `/blog/:slug` | `BlogPost.tsx` | Individual article reading experience |
| `/about` | (to be built) | Deep bio, timeline, speaking credentials |
| `/speaking` | (to be built) | Speaking topics, past talks, booking CTA |
| `/start-here` | (to be built) | Curated reading list for new visitors |

---

## Hero Background

The hero image is hosted on CloudFront:
```
https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/hero-yosemite-JyGpXqGZ99Y98gSPgqzrCT.webp
```
Object position: `object-[center_40%] sm:object-[center_30%]`

---

## Infographic Design Standard

Every blog post should contain 2–3 infographics. The infographic visual language:

- **Background:** White (`#FFFFFF`) or warm off-white (`#F9F8F5`)
- **Primary accent:** Teal `#14B8A6` for headers, borders, and key labels
- **Secondary accent:** Amber `#D97706` for callouts and highlights
- **Dark bar:** `#1A1A24` for stat bars and footer callouts
- **Typography:** Sora Bold for titles, IBM Plex Mono for labels and values, Instrument Sans for body
- **Border radius:** 4px on cards, 2px on labels
- **Canvas size:** 1200×630px (OG-compatible) or 1200×800px for taller diagrams

### Infographic Types
1. **Flow Diagram** — layered architecture with arrows, used for "how it works" posts
2. **Stat Callout** — 4 large stat cards + comparison boxes, used for data-heavy posts
3. **Framework** — numbered steps with descriptions, used for "how to" posts
4. **Comparison** — before/after or old/new side-by-side, used for paradigm-shift posts

---

## Brand Voice

- **Authoritative, not academic** — writes from experience, not theory
- **Specific, not generic** — real numbers, real architectural decisions, real trade-offs
- **Practitioner-first** — "I've built this" not "research shows"
- **Systems thinker** — connects technology, biology, food, and nature
- **Target audience** — CTOs, VPs of Engineering, Staff+ engineers

---

## What NOT to Change

The following are locked and should never be modified without explicit user approval:
- The OKLCH color palette (especially teal `oklch(0.65 0.12 190)`)
- The Sora / Instrument Sans / IBM Plex Mono font stack
- The Yosemite hero image
- The `// section-name` terminal label pattern
- The `gradient-text` class on headline accent words
- The `circuit-line` section divider
- The warm off-white background `oklch(0.98 0.005 85)`
