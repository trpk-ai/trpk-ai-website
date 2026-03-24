# 30-Day Empire Build — Master Plan
**Pavan Tallapragada | March 2026**

---

## 1. Executive Dashboard

The following table summarizes all five ventures, their current status, the single most important next action, projected Month 6 revenue, and the primary AI tools allocated to each. The ventures are ranked by ROI potential — speed to revenue weighted equally with revenue ceiling.

| Venture | Status | Immediate Next Action | Month 6 Revenue Target | Primary Tools |
| :--- | :--- | :--- | :--- | :--- |
| **V1: Nexora AI (Agency)** | Naming & Launch | Secure domain, build landing page | $15,000–$25,000 MRR | Claude Pro, Claude Code, n8n, Perplexity |
| **V2: ProEcoCleaners** | Redesign | Activate Jobber + Twilio SMS bot | $10,000–$18,000 MRR | OpenClaw, Claude Code, Stripe |
| **V3: Polymarket Bot** | Development | Integrate CLOB API, move to paper trading | $5,000–$12,000/mo | Claude Code, Grok, Perplexity |
| **V4: trpk.ai** | Site Exists — Activate | Finalize TODOs, launch LinkedIn content | Indirect (Lead Gen + Advisory) | Claude Pro, ChatGPT Plus, GitHub Copilot |
| **V5: MNQ AutoPilot** | Hardening | Deploy to Cloud VPS, add kill switch | $3,000–$8,000/mo | Claude Code, GitHub Copilot |

**Honest ROI Ranking.** Venture 1 (AI Agency) has the highest near-term revenue potential because it converts effort directly into client revenue with no capital at risk. Venture 2 (ProEcoCleaners) is the most scalable recurring revenue model — once the automation stack is live, adding customers costs almost nothing. Ventures 3 and 5 (trading) have asymmetric upside but require strict risk management and capital allocation. Venture 4 (trpk.ai) is the long-game play: it generates no direct revenue in 30 days but builds the credibility pipeline that makes everything else easier to sell.

---

## 2. Venture 1: Nexora AI — AI Automation Agency

### Name & Brand

After reviewing the competitive landscape, the recommended name is **Nexora AI**. The word "Nexora" is coined from "nexus" (connection point) and "-ora" (a suffix suggesting light or horizon), conveying the idea of a central intelligence hub that illuminates a business's path forward. It sounds premium, is not obviously an "AI agency," and the domain `nexora.ai` is registrable. Alternative names in order of preference: **Veltro** (from velocity + tro, suggests speed), **Lumio** (light-based, clean), **Corvia** (Latin-derived, professional), and **Axlr** (shorthand for accelerator, technical feel).

### Competitive Landscape

The top AI agencies currently operating in the US SMB market — Azumo, 247 Labs, Diffco, ELEKS, and Digital Scientists — all share the same fatal flaw: they require minimum project budgets of $25,000–$50,000. This pricing structure completely excludes the 33 million US small businesses that need AI automation but cannot afford enterprise-grade custom development. The market gap is not in the technology; it is in the delivery model. Nexora AI's competitive advantage is a **productized, subscription-based model** with transparent pricing, specific deliverables per tier, and AI agents doing 80% of the execution work.

### Service Packages

Three tiers cover the full SMB spectrum. Each tier is designed so that AI agents handle the majority of the work, keeping delivery costs low and margins high.

| Tier | Monthly Price | Core Deliverables | AI Agents Responsible |
| :--- | :--- | :--- | :--- |
| **Starter** | $500/mo | Site audit report, 4 SEO-optimized blog posts, Google Business profile updates, monthly performance report | Firecrawl + Claude (audit), Claude overnight batch (content) |
| **Growth** | $1,200/mo | Everything in Starter + AI lead-gen chatbot, automated email sequences (3 per month), social media posting (12 posts/mo) | n8n + OpenClaw (chatbot/email), Claude Code (landing pages) |
| **Scale** | $2,500/mo | Everything in Growth + custom landing pages, advanced lead enrichment, competitor monitoring, monthly strategy call | Claude Code + v0/Lovable (builds), Perplexity (research), full OpenClaw agent suite |

