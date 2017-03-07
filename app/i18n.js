import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    "load": ['en', 'en-US', 'es'],
    "backend": {
      "loadPath": './app/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'en',
    fallbackNS: 'common',
    // have a common namespace used around the full app
    ns: ['common'], //List all locale json file names here
    defaultNS: 'common',
    lng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react!!
    }


  });


export default i18n;
