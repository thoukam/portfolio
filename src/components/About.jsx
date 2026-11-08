import portrait from "../assets/portrait-thoukam.jpg";
import { useLang } from "../i18n";
import { contact } from "../content";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="section-shell grid items-start gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <figure className="corners mx-auto w-full max-w-xs lg:sticky lg:top-28">
          <img
            src={portrait}
            alt={contact.name}
            className="aspect-[4/5] w-full rounded-sm object-cover grayscale-[35%]"
          />
          <figcaption className="mt-3 font-mono text-[11px] text-muted">{contact.name}</figcaption>
        </figure>

        <div>
          <SectionHeader index="01" kicker={a.kicker} title={a.title} />
          {a.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/80">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
