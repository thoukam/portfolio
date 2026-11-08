import { useLang } from "../i18n";
import SectionHeader from "./SectionHeader";

export default function Expertise() {
  const { t } = useLang();
  const e = t.expertise;

  return (
    <section id="expertise" className="relative py-16 md:py-20">
      <div className="section-shell">
        <SectionHeader index="02" kicker={e.kicker} title={e.title} />

        {/* Les deux domaines principaux */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 lg:grid-cols-2">
          {e.areas.map((area, i) => (
            <article key={area.key} className="bg-ink-950/95 p-8">
              <p className="font-mono text-xs text-accent">{String.fromCharCode(65 + i)}.</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-paper md:text-3xl">{area.title}</h3>
              <p className="mt-4 leading-relaxed text-muted">{area.text}</p>
              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {area.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-paper/90">
                    <span className="h-1 w-3 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Boîte à outils : une ligne par catégorie */}
        <h3 className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-muted">{e.toolboxTitle}</h3>
        <dl className="mt-4 border-t border-white/10">
          {e.toolbox.map((row) => (
            <div key={row.label} className="grid gap-1 border-b border-white/10 py-4 md:grid-cols-[14rem_1fr] md:items-baseline md:gap-6">
              <dt className="font-display font-semibold text-paper">{row.label}</dt>
              <dd className="text-sm leading-relaxed text-paper/80">{row.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
