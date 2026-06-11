import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { meta } from "../content";
import { asset } from "../lib/paths";
import { useMode } from "../context/ModeContext";

const navLinks = [
  { label: "Experience", hash: "experience" },
  { label: "Work", hash: "work" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { mode, setMode } = useMode();
  const isMachine = mode === "machine";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    if (isHome && !isMachine) {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // Nav background adapts to mode
  const navBg = isMachine
    ? "rgba(13,17,23,0.97)"
    : scrolled
    ? "rgba(244,241,234,0.96)"
    : "transparent";
  const navBorder = isMachine
    ? "1px solid #30363d"
    : scrolled
    ? "1px solid var(--color-rule)"
    : "none";

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: navBg,
          borderBottom: navBorder,
          backdropFilter: scrolled || isMachine ? "blur(10px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
          {/* Name / logo */}
          <Link
            to="/"
            className="font-mono text-xs uppercase tracking-widest transition-colors"
            style={{ color: isMachine ? "#8b949e" : undefined }}
            onClick={() => isMachine && setMode("human")}
          >
            {meta.name}
          </Link>

          <div className="flex items-center gap-5">
            {/* Desktop section links — hidden in machine mode */}
            {!isMachine && (
              <ul className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={`${asset("")}#${link.hash}`}
                      onClick={(e) => handleNavClick(e, link.hash)}
                      className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* Human / Machine toggle */}
            <div
              className="flex items-center"
              style={{
                border: isMachine
                  ? "1px solid #30363d"
                  : "1px solid var(--color-rule)",
                padding: "2px",
              }}
            >
              {(["human", "machine"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 transition-all duration-200 cursor-pointer"
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
                        ? "#4d5566"
                        : "var(--color-ink-muted)",
                  }}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Mobile hamburger — human mode only */}
            {!isMachine && (
              <button
                className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <span
                  className="block w-5 h-px bg-[var(--color-ink)] transition-all duration-200"
                  style={
                    menuOpen
                      ? { transform: "translateY(4px) rotate(45deg)" }
                      : {}
                  }
                />
                <span
                  className="block w-5 h-px bg-[var(--color-ink)] transition-all duration-200"
                  style={menuOpen ? { opacity: 0 } : {}}
                />
                <span
                  className="block w-5 h-px bg-[var(--color-ink)] transition-all duration-200"
                  style={
                    menuOpen
                      ? { transform: "translateY(-4px) rotate(-45deg)" }
                      : {}
                  }
                />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer — human mode only */}
      {!isMachine && (
        <div
          className="fixed inset-0 z-40 md:hidden transition-all duration-300"
          style={{
            pointerEvents: menuOpen ? "auto" : "none",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 bg-[var(--color-paper)]"
            style={{ opacity: 0.98 }}
            onClick={() => setMenuOpen(false)}
          />
          <ul className="absolute top-20 left-6 flex flex-col gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={`${asset("")}#${link.hash}`}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className="font-serif text-4xl font-black tracking-tight"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
