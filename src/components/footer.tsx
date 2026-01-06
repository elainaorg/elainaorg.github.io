import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-zinc-200/50 bg-white/80 backdrop-blur-xl dark:border-zinc-800/50 dark:bg-zinc-950/80">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25 transition-shadow group-hover:shadow-violet-500/40">
                <span className="text-sm font-bold text-white">E</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                Elaina
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("footer.description")}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-white">
              {t("footer.links.community")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                >
                  {t("footer.links.about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                >
                  {t("footer.links.projects")}
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                >
                  {t("footer.links.discord")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                >
                  {t("footer.links.github")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-zinc-900 dark:text-white">
              {t("footer.links.resources")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                >
                  {t("footer.links.wiki")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                >
                  {t("footer.links.archive")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                >
                  {t("footer.links.translations")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-zinc-600 transition-colors hover:text-violet-600 dark:text-zinc-400 dark:hover:text-violet-400"
                >
                  {t("footer.links.fanart")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200/50 pt-8 dark:border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
