import { IconButton, styled } from "@mui/material"
import { Link } from "react-router-dom"

export const List = styled("ul")(({ theme }) => ({
	margin: 0,
	padding: 0,
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(2),
	listStyle: "none",
}))

export const ListItem = styled("li")(({ theme, className }) => ({
	display: "flex",
	flexDirection: "row",
	gap: theme.spacing(1),
	alignItems: "center",
	padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
	backgroundColor:
		className && className!.includes("active")
			? theme.palette.primary.main
			: "inherit",
	color:
		className && className!.includes("active")
			? theme.palette.primary.contrastText
			: "inherit",
}))

export const ListItemIcon = styled(IconButton)(()=>({
	color: "inherit",
	fontSize: "16px",
	padding: 0,
}))

export const ListItemLink = styled(Link)(() => {
	const style = {
		minWidth: 0,
		textDecoration: "none",
		color: "inherit",
		fontSize: "14px",
	}
	return { ...style }
})