interface SectionHeaderProps {
  number: string;
  title: string;
}

export default function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <div
        className="w-full mb-8"
        style={{ height: "1px", backgroundColor: "var(--color-rule)" }}
      />
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-[var(--color-ink-muted)] tracking-widest">
          {number}
        </span>
        <h2
          className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]"
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
