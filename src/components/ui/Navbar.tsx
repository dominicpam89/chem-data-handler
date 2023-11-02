import { useMediaQuery } from '../../data/hooks/useMQ';
import { AppBar, Toolbar } from '@mui/material'
import MobileView from './Navbar/MobileView';

const Navbar = ()=>{
  const {mobileView,desktopView} = useMediaQuery();
  return <>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <div className='w-full flex flex-row justify-between items-center'>
          {(mobileView||desktopView) && <MobileView />}
        </div>
      </Toolbar>
    </AppBar>
  </>
}

export default Navbar;