import {
	TypeSearchBar,
	useContextCompoundViewSearchBar,
} from "./compound/searchBar";

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

// used in createContext({compound})
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

export const useContextCompound = () => {
	const searchBar: TypeSearchBar = useContextCompoundViewSearchBar();
	const compound: TypeContextCompound = {
		searchBar,
	};
	return compound;
};
