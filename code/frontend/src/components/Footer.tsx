import { T } from "../editable";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-page px-[var(--gutter)] py-[var(--space-8)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-ink-soft">
        <T k="site.name" as="p" className="font-display [font-weight:var(--weight-display)] text-base text-ink" />
        <div className="flex items-center gap-2">
          <T k="footer.line" />
          <span>·</span>
          <T k="footer.address" />
        </div>
      </div>
    </footer>
  );
}