The one-time setup fee (recommended: $750–$1,500 depending on tier) covers the initial audit, website assessment, and agent configuration. This is the hook that gets clients in the door before they commit to a monthly retainer.

### Client Acquisition — First 10 Clients in 30 Days

The fastest path to the first 10 clients is a hyper-personalized cold email campaign targeting local service businesses (real estate agents, HVAC companies, law firms, dental practices) in a specific metro area. The process is fully automatable:

1. Firecrawl scrapes the target business's website and Google Business profile.
2. Claude generates a personalized 3-sentence audit summary identifying 2-3 specific weaknesses (missing meta descriptions, no blog content, slow page speed).
3. The email leads with the audit finding, not a sales pitch. Subject line: "Found 3 issues on [BusinessName].com."
4. n8n queues the send sequence: Day 1 (audit email), Day 4 (follow-up with one quick fix they can do themselves), Day 8 (case study or social proof).

Target: 200 personalized emails per week → 10% reply rate → 5% conversion → 10 clients in 30 days at average $800/mo = $8,000 MRR from day one.

### Tech Stack

| Function | Tool | Model/Service |
| :--- | :--- | :--- |
| Site audit | Firecrawl + Claude Sonnet | Claude 3.5 Sonnet |
| Website builds | Claude Code + v0.dev | Claude 3.7 Sonnet |
| SEO content | Perplexity research + Claude batch | Haiku 4.5 (overnight) |
| Lead generation | n8n + Apollo.io API | n8n automations |
| Email sequences | n8n + Gmail API | Haiku 4.5 |
| Social posting | Buffer/Hypefury + Claude | Claude Haiku |
| Landing pages | Claude Code | Claude 3.7 Sonnet |
| Client reporting | n8n + Google Sheets | Automated |

### OpenClaw Agent Team Design

Three dedicated agents run this business. All are configured in OpenClaw and scheduled via cron on the Mac Mini.

**Researcher Agent** (runs 12:00 AM – 2:00 AM ET): Pulls the day's target prospect list, scrapes each website using Firecrawl, and generates personalized audit summaries. Outputs a JSON file of ready-to-send email drafts. Model: Claude Haiku 4.5 (cheap, fast, sufficient for structured extraction).

**Content Agent** (runs 2:00 AM – 5:00 AM ET): Processes the content queue for all active clients. Drafts blog posts, social captions, and email sequences based on approved topics. Outputs drafts to a shared Google Drive folder for morning review. Model: Claude Sonnet 3.5 (quality matters for client-facing content).

**Delivery Agent** (runs 8:00 AM – 9:00 AM ET): Reviews overnight outputs, sends approved emails via Gmail API, posts approved social content via Buffer, and updates the client reporting dashboard. Model: Claude Haiku 4.5.

### P&L Projection (Months 1–6)

| Month | Clients | MRR | API/Tool Costs | Net Profit |
| :--- | :--- | :--- | :--- | :--- |
| Month 1 | 5 | $3,500 | $200 | $3,300 |
| Month 2 | 10 | $7,500 | $350 | $7,150 |
| Month 3 | 15 | $12,000 | $450 | $11,550 |
| Month 4 | 20 | $16,000 | $550 | $15,450 |
| Month 5 | 22 | $18,500 | $600 | $17,900 |
| Month 6 | 25 | $21,000 | $700 | $20,300 |

### Landing Page Copy

**Headline:** Your Business, Running on Autopilot.

**Subheadline:** Nexora AI deploys a dedicated team of AI agents that handle your marketing, SEO, lead generation, and customer communication — 24 hours a day, without a full-time hire.

**Three Core Benefits:**
- *Always-On Lead Generation:* AI agents identify and engage potential customers around the clock, so your pipeline never runs dry.
- *SEO That Compounds:* Fresh content and technical optimization every month, built by AI, reviewed by experts.
- *Zero Technical Headaches:* You see polished results. We manage the machinery.

