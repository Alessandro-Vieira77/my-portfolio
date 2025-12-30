import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './i18n/resources/en.json'
import pt from './i18n/resources/pt.json'

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    'pt-BR': { translation: pt },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
