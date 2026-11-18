// All site copy lives here. Update this file when the resume changes.

/** The page is told in acts; each has a section id and a panel colour. */
export const acts = [
  { id: "top", n: "01", name: "Hello", caption: "who's this", color: "mist" },
  { id: "work", n: "02", name: "The work", caption: "what I've built", color: "blue" },
  { id: "experience", n: "03", name: "The job", caption: "where I've worked", color: "yellow" },
  { id: "about", n: "04", name: "The person", caption: "how I think", color: "green" },
  { id: "contact", n: "05", name: "Say hello", caption: "roles I'm open to", color: "ink" },
] as const;

export type ActColor = (typeof acts)[number]["color"];

export const profile = {
  name: "Rahul Bandikolla",
  firstName: "Rahul",
  lastName: "Bandikolla",
  role: "Data & ML",
  location: "Hyderabad, India",
  email: "rahulbandikolla@gmail.com",
  resume: "/Rahul_Bandikolla_Resume.pdf",
  photo: "/work/profile.webp",
  status: "Open to Data Science, ML & Analytics roles",
  links: {
    github: "https://github.com/b-rahul07",
    linkedin: "https://www.linkedin.com/in/rahul-bandikolla-br07/",
  },
};

export type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  label: string;
  color: string;
  year: string;
  tag?: string;
  description: string;
  metrics: Metric[];
  stack: string[];
  image: string;
  imageSize: [number, number];
  imageAlt: string;
  live?: string;
  code?: string;
};

export const projects: Project[] = [
  {
    slug: "finadvisor",
    title: "FinAdvisor",
    kicker: "Suitability-gated LLM financial advisor",
    label: "LLM system · Research",
    color: "#1F7A4D",
    year: "2026",
    tag: "Latest · Research",
    description:
      "A free personal-finance website for young Indian earners: an advisor chat and a money tracker for stocks, funds, deposits and loans. Deterministic code, not the language model, decides which products are suitable and computes every rupee. A metamorphic auditor re-plans for modified copies of each person and repairs any plan that gets riskier. Evaluated on 240 synthetic personas against baselines, ablations and five models, and written up as a research paper.",
    metrics: [
      { value: "89% → 0%", label: "Unsuitable plans: plain LLM → FinAdvisor" },
      { value: "240", label: "Synthetic personas × 3 runs" },
      { value: "9.8 s", label: "Median plan on a laptop CPU" },
    ],
    stack: ["Python", "FastAPI", "Ollama (Qwen2.5-3B)", "SQLAlchemy", "Supabase", "React", "TypeScript"],
    image: "/work/finadvisor.webp",
    imageSize: [1600, 1000],
    imageAlt: "FinAdvisor landing page: 'Advice that fits your money, before it fits a sales target.'",
    live: "https://finadvisor-india.vercel.app",
    code: "https://github.com/b-rahul07/FinAdv",
  },
  {
    slug: "fraudguard",
    title: "FraudGuard",
    kicker: "Graph-based fraud detection",
    label: "Graph ML · Anomaly detection",
    color: "#9BD619",
    year: "2026",
    description:
      "Models 284K+ credit-card transactions as a graph: GraphSAGE learns structural embeddings and an autoencoder flags anomalies by reconstruction error. Evaluated on recall and false-positive rate, because accuracy says little when fraud is a tiny fraction of the data. Ships with a live dashboard, batch CSV analysis and a transaction simulator.",
    metrics: [
      { value: "284K+", label: "Transactions processed" },
      { value: "GraphSAGE", label: "Embeddings + autoencoder" },
      { value: "Recall / FPR", label: "Evaluated for class imbalance" },
    ],
    stack: ["Python", "PyTorch", "Pandas", "NumPy", "Cloud Firestore", "React"],
    image: "/work/fraudguard.webp",
    imageSize: [1600, 840],
    imageAlt: "FraudGuard dashboard",
    live: "https://fraud-gaurd-mu.vercel.app/",
    code: "https://github.com/b-rahul07/Fraud-Gaurd",
  },
  {
    slug: "kala",
    title: "Kala",
    kicker: "Deep learning artist recognition",
    label: "Computer vision · Transfer learning",
    color: "#F2A516",
    year: "2026",
    description:
      "Identifies the artist behind a painting. Fine-tuned InceptionV3 and EfficientNetV2-S on 8,774 artworks across 51 artists, using stratified splits and confusion analysis to see which styles get mixed up. Tuned for CPU inference, so predictions come back fast without a GPU backend.",
    metrics: [
      { value: "71%", label: "Top-1 accuracy" },
      { value: "94%", label: "Top-5 accuracy" },
      { value: "113 ms", label: "CPU inference" },
    ],
    stack: ["Python", "TensorFlow", "Keras", "InceptionV3", "EfficientNetV2-S", "Flask", "React"],
    image: "/work/kala.webp",
    imageSize: [1600, 883],
    imageAlt: "Kala landing page over Van Gogh's Starry Night: 'Where Art Finds Itself'",
    live: "https://kala-art-ai.vercel.app/",
    code: "https://github.com/b-rahul07/kala-art-ai",
  },
  {
    slug: "medibridge",
    title: "MediBridge Connect",
    kicker: "Real-time medical translation",
    label: "Full stack · Speech + LLM",
    color: "#3B6EF0",
    year: "2026",
    description:
      "A consultation platform that translates between doctors and patients in voice and text. Whisper transcribes speech, GPT-4o translates, and a FastAPI + Socket.IO backend streams messages in real time and stores structured conversations in PostgreSQL.",
    metrics: [
      { value: "<200 ms", label: "Chat latency" },
      { value: "10k+", label: "Message history" },
      { value: "Voice + text", label: "Two-way translation" },
    ],
    stack: ["FastAPI", "PostgreSQL", "Socket.IO", "GPT-4o", "Whisper", "React", "TypeScript"],
    image: "/work/medibridge.webp",
    imageSize: [1600, 899],
    imageAlt: "MediBridge Connect consultation screen",
    live: "https://medibridge-connect.vercel.app/",
    code: "https://github.com/b-rahul07/medibridge-connect",
  },
];

