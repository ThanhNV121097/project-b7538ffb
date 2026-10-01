import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "./gsapSetup";
import { T, useList } from "../editable";

type Point = { title: string; body: string };

export default function Trust() {
  const root = useRef<HTMLDivElement>(null);
  const points = useList<Point>("trust.points");

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        ".trust-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: "top 80%" },
        },
      );
    },
    { scope: root, dependencies: [points.length] },
  );

  return (
    <section ref={root} className="py-[var(--space-24)] bg-surface border-y border-line">
      <div className="mx-auto max-w-page px-[var(--gutter)]">
        <T k="trust.heading" as="h2" className="text-[clamp(28px,3.6vw,46px)] max-w-[26ch] mb-[var(--space-16)]" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[var(--space-8)]">
          {points.map((p, i) => (
            <div key={i} className="trust-card rounded-[var(--radius)] border border-line p-[var(--space-8)]">
              <h3 className="font-display text-[22px] font-[var(--weight-display)] tracking-[var(--tracking-display)] mb-[var(--space-3)]">
                {p.title}
              </h3>
              <p className="text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
