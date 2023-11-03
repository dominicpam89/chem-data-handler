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
      <div aria-label="nav-center" className="flex flex-row items-center space-x-10">
        <IconButton aria-label="brand" color="inherit">
          <DonutSmallIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          AppName
        </Typography>
        <Link to="/auth">Login (temporary)</Link>
      </div>

      <div aria-label="nav-right">
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
