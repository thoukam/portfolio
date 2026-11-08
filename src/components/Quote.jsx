import { useLang } from "../i18n";

export default function Quote() {
  const { t, lang } = useLang();
  const q = t.quote;
  const [open, close] = lang === "fr" ? ["« ", " »"] : ["“", "”"];

  return (
    <section aria-label={q.author} className="relative py-6 md:py-10">
      <div className="section-shell">
        <figure className="mx-auto max-w-4xl border-l-2 border-accent pl-6 md:pl-10">
          <blockquote className="font-display text-3xl font-bold leading-tight tracking-tight text-paper md:text-5xl">
            {open}{q.text}{close}
          </blockquote>
          {q.original && <p className="mt-4 font-mono text-sm italic text-muted">{q.original}</p>}
          <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            <span className="text-accent">{q.author}</span> · {q.source}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
