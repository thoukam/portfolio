// 1. Importe tes photos
import photo1 from "../assets/worldskills1.jpg";
import photo2 from "../assets/worldskills2.jpg";
import photo3 from "../assets/worldskills3.jpg";
import photo4 from "../assets/worldskills4.jpg";

export default function Distinction() {
  return (
    <section
      id="distinction"
      className="bg-black bg-opacity-70 text-white py-20 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold mb-6">Distinctions</h2>
      <div className="max-w-2xl w-full bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800">
        <h3 className="text-2xl font-semibold mb-2">
          🥈 Médaille d’argent – Olympiades régionales WorldSkills BFC (Industrie 4.0)
        </h3>
        <p className="mb-4 text-gray-300">
          En mai 2025, j’ai participé, en binôme avec Enzo Chadeville, à la compétition régionale des métiers « WorldSkills Bourgogne-Franche-Comté » (catégorie Industrie 4.0), représentant Polytech Dijon et le pôle de formation UIMM Bourgogne 21-71.<br /><br />
          Nous avons travaillé sur un système industriel simulé, dans des conditions aussi proches que possible du réel : <br />
          <ul className="list-disc ml-8">
            <li>Simulation poussée (aléas, probabilités, scénarios de production variés)</li>
            <li>Développement d’un dashboard de supervision intuitif sous Node-RED</li>
            <li>Gestion du workflow et des traitements en JavaScript</li>
            <li>Utilisation d’un broker MQTT sécurisé pour la communication entre machines et dashboards</li>
            <li>Mise en place d’alertes intelligentes et de notifications par e-mail pour le diagnostic et le suivi journalier</li>
          </ul>
          <br />
          Cette expérience m’a permis d’approfondir la gestion de projets industriels, le travail en équipe et l’innovation autour des systèmes cyber-physiques.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <img src={photo1} alt="WorldSkills BFC 2025 - Vue 1" className="rounded-xl shadow-md h-32 w-32 object-cover" />
          <img src={photo2} alt="WorldSkills BFC 2025 - Vue 2" className="rounded-xl shadow-md h-32 w-32 object-cover" />
          <img src={photo3} alt="WorldSkills BFC 2025 - Vue 3" className="rounded-xl shadow-md h-32 w-32 object-cover" />
          <img src={photo4} alt="WorldSkills BFC 2025 - Vue 4" className="rounded-xl shadow-md h-32 w-32 object-cover" />
        </div>
        <div className="text-right mt-6 text-sm italic text-cyan-400">
          En binôme avec Enzo Chadeville <br/>
          Représentants : Polytech Dijon & UIMM Bourgogne 21-71
        </div>
      </div>
    </section>
  );
}