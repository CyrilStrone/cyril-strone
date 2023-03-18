import i18n from "i18next";
import { initReactI18next } from "react-i18next";



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      ///русский язык
      ru: {
        Home:{
          Title:"Hi Im Cyril Strone, a special human with some ability to love learning and working on teamwork."
        }
      },
      ///английский язык
      en: {
        Home:{
          Title:"Hi Im Cyril Strone, a special human with some ability to love learning and working on teamwork."
        }
      },
    },
    lng: "ru", // if you're using a language detector, do not define the lng option
    fallbackLng: "ru",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
