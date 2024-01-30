import { AppBar, IconButton } from "@mui/material"
import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"
import MenuIcon from "@mui/icons-material/Menu"
import NavbarSidebar from "./MobileNavbar/Sidebar"
import UIBrand from "../../Brand"
import { ToolbarStyled } from "./Styled"

export const navItems = [
	{ id: "home", text: "Home", link: "/" },
	{ id: "compounds", text: "Compound", link: "/compounds" },
	{ id: "compound-add", text: "Add Compound", link: "/compounds/add" },
]

const MobileNavbar = () => {
	const { sidebar } = useContext(ContextMain)
	return (
		<>
			<AppBar
				aria-label="mobile-nav"
				component="nav"
				sx={{ display: { md: "none" } }}
			>
				<ToolbarStyled>
					<UIBrand />
					<IconButton
						color="inherit"
						edge="start"
						onClick={() => sidebar.showSidebar()}
						size="large"
					>
						<MenuIcon />
					</IconButton>
				</ToolbarStyled>
			</AppBar>
			{sidebar.visible && <NavbarSidebar />}
		</>
	)
}

export default MobileNavbar
