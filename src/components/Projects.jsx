import { useState } from "react";
import { useLang } from "../i18n";
import { projectsBase } from "../content";
import SectionHeader from "./SectionHeader";
import RoadSegIllustration from "./RoadSegIllustration";
import { useReducedMotion } from "../useReducedMotion";

const FILTERS = ["all", "arm", "autonomy", "perception", "tooling", "other"];

// Liens vidéo sous les fiches (ex. "Cycle complet", "Tri des pièces").
// Masqués pour l'instant : passer à true pour les réafficher.
const SHOW_VIDEO_LINKS = false;

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const [filter, setFilter] = useState("all");
  const reduced = useReducedMotion();

  const visible = projectsBase.filter((proj) => filter === "all" || proj.domain === filter);

  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="section-shell">
        <SectionHeader index="03" kicker={p.kicker} title={p.title}>
          <p className="mt-5 text-lg leading-relaxed text-muted">{p.intro}</p>
        </SectionHeader>

        <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs">
          {FILTERS.map((key) => {
            const count = key === "all" ? projectsBase.length : projectsBase.filter((x) => x.domain === key).length;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
                className={`rounded-sm border px-3 py-1.5 transition ${
                  filter === key
                    ? "border-accent bg-accent text-ink-950"
                    : "border-white/15 text-muted hover:border-paper/50 hover:text-paper"
                }`}
              >
                {p.filters[key]} <span className="opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((proj) => {
            const text = p.items[proj.id];
            const num = String(projectsBase.indexOf(proj) + 1).padStart(2, "0");
            return (
              <article key={proj.id} className="panel group flex h-full flex-col overflow-hidden transition hover:border-accent/50">
                <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-ink-800">
                  {proj.video ? (
                    <video
                      src={proj.video}
                      poster={proj.image}
                      autoPlay={!reduced}
                      controls={reduced}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={text.title}
                      className="h-full w-full object-cover"
                    />
                  ) : proj.illustration === "roadSeg" ? (
                    <>
                      <RoadSegIllustration labels={p.roadSeg} />
                      <span className="absolute right-2 top-2 rounded-sm bg-ink-950/80 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                        {p.schematic}
                      </span>
                    </>
                  ) : proj.image ? (
                    <img
                      src={proj.image}
                      alt={text.title}
                      className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-end bg-gradient-to-br from-ink-800 to-ink-900 p-5"
                    >
                      <p className="font-mono text-sm text-accent">{proj.stack.slice(0, 3).join(" / ")}</p>
                    </div>
                  )}
                  <span className="absolute left-0 top-0 bg-ink-950/90 px-2.5 py-1 font-mono text-[11px] text-paper">
                    P-{num} · <span className="text-accent">{p.filters[proj.domain]}</span>
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <p className="font-mono text-[11px] text-muted">
                    {text.context} · {text.date}
                  </p>
                  <h3 className="font-display text-xl font-bold leading-snug text-paper">{text.title}</h3>
                  <p className="text-sm leading-relaxed text-paper/75">{text.summary}</p>
                  {text.goal && (
                    <p className="text-sm text-muted">
                      <span className="font-semibold text-paper/90">{p.goalLabel} :</span> {text.goal}
                    </p>
                  )}

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                    {proj.stack.map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>

                  {SHOW_VIDEO_LINKS && proj.links && (
                    <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
                      {proj.links.map((l) => (
                        <a
                          key={l.key}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-mono text-xs text-accent hover:underline"
                        >
                          ▶ {p.links[l.key]}
                        </a>
                      ))}
                    </div>
                  )}

                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-fit items-center font-mono text-xs text-accent hover:underline"
                    >
                      {p.repo} ↗
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
