import { useState } from "react";

type TypeContextSidebar = {
	visible: boolean;
	showSidebar: () => void;
	hideSidebar: () => void;
	toggleSidebar: () => void;
};

export const ContextSidebar: TypeContextSidebar = {
	visible: false,
	showSidebar: () => {},
	hideSidebar: () => {},
	toggleSidebar: () => {},
};

export const useContextSidebar = () => {
	const [sidebarVisibility, setSidebarVisibilty] = useState<boolean>(false);
	const sidebar = {
		visible: sidebarVisibility,
		showSidebar: () => setSidebarVisibilty(true),
		hideSidebar: () => setSidebarVisibilty(false),
		toggleSidebar: () => setSidebarVisibilty(!sidebarVisibility),
	};
	return sidebar;
};
