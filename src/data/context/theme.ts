import { useState } from "react";
import { Theme } from "@mui/material";
import { darkTheme, lightTheme } from "./../theme/options";

type TypeThemeOptions = "light" | "dark";

type TypeContextTheme = {
	current: Theme;
	changeTheme: (opt: TypeThemeOptions) => void;
};

export const ContextTheme: TypeContextTheme = {
	current: lightTheme,
	changeTheme: (opt: TypeThemeOptions) => {
		opt;
	},
};

export const useContextTheme = () => {
	const [_theme, setTheme] = useState<Theme>(lightTheme);
	const theme = {
		current: _theme,
		changeTheme: (opt: TypeThemeOptions = "light") =>
			setTheme(opt === "light" ? lightTheme : darkTheme),
	};
	return theme;
};
