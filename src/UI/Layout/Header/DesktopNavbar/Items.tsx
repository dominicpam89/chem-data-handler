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
		<List sx={{
			paddingTop: sidebarPersist.minimize ? 4 : 0,
			overflow: "hidden",
		}}>
			{items.map((item) => {
				return (
					<ListItem
						key={item.id}
						className={`${pathname.includes(item.link) ? "active" : ""}`}
						sx={{
							paddingLeft: sidebarPersist.minimize ? 2.4 : 4,
							paddingRight: sidebarPersist.minimize ? 2 : 0,
						}}
					>
						<ListItemLink to={item.link}>
							<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText
									sx={{
										opacity: sidebarPersist.minimize ? 0 : 1,
										transition: "all 600ms ease-in-out",
									}}
								>
									{item.text}
								</ListItemText>
						</ListItemLink>
					</ListItem>
				)
			})}
		</List>
	)
}

export default ItemsMinimal
