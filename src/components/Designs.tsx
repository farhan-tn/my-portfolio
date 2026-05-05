import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Lightbox from './Lightbox';
import { designs } from '../data/designs';

export default function Designs() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <Section id="designs" index="03" label="UI / UX Designs" title="Designed in Figma. Built in code.">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {designs.map((d, i) => {
          const span = d.span === 'wide' ? 'sm:col-span-2' : '';
          return (
            <motion.button
              key={d.image}
              onClick={() => setActive(i)}
              data-cursor
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className={
                'group relative bg-surface border border-border overflow-hidden text-left aspect-[16/10] hover:border-text transition-colors duration-300 ' +
                span
              }
            >
              <img
                src={d.image}
                alt={d.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 flex items-end justify-between">
                <div>
                  <div className="font-display font-semibold text-xl md:text-2xl tracking-tight text-text">
                    {d.title}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mt-1">
                    {d.caption}
                  </div>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text opacity-0 group-hover:opacity-100 transition-opacity">
                  Open →
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      <Lightbox designs={designs} index={active} onClose={() => setActive(null)} onIndex={setActive} />
    </Section>
  );
}
