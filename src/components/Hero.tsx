import { useEffect, useState } from "react";
import { meta } from "../content";
import { asset } from "../lib/paths";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fadeStyle = (delayMs: number): React.CSSProperties => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.6s ease ${delayMs}ms, transform 0.6s ease ${delayMs}ms`,
  });

  return (
    <section
      id="hero"
      className="min-h-screen max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16"
    >
      <div className="min-h-[calc(100vh-10rem)] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 items-end">
        {/* Text column */}
        <div className="md:col-span-7 flex flex-col justify-end order-2 md:order-1">
          <p
            className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] mb-8"
            style={fadeStyle(0)}
          >
            {meta.location}&nbsp;&nbsp;/&nbsp;&nbsp;{meta.availability}
          </p>

          <h1
            className="font-serif font-black leading-none tracking-tight"
            style={{
              fontSize: "clamp(3.5rem, 11vw, 8rem)",
              color: "var(--color-ink)",
              ...fadeStyle(80),
            }}
          >
            Murtaza
            <br />
            <span style={{ color: "var(--color-accent)" }}>Aziz</span>
          </h1>

          <div
            className="my-8"
            style={{
              height: "1px",
              backgroundColor: "var(--color-rule)",
              width: loaded ? "100%" : "0%",
              transition: "width 0.8s ease 200ms",
            }}
          />

          <div style={fadeStyle(280)}>
            <p
              className="font-serif font-light italic mb-8"
              style={{
                fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
                color: "var(--color-ink)",
                maxWidth: "32rem",
              }}
            >
              {meta.role}
            </p>

            <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase tracking-widest">
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                GitHub
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                LinkedIn
              </a>
              <a
                href={asset(meta.cv)}
                download
                className="border border-[var(--color-ink)] px-4 py-2 hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
              >
                CV ↓
              </a>
            </div>
          </div>

          <div
            className="mt-16 flex items-center gap-3 font-mono text-xs text-[var(--color-ink-muted)]"
            style={fadeStyle(420)}
          >
            <span>Scroll</span>
            <span
              className="inline-block"
              style={{
                width: "40px",
                height: "1px",
                backgroundColor: "var(--color-rule)",
              }}
            />
          </div>
        </div>

        {/* Portrait column — editorial figure treatment */}
        <div
          className="md:col-span-5 md:col-start-8 order-1 md:order-2 flex flex-col items-start md:items-end"
          style={fadeStyle(160)}
        >
          <figure className="w-full max-w-[280px] md:max-w-none md:w-[85%] md:ml-auto">
            <div
              className="relative overflow-hidden"
              style={{ border: "1px solid var(--color-ink)" }}
            >
              {/* Offset accent bar — print registration mark feel */}
              <div
                className="absolute top-0 left-0 z-10"
                style={{
                  width: "3px",
                  height: "48px",
                  backgroundColor: "var(--color-accent)",
                }}
              />
              <img
                src={asset(meta.portrait)}
                alt="Murtaza Aziz"
                className="w-full object-cover object-top grayscale-[15%] contrast-[1.02]"
                style={{ aspectRatio: "3/4", maxHeight: "520px" }}
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
                Fig. 01 — Portrait
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
                {meta.location}
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
