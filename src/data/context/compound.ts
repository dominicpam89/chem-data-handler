import {
	TypeModalNewCompound,
	useContextCompoundModalNew,
} from "./compound/modal";
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
	modal: {
		newCompound: TypeModalNewCompound;
	};
	view: {
		// searchBar in predict page
		searchBar: TypeSearchBar;
	};
};

// used in createContext({compound})
export const ContextCompound: TypeContextCompound = {
	modal: {
		newCompound: {
			visibility: false,
			show: () => {},
			hide: () => {},
		},
	},
	view: {
		// searchBar in predict page
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
	},
};

export const useContextCompound = () => {
	const newCompound = useContextCompoundModalNew();
	const searchBar: TypeSearchBar = useContextCompoundViewSearchBar();
	const compound: TypeContextCompound = {
		modal: {
			newCompound,
		},
		view: {
			searchBar,
		},
	};
	return compound;
};
