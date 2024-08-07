import { useContext } from "react";
import { ContextMain } from "../context/main";

export const useContextMain = () => useContext(ContextMain);
export const useContextTheme = () => useContext(ContextMain).theme;
export const useContextSidebar = () => useContext(ContextMain).sidebar;
export const useContextSidebarPersist = () =>
	useContext(ContextMain).sidebarPersist;
export const useContextNavigationItems = () =>
	useContext(ContextMain).navigationItems;
export const useContextCompoundSearchBar = () =>
	useContext(ContextMain).compound.searchBar;
