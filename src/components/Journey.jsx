import { useLang } from "../i18n";
import SectionHeader from "./SectionHeader";
import atgtLogo from "../assets/atgt.png";
import dimorphLogo from "../assets/logo-dimorph.png";
import exxactLogo from "../assets/exxact-logo.png";
import ma64Logo from "../assets/logos/ma64.png";
import ws1 from "../assets/worldskills1.jpg";
import ws2 from "../assets/worldskills2.jpg";
import ws3 from "../assets/worldskills3.jpg";
import ws4 from "../assets/worldskills4.jpg";

const LOGOS = { atgt: atgtLogo, dimorph: dimorphLogo, exxact: exxactLogo, ma64: ma64Logo };
const PHOTOS = [ws1, ws2, ws3, ws4];

const TYPE_COLORS = {
  education: "text-paper",
  work: "text-accent",
  award: "text-yellow-300",
  community: "text-emerald-300",
};

export default function Journey() {
  const { t } = useLang();
  const j = t.journey;

  return (
    <section id="journey" className="relative py-16 md:py-20">
      <div className="section-shell">
        <SectionHeader index="04" kicker={j.kicker} title={j.title} />

        <ol className="mt-12 border-t border-white/10">
          {j.items.map((item) => (
            <li key={item.title} className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-[11rem_1fr] md:gap-10">
              <div className="font-mono text-xs">
                <p className={`uppercase tracking-[0.16em] ${TYPE_COLORS[item.type]}`}>{j.types[item.type]}</p>
                {item.date && <p className="mt-1 text-muted">{item.date}</p>}
                {item.logos && (
                  <div className="mt-4 flex flex-wrap gap-2 md:flex-col md:items-start">
                    {item.logos.map((key) => (
                      <img
                        key={key}
                        src={LOGOS[key]}
                        alt={key}
                        className="h-12 w-auto max-w-[10rem] rounded-sm bg-white p-1.5 object-contain"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-paper md:text-2xl">{item.title}</h3>
                {item.org && <p className="mt-1 text-sm text-muted">{item.org}</p>}
                {item.text && <p className="mt-3 max-w-2xl leading-relaxed text-paper/75">{item.text}</p>}

                {(item.bullets || item.image) && (
                  <div className={`mt-5 grid gap-6 ${item.image ? "lg:grid-cols-[1fr_15rem]" : ""}`}>
                    {item.bullets && (
                      <ul className="space-y-2.5">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex gap-3 leading-relaxed text-paper/80">
                            <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="corners aspect-[3/4] w-full max-w-xs rounded-sm object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                )}

                {item.gallery && (
                  <div className="mt-5 grid gap-3 sm:grid-cols-[0.6fr_1fr_1fr]">
                    {item.gallery.map((g) => (
                      <figure key={g.src}>
                        <img src={g.src} alt={g.alt} className="h-44 w-full rounded-sm border border-white/10 object-cover sm:h-52" loading="lazy" />
                        <figcaption className="mt-1.5 font-mono text-[11px] text-muted">{g.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}

                {item.photos && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {PHOTOS.map((src, i) => (
                      <a key={src} href={src} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-sm border border-white/10">
                        <img
                          src={src}
                          alt={`WorldSkills 2025 (${i + 1})`}
                          className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </a>
                    ))}
                  </div>
                )}

                {item.repos && (
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
                    {item.repos.map((r) => (
                      <a
                        key={r.href}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-mono text-xs text-accent hover:underline"
                      >
                        {r.label} ↗
                      </a>
                    ))}
                  </div>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center font-mono text-xs text-accent hover:underline"
                  >
                    {j.podcast} ↗
                  </a>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
