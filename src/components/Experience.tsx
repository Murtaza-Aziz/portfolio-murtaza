import { experience } from "../content";
import SectionHeader from "./SectionHeader";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <SectionHeader number="02 —" title="Experience" />

      <div className="flex flex-col">
        {experience.map((item, i) => (
          <FadeIn key={`${item.company}-${item.period}`} delay={i * 80}>
            <article
              className="py-12 border-b"
              style={{ borderColor: "var(--color-rule)" }}
            >
              {/* Header row: period + company */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 mb-6">
                <div className="md:col-span-3">
                  <time
                    dateTime={item.period}
                    className="font-mono text-xs tracking-widest text-[var(--color-ink-muted)] block"
                  >
                    {item.period}
                  </time>
                  {item.employment && (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)] mt-1 block opacity-70">
                      {item.employment}
                    </span>
                  )}
                </div>

                <div className="md:col-span-9">
                  <h3 className="font-serif font-black text-2xl md:text-3xl leading-tight mb-1">
                    {item.company}
                  </h3>
                  <p className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Tech stack */}
              {item.techStack && (
                <p className="font-mono text-[11px] leading-relaxed text-[var(--color-ink-muted)] mb-6 md:ml-[25%] max-w-2xl">
                  {item.techStack}
                </p>
              )}

              {/* Bullets */}
              <ul className="flex flex-col gap-3 md:ml-[25%] max-w-2xl">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-4 text-sm leading-relaxed"
                  >
                    <span
                      className="mt-2.5 shrink-0 font-mono text-[10px] text-[var(--color-accent)]"
                      aria-hidden="true"
                    >
                      —
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
