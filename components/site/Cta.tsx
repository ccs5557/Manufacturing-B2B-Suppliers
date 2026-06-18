import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

/**
 * Primary CTA — same brushed-steel material as the consultation form plate
 * (`form-plate.webp` + sheen overlay), so the hero button and the bottom CTA
 * read as the identical metal. Embossed dark label.
 */
export function Cta({
  href = "/capabilities",
  children = "EXPLORE CAPABILITIES",
  className = "",
}: Props) {
  return (
    <Link
      prefetch={false}
      href={href}
      className={`group inline-flex items-center gap-3 rounded-[5px] border border-[#8e8e8a] px-7 py-4 font-mono text-xs uppercase tracking-[0.13em] text-[#1a1a18] transition-[filter,transform] duration-300 hover:brightness-[1.05] active:translate-y-px ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 46%, rgba(0,0,0,0.20) 100%), url('/images/form-plate.webp')",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
        boxShadow:
          "0 8px 18px -6px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1.5px 2px rgba(0,0,0,0.22)",
        textShadow: "0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2}
      />
    </Link>
  );
}
