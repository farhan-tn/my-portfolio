import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(true);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(pointer: fine)');
    setReduce(mq.matches || !fine.matches);
  }, []);

  useEffect(() => {
    if (reduce) return;
    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let dx = rx;
    let dy = ry;
    let frame = 0;

    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dx - 3}px, ${dy - 3}px, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (hidden) setHidden(false);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest('a, button, [data-cursor]');
      if (ringRef.current) {
        ringRef.current.style.width = interactive ? '52px' : '32px';
        ringRef.current.style.height = interactive ? '52px' : '32px';
        ringRef.current.style.borderColor = interactive ? '#f5f5f5' : '#525252';
        ringRef.current.style.opacity = interactive ? '1' : '0.7';
      }
    };

    const onLeave = () => setHidden(true);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.body.addEventListener('mouseleave', onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.body.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(frame);
    };
  }, [reduce, hidden]);

  if (reduce) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block rounded-full border transition-[width,height,border-color,opacity] duration-200 will-change-transform"
        style={{ width: 32, height: 32, opacity: hidden ? 0 : 0.7, mixBlendMode: 'difference' }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block rounded-full bg-white will-change-transform"
        style={{ width: 6, height: 6, opacity: hidden ? 0 : 1, mixBlendMode: 'difference' }}
      />
    </>
  );
}
