import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

interface TranslationConfig {
    fallbackLng: string;
    debug: boolean;
    defaultNS: string;
    detection: {
        order: string[];
    //     cache: string[];
    };
    interpolation: {
        escapeValue: boolean;
    };
    cache: [];

    resources: {
        en: {
            translation: {}
        }
        de: {
            translation: {}
        }
        ru: {
            translation: {}
        }
    }
}
const config: TranslationConfig = {
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    defaultNS: 'translation',
    detection: {
        order: ['queryString'],
    },
    interpolation: {
        escapeValue: false,
    },
    cache: [],

    resources: {
        en: {
            translation: {
                "input_text": "Enter city name",
                "search": "Search",
            
                "feels_like": "Feels like",
                "humidity": "Humidity",
                "clouds": "Clouds",
                "min_temp": "Min Temp",
                "visibility": "Visibility",
            
                "temp_chart": "Temperature Chart",
                "days_frt": "days forecast",
                
            
                "keep_in_touch": "Let's keep in touch!",
                "find_me": "Find me on any of these platforms, I respond 1-2 business days."
            }},
        de: {
            translation: {
                "input_text": "Schreiben Stadtname",
                "search": "Suchen",
            
                "feels_like": "Gefühlte",
                "humidity": "Feuchtigkeit",
                "clouds": "Volken",
                "min_temp": "Min Temp",
                "visibility": "Sichtweite",
            
                "temp_chart": "Temperaturdiagramm",
                "days_frt": "Tage-Vorhersage",
            
                "keep_in_touch": "Lass uns in Kontakt bleiben!",
                "find_me": "Finden Sie mich auf einer dieser Plattformen. Ich antworte innerhalb von 1–2 Werktagen."
            }},
        ru: {
            translation: {
                "input_text": "Введите название города",
                "search": "Искать",
            
                "feels_like": "Ощущается как",
                "humidity": "Влажность",
                "clouds": "Облачность",
                "min_temp": "Мин Темп",
                "visibility": "Видимость",
            
                "temp_chart": "График температуры",
                "days_frt": "Дневный прогноз",
            
                "keep_in_touch": "Будем на связи!",
                "find_me": "Свяжитесь со мной через любую из этих платформ и я отвечу вам в течении 1-2 рабочих дней."
            }},
    }
};
export default i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(config)