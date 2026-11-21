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
      outcome: "Shows which moments of a video hold attention, so you can cut the stronger version before you publish.",
      description:
        "Give NeuroLens a video and it predicts, second by second, how an average viewer's brain responds, using Meta's TRIBE v2 model. A 3D brain and a timeline show where faces, scenes, speech and sound are landing, and an AI report points to the moments worth keeping or trimming. It runs as a full product with sign-in, uploads and GPU analysis on AWS.",
      award: "Best Project (Platinum), CS5224 track at NUS STEPS",
      tags: ["Python", "Flask", "PyTorch", "TRIBE v2", "AWS"],
      banner: { src: "/banners/neurolens.png", alt: "Two NeuroLens screens: a second-by-second brain response analysis of a sample video, and the AI report with moments to keep or trim" },
      demo: "https://joshualumzy.github.io/neurolens-samples/",
      repo: "https://github.com/kelvinlowhm86/neurolens",
    },
  ],
  sideQuests: [
    {
      title: "Leetotter",
      outcome: "A Chrome side-panel tutor that remembers how you practise LeetCode and decides what to solve next.",
      description:
        "A chatbot helps with one problem, then forgets you. Leetotter sits beside NeetCode's editor and keeps track of what you solved, where you slipped and what to do next. It gives interview-style hints only when you ask, often pointing back to a mistake from an earlier problem, and brings problems back before you forget them. Two independent graders check each solve, so \"done\" means you did it on your own. Your history stays on your Mac.",
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
      bullets: ["Focusing on ML systems, cloud and human-agent collaboration."],
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
