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
      primary: {
        main: "#007DFF",
        light: "#66aaff",
        dark: "#005bb5",
        contrastText: "#fff",
      },
      secondary: {
        main: "#dc004e",
        light: "#ff6f60",
        dark: "#9a0036",
        contrastText: "#000",
      },
      error: {
        main: "#f44336",
        light: "#e57373",
        dark: "#d32f2f",
        contrastText: "#fff",
      },
      background: {
        default: currentTheme === ThemeEnum.Light ? "rgba(250, 250, 250, 1)" : "#121212",
        paper: currentTheme === ThemeEnum.Light ? "#ffffff" : "#1e1e1e",
      },
      text: {
        primary: currentTheme === ThemeEnum.Light ? "#333333" : "#ffffff",
        secondary: currentTheme === ThemeEnum.Light ? "#555555" : "#b0b0b0",
        disabled: "#aaaaaa",
      },
    },
    typography: {
      fontFamily: "Roboto",
      fontSize: 14,
      h1: {
        fontSize: "2rem",
        fontWeight: 500,
      },
      h2: {
        fontSize: "1.75rem",
        fontWeight: 500,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      caption: {
        fontSize: "0.75rem",
        fontWeight: 300,
      },
    },
    spacing: 8,
    shape: {
      borderRadius: 4,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    transitions: {
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0.0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
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
