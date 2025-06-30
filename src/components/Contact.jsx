export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-gray-300 mb-6 text-center">
        Tu veux discuter d’un projet, proposer une opportunité ou juste échanger ?  
        <br />N’hésite pas à me contacter ou à consulter mes profils en ligne.
      </p>
      <div className="flex flex-col items-center gap-4">
        <a
          href="mailto:mon.email@example.com"
          className="px-6 py-3 bg-cyan-500 text-black rounded-xl font-semibold hover:bg-cyan-400 transition"
        >
          M’envoyer un email
        </a>
        <div className="flex gap-6 mt-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 text-2xl"
            aria-label="LinkedIn"
          >🔗</a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 text-2xl"
            aria-label="GitHub"
          >💻</a>
        </div>
      </div>
    </section>
  );
}