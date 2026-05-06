import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import MagneticButton from "./MagneticButton";

const channels = [
  {
    label: "Email",
    value: "farhanjamil259@gmail.com",
    href: "mailto:farhanjamil259@gmail.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "farhan-jamil-40303b200",
    href: "https://linkedin.com/in/farhan-jamil-40303b200",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "farhan-tn",
    href: "https://github.com/farhan-tn",
    Icon: Github,
  },
];

export default function Contact() {
  return (
    <Section id="contact" index="05" label="Contact">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 reveal">
          <h2 className="font-display font-semibold tracking-tightest text-[clamp(3rem,9vw,8rem)] leading-[0.95]">
            Let's build
            <br />
            something
            <br />
            <span className="text-muted">unreasonable.</span>
          </h2>

          <p className="mt-10 max-w-xl text-soft text-lg leading-relaxed">
            I'm open to senior full-stack, tech lead, and engineering management
            roles — remote, hybrid, or relocation. If you're shipping ambitious
            products, I'd love to hear from you.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton
              href="mailto:farhanjamil259@gmail.com"
              variant="primary"
              external
            >
              Send an email
            </MagneticButton>
            <MagneticButton
              href="https://linkedin.com/in/farhan-jamil-40303b200"
              variant="ghost"
              external
            >
              LinkedIn
            </MagneticButton>
          </div>
        </div>

        <div className="lg:col-span-5 reveal">
          <div className="border-t border-border">
            {channels.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                data-cursor
                className="group flex items-center justify-between gap-6 py-7 border-b border-border hover:bg-surface transition-colors px-2"
              >
                <div className="flex items-center gap-5">
                  <Icon
                    size={18}
                    className="text-muted group-hover:text-text transition-colors"
                  />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted mb-1">
                      {label}
                    </div>
                    <div className="text-text text-base md:text-lg">
                      {value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted group-hover:text-text group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                />
              </a>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px bg-border">
            <div className="bg-bg p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Status
              </div>
              <div className="mt-2 flex items-center gap-2 text-text">
                <span className="w-2 h-2 bg-text rounded-full animate-pulse" />
                Open to roles
              </div>
            </div>
            <div className="bg-bg p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Timezone
              </div>
              <div className="mt-2 text-text">UTC +5</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
