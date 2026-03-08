// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  status: "live" | "wip" | "upcoming";
  accent: "cyan" | "pink" | "yellow";
  year?: string;
}

export const projects: Project[] = [
  {
    id: "inboxsignal",
    title: "InboxSignal",
    subtitle: "Job Pipeline Tracker",
    description:
      "A smart job application tracker that organises every stage of your pipeline — applied, screened, interviewed, offered. Clear visual status boards so nothing falls through the cracks.",
    stack: ["Python", "SQLite", "Flask", "HTML/CSS"],
    github: "https://github.com/KrishnaChittella/job-application-tracker",
    status: "live",
    accent: "cyan",
    year: "2024",
  },
  {
    id: "cinematch",
    title: "CineMatch",
    subtitle: "Movie Recommendation Engine",
    description:
      "Content-based movie recommender built using TF-IDF vectorization and cosine similarity. Enter a title and get curated suggestions ranked by feature overlap — genres, cast, and keywords.",
    stack: ["Python", "Pandas", "Scikit-learn", "NLTK"],
    github: "https://github.com/KrishnaChittella/Simple-Movie-Recommender",
    status: "live",
    accent: "pink",
    year: "2023",
  },
  {
    id: "visiondigits",
    title: "VisionDigits",
    subtitle: "Digit Recognition Engine",
    description:
      "A convolutional neural network trained on MNIST achieving 99%+ accuracy. Explores filter visualisation and activation maps to explain what the model is actually learning at each layer.",
    stack: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib"],
    github: "https://github.com/KrishnaChittella/MNIST_CNN",
    status: "live",
    accent: "yellow",
    year: "2023",
  },
  {
    id: "classic-classifier",
    title: "Classic Classifier Lab",
    subtitle: "Classification with SVM",
    description:
      "A rigorous exploration of Support Vector Machines — kernel tricks, hyperparameter tuning with grid search, and boundary visualisation. A clean reference implementation for classical ML classification.",
    stack: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    github: "https://github.com/KrishnaChittella/Classification-SVM",
    status: "live",
    accent: "cyan",
    year: "2023",
  },
  {
    id: "falcon-landing",
    title: "Falcon Landing Intelligence",
    subtitle: "SpaceX Landing Optimisation",
    description:
      "Predictive modelling on SpaceX Falcon 9 landing outcome data. Applies logistic regression, decision trees, and random forests to understand which mission parameters most affect landing success.",
    stack: ["Python", "Pandas", "Scikit-learn", "Plotly", "SQL"],
    github: "https://github.com/KrishnaChittella/OptimizingSpaceXFalconLandings",
    status: "live",
    accent: "pink",
    year: "2024",
  },
  {
    id: "graphmind",
    title: "GraphMind",
    subtitle: "Neural Graph Exploration",
    description:
      "A deep-dive into Graph Neural Networks — node classification, link prediction, and graph-level tasks with GCN, GAT, and GraphSAGE architectures. Built to understand the theory through implementation.",
    stack: ["Python", "PyTorch Geometric", "NetworkX", "PyTorch"],
    github: "https://github.com/KrishnaChittella/Understanding-Graph-Neural-Networks",
    status: "live",
    accent: "yellow",
    year: "2024",
  },
];

// ─── Experiments ──────────────────────────────────────────────────────────────

export interface Experiment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  status: "active" | "wip" | "idea";
  accent: "cyan" | "pink" | "yellow";
  link?: string;
}

