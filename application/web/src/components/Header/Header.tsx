import { useEffect } from "react"
import { useTranslation } from "react-i18next"

import { Switch } from "@mui/material"

import { UserController } from "src/api/controllers/UserController"
import { useTheme } from "src/components/Theme"
import { ThemeEnum } from "src/types/theme/enum"

import Markup from "./Header.styled"

export const Header = () => {
  const { change } = useTheme()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    UserController.get()
  }, [])

  return (
    <Markup.Container>
      {t("header")}
      <Switch
        onChange={(_, checked) => {
          change(checked ? ThemeEnum.Dark : ThemeEnum.Light)
        }}
      />

      <Switch
        onChange={(_, checked) => (checked ? i18n.changeLanguage("en") : i18n.changeLanguage("ru"))}
      />
    </Markup.Container>
  )
}
