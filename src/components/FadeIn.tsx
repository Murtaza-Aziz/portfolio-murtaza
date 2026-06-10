import { useRef, useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Scroll-reveal animation. Content is visible by default;
 * animates when entering the viewport (skipped if reduced motion).
 */
export default function FadeIn({
  children,
  delay = 0,
  className,
  style,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  const show = visible || reduceMotion;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: show ? 1 : 1,
        transform: show ? "translateY(0)" : "translateY(12px)",
        transition: reduceMotion
          ? undefined
          : `transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
