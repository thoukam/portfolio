import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useLang } from "../i18n";
import { contact } from "../content";
import SectionHeader from "./SectionHeader";
import FooterRobot from "./FooterRobot";

// Zone affichée : région lyonnaise (pas d'adresse précise)
const MAP_BBOX = "4.65,45.62,5.10,45.88";
const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(MAP_BBOX)}&layer=mapnik`;

export default function Footer({ onContactClick }) {
  const { t } = useLang();
  const c = t.contact;

  const rows = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: <FaEnvelope /> },
    { label: c.phoneLabel, value: contact.phone, href: contact.phoneHref, icon: <FaPhone /> },
    { label: "LinkedIn", value: "yves-thoukam-thotchum", href: contact.linkedin, external: true, icon: <FaLinkedin /> },
    { label: "GitHub", value: "thoukam", href: contact.github, external: true, icon: <FaGithub /> },
  ];

  return (
    <footer id="contact" className="relative z-10 overflow-hidden bg-signal py-16 text-ink-950 md:py-20">
      <FooterRobot />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeader index="05" kicker={c.kicker} title={c.title} tone="dark">
            <p className="mt-5 max-w-md text-lg text-ink-950/75">{c.text}</p>
          </SectionHeader>
          <button
            type="button"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-ink-950 px-5 py-3 font-semibold text-signal transition hover:bg-ink-800"
            onClick={onContactClick}
          >
            {c.cta} →
          </button>

          <dl className="mt-10 border-t border-ink-950/15">
            {rows.map((r) => (
              <div key={r.label} className="grid grid-cols-[6.5rem_1fr] items-center border-b border-ink-950/15 py-3.5">
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-ink-950/60">{r.label}</dt>
                <dd>
                  <a
                    href={r.href}
                    {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2 font-medium text-ink-950 underline-offset-4 hover:underline"
                  >
                    {r.icon}
                    {r.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="self-end">
          <div className="overflow-hidden rounded-sm border-2 border-ink-950">
            <iframe
              title={c.mapTitle}
              src={MAP_SRC}
              loading="lazy"
              className="block h-72 w-full md:h-96"
              style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.6) brightness(0.95)" }}
            />
          </div>
          <figcaption className="mt-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-950/70">
            <span className="inline-block h-2 w-2 rounded-full bg-ink-950" />
            {c.location}
          </figcaption>
        </figure>
      </div>

      <div className="section-shell relative mt-14 flex flex-col justify-between gap-2 border-t border-ink-950/15 pt-6 font-mono text-[11px] text-ink-950/60 sm:flex-row">
        <span>&copy; {new Date().getFullYear()} {contact.name}. {c.rights}</span>
        <span
          title={c.ket.hint}
          className="cursor-default text-[15px] italic text-ink-950/75"
          style={{ fontFamily: '"STIX Two Math", "Cambria Math", "Latin Modern Math", "Times New Roman", serif' }}
        >
          {c.ket.state}
        </span>
      </div>
    </footer>
  );
}
