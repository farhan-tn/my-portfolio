import { motion } from "framer-motion";
import GridBackground from "./GridBackground";
import MagneticButton from "./MagneticButton";

const headline = ["Engineering", "Systems", "That", "Scale."];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col"
    >
      <GridBackground />

      <div className="relative z-10 px-6 md:px-10 pt-24 md:pt-28">
        <div className="flex items-center justify-between font-mono text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-muted">
          <span>
            <span className="text-text">●</span> N 30.157 / E 71.524 — Multan,
            PK
          </span>
          <span className="hidden md:inline">v 4.0 / 2026</span>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex items-center px-6 md:px-10">
        <div className="w-full max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted mb-8"
          >
            <span className="text-text">&gt;</span> farhan_jamil.init() &nbsp;
            <span className="inline-block w-[7px] h-[14px] bg-text align-middle animate-blink" />
          </motion.div>

          <h1 className="font-display font-semibold text-text leading-[0.95] tracking-tightest text-[clamp(3.2rem,11vw,11rem)]">
            {headline.map((word, i) => (
              <span
                key={word}
                className="inline-block overflow-hidden align-bottom mr-[0.18em]"
              >
                <motion.span
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 0.9, 0.16, 1],
                    delay: 0.2 + i * 0.08,
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p className="max-w-xl text-soft text-base md:text-lg leading-relaxed">
              I'm <span className="text-text font-medium">Farhan</span> — a
              Senior Full-Stack Engineer & Tech Lead with{" "}
              <span className="text-text">8+ years</span> shipping SaaS,
              real-time platforms, AI products and mobile apps from architecture
              to production.
            </p>

            <div className="flex flex-wrap gap-3">
              <MagneticButton href="#work" variant="primary">
                See the work
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Get in touch
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 px-6 md:px-10 pb-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between font-mono text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-muted">
          <span className="hidden sm:block">scroll —</span>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">
              React · NestJS · React Native · AI
            </span>
            <span className="text-text animate-float inline-block">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
