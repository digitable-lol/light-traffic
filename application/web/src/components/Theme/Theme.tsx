import { ThemeProvider } from "styled-components"

import { ReactNode, useState } from "react"

import { createTheme } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"

import { ThemeEnum } from "src/types/theme/enum"

import { ThemeContext } from "./Theme.hooks"

interface ThemeProps {
  children?: ReactNode | ReactNode[]
}

export const Theme: React.FC<ThemeProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(ThemeEnum.Light)

  const theme = createTheme({
    palette: {
      mode: currentTheme,
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          currentTheme,
          theme,
          change: setCurrentTheme,
        }}
      >
        <CssBaseline />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
