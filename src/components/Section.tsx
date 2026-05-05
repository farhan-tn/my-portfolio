import { ReactNode } from 'react';
import { cn } from '../utils/cn';

interface Props {
  id: string;
  index: string;
  label: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, index, label, title, children, className }: Props) {
  return (
    <section id={id} className={cn('relative px-6 md:px-10 py-24 md:py-32', className)}>
      <div className="mx-auto max-w-[1400px]">
        <div className="reveal flex items-baseline gap-6 mb-12 md:mb-16 border-t border-border pt-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">{index}</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-text">{label}</span>
        </div>
        {title && (
          <h2 className="reveal font-display font-semibold tracking-tightest text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.95] mb-12 md:mb-20 max-w-[18ch]">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
