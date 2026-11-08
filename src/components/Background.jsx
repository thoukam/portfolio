import { useEffect, useMemo } from "react";
import { useReducedMotion } from "../useReducedMotion";

// Couleur d'accent lue depuis la variable CSS --accent (index.css)
function accentColor() {
  const rgb = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  return rgb ? `rgb(${rgb.split(/\s+/).join(",")})` : "#22d3ee";
}

// Lemniscate de Bernoulli : la trajectoire du projet TurtleBot / SMC.
function lemniscatePath(a, cx, cy, steps = 200) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const d = 1 + Math.sin(t) ** 2;
    pts.push(`${(cx + (a * Math.cos(t)) / d).toFixed(1)},${(cy + (a * Math.sin(t) * Math.cos(t)) / d).toFixed(1)}`);
  }
  return `M${pts.join(" L")} Z`;
}

export default function Background() {
  const reduced = useReducedMotion();
  const path = useMemo(() => lemniscatePath(620, 800, 500), []);

  useEffect(() => {
    if (!window.tsParticles) return undefined;
    const color = accentColor();
    window.tsParticles.load("tsparticles", {
      background: { color: "#090d17" },
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
        events: { onHover: { enable: !reduced, mode: "repulse" }, resize: true },
        modes: { repulse: { distance: 120, duration: 0.4 } },
      },
      particles: {
        color: { value: color },
        links: { color, distance: 150, enable: true, opacity: 0.4, width: 1 },
        collisions: { enable: true },
        move: { enable: !reduced, speed: 1, outModes: { default: "bounce" } },
        number: { value: 50, density: { enable: true, area: 800 } },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    });
    return () => window.tsParticles.dom().forEach((instance) => instance.destroy());
  }, [reduced]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink-950">
      <div id="tsparticles" className="absolute inset-0" />

      {/* le petit robot qui suit sa trajectoire en 8 */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
        <path id="bg-traj" d={path} fill="none" className="stroke-accent" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="6 10" />
        {!reduced && (
          <g className="fill-accent" opacity="0.75">
            <rect x="-9" y="-7" width="18" height="14" rx="2" />
            <path d="M9,-4 L15,0 L9,4 Z" />
            <animateMotion dur="40s" repeatCount="indefinite" rotate="auto">
              <mpath href="#bg-traj" />
            </animateMotion>
          </g>
        )}
      </svg>
    </div>
  );
}
