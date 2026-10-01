import { T, useList } from "../editable";

export default function Header() {
  const links = useList<{ label: string; href: string }>("nav.links");
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-ground/80 backdrop-blur-md">
      <div className="mx-auto max-w-page px-[var(--gutter)] h-[72px] flex items-center justify-between">
        <T k="site.name" as="a" href="/" className="font-display text-lg tracking-tight" />
        <nav className="hidden sm:flex items-center gap-8 text-sm text-ink-soft">
          {links.map((l, i) => (
            <T key={i} k={`nav.links.${i}.label`} as="a" href={l.href} className="hover:text-ink transition-colors duration-[var(--duration-fast)]" />
          ))}
          <T
            k="nav.cta.label"
            as="a"
            href="#visit"
            className="rounded-[var(--radius-pill)] bg-accent px-5 py-2 text-accent-ink font-medium hover:opacity-90 transition-opacity duration-[var(--duration-fast)]"
          />
        </nav>
      </div>
    </header>
  );
}
