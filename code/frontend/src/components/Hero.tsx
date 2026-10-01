import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { T, useContent } from "../editable";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const root = useRef<HTMLDivElement>(null);
  const headline = useContent<string>("hero.headline");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduce || !headlineRef.current) {
        gsap.set(".hero-reveal", { opacity: 1, y: 0 });
        return;
      }
      const split = new SplitType(headlineRef.current, { types: "lines" });
      gsap.set(split.lines, { yPercent: 110, opacity: 0 });
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(split.lines, { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.12 })
        .to(".hero-reveal", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.5")
        .fromTo(".hero-photo", { scale: 1.12, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.3, ease: "power3.out" }, "-=1.1");
    }, root);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headline]);

  return (
    <div ref={root} className="relative pt-[calc(var(--space-24)+var(--space-16))] pb-[var(--space-16)] overflow-hidden">
      <div className="mx-auto max-w-page px-[var(--gutter)] grid md:grid-cols-[1.1fr_0.9fr] gap-[var(--space-12)] items-end">
        <div>
          <div className="hero-reveal flex items-center gap-3 opacity-0 translate-y-[var(--space-3)]">
            <span className="h-px w-8 bg-accent" />
            <T k="hero.eyebrow" as="p" className="text-sm uppercase tracking-[0.18em] text-accent" />
          </div>
          <h1
            ref={headlineRef}
            className="mt-[var(--space-6)] font-display leading-[0.98] text-[clamp(44px,6.6vw,96px)] whitespace-pre-line"
            style={{ fontWeight: "var(--weight-display)", letterSpacing: "var(--tracking-display)" }}
          >
            <T k="hero.headline" />
          </h1>
          <T
            k="hero.sub"
            as="p"
            className="hero-reveal mt-[var(--space-6)] text-lg text-ink-soft max-w-[46ch] opacity-0 translate-y-[var(--space-3)]"
          />
          <div className="hero-reveal mt-[var(--space-8)] flex flex-wrap items-center gap-4 opacity-0 translate-y-[var(--space-3)]">
            <T
              k="hero.cta.label"
              as="a"
              href="#cases"
              className="rounded-sm bg-accent text-accent-ink px-6 py-3 font-medium hover:brightness-110 transition-[filter] duration-fast"
            />
            <T k="hero.cta2.label" as="a" href="#visit" className="text-sm text-ink-soft hover:text-ink transition-colors duration-fast underline underline-offset-4" />
          </div>
        </div>
        <div className="hero-photo opacity-0 rounded shadow-md overflow-hidden aspect-[4/5]">
          <img src="/images/hero.jpg" alt="iPhone in a leather case, lit against a dark background" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
