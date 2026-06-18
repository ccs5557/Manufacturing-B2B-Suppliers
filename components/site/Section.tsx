type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** vertical rhythm: "default" | "tight" | "flush" */
  pad?: "default" | "tight";
};

/** Shared section shell: consistent gutters + centered max-width canvas. */
export function Section({ id, className = "", children, pad = "default" }: Props) {
  const py = pad === "tight" ? "py-14 lg:py-20" : "py-16 lg:py-28";
  return (
    <section id={id} className={`px-5 lg:px-14 ${py} ${className}`}>
      <div className="mx-auto max-w-[1440px]">{children}</div>
    </section>
  );
}
