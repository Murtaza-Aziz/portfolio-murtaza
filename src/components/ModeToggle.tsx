import { useMode } from "../context/ModeContext";

export default function ModeToggle() {
  const { mode, setMode } = useMode();
  const isMachine = mode === "machine";

  return (
    <div
      className="fixed left-1/2 z-[60] -translate-x-1/2 pointer-events-none"
      style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))" }}
      aria-label="View mode"
    >
      <div
        className="pointer-events-auto flex items-center rounded-full shadow-lg transition-colors duration-300"
        style={{
          border: isMachine ? "1px solid #30363d" : "1px solid var(--color-rule)",
          backgroundColor: isMachine
            ? "rgba(22, 27, 34, 0.92)"
            : "rgba(244, 241, 234, 0.92)",
          backdropFilter: "blur(12px)",
          padding: "3px",
        }}
      >
        {(["human", "machine"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
            style={{
              background:
                mode === m
                  ? isMachine
                    ? "#c9d1d9"
                    : "var(--color-ink)"
                  : "transparent",
              color:
                mode === m
                  ? isMachine
                    ? "#0d1117"
                    : "var(--color-paper)"
                  : isMachine
                  ? "#6e7681"
                  : "var(--color-ink-muted)",
            }}
          >
            {m}
          </button>
        ))}
      </div>
    </div>
  );
}
