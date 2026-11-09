import { useLang } from "../i18n";
import lyon1 from "../assets/logos/lyon1.png";
import exxact from "../assets/logos/exxact.png";
import ma64 from "../assets/logos/ma64.png";
import atgt from "../assets/logos/atgt.png";
import polytech from "../assets/logos/polytech.png";
import iuc from "../assets/logos/iuc.png";
import uy1 from "../assets/logos/uy1.png";

// Du plus récent au plus ancien
const LOGOS = [
  { src: lyon1, name: "Université Claude Bernard Lyon 1" },
  { src: exxact, name: "Exxact Robotics" },
  { src: ma64, name: "MA64 Robotics" },
  { src: atgt, name: "ATGT Géomètre-Expert" },
  { src: polytech, name: "Polytech" },
  { src: iuc, name: "Institut Universitaire de la Côte" },
  { src: uy1, name: "Université de Yaoundé I" },
];

export default function LogoStrip() {
  const { t } = useLang();

  return (
    <section aria-label={t.logos.caption} className="relative pb-8 md:pb-12">
      <div className="section-shell">
        <p className="mb-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{t.logos.caption}</p>
        <ul className="flex flex-wrap justify-center gap-3">
          {LOGOS.map((logo) => (
            <li key={logo.name}>
              <div
                title={logo.name}
                className="flex h-24 w-28 items-center justify-center rounded-sm bg-white p-2.5 sm:w-36"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
