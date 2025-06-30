export default function Hero({ onContactClick }) {
    return (
      <section id="hero" className="flex flex-col justify-center items-center text-center min-h-screen text-white pt-32">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Ingénieur en robotique & systèmes embarqués
        </h1>
        <p className="mb-6 text-lg md:text-2xl text-gray-300 max-w-2xl">
          Je conçois des systèmes intelligents qui connectent le monde réel au digital.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-3 border border-cyan-500 rounded-xl hover:bg-cyan-500 hover:text-black transition">
            Voir mes projets
          </a>
          <a href="#contact" className="px-6 py-3 border border-cyan-500 rounded-xl hover:bg-cyan-500 hover:text-black transition" onClick={e => { e.preventDefault(); onContactClick(); }}>
            Me contacter
          </a>
        </div>
      </section>
    );
  }  