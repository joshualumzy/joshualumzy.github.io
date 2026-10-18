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
      title: "Kaki.ai",
      outcome: "An operating agent for small teams that answers from company records, cites its sources, and leaves every action for a person to approve.",
      description:
        "Small teams spend their time rebuilding context scattered across chat, tickets and meetings. Kaki searches before it answers, cites the records it read, and says when the evidence isn't there. It turns meeting decisions into drafts and flags hiring gaps, but a person approves the exact payload before anything is sent. A team project.",
      tags: ["TypeScript", "PostgreSQL", "pgvector", "AWS", "Agents"],
      demo: "https://kakiai.me",
      repo: "https://github.com/joshualumzy/personal_agent_long_context",
    },
    {
      title: "NeuroLens",
      outcome: "A tool that predicts which moments of a video engage the brain most, for neuromarketers.",
      description:
        "NeuroLens runs Meta's TRIBE v2 brain-encoding model on a video and predicts neural activity second by second. It shows which moments are most engaging, and whether faces, scenes or audio are driving it. A team project: the model is being deployed to the cloud, with a tool built around it.",
      tags: ["Python", "Flask", "PyTorch", "TRIBE v2", "Cloud"],
      demo: "",
      repo: "https://github.com/kelvinlowhm86/neurolens",
    },
    {
      title: "Leetotter",
      outcome: "A Chrome side-panel tutor that remembers how you practise LeetCode and decides what to solve next.",
      description:
        "Practising on NeetCode with an AI sidebar works, but the AI forgets what it taught you and nothing schedules revisits. Leetotter watches a session, nudges only when you're stuck, grades each attempt, and plans the next problem with spaced repetition (FSRS). A local Python companion runs the agents and stores everything in SQLite; the extension only reads the page and shows the UI. The plan was simulated before building, which showed that the supply of unseen problems, not retries, is the bottleneck. A solo project.",
      tags: ["Python", "TypeScript", "Chrome MV3", "SQLite", "FSRS"],
      demo: "",
      repo: "https://github.com/joshualumzy/leetotter",
    },
    {
      title: "Flowsmith",
      outcome: "A fine-tuned 3B model that turns a plain-English request into a valid, runnable workflow, with a browser editor to inspect and run it.",
      description:
        "Describe a workflow in words and the system generates workflow JSON, which you can edit in the browser, validate and run locally. A Qwen2.5-Coder 3B model is fine-tuned on about 6,900 examples, with decoding constrained to the workflow grammar. The best checkpoint passed the validator on 96.7% of a 150-prompt test set. A team course project (CS5462).",
      tags: ["Python", "FastAPI", "QLoRA", "XGrammar", "Ray"],
      demo: "",
      repo: "https://github.com/joshualumzy/CS5462_PROJ2",
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
  // icon = simple-icons slug; omit for a text-only chip (AWS has no simple-icons entry).
  skills: [
    { name: "Python", icon: "python" },
    { name: "SQL", icon: "postgresql" },
    { name: "pandas", icon: "pandas" },
    { name: "PyTorch", icon: "pytorch" },
    { name: "Hugging Face", icon: "huggingface" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "Docker", icon: "docker" },
    { name: "Git", icon: "git" },
    { name: "AWS", icon: "" },
    { name: "Terraform", icon: "terraform" },
  ] as { name: string; icon: string }[],
  contact: {
    line: "Open to roles in AI and software engineering. Say hello.",
    email: "joshualumzy@outlook.com",
  },
  nav: ["Experience", "Projects", "Skills", "Contact"],
};