export const experiments: Experiment[] = [
  {
    id: "pulsetrade",
    title: "PulseTrade",
    subtitle: "Real-Time Stock Trading Simulator",
    description:
      "A paper trading simulator with live market data feeds. Supports order types, portfolio tracking, P&L calculation, and replay mode for backtesting strategies against historical data.",
    tags: ["WebSockets", "React", "FastAPI", "PostgreSQL", "Redis"],
    status: "wip",
    accent: "cyan",
  },
  {
    id: "taxforge",
    title: "TaxForge",
    subtitle: "Tax Calculation Engine",
    description:
      "A modular tax calculation engine built for accuracy and explainability. Handles multiple tax brackets, deductions, filing statuses, and generates a full breakdown of how the final number was reached.",
    tags: ["Python", "FastAPI", "TypeScript", "React"],
    status: "wip",
    accent: "pink",
  },
  {
    id: "quantmind",
    title: "QuantMind AI",
    subtitle: "Financial Intelligence System",
    description:
      "An AI-driven financial analysis layer that processes earnings reports, news sentiment, and macro indicators to surface actionable signals. Not financial advice — financial understanding.",
    tags: ["LLM", "Python", "LangChain", "Pandas", "FastAPI"],
    status: "idea",
    accent: "yellow",
  },
  {
    id: "codearena",
    title: "CodeArena",
    subtitle: "Algorithm Visualisation Platform",
    description:
      "Step through sorting, graph traversal, dynamic programming, and tree algorithms in real time. Each step is animated with state callouts — built to make abstract algorithms feel physical.",
    tags: ["React", "TypeScript", "Framer Motion", "D3.js"],
    status: "idea",
    accent: "cyan",
  },
  {
    id: "llm-prompt-engine",
    title: "Prompt Forge",
    subtitle: "LLM Prompt Management Layer",
    description:
      "Structured prompt versioning, variable injection, and A/B testing across different LLM providers. Built for teams who treat prompts like code — with diffs, rollbacks, and evaluation pipelines.",
    tags: ["LLM", "Python", "FastAPI", "Redis", "OpenAI"],
    status: "active",
    accent: "pink",
    link: "https://github.com/KrishnaChittella",
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
  highlight?: string;
}

export const timeline: TimelineEntry[] = [
  {
    id: "btech",
    era: "Chapter 01",
    period: "2018 — 2022",
    title: "BTech & First Contact with ML",
    body:
      "Four years of engineering fundamentals — algorithms, data structures, systems programming in C++. Discovered machine learning midway through and became obsessed. Started applying ML concepts to real datasets, grinding LeetCode, and building the first real project: a stock market prediction model using K-Nearest Neighbours.",
    tags: ["C++", "Algorithms", "Python", "KNN", "LeetCode", "Stock Market Prediction"],
    accent: "cyan",
    highlight: "Project: Stock Market Prediction using KNN",
  },
  {
    id: "tcs",
    era: "Chapter 02",
    period: "2022 — 2023",
    title: "Software Engineer @ TCS",
    body:
      "First real exposure to production systems and enterprise software. Working at scale changed how I think about code — reliability, observability, and maintainability stopped being theoretical. The gap between university projects and production systems was larger than expected, and learning to close that gap was the most valuable thing this year taught me.",
    tags: ["Enterprise Software", "Production Systems", "Team Collaboration", "Agile"],
    accent: "pink",
    highlight: "Tata Consultancy Services",
  },
  {
    id: "masters",
    era: "Chapter 03",
    period: "2023 — 2024",
    title: "Master's Degree — AI/ML Focus",
    body:
      "Went deeper on the theory side — advanced ML, deep learning architectures, NLP, computer vision. Built VisionDigits (MNIST CNN), CineMatch (recommendation systems), Falcon Landing Intelligence (predictive modelling on SpaceX data), and GraphMind (GNN exploration). This year was about depth: going from knowing ML techniques to understanding why they work.",
    tags: ["Deep Learning", "CNNs", "NLP", "Recommendation Systems", "PyTorch", "Research"],
    accent: "yellow",
    highlight: "MSc — Advanced AI/ML Projects",
  },
  {
    id: "data-engineering",
    era: "Chapter 04",
    period: "2025",
    title: "Exploring Data Engineering",
    body:
      "Realised that production AI lives downstream of good data infrastructure. Started exploring the data engineering layer — pipelines, orchestration, transformation, and warehousing. Understanding how data moves and transforms before it ever reaches a model changed the way I think about end-to-end ML systems.",
    tags: ["Apache Kafka", "dbt", "Airflow", "SQL", "Data Pipelines", "ETL"],
    accent: "cyan",
    highlight: "The infrastructure layer of AI",
  },
  {
    id: "fullstack",
    era: "Chapter 05",
    period: "2025 — Present",
    title: "Java Full-Stack Development",
    body:
      "The current chapter: building complete products from the ground up. Java on the backend, React and Next.js on the frontend. Learning to own the entire stack — not just write features, but architect, deploy, and maintain systems. InboxSignal was the first real full-stack build. There's more incoming.",
    tags: ["Java", "Spring Boot", "Next.js", "React", "TypeScript", "PostgreSQL", "REST APIs"],
    accent: "pink",
    highlight: "Currently active",
  },
];

// ─── Journal ──────────────────────────────────────────────────────────────────

export interface JournalEntry {
  id: string;
  type: "listening" | "exploring" | "writing";
  title: string;
  subtitle?: string;
  body: string;
  date: string;
  link?: string;
  tags: string[];
}

export const journalEntries: JournalEntry[] = [
  {
    id: "fiserv-rpa",
    type: "listening",
    title: "Jami DeHaven — Fiserv RPA Podcast",
    subtitle: "Robotic Process Automation in Enterprise",
    body:
      "DeHaven breaks down how RPA is being deployed at financial scale — the actual implementation challenges, change management, and where the technology genuinely delivers vs where it gets oversold. Practical and grounded.",
    date: "Mar 2025",
    link: "#",
    tags: ["RPA", "Automation", "Fintech", "Enterprise"],
  },
  {
    id: "llm-infrastructure",
    type: "exploring",
    title: "The LLM Infrastructure Gap",
    subtitle: "What production AI actually needs",
    body:
      "Most LLM demos skip the hard part: evaluation, versioning, cost control, and latency at scale. Exploring what a real production AI stack looks like — not the notebook, but the plumbing that makes it reliable.",
    date: "Mar 2025",
    tags: ["LLM", "MLOps", "Infrastructure", "AI"],
  },
  {
    id: "data-contracts",
    type: "exploring",
    title: "Data Contracts & Schema Evolution",
    subtitle: "Why upstream changes silently break downstream",
    body:
      "Downstream consumers break when upstream schemas change without notice. Exploring contract testing for data pipelines — tools like Great Expectations, dbt tests, and how to enforce schema agreements across teams.",
    date: "Feb 2025",
    tags: ["Data Engineering", "dbt", "Schema", "Testing"],
  },
  {
    id: "from-models-to-pipelines",
    type: "writing",
    title: "From Models to Pipelines",
    subtitle: "What data engineering actually taught me",
    body:
      "Moving from ML to data engineering felt like switching languages. Here's what changed about how I think about software when reliability replaces accuracy as the primary metric.",
    date: "Feb 2025",
    tags: ["Data Engineering", "Reflection"],
  },
  {
    id: "typescript-backend",
    type: "writing",
    title: "The Quiet Power of TypeScript for Backend Engineers",
    subtitle: "",
    body:
      "I resisted TypeScript for too long. Then I used it on a real project with real data contracts and real team coordination. Here's why I won't go back.",
    date: "Jan 2025",
    tags: ["TypeScript", "Backend"],
  },
];

// ─── Beyond Code — Gaming ─────────────────────────────────────────────────────

export interface Game {
  title: string;
  note?: string;
}

export interface GameCategory {
  id: string;
  label: string;
  description: string;
  games: Game[];
  accent: "cyan" | "pink" | "yellow";
}

export const gameCategories: GameCategory[] = [
  {
    id: "primary",
    label: "Primary",
    description: "The ones I keep coming back to. Polished, demanding, and deeply built.",
    games: [
      { title: "Red Dead Redemption 2", note: "Unmatched world detail" },
      { title: "Escape From Tarkov", note: "High stakes, no hand-holding" },
      { title: "Rainbow Six Siege", note: "Tactical depth, fast thinking" },
    ],
    accent: "pink",
  },
  {
    id: "strategy",
    label: "Strategy / Economy",
    description: "Systems games. The kind that reward patience and long-term thinking.",
    games: [
      { title: "Anno 1800", note: "Production chains & city planning" },
      { title: "Cities: Skylines", note: "Urban systems thinking" },
    ],
    accent: "yellow",
  },
  {
    id: "extraction",
    label: "Extraction / Survival",
    description: "High pressure, sparse resources. The tension is the game.",
    games: [
      { title: "Rust", note: "Brutal and social" },
      { title: "The Division 2", note: "Atmosphere and gunplay" },
      { title: "PUBG", note: "The original tension loop" },
    ],
    accent: "cyan",
  },
];
