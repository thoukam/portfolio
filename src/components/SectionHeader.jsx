// tone="dark" : pour une section sur fond clair (ex. le bloc Contact jaune)
export default function SectionHeader({ index, kicker, title, children, tone = "light" }) {
  const dark = tone === "dark";
  return (
    <header className="max-w-3xl">
      <p
        className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] ${
          dark ? "text-ink-950" : "text-accent"
        }`}
      >
        <span>{index}</span>
        <span className={`h-px w-10 ${dark ? "bg-ink-950/50" : "bg-accent/60"}`} />
        <span className={dark ? "text-ink-950/70" : "text-muted"}>{kicker}</span>
      </p>
      <h2 className={`section-title ${dark ? "!text-ink-950" : ""}`}>{title}</h2>
      {children}
    </header>
  );
}
