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
    tagline: "I build AI agents that are cheap and reliable enough to run in production, on the cloud. 3+ years shipping ML at TikTok, now deepening it with a Masters at NUS.",
    links: [
      { label: "Resume", href: "/resume.pdf", primary: true },
      { label: "GitHub", href: "https://github.com/joshualumzy" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/joshualumzy" },
    ],
  },
  projects: [1, 2, 3].map((n) => ({
    title: `Project Title ${n}`,
    outcome: "One-line outcome: what it did and the result that mattered.",
    description:
      "Placeholder detail. Two or three sentences on the problem, your approach, and what you learned. Replace with real content.",
    tags: ["Python", "PyTorch", "FastAPI"],
    demo: "#",
    repo: "#",
  })),
  experience: [
    {
      role: "Masters of Computing",
      company: "National University of Singapore",
      dates: "Aug 2025 — Present",
      bullets: ["Focus on agentic AI and building cost-effective, production-ready systems on the cloud.", "CAP 4.92/5 (in progress)."],
    },
    {
      role: "AI Safety Trainee",
      company: "Singapore AI Safety Hub",
      dates: "Jun 2025",
      bullets: [
        "Selected for the Research Engineering Camp for Alignment Practitioners, covering mechanistic interpretability, RL and evals.",
        "Designed an eval framework to test how different LLMs respond under authoritative pressure.",
      ],
    },
    {
      role: "ML Specialist, Trust & Safety",
      company: "TikTok",
      dates: "Feb 2021 — Jun 2024",
      bullets: [
        "Built an LLM-assisted pipeline to generate SFT data for content moderation, cutting labelling costs by over 80%.",
        "Cut compute costs by pruning 20% of weak risk predictors from a 1,000-feature ensemble.",
        "Led a 3-person audio team; expanded ASR and language-ID coverage to 90% of languages.",
      ],
    },
  ],
  earlier: "Earlier: Technical Engineer at ExxonMobil Chemicals, analytics at SAS, and a BEng in Chemical Engineering (Honours Highest Distinction) from NUS.",
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
    links: [
      { label: "GitHub", href: "https://github.com/joshualumzy" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/joshualumzy" },
    ],
  },
  nav: ["Experience", "Projects", "Skills", "Contact"],
};
