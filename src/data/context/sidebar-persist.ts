import { useState } from "react";

type TypeContextSidebarPersist = {
	minimize: boolean;
	maximizeSidebar: () => void;
	minimizeSidebar: () => void;
	toggleSizeSidebar: () => void;
};

/**
 * Initial context for sidebar persistence.
 * This Sidebar Context is used to control Sidebar view in Desktop View navigation
 * @type {Object} TypeContextSidebarPersist
 * @property {boolean} minimize - Indicates if the sidebar is minimized.
 * @property {function(): void} maximizeSidebar - Function to maximize the sidebar.
 * @property {function(): void} minimizeSidebar - Function to minimize the sidebar.
 * @property {function(): void} toggleSizeSidebar - Function to toggle the sidebar size.
 */
export const ContextSidebarPersist: TypeContextSidebarPersist = {
	minimize: false,
	maximizeSidebar: () => {},
	minimizeSidebar: () => {},
	toggleSizeSidebar: () => {},
};

/**
 * Custom hook to provide sidebar persistence context functionality.
 * This Sidebar Context is used to control Sidebar view in Desktop View navigation.
 * @returns {TypeContextSidebarPersist} - The sidebar persistence context object.
 * @example
 * const { minimize, maximizeSidebar, minimizeSidebar, toggleSizeSidebar } = useContextSidebarPersist();
 * // To maximize the sidebar:
 * maximizeSidebar();
 * // To minimize the sidebar:
 * minimizeSidebar();
 * // To toggle the sidebar size:
 * toggleSizeSidebar();
 *
 * // Param to use
 * @param minimize
 */
export const useContextSidebarPersist = () => {
	const [sidebarMinimize, setSidebarMinimize] = useState<boolean>(false);
	const sidebar: TypeContextSidebarPersist = {
		minimize: sidebarMinimize,
		maximizeSidebar: () => setSidebarMinimize(false),
		minimizeSidebar: () => setSidebarMinimize(true),
		toggleSizeSidebar: () => setSidebarMinimize(!sidebarMinimize),
	};
	return sidebar;
};
