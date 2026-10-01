import { T } from "../editable";

export default function Footer() {
  return (
    <footer className="py-[var(--space-12)] border-t border-line">
      <div className="mx-auto max-w-page px-[var(--gutter)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[var(--space-3)]">
        <T k="footer.line" as="p" className="font-display text-base" />
        <T k="footer.sub" as="p" className="text-sm text-ink-soft" />
      </div>
    </footer>
  );
}
