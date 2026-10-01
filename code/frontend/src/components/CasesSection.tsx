import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { T, useList } from "../editable";

gsap.registerPlugin(ScrollTrigger);

export default function CasesSection() {
  const items = useList<{ name: string; detail: string; price: string }>("cases.items");
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !trackRef.current || !sectionRef.current) return;
      const track = trackRef.current;
      const distance = track.scrollWidth - track.clientWidth;
      if (distance <= 0) return;
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance + window.innerHeight * 0.4}`,
          scrub: 0.6,
          pin: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="cases" ref={sectionRef} className="relative py-[var(--space-16)] bg-surface">
      <div className="mx-auto max-w-page px-[var(--gutter)]">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <T k="cases.eyebrow" as="p" className="text-sm uppercase tracking-[0.18em] text-accent" />
        </div>
        <T k="cases.title" as="h2" className="mt-[var(--space-3)] font-display [font-weight:var(--weight-display)] text-[clamp(32px,4.2vw,56px)] max-w-[18ch]" />
        <T k="cases.sub" as="p" className="mt-[var(--space-4)] text-ink-soft max-w-[60ch]" />
      </div>
      <div ref={trackRef} className="mt-[var(--space-12)] flex gap-[var(--space-6)] px-[var(--gutter)] w-max">
        {items.map((it, i) => (
          <article key={i} className="w-[280px] shrink-0 rounded bg-ground border border-line overflow-hidden">
            <div className="aspect-[4/5] overflow-hidden">
              <img src="/images/cases.jpg" alt={it.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-[var(--space-4)]">
              <T k={`cases.items.${i}.name`} as="h3" className="font-display [font-weight:var(--weight-display)] text-lg" />
              <T k={`cases.items.${i}.detail`} as="p" className="mt-1 text-sm text-ink-soft" />
              <T k={`cases.items.${i}.price`} as="p" className="mt-[var(--space-3)] text-accent font-medium" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
