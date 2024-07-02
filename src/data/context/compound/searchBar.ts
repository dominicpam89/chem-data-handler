import { useState } from "react";
import { TypeCompound } from "../compound";

/**
 * Type for the selected value in the search bar.
 * @type {TypeCompound|null} TypeSearchBarSelectedValue
 */
export type TypeSearchBarSelectedValue = TypeCompound | null;

/**
 * Type for the search bar context.
 * @type {Object} TypeSearchBar
 * @property {string} displayValue - The current value displayed in the search bar.
 * @property {function(string): void} setDisplayValue - Function to set the display value of the search bar.
 * @property {TypeSearchBarSelectedValue} selectedValue - The currently selected value in the search bar.
 * @property {function(TypeSearchBarSelectedValue): void} setSelectedValue - Function to set the selected value of the search bar.
 */
export type TypeSearchBar = {
	displayValue: string;
	setDisplayValue: (val: string) => void;
	selectedValue: TypeSearchBarSelectedValue;
	setSelectedValue: (val: TypeSearchBarSelectedValue) => void;
};

/**
 * Custom hook to provide search bar context functionality for the compound view.
 * It is specifically used for
 * @library mui/material/Autocomplete
 * @pages ./src/pages/Compounds/SearchBar.tsx
 * @returns {TypeSearchBar} - The search bar context object.
 * @example
 * const { displayValue, setDisplayValue, selectedValue, setSelectedValue } = useContextCompoundViewSearchBar();
 * // Use these functions and values to manage the search bar in the compound view
 */
export const useContextCompoundViewSearchBar = () => {
	const [displayValue, setDisplayVal] = useState<string>("");
	const [selectedValue, setSelectedVal] =
		useState<TypeSearchBarSelectedValue>(null);
	const searchBar: TypeSearchBar = {
		displayValue,
		selectedValue,
		setDisplayValue: (val) => setDisplayVal(val),
		setSelectedValue: (val) => setSelectedVal(val),
	};
	return searchBar;
};
