import { useEffect, type ReactNode } from "react";
import { meta } from "../content";

// ---------------------------------------------------------------------------
// CV as raw markdown — this is what the "Machine" view renders
// ---------------------------------------------------------------------------
const CV_MD = `# Murtaza Aziz

**Full Stack Software Engineer** — Node.js · React · TypeScript · System Design

\`Sydney, NSW\`  ·  \`+61 493 416 213\`  ·  \`murtaza.aziz101@gmail.com\`

[github.com/Murtaza-Aziz](https://github.com/Murtaza-Aziz)  ·  [linkedin.com/in/murtazaaziz](https://www.linkedin.com/in/murtazaaziz/)

---

## Summary

Full stack engineer specialising in the MERN stack and TypeScript, with end-to-end experience
designing APIs, modelling data, and shipping production systems. Comfortable owning features
from requirement to deployment — making architecture and trade-off decisions, optimising
database and runtime performance, and collaborating directly with product owners and clients.
Pragmatic about tooling: I use rapid-prototyping and AI-assisted workflows to validate ideas
fast, then build them properly on scalable, well-tested foundations.

---

## Technical Skills

- **Languages:** TypeScript, JavaScript, Python, Java, SQL, HTML, CSS
- **Backend:** Node.js, Express, Adonis.js, REST API design, async/queue-based processing, Stripe
- **Frontend:** React, Redux, Tailwind CSS, Vite, Axios
- **Databases:** MongoDB, PostgreSQL — schema design, query optimisation, indexing, caching
- **Cloud & Infra:** AWS (S3, Lambda), Google Cloud, Cloudflare Pages, Render, GitHub Actions
- **Testing:** Jest, unit/integration testing, SonarLint, PMD analysis, code review
- **AI-Assisted Dev:** GPT/Claude for acceleration, internal automation scripts, debugging
- **Collaboration:** Git/GitHub, Jira, Figma, Slack, Notion, Trello

---

## Experience

### Software Engineer (Mid-Level) @ Preplocal

\`Nov 2025 – Present\`  ·  Full-time  ·  Sydney, NSW

_TypeScript, JavaScript, Node.js, REST APIs, Google Cloud, Bubble.io, Make.com_

- Own delivery and logistics features end-to-end, translating ambiguous requirements from
  founders and operations into technical designs, scoped milestones, and shipped solutions.
- Redesigned delivery route-optimisation algorithm using nearest-neighbour heuristic with
  batched constraints — cutting route computation time by ~60% and throughput by 40%.
- Drove migration from tightly-coupled workflows to a modular, service-oriented structure
  with queue-based async jobs, removing blocking ops and improving responsiveness under load.
- Optimised core data queries through restructured schemas and targeted indexing, reducing
  key read latency without added infrastructure cost.
- Built internal AI-assisted tools (GPT/Claude scripts) for data clean-up and automation.

### Junior Software Engineer @ Preplocal

\`Nov 2024 – Nov 2025\`  ·  Full-time  ·  Sydney, NSW

_JavaScript, Bubble.io, Make.com, APITemplate, Google Cloud_

- Implemented logistics and workflow-automation features against clear specs.
- Architected flexible data structures to introduce a "brands" concept for multi-brand accounts.
- Used Bubble for rapid prototyping and A/B testing before translating features to code.
- Built automation pipelines (Make.com + APITemplate) replacing manual document steps.

### Full Stack Software Engineer @ Meyd.it

\`May 2024 – Oct 2024\`  ·  Contract  ·  Sydney, NSW

_TypeScript, JavaScript, React, Node.js, Adonis.js, PostgreSQL, Stripe, AWS_

- Designed and integrated escrow-based payment infrastructure with Stripe.
- Built critical backend services and reworked checkout flow for correctness and performance.
- Modelled relational data in PostgreSQL and tuned queries on transaction-heavy paths.
- Reviewed pull requests and enforced quality standards in an agile team.

### Full Stack Software Engineer (Internship) @ EZiD

\`Oct 2022 – Feb 2023\`  ·  Internship

_MERN (MongoDB, Express, React, Node.js), Stripe, JavaScript, HTML, CSS_

- Built a custom subscription payment model with the Stripe API for EZiD's developer portal.
- Developed the developer-portal frontend in React working closely with senior engineers.
- Handled webhooks, edge cases, and failure states for third-party billing integration.

### Project Lead & Software Engineer @ Brainybucks

\`Feb 2023 – Jul 2023\`

_MERN (MongoDB, Express, React, Node.js), Axios, JavaScript, HTML, CSS_

- Led a 4-person team to deliver a responsive website to launch.
- Architected frontend and API layer; made key technical decisions for a junior team.
- Achieved a 95 SEO score through semantic markup, performance, and metadata work.

---

## Projects

### DocForge AI — PDF Automation SaaS  _(solo, production)_

\`TypeScript · React · Node.js · PostgreSQL · Stripe · Cloudflare · PostHog\`

[Live: docforge-ai.pages.dev](https://docforge-ai.pages.dev)  ·  [GitHub](https://github.com/Murtaza-Aziz/docforge-ai)

Built and shipped a real SaaS: visual PDF template builder with JSON data binding and an
API for programmatic on-demand PDF generation.

- **Architecture:** Decoupled Cloudflare Pages (SPA) + Node/Express API (Render) + PostgreSQL
  for independent scaling, low hosting cost, and clean separation of concerns.
- **PDF engine:** Solved reliable template-to-PDF rendering with dynamic layouts, font/asset
  edge cases, and isolated generation so heavy jobs never block API responses.
- **AI & security:** AI-driven template audits, API-key auth, scoped access, input validation
  for safe public API exposure plus secure Stripe subscription handling.
- **Trade-offs:** Shipped on managed PaaS to validate demand fast; clear path to containers.
- **Analytics:** PostHog to track funnel drop-off and feature usage for roadmap decisions.

---

## Education

### Bachelor of Science in Information Technology

**Macquarie University**  ·  Graduated July 2023

_Major: Web and Mobile App Development_`;

