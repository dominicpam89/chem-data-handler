import {default as MUIThemeProvider} from "@mui/material/styles/ThemeProvider"
import CssBaseline from "@mui/material/CssBaseline"
import { useContextMain } from "../hooks/useContext"


interface Props{
  children: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
   const {current} = useContextMain().theme
   return (
      <>
         <MUIThemeProvider theme={current}>
            <CssBaseline />
            {children}
         </MUIThemeProvider>
      </>
   )
}

export default ThemeProvider