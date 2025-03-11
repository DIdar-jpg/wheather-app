import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

interface TranslationConfig {
    fallbackLng: string;
    debug: boolean;
    detection: {
        order: string[];
        cache: string[];
    };
    interpolation: {
        escapeValue: boolean;
    };
}
const config: TranslationConfig = {
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    detection: {
        order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator'],
        cache: ['cookie', 'localStorage'],
    },
    interpolation: {
        escapeValue: false,
    },
};

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(config);

export default i18n;