type Props = {
  children: React.ReactNode;
  className?: string;
  /** kept for call-site compatibility; stagger is handled by the batch */
  delay?: number;
  as?: "div" | "section";
};

/**
 * Scroll-reveal wrapper. Tags content for the MotionProvider, which fades/
 * slides it in on scroll. Content is fully visible without JS / with reduced
 * motion (the `.motion` gate in globals.css only hides it when animating).
 */
export function Reveal({ children, className = "", as = "div" }: Props) {
  const Tag = as;
  return (
    <Tag className={className} data-animate="">
      {children}
    </Tag>
  );
}
