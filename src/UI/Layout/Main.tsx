import { styled, useMediaQuery, useTheme } from "@mui/material"
import { useContext, useEffect } from "react"
import { ContextMain } from "../../data/context/main"
import {
	DESKTOPNAVBARCONTAINERFULL_WIDTH,
	DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH,
	APPBAR_HEIGHT,
	TOOLBAR_STYLED_PADDING,
} from "./Header/Styled"
import { useAnimate, motion } from "framer-motion"

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

export const UIRootLayoutMainDesktop = styled(LayoutBase)(({ theme }) => ({
	maxWidth: theme.breakpoints.values.md,
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

export const Test = ()=>{
	return <motion.span animate={{marginLeft:0}}>
	
	</motion.span>
}

export const UILayoutMainRootComponent: React.FC<Props> = ({ children }) => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
	const { sidebarPersist } = useContext(ContextMain)
	const [scope, animate] = useAnimate()
	useEffect(()=>{
		const marginLeft = ()=>{
			if(sidebarPersist.minimize) animate(scope.current, {marginLeft: DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH})
			else animate(scope.current, {marginLeft: DESKTOPNAVBARCONTAINERFULL_WIDTH})
		}
		marginLeft()
	},[sidebarPersist.minimize])
	if (isDesktop)
		return (
			<UIRootLayoutMainDesktop
				ref={scope}
				sx={{
					marginLeft: sidebarPersist.minimize
						? DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH
						: DESKTOPNAVBARCONTAINERFULL_WIDTH,
				}}
			>
				{children}
			</UIRootLayoutMainDesktop>
		)
	else return <UIRootLayoutMainMobile>{children}</UIRootLayoutMainMobile>
}
