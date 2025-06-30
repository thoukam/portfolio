import { useEffect } from "react";

export default function FuturisticBackground() {
  useEffect(() => {
    if (!window.tsParticles) {
      console.warn("tsParticles not loaded");
      return;
    }
    window.tsParticles.load("tsparticles", {
      background: { color: "#090d17" },
      fpsLimit: 80,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: true,
        },
        modes: { repulse: { distance: 120, duration: 0.4 } },
      },
      particles: {
        color: { value: "#00fff7" },
        links: { color: "#00fff7", distance: 150, enable: true, opacity: 0.5, width: 1 },
        collisions: { enable: true },
        move: { enable: true, speed: 1, outModes: { default: "bounce" } },
        number: { value: 50, density: { enable: true, area: 800 } },
        opacity: { value: 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 4 } },
      },
      detectRetina: true,
    });
    return () => {
      if (window.tsParticles) {
        window.tsParticles.dom().forEach(instance => instance.destroy());
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div id="tsparticles" className="w-full h-full fixed inset-0" />
    </div>
  );
}