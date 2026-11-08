import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../useReducedMotion";

// Bras plan à 2 degrés de liberté, piloté par cinématique inverse analytique.
const BASE = { x: 200, y: 330 };
const L1 = 140;
const L2 = 115;
const MM_PER_UNIT = 2; // échelle affichée : 1 unité SVG = 2 mm
const IDLE_DELAY = 2500;

function solveIK(tx, ty) {
  // repère robot : x vers la droite, y vers le haut
  let dx = tx - BASE.x;
  let dy = BASE.y - ty;
  dy = Math.max(dy, 12); // reste au-dessus du sol
  let r = Math.hypot(dx, dy);
  const rMax = L1 + L2 - 2;
  const rMin = Math.abs(L1 - L2) + 20;
  if (r > rMax || r < rMin) {
    const k = Math.min(Math.max(r, rMin), rMax) / r;
    dx *= k;
    dy *= k;
    r = Math.hypot(dx, dy);
  }
  const c2 = (r * r - L1 * L1 - L2 * L2) / (2 * L1 * L2);
  const q2 = -Math.acos(Math.min(1, Math.max(-1, c2))); // coude en haut
  const q1 = Math.atan2(dy, dx) - Math.atan2(L2 * Math.sin(q2), L1 + L2 * Math.cos(q2));
  return { q1, q2, x: dx, y: dy };
}

function idleTarget(t) {
  // petite lemniscate devant le robot quand personne ne bouge la souris
  const s = t / 2600;
  const d = 1 + Math.sin(s) ** 2;
  return { x: BASE.x + (110 * Math.cos(s)) / d, y: 170 + (90 * Math.sin(s) * Math.cos(s)) / d };
}

const deg = (a) => ((a * 180) / Math.PI).toFixed(1).padStart(6, " ");

export default function RobotArm({ caption, hint }) {
  const svgRef = useRef(null);
  const target = useRef(idleTarget(0));
  const current = useRef({ ...target.current });
  const lastMove = useRef(-Infinity);
  const reduced = useReducedMotion();
  const [pose, setPose] = useState(() => ({ ...solveIK(target.current.x, target.current.y), tx: target.current.x, ty: target.current.y }));

  useEffect(() => {
    const onMove = (e) => {
      const svg = svgRef.current;
      if (!svg) return;
      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const p = pt.matrixTransform(svg.getScreenCTM().inverse());
      target.current = { x: p.x, y: p.y };
      lastMove.current = performance.now();
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf;
    const tick = (now) => {
      if (now - lastMove.current > IDLE_DELAY && !reduced) {
        target.current = idleTarget(now);
      }
      const c = current.current;
      c.x += (target.current.x - c.x) * 0.12;
      c.y += (target.current.y - c.y) * 0.12;
      setPose({ ...solveIK(c.x, c.y), tx: target.current.x, ty: target.current.y });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const { q1, q2 } = pose;
  const j1 = { x: BASE.x + L1 * Math.cos(q1), y: BASE.y - L1 * Math.sin(q1) };
  const a2 = q1 + q2;
  const ee = { x: j1.x + L2 * Math.cos(a2), y: j1.y - L2 * Math.sin(a2) };
  const eeDeg = (-a2 * 180) / Math.PI;

  return (
    <figure className="corners panel relative select-none p-3">
      <svg ref={svgRef} viewBox="0 0 400 380" className="h-auto w-full touch-none" role="img" aria-label={caption}>
        {/* espace de travail */}
        <circle cx={BASE.x} cy={BASE.y} r={L1 + L2} fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 6" />
        <circle cx={BASE.x} cy={BASE.y} r={Math.abs(L1 - L2) + 20} fill="none" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 6" />

        {/* sol */}
        <line x1="20" y1={BASE.y + 22} x2="380" y2={BASE.y + 22} stroke="rgba(255,255,255,0.25)" />
        {Array.from({ length: 24 }, (_, i) => (
          <line key={i} x1={24 + i * 15} y1={BASE.y + 22} x2={14 + i * 15} y2={BASE.y + 32} stroke="rgba(255,255,255,0.12)" />
        ))}

        {/* cible */}
        <g className="stroke-accent" strokeWidth="1.2" opacity="0.9">
          <circle cx={pose.tx} cy={pose.ty} r="9" fill="none" />
          <line x1={pose.tx - 15} y1={pose.ty} x2={pose.tx - 5} y2={pose.ty} />
          <line x1={pose.tx + 5} y1={pose.ty} x2={pose.tx + 15} y2={pose.ty} />
          <line x1={pose.tx} y1={pose.ty - 15} x2={pose.tx} y2={pose.ty - 5} />
          <line x1={pose.tx} y1={pose.ty + 5} x2={pose.tx} y2={pose.ty + 15} />
        </g>

        {/* socle */}
        <rect x={BASE.x - 34} y={BASE.y + 4} width="68" height="18" rx="2" fill="#222a40" stroke="rgba(255,255,255,0.25)" />

        {/* segment 1 */}
        <line x1={BASE.x} y1={BASE.y} x2={j1.x} y2={j1.y} stroke="#2a3450" strokeWidth="26" strokeLinecap="round" />
        <line x1={BASE.x} y1={BASE.y} x2={j1.x} y2={j1.y} stroke="#ebe8e3" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        {/* segment 2 */}
        <line x1={j1.x} y1={j1.y} x2={ee.x} y2={ee.y} className="stroke-accent" strokeWidth="18" strokeLinecap="round" />

        {/* pince */}
        <g transform={`translate(${ee.x} ${ee.y}) rotate(${eeDeg})`}>
          <rect x="-2" y="-11" width="8" height="22" rx="1.5" fill="#ebe8e3" />
          <rect x="6" y="-11" width="16" height="5" rx="1" fill="#ebe8e3" />
          <rect x="6" y="6" width="16" height="5" rx="1" fill="#ebe8e3" />
        </g>

        {/* articulations */}
        {[BASE, j1].map((j, i) => (
          <g key={i}>
            <circle cx={j.x} cy={j.y} r="15" fill="#0f1524" stroke="#ebe8e3" strokeWidth="2" />
            <circle cx={j.x} cy={j.y} r="4" className="fill-accent" />
          </g>
        ))}

        {/* étiquettes des articulations */}
        <text x={BASE.x + 22} y={BASE.y - 8} className="fill-muted font-mono" fontSize="10">J1</text>
        <text x={j1.x + 20} y={j1.y - 10} className="fill-muted font-mono" fontSize="10">J2</text>
      </svg>

      <figcaption className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 border-t border-white/10 pt-3 font-mono text-[11px] text-muted sm:grid-cols-4">
        <span>θ1 <span className="text-paper">{deg(q1)}°</span></span>
        <span>θ2 <span className="text-paper">{deg(q2)}°</span></span>
        <span>x <span className="text-paper">{(pose.x * MM_PER_UNIT).toFixed(0).padStart(4, " ")} mm</span></span>
        <span>y <span className="text-paper">{(pose.y * MM_PER_UNIT).toFixed(0).padStart(4, " ")} mm</span></span>
        <span className="col-span-full mt-2 text-muted/80">{caption} · <span className="text-accent">{hint}</span></span>
      </figcaption>
    </figure>
  );
}
