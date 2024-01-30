import { createContext } from "react"
import { ContextTheme, useContextTheme } from "./theme"
import { ContextSidebar, useContextSidebar } from "./sidebar"
import { ContextCompound, useContextCompound } from "./compound"
import { ContextSidebarPersist, useContextSidebarPersist} from "./sidebar-persist"
import { ContextNavigationItems, useContextNavigationItems } from "./navigation-items"

export const ContextMain = createContext({
	theme: ContextTheme,
	sidebar: ContextSidebar,
	sidebarPersist: ContextSidebarPersist,
	compound: ContextCompound,
	navigationItems: ContextNavigationItems
})

type Props = {
	children: React.ReactNode
}

const ContextProvider: React.FC<Props> = ({ children }) => {
	const theme = useContextTheme()
	const sidebar = useContextSidebar()
	const sidebarPersist = useContextSidebarPersist()
	const compound = useContextCompound()
	const navigationItems = useContextNavigationItems()
	return (
		<ContextMain.Provider
			value={{
				theme,
				sidebar,
				compound,
				sidebarPersist,
				navigationItems
			}}
		>
			{children}
		</ContextMain.Provider>
	)
}

export default ContextProvider
