import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "./gsapSetup";
import { T, useList } from "../editable";
import styles from "./Catalogue.module.css";

type Item = { name: string; detail: string; price: string };

export default function Catalogue() {
  const root = useRef<HTMLDivElement>(null);
  const items = useList<Item>("catalogue.items");

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.utils.toArray<HTMLElement>(".catalogue-row").forEach((row, i) => {
        gsap.fromTo(
          row,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.03,
            scrollTrigger: { trigger: row, start: "top 92%" },
          },
        );
      });
    },
    { scope: root, dependencies: [items.length] },
  );

  return (
    <section id="catalogue" ref={root} className="py-[var(--space-24)]">
      <div className="mx-auto max-w-page px-[var(--gutter)]">
        <div className="flex flex-wrap items-end justify-between gap-[var(--space-6)] mb-[var(--space-12)]">
          <div>
            <T k="catalogue.eyebrow" as="p" className="text-sm tracking-[0.2em] uppercase text-accent font-medium mb-[var(--space-4)]" />
            <T k="catalogue.heading" as="h2" className="text-[clamp(32px,4.2vw,52px)] max-w-[18ch]" />
          </div>
          <T k="catalogue.note" as="p" className="text-sm text-ink-soft max-w-[32ch]" />
        </div>
        <div className={styles.table}>
          {items.map((item, i) => (
            <div key={i} className={`${styles.row} catalogue-row`}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.detail}>{item.detail}</span>
              <span className={styles.price}>{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
