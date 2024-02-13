import { Drawer } from "@mui/material"
import React from "react";
import { useContextMain } from "../../../../data/hooks/useContext";

interface Props{
  children: React.ReactNode
}

const MobileNavDrawer:React.FC<Props> = ({children}) => {
  const {sidebar} = useContextMain()
  return <Drawer
			aria-label="drawer"
			variant="temporary"
			open={sidebar.visible}
			onClose={sidebar.hideSidebar}
			ModalProps={{
				keepMounted: true, // Better open performance on mobile.
			}}
			sx={{
				display: { xs: "block", md: "none" },
				"& .MuiDrawer-paper": {
					boxSizing: "border-box",
					minWidth: "50%",
					maxWidth: "80%",
				},
			}}
		>
      {children}
    </Drawer>
}
 
export default MobileNavDrawer;