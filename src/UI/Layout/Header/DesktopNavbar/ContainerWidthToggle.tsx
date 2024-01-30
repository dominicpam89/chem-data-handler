import { Box, IconButton, useTheme } from "@mui/material"
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useContext } from "react";
import { ContextMain } from "../../../../data/context/main";

const ContainerWidthToggle = () => {
  const theme = useTheme()
  const {sidebarPersist} = useContext(ContextMain)
  return <Box sx={{
    position:"absolute",
    top: "50%",
    right: sidebarPersist.minimize ? "-100%":"-20%",
    zIndex: "500",
  }}>
    <IconButton sx={{
      rotate: sidebarPersist.minimize ? "-90deg":"90deg",
      translate: "-20% 0%",
      fontSize: "48px",
      color: sidebarPersist.minimize ? theme.palette.primary.main:theme.palette.primary.light
    }}
      onClick={()=>sidebarPersist.toggleSizeSidebar()}
    >
      <ArrowDropDownCircleIcon fontSize="inherit" color="inherit" />
    </IconButton>
  </Box>
}
 
export default ContainerWidthToggle;