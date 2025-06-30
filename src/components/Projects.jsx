export default function Projects() {
  const projects = [
    {
      title: "Automatisation d’assemblage avec bras robotique Doosan",
      location: "Le Creusot, France",
      date: "Janv. 2024 – En cours",
      description:
        "Projet de commande de bras robotique en partenariat avec Horizon Télécom pour l’automatisation de tâches répétitives et optimisées pour l'industrie.",
      objectifs: "Développement d’un système de commande pour vissage et câblage.",
      technos: ["ROS", "OpenCV", "Doosan", "Python"],
      image: "/images/projects/doosan.png", // adapte le chemin selon ton projet
      github: "https://github.com/tonprofil/nom-du-repo",
    },
    {
      title: "Système de Supervision Industrielle avec Raspberry Pi 4",
      location: "Le Creusot, France",
      date: "Nov. 2024 – Mars 2025",
      description:
        "Développement d’un système de collecte, stockage et visualisation des données en temps réel (température, pression...) via un Raspberry Pi 4 sous Linux.",
      objectifs: "Détection d’anomalies, alertes, sécurisation des communications.",
      technos: ["Raspberry Pi 4", "Linux", "Python", "Sqlite3", "Django", "MQTT", "WebSocket"],
      image: "/images/projects/supervision-industrielle.jpg",
      github: "https://github.com/tonprofil/nom-du-repo2",
    },
    {
      title: "Système de vision stéréo – Reconstruction 3D",
      location: "Le Creusot, France",
      date: "Fév. 2025 – Avril 2025",
      description:
        "Application multiplateforme pour la capture et traitement d’images stéréo à partir de deux caméras USB, calibration, rectification et export du nuage de points 3D.",
      objectifs: "Logiciel avec interface graphique, packaging multi-OS.",
      technos: ["Python", "PyQt6", "OpenCV", "Open3D", "Git", "PyInstaller"],
      image: "/images/projects/Stereo-Vision.png",
      github: "https://github.com/tonprofil/nom-du-repo3",
    },
    {
      title: "Reconstruction 3D d'un Objet à partir d'une Image",
      location: "Le Creusot, France",
      date: "Oct. 2024 – Déc. 2024",
      description:
        "Génération d’un modèle 3D à partir d'une image 2D sans IA, création de maillage, export STL pour impression 3D.",
      technos: ["Python", "PyVista", "SciPy", "Trimesh"],
      image: "/images/projects/maillage3D.png",
      github: "https://github.com/tonprofil/nom-du-repo4",
    },
    {
      title: "Tri automatisé des déchets avec robot NED2 et reconnaissance vocale",
      location: "Le Creusot, France",
      date: "Janv. 2024 – Mars 2024",
      description:
        "Développement d’un système de tri basé sur la reconnaissance vocale et la vision par ordinateur. Détection forme/couleur avec OpenCV, pilotage via NED2.",
      technos: ["Python", "OpenCV", "NED2", "Reconnaissance vocale"],
      image: "/images/projects/Niryo-Ned2.jpeg",
      github: "https://github.com/tonprofil/nom-du-repo5",
    },
    // Ajoute d'autres projets si besoin
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10">Projets Académiques</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl w-full">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-black/80 rounded-2xl p-6 shadow-lg border border-gray-800 flex flex-col gap-4">
            {/* Image du projet */}
            <div className="aspect-video overflow-hidden rounded-lg mb-2 bg-gray-800 flex items-center justify-center">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover object-center"
                style={{ minHeight: "180px", maxHeight: "240px" }}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <span className="text-cyan-400 text-sm mb-1">
                {proj.location} — <span className="italic">{proj.date}</span>
              </span>
              <p className="text-gray-300">{proj.description}</p>
              {proj.objectifs && (
                <p className="text-gray-400 text-sm mt-1">
                  <strong>Objectifs : </strong>
                  {proj.objectifs}
                </p>
              )}
            </div>
            {/* Badges Techno */}
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.technos.map((tech, tid) => (
                <span key={tid} className="bg-cyan-800/70 rounded px-3 py-1 font-medium text-base m-1">
                  {tech}
                </span>
              ))}
            </div>
            {/* Lien GitHub */}
            {proj.github && (
              <a
                href={proj.github}
                className="text-cyan-400 hover:underline w-fit mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}