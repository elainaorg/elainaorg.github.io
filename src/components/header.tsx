import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 切换语言函数
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      setIsDropdownOpen(false);
    });
  };

  const languages = [
    { code: "zh-CN", name: "简体中文" },
    { code: "en", name: "English" },
  ];

  return (
    <header className="bg-white py-4 dark:bg-zinc-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3 text-lg font-bold">
          <div
            className="dark:bg-accent flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500"
            aria-hidden="true"
          >
            <span className="text-xl font-bold text-white">E</span>
          </div>
          <span className="dark:text-accent text-purple-600 hidden sm:block">Elaina · {t("title")}</span>
          <span className="dark:text-accent text-purple-600 sm:hidden">Elaina</span>
        </div>

        {/* Language Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="dark:bg-accent dark:hover:bg-accent-hover flex items-center gap-2 rounded-lg bg-purple-600 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-700 sm:px-4 sm:py-2.5 sm:text-base"
          >
            <span>
              {languages.find((lang) => i18n.language?.startsWith(lang.code.split("-")[0]))
                ?.name || (i18n.language?.startsWith("zh") ? "中文" : "English")}
            </span>
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
              <div className="absolute right-0 z-50 mt-2 w-32 overflow-hidden rounded-xl border border-gray-200/50 bg-white/80 shadow-lg backdrop-blur-xl dark:border-zinc-600/50 dark:bg-zinc-700/80 sm:w-40">
                <ul className="py-2">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => changeLanguage(lang.code)}
                        className={`dark:hover:bg-accent/10 w-full px-4 py-2 text-left text-sm font-medium transition-all duration-300 hover:bg-purple-500/10 ${
                          i18n.language?.startsWith(lang.code.split("-")[0])
                            ? "dark:text-accent dark:bg-accent/10 bg-purple-500/10 text-purple-600"
                            : "text-gray-700 dark:text-gray-200"
                        }`}
                      >
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}