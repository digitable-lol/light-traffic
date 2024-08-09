import { createContext, useContext } from "react"

import { ThemeContextTypes } from "./Theme.types"

export const ThemeContext = createContext<ThemeContextTypes>({} as ThemeContextTypes)

export const useTheme = () => {
  const context = useContext(ThemeContext)

  return context
}
