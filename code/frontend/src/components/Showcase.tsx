import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "./gsapSetup";
import { T, useList } from "../editable";

type Step = { tag: string; title: string; body: string; image: string };

export default function Showcase() {
  const root = useRef<HTMLDivElement>(null);
  const steps = useList<Step>("showcase.steps");
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const count = steps.length || 1;
      const st = ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: `+=${count * 100}%`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(count - 1, Math.floor(self.progress * count));
          setActive(idx);
        },
      });
      return () => st.kill();
    },
    { scope: root, dependencies: [steps.length] },
  );

  return (
    <section id="showcase" ref={root} className="relative py-[var(--space-24)] bg-surface border-y border-line min-h-screen flex items-center">
      <div className="mx-auto max-w-page px-[var(--gutter)] w-full">
        <T k="showcase.eyebrow" as="p" className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-[var(--space-4)]" />
        <T k="showcase.heading" as="h2" className="text-[clamp(32px,4.2vw,56px)] max-w-[20ch] mb-[var(--space-16)]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-12)] items-center">
          <div className="relative rounded-[var(--radius)] overflow-hidden aspect-[4/3] shadow-[var(--shadow-md)]">
            {steps.map((step, i) => (
              <img
                key={i}
                src={step.image}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[var(--duration-slow)]"
                style={{ opacity: i === active ? 1 : 0 }}
              />
            ))}
          </div>
          <div>
            {steps.map((step, i) => (
              <div key={i} style={{ display: i === active ? "block" : "none" }}>
                <p className="text-sm tracking-[0.15em] uppercase text-accent font-medium mb-[var(--space-4)]">{step.tag}</p>
                <h3 className="font-display text-[clamp(24px,2.8vw,40px)] font-[var(--weight-display)] tracking-[var(--tracking-display)] mb-[var(--space-4)] max-w-[18ch]">
                  {step.title}
                </h3>
                <p className="text-ink-soft text-lg max-w-[42ch]">{step.body}</p>
              </div>
            ))}
            <div className="flex gap-2 mt-[var(--space-10)]">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className="h-[3px] flex-1 rounded-[var(--radius-pill)] transition-colors duration-[var(--duration-base)]"
                  style={{ background: i === active ? "var(--accent)" : "var(--line)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
