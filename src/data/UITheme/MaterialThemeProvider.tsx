import { InterfacePropsChildren } from '../interfaces/props';
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material';

const themeOptions:ThemeOptions = {
  palette:{
    primary:{
      main: '#202f64',
    },
    secondary:{
      main: '#6e8bec',
    },
    success:{
      main: '#70e83c',
    },
    warning:{
      main: '#e1c245',
    },
    error:{
      main: '#e20a46',
    },
    info:{
      main: '#10a5e5',
    }
  },
  typography:{
    fontFamily: 'Montserrat, sans-serif',
  }
}

const theme = createTheme(themeOptions);

const MUIThemeProvider:React.FC<InterfacePropsChildren> = ({children})=>{
  return <>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </>
}

export default MUIThemeProvider