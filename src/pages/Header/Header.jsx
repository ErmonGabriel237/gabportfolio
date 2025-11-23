import { useState } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { scrollToId } from "@/lib/scroll";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useI18n();

  const navLinks = [
    { id: "home", icon: FaHome, text: t("nav.home", "Home"), path: "/" },
    {
      id: "skills",
      icon: FaCode,
      text: t("nav.skills", "Skills"),
      path: "/skills",
    },
    {
      id: "experience",
      icon: FaBriefcase,
      text: t("nav.experience", "Experience"),
      path: "/experience",
    },
    {
      id: "education",
      icon: FaGraduationCap,
      text: t("nav.education", "Education"),
      path: "/education",
    },
    {
      id: "projects",
      icon: FaLaptopCode,
      text: t("nav.projects", "Projects"),
      path: "/projects",
    },
    {
      id: "contact",
      icon: FaEnvelope,
      text: t("nav.contact", "Contact"),
      path: "/contact",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
        <div className="p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x">
          <nav className="bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5">
            {/* Mobile Menu Button */}
            <div className="flex justify-between items-center md:hidden px-2">
              <Link to="/" className="text-white font-bold">
                Ermon Gabriel
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                <FaBars />
              </button>
            </div>

            {/* Navigation Links */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0">
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    to={path}
                    onClick={(e) => {
                      // If a section with this id exists on the page, smooth-scroll to it
                      const el = document.getElementById(id);
                      if (el) {
                        e.preventDefault();
                        setActiveLink(id);
                        setIsMenuOpen(false);
                        scrollToId(id, {
                          offset: window.innerWidth < 768 ? 56 : 72,
                        });
                        return;
                      }
                      // otherwise allow navigation (router will handle it)
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                      transition-all duration-300 flex items-center gap-2
                      hover:bg-white/10 
                      ${
                        activeLink === id
                          ? "bg-white/15 text-white"
                          : "text-gray-300 hover:text-white"
                      }
                    `}
                  >
                    <Icon
                      className={`text-base ${
                        activeLink === id ? "scale-110" : ""
                      }`}
                    />
                    <span className="inline">{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </header>
  );
}
