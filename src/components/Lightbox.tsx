import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Design } from '../data/designs';

interface Props {
  designs: Design[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}

export default function Lightbox({ designs, index, onClose, onIndex }: Props) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((index + 1) % designs.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + designs.length) % designs.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, designs.length, onClose, onIndex]);

  const current = index !== null ? designs[index] : null;

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          className="fixed inset-0 z-[90]"
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-bg/95 backdrop-blur-md"
          />
          <button
            aria-label="Close"
            onClick={onClose}
            data-cursor
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center border border-border text-text hover:border-text hover:bg-surface transition-colors"
          >
            <X size={18} />
          </button>

          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16">
            <button
              onClick={() => onIndex((index! - 1 + designs.length) % designs.length)}
              data-cursor
              aria-label="Previous"
              className="absolute left-4 md:left-10 w-12 h-12 flex items-center justify-center border border-border text-text hover:border-text hover:bg-surface transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => onIndex((index! + 1) % designs.length)}
              data-cursor
              aria-label="Next"
              className="absolute right-4 md:right-10 w-12 h-12 flex items-center justify-center border border-border text-text hover:border-text hover:bg-surface transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={current.image}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={current.image}
                alt={current.title}
                className="max-w-full max-h-[78vh] object-contain border border-border bg-surface"
              />
              <div className="mt-4 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                <span className="text-text">{current.title}</span>
                <span>·</span>
                <span>{current.caption}</span>
                <span>·</span>
                <span>
                  {String((index ?? 0) + 1).padStart(2, '0')} / {String(designs.length).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
