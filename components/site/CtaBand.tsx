import { Cta } from "@/components/site/Cta";

type Contact = { k: string; v: string };

type Props = {
  eyebrow: string;
  title: string;
  ctaHref?: string;
  ctaLabel?: string;
  contact?: Contact[];
};

/**
 * Shared closing band — eyebrow + oversized metal headline + brushed-steel CTA,
 * with registration corners that bookend a page's hero "drawing sheet". An
 * optional contact readout sits below, separated by space (not another rule —
 * the footer's own top edge is the structural break just below).
 */
export function CtaBand({ eyebrow, title, ctaHref = "/contact", ctaLabel = "Start a project", contact }: Props) {
  return (
    <section className="relative overflow-hidden border-t border-line px-5 py-24 lg:px-14 lg:py-36">
      <span aria-hidden className="absolute left-5 top-8 h-4 w-4 border-l border-t border-ink-3/45 lg:left-14" />
      <span aria-hidden className="absolute right-5 top-8 h-4 w-4 border-r border-t border-ink-3/45 lg:right-14" />

      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3.5" data-animate>
          <span className="h-px w-7 bg-metal" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-metal">{eyebrow}</span>
        </div>

        <h2
          data-animate
          data-shine
          className="headline-metal mt-8 max-w-[16ch] font-display text-[clamp(2.4rem,8vw,6rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.035em]"
        >
          {title}
        </h2>

        <div data-animate className="mt-12">
          <Cta href={ctaHref}>{ctaLabel}</Cta>
        </div>

        {contact && contact.length > 0 && (
          <div className="mt-20 grid gap-6 sm:grid-cols-3 sm:gap-10">
            {contact.map((c) => (
              <div key={c.k} className="flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">{c.k}</span>
                <span className="font-mono text-[13px] tracking-[0.04em] text-ink">{c.v}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
