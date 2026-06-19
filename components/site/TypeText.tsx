type TypeTextProps = {
  children: string;
  className?: string;
};

/**
 * Typewriter text. The invisible ghost reserves the final size so nothing
 * around it shifts; the absolutely-positioned live span is parked empty and
 * typed out by MotionProvider on scroll-into-view (driven by the [data-type]
 * wrapper, a stable in-flow scroll trigger). Renders full text for no-JS / SSR.
 */
export function TypeText({ children, className = "" }: TypeTextProps) {
  return (
    <span data-type="" className={`relative inline-block ${className}`}>
      <span aria-hidden="true" className="invisible">
        {children}
      </span>
      <span data-type-live="" className="absolute inset-0">
        {children}
      </span>
    </span>
  );
}
