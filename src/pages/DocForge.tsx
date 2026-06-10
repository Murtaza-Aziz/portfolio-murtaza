import { Link } from "react-router-dom";
import { docforgeCaseStudy, projects } from "../content";
import { asset } from "../lib/paths";

const flagship = projects.find((p) => p.slug === "docforge")!;

export default function DocForge() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Back link */}
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors mb-16 inline-block link-underline"
      >
        ← Back to portfolio
      </Link>

      {/* Header */}
      <header className="mb-16">
        <div className="flex items-baseline gap-4 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
            Case Study
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
            {flagship.year}
          </span>
        </div>

        <h1
          className="font-serif font-black leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
        >
          DocForge{" "}
          <span style={{ color: "var(--color-accent)" }}>AI</span>
        </h1>

        <p
          className="font-serif font-light italic max-w-2xl"
          style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
        >
          {docforgeCaseStudy.tagline}
        </p>

        <div
          className="mt-8 w-full"
          style={{ height: "1px", backgroundColor: "var(--color-rule)" }}
        />

        {/* Links */}
        <div className="flex items-center gap-6 mt-6">
          {docforgeCaseStudy.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest link-underline"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </header>

      {/* Hero image */}
      <div
        className="w-full mb-20 overflow-hidden"
        style={{ border: "1px solid var(--color-rule)" }}
      >
        <img
          src={asset("/images/docforge.png")}
          alt="DocForge AI — PDF builder interface"
          className="w-full object-cover"
          style={{ aspectRatio: "16/9", objectPosition: "top" }}
        />
      </div>

      {/* Overview */}
      <Section label="Overview">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed mb-5">
              {docforgeCaseStudy.overview}
            </p>
            <p className="text-base leading-relaxed text-[var(--color-ink-muted)]">
              {docforgeCaseStudy.problem}
            </p>
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <div
              className="p-6"
              style={{ border: "1px solid var(--color-rule)" }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] mb-4">
                My role
              </p>
              <p className="font-serif font-bold text-lg mb-6">
                {flagship.role}
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] mb-2">
                Status
              </p>
              <p className="text-sm mb-6">
                Live in production —{" "}
                <a
                  href="https://docforge-ai.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  docforge-ai.pages.dev
                </a>
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] mb-2">
                Timeline
              </p>
              <p className="text-sm">{flagship.year}</p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Highlights */}
      <Section label="Engineering Highlights">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {docforgeCaseStudy.highlights.map((h, i) => (
            <div
              key={h.label}
              className="py-8 pr-0 md:pr-12 border-b"
              style={{
                borderColor: "var(--color-rule)",
                borderRight:
                  i % 2 === 0 ? "1px solid var(--color-rule)" : "none",
              }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] mb-3">
                {h.label}
              </p>
              <p className="text-sm leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Architecture diagram (text-based) */}
      <Section label="Architecture">
        <div
          className="p-8 font-mono text-xs leading-loose"
          style={{ border: "1px solid var(--color-rule)", color: "var(--color-ink-muted)" }}
        >
          <pre className="overflow-x-auto whitespace-pre">{`
  Browser (React SPA)
       │
       ▼
  Cloudflare Pages
  ├── Static SPA assets (edge CDN)
  └── /api/* → Pages Function (same-origin proxy)
                 │
                 ▼
            Render.com
            ├── Express API server (Node 20)
            │   ├── Auth (JWT + HttpOnly cookies)
            │   ├── Template CRUD
            │   ├── Webhook + Form automation
            │   ├── Stripe billing
            │   └── PDF generation (Puppeteer worker)
            │
            ├── Neon Postgres (serverless)
            │   └── 11 SQL migrations
            │
            └── Persistent disk / Cloudflare R2
                └── Generated PDFs + uploads
          `.trim()}</pre>
        </div>
      </Section>

      {/* Stack table */}
      <Section label="Full Stack">
        <div className="flex flex-col">
          {docforgeCaseStudy.stack.map((row) => (
            <div
              key={row.category}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 py-5 border-b"
              style={{ borderColor: "var(--color-rule)" }}
            >
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
                  {row.category}
                </span>
              </div>
              <div className="md:col-span-9">
                <p className="text-sm leading-relaxed">{row.items}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer CTAs */}
      <div
        className="mt-20 pt-10 border-t flex flex-col md:flex-row items-start md:items-center gap-6"
        style={{ borderColor: "var(--color-rule)" }}
      >
        {docforgeCaseStudy.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest border border-[var(--color-ink)] px-6 py-3 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
          >
            {link.label} →
          </a>
        ))}
        <Link
          to="/"
          className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] link-underline"
        >
          ← Back to portfolio
        </Link>
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-16">
      <div
        className="w-full mb-8"
        style={{ height: "1px", backgroundColor: "var(--color-rule)" }}
      />
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] mb-8">
        {label}
      </p>
      {children}
    </section>
  );
}
