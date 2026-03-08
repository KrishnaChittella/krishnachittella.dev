// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  status: "live" | "wip" | "upcoming";
  accent: "cyan" | "pink" | "yellow";
}

export const projects: Project[] = [
  {
    id: "dataflow-pipeline",
    title: "DataFlow Pipeline",
    description:
      "A distributed real-time data pipeline built with Apache Kafka and Spark. Ingests, transforms, and routes high-throughput event streams with fault-tolerant delivery guarantees.",
    stack: ["Apache Kafka", "Apache Spark", "Python", "Docker", "PostgreSQL"],
    github: "https://github.com/krishnachittella",
    status: "live",
    accent: "cyan",
  },
  {
    id: "neural-viz",
    title: "NeuralViz",
    description:
      "An interactive tool to visualize neural network architectures and their training dynamics. Built to demystify how deep learning models actually learn, layer by layer.",
    stack: ["Python", "PyTorch", "React", "D3.js", "FastAPI"],
    github: "https://github.com/krishnachittella",
    status: "live",
    accent: "pink",
  },
  {
    id: "stacksurge",
    title: "StackSurge",
    description:
      "A full-stack boilerplate with authentication, database integration, and CI/CD wired up from the start. Built to go from idea to production without the scaffolding tax.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/krishnachittella",
    live: "#",
    status: "live",
    accent: "yellow",
  },
  {
    id: "sentinel",
    title: "Sentinel",
    description:
      "A lightweight observability layer for microservices. Tracks metrics, traces, and anomalies without requiring a full APM stack — designed for lean production environments.",
    stack: ["Go", "Prometheus", "Grafana", "Docker", "gRPC"],
    github: "https://github.com/krishnachittella",
    status: "wip",
    accent: "cyan",
  },
];

// ─── Experiments ──────────────────────────────────────────────────────────────

export interface Experiment {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "active" | "wip" | "idea";
  accent: "cyan" | "pink" | "yellow";
  link?: string;
}

export const experiments: Experiment[] = [
  {
    id: "llm-prompt-engine",
    title: "LLM Prompt Engine",
    description:
      "A structured prompt management layer for LLM applications. Supports versioning, variable injection, and A/B testing of prompt templates across different models.",
    tags: ["LLM", "Python", "FastAPI", "Redis"],
    status: "active",
    accent: "cyan",
    link: "https://github.com/krishnachittella",
  },
  {
    id: "realtime-dash",
    title: "LivePulse Dashboard",
    description:
      "A real-time data visualization dashboard that connects to WebSocket streams and renders live metrics with smooth, animated chart updates.",
    tags: ["WebSockets", "React", "D3.js", "TypeScript"],
    status: "wip",
    accent: "pink",
    link: "https://github.com/krishnachittella",
  },
  {
    id: "terminal-ui",
    title: "TermKit UI",
    description:
      "A terminal-inspired component library for the web. Clean, mono aesthetic that actually works in production — not a gimmick. Inspired by developer tools and CLI interfaces.",
    tags: ["React", "TypeScript", "Tailwind", "Storybook"],
    status: "wip",
    accent: "yellow",
  },
  {
    id: "local-llm-router",
    title: "Local LLM Router",
    description:
      "A routing layer that intelligently dispatches prompts between local models (Ollama) and cloud APIs based on complexity, cost thresholds, and latency requirements.",
    tags: ["Ollama", "LangChain", "Python", "OpenAI"],
    status: "idea",
    accent: "cyan",
  },
  {
    id: "data-contracts",
    title: "Schema Sentinel",
    description:
      "A contract-testing tool for data pipelines. Validates that upstream schema changes don't silently break downstream consumers — before they hit production.",
    tags: ["Python", "dbt", "Great Expectations", "Kafka"],
    status: "idea",
    accent: "pink",
  },
  {
    id: "3d-portfolio",
    title: "3D Spatial Portfolio",
    description:
      "An experimental 3D environment built with Three.js where portfolio items exist as navigable objects in 3D space. More of an art project than a practical site.",
    tags: ["Three.js", "React Three Fiber", "GLSL", "WebGL"],
    status: "idea",
    accent: "yellow",
  },
];

// ─── Journey / Timeline ───────────────────────────────────────────────────────

export interface TimelineEntry {
  id: string;
  era: string;
  period: string;
  title: string;
  body: string;
  tags: string[];
  accent: "cyan" | "pink" | "yellow";
}

