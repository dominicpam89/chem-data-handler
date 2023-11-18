import { TypePropsChildren } from '../types/props';
import { createTheme, ThemeProvider, ThemeOptions, CssBaseline } from '@mui/material';
import { ThemeTypography, LightPaletteOptions } from "./ThemeOptions"

const lightThemeOptions:ThemeOptions = {
  palette:LightPaletteOptions,
  typography:ThemeTypography
}

const lightTheme = createTheme(lightThemeOptions);

const MUIThemeProvider:React.FC<TypePropsChildren> = ({children})=>{
  return <>
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </>
}

export default MUIThemeProvider