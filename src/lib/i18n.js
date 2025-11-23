/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";

const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
      portfolio: "Portfolio",
    },
    hero: {
      welcome: "Welcome to my universe",
      learnMore: "Learn More",
      getResume: "Get Resume",
    },
    experience: {
      title: "Professional Journey",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      skills: "Compétences",
      experience: "Expérience",
      education: "Éducation",
      projects: "Projets",
      contact: "Contact",
      portfolio: "Portfolio",
    },
    hero: {
      welcome: "Bienvenue dans mon univers",
      learnMore: "En savoir plus",
      getResume: "Télécharger CV",
    },
    experience: {
      title: "Parcours professionnel",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Educación",
      projects: "Proyectos",
      contact: "Contacto",
      portfolio: "Portfolio",
    },
    hero: {
      welcome: "Bienvenido a mi universo",
      learnMore: "Más información",
      getResume: "Obtener CV",
    },
    experience: {
      title: "Trayectoria profesional",
    },
  },
};

const DEFAULT_LOCALE = "en";

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    try {
      const stored = localStorage.getItem("locale");
      return stored || DEFAULT_LOCALE;
    } catch {
      return DEFAULT_LOCALE;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("locale", locale);
    } catch {
      // ignore
    }
  }, [locale]);

  const t = (keyPath, fallback) => {
    if (!keyPath) return fallback || "";
    const parts = keyPath.split(".");
    let node = TRANSLATIONS[locale] || TRANSLATIONS[DEFAULT_LOCALE];
    for (const p of parts) {
      if (!node) break;
      node = node[p];
    }
    if (node === undefined || node === null) return fallback || keyPath;
    return node;
  };

  return React.createElement(
    I18nContext.Provider,
    { value: { locale, setLocale, t } },
    children
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
