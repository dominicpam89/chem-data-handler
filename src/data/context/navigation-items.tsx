import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ScienceIcon from "@mui/icons-material/Science";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

export type TypeNavItem = {
	id: string;
	text: string;
	link: string;
	icon: JSX.Element;
};

type TypeContextNavigationItems = {
	items: TypeNavItem[];
};

export const ContextNavigationItems: TypeContextNavigationItems = {
	items: [],
};

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

export const useContextNavigationItems = () => {
	const [navItems] = useState<TypeNavItem[]>(initialState);
	const data = {
		items: navItems,
	};
	return data;
};
