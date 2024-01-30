import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        transaltion: {
          greeting: "Hello, Welcome!",
        },
      },
      fr: {
        transaltion: {
          greeting: "Bonjour le monde",
        },
      },
      hi: {
        transaltion: {
          greeting: "हैलो वर्ल्ड",
        },
      },
    },
  });
