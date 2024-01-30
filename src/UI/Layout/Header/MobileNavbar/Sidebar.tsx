import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { useContext } from "react"
import { ContextMain } from "../../../../data/context/main"
import { navItems } from "../MobileNavbar"

const NavbarSidebar = () => {
	const {sidebar} = useContext(ContextMain)
  return (
		<Drawer
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
					width: 240,
				},
			}}
		>
			<Box onClick={()=>sidebar.hideSidebar()} sx={{ textAlign: "center" }}>
				<Typography variant="h6" sx={{ my: 2 }}>
					MUI
				</Typography>
				<Divider />
				<List>
					{navItems.map((item) => (
						<ListItem key={item.id} disablePadding>
							<ListItemButton sx={{ textAlign: "center" }}>
								<ListItemText primary={item.text} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Box>
		</Drawer>
  )
}

export default NavbarSidebar
