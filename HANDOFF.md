# TRPK.AI — Session Handoff Document

## Project Overview
Personal brand website for Pavan Tallapragada — thought leadership platform focused on Platform Engineering, Agentic AI, and Engineering Leadership.

## Design System: Granite Terminal
- **Fonts**: Sora (headings), Instrument Sans (body), IBM Plex Mono (accents/labels)
- **Colors**: Warm off-white background, deep charcoal text, teal (#0d9488 range) accents, amber gold gradients
- **Theme**: Yosemite National Park meets futuristic tech — nature grounded, forward-looking
- **Layout**: Asymmetric editorial grid, generous whitespace, dot-grid patterns, circuit-line dividers

## Tech Stack
- React 19 + Vite + TailwindCSS 4
- shadcn/ui components
- Framer Motion (available but minimal use — CSS animations preferred)
- Wouter for routing

## Site Structure
1. **Hero** — Thesis statement with Yosemite panorama background
2. **Writing** — Articles front and center (the core product)
3. **Worldview/Manifesto** — Replaces traditional About section
4. **Ways to Engage** — Advisory, Executive Coaching & Interview Prep, Speaking & Workshops
5. **Connect** — Newsletter signup + booking CTA
6. **Blog** — Full listing page with category filtering
7. **BlogPost** — Individual article pages

## Key Files
- `client/src/lib/data.ts` — All content (articles, engagements, categories)
- `client/src/components/` — All section components
- `client/src/pages/` — Home.tsx, Blog.tsx, BlogPost.tsx
- `client/src/index.css` — Complete design system tokens and custom classes
- `client/index.html` — Google Fonts, meta tags, JSON-LD structured data

## GitHub Repository
- **Repo**: https://github.com/trpk-ai/trpk-ai-website
- **Branch**: main
- **GitHub Actions**: `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages
- **CNAME**: `trpk.ai` configured in `client/public/CNAME`
- **Build config**: `vite.config.ghpages.ts` (clean config without Manus plugins)

## GoDaddy DNS Settings for trpk.ai
| Type  | Name | Value               | TTL |
|-------|------|---------------------|-----|
| A     | @    | 185.199.108.153     | 600 |
| A     | @    | 185.199.109.153     | 600 |
| A     | @    | 185.199.110.153     | 600 |
| A     | @    | 185.199.111.153     | 600 |
| CNAME | www  | trpk-ai.github.io  | 600 |

## CDN Image URLs
- Hero Yosemite panorama: `https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/hero-yosemite-6XAy1nXVXKQ5XSJqRMYjUn.webp`
- Portrait (watercolor/ink): `https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/portrait-final_01a1c3dc.png`
- About section: `https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/about-section-cgDE4bznwD2PHacj4KmDq7.webp`
- Services bg: `https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/services-bg-dGqbqQkxLBqW2fzqZXvqXL.webp`
- Blog hero: `https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/blog-hero-8Wd1bXqGbvZPvSCHqMzJdw.webp`
- CTA section: `https://d2xsxph8kpxj0f.cloudfront.net/310519663340106296/SC4N3PtoqtKXuEYmdpeXhv/cta-section-a7aCLQbNqjAFMxuqRDfYjV.webp`

## Placeholder Links to Replace
- Calendly: All "Book a Call" buttons point to `https://calendly.com` — replace with real URL
- LinkedIn: `https://linkedin.com/in/ptallapragada`
- GitHub: Update to real GitHub profile URL
- X/Twitter: Update to real handle

## Positioning
- **Thesis**: "Software engineering is becoming a human-agent partnership. The organizations that architect for this will define the next era."
- **Voice**: Thought leader who's been a CTO and senior engineering leader for 15+ years, now inside the Microsoft ecosystem watching the agentic revolution
- **NOT a consulting pitch** — ideas first, credibility second, engagement as natural consequence

## Remaining TODOs
- [ ] Replace Calendly placeholder with real booking URL
- [ ] Add real social media links (LinkedIn, GitHub, X)
- [ ] Set up GoDaddy DNS records (see table above)
- [ ] Enable HTTPS enforcement in GitHub Pages settings after DNS propagates
- [ ] Consider upgrading to full-stack for subscription/premium content
- [ ] Add a Speaking page with past talks and speaker inquiry form
- [ ] Set up newsletter integration (ConvertKit, Substack, etc.)
