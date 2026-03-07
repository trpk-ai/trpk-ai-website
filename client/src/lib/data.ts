export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  tags?: string[];
  content: string;
}

export interface Engagement {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}

export const engagements: Engagement[] = [
  {
    number: "01",
    title: "Advisory",
    tagline: "For CTOs, VPs, and engineering leaders navigating the shift",
    description:
      "You're making bets on agentic AI, platform redesign, or org-wide transformation. I've made those bets — as a CTO and senior engineering leader — and now from inside the ecosystem shaping the tools. I help you pressure-test your strategy before you commit headcount and budget.",
    details: [
      "AI transformation strategy & readiness assessment",
      "Platform engineering for the agentic era",
      "Multi-agent architecture & governance design",
      "FinOps embedded in platform (GPU, agent cost models)",
    ],
  },
  {
    number: "02",
    title: "Executive Coaching & Interview Prep",
    tagline: "For engineering leaders and engineers leveling up",
    description:
      "The skills that got you to Director won't get you to VP. The system design that passes Senior interviews won't pass Staff+. I coach engineering leaders through career transitions and prepare engineers for the system design interviews that matter — teaching the architectural thinking that distinguishes Staff from Senior.",
    details: [
      "Director → VP / VP → CTO leadership transitions",
      "Building and scaling engineering organizations",
      "Staff+ system design interview prep (distributed systems, AI-era architecture)",
      "Mock interviews with structured, actionable feedback",
      "Technical vision and executive communication",
    ],
  },
  {
    number: "03",
    title: "Speaking & Workshops",
    tagline: "For conferences, offsites, and leadership teams",
    description:
      "I speak on the intersection of AI, platform engineering, and engineering leadership. Not vendor pitches — real perspectives shaped by building platforms for 15 years and now watching the agentic revolution unfold from the inside.",
    details: [
      "Platform engineering in the agentic AI era",
      "The human-agent engineering partnership",
      "FinOps for AI: governing the GPU economy",
      "Building engineering cultures that ship",
    ],
  },
];

