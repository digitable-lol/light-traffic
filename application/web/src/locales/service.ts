import { createInstance } from "i18next"
import I18NextHttpBackend from "i18next-http-backend"

const i18nInstance = createInstance({
  backend: {
    loadPath: `${window.location.origin}/public/locales/{{ns}}/{{lng}}.json`,
  },
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
  defaultNS: "translation",
  ns: ["translation"],
})

i18nInstance.use(I18NextHttpBackend).init({ lng: "ru" })

export default i18nInstance
