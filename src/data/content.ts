// Replace every placeholder here — components never need editing for content.
export const content = {
  site: {
    title: "Your Name — AI Engineer",
    description: "Placeholder description: junior AI engineer open to first roles.",
  },
  hero: {
    name: "Your Name",
    eyebrow: "AI Engineer · MSc Graduate",
    tagline: "I build [what you do]. Looking for [role type] at [kind of team].",
    links: [
      { label: "Resume", href: "/resume.pdf", primary: true },
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://linkedin.com/" },
      { label: "Email", href: "mailto:you@example.com" },
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
  skills: {
    "Strong with": ["Python", "PyTorch", "SQL", "Git"],
    "Comfortable with": ["Docker", "FastAPI", "TypeScript", "AWS"],
    Learning: ["Rust", "MLOps", "LLM Evaluation"],
  } as Record<string, string[]>,
  contact: {
    line: "Placeholder: I'm open to junior roles — say hello.",
    email: "you@example.com",
    links: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://linkedin.com/" },
    ],
  },
  nav: ["Projects", "Experience", "Skills", "Contact"],
};
