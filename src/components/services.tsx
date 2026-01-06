import { BookOpen, Code, Server, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import FadeIn from "@/components/fade-in";

const icons = {
  code: Code,
  server: Server,
  book: BookOpen,
  users: Users,
};

export default function Services() {
  const { t } = useTranslation();

  const services = t("services.items", { returnObjects: true }) as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-sm font-medium text-zinc-600 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400">
            {t("services.badge")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{t("services.subtitle")}</p>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <FadeIn key={index} delay={100 + index * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 dark:border-zinc-800/50 dark:bg-zinc-900/80 dark:hover:border-violet-800/50">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100 dark:from-violet-500/10 dark:to-purple-500/10" />

                  <div className="relative">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-all group-hover:bg-violet-100 group-hover:text-violet-600 group-hover:shadow-lg group-hover:shadow-violet-500/25 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-violet-500/20 dark:group-hover:text-violet-400">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
