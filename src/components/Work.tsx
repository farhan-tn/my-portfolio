import { useMemo, useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects, projectCategoryFilters, type Project, type ProjectCategory } from '../data/projects';

export default function Work() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [showAll, setShowAll] = useState(false);
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const base = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter));
    return showAll || filter !== 'All' ? base : base.filter((p) => p.featured);
  }, [filter, showAll]);

  return (
    <Section
      id="work"
      index="02"
      label="Selected Work"
      title="Two dozen products. Shipped end-to-end."
    >
      <div className="reveal flex flex-wrap items-center gap-2 md:gap-3 mb-10 md:mb-14">
        {projectCategoryFilters.map((f) => (
          <button
            key={f.value}
            onClick={() => {
              setFilter(f.value);
              setShowAll(false);
            }}
            data-cursor
            className={
              'font-mono text-[11px] uppercase tracking-[0.18em] px-4 py-2 border transition-colors duration-200 ' +
              (filter === f.value
                ? 'border-text bg-text text-bg'
                : 'border-border text-muted hover:text-text hover:border-text')
            }
          >
            {f.label}
            <span className="ml-2 text-[10px]">
              ({f.value === 'All'
                ? projects.length
                : projects.filter((p) => p.categories.includes(f.value as ProjectCategory)).length})
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} onOpen={() => setActive(p)} index={i} />
        ))}
      </div>

      {filter === 'All' && !showAll && projects.some((p) => !p.featured) && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            data-cursor
            className="font-mono text-[11px] uppercase tracking-[0.22em] border border-border text-text px-6 py-3 hover:border-text hover:bg-surface transition-colors"
          >
            Show all {projects.length} projects →
          </button>
        </div>
      )}

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
