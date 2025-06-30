import teaserImg from "../assets/distinction-teaser.jpg"; // Mets ici le vrai nom de ton image !

export default function DistinctionTeaser() {
  return (
    <div className="
      max-w-xl mx-auto mt-12 rounded-2xl p-6 text-center shadow-xl border border-cyan-800
      bg-gradient-to-br from-gray-900 via-gray-800 to-cyan-950
      text-white
    ">
      <span className="text-4xl block mb-2">🥈</span>
      <h3 className="text-xl md:text-2xl font-bold my-2">
        Médaille d’argent – WorldSkills 2025
      </h3>
      <div className="text-cyan-400 mb-2 font-medium text-base">
        (Région Bourgogne-Franche-Comté) <br />
        Catégorie Industrie 4.0
      </div>
      {/* Ajout de la photo du teaser */}
      <div className="flex justify-center mb-3">
        <img
          src={teaserImg}
          alt="WorldSkills 2025 - Médaille d'argent"
          className="w-30 h-30 object-cover rounded-xl border-2 border-cyan-600 shadow-md"
        />
      </div>
      <p className="text-gray-200">
        Fier d’avoir décroché la 2<sup>ème</sup> place aux Olympiades régionales WorldSkills 2025, catégorie Industrie 4.0.
      </p>
      <a
        href="#distinction"
        className="inline-block mt-4 px-4 py-2 rounded-xl bg-cyan-600 text-black font-medium hover:bg-cyan-400 transition"
      >
        En savoir plus
      </a>
    </div>
  );
}