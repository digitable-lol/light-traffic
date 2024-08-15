import { createContext } from "react"

import { ThemeContextTypes } from "./Theme.types"

export const ThemeContext = createContext<ThemeContextTypes>({} as ThemeContextTypes)
