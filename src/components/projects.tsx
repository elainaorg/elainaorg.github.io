import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeIn from "@/components/fade-in";

export default function Projects() {
  const { t } = useTranslation();

  const projects = t("projects.items", { returnObjects: true }) as Array<{
    name: string;
    description: string;
    stars: string;
    language: string;
  }>;

  const languageColors: Record<string, string> = {
    TypeScript: "bg-blue-500",
    Python: "bg-yellow-500",
    Go: "bg-cyan-500",
    Rust: "bg-orange-500",
  };

  return (
    <section id="projects" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-50/50 to-transparent dark:from-transparent dark:via-zinc-900/50 dark:to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-sm font-medium text-zinc-600 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400">
              {t("projects.badge")}
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              {t("projects.title")}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              {t("projects.subtitle")}
            </p>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
          >
            {t("projects.viewAll")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </FadeIn>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={100 + index * 100}>
              <div className="group relative overflow-hidden rounded-2xl border border-zinc-200/50 bg-white/80 backdrop-blur-sm transition-all hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 dark:border-zinc-800/50 dark:bg-zinc-900/80 dark:hover:border-violet-800/50">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100 dark:from-violet-500/10 dark:to-purple-500/10" />

                <div className="relative p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
                      {project.name}
                    </h3>
                    <ExternalLink className="h-5 w-5 text-zinc-400 transition-colors group-hover:text-violet-500 dark:group-hover:text-violet-400" />
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {project.stars}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${languageColors[project.language] || "bg-zinc-500"}`}
                      />
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">
                        {project.language}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
