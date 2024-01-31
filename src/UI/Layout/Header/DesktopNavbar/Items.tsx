import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { ContextMain } from "../../../../data/context/main"
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemLink,
	ListItemText,
} from "./Items.Styled"

const ItemsMinimal = () => {
	const {
		sidebarPersist,
		navigationItems: { items },
	} = useContext(ContextMain)
	const { pathname } = useLocation()

	return (
		<List>
			{items.map((item) => {
				return (
					<ListItem
						key={item.id}
						className={`${pathname === item.link ? "active" : ""}`}
					>
						<ListItemLink to={item.link}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							{!sidebarPersist.minimize && (
								<ListItemText>{item.text}</ListItemText>
							)}
						</ListItemLink>
					</ListItem>
				)
			})}
		</List>
	)
}

export default ItemsMinimal
