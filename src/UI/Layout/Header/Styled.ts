import { AppBar, Toolbar, styled } from "@mui/material"

export const DESKTOPNAVBARCONTAINERFULL_WIDTH = "240px"
export const DESKTOPNAVBARCONTAINERMINIMIZE_WIDTH = "56px"
export const TOOLBAR_STYLED_PADDING = 24
export const APPBAR_HEIGHT = 96

export const AppBarStyled = styled(AppBar)(({theme})=>({
	height: `${APPBAR_HEIGHT}px`,
	[theme.breakpoints.up("md")]:{
		display: "none",
	},
}))

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
	padding: `${TOOLBAR_STYLED_PADDING}px ${TOOLBAR_STYLED_PADDING}px`,
	display: "flex",
	flexDirection: "row",
	gap: theme.spacing(2),
	justifyContent: "space-between",
	alignItems: "center",
}))