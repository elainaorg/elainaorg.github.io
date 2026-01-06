import { ArrowRight, BookOpen, Globe, Palette, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { animate, stagger } from "animejs";

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Users, value: "10K+", label: t("hero.stats.fans") },
    { icon: BookOpen, value: "500+", label: t("hero.stats.translations") },
    { icon: Palette, value: "2K+", label: t("hero.stats.artworks") },
    { icon: Globe, value: "50+", label: t("hero.stats.events") },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const badge = el.querySelector("[data-hero]");
    const title = el.querySelector("[data-hero='title']");
    const subtitle = el.querySelector("[data-hero='subtitle']");
    const quote = el.querySelector("[data-hero='quote']");
    const ctas = el.querySelector("[data-hero='ctas']");
    const statsEls = el.querySelectorAll("[data-hero='stat']");

    const targets = [badge, title, subtitle, quote, ctas].filter(Boolean);

    animate(targets, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      delay: stagger(80),
      ease: "outQuad",
    });

    animate(Array.from(statsEls), {
      opacity: [0, 1],
      translateY: [15, 0],
      duration: 500,
      delay: stagger(60, { start: 400 }),
      ease: "outQuad",
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-500/15 via-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute top-20 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-purple-400/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-400/10 to-transparent blur-3xl" />
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 h-2 w-2 animate-pulse rounded-full bg-violet-400/40" />
        <div className="absolute top-1/3 right-1/3 h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400/30 delay-700" />
        <div className="absolute bottom-1/3 left-1/3 h-1 w-1 animate-pulse rounded-full bg-indigo-400/40 delay-1000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div
            data-hero
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-200/50 bg-violet-50/80 px-4 py-1.5 text-sm font-medium text-violet-700 backdrop-blur-sm dark:border-violet-800/50 dark:bg-violet-950/50 dark:text-violet-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            {t("hero.badge")}
          </div>

          {/* Title */}
          <h1
            data-hero="title"
            className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl lg:text-8xl dark:text-white"
          >
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400">
              {t("hero.title")}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            data-hero="subtitle"
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400"
          >
            {t("hero.subtitle")}
          </p>

          {/* Quote */}
          <blockquote
            data-hero="quote"
            className="mx-auto mt-8 max-w-xl text-base italic text-violet-600/80 dark:text-violet-400/80"
          >
            {t("hero.quote")}
          </blockquote>

          {/* CTAs */}
          <div
            data-hero="ctas"
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30 dark:from-violet-500 dark:to-purple-500"
            >
              {t("hero.cta")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/50 px-7 py-3.5 text-base font-medium text-zinc-700 backdrop-blur-sm transition-all hover:border-zinc-400 hover:bg-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800/50"
            >
              {t("hero.secondary")}
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                data-hero="stat"
                className="group rounded-2xl border border-zinc-200/50 bg-white/50 p-4 text-center backdrop-blur-sm transition-all hover:border-violet-200 hover:bg-violet-50/50 dark:border-zinc-800/50 dark:bg-zinc-900/50 dark:hover:border-violet-800/50 dark:hover:bg-violet-950/30"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 transition-colors group-hover:bg-violet-100 group-hover:text-violet-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-violet-500/20 dark:group-hover:text-violet-400">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-zinc-900 dark:text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
