import { useEffect } from "react";
import { useLang } from "../i18n";

export default function ContactForm({ show, onClose }) {
  const { t } = useLang();
  const f = t.form;

  // Bloque le scroll du fond et permet de fermer avec Échap
  useEffect(() => {
    if (!show) return undefined;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [show, onClose]);

  if (!show) return null;

  const field = "rounded-sm border border-white/15 bg-ink-950 px-4 py-2.5 text-paper placeholder:text-muted focus:border-accent focus:outline-none";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="corners relative w-full max-w-md rounded-sm border border-white/10 bg-ink-900 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={f.close}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-2xl text-muted transition hover:bg-white/10 hover:text-paper"
        >
          &times;
        </button>
        <h3 id="contact-title" className="mb-6 font-display text-2xl font-bold">{f.title}</h3>
        <form action="https://formspree.io/f/xpwrbzdn" method="POST" className="flex flex-col gap-4">
          <input type="text" name="name" placeholder={f.name} aria-label={f.name} className={field} required />
          <input type="email" name="email" placeholder={f.email} aria-label={f.email} className={field} required />
          <input type="text" name="subject" placeholder={f.subject} aria-label={f.subject} className={field} required />
          <textarea name="message" rows={5} placeholder={f.message} aria-label={f.message} className={field} required />
          <button type="submit" className="btn-primary">
            {f.send}
          </button>
        </form>
      </div>
    </div>
  );
}
