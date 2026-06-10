import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { meta } from "../content";
import { asset } from "../lib/paths";

const navLinks = [
  { label: "Work", hash: "work" },
  { label: "Experience", hash: "experience" },
  { label: "About", hash: "about" },
  { label: "Contact", hash: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
    if (isHome) {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(244,241,234,0.96)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--color-rule)" : "none",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
          {/* Name / logo */}
          <Link
            to="/"
            className="font-mono text-xs uppercase tracking-widest hover:text-[var(--color-accent)] transition-colors"
          >
            {meta.name}
          </Link>

          {/* Desktop links */}
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

          {/* Mobile hamburger */}
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
        </div>
      </nav>

      {/* Mobile menu drawer */}
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
    </>
  );
}
