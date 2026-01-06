import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold tracking-tight text-zinc-900 sm:text-9xl dark:text-white">
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
            {t("notFound.title")}
          </span>
        </h1>
        <h2 className="mt-4 text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
          {t("notFound.subtitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t("notFound.description")}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30 dark:from-violet-500 dark:to-purple-500"
          >
            {t("notFound.home")}
          </Link>
          <button
            onClick={() => history.back()}
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
          >
            {t("notFound.back")}
          </button>
        </div>
      </div>
    </section>
  );
}
