import portrait from "../assets/portrait-thoukam.jpg"; // Adapte le nom au tien !

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-900/30 via-gray-800 to-cyan-950 bg-opacity-30 text-white py-24 px-4 flex flex-col items-center"
    >
      <img
        src={portrait}
        alt="Portrait Yves Thoukam Thotchum"
        className="w-36 h-36 rounded-full mb-6 shadow-lg border-4 border-cyan-500 object-cover"
      />
      <h2 className="text-3xl font-extrabold mb-3 tracking-tight">
        À propos de moi
      </h2>
      <div className="mb-5 text-lg font-medium text-cyan-400">
        🚀 Explorer, connecter, innover&nbsp;: telle est ma mission.
      </div>
      <p className="text-lg text-gray-200 max-w-2xl text-center leading-relaxed">
        Étudiant en 3<sup>e</sup> année Ingénieur à <span className="text-cyan-300 font-semibold">Polytech Dijon</span>, je me passionne pour&nbsp;
        <span className="text-cyan-400 font-semibold">
          {" "}
          la robotique intelligente, l’IoT, les systèmes embarqués
        </span>
        , la navigation GNSS, et tout ce qui fait vibrer l’industrie 4.0.
        <br /><br />
        Ce que j’aime par-dessus tout&nbsp;? Concevoir des solutions de bout en bout, du code aux capteurs, piloter et superviser des équipements à distance, automatiser, diagnostiquer, rendre la technologie accessible et intelligente.
        <br /><br />
        Polyvalent, curieux et passionné, j’aime explorer les frontières entre software, hardware et supervision. J’apprends vite, je m’adapte, je prends plaisir à relever des défis dans des environnements en perpétuelle évolution.
        <br /><br />
        <span className="text-cyan-300 font-semibold">
          En quête d’un contrat de professionnalisation pour ma dernière année,
        </span>{" "}
        je suis prêt à mettre mon énergie et ma créativité au service de projets technologiques ambitieux&nbsp;!
      </p>
    </section>
  );
}