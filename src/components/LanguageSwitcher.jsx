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
    <div className="fixed right-0 md:right-6 bottom-0 md:bottom-6 z-50 w-full md:w-auto flex justify-end md:justify-start pointer-events-none">
      <div className="relative pointer-events-auto mr-6 md:mr-0">
        <button
          aria-label="Choose language"
          onClick={() => setOpen((s) => !s)}
          className="w-12 h-12 rounded-full bg-gray-900/90 border border-gray-700 flex items-center justify-center text-white shadow-lg"
        >
          <FaGlobe />
        </button>

        {open && (
          <>
            {/* Desktop popover */}
            <div className="hidden md:block absolute right-0 bottom-14 text-white bg-gray-900/95 border border-gray-700 rounded-lg py-2 shadow-xl w-40">
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

            {/* Mobile bottom sheet */}
            <div className="md:hidden fixed left-0 right-0 bottom-0 bg-gray-900/95 border-t border-gray-700 py-4 shadow-xl">
              <div className="max-w-3xl mx-auto px-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-semibold">
                    Select language
                  </div>
                  <button onClick={() => setOpen(false)} className="text-white">
                    Close
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {options.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => {
                        setLocale(opt.code);
                        setOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 text-white ${
                        locale === opt.code ? "font-semibold bg-white/5" : ""
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
