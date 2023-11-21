import { useState } from "react"
import { Theme } from "@mui/material"
import { darkTheme, lightTheme } from "../UITheme/ThemeOptions"

export const ContextMUIThemeInit = {
   current: lightTheme,
   changeTheme: (opt: string) => {
      opt
   },
}

export const useMUIThemeHooks = () => {
   const [_theme, setTheme] = useState<Theme>(lightTheme)
   const theme = {
      current: _theme,
      changeTheme: (opt: string = "light") => setTheme(opt === "light" ? lightTheme : darkTheme),
   }
   return theme
}
