// Replace every placeholder here — components never need editing for content.
export const content = {
  site: {
    title: "Josh — AI Engineer",
    legalName: "Josh",
    description: "Josh, AI engineer. Ex-TikTok ML specialist, now at NUS building AI agents and cloud systems around human-agent collaboration.",
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
      title: "NeuroLens",
      outcome: "A tool that predicts which moments of a video engage the brain most, for neuromarketers.",
      description:
        "NeuroLens runs Meta's TRIBE v2 brain-encoding model on a video and predicts neural activity second by second. It shows which moments are most engaging, and whether faces, scenes or audio are driving it. The full product has sign-in, uploads and GPU analysis on AWS; ten finished sample analyses are open to browse.",
      tags: ["Python", "Flask", "PyTorch", "TRIBE v2", "AWS"],
      demo: "https://joshualumzy.github.io/neurolens-samples/",
      repo: "https://github.com/kelvinlowhm86/neurolens",
    },
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
  // icon = simple-icons slug, or a key in icons.ts for logos simple-icons lacks (AWS).
  skills: [
    { name: "Python", icon: "python" },
    { name: "SQL", icon: "postgresql" },
    { name: "pandas", icon: "pandas" },
    { name: "PyTorch", icon: "pytorch" },
    { name: "Hugging Face", icon: "huggingface" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "AWS", icon: "aws" },
    { name: "Terraform", icon: "terraform" },
  ] as { name: string; icon: string }[],
  contact: {
    line: "Open to roles in AI and software engineering. Say hello.",
    email: "joshualumzy@outlook.com",
  },
  nav: ["Experience", "Projects", "Skills", "Contact"],
};
