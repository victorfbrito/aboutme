import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './constants/i18n/en';
import pt from './constants/i18n/pt';
import fr from './constants/i18n/fr';
import es from './constants/i18n/es';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      fr: { translation: fr },
      es: { translation: es },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
