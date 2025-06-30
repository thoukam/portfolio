export default function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10">Expérience professionnelle</h2>
      <div className="max-w-3xl w-full space-y-8">
        {/* Expérience 1 */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800">
          <h3 className="text-xl font-semibold mb-2">Stage – Développeur systèmes embarqués</h3>
          <p className="text-cyan-400 mb-1">XYZ Robotics — Paris | 2024 (6 mois)</p>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Développement de firmware pour STM32 en C</li>
            <li>Mise en place de protocoles UART, CAN, I2C</li>
            <li>Intégration capteurs/actionneurs sur robot mobile</li>
          </ul>
        </div>
        {/* Expérience 2 */}
        <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800">
          <h3 className="text-xl font-semibold mb-2">Projet freelance – Développeur IoT</h3>
          <p className="text-cyan-400 mb-1">SmartAgriTech — Remote | 2023</p>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Conception d’un système connecté pour le monitoring agricole</li>
            <li>Développement de dashboards et communication LoRa/MQTT</li>
          </ul>
        </div>
        {/* Ajoute d’autres expériences ici */}
      </div>
    </section>
  );
}