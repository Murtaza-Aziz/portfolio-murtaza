// All site content lives here — edit this file to update the portfolio.

export const meta = {
  name: "Murtaza Aziz",
  role: "Full Stack Software Engineer — Node.js · React · TypeScript · System Design",
  location: "Sydney, NSW",
  availability: "Open to opportunities",
  email: "murtaza.aziz101@gmail.com",
  phone: "+61 493 416 213",
  linkedin: "https://www.linkedin.com/in/murtazaaziz/",
  github: "https://github.com/Murtaza-Aziz",
  cv: "/cv/Murtaza_Aziz_CV.pdf",
  portrait: "/images/portrait.png",
} as const;

export type Project = {
  slug: string;
  title: string;
  year: string;
  stack: string;
  description: string;
  longDescription?: string;
  role?: string;
  links: { label: string; url: string }[];
  image?: string;
  flagship?: boolean;
  hasCaseStudy?: boolean;
};

export const projects: Project[] = [
  {
    slug: "docforge",
    title: "DocForge AI — PDF Automation SaaS",
    year: "2025–2026",
    stack:
      "TypeScript, React, Vite, Node.js, Express, PostgreSQL, Stripe, Cloudflare Pages, Render, PostHog",
    role: "Solo, production",
    description:
      "Built and shipped a real SaaS product: a visual PDF template builder with JSON data binding and an API for programmatic, on-demand PDF generation. Chose a decoupled Cloudflare Pages + Node/Express (Render) + PostgreSQL architecture for independent scaling and clean separation between editor UI and generation engine. Solved reliable template-to-PDF rendering with dynamic layouts and font/asset edge cases, isolating heavy jobs so generation never blocks API responses. Added AI-driven template audits, API-key auth, scoped access, and input validation to safely expose generation as a public API. Shipped on managed PaaS to validate demand fast with a clear path to containerised infra; integrated PostHog to track funnel drop-off and feature usage to prioritise the roadmap.",
    links: [
      { label: "Live site", url: "https://docforge-ai.pages.dev" },
      { label: "GitHub", url: "https://github.com/Murtaza-Aziz/docforge-ai" },
    ],
    image: "/images/docforge.png",
    flagship: true,
    hasCaseStudy: true,
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  employment?: string;
  techStack?: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Preplocal",
    role: "Software Engineer (Mid-Level)",
    period: "Nov 2025 — Present",
    employment: "Full-time",
    techStack:
      "TypeScript, JavaScript, Node.js, REST APIs, Google Cloud, Bubble.io, Make.com",
    bullets: [
      "Own delivery and logistics features end-to-end, translating ambiguous requirements from founders and operations into technical designs, scoped milestones, and shipped solutions.",
      "Redesigned the delivery route-optimisation algorithm using a nearest-neighbour heuristic with batched constraints, cutting route computation time by ~60% and improving delivery throughput by 40%.",
      "Drove the move from tightly-coupled workflows toward a modular, service-oriented structure with queue-based async jobs, removing blocking operations and improving system responsiveness under load.",
      "Optimised core data queries through restructured schemas and targeted indexing, reducing key read latency and supporting order-volume growth without added infrastructure cost.",
    ],
  },
  {
    company: "Preplocal",
    role: "Junior Software Engineer",
    period: "Nov 2024 — Nov 2025",
    employment: "Full-time",
    techStack: "JavaScript, Bubble.io, Make.com, APITemplate, Google Cloud",
    bullets: [
      "Implemented logistics and workflow-automation features against clear specs, contributing to the platform's day-to-day delivery operations.",
      "Architected flexible data structures to introduce a \"brands\" concept, letting companies manage multiple brands under one account without breaking existing records.",
      "Built automation pipelines (Make.com + APITemplate) that replaced manual document and data steps, reducing turnaround time on routine operational tasks.",
    ],
  },
  {
    company: "Meyd.it",
    role: "Full Stack Software Engineer (Internship)",
    period: "May 2024 — Oct 2024",
    employment: "Internship",
    techStack:
      "TypeScript, JavaScript, React, Node.js, Adonis.js, PostgreSQL, Stripe, AWS (EC2, S3, Lambda)",
    bullets: [
      "Designed and integrated escrow-based payment infrastructure with Stripe, handling payments, payouts, and compliance to securely hold funds between transacting parties.",
      "Built critical backend services deployed on AWS (EC2, S3, Lambda) and reworked the checkout flow for correctness and performance, reducing payment edge-case errors and improving checkout reliability.",
      "Modelled relational data in PostgreSQL and tuned queries on transaction-heavy paths, keeping response times stable as data grew.",
      "Reviewed pull requests and enforced quality standards in an agile team, improving consistency and reducing regressions across the codebase.",
    ],
  },
  {
    company: "EZiD",
    role: "Full Stack Software Engineer (Internship)",
    period: "Oct 2022 — Feb 2023",
    employment: "Internship",
    techStack: "MERN (MongoDB, Express, React, Node.js), Stripe, JavaScript, HTML, CSS",
    bullets: [
      "Built a custom subscription payment model with the Stripe API for EZiD's developer portal, ensuring secure, recurring transactions.",
      "Developed the developer-portal frontend in React with a focus on usability, working closely with senior engineers to align on UX and API contracts.",
      "Tackled early challenges integrating third-party billing with the existing backend, handling webhooks, edge cases, and failure states reliably.",
      "Collaborated cross-functionally to keep delivery aligned with project objectives within a fixed internship timeline.",
    ],
  },
  {
    company: "Brainybucks",
    role: "Project Lead & Software Engineer (Internship/Capstone project)",
    period: "Feb 2023 — Jul 2023",
    employment: "Internship / Capstone",
    techStack: "MERN (MongoDB, Express, React, Node.js), Axios, JavaScript, HTML, CSS",
    bullets: [
      "Led a 4-person team to deliver a responsive website to launch, owning scope, task breakdown, and delivery against stakeholder goals.",
      "Architected the frontend and API layer and made key technical decisions to keep the build maintainable for a junior team.",
      "Achieved a 95 SEO score through semantic markup, performance, and metadata work, expanding online visibility and reach.",
    ],
  },
];

