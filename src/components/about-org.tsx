import { useTranslation } from "react-i18next";
import FadeIn from "@/components/fade-in";

export default function AboutOrg() {
  const { t } = useTranslation();

  const values = t("aboutOrg.values.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section id="about" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-50/50 to-transparent dark:from-transparent dark:via-violet-950/20 dark:to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn direction="left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-sm font-medium text-zinc-600 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400">
              {t("aboutOrg.badge")}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              {t("aboutOrg.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {t("aboutOrg.description")}
            </p>

            <div className="mt-10 rounded-2xl border border-zinc-200/50 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-zinc-800/50 dark:bg-zinc-900/80">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25">
                  <span className="text-lg">✦</span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {t("aboutOrg.mission.title")}
                </h3>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">
                {t("aboutOrg.mission.description")}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={200}>
            <h3 className="mb-8 text-2xl font-bold text-zinc-900 dark:text-white">
              {t("aboutOrg.values.title")}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <FadeIn key={index} delay={300 + index * 100}>
                  <div className="group rounded-2xl border border-zinc-200/50 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/5 dark:border-zinc-800/50 dark:bg-zinc-900/80 dark:hover:border-violet-800/50">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 text-violet-600 transition-colors group-hover:from-violet-500 group-hover:to-purple-600 group-hover:text-white dark:from-violet-500/20 dark:to-purple-500/20 dark:text-violet-400 dark:group-hover:from-violet-500 dark:group-hover:to-purple-600 dark:group-hover:text-white">
                      <span className="text-lg font-bold">{index + 1}</span>
                    </div>
                    <h4 className="mb-2 font-semibold text-zinc-900 dark:text-white">
                      {value.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
