import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { ContextMain } from "../../../../data/context/main"
import { List, ListItem, ListItemIcon, ListItemLink } from "./Styled"

const SidebarItems = () => {
	const { pathname } = useLocation()
	const {navigationItems:{items}} = useContext(ContextMain)
	return (
		<List aria-label="list-container">
			{items.map((item) => {
				if (pathname.includes(item.link))
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
