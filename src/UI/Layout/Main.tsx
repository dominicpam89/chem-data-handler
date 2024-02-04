import { styled, useMediaQuery, useTheme } from "@mui/material"
import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import {
	DESKTOPNAVBARCONTAINERFULL_WIDTH,
	DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH,
	APPBAR_HEIGHT,
	TOOLBAR_STYLED_PADDING,
} from "./Header/Styled"

const LayoutBase = styled("main")(({ theme }) => ({
	[theme.breakpoints.up("xs")]: {
		padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
	},
	[theme.breakpoints.up("sm")]: {
		padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
	},
	[theme.breakpoints.up("md")]: {
		padding: `${theme.spacing(6)} ${theme.spacing(9)}`,
	},
}))

/* 
	Styled Components that follows Desktop Bar that have features:
	- can be minimized: DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH (48px)
	- can be full width: DESKTOPNAVBARCONTAINERFULL_WIDTH (240px)
*/

export const UIRootLayoutMainDesktop = styled(LayoutBase)(({ }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}))

export const UIRootLayoutMainMobile = styled(LayoutBase)(({}) => ({
	marginTop: `${APPBAR_HEIGHT + TOOLBAR_STYLED_PADDING}px`,
}))

export const UILayoutMainAuth = styled(LayoutBase)(({}) => ({
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
}))

interface Props {
	children: React.ReactNode
}

export const UILayoutMainRootComponent: React.FC<Props> = ({ children }) => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
	const { sidebarPersist } = useContext(ContextMain)
	if (isDesktop)
		return (
			<UIRootLayoutMainDesktop
				sx={{
					marginLeft: sidebarPersist.minimize
						? DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH
						: DESKTOPNAVBARCONTAINERFULL_WIDTH,
					transition: "all 300ms ease-in-out"
				}}
			>
				{children}
			</UIRootLayoutMainDesktop>
		)
	else return <UIRootLayoutMainMobile>{children}</UIRootLayoutMainMobile>
}
