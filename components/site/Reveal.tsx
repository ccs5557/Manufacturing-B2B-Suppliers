type Props = {
  children: React.ReactNode;
  className?: string;
  /** kept for call-site compatibility; maps to a small scroll-range offset */
  delay?: number;
  as?: "div" | "section";
};

/**
 * Scroll-reveal wrapper — pure CSS (`animation-timeline: view()`).
 * Zero JS. Degrades to fully-visible where unsupported or with reduced motion,
 * so content is never hidden without JavaScript (SSG / SEO safe).
 */
export function Reveal({ children, className = "", delay = 0, as = "div" }: Props) {
  const Tag = as;
  return (
    <Tag
      className={`reveal-scroll ${className}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
