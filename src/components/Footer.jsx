export default function Footer({ onContactClick }) {
  return (
    <footer id="contact" className="bg-black bg-opacity-90 text-white pt-12 pb-4 px-4 mt-12 border-t border-cyan-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Coordonnées */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p className="mb-1">Yves Thoukam Thotchum</p>
          <p className="mb-1">📞 07 80 85 43 92</p>
          <p className="mb-1">✉️ thoukamy@gmail.com</p>
          <p className="mb-1">📍 7 allée des Accacias Vénisssieux, France</p>
          <button
            className="mt-3 px-4 py-2 rounded-xl bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
            onClick={onContactClick}
          >
            Me contacter
          </button>
        </div>
        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg mb-2">Réseaux</h3>
          <div className="flex gap-4 text-3xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400">🔗</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-400">💻</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-cyan-400">🐦</a>
          </div>
        </div>
        {/* Carte Google Maps */}
        <div>
          <h3 className="font-bold text-lg mb-2">Adresse</h3>
          <div className="w-full h-40 rounded-xl overflow-hidden border border-cyan-700 shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=7%20allée%20des%20Acacias%20Vénissieux%20France&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="map"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Yves Thoukam Thotchum. Tous droits réservés.
      </div>
    </footer>
  );
}