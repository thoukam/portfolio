import { useReducedMotion } from "../useReducedMotion";

// Animation de fond du bloc Contact : un robot mobile vu de dessus
// traverse lentement le bloc en suivant sa trajectoire, lidar en rotation.
// Il démarre en cours de route (begin négatif) pour être visible dès l'ouverture.
// Dessiné en traits foncés semi-transparents pour rester discret sur le jaune.

const INK = "#090d17";
const PATH =
  "M -120 520 C 180 600 320 380 560 400 S 900 610 1120 470 S 1420 260 1720 330";


function Robot({ animate }) {
  return (
    <g>
      {/* balayage lidar : secteur qui tourne */}
      <g opacity="0.1">
        <path d="M0 0 L150 -38 A155 155 0 0 1 150 38 Z" fill={INK} />
        {animate && (
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="2.4s" repeatCount="indefinite" />
        )}
      </g>
      {/* portée du lidar */}
      <circle r="155" fill="none" stroke={INK} strokeOpacity="0.18" strokeDasharray="3 7" />

      {/* roues */}
      {[
        [-24, -24],
        [14, -24],
        [-24, 18],
        [14, 18],
      ].map(([x, y]) => (
        <rect key={`${x}${y}`} x={x} y={y} width="16" height="7" rx="2" fill={INK} opacity="0.32" />
      ))}
      {/* châssis */}
      <rect x="-30" y="-17" width="60" height="34" rx="6" fill={INK} opacity="0.3" />
      {/* tourelle lidar */}
      <circle cx="4" cy="0" r="7" fill="none" stroke={INK} strokeOpacity="0.45" strokeWidth="2" />
      {/* avant du robot */}
      <path d="M30 -10 L40 0 L30 10 Z" fill={INK} opacity="0.3" />
    </g>
  );
}

export default function FooterRobot() {
  const reduced = useReducedMotion();

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* trajectoire planifiée */}
      <path id="footer-traj" d={PATH} fill="none" stroke={INK} strokeOpacity="0.2" strokeWidth="2" strokeDasharray="10 12" />


      {reduced ? (
        <g transform="translate(560 400) rotate(5)">
          <Robot animate={false} />
        </g>
      ) : (
        <g>
          <Robot animate />
          <animateMotion dur="38s" begin="-9s" repeatCount="indefinite" rotate="auto">
            <mpath href="#footer-traj" />
          </animateMotion>
        </g>
      )}
    </svg>
  );
}
