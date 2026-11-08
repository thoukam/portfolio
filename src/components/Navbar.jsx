import { useState } from "react";
import { useLang } from "../i18n";
import { contact } from "../content";

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex rounded-sm border border-white/15 font-mono text-xs">
      {["fr", "en"].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 uppercase transition ${
            lang === code ? "bg-paper text-ink-950" : "text-muted hover:text-paper"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export default function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.journey, href: "#journey" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-ink-950/80 backdrop-blur-md">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#hero" className="flex min-w-0 items-center gap-2.5 font-display text-[13px] font-bold uppercase leading-tight tracking-[0.04em] text-paper sm:gap-3 sm:text-base sm:tracking-[0.08em]">
          <img
            src="/images/avatar.jpg"
            alt=""
            className="h-9 w-9 shrink-0 rounded-full border-2 border-accent object-cover"
          />
          <span>{contact.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item, i) => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition hover:text-paper">
              <span className="mr-1 font-mono text-[10px] text-accent">0{i + 1}</span>
              {item.label}
            </a>
          ))}
          <LangSwitch />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LangSwitch />
          <button
            className="flex flex-col items-center justify-center p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
            type="button"
          >
            <span className={`block h-0.5 w-6 bg-paper transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`my-1.5 block h-0.5 w-6 bg-paper transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-paper transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink-950 md:hidden">
          <div className="section-shell flex flex-col gap-4 py-5">
            {navItems.map((item, i) => (
              <a key={item.href} href={item.href} className="text-paper" onClick={() => setOpen(false)}>
                <span className="mr-2 font-mono text-xs text-accent">0{i + 1}</span>
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onContactClick();
              }}
              className="btn-primary mt-2 w-fit"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