export const experience = [
  {
    role: "Product Analytics Intern",
    stats: [
      { value: "3.2M+", label: "Records tracked by the SCD Type-2 pipeline" },
      { value: "0", label: "Active mismatches after backfill" },
      { value: "50%+", label: "Of repayment volume from EMIs under ₹750" },
      { value: "3", label: "Platforms' event payloads validated" },
    ],
    company: "Snapmint Credit Advisory Pvt. Ltd.",
    period: "May 2026 – Aug 2026",
    points: [
      "Analysed repayment funnels and user retention with SQL and Mixpanel; found EMIs below ₹750 made up over 50% of repayment volume, which informed product decisions.",
      "Built an Airflow DAG and ClickHouse SCD Type-2 pipeline (personalization_cohort_history) tracking historical user cohorts across 3.2M+ records with zero active mismatches.",
      "Validated cross-platform event payloads (Android, Windows, Web) with JSON and SQL, catching missing fields and data-type inconsistencies.",
      "Developed automated backfill and validation workflows, debugging SQL date-window logic to keep historical data accurate.",
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Analytics",
    items: ["SQL", "Python (Pandas, NumPy)", "Mixpanel", "Cohort analysis", "Funnel analysis", "Retention analysis", "Data validation"],
  },
  { group: "Data engineering", items: ["Airflow", "ClickHouse", "MySQL", "PostgreSQL", "ETL pipelines"] },
  {
    group: "Machine learning",
    items: ["TensorFlow", "Keras", "PyTorch", "Classification", "Anomaly detection", "GraphSAGE", "LLM evaluation"],
  },
  { group: "Foundations", items: ["Probability & statistics", "Data structures & algorithms", "DBMS", "OOP"] },
  { group: "Tools", items: ["Git", "GitHub", "Jupyter", "FastAPI", "Vercel", "Render"] },
];

export const education = [
  {
    title: "B.Tech, Computer Science & Engineering (AI & ML)",
    place: "Vardhaman College of Engineering · JNTUH",
    detail: "CGPA 9.14 / 10",
    year: "2027",
  },
  { title: "Class XII (CBSE)", place: "Narayana E-Techno School", detail: "77.2%", year: "2023" },
  { title: "Class X (CBSE)", place: "Don Bosco School", detail: "91.0%", year: "2021" },
];

export const certifications = [
  { title: "Salesforce Certified Agentforce Specialist", place: "Salesforce", year: "Dec 2025" },
  { title: "Artificial Intelligence Application Developer", place: "NIELIT Chennai", year: "Nov 2025" },
  { title: "Deep Learning, Elite (75%)", place: "NPTEL · IIT Ropar", year: "Oct 2025" },
];