export const skills =
  "TypeScript, JavaScript, Python, Java, SQL, HTML, CSS, React, Redux, Tailwind CSS, Node.js, Express, Adonis.js, MongoDB, PostgreSQL, Stripe, AWS, Google Cloud, Cloudflare Pages, Render, Jest, Playwright, Git, GitHub Actions, GPT/Claude/Cursor, Figma, Jira";

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    institution: "Macquarie University",
    degree: "Bachelor of Science in Information Technology",
    period: "Graduated July 2023",
    note: "Major: Web and Mobile App Development",
  },
];

// DocForge case study content
export const docforgeCaseStudy = {
  tagline:
    "A production SaaS for businesses that need professional PDFs — without hiring a designer.",
  overview: `DocForge AI lets business owners, office teams, and developers create, customise, and automate PDF documents (invoices, quotes, delivery notes, certificates) through a visual block editor. Fields bind directly to JSON data; three automation paths — in-app builder, no-code webhook triggers, and shareable public forms — all funnel through the same hardened render pipeline.`,
  problem: `Most PDF tools force a choice: buy expensive design software, wrestle with HTML-to-PDF libraries, or accept bland templates. DocForge bridges that gap — a no-code interface for the operator, a developer REST API for engineers, and a secure headless render engine under the hood.`,
  highlights: [
    {
      label: "Visual PDF Builder",
      detail:
        "Drag-and-drop block library (header, table, totals, QR code, signature, columns). A4/Letter canvas, theme editor, variable binding from JSON paths, and a live preview before export.",
    },
    {
      label: "Three automation paths",
      detail:
        "No-code magic webhook URLs (drop into Shopify/Stripe/WooCommerce), shareable public forms with instant PDF download, and a keyed REST API — all sharing the same Puppeteer render pipeline.",
    },
    {
      label: "PDF Import",
      detail:
        "Upload an existing PDF → multi-stage extraction pipeline (layout detection → heuristic mappers → confidence scoring → optional AI remap) converts it into an editable DocForge template.",
    },
    {
      label: "OpenAI Integration",
      detail:
        "Pro/Business plans unlock AI template generation from natural language prompts, JSON field mapping suggestions, and layout audits. A deterministic mock provider keeps development and CI fully offline.",
    },
    {
      label: "Stripe Billing",
      detail:
        "Four-tier subscription model (Free / Starter $19 / Pro $39 / Business $99) with plan gates on template count, monthly PDF quota, AI features, and API key access.",
    },
    {
      label: "Security-first architecture",
      detail:
        "HMAC-signed download URLs, hashed API/hook keys, SSRF-safe image loading in Puppeteer, sanitised HTML before render, CSRF middleware, Stripe raw-body webhook verification.",
    },
    {
      label: "Split-cloud deployment",
      detail:
        "Cloudflare Pages hosts the SPA and proxies /api to a Render Node.js worker, keeping session cookies same-origin. Neon serverless Postgres handles persistence; Cloudflare R2 is available for storage scale-out.",
    },
    {
      label: "Test discipline",
      detail:
        "220+ automated tests across 48 files using Vitest with pg-mem — covering billing, security, CSRF, PDF import, automation (hooks/forms), API keys, and route integration — no live database in CI.",
    },
  ],
  stack: [
    { category: "Frontend", items: "React 18, Vite, TypeScript, Tailwind CSS, TanStack Query, Zustand, @dnd-kit, Framer Motion" },
    { category: "Backend", items: "Node.js 20, Express, TypeScript, Zod, JWT + bcrypt, Helmet, rate limiting" },
    { category: "Database", items: "Neon Postgres (11 SQL migrations), pg-mem for testing" },
    { category: "PDF Engine", items: "Puppeteer / headless Chromium, JSDOM, DOMPurify" },
    { category: "AI", items: "OpenAI gpt-4o-mini, mock provider for dev/CI" },
    { category: "Payments", items: "Stripe Checkout, customer portal, webhook handling" },
    { category: "Email", items: "Resend (password reset + PDF delivery)" },
    { category: "Deploy", items: "Cloudflare Pages (edge SPA + API proxy) + Render (Node worker + 1 GB persistent disk)" },
  ],
  links: [
    { label: "Live site", url: "https://docforge-ai.pages.dev" },
    { label: "GitHub", url: "https://github.com/Murtaza-Aziz/docforge-ai" },
  ],
};
