import { Link } from "react-router-dom";
import { docuplateCaseStudy, projects, type CaseStudyItem } from "../content";
import { asset } from "../lib/paths";

const flagship = projects.find((p) => p.slug === "docuplate")!;

export default function Docuplate() {
  return (
    <div className="min-h-screen pt-24 pb-32 px-6 md:px-10 max-w-7xl mx-auto">
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors mb-16 inline-block link-underline"
      >
        ← Back to portfolio
      </Link>

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
          Docu<span style={{ color: "var(--color-accent)" }}>plate</span>
        </h1>

        <p
          className="font-serif font-light italic max-w-2xl"
          style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)" }}
        >
          {docuplateCaseStudy.tagline}
        </p>

        <div
          className="mt-8 w-full"
          style={{ height: "1px", backgroundColor: "var(--color-rule)" }}
        />

        <div className="flex items-center gap-6 mt-6">
          {docuplateCaseStudy.links.map((link) => (
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

      <div
        className="w-full mb-20 overflow-hidden flex items-center justify-center p-6 md:p-10 rounded-sm"
        style={{ border: "1px solid var(--color-rule)" }}
      >
        <img
          src={asset("/images/docuplate.png")}
          alt="Docuplate — logo"
          className="max-h-[140px] max-w-[140px] md:max-h-[168px] md:max-w-[168px] object-contain rounded-xl"
        />
      </div>

      <Section label="Overview">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="text-base leading-relaxed mb-5">
              {docuplateCaseStudy.overview}
            </p>
            <p className="text-base leading-relaxed text-[var(--color-ink-muted)]">
              {docuplateCaseStudy.problem}
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
                  href="https://www.docuplate.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  docuplate.io
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

      <Section label="At a Glance">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
          {docuplateCaseStudy.metrics.map((m, i) => (
            <div
              key={m.label}
              className="py-6 pr-6 border-b md:border-b-0"
              style={{
                borderColor: "var(--color-rule)",
                borderRight:
                  i < docuplateCaseStudy.metrics.length - 1
                    ? "1px solid var(--color-rule)"
                    : "none",
              }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)] mb-2">
                {m.label}
              </p>
              <p className="font-serif font-bold text-sm leading-snug">
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Engineering Highlights">
        <ItemGrid items={docuplateCaseStudy.highlights} columns={2} />
      </Section>

      <Section label="Architecture">
        <p className="text-sm leading-relaxed text-[var(--color-ink-muted)] mb-6 max-w-3xl">
          Split-cloud by design: the SPA and API proxy share a Cloudflare Pages
          origin so HttpOnly session cookies work without localStorage JWTs. The
          API runs on Render with Puppeteer, Neon Postgres, and optional R2
          storage.
        </p>
        <div
          className="p-8 font-mono text-xs leading-loose"
          style={{
            border: "1px solid var(--color-rule)",
            color: "var(--color-ink-muted)",
          }}
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
            │   ├── Template CRUD + PDF import
            │   ├── Webhook + Form automation
            │   ├── Stripe billing + entitlements
            │   └── PDF generation (Puppeteer worker)
            │
            ├── Neon Postgres (serverless)
            │   └── 13 SQL migrations
            │
            └── Persistent disk / Cloudflare R2
                └── Generated PDFs + uploads
          `.trim()}</pre>
        </div>
      </Section>

      <Section label="Challenges">
        <p className="text-sm leading-relaxed text-[var(--color-ink-muted)] mb-8 max-w-3xl">
          The hardest problems weren't in the UI — they were in production
          PDF rendering, cross-origin auth, schema drift, and turning messy
          real-world PDFs into editable templates.
        </p>
        <ItemGrid items={docuplateCaseStudy.challenges} columns={1} />
      </Section>

      <Section label="Trade-offs">
        <p className="text-sm leading-relaxed text-[var(--color-ink-muted)] mb-8 max-w-3xl">
          Deliberate decisions made to ship a real SaaS on a solo budget — with
          documented escape hatches if usage grows.
        </p>
        <ItemGrid items={docuplateCaseStudy.tradeOffs} columns={2} />
      </Section>

      <Section label="Shortcomings & Limitations">
        <p className="text-sm leading-relaxed text-[var(--color-ink-muted)] mb-8 max-w-3xl">
          Honest gaps — things I'd tackle next with more time or if usage
          demands it.
        </p>
        <ItemGrid items={docuplateCaseStudy.shortcomings} columns={1} accent="muted" />
      </Section>

      <Section label="What I Learned">
        <ItemGrid items={docuplateCaseStudy.learnings} columns={1} accent="ink" />
      </Section>

      <Section label="Full Stack">
        <div className="flex flex-col">
          {docuplateCaseStudy.stack.map((row) => (
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

      <div
        className="mt-20 pt-10 border-t flex flex-col md:flex-row items-start md:items-center gap-6"
        style={{ borderColor: "var(--color-rule)" }}
      >
        {docuplateCaseStudy.links.map((link) => (
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

function ItemGrid({
  items,
  columns = 2,
  accent = "accent",
}: {
  items: CaseStudyItem[];
  columns?: 1 | 2;
  accent?: "accent" | "muted" | "ink";
}) {
  const labelColor =
    accent === "accent"
      ? "text-[var(--color-accent)]"
      : accent === "muted"
      ? "text-[var(--color-ink-muted)]"
      : "text-[var(--color-ink)]";

  return (
    <div
      className={
        columns === 2
          ? "grid grid-cols-1 md:grid-cols-2 gap-0"
          : "flex flex-col gap-0"
      }
    >
      {items.map((item, i) => (
        <div
          key={item.label}
          className="py-8 pr-0 md:pr-12 border-b"
          style={{
            borderColor: "var(--color-rule)",
            borderRight:
              columns === 2 && i % 2 === 0
                ? "1px solid var(--color-rule)"
                : "none",
          }}
        >
          <p
            className={`font-mono text-xs uppercase tracking-widest mb-3 ${labelColor}`}
          >
            {item.label}
          </p>
          <p className="text-sm leading-relaxed">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
