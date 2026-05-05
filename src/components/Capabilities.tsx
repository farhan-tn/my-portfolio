import Section from './Section';
import { skillGroups } from '../data/skills';

export default function Capabilities() {
  return (
    <Section id="capabilities" index="01.5" label="Capabilities" title="A toolkit for shipping product end-to-end.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border reveal">
        {skillGroups.map((group) => (
          <div key={group.label} className="bg-bg p-6 md:p-7 group hover:bg-surface transition-colors duration-300 min-h-[220px]">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted mb-5 group-hover:text-text transition-colors">
              {group.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-soft border border-border px-2.5 py-1.5 hover:bg-text hover:text-bg hover:border-text transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
