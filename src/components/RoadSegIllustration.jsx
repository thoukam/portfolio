// Schéma illustratif du projet AutoDrive-Seg (pas un résultat réel) :
// image d'entrée -> modèle de segmentation -> masque route / non-route.

function Scene({ x, mask }) {
  // Route en perspective, horizon, deux obstacles (voitures) et un bord de trottoir.
  const road = `${x + 18},160 ${x + 62},88 ${x + 78},88 ${x + 122},160`;
  return (
    <g>
      <rect x={x} y="40" width="140" height="120" rx="3" fill="#0f1524" stroke="rgba(255,255,255,0.15)" />
      {/* ciel / bâtiments */}
      <rect x={x + 6} y="58" width="22" height="30" fill="#1b2338" />
      <rect x={x + 30} y="66" width="16" height="22" fill="#1b2338" />
      <rect x={x + 96} y="54" width="26" height="34" fill="#1b2338" />
      <rect x={x + 124} y="70" width="10" height="18" fill="#1b2338" />
      {/* sol hors route */}
      <rect x={x + 1} y="88" width="138" height="71" fill="#151c2c" />
      {/* route */}
      <polygon
        points={road}
        className={mask ? "fill-accent" : undefined}
        fill={mask ? undefined : "#2a3247"}
        fillOpacity={mask ? 0.55 : 1}
      />
      {/* marquage central (seulement sur l'image d'entrée) */}
      {!mask && (
        <g stroke="#e6edf7" strokeOpacity="0.55" strokeWidth="1.5">
          <line x1={x + 70} y1="92" x2={x + 70} y2="100" />
          <line x1={x + 70} y1="108" x2={x + 70} y2="120" />
          <line x1={x + 70} y1="130" x2={x + 70} y2="148" />
        </g>
      )}
      {/* obstacles : voiture devant et voiture garée */}
      <rect
        x={x + 60}
        y="108"
        width="18"
        height="12"
        rx="2"
        fill={mask ? "#0f1524" : "#8f9bb0"}
        stroke={mask ? "#f87171" : "none"}
        strokeDasharray={mask ? "2 2" : undefined}
      />
      <rect
        x={x + 92}
        y="126"
        width="24"
        height="16"
        rx="2"
        fill={mask ? "#0f1524" : "#6b7690"}
        stroke={mask ? "#f87171" : "none"}
        strokeDasharray={mask ? "2 2" : undefined}
      />
    </g>
  );
}

export default function RoadSegIllustration({ labels }) {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full bg-ink-800" role="img" aria-label={labels.aria}>
      <g transform="translate(0 4)">
      <Scene x={10} mask={false} />
      <Scene x={170} mask />

      {/* flèche + modèle */}
      <g className="fill-accent">
        <rect x="151" y="92" width="18" height="16" rx="2" fillOpacity="0.15" className="stroke-accent" strokeWidth="1" />
        <path d="M152 100 h12 l-3 -3 M164 100 l-3 3" fill="none" className="stroke-accent" strokeWidth="1.2" />
      </g>

      {/* étiquettes */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="7.5" fill="#8f9bb0">
        <text x="10" y="34">{labels.input}</text>
        <text x="170" y="34">{labels.output}</text>
        <text x="160" y="122" textAnchor="middle" fontSize="6.5">U-Net</text>
        <text x="160" y="130" textAnchor="middle" fontSize="6.5">DeepLabv3</text>
      </g>
      </g>

      {/* légende du masque */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#8f9bb0">
        <rect x="170" y="170" width="7" height="7" className="fill-accent" fillOpacity="0.55" />
        <text x="180" y="176">{labels.road}</text>
        <rect x="232" y="170" width="7" height="7" fill="none" stroke="#f87171" strokeDasharray="2 1.5" />
        <text x="242" y="176">{labels.obstacle}</text>
      </g>
    </svg>
  );
}
