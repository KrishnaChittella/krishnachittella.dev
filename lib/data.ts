// All site copy. Portfolio copy follows the résumé (public/Lakshmi-Varaha-Krishna-Chittella-Resume.pdf); add nothing unverified.

export const profile = {
  name: "Lakshmi Varaha Krishna Chittella",
  role: "Data engineer",
  summary:
    "Data Engineer with 2.5 years of experience developing Python and SQL data pipelines, Snowflake transformations and Spark-based processing. I deliver dependable operational reporting through incremental loads, data modeling, reconciliation and production troubleshooting, and I independently launched the live Cover Next data product.",
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
}

export const experience: Job[] = [
  {
    company: "Softtechers LLC",
    title: "Data Engineer",
    period: "Dec 2025 – Present",
    bullets: [
      "Engineered Python and SQL pipelines integrating case, customer and activity records from PostgreSQL and REST APIs for operational analytics.",
      "Built paginated API extractors with authentication, bounded retries, exception handling and structured execution logs.",
      "Integrated case assignment, status-change and resolution events into consistent datasets for downstream reporting.",
      "Modeled current case records alongside event histories to support point-in-time analysis and operational reporting.",
      "Created staging transformations using SQL CTEs, joins, window functions and aggregations to prepare analytical datasets.",
      "Standardized customer identifiers, case statuses, timestamps and source fields across disparate application systems.",
      "Implemented null, duplicate-key and source-to-target reconciliation checks to prevent invalid records from reaching reports.",
      "Replaced full reloads with timestamp-based incremental extraction and SQL upserts for new and modified records.",
      "Maintained scheduled runs, dependency checks, execution logging and controlled reprocessing for failed data refreshes.",
      "Published SQL reporting views for case volume, open backlog, resolution trends and service-level performance.",
    ],
  },
  {
    company: "TechRoots Inc.",
    title: "Data Engineer",
    period: "Jan 2025 – Nov 2025",
    bullets: [
      "Supported 4 production ETL/ELT pipelines in Snowflake delivering customer, sales and billing datasets for reporting.",
      "Developed SQL transformations for staging and reporting tables using joins, aggregations and business-rule validations.",
      "Applied PySpark and Python to clean source fields, standardize data types and process structured datasets.",
      "Supported incremental data-loading workflows and validated source updates before loading reporting tables.",
      "Reconciled source and target records with SQL counts, aggregates, key comparisons and duplicate/null checks.",
      "Diagnosed pipeline failures involving SQL errors, missing inputs and dependency issues; verified controlled reruns.",
      "Documented recurring failure scenarios, validation queries and recovery steps to streamline troubleshooting.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    place: "Kolkata, India",
    title: "Associate Systems Engineer",
    period: "Oct 2022 – May 2023",
    bullets: [
      "Validated Oracle batch ETL loads of customer and transaction data into operational reporting tables.",
      "Wrote SQL joins and aggregations; checked record counts, null fields, duplicate identifiers and key consistency.",
      "Investigated batch failures with senior engineers, verified completeness after reruns and supported historical reprocessing.",
      "Maintained ETL mappings, test evidence and operational runbooks for troubleshooting and team knowledge transfer.",
    ],
  },
];

export const education = [
  {
    school: "University of South Dakota",
    degree: "M.S. in Computer Science",
    period: "Dec 2024",
    note: "GPA 3.6/4.0",
  },
  {
    school: "BVC College of Engineering (JNTUK)",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2022",
    note: "",
  },
];

export const leadership = {
  title: "Student Lead",
  org: "University of South Dakota Campus Retail Food Services",
  period: "2024",
  note: "Staff training and operations.",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Programming and processing", items: ["Python", "SQL", "Java", "Apache Spark", "PySpark", "Spark SQL", "pandas"] },
  { group: "Data engineering", items: ["ETL/ELT", "Data warehousing", "dbt", "Data modeling", "Incremental loads", "Data quality", "Reconciliation", "Airflow"] },
  { group: "Databases and BI", items: ["Snowflake", "BigQuery", "PostgreSQL", "Oracle", "MongoDB", "DynamoDB", "Tableau", "Power BI"] },
  { group: "Cloud and streaming", items: ["AWS: S3, Glue, EMR, Lambda, Kinesis, EC2, CloudWatch", "Azure: Data Factory, Databricks, Blob Storage, Synapse, Event Hubs", "GCP: Cloud Storage, Cloud Monitoring", "Kafka"] },
  { group: "Engineering tools", items: ["Git", "GitLab", "GitHub Actions", "CI/CD", "Docker", "Kubernetes", "Terraform", "Linux", "REST APIs"] },
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

// From the cover-next README and docs/engineering.md.
export const coverNext = {
  name: "Cover Next",
  live: "https://cover-next.krishnachittella.dev",
  repo: "https://github.com/KrishnaChittella/cover-next",
  blurb:
    "A free site for gaming YouTubers: which game is worth a video right now? It compares each game's Wikipedia views for the last 7 days against the 7 before, next to the past week's most-watched YouTube videos about it.",
  facts: [
    "Games are labelled rising, steady or cooling from the Wikipedia change.",
    "Game identity comes from IGDB through a deterministic resolver; uncertain matches go to quarantine instead of being guessed.",
    "A daily GitHub Actions run collects the data in Python and publishes the Next.js site.",
    "dbt models on BigQuery, with the GCP project managed in Terraform.",
  ],
  stack: ["Python", "SQL", "dbt", "BigQuery", "Terraform", "GitHub Actions", "Next.js"],
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
    name: "Power-Fault-Classification",
    title: "Power-Line Fault Classification",
    kind: "Computer vision",
    blurb: "Applied transfer learning to classify faults in insPLAD power-line inspection images.",
    stack: "Python, Jupyter",
    href: "https://github.com/KrishnaChittella/Power-Fault-Classification",
    context: "Computer Vision final project, USD",
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
  href?: string; // set once the app is public; marks it live
}

export const apps: App[] = [
  {
    id: "cover-next",
    title: "Cover Next",
    tagline: "Which game is worth a video right now?",
    description:
      "A free site for gaming YouTubers. Every day it compares each game's Wikipedia views for the last 7 days against the 7 before, next to the most-watched YouTube videos about it from the past week.",
    kind: "Data",
    tags: ["Python", "dbt", "BigQuery", "Terraform", "Next.js"],
    status: "Live",
    accent: "cyan",
    facts: [
      "Games are labelled rising, steady or cooling from the Wikipedia change. Search, sort and a watchlist kept in your browser.",
      "YouTube videos are shown one by one with their own view counts, never added up across channels.",
      "Game identity from IGDB through a deterministic resolver: 200 frozen labelled cases, 0 false automatic merges. Uncertain records go to quarantine.",
      "A daily GitHub Actions run collects the data in Python and publishes the site. dbt models on BigQuery, GCP managed in Terraform.",
      "No accounts, no cookies, no analytics.",
    ],
    specs: [
      ["STATUS", "Live, updated daily"],
      ["STACK", "Python, SQL, dbt, Next.js"],
      ["CLOUD", "GCP: BigQuery, Terraform"],
      ["SOURCES", "Wikimedia, YouTube, IGDB"],
      ["SITE", "cover-next.krishnachittella.dev"],
      ["REPO", "github.com/KrishnaChittella/cover-next"],
    ],
    href: "https://cover-next.krishnachittella.dev",
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
