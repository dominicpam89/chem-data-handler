import { TypePropsChildren } from "../types/props"
import { ThemeProvider, CssBaseline } from "@mui/material"
import { useContext } from "react"
import { ContextMain } from "../context/ContextMain"

const MUIThemeProvider: React.FC<TypePropsChildren> = ({ children }) => {
   const context = useContext(ContextMain)
   return (
      <>
         <ThemeProvider theme={context.theme.current}>
            <CssBaseline />
            {children}
         </ThemeProvider>
      </>
   )
}

export default MUIThemeProvider
