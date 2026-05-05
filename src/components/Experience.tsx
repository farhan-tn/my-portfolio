import Section from './Section';
import { experience, education } from '../data/experience';

export default function Experience() {
  return (
    <Section id="experience" index="04" label="Experience" title="A decade of building, leading, and shipping.">
      <div className="relative">
        <div aria-hidden className="absolute left-0 md:left-[28%] top-0 bottom-0 w-px bg-border" />

        <ol className="space-y-12 md:space-y-16">
          {experience.map((role) => (
            <li key={`${role.company}-${role.period}`} className="reveal grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pl-6 md:pl-0 relative">
              <span aria-hidden className="absolute left-0 md:left-[28%] top-2 -translate-x-1/2 w-2 h-2 bg-text rounded-full" />

              <div className="md:col-span-3 md:pr-8 md:text-right">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  {role.period}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-text/60 mt-1">
                  {role.range}
                </div>
              </div>

              <div className="md:col-span-9 md:pl-12">
                <h3 className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-text leading-tight">
                  {role.title}
                </h3>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mt-2">
                  {role.company} <span className="text-border mx-2">·</span> {role.location}
                </div>
                <p className="mt-4 text-soft leading-relaxed max-w-2xl">{role.summary}</p>
                <ul className="mt-4 space-y-2">
                  {role.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-soft text-sm leading-relaxed">
                      <span className="text-text font-mono text-xs mt-1">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="reveal mt-16 pl-6 md:pl-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-3 md:pr-8 md:text-right">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">Education</div>
          </div>
          <div className="md:col-span-9 md:pl-12">
            {education.map((e) => (
              <div key={e.degree} className="border border-border p-6">
                <div className="font-display font-semibold text-xl text-text">{e.degree}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mt-2">
                  {e.school} <span className="text-border mx-2">·</span> {e.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
