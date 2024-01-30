import { useContext } from "react"
import { ContextMain } from "../context/main"
import {default as MUIThemeProvider} from "@mui/material/styles/ThemeProvider"
import CssBaseline from "@mui/material/CssBaseline"


interface Props{
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
   const {theme} = useContext(ContextMain)
   return (
      <>
         <MUIThemeProvider theme={theme.current}>
            <CssBaseline />
            {children}
         </MUIThemeProvider>
      </>
   )
}

export default ThemeProvider