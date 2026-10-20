// All site copy. Every claim here was confirmed by Krishna; add nothing unverified.

export const profile = {
  name: "Lakshmi Varaha Krishna Chittella",
  role: "Data engineer",
  summary:
    "I build and monitor data pipelines on AWS and GCP. Master's in Computer Science from the University of South Dakota. Looking for data engineering, analytics and ML engineering roles in the US.",
  email: "krishna.chittella@gmail.com",
  github: "https://github.com/KrishnaChittella",
  linkedin: "https://www.linkedin.com/in/lakshmi-varaha-krishna-chittella/",
  instagram: "https://instagram.com/itsme_krishnachittella",
  resume: "/Lakshmi-Varaha-Krishna-Chittella-Resume.pdf",
};

export interface Job {
  company: string;
  place?: string;
  title: string;
  period: string;
  bullets: string[];
  stack?: string;
}

export const experience: Job[] = [
  {
    company: "Softtechers LLC",
    title: "Software Engineer I",
    period: "Dec 2025 – Present",
    bullets: [
      "Contributed to a confidential enterprise case-management platform built with Java, Spring Boot, microservices, MongoDB and Apache Kafka.",
      "Worked with containerized services and used Prometheus and New Relic for monitoring and troubleshooting during client work.",
      "Built Briefcase, a Spring Boot and PostgreSQL case-management app, and a job application tracker with React and Outlook status updates through Microsoft Graph. Both were supervised skills assessments.",
    ],
    stack:
      "Java, Spring Boot, microservices, Apache Kafka, MongoDB, Docker, Kubernetes, Node.js, Prometheus, New Relic, GitLab CI/CD, Git",
  },
  {
    company: "TechRoots Inc.",
    title: "Data Engineer",
    period: "Jan 2025 – Dec 2025",
    bullets: [
      "Monitored and supported three to four client ETL/ELT pipelines on AWS: investigated CloudWatch alerts, traced failures and fixed issues with the technical lead's guidance.",
      "Investigated Kafka ingestion interruptions under heavy load and helped rework data sourcing to restore the pipeline's data flow.",
      "Reviewed execution plans for slow transformations, then tuned computation and storage access and partitioned data to reduce bottlenecks.",
      "Handled upstream feeds that arrived about three hours late with incremental, partitioned backfills instead of full reloads.",
      "Recovered three missed days of daily batch aggregations after an expired API token stalled retries. Chose sequential or parallel catch-up runs from the job dependencies, watched cluster memory and query concurrency, and reconciled source and destination record counts for each date.",
      "Applied GCP pipeline and Python/PySpark training to the work and took part in recurring sprint-based troubleshooting.",
    ],
    stack:
      "AWS (Kafka, Kinesis, S3, DynamoDB, Lambda, Glue, EMR, EC2, IAM, CloudWatch), GCP, PySpark, ETL/ELT, GitLab CI/CD",
  },
  {
    company: "USD Campus Retail Food Services",
    title: "Student Lead",
    period: "Aug 2024 – Dec 2024",
    bullets: [
      "Led the student team after working part-time in the stores since Aug 2023.",
      "Checked inventory, ordered supplies and trained new staff.",
      "Shared service-demand observations with managers, such as when rush hours hit and when it went quiet.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    place: "Kolkata, India",
    title: "Associate Systems Engineer",
    period: "Oct 2022 – May 2023",
    bullets: [
      "Completed foundational Azure cloud training during onboarding, then joined an Axway B2Bi integration project.",
      "Supported Java application development for the project and was commended for a useful technical insight.",
    ],
    stack: "Java, Azure, Axway B2Bi",
  },
];

export const education = [
  {
    school: "University of South Dakota",
    place: "Vermillion, SD",
    degree: "M.S. in Computer Science",
    period: "Aug 2023 – Dec 2024",
    note: "GPA 3.6/4.0. Coursework: Machine Learning Fundamentals, Advanced Artificial Intelligence, Computer Vision, Pattern Recognition in Machine Learning, High Performance Computing, AI in Medical Informatics, Internet of Things, Operating Systems and Architecture, Quantum Computing.",
  },
  {
    school: "BVC College of Engineering",
    place: "Rajahmundry, affiliated with JNTUK",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Graduated 2022",
    note: "",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Data engineering", items: ["Python", "SQL", "PySpark", "ETL/ELT", "Apache Kafka", "Batch processing", "Incremental backfills", "Partitioning", "Data reconciliation"] },
  { group: "Cloud platforms", items: ["AWS: S3, Glue, EMR, Kinesis, Lambda, DynamoDB, CloudWatch, EC2, IAM", "GCP", "Azure (foundational training)"] },
  { group: "Backend and databases", items: ["Java", "Spring Boot", "REST APIs", "Microservices", "PostgreSQL", "MongoDB", "Node.js"] },
  { group: "DevOps and monitoring", items: ["Git", "GitLab CI/CD", "Docker", "Kubernetes", "Prometheus", "New Relic"] },
  { group: "Machine learning", items: ["Computer vision", "Transfer learning", "Classification", "Graph neural networks"] },
];

export interface Work {
  name: string; // GitHub repository name, never shown as the title
  title: string;
  kind?: string;
  blurb: string;
  stack: string;
  href?: string;
  context?: string;
}

export const metaspike = {
  name: "MetaSpike",
  status: "In development. The repository is private.",
  blurb:
    "A data pipeline that finds which games have the strongest content opportunity right now. It reads releases, patches and seasonal events, and measures attention against each game's own normal level, not raw popularity.",
  proof:
    "Entity resolution is tested against a frozen set of 200 labelled cases: 0 false automatic merges, and every uncertain match goes to quarantine instead of being guessed.",
  stack: "Python, SQL. Designed for BigQuery, dbt and Cloud Run on GCP.",
};

export const work: Work[] = [
  {
    name: "briefcase",
    title: "Briefcase",
    kind: "Backend and full-stack",
    blurb:
      "Case management for small law firms. Tracks cases, billing (contingency, hourly or flat fee) and attorney assignments, then splits the fee between the firm and the team when a case closes. Role-based access and an audit log.",
    stack: "Java, Spring Boot, PostgreSQL",
    href: "https://github.com/KrishnaChittella/briefcase",
    context: "Skills assessment at Softtechers",
  },
  {
    name: "job-application-tracker",
    title: "Job Application Tracker",
    kind: "Full-stack",
    blurb:
      "Tracks applications through each stage and reads Outlook mail through Microsoft Graph to update status from rule-based keyword matching. JWT auth, search and a status dashboard.",
    stack: "React, Spring Boot, PostgreSQL, Microsoft Graph",
    href: "https://github.com/KrishnaChittella/job-application-tracker",
    context: "Skills assessment at Softtechers",
  },
  {
    name: "Power-Fault-Classification",
    title: "Power Fault Classification",
    kind: "Computer vision",
    blurb: "Transfer learning on the insPLAD power-line inspection image dataset, applied to fault classification.",
    stack: "Python, Jupyter",
    href: "https://github.com/KrishnaChittella/Power-Fault-Classification",
    context: "Computer Vision final project, USD",
  },
  {
    name: "Simple-Movie-Recommender",
    title: "Simple Movie Recommender",
    kind: "Recommendation",
    blurb:
      "Recommends similar movies from a precomputed similarity matrix and shows posters from the TMDb API in a Streamlit app.",
    stack: "Python, Streamlit, TMDb API",
    href: "https://github.com/KrishnaChittella/Simple-Movie-Recommender",
    context: "Onboarding task at TechRoots",
  },
];

export const coursework: Work[] = [
  {
    name: "Classification-SVM",
    title: "Classification SVM",
    blurb: "Classification with support vector machines.",
    stack: "Python, Jupyter",
    href: "https://github.com/KrishnaChittella/Classification-SVM",
    context: "Machine Learning Fundamentals, USD",
  },
  {
    name: "MNIST_CNN",
    title: "MNIST CNN",
    blurb: "A convolutional neural network on the MNIST digits.",
    stack: "Python, Jupyter",
    href: "https://github.com/KrishnaChittella/MNIST_CNN",
    context: "Machine Learning Fundamentals, USD",
  },
  {
    name: "Understanding-Graph-Neural-Networks",
    title: "Understanding Graph Neural Networks",
    blurb: "A graph neural network notebook on the ESOL molecule dataset, for my own understanding.",
    stack: "Python, Jupyter",
    href: "https://github.com/KrishnaChittella/Understanding-Graph-Neural-Networks",
    context: "Task from a professor during a graduate assistantship application",
  },
  {
    name: "OptimizingSpaceXFalconLandings-",
    title: "Optimizing SpaceX Falcon Landings",
    blurb:
      "SpaceX launch data from API and web scraping, SQL exploration, a Dash dashboard and landing prediction.",
    stack: "Python, SQL, Dash",
    href: "https://github.com/KrishnaChittella/OptimizingSpaceXFalconLandings-",
    context: "Coursera certification project",
  },
];

// ─── Playground ───────────────────────────────────────────────────────────────

export interface App {
  id: string;
  title: string;
  tagline: string;
  description: string;
  kind: "Data" | "Games";
  tags: string[];
  status: string;
  accent: "magenta" | "cyan";
  facts: string[];
  specs: [string, string][];
}

export const apps: App[] = [
  {
    id: "metaspike",
    title: "MetaSpike",
    tagline: "Which game is worth making content about right now?",
    description:
      "A data pipeline that scores gaming content opportunities around releases, patches and seasons, relative to each game's own baseline. It will be shown here once the full version is built.",
    kind: "Data",
    tags: ["Python", "Data engineering", "GCP"],
    status: "In development",
    accent: "cyan",
    facts: [
      "Scores attention against each game's own normal level, not raw popularity.",
      "Canonical entity resolution with stable identities, aliases and merge and split lineage.",
      "A deterministic resolver with no learning and no fuzzy matching. Uncertain records go to quarantine.",
      "Tested on a frozen set of 200 labelled cases: 0 false automatic merges.",
    ],
    specs: [
      ["STATUS", "In development"],
      ["STACK", "Python, SQL"],
      ["TARGET", "GCP: BigQuery, dbt, Cloud Run"],
      ["OUTPUT", "krishnachittella.dev/metaspike (planned)"],
      ["REPO", "Private"],
    ],
  },
  {
    id: "anverse",
    title: "anEverse",
    tagline: "An anime story that runs on your own GPU.",
    description:
      "An interactive visual-novel style story game. A language model runs in the browser through WebGPU and narrates, so there is no login, no server and no paid API.",
    kind: "Games",
    tags: ["React", "TypeScript", "WebGPU", "WebLLM"],
    status: "In development",
    accent: "magenta",
    facts: [
      "Six original stories with genre filters and search.",
      "A story and character creator with a live portrait editor.",
      "Streaming narration with NPC dialogue, three suggested actions per reply and free-form input.",
      "Memory of facts, events, locations, inventory and NPC relationships, checked by game code.",
      "Autosave, named save slots, import and export.",
    ],
    specs: [
      ["STATUS", "In development"],
      ["STACK", "React, TypeScript, WebLLM"],
      ["RUNS IN", "WebGPU browsers: Chrome or Edge 113+"],
      ["NEEDS", "About 2.3 GB free GPU memory (3B model)"],
      ["REPO", "Private"],
    ],
  },
];

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
    label: "Main rotation",
    description: "The ones I keep coming back to.",
    games: [
      { title: "Red Dead Redemption 2", note: "Unmatched world detail" },
      { title: "Escape From Tarkov", note: "High stakes, no hand-holding" },
      { title: "Rainbow Six Siege", note: "Tactical depth, fast thinking" },
      { title: "Wardogs" },
    ],
    accent: "pink",
  },
  {
    id: "strategy",
    label: "Strategy and economy",
    description: "Systems games that reward patience.",
    games: [
      { title: "Anno 1800", note: "Production chains and city planning" },
      { title: "Cities: Skylines", note: "Urban systems thinking" },
    ],
    accent: "yellow",
  },
  {
    id: "extraction",
    label: "Extraction and survival",
    description: "Sparse resources, high pressure.",
    games: [
      { title: "Rust", note: "Brutal and social" },
      { title: "The Division 2", note: "Atmosphere and gunplay" },
      { title: "PUBG", note: "The original tension loop" },
    ],
    accent: "cyan",
  },
  {
    id: "space",
    label: "Space and simulation",
    description: "Space flight and open-ended simulation.",
    games: [{ title: "Star Citizen" }],
    accent: "pink",
  },
];

