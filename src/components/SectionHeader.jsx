export default function SectionHeader({ index, kicker, title, children }) {
  return (
    <header className="max-w-3xl">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span>{index}</span>
        <span className="h-px w-10 bg-accent/60" />
        <span className="text-muted">{kicker}</span>
      </p>
      <h2 className="section-title">{title}</h2>
      {children}
    </header>
  );
}
