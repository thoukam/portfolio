import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer({ onContactClick }) {
  return (
    <footer id="contact" className="bg-black bg-opacity-90 text-white pt-12 pb-4 px-4 mt-12 border-t border-cyan-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        {/* Coordonnées */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact</h3>
          <p className="mb-1 flex items-center gap-2">
            <FaPhone className="text-cyan-400" />
            <a href="tel:+33780854392" className="hover:underline">07 80 85 43 92</a>
          </p>
          <p className="mb-1 flex items-center gap-2">
            <FaEnvelope className="text-cyan-400" />
            <a href="mailto:thoukamy@gmail.com" className="hover:underline">thoukamy@gmail.com</a>
          </p>
          <p className="mb-1 flex items-center gap-2">
            <FaMapMarkerAlt className="text-cyan-400" />
            <a
              href="https://maps.google.com/?q=7+allée+des+Accacias+Vénissieux+France"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              7 allée des Accacias, Vénissieux, France
            </a>
          </p>
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
          <div className="flex gap-5 text-3xl">
            <a href="http://www.linkedin.com/in/yves-thoukam-thotchum-a57635207" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/thoukam" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-400">
              <FaGithub />
            </a>
            <a href="https://grabcad.com/yves.thoukam.thotchum-1/models" target="_blank" rel="noopener noreferrer" aria-label="GrabCAD">
              <img src="/assets/grabcad-logo.png" alt="GrabCAD" className="w-7 h-7 object-contain hover:opacity-80" />
            </a>
            <a href="https://www.codeur.com/-uranium237" target="_blank" rel="noopener noreferrer" aria-label="Codeur.com">
              <img src="/assets/codeur-logo.jpg" alt="Codeur" className="w-7 h-7 object-contain hover:opacity-80" />
            </a>
          </div>
        </div>

        {/* Carte Google Maps */}
        <div>
          <h3 className="font-bold text-lg mb-2">Adresse</h3>
          <div className="w-full h-40 rounded-xl overflow-hidden border border-cyan-700 shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=7%20allée%20des%20Accacias%20Vénissieux%20France&t=&z=16&ie=UTF8&iwloc=&output=embed"
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