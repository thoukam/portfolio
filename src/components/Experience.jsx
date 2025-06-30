import backgroundImg from '../assets/bg-map-glow.gif.gif';
import captureImg from '../assets/gnss_capture.jpg';
import resultImg from '../assets/3d_result.jpg';
import atgtLogo from '../assets/atgt.png';
import dimorphLogo from '../assets/logo-dimorph.png';

export default function Experience() {
  return (
    <section id="experience" className="relative w-full text-white py-20 px-6 overflow-hidden">
      {/* Background animé */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <img src={backgroundImg} alt="background" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center backdrop-blur-sm bg-black/70 p-6 rounded-xl shadow-lg border border-cyan-900">

        {/* Partie gauche : texte + logos */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img src={atgtLogo} alt="ATGT Logo" className="h-12 w-auto object-contain" />
            <img src={dimorphLogo} alt="Dimorph Logo" className="h-12 w-auto object-contain" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-cyan-400">Stage – Développeur IoT Géospatial</h2>
          <p className="text-gray-300 mb-2 italic">ATGT Géomètre-Expert, Lyon — Mars à Août 2025</p>

          <p className="text-gray-200 text-sm mb-4">
            Dans le cadre de mon stage, j’ai rejoint l’équipe d’<strong>ATGT Géomètre-Expert</strong> pour contribuer à l’amélioration du <strong>système DIMORPH</strong>, une solution mobile de relevé photogrammétrique innovante.
          </p>

          <p className="text-gray-200 text-sm mb-4">
            Le <strong>DIMORPH</strong> est un dispositif compact combinant capteurs GNSS et caméra 360°, permettant à un opérateur seul de réaliser des relevés géoréférencés précis sur plusieurs hectomètres. Il permet la production de livrables tels que des nuages de points, ortho-photos ou maillages 3D, exploitables pour la cartographie ou la modélisation.
          </p>

          <p className="text-gray-200 text-sm">
            <strong>Ma mission :</strong> participer activement à l'évolution de la plateforme en travaillant sur des aspects de développement, d’intégration de capteurs, d’interfaces et de tests terrain. Ce projet m’a permis de mettre en œuvre mes compétences techniques en environnement réel tout en contribuant à une solution concrète de haute précision utilisée dans le domaine de la géomatique.
          </p>
        </div>

        {/* Partie droite : visuels */}
        <div className="flex flex-col gap-4">
          <img src={captureImg} alt="Système GNSS/360°" className="rounded-xl shadow-md object-cover h-52 w-full" />
          <img src={resultImg} alt="Résultat carto 3D" className="rounded-xl shadow-md object-cover h-52 w-full" />
        </div>
      </div>
    </section>
  );
}