export const creator = {
  name: "KICKREAPER",
  links: [
    { platform: "YouTube", handle: "@kickreaper", href: "https://www.youtube.com/@kickreaper", accent: "magenta" },
    { platform: "Instagram", handle: "@its_kickreaper", href: "https://www.instagram.com/its_kickreaper", accent: "cyan" },
    { platform: "TikTok", handle: "@kickreaper15", href: "https://www.tiktok.com/@kickreaper15", accent: "amber" },
  ] as const,
};

// Featured banner on the Loadout page. Change releaseAt to update the countdown.
export const gta6 = {
  label: "MOST ANTICIPATED",
  title: "GRAND THEFT AUTO VI",
  tagline: "Can't wait for GTA VI. Bought this hehe.",
  badge: "DAY ONE BUY",
  // Local midnight on the release date. Rockstar has not confirmed a worldwide unlock time.
  releaseAt: "2026-11-19T00:00:00",
  art: {
    landscape: "/images/gta-vi/cover-landscape.jpg",
    portrait: "/images/gta-vi/cover-portrait.jpg",
    alt: "Official Grand Theft Auto VI cover art: illustrated panels of the game's characters, a yellow sports car, a speedboat and a stunt motorcycle around the Grand Theft Auto VI logo.",
    credit: "Official cover art © Rockstar Games",
    source: "https://www.rockstargames.com/VI/media/artwork-wallpapers",
  },
};
