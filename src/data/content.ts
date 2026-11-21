// Replace every placeholder here — components never need editing for content.
export const content = {
  site: {
    title: "Josh — AI Engineer",
    legalName: "Josh",
    description: "Josh, AI engineer. Ex-TikTok ML specialist, now at NUS building AI agents and cloud systems around human-agent collaboration.",
  },
  hero: {
    name: "Josh",
    avatarAlt: "Cartoon portrait of Josh in a cowboy hat and gold sunglasses, hands pressed together",
    eyebrow: "Builder · MComp @ NUS · ex-TikTok",
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
      banner: { src: "/banners/neurolens.png", alt: "The NeuroLens 3D brain lighting up in red, with a timeline of predicted engagement below" },
      demo: "https://joshualumzy.github.io/neurolens-samples/",
      repo: "https://github.com/kelvinlowhm86/neurolens",
    },
  ],
  sideQuests: [
    {
      title: "Leetotter",
      outcome: "A Chrome side-panel tutor that remembers how you practise LeetCode and decides what to solve next.",
      description:
        "Practising on NeetCode with an AI sidebar works, but the AI forgets what it taught you and nothing schedules revisits. Leetotter watches a session, nudges only when you're stuck, grades each attempt, and plans the next problem with spaced repetition (FSRS). A local Python companion runs the agents and stores everything in SQLite; the extension only reads the page and shows the UI. The plan was simulated before building, which showed that the supply of unseen problems, not retries, is the bottleneck.",
      tags: ["Python", "TypeScript", "Chrome MV3", "SQLite", "FSRS"],
      banner: { src: "/banners/leetotter.png", alt: "The Leetotter side panel: a hint pointing back to an earlier mistake, and the Progress tab with strength per category" },
      demo: "",
      repo: "https://github.com/joshualumzy/leetotter",
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
  notes: {
    experience: "Work and study",
    projects: "Things I've built",
    skills: "What I use",
    contact: "Get in touch",
  },
  nav: ["Experience", "Projects", "Skills", "Contact"],
};
