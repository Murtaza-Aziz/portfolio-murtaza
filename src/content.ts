// All site content lives here — edit this file to update the portfolio.

export const meta = {
  name: "Murtaza Aziz",
  role: "Software engineer / full-stack web developer",
  location: "Sydney, NSW",
  availability: "Open to opportunities",
  email: "murtaza.aziz101@gmail.com",
  phone: "+61 493 416 213",
  linkedin: "https://www.linkedin.com/in/murtazaaziz/",
  github: "https://github.com/Murtaza-Aziz",
  cv: "/images/Murtaza_Aziz_CV.pdf",
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
    title: "DocForge AI",
    year: "2025–2026",
    stack:
      "React, TypeScript, Express, Neon Postgres, Puppeteer, Stripe, OpenAI, Resend, Cloudflare Pages + Render",
    role: "Solo founder / full-stack engineer",
    description:
      "Production SaaS for designing and automating business PDFs — invoices, quotes, delivery notes. Visual block editor with live preview, Stripe subscription billing, no-code webhook automation, and a developer REST API.",
    links: [
      { label: "Live site", url: "https://docforge-ai.pages.dev" },
      { label: "GitHub", url: "https://github.com/Murtaza-Aziz/docforge-ai" },
    ],
    image: "/images/docforge.png",
    flagship: true,
    hasCaseStudy: true,
  },
  {
    slug: "brainybucks",
    title: "BrainyBucks",
    year: "2023",
    stack: "React, CSS, Netlify",
    role: "Project Lead & Software Engineer",
    description:
      "Financial education website for a startup. Led a team of four from brief to launch, achieving an SEO score of 95 and a fully responsive build.",
    links: [{ label: "Live site", url: "https://brainybucks.netlify.app/" }],
    image: "/images/brainy-bucks-logo-work.jpg",
  },
  {
    slug: "ezid",
    title: "EZiD — Payment Integration",
    year: "2023",
    stack: "React, Node.js, Stripe API",
    role: "Full Stack Software Engineer",
    description:
      "Integrated a custom subscription payment model using Stripe into EZiD's developer portal, enabling secure recurring transactions and a streamlined onboarding flow.",
    links: [{ label: "ezid.io", url: "https://www.ezid.io/" }],
    image: "/images/ezid-work.jpg",
  },
  {
    slug: "recipe-app",
    title: "Recipe Recommendation App",
    year: "2023",
    stack: "React, JavaScript",
    role: "Developer",
    description:
      "React app that recommends recipes based on available ingredients, demonstrating hooks, component composition, and API data mapping.",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Murtaza-Aziz/recipe-recommendation-app",
      },
    ],
    image: "/images/recipe_app.png",
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
    role: "Junior Software Engineer",
    period: "Nov 2024 — Present",
    employment: "Full-time",
    techStack:
      "JavaScript, Bubble.io, Make.com, APITemplate, Google Cloud Services",
    bullets: [
      "Designed and optimized delivery route algorithms, improving logistics efficiency by 40%.",
      "Architected complex data structures for companies to add a notion of brands.",
      "Implemented workflow automation and enhanced system responsiveness.",
    ],
  },
  {
    company: "Meyd.it",
    role: "Full Stack Software Engineer",
    period: "May 2024 — Oct 2024",
    techStack:
      "TypeScript, JavaScript, React, Node.js, Adonis.js, PostgreSQL, Stripe, AWS",
    bullets: [
      "Integrated an escrow account infrastructure and managed Stripe for payments, payouts, and compliance.",
      "Developed critical backend services and optimized checkout processes for accuracy and efficiency.",
      "Conducted code reviews and approved pull requests in GitHub in an agile environment.",
    ],
  },
  {
    company: "EZiD",
    role: "Full Stack Software Engineer",
    period: "Jan 2023 — Feb 2023",
    techStack: "MERN, Stripe, JavaScript, HTML, CSS",
    bullets: [
      "Integrated custom subscription payment model using Stripe API, ensuring secure transactions.",
      "Designed an intuitive front end for EZiD's developer portal, prioritizing user experience.",
      "Facilitated cross-functional collaboration, ensuring alignment with project objectives.",
    ],
  },
  {
    company: "Brainybucks",
    role: "Project Lead & Software Engineer",
    period: "Feb 2023 — Jul 2023",
    techStack: "MERN, Axios, JavaScript, HTML, CSS",
    bullets: [
      "Led the development of a team of 4 students to a successful launch of a responsive website.",
      "Achieved an outstanding SEO score of 95, expanding online visibility and market reach.",
      "Managed project scope and delivery, maintaining alignment with stakeholder goals.",
    ],
  },
];

export const skills =
  "TypeScript, JavaScript, React, Tailwind CSS, Node.js, Express, PostgreSQL, MongoDB, Stripe, Python, Java, AWS, Google Cloud, Jest, Git, GitHub Actions, Figma, Jira";

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
