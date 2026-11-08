import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLang } from "../i18n";
import { contact } from "../content";
import SectionHeader from "./SectionHeader";

export default function Footer({ onContactClick }) {
  const { t } = useLang();
  const c = t.contact;

  const rows = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Tel", value: contact.phone, href: contact.phoneHref },
    { label: "LinkedIn", value: "yves-thoukam-thotchum", href: contact.linkedin, external: true, icon: <FaLinkedin /> },
    { label: "GitHub", value: "thoukam", href: contact.github, external: true, icon: <FaGithub /> },
  ];

  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-ink-950 py-16 md:py-20">
      <div className="section-shell grid gap-12 md:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeader index="05" kicker={c.kicker} title={c.title}>
            <p className="mt-5 max-w-md text-lg text-muted">{c.text}</p>
          </SectionHeader>
          <button type="button" className="btn-primary mt-8" onClick={onContactClick}>
            {c.cta} →
          </button>
        </div>

        <dl className="self-end border-t border-white/10">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-[6rem_1fr] items-center border-b border-white/10 py-4">
              <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{r.label}</dt>
              <dd>
                <a
                  href={r.href}
                  {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-2 text-paper transition hover:text-accent"
                >
                  {r.icon}
                  {r.value}
                </a>
              </dd>
            </div>
          ))}
          <div className="grid grid-cols-[6rem_1fr] py-4">
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Loc</dt>
            <dd className="text-paper">{c.location}</dd>
          </div>
        </dl>
      </div>

      <div className="section-shell mt-20 flex flex-col justify-between gap-2 font-mono text-[11px] text-muted sm:flex-row">
        <span>&copy; {new Date().getFullYear()} {contact.name}. {c.rights}</span>
        <span>React · Vite · Tailwind</span>
      </div>
    </footer>
  );
}
