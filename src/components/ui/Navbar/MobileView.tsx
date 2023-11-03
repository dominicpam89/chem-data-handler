import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, IconButton, Typography, useTheme, Drawer } from "@mui/material";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import Sidebar from './Sidebar';

const MobileView = () => {
  const theme = useTheme();
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);
  return (
    <>
      <div aria-label="nav-center" className="flex flex-row items-center">
        <IconButton aria-label="brand" color="inherit">
          <DonutSmallIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          AppName
        </Typography>
      </div>

      <div aria-label="nav-right" className='flex flex-row items-center space-x-10'>
        <Link to="/auth">
          <Typography variant='h6' component={'span'} sx={{fontSize:'18px'}}>Link Authentication (temp)</Typography>
        </Link>
        <div
          aria-label="avatar-wrapper"
          className={`bg-[${theme.palette.primary.main}] rounded-full mix-blend-hard-light`}
        >
          <IconButton
            aria-label=""
            onClick={()=>setToggleDrawer(true)}
          >
            <Avatar alt="dummy avatar" src="/images/dummy-avatar-1.jpg" />
          </IconButton>
        </div>
        <Drawer
          variant="temporary"
          anchor="right"
          open={toggleDrawer}
          onClose={()=>setToggleDrawer(false)}
        >
          <Sidebar onClose={()=>setToggleDrawer(false)} />
        </Drawer>
      </div>
    </>
  );
};

export default MobileView;
