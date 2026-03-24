# Multi-Account State Architecture & App Routing Matrix
**Pavan Tallapragada | March 2026**

---

## 1. The "State in Code" Architecture

The core challenge of managing multiple AI accounts (Claude Pro, ChatGPT Plus, Perplexity, Gemini, etc.) across different users on the same Mac is **context fragmentation**. If Agent A starts a task in Account 1, and Agent B needs to finish it in Account 2, the context is lost unless the state is externalized.

The solution is a **Stateful Context Persistence Architecture**. The AI models must be treated as stateless compute engines. The "memory" of the venture lives entirely in a structured file system on your Mac, which any agent can read from and write to.

### The Master State Directory
On your Mac, create a master directory: `~/Empire_State/`. Inside, create a folder for each venture. Every venture folder contains exactly three files that dictate the state:

1. `context.md` — The permanent knowledge base (brand voice, target audience, business model). Read-only for agents.
2. `state.json` — The current operational status (e.g., `{"last_email_sent": "2026-03-24", "current_phase": "lead_gen", "active_clients": 3}`). Agents read this to know where they are, and update it when they finish a task.
3. `working_memory.txt` — The scratchpad. If an agent is halfway through drafting a blog post and runs out of credits, it dumps the draft here. The next agent reads this file to resume.

### The Handoff Protocol
When you switch from Account A (e.g., Claude Pro) to Account B (e.g., ChatGPT Plus) because of rate limits, your prompt to Account B is always the same:

> *"Read `~/Empire_State/v1_nexora/state.json` to understand current status. Read `working_memory.txt` to see where the last agent stopped. Resume the task and update `state.json` when complete."*

This ensures zero context loss, regardless of which LLM or account you are using.

---

## 2. Per-Venture App Routing Matrix

To maximize your monthly use-it-or-lose-it credits across multiple accounts, you must route tasks based on the specific strengths of each model, rather than using one model for everything.

### Venture 1: Nexora AI (Agency)
*   **Strategy & Copywriting:** Claude Pro (Sonnet 3.5). Claude is vastly superior at writing natural, non-cringey sales copy and cold emails.
*   **Client Research:** Perplexity Pro. Use this to deep-dive into a specific client's industry before pitching them.
*   **Website Builds:** Claude Code.
*   **Lead Gen Automation:** n8n + OpenClaw (using cheap API credits like Haiku or Gemini Flash for bulk processing).

### Venture 2: ProEcoCleaners
*   **Local Market Research:** Perplexity Pro. (e.g., "What are the average house cleaning rates in Tampa, FL in 2026?")
*   **Ad Creative & Graphics:** ChatGPT Plus (DALL-E 3). Use this to generate Facebook ad images of clean homes.
*   **Booking Bot Logic:** Claude Pro. Use Claude to design the conversational flow for the Twilio SMS bot.
*   **Skool RAG Tutor:** Local Qwen2.5-72B (via Ollama). This handles all queries about the Home Service Academy course material.

### Venture 3: Polymarket Bot
*   **Real-Time Sentiment:** Grok (X Premium). Grok has the best real-time access to the Twitter firehose for breaking news.
*   **Probability Synthesis:** Perplexity Pro. Use this to cross-reference Grok's sentiment with actual news articles.
*   **Trading Logic & Python:** GitHub Copilot + Claude Code.
*   **Data Analysis:** ChatGPT Plus (Advanced Data Analysis). Upload the Polymarket historical CSVs here to find edge cases.

### Venture 4: trpk.ai (Personal Brand)
*   **LinkedIn Content:** Claude Pro. Claude writes the best thought-leadership content that doesn't sound AI-generated.
*   **Site Updates:** Claude Code.
*   **Industry Research:** Perplexity Pro.

### Venture 5: MNQ AutoPilot
*   **Code Hardening:** GitHub Copilot + Claude Code.
*   **Log Analysis:** ChatGPT Plus (Advanced Data Analysis). Upload your JSON trading logs here to visualize drawdowns and win rates.
*   **Market Regime Detection:** Grok.

### Venture 6: Personal OS
*   **File Sorting Script:** Claude Code.
*   **Financial PDF Extraction:** Local Qwen2.5-72B. (Never upload financial PDFs to OpenAI or Anthropic).
*   **Gmail Triage:** n8n + Claude Haiku API.

---

## 3. Account Rotation Strategy

If you have multiple accounts (e.g., two ChatGPT Plus accounts, or a personal and a business Claude Pro account), you must rotate them to avoid hitting message caps during deep work blocks.

**The "Shift Work" Model:**
*   **Morning Shift (6 AM - 12 PM):** Account A (Primary). Used for heavy lifting, strategy, and complex coding.
*   **Afternoon Shift (12 PM - 6 PM):** Account B (Secondary). Used when Account A hits its message limit. Because state is saved in `~/Empire_State/`, Account B picks up seamlessly.
*   **Night Shift (12 AM - 6 AM):** API Accounts (OpenClaw/n8n). These run batch jobs while you sleep using cheap models (Haiku, Gemini Flash).

By strictly enforcing the `state.json` architecture, the specific account or model executing the task becomes irrelevant. The system is the business; the AI is just the interchangeable engine powering engine.
