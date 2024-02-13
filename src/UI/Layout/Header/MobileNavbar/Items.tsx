import { useLocation } from "react-router-dom"
import { List, ListItem, ListItemIcon, ListItemLink } from "./Styled"
import { useContextMain } from "../../../../data/hooks/useContext"

const SidebarItems = () => {
	const { pathname } = useLocation()
	const {items} = useContextMain().navigationItems
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
