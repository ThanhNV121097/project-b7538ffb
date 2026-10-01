import { useList } from "../editable";

export default function TrustBar() {
  const items = useList<{ label: string }>("trust.items");
  return (
    <div className="border-y border-line">
      <div className="mx-auto max-w-page px-[var(--gutter)] py-[var(--space-6)] flex flex-wrap gap-x-[var(--space-12)] gap-y-[var(--space-3)] text-sm text-ink-soft">
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-pill bg-accent" />
            {it.label}
          </span>
        ))}
      </div>
    </div>
  );
}
