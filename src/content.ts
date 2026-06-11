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
export type CaseStudyItem = {
  label: string;
  detail: string;
};

export const docforgeCaseStudy = {
  tagline:
    "A production SaaS for businesses that need professional PDFs — without hiring a designer.",
  overview: `DocForge AI is a solo-built, production SaaS for designing and automating business PDFs — invoices, quotes, delivery notes, certificates, and custom documents. Users compose layouts in a visual block editor, bind fields to JSON, generate real PDFs server-side, and automate delivery via webhooks, public forms, or a REST API. All three paths share one hardened Puppeteer render pipeline.`,
  problem: `Most PDF tools force a painful trade-off: expensive design software, fragile HTML-to-PDF templates, or opaque low-code platforms with weak developer integration. DocForge targets ops teams and developers who need design-once → bind JSON → preview → generate → automate — with security, billing, and testability built in from the start.`,
  metrics: [
    { label: "Automated tests", value: "~285 (241 server + 44 client)" },
    { label: "SQL migrations", value: "13 (Neon Postgres)" },
    { label: "Block types", value: "15 reusable document blocks" },
    { label: "Billing tiers", value: "4 plans with server-side entitlements" },
    { label: "Status", value: "Live in production" },
  ],
  highlights: [
    {
      label: "Visual PDF Builder",
      detail:
        "Drag-and-drop block library (header, table, totals, QR code, signature, columns, field groups). A4/Letter canvas, theme editor, variable binding from JSON paths, undo/redo, resizable panels, and a live canvas preview before export.",
    },
    {
      label: "Three automation paths",
      detail:
        "No-code magic webhook URLs (Shopify, Stripe, WooCommerce), shareable public forms with instant PDF download, and a keyed REST API — all sharing the same Puppeteer render pipeline, entitlement checks, and generation logs.",
    },
    {
      label: "PDF Import",
      detail:
        "Upload an existing PDF → extraction (pdfexcavator with pdf-parse fallback) → heuristic mappers (invoice, PO, consignment, tax-invoice) → confidence scoring → optional AI remap when score < 0.42 or document is scanned. Returns a review checklist before the user edits.",
    },
    {
      label: "OpenAI Integration",
      detail:
        "Pro/Business plans unlock AI template generation, JSON field mapping, layout audits, and low-confidence import remaps. A deterministic mock provider keeps development and CI fully offline without OpenAI costs.",
    },
    {
      label: "Stripe Billing",
      detail:
        "Four-tier subscription model (Free / Starter $19 / Pro $39 / Business $99) with Stripe Checkout, customer portal, and webhook sync. Server-side entitlements gate template count, monthly PDF quota, AI features, API keys, and team seats.",
    },
    {
      label: "Security-first architecture",
      detail:
        "HMAC-signed download URLs, hashed API/hook keys (shown once), SSRF-safe image loading in Puppeteer, DOMPurify sanitisation, CSRF middleware on mutations, JWT revocation via token_version, and Stripe raw-body webhook verification before express.json().",
    },
    {
      label: "Split-cloud deployment",
      detail:
        "Cloudflare Pages hosts the SPA and proxies /api to a Render Node.js worker via a Pages Function — keeping HttpOnly session cookies same-origin. Neon serverless Postgres handles persistence; optional Cloudflare R2 for generated PDF storage at scale.",
    },
    {
      label: "Test discipline",
      detail:
        "~285 automated tests across 54 files using Vitest with pg-mem — covering billing, security (17 dedicated tests), CSRF, PDF import (12 test files), automation hooks/forms (19 tests), API keys, and route integration — no live database in CI.",
    },
  ],
  challenges: [
    {
      label: "Puppeteer on a budget Render tier",
      detail:
        "Headless Chromium is CPU-heavy and slow on Render Starter. I solved build-time Chrome installation, browser warm-up on startup, a small page pool (2 tabs), and skipping network interception when HTML has no external URLs — but first-render latency on cold starts remains a real constraint.",
    },
    {
      label: "Same-origin auth across two hosts",
      detail:
        "The SPA lives on Cloudflare Pages while the API runs on Render. HttpOnly cookies only work if the browser sees one origin — so I added a Pages Function proxy for /api/* and had to fix a legacy duplicate-cookie bug (Path=/api vs Path=/) that caused random 'Session expired' errors.",
    },
    {
      label: "Production schema drift",
      detail:
        "Auth returned 500s in production while /api/health still returned 200 — because health never touched the database and Neon was missing newer migrations (billing, Google OAuth). Taught me that green health checks don't prove schema readiness.",
    },
    {
      label: "PDF import accuracy",
      detail:
        "Extracting editable templates from arbitrary PDFs is inherently lossy. I built a multi-stage pipeline with layout-family classifiers, weighted confidence scoring, and optional AI remap — but scanned documents and complex multi-column layouts still often land in 'needs review' rather than 'ready to edit'.",
    },
    {
      label: "Client preview vs server render",
      detail:
        "The builder canvas preview is intentionally approximate for speed. The server-side renderer is the source of truth — which means users can occasionally see layout differences between preview and final PDF, a UX gap I document rather than hide.",
    },
  ] satisfies CaseStudyItem[],
  tradeOffs: [
    {
      label: "Managed PaaS over containers (for now)",
      detail:
        "Shipped on Cloudflare Pages + Render to validate demand quickly and keep ops simple. Trade-off: PDF generation latency and ephemeral disk on Starter tier. Clear migration path to a dedicated PDF worker or containerised infra if volume grows.",
    },
    {
      label: "Postgres + JSONB over a document store",
      detail:
        "Templates are stored as JSONB blocks inside relational Postgres (Neon). Gives me ACID billing state, SQL migrations, and pg-mem in tests — at the cost of more complex queries when searching across nested block structures.",
    },
    {
      label: "In-memory rate limiting",
      detail:
        "Rate limits (auth, public routes, AI) run in-process for simplicity on a single Render instance. Works for current scale but won't hold across horizontal scaling — Redis-backed limits are on the hardening backlog.",
    },
    {
      label: "Local disk default for generated PDFs",
      detail:
        "Render's 1 GB persistent disk is acceptable for MVP volume. R2/S3 adapter exists but isn't wired as default — trade-off between shipping fast and production-grade object storage with signed URLs and lifecycle cleanup.",
    },
  ] satisfies CaseStudyItem[],
  shortcomings: [
    {
      label: "No native integrations yet",
      detail:
        "There is no Zapier app or Shopify plugin — users wire automation via webhook URLs or the REST API. Fine for technical users; friction for non-technical operators who expect one-click store connectors.",
    },
    {
      label: "CI doesn't run the full client suite",
      detail:
        "GitHub Actions runs server tests and a frontend build check, but not all ~44 client tests. Server-side coverage is strong; client regressions in the builder UI rely more on manual smoke tests.",
    },
    {
      label: "Single-instance assumptions",
      detail:
        "In-memory rate limits, Puppeteer browser pooling, and local disk storage all assume one backend instance. Scaling out requires Redis, shared object storage, and likely a dedicated PDF worker — documented but not built yet.",
    },
    {
      label: "Import pipeline ceiling",
      detail:
        "Heuristic import works well on structured business documents (invoices, POs, delivery notes) but struggles with freeform designs, heavy branding, and scanned PDFs. AI remap helps but adds cost and latency — not a magic bullet.",
    },
    {
      label: "Cold-start PDF latency",
      detail:
        "First PDF on a cold Render instance can take several seconds. Acceptable for async webhook/form flows; noticeable when a user clicks 'Generate' in the builder and expects instant feedback.",
    },
  ] satisfies CaseStudyItem[],
  learnings: [
    {
      label: "Health checks must touch critical dependencies",
      detail:
        "A passing health endpoint that skips the database masked missing migrations for days. I now treat migration status and DB connectivity as launch gates, not afterthoughts.",
    },
    {
      label: "Stripe webhooks need raw body access",
      detail:
        "Registering the Stripe webhook route before express.json() was non-negotiable for signature verification. A small ordering detail that breaks billing silently if wrong.",
    },
    {
      label: "Mock AI providers unlock real test coverage",
      detail:
        "Building a deterministic mock AiProvider meant AI features (audit, import remap, template generation) could be tested in CI without API keys or network calls — and dev works fully offline.",
    },
    {
      label: "Security belongs in the render path, not around it",
      detail:
        "SSRF-safe image URLs, DOMPurify, disabled JS in Puppeteer, prototype-pollution guards on JSON paths, and HMAC-signed downloads — each layer catches a different class of attack. One missing layer in a user-controlled HTML→PDF pipeline is enough to compromise the server.",
    },
    {
      label: "PostHog changed how I prioritise",
      detail:
        "Tracking signups, subscription funnel drop-off, PDF generation volume, and AI feature usage with PostHog gave real data for roadmap decisions — e.g. which automation path (webhook vs form vs API) users actually adopt after onboarding.",
    },
    {
      label: "Same-origin proxy is worth the complexity",
      detail:
        "Splitting frontend and backend across Cloudflare Pages and Render simplified hosting costs and deployment — but the Pages Function API proxy was essential for secure cookie-based auth. Without it, I'd have fallen back to localStorage JWTs, which I wanted to avoid.",
    },
  ] satisfies CaseStudyItem[],
  stack: [
    { category: "Frontend", items: "React 18, Vite, TypeScript, Tailwind CSS, TanStack Query, Zustand, @dnd-kit, Framer Motion, PostHog" },
    { category: "Backend", items: "Node.js 20, Express, TypeScript, Zod, JWT + bcrypt, Helmet, rate limiting, PostHog" },
    { category: "Database", items: "Neon Postgres (13 SQL migrations), pg-mem for testing" },
    { category: "PDF Engine", items: "Puppeteer / headless Chromium, JSDOM, DOMPurify, pdfexcavator, pdf-parse" },
    { category: "AI", items: "OpenAI gpt-4o-mini, deterministic mock provider for dev/CI" },
    { category: "Payments", items: "Stripe Checkout, customer portal, webhook handling, entitlements service" },
    { category: "Email", items: "Resend (password reset + PDF delivery on webhook/form triggers)" },
    { category: "Deploy", items: "Cloudflare Pages (edge SPA + API proxy) + Render (Node worker + 1 GB persistent disk) + optional Cloudflare R2" },
  ],
  links: [
    { label: "Live site", url: "https://docforge-ai.pages.dev" },
    { label: "GitHub", url: "https://github.com/Murtaza-Aziz/docforge-ai" },
  ],
};
