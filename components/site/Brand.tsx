import Link from "next/link";

/** Desktop wordmark — fixed top-left, overlays the hero. */
export function Brand() {
  return (
    <Link
      href="/"
      aria-label="GEOMETRIX home"
      className="fixed left-10 top-9 z-50 hidden font-display text-2xl font-bold tracking-[0.02em] text-ink lg:block"
      style={{ textShadow: "0 1px 6px rgba(0,0,0,0.65)" }}
    >
      GEOMETRIX.
    </Link>
  );
}
