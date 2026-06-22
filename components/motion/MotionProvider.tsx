"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Single client-side motion engine. Animates elements tagged with data
 * attributes; content is fully visible without it (see `.motion` gate in CSS).
 *
 *   data-hero            staggered page-load entrance (above the fold)
 *   data-animate         fade/slide reveal on scroll-into-view (batched)
 *   data-shine           brushed-steel light sweep across a headline
 *   data-count           count-up number (+ data-prefix/-suffix/-decimals)
 *   data-type            typewriter label (types out char-by-char on enter)
 *   data-parallax="N"    subtle scrub parallax (N px of travel)
 */
export function MotionProvider() {
  const pathname = usePathname();

  useGSAP(
    () => {
      try {
        const ease = "power3.out";

        // 1) Hero — orchestrated load timeline
        const hero = gsap.utils.toArray<HTMLElement>("[data-hero]");
        if (hero.length) {
          gsap.fromTo(
            hero,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 1, ease, stagger: 0.1, delay: 0.08 },
          );
        }

        // 2) Scroll reveals — batched so a group staggers together
        ScrollTrigger.batch("[data-animate]", {
          start: "top 86%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, {
              opacity: 1,
              y: 0,
              duration: 0.95,
              ease,
              stagger: 0.12,
              overwrite: true,
            }),
        });

        // 3) Metallic shine sweep — looping glint that crosses each headline,
        // pauses, then repeats. Tightened travel so it starts crossing quickly
        // (no long dead lead-in) and a clearly visible, even speed.
        gsap.utils.toArray<HTMLElement>("[data-shine]").forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 90%",
            once: true,
            onEnter: () =>
              gsap.fromTo(
                el,
                { backgroundPosition: "128% 0, 0 0" },
                {
                  backgroundPosition: "-42% 0, 0 0",
                  duration: 2.8,
                  ease: "none",
                  repeat: -1,
                  repeatDelay: 2.4,
                },
              ),
          });
        });

        // 4) Count-up numbers
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = parseFloat(el.dataset.count || "0");
          const decimals = parseInt(el.dataset.decimals || "0", 10);
          const prefix = el.dataset.prefix || "";
          const suffix = el.dataset.suffix || "";
          const proxy = { v: 0 };
          // Park at the start value now (stats are below the fold, so this
          // happens long before the user scrolls there — no flash).
          el.textContent = prefix + (0).toFixed(decimals) + suffix;
          ScrollTrigger.create({
            trigger: el,
            start: "top 88%",
            once: true,
            onEnter: () =>
              gsap.to(proxy, {
                v: target,
                duration: 1.5,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = prefix + proxy.v.toFixed(decimals) + suffix;
                },
              }),
          });
        });

        // 5) Typewriter labels — type out character-by-character. [data-type]
        // marks the in-flow wrapper (a reliable scroll trigger); its
        // [data-type-live] child is parked empty and typed over an invisible
        // ghost — no flash, no layout shift. Batched so a cluster of labels
        // staggers together. Full text stays in the DOM for no-JS.
        const typeLive = (live: HTMLElement) => {
          const full = live.dataset.full ?? "";
          const s = { n: 0 };
          live.classList.add("typing");
          gsap.to(s, {
            n: full.length,
            duration: Math.max(0.5, full.length * 0.05),
            ease: "none",
            onUpdate: () => {
              live.textContent = full.slice(0, Math.round(s.n));
            },
            onComplete: () => {
              live.textContent = full;
              gsap.delayedCall(1.6, () => live.classList.remove("typing"));
            },
          });
        };
        gsap.utils.toArray<HTMLElement>("[data-type]").forEach((wrap) => {
          const live = wrap.querySelector<HTMLElement>("[data-type-live]");
          if (!live) return;
          live.dataset.full = live.textContent ?? "";
          live.textContent = "";
        });
        ScrollTrigger.batch("[data-type]", {
          start: "top 90%",
          once: true,
          onEnter: (wraps) =>
            wraps.forEach((wrap, i) => {
              const live = wrap.querySelector<HTMLElement>("[data-type-live]");
              if (live) gsap.delayedCall(i * 0.1, () => typeLive(live));
            }),
        });

        // 6b) Inspection-record hairlines — "measure in" (scaleX 0→1) on enter,
        // staggered so a column of dividers draws like a gauge sweeping across.
        ScrollTrigger.batch("[data-measure]", {
          start: "top 90%",
          once: true,
          onEnter: (els) =>
            gsap.to(els, {
              scaleX: 1,
              duration: 0.9,
              ease: "power3.inOut",
              stagger: 0.08,
              overwrite: true,
            }),
        });

        // 6) Subtle parallax
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const d = parseFloat(el.dataset.parallax || "16");
          gsap.fromTo(
            el,
            { y: d },
            {
              y: -d,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        document.fonts?.ready.then(() => ScrollTrigger.refresh());
      } catch {
        // If anything fails, never leave content hidden.
        document.documentElement.classList.remove("motion");
      }
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
