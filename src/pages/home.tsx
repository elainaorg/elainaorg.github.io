import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/header";

const images = [
  "/images/01.jpg",
  "/images/02.jpg",
  "/images/03.jpg",
  "/images/04.jpg",
  "/images/05.jpg",
  "/images/06.jpg",
  "/images/07.jpg",
  "/images/08.jpg",
  "/images/08-1.jpg",
  "/images/09.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/11-1.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/14-1.jpg",
  "/images/15.jpg",
  "/images/16.jpg",
  "/images/17.jpg",
  "/images/17-1.jpg",
  "/images/18.jpg",
  "/images/19.jpg",
  "/images/20.jpg",
  "/images/21.jpg",
  "/images/22.jpg",
  "/images/23.jpg",
  "/images/s01.jpg",
  "/images/s02.jpg",
  "/images/s03.jpg",
  "/images/s04.jpg",
  "/images/s05.jpg",
  "/images/s06.jpg",
  "/images/s07.jpg",
  "/images/a01.jpg",
  "/images/a02.jpg",
  "/images/b01.jpg",
  "/images/b02.jpg",
  "/images/c01.jpg",
  "/images/c02.jpg",
];

export default function Home() {
  const { t } = useTranslation("home");
  const [columns, setColumns] = useState<number>(4);

  const calculateColumns = useCallback(() => {
    const width = window.innerWidth;
    if (width <= 540) return 1;
    if (width <= 820) return 2;
    if (width <= 1100) return 3;
    return 4;
  }, []);

  // 更新列数
  const updateColumns = useCallback(() => {
    setColumns(calculateColumns());
  }, [calculateColumns]);

  // 组件挂载时初始化
  useEffect(() => {
    updateColumns();
    window.addEventListener("resize", updateColumns);

    // 清理事件监听器
    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, [updateColumns]);

  // 回到顶部
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 渲染瀑布流画廊
  const renderWaterfallGallery = () => {
    // 创建列数组
    const columnArray: string[][] = Array.from({ length: columns }, () => []);

    // 将图片分配到各列中
    images.forEach((src, index) => {
      const columnIndex = index % columns;
      columnArray[columnIndex].push(src);
    });

    return (
      <div className="flex gap-4 sm:gap-5">
        {columnArray.map((columnImages, columnIndex) => (
          <div key={columnIndex} className="flex flex-1 flex-col gap-4">
            {columnImages.map((src, imgIndex) => (
              <div key={`${columnIndex}-${imgIndex}`}>
                <div>
                  <img
                    src={src}
                    loading="lazy"
                    alt="Elaina"
                    className="h-auto w-full rounded-[5px]"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-zinc-800 dark:text-white">
      {/* 使用 Header 组件 */}
      <Header />
      
      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Hero Section */}
        <section className="mb-16 grid grid-cols-1 items-center gap-8 lg:mb-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <div>
              <div className="aspect-[4/5]">
                <img
                  className="h-full w-full object-contain"
                  alt="Elaina"
                  src="/images/image.webp"
                />
              </div>
            </div>
          </div>
          <div className="order-1 space-y-6 lg:order-2">
            <h1 className="text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              {t("heading")}
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 sm:text-xl lg:text-2xl dark:text-gray-300">
              {t("intro1")}
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-16 sm:mb-20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              {t("gallery")}
            </h2>
            <a
              href="https://x.com/azure_0608_sub"
              target="_blank"
              rel="noreferrer noopener"
              className="dark:text-accent flex items-center gap-2 text-lg font-medium text-purple-600"
            >
              <span>あずーる</span>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
          <div>{renderWaterfallGallery()}</div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 sm:mt-20 sm:pt-10">
          <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-600 sm:text-base md:flex-row dark:text-gray-400">
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <span className="font-medium">
                © {new Date().getFullYear()} Elaina Fan Page · Unofficial
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://github.com/elainaorg"
                target="_blank"
                rel="noreferrer noopener"
                className="dark:text-accent flex items-center gap-2 font-semibold text-purple-600"
              >
                <span>GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <button
                onClick={scrollToTop}
                className="dark:text-accent flex items-center gap-2 font-semibold text-purple-600"
              >
                <span>Back to Top</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
