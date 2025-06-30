import { useState } from "react";

export default function Navbar({ onContactClick }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-black bg-opacity-80 text-white flex items-center justify-between px-6 py-4 z-50 shadow-md border-b border-cyan-800">
        <a
        href="#hero"
        className="font-bold text-xl tracking-tight hover:text-cyan-400 transition-colors cursor-pointer">
        YVES THOUKAM THOTCHUM
      </a>

      {/* Desktop links */}
      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-cyan-400">À propos</a>
        <a href="#skills" className="hover:text-cyan-400">Compétences</a>
        <a href="#projects" className="hover:text-cyan-400">Projets</a>
        <a href="#experience" className="hover:text-cyan-400">Expérience</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
        <a href="#contact" className="ml-4 bg-cyan-500 text-black px-4 py-2 rounded-xl font-medium hover:bg-cyan-400 transition" onClick={e => { e.preventDefault(); onContactClick(); }}>
          Me contacter
        </a>
      </div>
      {/* Burger icon for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-7 h-1 bg-white rounded mt-1 mb-1 transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
        <span className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-95 flex flex-col items-center space-y-6 py-6 md:hidden transition-all z-50">
          <a href="#about" className="hover:text-cyan-400" onClick={() => setOpen(false)}>À propos</a>
          <a href="#skills" className="hover:text-cyan-400" onClick={() => setOpen(false)}>Compétences</a>
          <a href="#projects" className="hover:text-cyan-400" onClick={() => setOpen(false)}>Projets</a>
          <a href="#experience" className="hover:text-cyan-400" onClick={() => setOpen(false)}>Expérience</a>
          <a href="#contact" className="hover:text-cyan-400" onClick={() => setOpen(false)}>Contact</a>
          <a href="#contact" className="bg-cyan-500 text-black px-4 py-2 rounded-xl font-medium hover:bg-cyan-400 transition" onClick={e => { e.preventDefault(); onContactClick(); }}>
            Me contacter
          </a>
        </div>
      )}
    </nav>
  );
}