import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

interface Props {
  project: Project;
  onOpen: () => void;
  index: number;
}

export default function ProjectCard({ project, onOpen, index }: Props) {
  return (
    <motion.button
      onClick={onOpen}
      data-cursor
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: (index % 6) * 0.05 }}
      className="brackets scanline group relative overflow-hidden text-left bg-surface border border-border p-7 md:p-8 hover:border-text transition-colors duration-300 min-h-[320px] flex flex-col"
    >
      <span className="b tl" />
      <span className="b tr" />
      <span className="b bl" />
      <span className="b br" />

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {project.categories.slice(0, 2).map((c) => (
            <span
              key={c}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted border border-border px-2 py-1"
            >
              {c}
            </span>
          ))}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="font-display font-semibold text-3xl md:text-4xl tracking-tightest leading-[1.05] mb-4 text-text">
        {project.name}
      </h3>

      <p className="text-soft text-sm md:text-[15px] leading-relaxed flex-1">{project.tagline}</p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 6).map((s) => (
          <span key={s} className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            {s}
            <span className="text-border ml-1.5">·</span>
          </span>
        ))}
      </div>

      <div className="mt-7 pt-5 border-t border-border flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text">View case</span>
        <span aria-hidden className="text-text transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </div>
    </motion.button>
  );
}
