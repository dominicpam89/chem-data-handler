import {
	TypeSearchBar,
	useContextCompoundViewSearchBar,
} from "./compound/searchBar";

/**
 * Type for a compound object.
 * @type {Object} TypeCompound
 * @property {number} pk - The primary key of the compound.
 * @property {string} trivial_name - The trivial name of the compound.
 * @property {string} cas_number - The CAS number of the compound.
 * @property {string} inci_name - The INCI name of the compound.
 * @property {string} smiles - The SMILES notation of the compound.
 * @property {number} comedogenicity_class - The comedogenicity class of the compound.
 * @property {string} structure - The structure of the compound.
 */
export type TypeCompound = {
	pk: number;
	trivial_name: string;
	cas_number: string;
	inci_name: string;
	smiles: string;
	comedogenicity_class: number;
	structure: string;
};

type TypeContextCompound = {
	searchBar: TypeSearchBar;
};

/**
 * Initial context
 * @type {TypeContextCompound}
 * @property {searchBar} TypeSearchBar
 * @type {TypeSearchBar}
 * @property {string} displayValue - The current value displayed in the search bar.
 * @property {function(string): void} setDisplayValue - Function to set the display value of the search bar.
 * @property {TypeSearchBarSelectedValue} selectedValue - The currently selected value in the search bar.
 * @property {function(TypeSearchBarSelectedValue): void} setSelectedValue - Function to set the selected value of the search bar.
 */
export const ContextCompound: TypeContextCompound = {
	// searchBar in compounds page
	searchBar: {
		displayValue: "",
		setDisplayValue: (val) => {
			val;
		},
		selectedValue: null,
		setSelectedValue: (val) => {
			val;
		},
	},
};

/**
 * Custom hook to provide compound context functionality.
 * This custom hook is to return context data, used to handle
 * @library mui/material/Autocomplete.
 * @pages ./src/pages/Compounds/SearchBar.tsx.
 * @returns {TypeContextCompound} - The compound context object.
 * @example
 * const { searchBar } = useContextCompound();
 * // Use searchBar to manage the search functionality in the compounds page
 */
export const useContextCompound = () => {
	const searchBar: TypeSearchBar = useContextCompoundViewSearchBar();
	const compound: TypeContextCompound = {
		searchBar,
	};
	return compound;
};
