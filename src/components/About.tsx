import { skills, education } from "../content";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <SectionHeader number="03 —" title="About" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7">
          <p
            className="font-serif font-light leading-relaxed mb-8"
            style={{
              fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
              color: "var(--color-ink)",
            }}
          >
            I'm a software engineer based in Sydney. I build full-stack web
            applications — from Stripe payment flows and escrow infrastructure
            to production SaaS products shipped end to end.
          </p>

          <p className="text-sm leading-relaxed text-[var(--color-ink-muted)] mb-10">
            Currently at Preplocal, optimizing delivery logistics and workflow
            automation. Previously full-stack at Meyd.it (escrow + Stripe
            payments) and EZiD (subscription billing). I also built{" "}
            <span className="text-[var(--color-ink)]">Docuplate</span> — a
            PDF automation SaaS with 285+ tests, deployed on Cloudflare Pages
            and Render.
          </p>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] mb-3">
              Skills
            </p>
            <p className="font-mono text-xs leading-relaxed text-[var(--color-ink)]">
              {skills}
            </p>
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] mb-6">
            Education
          </p>
          <div className="flex flex-col gap-6">
            {education.map((item) => (
              <div
                key={item.institution}
                className="pb-6 border-b"
                style={{ borderColor: "var(--color-rule)" }}
              >
                <p className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest mb-1">
                  {item.period}
                </p>
                <p className="font-serif font-bold text-base">
                  {item.institution}
                </p>
                <p className="text-sm text-[var(--color-ink-muted)]">
                  {item.degree}
                </p>
                {item.note && (
                  <p className="font-mono text-xs text-[var(--color-ink-muted)] mt-1">
                    {item.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
