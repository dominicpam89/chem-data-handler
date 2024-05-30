import { createContext } from "react";
import { ContextTheme, useContextTheme } from "./theme";
import { ContextSidebar, useContextSidebar } from "./sidebar";
import { ContextCompound, useContextCompound } from "./compound";
import {
	ContextSidebarPersist,
	useContextSidebarPersist,
} from "./sidebar-persist";
import {
	ContextNavigationItems,
	useContextNavigationItems,
} from "./navigation-items";
import {
	ContextPubchemSearchUI,
	useContextPubchemSearchUI,
} from "./pubchem-search-ui";

export const ContextMain = createContext({
	theme: ContextTheme,
	sidebar: ContextSidebar,
	sidebarPersist: ContextSidebarPersist,
	compound: ContextCompound,
	navigationItems: ContextNavigationItems,
	pubchemSearchUI: ContextPubchemSearchUI,
});

type Props = {
	children: React.ReactNode;
};

const ContextProvider: React.FC<Props> = ({ children }) => {
	const theme = useContextTheme();
	const sidebar = useContextSidebar();
	const sidebarPersist = useContextSidebarPersist();
	const navigationItems = useContextNavigationItems();
	const compound = useContextCompound();
	const pubchemSearchUI = useContextPubchemSearchUI();
	return (
		<ContextMain.Provider
			value={{
				theme,
				sidebar,
				sidebarPersist,
				navigationItems,
				compound,
				pubchemSearchUI,
			}}
		>
			{children}
		</ContextMain.Provider>
	);
};

export default ContextProvider;
