import { allTechKeywords } from '../data/skills';

export default function Marquee() {
  const items = [...allTechKeywords, ...allTechKeywords];
  return (
    <div className="relative border-y border-border bg-bg overflow-hidden marquee-mask py-8">
      <div className="flex w-max animate-marquee gap-12 will-change-transform">
        {items.map((label, i) => (
          <div
            key={`${label}-${i}`}
            className="flex items-center gap-12 font-display font-semibold text-3xl md:text-5xl tracking-tightest text-muted hover:text-text transition-colors"
          >
            <span>{label}</span>
            <span aria-hidden className="text-border">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
