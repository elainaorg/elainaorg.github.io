import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const I18N_DEBUG = import.meta.env.VITE_I18N_DEBUG;

i18n
  .use(HttpBackend)
  .use(LanguageDetector) // 加载语言检测插件
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // 默认语言
    debug: I18N_DEBUG || false,
    detection: {
      // 语言检测配置，默认即可，常用配置示例：
      order: ["cookie", "navigator"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // 配置翻译文件的加载路径
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  })
  .then();

export default i18n;
