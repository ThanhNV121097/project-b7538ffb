import { motion, useReducedMotion } from "framer-motion";
import { T } from "../editable";

export default function Visit() {
  const reduce = useReducedMotion();
  return (
    <section id="visit" className="py-[var(--space-16)] bg-surface border-t border-line">
      <div className="mx-auto max-w-page px-[var(--gutter)] grid md:grid-cols-2 gap-[var(--space-12)] items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <T k="visit.eyebrow" as="p" className="text-sm uppercase tracking-[0.18em] text-accent" />
          </div>
          <T k="visit.title" as="h2" className="mt-[var(--space-3)] font-display [font-weight:var(--weight-display)] text-[clamp(28px,3.6vw,48px)] max-w-[18ch]" />
          <T k="visit.sub" as="p" className="mt-[var(--space-4)] text-ink-soft max-w-[52ch]" />
          <T k="visit.address" as="p" className="mt-[var(--space-8)] font-display [font-weight:var(--weight-display)] text-xl" />
          <T
            k="visit.cta.label"
            as="a"
            href="#visit"
            className="mt-[var(--space-6)] inline-block rounded-sm bg-accent text-accent-ink px-6 py-3 font-medium hover:brightness-110 transition-[filter] duration-fast"
          />
        </div>
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded overflow-hidden shadow-md aspect-[4/3]"
        >
          <img src="/images/street.jpg" alt="A small accessory shopfront on a Hanoi street at dusk" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