// ---------------------------------------------------------------------------
// Inline markdown renderer
// Splits on **bold**, \`code\`, [link](url), _italic_ and returns styled nodes
// ---------------------------------------------------------------------------
function renderInline(text: string): ReactNode {
  const pattern = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`|_[^_]+_)/g;
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
          return (
            <span key={i} style={{ color: "#e6edf3", fontWeight: 700 }}>
              {part.slice(2, -2)}
            </span>
          );
        }
        if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
          return (
            <span
              key={i}
              style={{
                color: "#56d364",
                background: "rgba(86,211,100,0.12)",
                padding: "0 4px",
                borderRadius: "3px",
              }}
            >
              {part.slice(1, -1)}
            </span>
          );
        }
        if (part.startsWith("[")) {
          const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (m) {
            return (
              <a
                key={i}
                href={m[2]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#79c0ff",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                {m[1]}
              </a>
            );
          }
        }
        if (part.startsWith("_") && part.endsWith("_") && part.length > 2) {
          return (
            <span key={i} style={{ fontStyle: "italic", color: "#8b949e" }}>
              {part.slice(1, -1)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

// ---------------------------------------------------------------------------
// Line renderer
// ---------------------------------------------------------------------------
const LINE_NUM: React.CSSProperties = {
  display: "inline-block",
  width: "2.8em",
  textAlign: "right",
  marginRight: "1.6em",
  color: "#3d444d",
  flexShrink: 0,
  userSelect: "none",
};

function LineWrap({
  n,
  children,
  style,
}: {
  n: number;
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", ...style }}>
      <span style={LINE_NUM}>{n}</span>
      <span style={{ flex: 1, minWidth: 0 }}>{children}</span>
    </div>
  );
}

function renderLine(line: string, n: number): ReactNode {
  // H1
  const h1 = line.match(/^(# )(.+)$/);
  if (h1) {
    return (
      <LineWrap key={n} n={n} style={{ marginTop: "0.2em" }}>
        <span style={{ color: "#4d5566", fontWeight: 400 }}>{h1[1]}</span>
        <span
          style={{ color: "#F4F1EA", fontSize: "1.35em", fontWeight: 800 }}
        >
          {renderInline(h1[2])}
        </span>
      </LineWrap>
    );
  }

  // H2
  const h2 = line.match(/^(## )(.+)$/);
  if (h2) {
    return (
      <LineWrap key={n} n={n} style={{ marginTop: "0.5em" }}>
        <span style={{ color: "#4d5566" }}>{h2[1]}</span>
        <span style={{ color: "#79c0ff", fontWeight: 700 }}>
          {renderInline(h2[2])}
        </span>
      </LineWrap>
    );
  }

  // H3
  const h3 = line.match(/^(### )(.+)$/);
  if (h3) {
    return (
      <LineWrap key={n} n={n} style={{ marginTop: "0.4em" }}>
        <span style={{ color: "#4d5566" }}>{h3[1]}</span>
        <span style={{ color: "#E84B0F", fontWeight: 600 }}>
          {renderInline(h3[2])}
        </span>
      </LineWrap>
    );
  }

  // HR
  if (line.trim() === "---") {
    return (
      <div key={n} style={{ display: "flex", alignItems: "center", margin: "0.4em 0" }}>
        <span style={LINE_NUM}>{n}</span>
        <span style={{ flex: 1, borderTop: "1px solid #30363d" }} />
      </div>
    );
  }

  // List item
  const li = line.match(/^(- )(.+)$/);
  if (li) {
    return (
      <LineWrap key={n} n={n}>
        <span style={{ color: "#E84B0F" }}>{li[1]}</span>
        <span style={{ color: "#c9d1d9" }}>{renderInline(li[2])}</span>
      </LineWrap>
    );
  }

  // Continuation line (leading spaces — wrapped bullet continuation)
  if (/^  /.test(line) && line.trim().length > 0) {
    return (
      <LineWrap key={n} n={n}>
        <span style={{ color: "#8b949e", paddingLeft: "1.2em" }}>
          {renderInline(line.trimStart())}
        </span>
      </LineWrap>
    );
  }

  // Italic / blockquote line (stack label)
  if (/^_[^_]+_$/.test(line.trim()) || /^> /.test(line)) {
    return (
      <LineWrap key={n} n={n}>
        <span style={{ color: "#8b949e", fontStyle: "italic" }}>
          {renderInline(line.replace(/^> /, ""))}
        </span>
      </LineWrap>
    );
  }

  // Empty line
  if (line.trim() === "") {
    return (
      <div key={n} style={{ display: "flex", height: "0.75em" }}>
        <span style={LINE_NUM}>{n}</span>
      </div>
    );
  }

  // Default text
  return (
    <LineWrap key={n} n={n}>
      <span style={{ color: "#c9d1d9" }}>{renderInline(line)}</span>
    </LineWrap>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function MachineView() {
  const lines = CV_MD.split("\n");

  // Swap body background while machine mode is active
  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#0d1117";
    window.scrollTo(0, 0);
    return () => {
      document.body.style.backgroundColor = prev;
    };
  }, []);

  return (
    <div
      className="machine-view-enter"
      style={{
        minHeight: "100vh",
        background: "#0d1117",
        paddingTop: "56px",
        fontFamily: '"JetBrains Mono", "Courier New", monospace',
        fontSize: "13px",
        lineHeight: 1.75,
        color: "#c9d1d9",
      }}
    >
      {/* File-tab bar */}
      <div
        style={{
          position: "sticky",
          top: "56px",
          zIndex: 40,
          background: "#161b22",
          borderBottom: "1px solid #30363d",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "0 20px",
          height: "44px",
        }}
      >
        {/* macOS traffic lights */}
        <div style={{ display: "flex", gap: "6px", marginRight: "8px" }}>
          {(["#ff5f57", "#febc2e", "#28c840"] as const).map((c) => (
            <div
              key={c}
              style={{ width: 12, height: 12, borderRadius: "50%", background: c }}
            />
          ))}
        </div>

        {/* Active tab */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "#0d1117",
            border: "1px solid #30363d",
            borderBottom: "1px solid #0d1117",
            borderRadius: "6px 6px 0 0",
            padding: "4px 14px",
            fontSize: "12px",
            color: "#c9d1d9",
            marginBottom: "-1px",
          }}
        >
          <span style={{ fontSize: "11px" }}>📄</span>
          <span>murtaza-aziz.md</span>
        </div>

        <div style={{ flex: 1 }} />

        <span style={{ fontSize: "11px", color: "#3d444d" }}>
          {lines.length} lines · UTF-8 · {meta.location}
        </span>
      </div>

      {/* Markdown content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 28px 100px",
        }}
      >
        {lines.map((line, i) => renderLine(line, i + 1))}

        {/* Blinking cursor */}
        <div style={{ display: "flex", marginTop: "6px" }}>
          <span style={{ ...LINE_NUM }}>{lines.length + 1}</span>
          <span
            style={{
              display: "inline-block",
              width: "8px",
              height: "1.1em",
              background: "#56d364",
              animation: "termBlink 1.1s step-end infinite",
              verticalAlign: "middle",
            }}
          />
        </div>
      </div>
    </div>
  );
}
