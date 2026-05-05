import { useEffect, useRef, useState } from 'react';

interface Props {
  value: number;
  suffix?: string;
  label: string;
}

export default function Stat({ value, suffix = '', label }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setN(value);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * value));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="border-t border-border pt-6">
      <div className="font-display font-semibold tracking-tightest text-[clamp(2.4rem,6vw,4.5rem)] leading-none">
        {n}
        <span className="text-muted">{suffix}</span>
      </div>
      <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">{label}</div>
    </div>
  );
}
