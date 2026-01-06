import { ChevronDown, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";

const languages = [
  { code: "en", label: "English", flag: "EN" },
  { code: "zh-CN", label: "中文", flag: "中" },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  const links = [
    { key: "home", to: "/" },
    { key: "about", to: "/about" },
    { key: "projects", to: "/projects" },
  ];

  const isActive = (to: string) => location.pathname === to;

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const switchLang = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200/50 bg-white/70 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25 transition-shadow group-hover:shadow-violet-500/40">
            <span className="text-sm font-bold text-white">E</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
            Elaina
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.key}
              to={link.to}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                isActive(link.to)
                  ? "text-violet-600 dark:text-violet-400"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {t(`nav.${link.key}`)}
              {isActive(link.to) && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-violet-500" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>

          {/* Language switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-sm font-medium text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{currentLang.flag}</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>
            {langOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                <div className="absolute top-full right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => switchLang(lang.code)}
                      className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        i18n.language === lang.code
                          ? "bg-violet-50 font-medium text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"
                          : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
                      }`}
                    >
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${
                          i18n.language === lang.code
                            ? "bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-400"
                            : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                        }`}
                      >
                        {lang.flag}
                      </span>
                      {lang.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link
            to="/"
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-zinc-800 hover:shadow-md dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {t("nav.contact")}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile theme toggle */}
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>

          <button
            type="button"
            className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-zinc-200 bg-white/95 px-4 py-4 backdrop-blur-xl md:hidden dark:border-zinc-800 dark:bg-zinc-950/95">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.key}
                to={link.to}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"
                    : "text-zinc-600 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {t(`nav.${link.key}`)}
              </Link>
            ))}

            {/* Mobile language switcher */}
            <div className="mt-2 flex gap-2 rounded-lg border border-zinc-200 p-1 dark:border-zinc-800">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    switchLang(lang.code);
                    setMobileOpen(false);
                  }}
                  className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all ${
                    i18n.language === lang.code
                      ? "bg-violet-100 text-violet-600 shadow-sm dark:bg-violet-500/20 dark:text-violet-400"
                      : "text-zinc-500 hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <Link
              to="/"
              className="mt-3 rounded-full bg-zinc-900 px-4 py-2.5 text-center text-sm font-medium text-white dark:bg-white dark:text-zinc-900"
              onClick={() => setMobileOpen(false)}
            >
              {t("nav.contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
