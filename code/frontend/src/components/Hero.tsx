import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { T } from "../editable";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set(".hero-reveal", { opacity: 1, y: 0 });
        return;
      }
      const split = new SplitType(".hero-headline", { types: "lines", lineClass: "hero-line" });
      gsap.set(split.lines, { yPercent: 110 });
      const tl = gsap.timeline({ defaults: { ease: "var(--ease-out)".includes("var") ? "expo.out" : "expo.out" } });
      tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.6 })
        .to(split.lines, { yPercent: 0, duration: 1, stagger: 0.12 }, "-=0.3")
        .to(".hero-reveal", { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, "-=0.5")
        .fromTo(".hero-image", { scale: 1.15, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }, "-=1");

      gsap.to(".hero-image img", {
        yPercent: 10,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative pt-[160px] pb-[var(--space-24)] overflow-hidden">
      <div className="mx-auto max-w-page px-[var(--gutter)] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[var(--space-16)] items-center">
        <div>
          <T
            k="hero.eyebrow"
            as="p"
            className="hero-eyebrow opacity-0 translate-y-3 text-sm tracking-[0.2em] uppercase text-accent font-medium mb-[var(--space-6)]"
          />
          <T
            k="hero.headline"
            as="h1"
            className="hero-headline text-[clamp(44px,6.4vw,92px)] max-w-[16ch] overflow-hidden"
          />
          <T
            k="hero.sub"
            as="p"
            className="hero-reveal opacity-0 translate-y-3 mt-[var(--space-8)] text-lg text-ink-soft max-w-[48ch]"
          />
          <div className="hero-reveal opacity-0 translate-y-3 mt-[var(--space-10)] flex flex-wrap gap-4">
            <T
              k="hero.cta.label"
              as="a"
              href="#catalogue"
              className="inline-block rounded-[var(--radius-pill)] bg-accent px-7 py-3.5 text-accent-ink font-medium shadow-[var(--shadow-sm)] hover:opacity-90 transition-opacity duration-[var(--duration-fast)]"
            />
            <T
              k="hero.cta2.label"
              as="a"
              href="#visit"
              className="inline-block rounded-[var(--radius-pill)] border border-line px-7 py-3.5 text-ink hover:border-accent transition-colors duration-[var(--duration-fast)]"
            />
          </div>
        </div>
        <div className="hero-image relative rounded-[var(--radius)] overflow-hidden shadow-[var(--shadow-md)]">
          <img src="/images/hero-iphone.jpg" alt="iPhone in a leather case" className="w-full h-[560px] object-cover" />
          <div className="absolute inset-0 shadow-[var(--shadow-glow)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
