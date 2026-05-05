export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 md:px-10 py-10">
      <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        <div>© {year} Farhan Jamil — Designed & built from scratch.</div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/farhan-tn"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-text transition-colors"
            data-cursor
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/farhan-jamil-40303b200"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-text transition-colors"
            data-cursor
          >
            LinkedIn
          </a>
          <a href="#top" className="hover:text-text transition-colors" data-cursor>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
