import { Header } from "~components/Header"
import { Theme } from "~components/Theme"
import i18nInstance from "~locales/service"

import React from "react"
import { I18nextProvider } from "react-i18next"
import { Outlet, useLocation } from "react-router-dom"

import Markup from "./Layout.styled"

export const Layout = () => {
  const location = useLocation()

  const shouldShowHeader = location.pathname !== "/"

  return (
    <Markup.Container>
      <Theme>
        <Markup.GlobalStyle />

        <I18nextProvider i18n={i18nInstance}>
          {shouldShowHeader && <Header />}
          <Outlet />
        </I18nextProvider>
      </Theme>
    </Markup.Container>
  )
}
