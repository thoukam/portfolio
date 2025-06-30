import React, { useEffect } from "react";

export default function ContactForm({ show, onClose }) {
  // Empêche le scroll du fond quand la modale est ouverte
  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [show]);

  // Fermer la modale et remonter la page
  const handleClose = () => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Si pas affiché, ne rend rien
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={handleClose}
    >
      <div
        className="bg-gray-900 rounded-xl p-8 max-w-md w-full relative shadow-2xl border border-cyan-600"
        onClick={e => e.stopPropagation()} // Ne ferme pas si on clique dans la modale
      >
        <button
          className="absolute top-2 right-2 text-3xl text-cyan-400 bg-black bg-opacity-80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition z-10 shadow-lg border border-cyan-400"
          onClick={handleClose}
          aria-label="Fermer"
          type="button"
          tabIndex={0}
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-4 text-center">Me contacter</h3>
        <form
          action="https://formspree.io/f/xpwrbzdn"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="px-4 py-2 rounded bg-black text-white border border-gray-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="px-4 py-2 rounded bg-black text-white border border-gray-700"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Objet du message"
            className="px-4 py-2 rounded bg-black text-white border border-gray-700"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Votre message"
            className="px-4 py-2 rounded bg-black text-white border border-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-cyan-500 text-black rounded-xl px-4 py-2 font-medium hover:bg-cyan-400 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}