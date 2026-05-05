export default function GridBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(800px 400px at 50% 90%, rgba(255,255,255,0.06), transparent 60%)',
        }}
      />
    </div>
  );
}
