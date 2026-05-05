import { ReactNode } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import { cn } from '../utils/cn';

interface Props {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'ghost';
  external?: boolean;
}

export default function MagneticButton({ href, children, className, variant = 'primary', external }: Props) {
  const ref = useMagnetic<HTMLAnchorElement>(0.25);
  const base =
    'group relative inline-flex items-center gap-3 px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-300 will-change-transform';
  const styles =
    variant === 'primary'
      ? 'bg-text text-bg hover:bg-soft border border-text'
      : 'border border-border text-text hover:border-text';

  return (
    <a
      ref={ref}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className={cn(base, styles, className)}
      data-cursor
    >
      <span className="relative z-10">{children}</span>
      <span aria-hidden className="relative z-10 inline-block transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