export const timeline: TimelineEntry[] = [
  {
    id: "ai-ml",
    era: "Chapter 01",
    period: "2020 — 2022",
    title: "AI & Machine Learning",
    body:
      "Started with a deep curiosity about how machines learn. Explored supervised learning, neural networks, NLP, and computer vision. Built models, read papers, and got comfortable living inside the math. This phase taught me how to think precisely about problems and validated a love for building systems that adapt.",
    tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision"],
    accent: "cyan",
  },
  {
    id: "data-engineering",
    era: "Chapter 02",
    period: "2022 — 2023",
    title: "Data Engineering",
    body:
      "Realized that models are only as good as the data flowing into them. Moved into the engineering side — building pipelines that move, transform, and serve data reliably at scale. Kafka, Spark, Airflow, cloud warehouses. Learned that production is humbling, and that good architecture outlasts good ideas.",
    tags: ["Apache Kafka", "Apache Spark", "Airflow", "dbt", "Snowflake", "Docker"],
    accent: "pink",
  },
  {
    id: "full-stack",
    era: "Chapter 03",
    period: "2023 — Present",
    title: "Full-Stack Development",
    body:
      "Wanted to build things people could actually touch. Moved into the full stack — React, Next.js, TypeScript, backend APIs, databases, deployment. There's something deeply satisfying about controlling the entire experience from a design decision to a deployed product. This is where I am now, and the domain I'm most actively building in.",
    tags: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    accent: "yellow",
  },
  {
    id: "future",
    era: "Chapter 04",
    period: "2025 — ∞",
    title: "Future Exploration",
    body:
      "The next chapter isn't defined yet, and that's the point. Whether it's distributed systems, applied AI at the product layer, developer tooling, or something that doesn't have a name yet — the commitment is to keep building, keep exploring, and stay curious enough to follow the next interesting problem.",
    tags: ["Systems Design", "Applied AI", "Open Source", "Developer Tools"],
    accent: "cyan",
  },
];

// ─── Blog ─────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "From Models to Pipelines: What Data Engineering Actually Taught Me",
    excerpt:
      "Moving from ML to data engineering felt like switching languages. Here's what changed about how I think about software when reliability replaces accuracy as the primary metric.",
    date: "Feb 2025",
    readTime: "7 min read",
    tags: ["Data Engineering", "Reflection"],
    slug: "from-models-to-pipelines",
  },
  {
    id: "2",
    title: "Why I Build Things Nobody Asked For",
    excerpt:
      "Most of my best projects started without a brief. There's a specific kind of learning that only happens when you're building for curiosity rather than a spec — and it compounds.",
    date: "Jan 2025",
    readTime: "5 min read",
    tags: ["Building", "Philosophy"],
    slug: "building-for-curiosity",
  },
  {
    id: "3",
    title: "The Quiet Power of TypeScript for Backend Engineers",
    excerpt:
      "I resisted TypeScript for too long. Then I used it on a real project with real data contracts and real team coordination. Here's why I won't go back.",
    date: "Dec 2024",
    readTime: "6 min read",
    tags: ["TypeScript", "Backend", "Engineering"],
    slug: "typescript-for-backend",
  },
];

// ─── Beyond Code ──────────────────────────────────────────────────────────────

export interface Interest {
  title: string;
  description: string;
  icon: string;
  accent: "cyan" | "pink" | "yellow";
}

export const interests: Interest[] = [
  {
    title: "Cyberpunk 2077",
    description:
      "The game that inspired this site's visual language. Night City isn't just a setting — it's a masterclass in world-building, contrast, and atmospheric design. The way it layers neon, grime, and technology is endlessly interesting.",
    icon: "◈",
    accent: "pink",
  },
  {
    title: "Systems Thinking",
    description:
      "Obsessed with how systems — technical or otherwise — behave emergently. Reading about feedback loops, complex adaptive systems, and why things fail in unexpected ways is a persistent hobby.",
    icon: "◎",
    accent: "cyan",
  },
  {
    title: "PC Building & Hardware",
    description:
      "There's something grounding about working with physical components. Understanding the hardware layer makes software abstractions feel more real. Also, cable management is a legitimate art form.",
    icon: "◧",
    accent: "yellow",
  },
  {
    title: "Ambient & Electronic Music",
    description:
      "Mostly Aphex Twin, Jon Hopkins, and soundscapes with no lyrics. Music that doesn't demand attention but rewards it. Works well for long coding sessions where you need flow without distraction.",
    icon: "◉",
    accent: "pink",
  },
  {
    title: "Open Source Exploration",
    description:
      "Reading production codebases is a hobby. You learn more from a mature open source project's commit history than from most tutorials. Watching how real decisions got made and reversed is fascinating.",
    icon: "◈",
    accent: "cyan",
  },
  {
    title: "Cities & Urban Design",
    description:
      "Why do some cities feel alive and others feel empty? Urban density, walkability, informal economies, and how physical space shapes human behavior — the kind of systems thinking that doesn't involve a computer.",
    icon: "◎",
    accent: "yellow",
  },
];
