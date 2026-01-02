import { useEffect } from "react";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { scrollToHashOnLoad } from "@/lib/scroll";

import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import { I18nProvider } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const isOnePage = true; // Toggle state (single-page mode)
  inject();

  useEffect(() => {
    scrollToHashOnLoad(72);
  }, []);

  return (
    <I18nProvider>
      <SpeedInsights />
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <Routes>
          `
          <Route path="/" element={<Hero />} />
          <Route path="*" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      )}
      <LanguageSwitcher />
    </I18nProvider>
  );
}
