import { useTranslation } from "react-i18next";
import FadeIn from "@/components/fade-in";

export default function Team() {
  const { t } = useTranslation();

  const members = t("team.members", { returnObjects: true }) as Array<{
    name: string;
    role: string;
    bio: string;
  }>;

  const initials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("");

  const gradients = [
    "from-violet-500 to-purple-600",
    "from-cyan-500 to-blue-600",
    "from-amber-500 to-orange-600",
    "from-emerald-500 to-teal-600",
  ];

  return (
    <section id="team" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-sm font-medium text-zinc-600 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400">
            {t("team.badge")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            {t("team.title")}
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{t("team.subtitle")}</p>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <FadeIn key={index} delay={100 + index * 100}>
              <div className="group text-center">
                <div className="relative mx-auto mb-4">
                  <div
                    className={`mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} text-2xl font-bold text-white shadow-lg transition-transform group-hover:scale-105`}
                  >
                    {initials(member.name)}
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {member.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
