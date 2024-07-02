import { useState } from "react";
import { Theme } from "@mui/material";
import { darkTheme, lightTheme } from "./../theme/options";

/**
 * Type for theme options.
 * @type {"light"|"dark"} TypeThemeOptions
 */
type TypeThemeOptions = "light" | "dark";

type TypeContextTheme = {
	current: Theme;
	changeTheme: (opt: TypeThemeOptions) => void;
};

/**
 * Type for theme context.
 * This context is to provide control on between light or dark theme entire app.
 * @property {Theme} current - The current theme.
 * @property {function(TypeThemeOptions): void} changeTheme - Function to change the theme.
 * @type {"light"|"dark"} TypeThemeOptions
 */
export const ContextTheme: TypeContextTheme = {
	current: lightTheme,
	changeTheme: (opt: TypeThemeOptions) => {
		opt;
	},
};

/**
 * Custom hook to provide theme context functionality.
 * @returns {TypeContextTheme} - The theme context object.
 * @returns {Theme} current - The current theme.
 * @returns {function(TypeThemeOptions): void} changeTheme - Function to change the theme.
 * @example
 * const { current, changeTheme } = useContextTheme();
 * // To change the theme:
 * changeTheme("dark");
 */
export const useContextTheme = () => {
	const [_theme, setTheme] = useState<Theme>(lightTheme);
	const theme = {
		current: _theme,
		changeTheme: (opt: TypeThemeOptions = "light") =>
			setTheme(opt === "light" ? lightTheme : darkTheme),
	};
	return theme;
};
