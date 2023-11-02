import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

interface Props{
  onClose: ()=>void,
}

const userSettings = [
  {key:'profile', text:'Profile', icon: <AccountCircleIcon />},
  {key:'account', text:'Account', icon: <ManageAccountsIcon />},
  {key:'settings', text:'Settings', icon: <SettingsApplicationsIcon />},
];

const Sidebar:React.FC<Props> = ({onClose})=>{
  return <>
    <Box
      sx={{width:240}}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {userSettings.map(item=>{
          return (
            <ListItem key={item.key} >
              <ListItemButton>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListItem key={'logout'}>
          <ListItemButton>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  </>
}

export default Sidebar;