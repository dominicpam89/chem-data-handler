import { useContext, useEffect } from "react"
import {
	DESKTOPNAVBARCONTAINERFULL_WIDTH,
	DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH,
} from "../Styled"
import { ContextMain } from "../../../../data/context/main"
import { useTheme, Box } from "@mui/material"
import { useAnimate } from "framer-motion"

interface Props {
	children: React.ReactNode
}

const useHooks = () => {
	const theme = useTheme()
	const { sidebarPersist } = useContext(ContextMain)
	const [scope, animate] = useAnimate()
	useEffect(() => {
		if (sidebarPersist.minimize) {
			animate(scope.current, {
				width: DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH,
			})
			animate(scope.current, {
				padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
			})
		} else {
			animate(scope.current, { width: DESKTOPNAVBARCONTAINERFULL_WIDTH })
			animate(scope.current, {
				padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
			})
		}
		return () => {}
	}, [sidebarPersist.minimize])
	return { theme, scope }
}

const DesktopNavbarContainer: React.FC<Props> = ({ children }) => {
	const { theme, scope } = useHooks()
	return (
		<Box
			ref={scope}
			aria-label="desktop-navbar-container"
			display={{ xs: "none", md: "block" }}
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				height: "100vh",
				background: `linear-gradient(180deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
			}}
		>
			{children}
		</Box>
	)
}

export default DesktopNavbarContainer
