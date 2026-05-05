import { useEffect, useState } from 'react';
import { cn } from '../utils/cn';

const links = [
  { id: 'about', label: '01 / About' },
  { id: 'work', label: '02 / Work' },
  { id: 'designs', label: '03 / Designs' },
  { id: 'experience', label: '04 / Experience' },
  { id: 'contact', label: '05 / Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'backdrop-blur-md bg-bg/70 border-b border-border'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-xs uppercase tracking-[0.22em] text-text" data-cursor>
          <span className="text-muted">/</span>
          farhan_jamil
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted hover:text-text transition-colors"
              data-cursor
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-text border border-border hover:border-text px-4 py-2 transition-colors"
          data-cursor
        >
          <span className="w-1.5 h-1.5 bg-text rounded-full animate-pulse" /> Available
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
        >
          <span className={cn('w-5 h-px bg-text transition-transform', open && 'translate-y-1.5 rotate-45')} />
          <span className={cn('w-5 h-px bg-text transition-opacity', open && 'opacity-0')} />
          <span className={cn('w-5 h-px bg-text transition-transform', open && '-translate-y-1.5 -rotate-45')} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.22em] text-text"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
