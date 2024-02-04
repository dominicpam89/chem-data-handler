import { useTheme, Box } from "@mui/material"
import { DESKTOPNAVBARCONTAINERFULL_WIDTH, DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH } from "../Styled"
import { useContext } from "react"
import { ContextMain } from "../../../../data/context/main"

interface Props {
	children: React.ReactNode
}

const DesktopNavbarContainer: React.FC<Props> = ({ children }) => {
	const {sidebarPersist} = useContext(ContextMain)
	const theme = useTheme()
	return (
		<Box
			component="header"
			aria-label="desktop-navbar-container"
			display={{ xs: "none", md: "block" }}
			sx={{
				position: "fixed",
				width: sidebarPersist.minimize ? DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH : DESKTOPNAVBARCONTAINERFULL_WIDTH,
				top: 0,
				left: 0,
				height: "100vh",
				background: `linear-gradient(180deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
				transition: "all 300ms ease-in-out"
			}}
		>
			{children}
		</Box>
	)
}

export default DesktopNavbarContainer
