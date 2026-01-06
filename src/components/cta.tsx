import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FadeIn from "@/components/fade-in";

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-6 py-16 sm:px-12 sm:py-20 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
              <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <div className="relative text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-white/60">
                {t("cta.badge")}
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl dark:text-white">
                {t("cta.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/70 dark:text-white/50">
                {t("cta.subtitle")}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-zinc-900 shadow-lg transition-all hover:shadow-xl dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  {t("cta.primary")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 dark:border-white/20 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10"
                >
                  {t("cta.secondary")}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
