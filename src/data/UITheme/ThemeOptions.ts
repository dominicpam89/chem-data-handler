import { createTheme } from '@mui/material';
export const ThemeTypography = {
   fontFamily: "Montserrat, sans-serif",
   body1: {
      fontSize: 16,
      fontWeight: 400,
   },
   body2: {
      fontSize: 14,
      fontWeight: 400,
   },
   button: {
      fontSize: 14,
      fontWeight: 600,
   },
   h1: {
      fontSize: 48.828,
      fontWeight: 800,
   },
   h2: {
      fontSize: 39,
      fontWeight: 700,
   },
   h3: {
      fontSize: 31.25,
      fontWeight: 600,
   },
   h4: {
      fontSize: 25,
      fontWeight: 500,
   },
   h5: {
      fontSize: 20,
      fontWeight: 400,
   },
}

export const LightPaletteOptions = {
   primary: {
      main: "#202f64",
   },
   secondary: {
      main: "#6e8bec",
   },
   success: {
      main: "#70e83c",
   },
   warning: {
      main: "#e1c245",
   },
   error: {
      main: "#e20a46",
   },
   info: {
      main: "#10a5e5",
   },
}

export const DarkPaletteOptions = {
   mode: "dark",
   primary: {
      main: "#202f64",
   },
   secondary: {
      main: "#6e8bec",
   },
   success: {
      main: "#70e83c",
   },
   warning: {
      main: "#e1c245",
   },
   error: {
      main: "#e20a46",
   },
   info: {
      main: "#10a5e5",
   },
}


export const lightTheme = createTheme({
   palette: LightPaletteOptions,
   typography: ThemeTypography
})

export const darkTheme = createTheme({
   palette: LightPaletteOptions,
   typography: ThemeTypography
})