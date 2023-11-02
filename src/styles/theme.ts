import { Theme, ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#c5356d',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontWeight: 900,
      fontSize: 61,
    },
    h2: {
      fontWeight: 800,
      fontSize: 48.83,
    },
    h3: {
      fontWeight: 700,
      fontSize: 39.06,
    },
    h4: {
      fontWeight: 600,
      fontSize: 31.25,
    },
    h5: {
      fontWeight: 500,
      fontSize: 25,
    },
    h6: {
      fontWeight: 400,
      fontSize: 20,
    },
    body1:{
      fontFamily: 'Hind',
      fontWeight: 300,
      fontSize: 16,
    },
    body2:{
      fontFamily: 'Hind',
      fontWeight: 400,
      fontSize: 14,
    }
  },
};

export const theme:Theme = createTheme(themeOptions);