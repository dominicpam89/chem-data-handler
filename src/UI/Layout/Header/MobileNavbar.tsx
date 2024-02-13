import { IconButton, Stack } from "@mui/material"
import { AppBarStyled, ToolbarStyled } from "./Styled"
import MenuIcon from "@mui/icons-material/Menu"
import NavbarSidebar from "./MobileNavbar/Sidebar"
import { MobileNavbarBrandIcon, BrandText } from "../../Brand"
import { useContextMain } from "../../../data/hooks/useContext"

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
	const { sidebar } = useContextMain()
	return (
		<>
			<AppBarStyled aria-label="mobile-nav">
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
			</AppBarStyled>
			<NavbarSidebar />
		</>
	)
}

export default MobileNavbar
