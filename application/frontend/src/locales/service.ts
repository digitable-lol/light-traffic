import { createInstance } from "i18next"
import I18NextHttpBackend from "i18next-http-backend"
import { CONFIG } from "src/configs"

const i18nInstance = createInstance({
  backend: {
    loadPath: `${CONFIG.basename}/public/locales/{{ns}}/{{lng}}.json`,
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