export const articles: Article[] = [
  {
    slug: "platforms-for-agents-not-portals-for-humans",
    title: "Stop Building Portals for Humans. Start Building Platforms for Agents.",
    excerpt:
      "I spent a decade building internal developer platforms. The next platform I'd build wouldn't have a UI. Here's why the interaction stack is collapsing and what platform teams should build instead.",
    category: "Technology",
    date: "2026-03-06",
    readTime: "12 min",
    featured: true,
    tags: ["Platform Engineering", "Agentic AI", "IaC"],
    content: `I spent a decade building internal developer platforms. Portals, golden paths, self-service workflows, Backstage plugins — the whole stack designed to translate human intent into machine-safe API calls. Every layer existed because humans don't naturally speak API schemas.

AI agents do.

## The Stack Is Collapsing

The traditional model placed Infrastructure as Code in a multi-layer intent-to-execution stack. Human intent gets translated through an interaction layer into IaC abstractions, which drive provider APIs. These layers exist to enforce correctness, translate intent, and compensate for the gap between what humans want and what machines need.

AI agents fundamentally change this flow. Modern agents ingest natural language intent, reason over API schemas, generate and validate IaC, and apply changes directly via provider APIs — all while enforcing guardrails inline. The result: Human intent → Agent (reasoning + policy) → IaC / APIs.

The interaction layer — the thing platform teams spent years building — is being short-circuited.

## Modules Become Knowledge

This is the shift that matters most. Terraform modules, Bicep templates, and Helm charts are evolving from human-authored abstractions into agent-consumable patterns that encode architectural standards and preferred defaults. The agent selects them automatically based on context.

Golden paths become machine-readable blueprints. A reference architecture diagram for a workload type becomes a machine-consumable blueprint — the agent selects the pattern, fills in parameters, generates repos and config, and opens a PR with diagram-linked justification.

## FinOps Is Now a Platform Concern

With 98% of FinOps practitioners now managing AI spend (up from 31% two years ago), cost governance can no longer live in a separate dashboard. GPU utilization is the new frontier. Platform teams must embed cost attribution, spend alerts, and unit economics directly into the developer workflow.

The organizations that get this right treat FinOps as a platform capability, not a finance initiative. Cost becomes another dimension of quality alongside performance, reliability, and security.

## What I'd Build Now

Four things matter: agent-consumable infrastructure patterns, policy-as-code that agents can reason over, embedded cost governance at the platform layer, and continuous drift remediation where agents detect, propose, and apply fixes with human approval at high-risk boundaries.

The teams that win will be the ones that stop building portals for humans and start building platforms for agents — while keeping humans firmly in the approval loop.`,
  },
  {
    slug: "the-new-developer-loop",
    title: "The Developer Loop Just Changed. Most Leaders Haven't Noticed.",
    excerpt:
      "You open an issue before lunch. By the time you're back, there's a pull request waiting. The developer loop is no longer write → test → deploy. It's delegate → review → approve.",
    category: "Technology",
    date: "2026-03-01",
    readTime: "10 min",
    featured: true,
    tags: ["GitHub Copilot", "Agentic Coding", "Developer Productivity"],
    content: `Something fundamental shifted in how developers work. GitHub Copilot coding agent now operates in the background — fixing bugs, adding tests, cleaning up debt — and comes back with a pull request when it's done. While you write code in your editor with Copilot in real time, the coding agent handles the work you've delegated.

This isn't incremental. This is a different loop.

## The Model Picker Changes Everything

The Agents panel now includes a model picker. Use a faster model for straightforward work like adding unit tests. Upgrade to a more capable model for complex refactors or integration tests with real edge cases. Leave it on auto if you'd rather not think about it.

This is the first time developers have had granular control over the cost-capability trade-off in AI-assisted coding. It matters more than it sounds — because it means engineering leaders need to think about AI tooling budgets the same way they think about cloud budgets.

## Self-Review Before You See It

Copilot coding agent now reviews its own changes using Copilot code review before opening the pull request. It gets feedback, iterates, and improves the patch. By the time you're tagged for review, someone already went through it.

## Custom Agents That Follow Your Process

A short prompt leaves a lot to judgment. Custom agents let you codify your team's process. Create a file under .github/agents/ and define a specific approach. A performance optimizer agent can benchmark first, make the change, then measure the difference before opening a PR.

## What This Means for Engineering Leaders

The developer loop is no longer write → test → deploy. It's delegate → review → approve. The engineers who thrive in this model are the ones who can decompose problems into clear, delegatable units and review agent output with the same rigor they'd apply to a junior engineer's PR.

The organizations that adapt fastest will be the ones that treat this as a platform investment, not a developer perk. And the leaders who understand this shift will build teams that are 10x more effective — not because the engineers are 10x better, but because the system around them is.`,
  },
  {
    slug: "multi-agent-systems-production",
    title: "Multi-Agent Frameworks: Why Orchestration Matters More Than Intelligence",
    excerpt:
      "Most agentic AI demos break in production. I've seen the architecture pattern that doesn't — and it has nothing to do with smarter models.",
    category: "Technology",
    date: "2026-02-22",
    readTime: "10 min",
    featured: true,
    tags: ["Multi-Agent Systems", "Architecture", "AI"],
    content: `The demo works perfectly. The agent reasons, calls tools, and returns a polished answer. Then you deploy it to production and everything falls apart.

I've watched this pattern repeat across dozens of organizations. The problem is never intelligence. It's always orchestration.

## The Demo-to-Production Gap

Single-agent demos succeed because they operate in controlled environments with predictable inputs. Production systems face adversarial inputs, concurrent users, rate limits, partial failures, and the combinatorial explosion of real-world edge cases.

Multi-agent architectures solve this by decomposing complex tasks into specialized agents with clear boundaries. But the real insight isn't about having multiple agents — it's about the harness that controls them.

## The Orchestration Layer

The most critical component in any multi-agent system isn't an agent at all. It's the orchestrator — the deterministic layer that routes tasks, manages state, enforces guardrails, and handles failures. Think of it like a conductor. Individual musicians have specialized skills. But without coordination, you get noise instead of music.

Claude Code demonstrated this with agent teams: a supervisor agent coordinating specialized subagents, achieving 80.8% on SWE-bench. The architecture matters more than the model.

## The Harness Pattern

A production-grade agent harness provides five capabilities: centralized configuration, unified observability, cost attribution (know which agent is spending what), circuit breakers (automatically disable misbehaving agents), and audit trails.

Gartner forecasts that by end of 2026, 40% of enterprise applications will incorporate task-specific AI agents — up from less than 5% in 2024. The organizations shipping reliable agentic AI are the ones that treat the harness as first-class architecture.

## Start With Two Agents

Start with two agents and one orchestrator. Get the orchestration pattern right before adding complexity. Invest in the boring infrastructure — logging, monitoring, rollback — before the exciting capabilities. This is the same lesson I learned building platforms for a decade: the boring parts are the parts that matter.`,
  },
  {
    slug: "agentic-sdlc-engineers-as-orchestrators",
    title: "Engineers Are Becoming Orchestrators. That's Not a Demotion.",
    excerpt:
      "In 2026, agentic AI runs first drafts of the entire SDLC. The engineers who resist this shift will be outpaced by the ones who embrace it.",
    category: "Technology",
    date: "2026-02-15",
    readTime: "9 min",
    tags: ["Agentic AI", "SDLC", "Developer Productivity"],
    content: `Something fundamental shifted in software development during 2025. For the first time, AI agents moved beyond helpful assistants to autonomous collaborators capable of shipping real features. In 2026, the systemic effects are reconfiguring the entire software development lifecycle.

I've spent 15 years building and scaling engineering organizations. The shift happening now is bigger than cloud was. And most leaders are underestimating it.

## From Code Completion to Task Completion

The evolution happened in three stages. First, autocomplete — predicting the next line. Then, agent mode — understanding intent and editing across files. Now, autonomous agents — receiving an issue, analyzing the codebase, implementing the change, running tests, and opening a pull request.

GitHub Copilot coding agent for Jira exemplifies this: assign a Jira issue to Copilot, get an AI-generated draft PR. GitHub Agentic Workflows takes it further — describe in natural language some process you want, and Copilot creates the underlying automation.

## The New Role of the Engineer

Engineers aren't being replaced. They're evolving into strategic orchestrators who design systems while autonomous agents handle implementation. The most valuable skill is no longer writing code — it's decomposing problems into clear, delegatable units and reviewing agent output with rigor.

This isn't a demotion. It's an elevation. The engineer's job becomes more architectural, more strategic, more impactful. But it requires a different mindset — and most engineering cultures haven't caught up.

## What This Means for Organizations

Engineering leaders need to rethink how they measure productivity. Lines of code and commit frequency become meaningless when agents generate most of the code. What matters is: time from issue to merged PR, quality of agent-generated output, and the ratio of human review time to agent work time.

The organizations that adapt fastest will be the ones that treat agentic tooling as a platform investment, not a developer perk.`,
  },
  {
    slug: "system-design-staff-plus-thinking",
    title: "The Thinking That Separates Staff Engineers From Senior Ones",
    excerpt:
      "After coaching fifty+ engineers through Staff+ interviews, the pattern of failure is remarkably consistent. It's never about technical knowledge.",
    category: "Strategy",
    date: "2026-02-10",
    readTime: "8 min",
    tags: ["Interviews", "System Design", "Career"],
    content: `I've coached over fifty engineers through Staff+ system design interviews. The pattern of failure is remarkably consistent: they design systems that work, but they don't demonstrate the thinking that distinguishes a Staff engineer from a Senior one.

## The Shift in Evaluation

Senior system design interviews evaluate whether you can build a working system. Staff+ interviews evaluate whether you can make the right trade-offs for a specific business context. The system needs to work, obviously — but that's table stakes.

## What Interviewers Actually Look For

At Staff+ level, interviewers evaluate four dimensions: business context awareness (why this system exists and what constraints the business imposes), trade-off articulation (not just what you chose, but what you rejected and why), failure mode thinking (how the system degrades gracefully under stress), and evolution planning (how the architecture adapts as requirements change).

## The AI-Era Twist

System design interviews in 2026 increasingly include AI components. You might be asked to design a RAG pipeline, an agent orchestration system, or a real-time inference platform. The fundamentals haven't changed — distributed systems are distributed systems — but the vocabulary has expanded.

## The Framework

I teach a four-phase approach: clarify (spend 5 minutes understanding the business context), design (build in layers starting with the data model), evaluate (proactively identify weaknesses and propose mitigations), and extend (show how the system evolves as requirements change).

## Common Mistakes

The most common mistake is jumping to implementation details before establishing strategic intent. The second is treating non-functional requirements as an afterthought. At Staff+ level, reliability, observability, and cost are first-class design constraints — not things you mention at the end if there's time.`,
  },
  {
    slug: "walking-meetings-granite-trails",
    title: "The Case for Walking Meetings",
    excerpt:
      "How replacing conference rooms with granite trails changed my thinking, my health, and the quality of my conversations.",
    category: "Health",
    date: "2026-02-05",
    readTime: "5 min",
    tags: ["Health", "Productivity", "Leadership"],
    content: `Three years ago, I started taking meetings on foot. Not all of them — just the ones that involve brainstorming, difficult conversations, or strategic thinking. The results have been remarkable.

## The Science

Stanford research shows that walking increases creative output by an average of 60%. But the benefits go beyond creativity. Walking side-by-side removes the confrontational geometry of sitting across a table. It creates a shared forward momentum that subtly shifts conversations from adversarial to collaborative.

## The Practice

I keep it simple. One-on-ones and brainstorming sessions happen on foot. Status updates and technical reviews stay in conference rooms. The key is matching the meeting format to the type of thinking required.

## The Unexpected Benefits

Beyond better ideas and better conversations, walking meetings have forced me to be more intentional about which meetings actually need to happen. If a topic isn't worth walking for, it's probably not worth meeting about at all.

My Yosemite trips taught me this: the best thinking happens when your body is moving and your mind is free. The office version of that insight is a walking meeting.`,
  },
  {
    slug: "finops-belongs-in-platform",
    title: "Why FinOps Belongs Inside Your Platform, Not a Dashboard",
    excerpt:
      "98% of FinOps practitioners now manage AI spend. GPU costs are the new frontier. Cost governance must be a platform capability, not a finance initiative.",
    category: "Technology",
    date: "2026-01-28",
    readTime: "8 min",
    tags: ["FinOps", "Platform Engineering", "AI Costs"],
    content: `Every architecture decision is a financial decision. That Kubernetes cluster running at 15% utilization? That's not a technical problem — it's a business problem wearing a technical disguise. And with AI workloads, the stakes are exponentially higher.

## The AI Cost Explosion

Training GPT-style models can cost $5M+. A Reddit thread that went viral last month claimed 70% of AI agents in production are ROI-negative. Whether or not that number is precise, the directional truth is clear: AI spend is growing faster than AI value in most organizations.

The 2026 State of FinOps report confirms the shift: 98% of FinOps practitioners now manage AI spend, up from 31% two years ago. FinOps teams are gaining clout as AI costs climb, and the discipline is shifting "left and up" — proactive, executive-aligned technology value governance.

## Why It Belongs in the Platform

FinOps fails when it's a separate dashboard that engineers never check. It succeeds when cost awareness is embedded in the developer workflow — the same workflow that platform engineering owns.

Platform teams should embed three things: cost attribution at the agent level (which agent is spending what), GPU utilization monitoring as a first-class metric, and spend guardrails that trigger before budgets are exceeded, not after.

## Unit Economics for AI

The most powerful FinOps metric isn't total cloud spend. It's cost per inference, cost per agent task, or cost per resolved issue. Unit economics connect engineering decisions to business outcomes in a language that executives understand and engineers can act on.

## The Cultural Shift

FinOps succeeds when engineers see cost as another dimension of quality — alongside performance, reliability, and security. Having spent years building platforms, I can tell you: the best FinOps practitioners are engineers who learned to speak finance, not finance people who learned to read AWS bills.`,
  },
  {
    slug: "consumer-ai-products-2026",
    title: "Consumer AI Products That Will Actually Matter in 2026",
    excerpt:
      "Cutting through the hype to identify the AI products that will genuinely change how we live and work this year.",
    category: "Consumer Products",
    date: "2026-01-20",
    readTime: "7 min",
    tags: ["AI", "Consumer Tech", "Predictions"],
    content: `Every January brings a flood of AI predictions. Most are wrong. Here are the consumer AI shifts I'm genuinely excited about — and why they matter beyond the hype.

## AI Agents That Actually Work

We've moved past chatbots. The consumer AI products shipping now can book travel, manage email, and coordinate schedules across multiple services. The key differentiator isn't intelligence — it's reliability. The products that win will be the ones that work correctly 99% of the time, not the ones that work brilliantly 80% of the time.

## The Privacy Premium

Consumers are increasingly willing to pay for privacy. Products that offer genuine data sovereignty — not just privacy theater — are finding eager markets. This is especially true in health tech, where the sensitivity of the data makes privacy a feature, not a constraint.

## On-Device Intelligence

The most interesting consumer AI products are the ones that run locally. On-device models eliminate latency, protect privacy, and work offline. Apple's approach — powerful models that never leave your device — is setting the standard that others will follow.

## What I'm Watching

The intersection of AI and hardware is where the most interesting consumer products will emerge. Devices designed from the ground up for AI interaction — not smartphones with AI bolted on — will define the next computing paradigm.`,
  },
];

export const categories = [
  "All",
  "Technology",
  "Strategy",
  "Health",
  "Consumer Products",
];

export function formatDate(dateString: string): string {
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === "All") return articles;
  return articles.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}
