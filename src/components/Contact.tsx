import { meta } from "../content";
import SectionHeader from "./SectionHeader";
import { asset } from "../lib/paths";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <SectionHeader number="04 —" title="Contact" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Heading */}
        <div className="md:col-span-6">
          <h2
            className="font-serif font-black leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Let's
            <br />
            <span style={{ color: "var(--color-accent)" }}>work</span>
            <br />
            together.
          </h2>
        </div>

        {/* Links */}
        <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center gap-8 py-4">
          <ContactItem label="Email" value={meta.email} href={`mailto:${meta.email}`} />
          <ContactItem label="Phone" value={meta.phone} href={`tel:${meta.phone.replace(/\s/g, "")}`} />
          <ContactItem label="LinkedIn" value="linkedin.com/in/murtazaaziz" href={meta.linkedin} external />
          <ContactItem label="GitHub" value="github.com/Murtaza-Aziz" href={meta.github} external />

          <div
            style={{ height: "1px", backgroundColor: "var(--color-rule)" }}
          />

          <a
            href={asset(meta.cv)}
            download
            className="inline-flex items-center gap-4 font-mono text-xs uppercase tracking-widest group"
          >
            <span
              className="block border border-[var(--color-ink)] px-5 py-2.5 group-hover:bg-[var(--color-ink)] group-hover:text-[var(--color-paper)] transition-colors"
            >
              Download CV ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1 border-b pb-5" style={{ borderColor: "var(--color-rule)" }}>
      <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
        {label}
      </span>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="font-serif font-bold text-lg hover:text-[var(--color-accent)] transition-colors"
      >
        {value}
      </a>
    </div>
  );
}
