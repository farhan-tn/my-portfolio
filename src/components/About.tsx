import Section from './Section';
import Stat from './Stat';

export default function About() {
  return (
    <Section id="about" index="01" label="About">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-7 space-y-7 text-soft text-lg md:text-xl leading-relaxed reveal">
          <p>
            I build scalable web applications, real-time platforms, and AI-driven products end-to-end.
            Most of my last decade has been spent across <span className="text-text">JavaScript</span>,{' '}
            <span className="text-text">TypeScript</span>, <span className="text-text">React</span>,{' '}
            <span className="text-text">Node.js</span>, <span className="text-text">NestJS</span>, and{' '}
            <span className="text-text">React Native</span> — designing the architecture, writing the
            code, deploying it, and improving it after it ships.
          </p>
          <p>
            I've led teams as a Tech Lead and CTO. I've shipped multi-tenant SaaS, on-demand marketplaces,
            financial tools, and AI products integrating <span className="text-text">OpenAI</span>,{' '}
            <span className="text-text">Anthropic Claude</span>, <span className="text-text">LangChain</span>,{' '}
            and <span className="text-text">Pinecone</span> RAG pipelines. I care about clean,
            maintainable code and systems that don't become tomorrow's emergency.
          </p>
          <p className="text-text font-display font-semibold text-2xl md:text-3xl tracking-tight leading-snug pt-6">
            From architectural design to high-quality web and mobile experiences — full lifecycle, end-to-end.
          </p>
        </div>

        <div className="md:col-span-5 grid grid-cols-2 gap-x-8 gap-y-10 reveal">
          <Stat value={8} suffix="+" label="Years shipping" />
          <Stat value={24} suffix="+" label="Products built" />
          <Stat value={7} label="Industries" />
          <Stat value={2} label="SaaS leads" />
        </div>
      </div>
    </Section>
  );
}
