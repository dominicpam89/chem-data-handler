import { IconButton, styled } from "@mui/material"
import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { ContextMain } from "../../../../data/context/main"

const List = styled("ul")(({ theme }) => ({
	margin: 0,
	padding: 0,
	display: "flex",
	flexDirection: "column",
	gap: theme.spacing(2),
	listStyle: "none",
}))

const ListItem = styled("li")(({ theme, className }) => ({
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

const ListItemIcon = styled(IconButton)(()=>({
	color: "inherit",
	fontSize: "16px",
	padding: 0,
}))

const ListItemLink = styled(Link)(() => {
	const style = {
		minWidth: 0,
		textDecoration: "none",
		color: "inherit",
		fontSize: "14px",
	}
	return { ...style }
})

const SidebarItems = () => {
	const { pathname } = useLocation()
	const {navigationItems:{items}} = useContext(ContextMain)
	return (
		<List aria-label="list-container">
			{items.map((item) => {
				if (pathname === item.link)
					return (
						<ListItem key={item.id} className="active">
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemLink to={item.link}>{item.text}</ListItemLink>
						</ListItem>
					)
				else
					return (
						<ListItem key={item.id}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemLink to={item.link}>{item.text}</ListItemLink>
						</ListItem>
					)
			})}
		</List>
	)
}

export default SidebarItems