**Pricing Section:** Three clear tiers (Starter $500, Growth $1,200, Scale $2,500) with a prominent "Start with a Free AI Audit" CTA.

**FAQ:** What industries do you serve? / How long until I see results? / Can I cancel anytime? / Do you use real AI or just templates?

**Primary CTA:** Get Your Free AI Readiness Audit → (links to a Typeform intake form that triggers the Researcher Agent automatically).

### 30-Day Launch Plan

**Week 1 (Days 1–7):** Secure `nexora.ai` domain. Build landing page using Claude Code (React + Tailwind, deploy to Vercel). Set up Stripe for payment processing. Configure the Researcher Agent in OpenClaw with Firecrawl integration. Identify first target vertical (recommended: real estate agents in a single metro).

**Week 2 (Days 8–14):** Build the cold email sequence in n8n. Generate first batch of 200 personalized audit emails. Set up the Content Agent for client delivery. Create a simple client onboarding Typeform.

**Week 3 (Days 15–21):** Launch email campaign. Begin LinkedIn outreach (connect with 20 local business owners per day). Follow up on all Day 1 emails. Refine audit email based on reply data.

**Week 4 (Days 22–30):** Close first 3–5 clients. Begin service delivery. Document the onboarding process for future automation. Publish first case study on the Nexora blog.

---

## 3. Venture 2: ProEcoCleaners Revival

### The Mike Cleans Model

Michael Haeri (@mikecleans on LinkedIn, Growth Cleaning at growthcleaning.com) built a remote-managed cleaning business to $40,000/month in revenue while working approximately 5 hours per week. His model, the **Growth Cleaning Protocol**, is an education and training business that teaches the system — but the underlying operational model is directly replicable. The core insight is that a cleaning business is fundamentally a logistics and communication business: matching cleaners to customers, managing schedules, collecting payments, and generating reviews. All of these functions are automatable. The only non-automatable element is the physical cleaning itself, which is performed by 1099 contractors.

The tech stack implied by his model includes a CRM (likely Jobber or Housecall Pro), automated SMS/email sequences for booking confirmations and follow-ups, and a structured cleaner onboarding process. His revenue figures ($3k in Month 1 to $40k by Month 9) are consistent with what is achievable in a high-demand metro market with strong automation and good cleaner retention.

### Business Model Redesign

ProEcoCleaners becomes a **platform business**, not a cleaning company. The platform handles all customer-facing and administrative functions; cleaners are independent contractors who receive jobs through the platform and are paid per clean. This structure keeps overhead minimal and scales linearly with demand.

Revenue is subscription-based: customers sign up for weekly, biweekly, or monthly recurring cleans. Recurring revenue is the single most important structural decision — it creates predictable cash flow, reduces CAC amortized over the customer lifetime, and enables route optimization for cleaners.

### Cleaner Sourcing Strategy

Cleaners are recruited via Indeed, local Facebook groups, and Craigslist. The vetting process is automated: applicants complete a Typeform intake (background check consent, availability, experience), receive an automated SMS with next steps, and are scheduled for a brief AI-voice screening call (via Retell AI or a similar platform). Cleaners who pass are onboarded via a structured digital packet (cleaning standards, app setup, payment instructions). Pay rate: $22–$25/hour, above the national average of $16.84/hour, to attract and retain quality contractors.

### Geographic Strategy

The recommended initial market is a single affluent suburban market with high dual-income household density and year-round demand. Top candidates based on research: **Austin, TX** (strong tech worker density, high disposable income, minimal seasonality), **Tampa, FL** (year-round market, growing population, lower competition than major metros), or **Denver, CO** (health-conscious demographic, high average household income). Launch in one market, prove the model, then expand.

### Tech Stack

| Function | Tool | Monthly Cost |
| :--- | :--- | :--- |
| Booking & scheduling | Jobber (with AI Receptionist add-on) | $99–$199/mo |
| Lead capture | Custom landing page + Twilio SMS bot | ~$30/mo (Twilio) |
| CRM | Airtable + n8n automations | $20/mo |
| Payments | Stripe Subscriptions | 2.9% + $0.30/transaction |
| Review automation | Automated SMS post-clean sequence | Included in Twilio |
| Cleaner comms | Slack or WhatsApp Business API | Free–$15/mo |
| Route optimization | Jobber built-in | Included |

