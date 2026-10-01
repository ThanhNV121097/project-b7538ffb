import { motion, useReducedMotion } from "framer-motion";
import { T, useList } from "../editable";

type Props = {
  id: string;
  eyebrowKey: string;
  titleKey: string;
  subKey: string;
  itemsKey: string;
  image: string;
  reverse?: boolean;
};

export default function ProductRow({ id, eyebrowKey, titleKey, subKey, itemsKey, image, reverse }: Props) {
  const items = useList<{ name: string; detail: string; price: string }>(itemsKey);
  const reduce = useReducedMotion();

  return (
    <section id={id} className="py-[var(--space-16)]">
      <div
        className={`mx-auto max-w-page px-[var(--gutter)] grid md:grid-cols-2 gap-[var(--space-12)] items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="rounded overflow-hidden shadow-md aspect-[4/3]"
        >
          <img src={image} alt="" className="h-full w-full object-cover" />
        </motion.div>
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <T k={eyebrowKey} as="p" className="text-sm uppercase tracking-[0.18em] text-accent" />
          </div>
          <T k={titleKey} as="h2" className="mt-[var(--space-3)] font-display [font-weight:var(--weight-display)] text-[clamp(28px,3.6vw,48px)] max-w-[20ch]" />
          <T k={subKey} as="p" className="mt-[var(--space-4)] text-ink-soft max-w-[52ch]" />
          <ul className="mt-[var(--space-8)] divide-y divide-line border-t border-line">
            {items.map((it, i) => (
              <motion.li
                key={i}
                initial={reduce ? { opacity: 1 } : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="py-[var(--space-4)] flex items-baseline justify-between gap-4"
              >
                <div>
                  <T k={`${itemsKey}.${i}.name`} as="p" className="font-medium" />
                  <T k={`${itemsKey}.${i}.detail`} as="p" className="text-sm text-ink-soft mt-1" />
                </div>
                <T k={`${itemsKey}.${i}.price`} as="p" className="shrink-0 text-accent font-medium" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
