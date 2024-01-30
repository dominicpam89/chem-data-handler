import { Box, Toolbar, styled } from "@mui/material"

export const DESKTOPNAVBARCONTAINERFULL_WIDTH = "240px"
export const DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH = "48px"

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
	padding: `${theme.spacing(3)} ${theme.spacing(3)}`,
	display: "flex",
	flexDirection: "row",
	gap: theme.spacing(2),
	justifyContent: "space-between",
	alignItems: "center",
}))

const DesktopNavbarContainer = styled(Box)(({theme})=>({
	position: "fixed",
	top: 0,
	left: 0,
	height: "100vh",
	width: "240px",
	padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
	background: `linear-gradient(180deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
}))

export const DesktopNavbarContainerFull = styled(DesktopNavbarContainer)(({theme})=>({
	width: DESKTOPNAVBARCONTAINERFULL_WIDTH,
	padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
}))

export const DesktopNavbarContainerMinimize = styled(DesktopNavbarContainer)(({theme})=>({
	width: DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH,
	padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
}))

