export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
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
    title: "AI Transformation",
    description:
      "Guiding organizations from AI experimentation to enterprise-scale adoption. Strategy, architecture, and change management for teams ready to move beyond pilots.",
    outcomes: [
      "AI readiness assessment",
      "Copilot rollout strategy",
      "ROI measurement frameworks",
    ],
  },
  {
    number: "02",
    title: "Platform Engineering",
    description:
      "Designing and scaling internal developer platforms that reduce cognitive load and accelerate delivery. From golden paths to self-service infrastructure.",
    outcomes: [
      "IDP architecture design",
      "Developer portal strategy",
      "Platform team operating model",
    ],
  },
  {
    number: "03",
    title: "Developer Productivity",
    description:
      "Optimizing the software development lifecycle end-to-end. Modern toolchains, workflow automation, and engineering culture that compounds velocity.",
    outcomes: [
      "SDLC modernization",
      "GitHub Enterprise strategy",
      "DORA metrics improvement",
    ],
  },
  {
    number: "04",
    title: "Executive Coaching",
    description:
      "One-on-one coaching for technology leaders navigating career transitions, interview preparation, and building executive presence in the AI era.",
    outcomes: [
      "Interview preparation",
      "Leadership development",
      "Career strategy sessions",
    ],
  },
];

export const articles: Article[] = [
  {
    slug: "why-platform-engineering-is-the-new-devops",
    title: "Why Platform Engineering Is the New DevOps",
    excerpt:
      "DevOps gave us culture. Platform engineering gives us leverage. Here's why the shift matters and how to navigate it without losing what DevOps taught us.",
    category: "Technology",
    date: "2026-03-05",
    readTime: "8 min",
    featured: true,
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

Start small. Pick the most painful workflow in your organization and build a golden path for it. Measure the before and after. Let the results make the case for investment.

The organizations that get this right will compound their advantage for years. The ones that don't will keep wondering why their best engineers keep leaving.`,
  },
  {
    slug: "ai-transformation-beyond-the-pilot",
    title: "AI Transformation: Moving Beyond the Pilot Phase",
    excerpt:
      "Most enterprises have run AI pilots. Few have scaled them. The gap isn't technical — it's organizational. A framework for crossing the chasm.",
    category: "Technology",
    date: "2026-02-28",
    readTime: "10 min",
    featured: true,
    content: `Every enterprise I work with has the same story: they ran a successful AI pilot six months ago. The demo was impressive. Leadership was excited. And then... nothing happened.

The pilot-to-production gap isn't a technology problem. It's a systems problem. And solving it requires thinking about AI transformation the way we think about any organizational change — with strategy, patience, and honest measurement.

## The Pilot Trap

Pilots succeed because they're designed to succeed. Small teams, controlled environments, cherry-picked use cases. The real test isn't whether AI can work in your organization. It's whether your organization can work with AI.

## A Framework for Scale

I use a three-horizon model with my clients. Horizon 1 is individual productivity — tools like GitHub Copilot that make existing workflows faster. Horizon 2 is workflow transformation — reimagining processes around AI capabilities. Horizon 3 is business model innovation — new products and services that AI makes possible.

Most organizations try to jump to Horizon 3 before they've mastered Horizon 1. That's like trying to run a marathon before you can jog a mile.

## The Change Management Layer

Technology adoption is behavior change. And behavior change requires more than training sessions and Slack announcements. It requires champions, feedback loops, and — most importantly — permission to experiment and fail.

The organizations that scale AI successfully are the ones that create psychological safety around AI adoption. When developers feel safe saying "I tried Copilot and it didn't help with this task," you're building honest feedback loops that improve adoption over time.

## Measuring What Matters

Stop measuring AI adoption by license utilization. Start measuring it by developer satisfaction, time-to-production, and code quality metrics. The goal isn't to use AI everywhere. It's to use AI where it creates genuine value.`,
  },
  {
    slug: "the-case-for-walking-meetings",
    title: "The Case for Walking Meetings",
    excerpt:
      "How replacing conference rooms with trails changed my thinking, my health, and the quality of my conversations.",
    category: "Health",
    date: "2026-02-20",
    readTime: "5 min",
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
    slug: "github-copilot-enterprise-rollout-playbook",
    title: "The GitHub Copilot Enterprise Rollout Playbook",
    excerpt:
      "Lessons from deploying Copilot across 50+ enterprise teams. What works, what doesn't, and the metrics that actually matter.",
    category: "Technology",
    date: "2026-02-15",
    readTime: "12 min",
    content: `After helping dozens of enterprise teams adopt GitHub Copilot, I've developed a playbook that consistently produces results. Here's the distilled version.

## Phase 1: Foundation (Weeks 1-2)

Start with your most enthusiastic team, not your most critical one. You want early wins and vocal champions, not high-stakes pressure. Configure Copilot with organization-specific context. The default experience is good; a tuned experience is transformative.

## Phase 2: Expansion (Weeks 3-6)

Expand to 3-5 additional teams across different tech stacks. This is where you discover the edge cases — languages where Copilot excels, workflows where it struggles, and the organizational patterns that accelerate or hinder adoption.

## Phase 3: Scale (Weeks 7-12)

Roll out organization-wide with the lessons learned. By now you should have internal champions, documented best practices, and honest metrics about where Copilot adds value.

## The Metrics That Matter

Forget acceptance rate as your north star. Instead, measure: developer satisfaction (survey monthly), time from commit to production (should decrease), and code review cycle time (should decrease). These tell you whether Copilot is making your organization faster, not just whether developers are clicking "accept."

## Common Pitfalls

The biggest mistake is treating Copilot as a typing accelerator. It's a thinking partner. Teams that use it for boilerplate see modest gains. Teams that use it for exploration, testing, and documentation see transformative results.`,
  },
  {
    slug: "consumer-tech-predictions-2026",
    title: "Consumer Tech That Will Actually Matter in 2026",
    excerpt:
      "Cutting through the hype cycle to identify the consumer technologies that will genuinely change how we live and work this year.",
    category: "Consumer Products",
    date: "2026-02-10",
    readTime: "7 min",
    content: `Every January brings a flood of tech predictions. Most are wrong. Here are the consumer technology shifts I'm genuinely excited about — and why they matter beyond the hype.

## AI Agents That Actually Work

We've moved past chatbots. The consumer AI products shipping now can book travel, manage email, and coordinate schedules across multiple services. The key differentiator isn't intelligence — it's reliability. The products that win will be the ones that work correctly 99% of the time, not the ones that work brilliantly 80% of the time.

## Spatial Computing's Quiet Revolution

Forget the metaverse hype. The real spatial computing revolution is happening in professional tools — architects visualizing buildings, surgeons planning procedures, engineers inspecting infrastructure. Consumer applications will follow, but the professional use cases are where the real value is being created right now.

## The Privacy Premium

Consumers are increasingly willing to pay for privacy. Products that offer genuine data sovereignty — not just privacy theater — are finding eager markets. This is especially true in health tech, where the sensitivity of the data makes privacy a feature, not a constraint.

## What I'm Watching

The intersection of AI and hardware is where the most interesting consumer products will emerge. Devices that are designed from the ground up for AI interaction — not smartphones with AI bolted on — will define the next computing paradigm.`,
  },
  {
    slug: "building-a-second-brain-for-strategy",
    title: "Building a Second Brain for Strategic Thinking",
    excerpt:
      "How I use a personal knowledge management system to connect ideas across domains and develop better strategic frameworks.",
    category: "Strategy",
    date: "2026-02-05",
    readTime: "6 min",
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
    slug: "modernization-without-the-big-bang",
    title: "Modernization Without the Big Bang",
    excerpt:
      "The strangler fig pattern and other strategies for modernizing legacy systems incrementally, without betting the business on a rewrite.",
    category: "Technology",
    date: "2026-01-28",
    readTime: "9 min",
    content: `"Let's just rewrite it." Four words that have destroyed more engineering organizations than any technical debt ever could.

## The Rewrite Trap

Big-bang rewrites fail for predictable reasons: they take longer than estimated, they introduce new bugs while fixing old ones, and they freeze feature development during the transition. The business can't wait, and the engineering team burns out.

## The Strangler Fig Approach

Instead of replacing a system all at once, wrap it. Build new functionality alongside the old system, gradually routing traffic to the new components. The old system shrinks as the new one grows — like a strangler fig tree growing around its host.

## Practical Patterns

Start with the edges. API gateways, authentication layers, and data access patterns are ideal candidates for incremental modernization. They provide clear boundaries and measurable improvements without touching core business logic.

## The Cultural Component

Modernization isn't just a technical challenge. It requires organizational patience and executive sponsorship. The team needs permission to move slowly and deliberately, even when stakeholders want immediate results.

The organizations that modernize successfully are the ones that treat it as a continuous practice, not a project with a deadline.`,
  },
  {
    slug: "sleep-optimization-for-knowledge-workers",
    title: "Sleep Optimization for Knowledge Workers",
    excerpt:
      "Evidence-based strategies for improving sleep quality when your job requires intense cognitive output during the day.",
    category: "Health",
    date: "2026-01-20",
    readTime: "6 min",
    content: `After years of treating sleep as a variable I could compress, I finally treated it as the foundation everything else depends on. The results were immediate and dramatic.

## The Cognitive Cost

Research from Matthew Walker's lab at UC Berkeley shows that even modest sleep deprivation — six hours instead of eight — reduces cognitive performance by 30%. For knowledge workers, that's the difference between breakthrough thinking and mediocre output.

## What Actually Works

Based on sleep research and personal experimentation, here are the interventions that made the biggest difference for me: consistent wake time (even weekends), no screens after 9pm, bedroom temperature at 65°F, and morning sunlight within 30 minutes of waking.

## The Caffeine Audit

I cut my caffeine window to before noon. The half-life of caffeine is 5-6 hours, which means that 3pm coffee is still in your system at 9pm. This single change improved my sleep onset time by 20 minutes.

## Measuring Progress

I track sleep with an Oura ring, but the most important metric isn't any number — it's how I feel at 2pm. If I'm reaching for caffeine or struggling to focus, something in my sleep system needs adjustment.

The irony of sleep optimization is that it feels unproductive. You're literally doing nothing. But the compound effect on cognitive performance, emotional regulation, and creative output makes it the highest-leverage health intervention available.`,
  },
];

export const categories = [
  "All",
  "Technology",
  "Health",
  "Consumer Products",
  "Strategy",
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