### Unit Economics

| Metric | Value |
| :--- | :--- |
| Average ticket (standard clean, 3 hrs) | $180 |
| Cleaner payout (3 hrs × $22) | $66 |
| Platform supplies allowance | $10 |
| Stripe processing fee | $5.52 |
| **Gross profit per clean** | **$98.48 (54.7% margin)** |
| Customer Acquisition Cost (target) | < $40 |
| Average customer LTV (12 months, biweekly) | $2,340 |
| LTV:CAC ratio | 58.5x |

### 30-Day Relaunch Plan

**Week 1:** Build new ProEcoCleaners landing page (Claude Code). Set up Jobber account and Stripe subscriptions. Configure Twilio SMS bot for booking inquiries. Set up Airtable CRM with n8n automations for lead tracking.

**Week 2:** Launch cleaner recruitment ads on Indeed and Facebook. Begin onboarding first 3–5 cleaners. Test the full booking flow end-to-end.

**Week 3:** Launch Google Local Services Ads in target metro. Activate automated review request sequences. Set up post-clean quality check SMS to customers.

**Week 4:** Acquire first 10 recurring customers. Optimize routes. Measure CAC and adjust ad spend. Document all processes for future scale.

---

## 4. Venture 3: Polymarket Trading Bot

### Market Landscape (March 2026)

