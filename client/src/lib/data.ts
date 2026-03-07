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

export interface Service {
  number: string;
  title: string;
  description: string;
  outcomes: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "AI Transformation & Agentic Systems",
    description:
      "From Copilot rollouts to multi-agentic architectures — helping organizations move past pilots into production-grade AI that compounds business value.",
    outcomes: [
      "Multi-agent framework design",
      "Copilot enterprise strategy",
      "AI governance & guardrails",
    ],
  },
  {
    number: "02",
    title: "Platform Engineering",
    description:
      "Building internal developer platforms that eliminate toil, reduce cognitive load, and turn infrastructure into a competitive advantage. Golden paths, self-service, developer portals.",
    outcomes: [
      "IDP architecture & golden paths",
      "Developer portal strategy",
      "DORA metrics & SDLC optimization",
    ],
  },
  {
    number: "03",
    title: "FinOps & Cloud Optimization",
    description:
      "Bringing financial accountability to cloud operations. Cost visibility, allocation models, and optimization strategies that align engineering decisions with business outcomes.",
    outcomes: [
      "Cloud cost visibility frameworks",
      "FinOps operating model design",
      "Unit economics & showback",
    ],
  },
  {
    number: "04",
    title: "System Design Interview Prep",
    description:
      "Intensive coaching for engineers preparing for Staff+, Principal, and Distinguished-level system design interviews at top-tier technology companies.",
    outcomes: [
      "Large-scale system design practice",
      "Architecture trade-off analysis",
      "Mock interviews with feedback",
    ],
  },
];

