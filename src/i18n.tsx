// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../public/locales/eng.json'
import uzTranslation from '../public/locales/uz.json';
import ruTranslation from '../public/locales/ru.json';

// Your i18n configuration
const i18nConfig = {
  interpolation: {
    escapeValue: false, // Not needed for React as it escapes by default
  },
  lng: 'en', // Default language
  resources: {
    en: {
      translation: enTranslation, // English translations
    },
    uz: {
      translation: uzTranslation, // Uzbek translations
    },
    ru: {
      translation: ruTranslation, // Russian translations
    },
  },
};

// Initialize i18next
i18n
  .use(initReactI18next) // Use the React i18next bindings
  .init(i18nConfig);

export default i18n;
