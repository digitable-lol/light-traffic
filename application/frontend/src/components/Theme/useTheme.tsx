import { useContext } from "react"

import { ThemeContext } from "./Theme.hooks"

export const useTheme = () => {
  const context = useContext(ThemeContext)

  return {
    theme: context.theme,
    change: context.change,
  }
}
