import { AppBar, IconButton, Stack } from "@mui/material"
import { useContext } from "react"
import { ContextMain } from "../../../data/context/main"
import { ToolbarStyled } from "./Styled"
import MenuIcon from "@mui/icons-material/Menu"
import NavbarSidebar from "./MobileNavbar/Sidebar"
import { MobileNavbarBrandIcon, BrandText } from "../../Brand"

const Brand = ()=>{
	return (
		<Stack
			direction="row"
			spacing={1}
			justifyContent="center"
			alignItems="center"
		>
			<MobileNavbarBrandIcon />
			<BrandText color="inherit" variant="h5" />
		</Stack>
	)
}

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
					<Brand />
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
