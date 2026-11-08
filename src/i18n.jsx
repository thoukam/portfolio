import { createContext, useContext, useEffect, useState } from "react";
import { content } from "./content";

const LangContext = createContext(null);
const STORAGE_KEY = "portfolio-lang";

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") return saved;
  } catch {
    // stockage indisponible : français par défaut
  }
  return "fr"; // français par défaut
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
