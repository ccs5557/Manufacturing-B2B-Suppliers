type Props = {
  eyebrow: string;
  title: string;
  sub?: string;
  children?: React.ReactNode;
};

/** Shared opener for secondary pages — clears the fixed chrome, big Archivo headline. */
export function PageHero({ eyebrow, title, sub, children }: Props) {
  return (
    <section className="border-b border-line px-5 pb-12 pt-28 lg:px-14 lg:pb-16 lg:pt-40">
      <div className="mx-auto max-w-[1440px]">
        <p className="eyebrow reveal" style={{ animationDelay: "0ms" }}>
          {eyebrow}
        </p>
        <h1
          className="headline-metal reveal mt-5 whitespace-pre-line font-display text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]"
          style={{ animationDelay: "100ms" }}
        >
          {title}
        </h1>
        {sub && (
          <p
            className="reveal mt-6 max-w-[600px] font-body text-[15px] leading-[1.55] text-ink-2 lg:text-lg"
            style={{ animationDelay: "220ms" }}
          >
            {sub}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
