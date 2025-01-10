import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: require('./en.json'),
    },
    ru: {
        translation: require('./ru.json'),
    },
    uz: {
        translation: require('./uz.json'),
    },
    de: {
        translation: require('./de.json'),
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n;