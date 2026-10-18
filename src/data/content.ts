// Replace every placeholder here — components never need editing for content.
export const content = {
  site: {
    title: "Josh — AI Engineer",
    legalName: "Josh",
    description: "Josh: ex-TikTok ML specialist and NUS Masters of Computing student building cost-effective, production-ready AI agents on the cloud.",
  },
  hero: {
    name: "Josh",
    eyebrow: "MComp @ NUS · ex-TikTok",
    tagline: "I build things I wish existed. 3+ years shipping ML at TikTok, now into AI, cloud and human-agent collaboration.",
    links: [
      { label: "Resume", href: "/resume.pdf", primary: true },
      { label: "GitHub", href: "https://github.com/joshualumzy" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/joshualumzy" },
    ],
  },
  projects: [
    {
      title: "Leetotter",
      outcome: "A Chrome side-panel tutor that remembers how you practise LeetCode and decides what to solve next.",
      description:
        "Practising on NeetCode with an AI sidebar works, but the AI forgets what it taught you and nothing schedules revisits. Leetotter watches a session, nudges only when you're stuck, grades each attempt, and plans the next problem with spaced repetition (FSRS). A local Python companion runs the agents and stores everything in SQLite; the extension only reads the page and shows the UI. I simulated the plan before building it, which showed that supply of unseen problems, not retries, is the bottleneck.",
      tags: ["Python", "TypeScript", "Chrome MV3", "SQLite", "FSRS", "WebSocket"],
      demo: "",
      repo: "https://github.com/joshualumzy/leetotter",
    },
    ...[2, 3].map((n) => ({
      title: `Project Title ${n}`,
      outcome: "One-line outcome: what it did and the result that mattered.",
      description:
        "Placeholder detail. Two or three sentences on the problem, your approach, and what you learned. Replace with real content.",
      tags: ["Python", "PyTorch", "FastAPI"],
      demo: "",
      repo: "",
    })),
  ],
  experience: [
    {
      role: "Masters of Computing",
      company: "National University of Singapore",
      dates: "Aug 2025 — Present",
      bullets: ["Focusing on ML systems, cloud and deep learning."],
    },
    {
      role: "AI Safety Trainee",
      company: "Singapore AI Safety Hub",
      dates: "Jun 2025",
      bullets: [
        "Selected for an AI safety research engineering camp. Designed an eval framework testing how different LLMs respond under authoritative pressure.",
      ],
    },
    {
      role: "ML Specialist, Trust & Safety",
      company: "TikTok",
      dates: "Feb 2021 — Jun 2024",
      bullets: [
        "Built Trust & Safety solutions for short video and live, across a complex moderation landscape of shifting policies, operations and user behaviour.",
      ],
    },
  ],
  earlier: "Earlier: Technical Engineer at ExxonMobil Chemicals.",
  // level: "strong" | "comfortable" | "learning" (learning gets a dashed outline). icon = simple-icons slug.
  skills: [
    { name: "Python", icon: "python", level: "strong" },
    { name: "PyTorch", icon: "pytorch", level: "strong" },
    { name: "SQL", icon: "postgresql", level: "strong" },
    { name: "Git", icon: "git", level: "strong" },
    { name: "pandas", icon: "pandas", level: "strong" },
    { name: "scikit-learn", icon: "scikitlearn", level: "strong" },
    { name: "Docker", icon: "docker", level: "comfortable" },
    { name: "FastAPI", icon: "fastapi", level: "comfortable" },
    { name: "TypeScript", icon: "typescript", level: "comfortable" },
    { name: "Hugging Face", icon: "huggingface", level: "comfortable" },
    { name: "Linux", icon: "linux", level: "comfortable" },
    { name: "Rust", icon: "rust", level: "learning" },
    { name: "Kubernetes", icon: "kubernetes", level: "learning" },
    { name: "MLflow", icon: "mlflow", level: "learning" },
  ] as { name: string; icon: string; level: "strong" | "comfortable" | "learning" }[],
  contact: {
    line: "Open to roles in AI and software engineering. Say hello.",
    email: "joshualumzy@outlook.com",
  },
  nav: ["Experience", "Projects", "Skills", "Contact"],
};
