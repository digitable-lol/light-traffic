import { ThemeEnum } from "types/theme/enum"

import { Theme } from "@mui/material"

export type ThemeContextTypes = {
  currentTheme: ThemeEnum
  theme: Theme
  change: (theme: ThemeEnum) => void
}
