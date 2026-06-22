export type LegalSection = { n: string; id: string; heading: string; body: string[] };
export type LegalDocData = {
  kind: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalDoc({ doc }: { doc: LegalDocData }) {
  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-10 pt-28 lg:px-14 lg:pb-14 lg:pt-40">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-3.5" data-hero>
            <span className="h-px w-7 bg-metal" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">Legal — {doc.kind}</span>
          </div>
          <h1
            data-hero
            data-shine
            className="headline-metal mt-6 font-display text-[clamp(2.5rem,8vw,6rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em]"
          >
            {doc.title}
          </h1>
          <p data-hero className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-3">
            Last updated · {doc.updated}
          </p>
          <p data-hero className="mt-6 max-w-[640px] font-body text-[15px] leading-[1.65] text-ink-2">
            {doc.intro}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="border-t border-line px-5 py-14 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          {/* Sticky contents */}
          <nav aria-label="Contents" className="lg:sticky lg:top-28 lg:self-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">Contents</span>
            <ol className="mt-4 flex flex-col gap-2.5">
              {doc.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex items-baseline gap-3 font-mono text-[12px] tracking-[0.02em] text-ink-2 transition-colors hover:text-ink"
                  >
                    <span className="text-metal">{s.n}</span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="max-w-[720px]">
            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 border-t border-line py-9 first:border-t-0 first:pt-0">
                <span className="font-mono text-[12px] tracking-[0.12em] text-metal">{s.n}</span>
                <h2 className="mt-3 font-display text-xl font-bold tracking-[-0.01em] text-ink lg:text-2xl">{s.heading}</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {s.body.map((p, i) => (
                    <p key={i} className="font-body text-[15px] leading-[1.7] text-ink-2">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
