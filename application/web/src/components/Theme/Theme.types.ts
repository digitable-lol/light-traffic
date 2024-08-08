import { Theme } from "@mui/material"
import { ThemeEnum } from "@src/@types/theme/enum"

export type ThemeContextTypes = {
    currentTheme: ThemeEnum
    theme: Theme
    change: (theme: ThemeEnum) => void
}