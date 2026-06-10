import { Link } from "react-router-dom";
import { projects } from "../content";
import SectionHeader from "./SectionHeader";
import FadeIn from "./FadeIn";

export default function WorkList() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <SectionHeader number="01 —" title="Selected Work" />

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 60}>
            <ProjectRow project={project} index={i} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const isFlagship = project.flagship;

  return (
    <article
      className="group py-10 border-b"
      style={{ borderColor: "var(--color-rule)" }}
    >
      {isFlagship ? (
        /* Flagship — larger treatment with image */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left: text */}
          <div className="md:col-span-7">
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </span>
              {project.role && (
                <span className="font-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-widest">
                  {project.role}
                </span>
              )}
            </div>

            <h3
              className="font-serif font-black leading-none tracking-tight mb-2"
              style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
            >
              {project.title}
            </h3>

            <p className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest mb-5">
              {project.year}&nbsp;&nbsp;·&nbsp;&nbsp;{project.stack}
            </p>

            <p className="text-base leading-relaxed max-w-prose mb-8" style={{ color: "var(--color-ink)" }}>
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-5">
              {project.links.map((link) => (
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
              {project.hasCaseStudy && (
                <Link
                  to="/docforge"
                  className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] link-accent"
                >
                  Case study →
                </Link>
              )}
            </div>
          </div>

          {/* Right: image */}
          {project.image && (
            <div className="md:col-span-5">
              <div
                className="overflow-hidden"
                style={{ border: "1px solid var(--color-rule)" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ aspectRatio: "16/10" }}
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Standard row */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
          <div className="md:col-span-1 font-mono text-xs text-[var(--color-ink-muted)] tracking-widest pt-1">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="md:col-span-5">
            <h3
              className="font-serif font-black leading-tight tracking-tight mb-2"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              {project.title}
            </h3>
            {project.role && (
              <p className="font-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-widest">
                {project.role}
              </p>
            )}
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest mb-3">
              {project.year}&nbsp;&nbsp;·&nbsp;&nbsp;{project.stack}
            </p>
            <p className="text-sm leading-relaxed">{project.description}</p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2 md:items-end pt-1">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest link-underline whitespace-nowrap"
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
