import { useState } from "react"
import { useLocation } from "react-router-dom"

import { NavbarTypes } from "./types"

export namespace NavbarHooks {
  const getInitialTab = (tabs: Array<NavbarTypes.Tab>, pathname: string) => {
    return (
      tabs.find((tab) => {
        if (pathname === "/" || tab.to === "/") {
          return pathname === tab.to
        }
        return pathname.includes(tab.to)
      }) || tabs[0]
    )
  }

  const getTabValue = (tab: NavbarTypes.Tab) => tab.to

  export const useValue = (tabs: Array<NavbarTypes.Tab>) => {
    const location = useLocation()
    return useState(getTabValue(getInitialTab(tabs, location.pathname)))
  }
}
