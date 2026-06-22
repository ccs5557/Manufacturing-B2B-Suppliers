"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";
import { PRODUCTS, type Product } from "./products";

/* ── Catalog card ──────────────────────────────────────────────────────────
   Mobile = single full-width column with a landscape aspect that matches the
   product shots (so they're shown large and barely cropped). The asymmetric
   bento (flagship spans 4×2) only kicks in at lg, where the grid drives height. */
function Card({ p, i, onOpen }: { p: Product; i: number; onOpen: () => void }) {
  const flagship = i === 0;
  const span = flagship
    ? "aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto lg:h-full lg:col-span-4 lg:row-span-2"
    : "aspect-[3/2] lg:aspect-auto lg:h-full lg:col-span-2";

  return (
    <button
      type="button"
      onClick={onOpen}
      data-animate
      aria-label={`View ${p.title} specification`}
      className={`group relative block overflow-hidden rounded-[4px] border border-line text-left transition-colors hover:border-line-2 ${span}`}
    >
      <Image
        src={p.src}
        alt={p.title}
        fill
        sizes="(max-width:1024px) 100vw, 28vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/15 to-surface/35" />

      {/* part code + category */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4 lg:px-5 lg:pt-5">
        <span className="font-mono text-[11px] tracking-[0.16em] text-metal">{p.code}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-3">{p.category}</span>
      </div>

      {/* title block */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 lg:p-5">
        <div className="flex flex-col gap-1">
          <span
            className={`font-display font-bold uppercase leading-[1.04] tracking-[-0.01em] text-ink ${
              flagship ? "text-2xl lg:text-[2rem]" : "text-base lg:text-lg"
            }`}
          >
            {p.title}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">{p.blurb}</span>
          {flagship && (
            <span className="mt-2 hidden font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2 lg:inline-flex lg:items-center lg:gap-2">
              View part <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
            </span>
          )}
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-2 text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-surface">
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
        </span>
      </div>
    </button>
  );
}

export function ProductGallery() {
  const [active, setActive] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  const open = (i: number) => {
    setActive(i);
    requestAnimationFrame(() => setVisible(true));
  };

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setActive(null), 280);
  }, []);

  // ESC + fully lock background scroll while open (iOS-proof position:fixed lock,
  // padding-right compensates the removed scrollbar so the page doesn't jump).
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    const scrollY = window.scrollY;
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    const body = document.body;
    const prevCss = body.style.cssText;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    if (scrollbarW > 0) body.style.paddingRight = `${scrollbarW}px`;

    return () => {
      document.removeEventListener("keydown", onKey);
      // Restore must be INSTANT. The page has `html { scroll-behavior: smooth }`,
      // so a plain scrollTo would animate the position restore — the page snaps
      // to top (unfix) then glides back down, which reads as a shake on close.
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      body.style.cssText = prevCss;
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = prevBehavior;
    };
  }, [active, close]);

  const product = active !== null ? PRODUCTS[active] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-6 lg:auto-rows-[256px] lg:gap-4">
        {PRODUCTS.map((p, i) => (
          <Card key={p.code} p={p} i={i} onOpen={() => open(i)} />
        ))}
      </div>

      {product && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={product.title}
          className={`fixed inset-0 z-[60] flex items-end justify-center transition-opacity duration-300 sm:items-center ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />

          <div
            className={`relative z-10 flex max-h-[92vh] w-full flex-col overflow-hidden border border-line-2 bg-surface-2 shadow-2xl transition-all duration-300 ease-out sm:max-w-[940px] sm:rounded-2xl lg:flex-row ${
              visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.98] opacity-0"
            } rounded-t-2xl`}
          >
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label="Close"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-line-2 bg-surface/70 text-ink-2 backdrop-blur-md transition-colors hover:text-ink"
            >
              <X className="h-[18px] w-[18px]" />
            </button>

            {/* Image */}
            <div className="relative h-56 w-full shrink-0 sm:h-72 lg:h-auto lg:w-[52%]">
              <Image src={product.src} alt={product.title} fill sizes="(max-width:1024px) 100vw, 480px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-2 to-transparent lg:bg-gradient-to-r" />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-5 overflow-y-auto overscroll-contain p-6 lg:w-[48%] lg:p-8">
              <div className="flex flex-col gap-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-metal">
                  {product.category} · {product.code}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">{product.title}</h3>
                <p className="font-body text-[14px] leading-[1.6] text-ink-2">{product.description}</p>
              </div>

              <div className="flex flex-col">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex items-center justify-between gap-4 border-b border-line py-2.5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3">{s.label}</span>
                    <span className="text-right font-mono text-[12px] text-ink">{s.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-3">Applications</span>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((a) => (
                    <span key={a} className="rounded-full border border-line-2 px-3 py-1 font-body text-[12px] text-ink-2">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-4 pt-1">
                <div className="flex flex-wrap gap-2">
                  {product.certs.map((c) => (
                    <span key={c} className="rounded-[4px] border border-line px-2.5 py-1 font-mono text-[9px] tracking-[0.1em] text-ink-3">
                      {c}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  prefetch={false}
                  onClick={close}
                  className="flex items-center justify-center gap-2 rounded-[4px] bg-accent px-5 py-3 font-mono text-[12px] tracking-[0.12em] text-[#0a0a0b] transition-[filter] hover:brightness-105"
                >
                  REQUEST A QUOTE <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
