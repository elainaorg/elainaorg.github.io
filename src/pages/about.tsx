import Team from "@/components/team";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section className="pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
            {t("about.badge")}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            {t("about.title")}
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">
              {t("about.story.title")}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t("about.story.description")}
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">
              {t("about.mission.title")}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t("about.mission.description")}
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">
              {t("about.vision.title")}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {t("about.vision.description")}
            </p>
          </div>
        </div>
      </div>

      <Team />
    </section>
  );
}
