import { useState } from "react";

type TypeContextSidebar = {
	visible: boolean;
	showSidebar: () => void;
	hideSidebar: () => void;
	toggleSidebar: () => void;
};

/**
 * Initial context for sidebar used for mobile view navigation:
 * - User click hamburger icon in AppBar (usually on top)
 * - Sidebar visibility is set to true, and showed in UI
 * @type {Object} TypeContextSidebar
 * @property {boolean} visible - Indicates if the sidebar is visible.
 * @property {function(): void} showSidebar - Function to show the sidebar.
 * @property {function(): void} hideSidebar - Function to hide the sidebar.
 * @property {function(): void} toggleSidebar - Function to toggle the sidebar visibility.
 */
export const ContextSidebar: TypeContextSidebar = {
	visible: false,
	showSidebar: () => {},
	hideSidebar: () => {},
	toggleSidebar: () => {},
};

/**
 * Custom hook to provide sidebar context functionality.
 * @returns {TypeContextSidebar} - The sidebar context object.
 * @example
 * const { visible, showSidebar, hideSidebar, toggleSidebar } = useContextSidebar();
 * // To show the sidebar:
 * showSidebar();
 * // To hide the sidebar:
 * hideSidebar();
 * // To toggle the sidebar visibility:
 * toggleSidebar();
 *
 * variable to use
 * @param visible
 */
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