Polymarket has achieved significant scale in early 2026, recording a single-day notional trading volume of **$478 million** on March 1, 2026, and a weekly notional volume of **$5.80 billion** in late February 2026 [[1]](https://finance.yahoo.com/news/polymarket-breaks-478-million-record-193853484.html). Total February 2026 trading volume surpassed $7 billion, a 7.5-fold year-over-year increase. The platform now operates under CFTC approval as a Designated Contract Market (DCM), providing a clearer legal framework for US-based participants [[2]](https://www.regulatoryoversight.com/2025/12/cftc-approval-allows-polymarket-to-reenter-the-u-s-market/).

The critical market dynamic to understand: **simple arbitrage is dead**. The average duration of an arbitrage opportunity has shrunk to 2.7 seconds in 2026, captured almost exclusively by high-frequency bots. The viable strategies for a new entrant are AI-powered probability arbitrage (processing information faster than the market) and automated market making (providing liquidity and earning the spread).

### Strategy Framework

The bot's edge must come from information processing speed, not execution speed. The recommended approach is a **news-driven probability arbitrage** strategy focused on niche markets where AI can synthesize information faster than human traders. Specifically: geopolitical events, specific technology company announcements, and sports markets where historical data provides strong priors.

The pipeline: Grok monitors X/Twitter in real time for breaking news on target topics → Perplexity Pro synthesizes the news into a structured probability estimate → Claude Sonnet compares the AI-derived probability against the current Polymarket order book price → if the gap exceeds a threshold (e.g., 5 percentage points), the Execution Agent places a trade via the CLOB API.

### Agent Architecture

| Agent | Tool | Function | Schedule |
| :--- | :--- | :--- | :--- |
| Research Agent | Grok + Perplexity | Real-time news monitoring, probability synthesis | Continuous (24/7) |
| Analysis Agent | Claude Sonnet 3.5 | Odds calculation, edge detection | On-demand (triggered by Research Agent) |
| Execution Agent | Python + CLOB API | Order placement, position management | On-demand |
| Risk Agent | Python | Position monitoring, stop-loss, drawdown alerts | Continuous |

### Data Sources

The Polymarket API suite provides three endpoints: the **Gamma API** (market data, events), the **Data API** (user positions, trade history), and the **CLOB API** (order book, trade execution). PMXT has open-sourced a comprehensive historical dataset on Reddit [[3]](https://www.reddit.com/r/algotrading/comments/1rdhw2n/stop_paying_for_polymarket_data_pmxt_just/), eliminating the need to pay for historical data. The Kaggle Polymarket Prediction Markets Dataset provides additional backtesting material.

### P&L Scenarios

| Scenario | Monthly Capital | Target Return | Monthly P&L |
| :--- | :--- | :--- | :--- |
| Conservative | $10,000 | 3–5% | $300–$500 |
| Moderate | $25,000 | 5–8% | $1,250–$2,000 |
| Aggressive | $50,000 | 8–15% | $4,000–$7,500 |

These return estimates are consistent with documented bot performance in the 2026 market environment [[4]](https://medium.com/illumination/beyond-simple-arbitrage-4-polymarket-strategies-bots-actually-profit-from-in-2026-ddacc92c5b4f). The aggressive scenario requires sophisticated strategy development and carries meaningful drawdown risk.

### Infrastructure

The bot must run on a **Cloud VPS**, not a Mac Mini. Mac Mini vulnerabilities (power outages, forced updates, home network instability) are unacceptable for financial execution. Recommended: DigitalOcean Droplet ($24/mo, 2 vCPU, 4GB RAM) or Hetzner Cloud (€4.51/mo for entry-level). Both provide 99.9% uptime SLAs. The VPS runs the Python bot 24/7, with all API keys stored in environment variables (never in code).

### Legal Considerations

Polymarket's CFTC approval as a DCM provides a legal framework, but the regulatory landscape for automated trading bots on prediction markets is still evolving. The CFTC has signaled imminent rulemaking on prediction markets [[5]](https://www.sidley.com/en/insights/newsupdates/2026/02/us-cftc-signals-imminent-rulemaking-on-prediction-markets). Recommended: consult a US financial regulatory attorney before deploying capital above $10,000. Insider trading rules now apply to Polymarket [[6]](https://www.kucoin.com/news/flash/polymarket-publishes-2026-insider-trading-rules-with-cftc-backed-compliance-framework) — ensure the bot does not trade on non-public information.

---

## 5. Venture 4: trpk.ai — Personal Brand & AI Expert Positioning

### Existing Infrastructure

The trpk.ai website already exists as a fully designed, production-ready React 19 + Vite application with a sophisticated "Granite Editorial" design system. The site is deployed to GitHub Pages at `trpk.ai` via the `trpk-ai/trpk-ai-website` repository. The design uses Sora (headings), Instrument Sans (body), and IBM Plex Mono (accents), with a warm off-white/charcoal/teal color palette inspired by Yosemite National Park. This is a significant head start — the 30-day focus for this venture is **content activation and distribution**, not rebuilding.

### Remaining TODOs (Technical)

The HANDOFF.md in the repository documents the following outstanding items that must be resolved before the site is fully operational: replace all Calendly placeholder links with a real booking URL, add real social media links (LinkedIn, GitHub, X), confirm GoDaddy DNS records are propagated correctly, enable HTTPS enforcement in GitHub Pages settings, and consider adding a Speaking page. These are all sub-2-hour tasks.

### htek.dev Analysis

htek.dev (Hector Flores, @htekdev) is the benchmark for this positioning. Key observations: the site leads with a single, clear identity handle (`@htekdev`) rather than a full name, creating a memorable brand anchor. The tagline "Inspiring a New Era of Software Through AI" is aspirational but specific. The site is built with Astro for performance. Navigation includes "Agentic DevOps" and "Consulting" as distinct service pages — a model worth replicating for trpk.ai. The dark, starfield aesthetic contrasts with trpk.ai's warm Yosemite design, which is a meaningful differentiation.

### Personal Brand Positioning

The thesis established in the HANDOFF.md is strong and should be the foundation of all content: *"Software engineering is becoming a human-agent partnership. The organizations that architect for this will define the next era."* This is a differentiated position — it is not "AI will replace developers" (oversaturated) nor "AI is just a tool" (undersells the transformation). It is a specific, defensible point of view held by someone with 15+ years of engineering leadership experience inside the Microsoft ecosystem.

The three content pillars that flow from this thesis are: (1) **AI Agent Architecture** — how to design, deploy, and manage agent systems; (2) **Autonomous Business Building** — the 5-venture portfolio as a live case study in building AI-operated companies; (3) **Platform Engineering** — the infrastructure and systems thinking that makes agentic AI reliable at scale.

### LinkedIn Content Calendar (30 Days)

The following calendar is designed to build authority, generate engagement, and drive inbound leads for the AI Agency (Venture 1) and advisory services.

| Day | Post Type | Topic |
| :--- | :--- | :--- |
| Day 1 | Manifesto | "I'm building 5 businesses in 30 days with AI agents. Here's the thesis." (Build-in-public launch) |
| Day 3 | Technical | "The 3-agent stack I use to run a business while I sleep" (OpenClaw + n8n + Claude) |
| Day 5 | Data/Insight | "Polymarket hit $478M in a single day. Here's what that means for AI trading." |
| Day 7 | Hot Take | "The AI agency market is broken. Here's why $25k minimums are killing SMB adoption." |
| Day 10 | Build-in-Public | "Week 1 update: [Nexora AI] first client signed. Here's what worked." |
| Day 12 | Tutorial | "How to configure an overnight batch agent in OpenClaw (step-by-step)" |
| Day 14 | Case Study | "How I replaced a $2,400/mo VA with a $50/mo AI agent" |
| Day 17 | Hot Take | "Astro vs Next.js for personal brand sites in 2026: the honest comparison" |
| Day 19 | Build-in-Public | "Week 2 update: ProEcoCleaners first 5 recurring customers booked." |
| Day 21 | Technical | "The Polymarket bot architecture: 4 agents, 1 VPS, zero sleep" |
| Day 24 | Data/Insight | "I analyzed 50 AI agency websites. Here's what separates $500/mo from $5,000/mo clients." |
| Day 26 | Build-in-Public | "Week 3 update: MNQ AutoPilot live on VPS. First week P&L." |
| Day 28 | Tutorial | "The cold email sequence that closed 5 SMB clients in 2 weeks" |
| Day 30 | Manifesto | "30-day update: 5 ventures, real numbers, what I'd do differently." |

### Network Strategy

The highest-leverage connections to pursue in the first 30 days are: AI agency founders on LinkedIn (search "AI automation agency founder"), n8n and Make.com community leaders, Polymarket traders on X/Twitter, and engineering leaders at Microsoft and adjacent companies (natural audience for the platform engineering content pillar). Target 20 new connection requests per day with a personalized note referencing a specific piece of their content.

---

## 6. Venture 5: MNQ AutoPilot Enhancement

### Current State of MNQ Algo Trading

Retail algorithmic trading for MNQ (Micro E-mini Nasdaq) futures in March 2026 is characterized by high volatility, strong intraday trends, and a competitive landscape where most retail strategies fail due to over-optimization and poor infrastructure. The strategies with documented profitability among retail traders are: scalping on 1-minute charts using VWAP and 8/21 EMA, mean reversion on 5-minute charts using RSI and Bollinger Bands, and momentum trading on 15-minute charts using MACD and ADX. The common failure mode is curve-fitting backtests to historical data, producing strategies that fail in live markets.

### System Hardening Plan

The existing codebase requires four categories of hardening before it is production-ready:

**Error Handling and Recovery.** Every broker API call must be wrapped in try/except blocks with specific handling for network timeouts, authentication failures, and order rejection errors. Implement exponential backoff for reconnection attempts (1s, 2s, 4s, 8s, max 60s). Log every error with full context (timestamp, position state, order details) to a structured JSON log file.

**Kill Switch and Drawdown Breaker.** Implement a hard-coded maximum daily loss limit (recommended: 2% of account equity). When this limit is breached, the system must: cancel all open orders, close all open positions at market, disable all new order submission, and send an SMS alert via Twilio. This is non-negotiable for live trading.

**Position Reconciliation.** At startup and every 60 seconds, the system must query the broker API for actual open positions and compare against the internal state. Any discrepancy triggers an alert and halts new order submission until resolved manually.

**Audit Trail.** Every decision (signal generated, order placed, order filled, position closed) must be logged with a unique trade ID, timestamp, price, size, and the specific signal values that triggered the decision. This enables post-trade analysis and strategy improvement.

### Monitoring Dashboard

A lightweight real-time dashboard using **Streamlit** (Python, deployable in minutes) is the fastest path to production monitoring. Key metrics to display: current open positions and unrealized P&L, today's realized P&L and drawdown, system uptime and last heartbeat timestamp, API connection status, and a rolling 30-day equity curve. The dashboard runs on the same VPS as the trading bot and is accessible via a password-protected URL.

### Infrastructure Decision

The Mac Mini is unsuitable for 24/7 financial execution. The recommended infrastructure is a **DigitalOcean Droplet** (2 vCPU, 4GB RAM, $24/mo) located in a US data center. This provides 99.9% uptime, a stable IP address for broker API whitelisting, and complete isolation from the home network. The trading bot runs as a `systemd` service that automatically restarts on failure.

### Risk Management Framework

| Rule | Value | Rationale |
| :--- | :--- | :--- |
| Max daily loss | 2% of account equity | Industry standard for retail futures |
| Max position size | 1 contract per $2,000 equity | Limits leverage to manageable levels |
| Max open positions | 2 simultaneously | Prevents correlation risk |
| Drawdown halt | 5% from equity peak | Triggers manual review before resuming |
| Overnight positions | None (flat by 4:00 PM ET) | Avoids gap risk on MNQ |

### Enhancement Roadmap (Days 31–90)

After the hardening phase is complete, the enhancement roadmap focuses on three areas: (1) multi-strategy support with a strategy selector that allocates capital based on current market regime (trending vs. mean-reverting); (2) ML signal integration using sentiment data from Grok and order flow analysis; and (3) a paper trading toggle that allows new strategies to run in simulation alongside the live system before capital is committed.

---

## 7. Resource Allocation Matrix

Every subscription should be working toward at least one venture every day. The following matrix maps each tool to its primary function across all five ventures.

| Tool | V1: Agency | V2: Cleaners | V3: Polymarket | V4: trpk.ai | V5: MNQ |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Pro/Max** | Strategy, audits, content | Business model, copy | Probability analysis | Articles, brand strategy | Architecture review |
| **Claude Code** | Client site builds | Custom booking system | Bot logic enhancements | Site TODOs | Trading code hardening |
| **ChatGPT Plus** | DALL-E graphics, ADA | Marketing visuals | Data analysis | LinkedIn content drafts | P&L visualization |
| **Perplexity Pro** | Competitor/client research | Metro market research | Real-time news intel | Competitor research | Strategy research |
| **Grok / X** | Social monitoring | Local SEO intel | Sentiment analysis | Engagement, networking | Market sentiment |
| **OpenClaw** | Agent orchestration (3 agents) | Booking/SMS bot | Trading execution | Content automation | System monitoring |
| **Manus** | Planning, file automation | Process docs | Report generation | Site research | System documentation |
| **GitHub Copilot** | All coding tasks | All coding tasks | All coding tasks | All coding tasks | All coding tasks |
| **n8n** | Client delivery workflows | Booking automation | Alert pipelines | Newsletter automation | Trade logging |

**Daily Subscription Burn Checklist:**
- Perplexity Pro: Minimum 5 deep searches per day (resets daily — unused = wasted).
- Claude Pro/Max: All strategy and content work routes here first.
- ChatGPT Plus: DALL-E for any visual assets, ADA for data analysis tasks.
- Grok: Morning market/social scan for Polymarket and MNQ sentiment.
- OpenClaw: Overnight agents must be queued every evening before midnight.

---

## 8. 30-Day Calendar

| Days | Primary Focus | Key Deliverables |
| :--- | :--- | :--- |
| **1–3** | Infrastructure | Secure `nexora.ai` domain. Provision Cloud VPS (DigitalOcean) for MNQ and Polymarket bots. Resolve trpk.ai TODOs (Calendly, social links, DNS). |
| **4–7** | Core Builds | Build Nexora landing page (Claude Code → Vercel). Set up Jobber for ProEcoCleaners. Implement MNQ kill switch. Configure Twilio SMS bot for ProEco. |
| **8–10** | Automation | Configure n8n Nexora lead-gen pipeline. Build Polymarket Research Agent (Grok + Perplexity integration). Set up ProEco Airtable CRM. |
| **11–14** | Content & Launch | Publish trpk.ai Day 1 LinkedIn post. Launch Nexora cold email campaign (200 emails). Post ProEco cleaner recruitment ads. |
| **15–21** | Acquisition | Follow up on Nexora leads. Interview and onboard first ProEco cleaners. Deploy Polymarket bot to paper trading. Publish 3 LinkedIn posts. |
| **22–25** | Refinement | Analyze Nexora email reply data, optimize subject lines. Review MNQ paper trading logs. Launch ProEco Google Local Services Ads. |
| **26–30** | First Revenue | Close first 3–5 Nexora clients. Book first 10 ProEco recurring customers. Move Polymarket/MNQ to live trading (small size). Publish 30-day LinkedIn update. |

---

## 9. Weekly Milestones

**End of Week 1:** All domains secured. Cloud VPS provisioned and configured. Nexora and trpk.ai landing pages live. MNQ kill switch and error handling implemented. ProEco Jobber account active with Stripe connected.

**End of Week 2:** All automation pipelines functional (n8n for Nexora, Twilio bot for ProEco, Polymarket Research Agent running). Cold email campaign launched with 200+ emails sent. ProEco cleaner recruitment ads live.

**End of Week 3:** First Nexora leads in pipeline (target: 20+ replies). First ProEco cleaners onboarded (target: 3–5). Polymarket bot running stably in paper trading. MNQ bot deployed to VPS. 6 LinkedIn posts published on trpk.ai.

**End of Week 4:** First revenue generated — minimum 3 Nexora clients closed ($2,400+ MRR) and 10 ProEco recurring customers booked ($1,800+ MRR). Trading bots live with strict risk limits. trpk.ai fully active with 10+ LinkedIn posts and first inbound advisory inquiry.

---

## References

[1] Polymarket Breaks $478 Million Record — Yahoo Finance: https://finance.yahoo.com/news/polymarket-breaks-478-million-record-193853484.html

[2] CFTC Approval Allows Polymarket to Reenter the U.S. Market: https://www.regulatoryoversight.com/2025/12/cftc-approval-allows-polymarket-to-reenter-the-u-s-market/

[3] PMXT Open-Source Polymarket Data — Reddit r/algotrading: https://www.reddit.com/r/algotrading/comments/1rdhw2n/stop_paying_for_polymarket_data_pmxt_just/

[4] Beyond Simple Arbitrage: 4 Polymarket Strategies Bots Profit From in 2026 — Medium: https://medium.com/illumination/beyond-simple-arbitrage-4-polymarket-strategies-bots-actually-profit-from-in-2026-ddacc92c5b4f

[5] U.S. CFTC Signals Imminent Rulemaking on Prediction Markets — Sidley: https://www.sidley.com/en/insights/newsupdates/2026/02/us-cftc-signals-imminent-rulemaking-on-prediction-markets

[6] Polymarket Publishes 2026 Insider Trading Rules — KuCoin: https://www.kucoin.com/news/flash/polymarket-publishes-2026-insider-trading-rules-with-cftc-backed-compliance-framework

[7] Growth Cleaning — Michael Haeri's Remote Cleaning Business System: https://growthcleaning.com

[8] AI Agency Competitive Landscape — DesignRush: https://news.designrush.com/best-ai-agencies-to-hire-2026

[9] Jobber Pricing and AI Receptionist Feature: https://www.getjobber.com/pricing/

[10] trpk.ai Website Repository: https://github.com/trpk-ai/trpk-ai-website

[11] htek.dev — Hector Flores Personal Brand Reference: https://htek.dev
