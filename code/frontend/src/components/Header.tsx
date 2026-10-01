import { useEffect, useState } from "react";
import { T, useList } from "../editable";

export default function Header() {
  const links = useList<{ label: string; href: string }>("nav.links");
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[padding,background-color] duration-base ease-out ${
        compact ? "bg-ground/90 backdrop-blur border-line py-3" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-page px-[var(--gutter)] flex items-center justify-between">
        <T k="site.name" as="a" href="/" className="font-display [font-weight:var(--weight-display)] text-lg tracking-tight" />
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          {links.map((l, i) => (
            <T key={i} k={`nav.links.${i}.label`} as="a" href={l.href} className="hover:text-ink transition-colors duration-fast" />
          ))}
          <T
            k="nav.cta.label"
            as="a"
            href="#cases"
            className="rounded-sm border border-accent px-4 py-2 text-accent hover:bg-accent hover:text-accent-ink transition-colors duration-fast"
          />
        </nav>
      </div>
    </header>
  );
}
