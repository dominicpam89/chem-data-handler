import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ScienceIcon from "@mui/icons-material/Science";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

/**
 * Type for a navigation item.
 * @type {Object} TypeNavItem
 * @property {string} id - The unique key for the navigation item component.
 * @property {string} text - The display text for the navigation link.
 * @property {string} link - The URL for the navigation link.
 * @property {JSX.Element} icon - The icon component for the navigation link.
 */
export type TypeNavItem = {
	id: string;
	text: string;
	link: string;
	icon: JSX.Element;
};

/**
 * Type for navigation items context.
 * @type {Object} TypeContextNavigationItems
 * @property {TypeNavItem[]} items - An array of navigation items.
 * @type {Object} TypeNavItem
 * @property {string} id - The unique key for the navigation item component.
 * @property {string} text - The display text for the navigation link.
 * @property {string} link - The URL for the navigation link.
 * @property {JSX.Element} icon - The icon component for the navigation link.
 */
type TypeContextNavigationItems = {
	items: TypeNavItem[];
};

/**
 * Initial context for navigation list items.
 * @type {Object} TypeContextNavigationItems
 * @property {TypeNavItem[]} items - An array of navigation items.
 * @type {Object} TypeNavItem
 * @property {string} id - The unique key for the navigation item component.
 * @property {string} text - The display text for the navigation link.
 * @property {string} link - The URL for the navigation link.
 * @property {JSX.Element} icon - The icon component for the navigation link.
 */
export const ContextNavigationItems: TypeContextNavigationItems = {
	items: [],
};

/**
 * Initial state for navigation items.
 * @property {TypeNavItem[]} items - An array of navigation items.
 * @type {Object} TypeNavItem
 * @property {string} id - The unique key for the navigation item component.
 * @property {string} text - The display text for the navigation link.
 * @property {string} link - The URL for the navigation link.
 * @property {JSX.Element} icon - The icon component for the navigation link.
 */
export const initialState = [
	{
		id: "home",
		text: "Home",
		link: "/home",
		icon: <HomeIcon fontSize="inherit" />,
	},
	{
		id: "compounds",
		text: "Compounds",
		link: "/compounds",
		icon: <ScienceIcon fontSize="inherit" />,
	},
	{
		id: "ketcher",
		text: "Ketcher",
		link: "/ketcher",
		icon: <AdUnitsIcon fontSize="inherit" />,
	},
	{
		id: "profile",
		text: "Profile",
		link: "/profile",
		icon: <ManageAccountsIcon fontSize="inherit" />,
	},
	{
		id: "logout",
		text: "Logout",
		link: "/logout",
		icon: <LogoutIcon fontSize="inherit" />,
	},
	{
		id: "auth-demo",
		text: "Demo Auth",
		link: "/auth",
		icon: <VpnKeyIcon fontSize="inherit" />,
	},
];

/**
 * Custom hook to provide navigation items context functionality.
 * @returns {TypeContextNavigationItems} - The navigation items context object.
 * @example
 * const { items } = useContextNavigationItems();
 * // Use the navigation items in your component
 */
export const useContextNavigationItems = () => {
	const [navItems] = useState<TypeNavItem[]>(initialState);
	const data = {
		items: navItems,
	};
	return data;
};
