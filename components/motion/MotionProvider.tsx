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
 *   data-parallax="N"    subtle scrub parallax (N px of travel)
 */
export function MotionProvider() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        document.documentElement.classList.remove("motion");
        return;
      }

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
              duration: 0.9,
              ease,
              stagger: 0.09,
              overwrite: true,
            }),
        });

        // 3) Metallic shine sweep
        gsap.utils.toArray<HTMLElement>("[data-shine]").forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 82%",
            once: true,
            onEnter: () =>
              gsap.fromTo(
                el,
                { backgroundPosition: "135% 0, 0 0" },
                {
                  backgroundPosition: "-55% 0, 0 0",
                  duration: 1.5,
                  ease: "power2.inOut",
                  delay: 0.2,
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

        // 5) Subtle parallax
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
