// Replace every placeholder here — components never need editing for content.
export const content = {
  site: {
    title: "Josh Lum — AI Engineer",
    legalName: "Joshua Lum",
    description: "Josh Lum: ex-TikTok ML specialist and NUS Masters of Computing student building practical AI and LLM systems.",
  },
  hero: {
    name: "Josh",
    eyebrow: "MComp @ NUS · ex-TikTok",
    tagline: "I turn real pain points into software that does things better, cheaper or in a way that wasn't possible before. 3+ years shipping ML at TikTok, now going deeper on LLMs and agentic AI.",
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
  experience: [1, 2].map((n) => ({
    role: "Role Title",
    company: "Company Name",
    dates: n === 1 ? "2024 — Present" : "2022 — 2024",
    bullets: [
      "Placeholder bullet describing an impact-focused accomplishment.",
      "Placeholder bullet describing another accomplishment.",
    ],
  })),
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
