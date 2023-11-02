import { useMediaQuery as umq } from '@mui/material'

export const useMediaQuery = ()=>{
  const mobileView = umq(`(max-width:640px)`);
  const desktopView = umq(`(min-width:641px)`);
  return {mobileView, desktopView};
}