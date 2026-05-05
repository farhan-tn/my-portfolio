import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from '../data/projects';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-bg/85 backdrop-blur-md"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            data-lenis-prevent
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute right-0 top-0 bottom-0 w-full md:w-[640px] lg:w-[760px] bg-bg border-l border-border overflow-y-auto overscroll-contain"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-10 py-5 bg-bg/85 backdrop-blur border-b border-border">
              <div className="flex items-center gap-3">
                {project.categories.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted border border-border px-2 py-1"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                data-cursor
                className="w-9 h-9 flex items-center justify-center border border-border hover:border-text hover:bg-surface transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="px-6 md:px-10 py-10 space-y-12">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-4">
                  Case study
                </div>
                <h3 className="font-display font-semibold tracking-tightest text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] text-text">
                  {project.name}
                </h3>
                <p className="mt-5 text-soft text-base md:text-lg leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted mb-4">
                  Problem
                </div>
                <p className="text-soft leading-relaxed">{project.problem}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted mb-4">
                    Challenges
                  </div>
                  <ul className="space-y-3">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex gap-3 text-soft text-sm leading-relaxed">
                        <span className="text-text font-mono text-xs mt-1">—</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted mb-4">
                    Solutions
                  </div>
                  <ul className="space-y-3">
                    {project.solutions.map((s) => (
                      <li key={s} className="flex gap-3 text-soft text-sm leading-relaxed">
                        <span className="text-text font-mono text-xs mt-1">+</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted mb-4">
                  Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-soft border border-border px-2.5 py-1.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted mb-4">
                  Highlights
                </div>
                <div className="grid sm:grid-cols-3 gap-px bg-border">
                  {project.highlights.map((h) => (
                    <div key={h} className="bg-bg p-5">
                      <div className="text-text text-sm leading-snug">{h}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
