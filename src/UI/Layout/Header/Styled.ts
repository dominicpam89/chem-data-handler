import { AppBar, Toolbar, styled } from "@mui/material"

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
	padding: `${theme.spacing(3)} ${theme.spacing(3)}`,
	display: "flex",
	flexDirection: "row",
	gap: theme.spacing(2),
	justifyContent: "space-between",
	alignItems: "center",
}))
