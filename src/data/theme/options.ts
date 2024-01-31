import { BreakpointsOptions, createTheme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const ThemeTypography:TypographyOptions = {
   fontFamily: "Montserrat, sans-serif",
   h1: {
      fontSize: 48.828,
      fontWeight: 900,
   },
   h2: {
      fontSize: 39,
      fontWeight: 800,
   },
   h3: {
      fontSize: 31.25,
      fontWeight: 700,
   },
   h4: {
      fontSize: 25,
      fontWeight: 600,
   },
   h5: {
      fontSize: 20,
      fontWeight: 500,
   },
   h6: {
      fontSize: 16,
      fontWeight: 500,
   },

}

export const ThemeBreakpoints:BreakpointsOptions = {
   values:{
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440
   }
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
   primary: {
      main: "#3d5abf",
   },
   secondary: {
      main: "#6550c7",
   },
   success: {
      main: "#70e83c",
   },
   warning: {
      main: "#e1c245",
   },
   error: {
      main: "#d93865",
   },
   info: {
      main: "#10a5e5",
   },
}


export const lightTheme = createTheme({
   palette: {
    mode: "light",
    ...LightPaletteOptions,
   },
   typography: ThemeTypography,
   breakpoints: ThemeBreakpoints,
})

export const darkTheme = createTheme({
   palette: {...DarkPaletteOptions, mode:"dark"},
   typography: ThemeTypography,
   breakpoints: ThemeBreakpoints,
})