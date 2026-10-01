import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "./gsapSetup";
import { T } from "../editable";

export default function Visit() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        ".visit-image img",
        { scale: 1.2 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    },
    { scope: root },
  );

  return (
    <section id="visit" ref={root} className="py-[var(--space-24)]">
      <div className="mx-auto max-w-page px-[var(--gutter)] grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[var(--space-16)] items-center">
        <div className="visit-image rounded-[var(--radius)] overflow-hidden order-2 lg:order-1">
          <img src="/images/storefront.jpg" alt="Tony Apple shop interior" className="w-full h-[460px] object-cover" />
        </div>
        <div className="order-1 lg:order-2">
          <T k="visit.eyebrow" as="p" className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-[var(--space-4)]" />
          <T k="visit.heading" as="h2" className="text-[clamp(32px,4.2vw,54px)] mb-[var(--space-6)]" />
          <T k="visit.body" as="p" className="text-lg text-ink-soft max-w-[46ch] mb-[var(--space-8)]" />
          <p className="text-ink-soft mb-[var(--space-8)]">
            <T k="visit.address" />
          </p>
          <T
            k="visit.cta.label"
            as="a"
            href="https://maps.google.com/?q=19+Duy+T%C3%A2n+H%C3%A0+N%E1%BB%99i"
            className="inline-block rounded-[var(--radius-pill)] bg-accent px-7 py-3.5 text-accent-ink font-medium hover:opacity-90 transition-opacity duration-[var(--duration-fast)]"
          />
        </div>
      </div>
    </section>
  );
}
