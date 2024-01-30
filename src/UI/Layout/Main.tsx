import { styled } from "@mui/material"
import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import { DESKTOPNAVBARCONTAINERFULL_WIDTH, DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH } from "./Header/Styled"

const LayoutMainBase = styled("main")(({theme})=>({
	[theme.breakpoints.up("xs")]:{
		padding: `${theme.spacing(2)} ${theme.spacing(3)}`
	},
	[theme.breakpoints.up("sm")]:{
		padding: `${theme.spacing(4)} ${theme.spacing(6)}`
	},
	[theme.breakpoints.up("md")]:{
		padding: `${theme.spacing(6)} ${theme.spacing(9)}`
	},
}))

/* 
	Styled Components that follows Desktop Bar that have features:
	- can be minimized: DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH (48px)
	- can be full width: DESKTOPNAVBARCONTAINERFULL_WIDTH (240px)
*/

export const UILayoutMainRootFull = styled(LayoutMainBase)(({})=>({
	position: "fixed",
	top: 0,
	left: DESKTOPNAVBARCONTAINERFULL_WIDTH
}))

export const UILayoutMainRootMinimize = styled(LayoutMainBase)(({})=>({
	position: "fixed",
	top: 0,
	left: DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH
}))

export const UILayoutMainAuth = styled(LayoutMainBase)(({})=>({
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
}))

interface Props{
	children: React.ReactNode
}

export const UILayoutMainRootComponent:React.FC<Props> = ({children})=>{
	const { sidebarPersist } = useContext(ContextMain)
	if (sidebarPersist.minimize)
		return <UILayoutMainRootMinimize>{children}</UILayoutMainRootMinimize>
	else return <UILayoutMainRootFull>{children}</UILayoutMainRootFull>
}