export const articles: Article[] = [
  {
    slug: "multi-agent-frameworks-production-guide",
    title: "Multi-Agent Frameworks: From Toy Demos to Production Systems",
    excerpt:
      "Most agentic AI demos break in production. Here's the architecture pattern that doesn't — and why orchestration matters more than intelligence.",
    category: "Technology",
    date: "2026-03-05",
    readTime: "10 min",
    featured: true,
    tags: ["AI", "Multi-Agent Systems", "Architecture"],
    content: `The demo works perfectly. The agent reasons, calls tools, and returns a polished answer. Then you deploy it to production and everything falls apart.

## The Demo-to-Production Gap

Single-agent demos succeed because they operate in controlled environments with predictable inputs. Production systems face adversarial inputs, concurrent users, rate limits, partial failures, and the combinatorial explosion of real-world edge cases.

Multi-agent architectures solve this by decomposing complex tasks into specialized agents with clear boundaries. But the real insight isn't about having multiple agents — it's about the harness that controls them.

## The Orchestration Layer

The most critical component in any multi-agent system isn't an agent at all. It's the orchestrator — the deterministic layer that routes tasks, manages state, enforces guardrails, and handles failures.

Think of it like a conductor. Individual musicians (agents) have specialized skills. But without a conductor managing tempo, dynamics, and coordination, you get noise instead of music.

## Practical Architecture

A production-ready multi-agent system needs four layers: an intent router that classifies incoming requests, a task planner that decomposes complex requests into subtasks, specialized agents that execute individual subtasks, and a synthesis layer that assembles results and handles conflicts.

## Guardrails Are Not Optional

Every agent needs input validation, output validation, and resource limits. Without guardrails, a single hallucinating agent can corrupt your entire pipeline. The organizations shipping reliable agentic AI are the ones that treat guardrails as first-class architecture, not an afterthought.

## Getting Started

Start with two agents and one orchestrator. Get the orchestration pattern right before adding complexity. The organizations that scale agentic AI successfully are the ones that invest in the boring infrastructure — logging, monitoring, rollback — before they invest in the exciting capabilities.`,
  },
  {
    slug: "why-platform-engineering-is-the-new-devops",
    title: "Why Platform Engineering Is the New DevOps",
    excerpt:
      "DevOps gave us culture. Platform engineering gives us leverage. Here's why the shift matters and how to navigate it without losing what DevOps taught us.",
    category: "Technology",
    date: "2026-02-28",
    readTime: "8 min",
    featured: true,
    tags: ["Platform Engineering", "DevOps", "SDLC"],
    content: `The conversation has shifted. After a decade of "you build it, you run it," engineering organizations are discovering that DevOps without platforms creates a different kind of bottleneck — cognitive overload.

Platform engineering isn't a rejection of DevOps. It's the natural evolution. Where DevOps broke down silos between development and operations, platform engineering builds the golden paths that make those unified workflows sustainable at scale.

## The Cognitive Load Problem

Every tool you add to a developer's workflow is a tax on their attention. Kubernetes, service meshes, observability stacks, CI/CD pipelines, security scanning — the modern developer is expected to be an expert in all of them. That's not empowerment. That's exhaustion.

Internal developer platforms solve this by abstracting complexity behind self-service interfaces. Developers get the autonomy DevOps promised, without needing a PhD in infrastructure.

## What Good Platforms Look Like

The best internal developer platforms share three qualities: they're opinionated but not rigid, they're self-service but not unsupported, and they measure success by developer satisfaction — not just deployment frequency.

Golden paths should feel like guardrails, not gates. When a developer can go from idea to production in under an hour without filing a ticket, you've built something worth maintaining.

## The Organizational Shift

Platform engineering requires a fundamental change in how we think about infrastructure teams. They're no longer service providers responding to tickets. They're product teams building for internal customers.

This means user research, roadmaps, SLAs, and — critically — the ability to say no. A platform that tries to serve every edge case serves no one well.

## Getting Started

Start small. Pick the most painful workflow in your organization and build a golden path for it. Measure the before and after. Let the results make the case for investment.`,
  },
  {
    slug: "finops-engineering-decisions-business-outcomes",
    title: "FinOps: Connecting Engineering Decisions to Business Outcomes",
    excerpt:
      "Cloud costs are engineering decisions wearing a finance hat. Here's how FinOps bridges the gap between what engineers build and what the business pays.",
    category: "Technology",
    date: "2026-02-20",
    readTime: "7 min",
    featured: true,
    tags: ["FinOps", "Cloud", "Strategy"],
    content: `Every architecture decision is a financial decision. That Kubernetes cluster running at 15% utilization? That's not a technical problem — it's a business problem wearing a technical disguise.

## The FinOps Mindset

FinOps isn't about cutting costs. It's about making informed trade-offs. Sometimes the right decision is to spend more — on reserved instances, on better tooling, on faster infrastructure. The key is making that decision intentionally, with visibility into the trade-offs.

## Three Pillars

Effective FinOps operates on three pillars: inform (visibility into who's spending what and why), optimize (right-sizing, reserved capacity, waste elimination), and operate (embedding cost awareness into engineering culture and workflows).

Most organizations start with optimize because the savings are immediate. But the organizations that sustain FinOps success start with inform — because you can't optimize what you can't see.

## Unit Economics Matter

The most powerful FinOps metric isn't total cloud spend. It's cost per transaction, cost per user, or cost per feature. Unit economics connect engineering decisions to business outcomes in a language that executives understand and engineers can act on.

## Cultural Shift

FinOps fails when it's positioned as a finance initiative imposed on engineering. It succeeds when engineers see cost as another dimension of quality — alongside performance, reliability, and security. The best FinOps practitioners I've worked with are engineers who learned to speak finance, not finance people who learned to read AWS bills.`,
  },
  {
    slug: "agent-harnesses-controlling-ai-2026",
    title: "Agent Harnesses: Why 2026 Is About Controlling AI, Not Building More",
    excerpt:
      "Enterprises average 12 AI agents with only 27% connected. The real challenge isn't building agents — it's the harness that governs them.",
    category: "Technology",
    date: "2026-02-15",
    readTime: "9 min",
    tags: ["AI", "Multi-Agent Systems", "Governance"],
    content: `The agent gold rush is over. Every team has built at least one. Most enterprises now have a dozen or more, each solving a narrow problem brilliantly and creating a broader problem silently — fragmentation.

## The Harness Pattern

An agent harness is the infrastructure layer that sits between your agents and your business. It handles authentication, rate limiting, logging, cost tracking, and — most critically — the ability to shut things down when they go wrong.

Think of it as the difference between having twelve independent contractors and having twelve employees with a manager. The work might be similar, but the coordination, accountability, and governance are fundamentally different.

## What a Good Harness Provides

A production-grade agent harness provides five capabilities: centralized configuration (change agent behavior without redeploying), unified observability (see what every agent is doing in one place), cost attribution (know which agent is spending what), circuit breakers (automatically disable misbehaving agents), and audit trails (prove what happened and why).

## The Organizational Model

The teams that get agentic AI right are treating it like platform engineering — building shared infrastructure that individual teams consume. The alternative — every team building their own agent infrastructure — leads to the same fragmentation that DevOps was supposed to solve.

## Start With Governance

Before you build your thirteenth agent, build the harness for the twelve you already have. The compound value of governance infrastructure far exceeds the marginal value of one more agent.`,
  },
  {
    slug: "system-design-interviews-staff-plus",
    title: "System Design Interviews at Staff+ Level: What Actually Changes",
    excerpt:
      "The jump from senior to staff system design interviews isn't about knowing more systems — it's about demonstrating different thinking.",
    category: "Strategy",
    date: "2026-02-10",
    readTime: "8 min",
    tags: ["Interviews", "System Design", "Career"],
    content: `I've coached over fifty engineers through Staff+ system design interviews. The pattern of failure is remarkably consistent: they design systems that work, but they don't demonstrate the thinking that distinguishes a Staff engineer from a Senior one.

## The Shift in Evaluation

Senior system design interviews evaluate whether you can build a working system. Staff+ interviews evaluate whether you can make the right trade-offs for a specific business context. The system needs to work, obviously — but that's table stakes.

## What Interviewers Actually Look For

At Staff+ level, interviewers are evaluating three things: trade-off articulation (can you explain why you chose X over Y, and under what conditions you'd reverse that decision?), scope management (can you identify what to build now vs. later, and defend that boundary?), and cross-cutting concerns (do you proactively address observability, security, cost, and operational complexity?).

## The Framework

I teach a four-phase approach: clarify (spend 5 minutes understanding the business context, not just the technical requirements), design (build the system in layers, starting with the data model), evaluate (proactively identify weaknesses and propose mitigations), and extend (show how the system evolves as requirements change).

## Common Mistakes

The most common mistake is jumping to implementation details before establishing the design's strategic intent. The second most common is treating non-functional requirements as an afterthought. At Staff+ level, reliability, observability, and cost are first-class design constraints — not things you mention at the end if there's time.`,
  },
  {
    slug: "the-case-for-walking-meetings",
    title: "The Case for Walking Meetings",
    excerpt:
      "How replacing conference rooms with trails changed my thinking, my health, and the quality of my conversations.",
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
    slug: "building-a-second-brain-for-strategy",
    title: "Building a Second Brain for Strategic Thinking",
    excerpt:
      "How I use a personal knowledge management system to connect ideas across domains and develop better strategic frameworks.",
    category: "Strategy",
    date: "2026-01-28",
    readTime: "6 min",
    tags: ["Strategy", "Knowledge Management", "Productivity"],
    content: `The best strategic insights come from connecting ideas across domains. A framework from biology applied to organizational design. A principle from architecture applied to software systems. A lesson from history applied to market strategy.

## The System

I use a simple but disciplined system: capture, connect, create. Every article I read, conversation I have, and observation I make gets captured in a structured note. Weekly, I review recent captures and draw connections. Monthly, I synthesize connections into frameworks.

## Why It Works

Strategic thinking isn't about having more information. It's about having better connections between the information you already have. A second brain externalizes those connections, making them visible and combinable in ways that pure memory can't achieve.

## The Tools

The specific tool matters less than the practice. I use Obsidian for its graph view and local-first philosophy, but the system would work with any tool that supports linking and tagging. The key features are: bidirectional links, full-text search, and zero friction capture.

## The Compound Effect

After two years of consistent practice, my second brain contains over 3,000 interconnected notes. The value isn't in any individual note — it's in the network. When I'm working on a client engagement, I can surface relevant insights from completely unrelated domains in seconds.

This is the real promise of personal knowledge management: not better memory, but better thinking.`,
  },
  {
    slug: "consumer-ai-products-that-matter-2026",
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
