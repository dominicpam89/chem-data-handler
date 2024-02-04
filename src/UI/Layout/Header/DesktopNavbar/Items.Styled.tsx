import { IconButton, styled } from "@mui/material"
import { Link } from "react-router-dom"

export const List = styled("ul")(({ theme }) => ({
	margin: 0,
	padding: 0,
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(4),
	listStyle: "none",
}))

export const ListItem = styled("li")(({ theme, className }) => ({
	color: className && className!.includes("active")
			? theme.palette.info.light
			: theme.palette.primary.contrastText,
}))

export const ListItemLink = styled(Link)(({theme}) => {
	const style = {
		display: "flex",
		gap: theme.spacing(2),
		alignItems: "center",
		minWidth: 0,
		textDecoration: "none",
		color: "inherit",
		fontSize: "18px",
	}
	return { ...style }
})

export const ListItemIcon = styled(IconButton)(()=>({
	color: "inherit",
	fontSize: "inherit",
	padding: 0,
}))

export const ListItemText = styled("span")(()=>({
	fontSize: "16px",
}))
