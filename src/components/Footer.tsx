import { meta } from "../content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--color-rule)" }}
    >
      {/* Large name watermark */}
      <div
        className="px-6 md:px-10 py-8 overflow-hidden select-none"
        aria-hidden="true"
      >
        <p
          className="font-serif font-black leading-none tracking-tighter text-[var(--color-rule)] whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 18vw, 14rem)" }}
        >
          {meta.name}
        </p>
      </div>

      {/* Bottom strip */}
      <div
        className="px-6 md:px-10 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
      >
        <p className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest">
          © {year} {meta.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest">
          EST. 2021&nbsp;&nbsp;/&nbsp;&nbsp;{meta.location.toUpperCase()}
        </p>
      </div>
    </footer>
  );
}
