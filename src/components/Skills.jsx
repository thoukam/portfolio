export default function Skills() {
  return (
    <section id="skills" className="bg-black/80 text-white py-20 px-4 flex flex-col items-center backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-10">Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

        {/* Programmation & Simulation */}
        <div className="bg-gray-900/70 rounded-2xl p-6 shadow flex flex-col gap-2">
          <span className="text-xl font-semibold text-cyan-400 mb-2">Programmation & Simulation</span>
          <div className="flex flex-wrap gap-2">
            <span className="badge">C++</span>
            <span className="badge">Python</span>
            <span className="badge">Matlab</span>
            <span className="badge">Javascript</span>
            <span className="badge">Java/Kotlin</span>
            <span className="badge">ROS2</span>
            <span className="badge">Git</span>
            <span className="badge">SolidWorks</span>
            <span className="badge">Docker</span>
            <span className="badge">Linux</span>
            <span className="badge">Windows</span>
            <span className="badge">SQLite</span>
          </div>
        </div>

        {/* Robotique & Systèmes embarqués */}
        <div className="bg-gray-900/70 rounded-2xl p-6 shadow flex flex-col gap-2">
          <span className="text-xl font-semibold text-cyan-400 mb-2">Robotique & Systèmes embarqués</span>
          <div className="flex flex-wrap gap-2">
            <span className="badge">Doosan (collaboratif)</span>
            <span className="badge">Staubli</span>
            <span className="badge">Niryo NED2</span>
            <span className="badge">Arduino</span>
            <span className="badge">Raspberry Pi 4</span>
            <span className="badge">ESP32</span>
            <span className="badge">Jetson Nano</span>
            <span className="badge">Capteurs GNSS/Vision</span>
            <span className="badge">SLAM / AMCL / Nav2</span>
            <span className="badge">Synchronisation multi-capteurs</span>
          </div>
        </div>

        {/* Traitement de données & Vision */}
        <div className="bg-gray-900/70 rounded-2xl p-6 shadow flex flex-col gap-2">
          <span className="text-xl font-semibold text-cyan-400 mb-2">Traitement de données & Vision</span>
          <div className="flex flex-wrap gap-2">
            <span className="badge">pandas</span>
            <span className="badge">geopandas</span>
            <span className="badge">Numpy</span>
            <span className="badge">OpenCV</span>
            <span className="badge">PyQt6</span>
            <span className="badge">Matplotlib</span>
            <span className="badge">Scikit-learn</span>
            <span className="badge">ExifTool</span>
            <span className="badge">TensorFlow</span>
            <span className="badge">PyTorch</span>
          </div>
        </div>

        {/* Systèmes embarqués & IoT */}
        <div className="bg-gray-900/70 rounded-2xl p-6 shadow flex flex-col gap-2">
          <span className="text-xl font-semibold text-cyan-400 mb-2">Systèmes embarqués & IoT</span>
          <div className="flex flex-wrap gap-2">
            <span className="badge">Android Studio</span>
            <span className="badge">GNSS RTK/NTRIP</span>
            <span className="badge">Bluetooth</span>
            <span className="badge">Wi-Fi</span>
            <span className="badge">REST API</span>
            <span className="badge">Mock Location</span>
            <span className="badge">OSC</span>
            <span className="badge">Node-RED</span>
            <span className="badge">SCADA</span>
            <span className="badge">Cybersécurité IoT</span>
          </div>
        </div>

        {/* Photogrammétrie & 3D */}
        <div className="bg-gray-900/70 rounded-2xl p-6 shadow flex flex-col gap-2">
          <span className="text-xl font-semibold text-cyan-400 mb-2">Photogrammétrie & 3D</span>
          <div className="flex flex-wrap gap-2">
            <span className="badge">Metashape</span>
            <span className="badge">SfM</span>
            <span className="badge">Reconstruction 3D</span>
            <span className="badge">Nuage de points</span>
            <span className="badge">CloudCompare</span>
            <span className="badge">Pix4D</span>
          </div>
        </div>

        {/* Protocoles de communication */}
        <div className="bg-gray-900/70 rounded-2xl p-6 shadow flex flex-col gap-2">
          <span className="text-xl font-semibold text-cyan-400 mb-2">Protocoles & Communication</span>
          <div className="flex flex-wrap gap-2">
            <span className="badge">MQTT</span>
            <span className="badge">Modbus</span>
            <span className="badge">OPC UA</span>
            <span className="badge">WebSockets</span>
            <span className="badge">TCP/IP</span>
            <span className="badge">UART</span>
            <span className="badge">I2C</span>
            <span className="badge">SPI</span>
          </div>
        </div>

        {/* Déploiement & DevOps */}
        <div className="bg-gray-900/70 rounded-2xl p-6 shadow flex flex-col gap-2">
          <span className="text-xl font-semibold text-cyan-400 mb-2">Déploiement & DevOps</span>
          <div className="flex flex-wrap gap-2">
            <span className="badge">Docker</span>
            <span className="badge">Git</span>
            <span className="badge">CI/CD (GitHub Actions, GitLab CI)</span>
            <span className="badge">Virtualisation</span>
            <span className="badge">Linux (Bash, administration)</span>
          </div>
        </div>

        {/* Documentation & Gestion de projet */}
        <div className="bg-gray-900/70 rounded-2xl p-6 shadow flex flex-col gap-2">
          <span className="text-xl font-semibold text-cyan-400 mb-2">Documentation & Gestion de projet</span>
          <div className="flex flex-wrap gap-2">
            <span className="badge">Markdown</span>
            <span className="badge">Notion</span>
            <span className="badge">Trello</span>
            <span className="badge">Miro</span>
            <span className="badge">Méthodes Agile/Scrum</span>
            <span className="badge">Rédaction technique</span>
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mt-12 w-full flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-3 text-cyan-400">Soft Skills</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="bg-cyan-700/40 rounded px-3 py-1 font-medium">Gestion de projet</span>
          <span className="bg-cyan-700/40 rounded px-3 py-1 font-medium">Esprit d’équipe</span>
          <span className="bg-cyan-700/40 rounded px-3 py-1 font-medium">Autonomie</span>
          <span className="bg-cyan-700/40 rounded px-3 py-1 font-medium">Sens de l’initiative</span>
          <span className="bg-cyan-700/40 rounded px-3 py-1 font-medium">Esprit analytique</span>
          <span className="bg-cyan-700/40 rounded px-3 py-1 font-medium">Curiosité</span>
          <span className="bg-cyan-700/40 rounded px-3 py-1 font-medium">Réactivité</span>
          <span className="bg-cyan-700/40 rounded px-3 py-1 font-medium">Capacité d’adaptation</span>
          <span className="bg-cyan-700/40 rounded px-3 py-1 font-medium">Communication</span>
          <span className="bg-cyan-700/40 rounded px-3 py-1 font-medium">Veille technologique</span>
        </div>
      </div>
      <style>{`
        .badge {
          @apply bg-cyan-800/30 rounded px-2 py-1 text-sm;
        }
      `}</style>
    </section>
  );
}