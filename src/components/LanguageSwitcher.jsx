import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const options = [
    { code: "en", label: "English" },
    { code: "fr", label: "Français" },
    { code: "es", label: "Español" },
  ];

  return (
    <div className="hidden md:block fixed right-6 bottom-6 z-50">
      <div className="relative">
        <button
          aria-label="Choose language"
          onClick={() => setOpen((s) => !s)}
          className="w-12 h-12 rounded-full bg-gray-900/90 border border-gray-700 flex items-center justify-center text-white shadow-lg"
        >
          <FaGlobe />
        </button>

        {open && (
          <div className="absolute right-0 bottom-14 text-white bg-gray-900/95 border border-gray-700 rounded-lg py-2 shadow-xl w-40">
            {options.map((opt) => (
              <button
                key={opt.code}
                onClick={() => {
                  setLocale(opt.code);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2 hover:bg-white/5 ${
                  locale === opt.code ? "font-semibold" : ""
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
