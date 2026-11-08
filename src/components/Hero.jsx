import { useLang } from "../i18n";
import { contact } from "../content";
import RobotArm from "./RobotArm";

export default function Hero({ onContactClick }) {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section id="hero" className="relative flex min-h-[min(100svh,820px)] items-center pb-8 pt-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs text-muted">
            <span className="blink inline-block h-2 w-2 rounded-full bg-accent" />
            {h.status}
          </p>
          <p className="mt-8 font-display text-xl font-medium text-paper/80">{contact.name}</p>
          <h1 className="mt-2 font-display text-4xl font-bold leading-[1.05] tracking-tight text-paper sm:text-5xl xl:text-[3.4rem]">
            {h.role}
            <span className="mt-1 block text-accent">{h.roleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{h.pitch}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="btn-primary">{h.ctaProjects} →</a>
            <button type="button" onClick={onContactClick} className="btn-ghost">{h.ctaContact}</button>
          </div>
        </div>

        <RobotArm caption={h.armCaption} hint={h.armHint} />
      </div>
    </section>
  );
}
