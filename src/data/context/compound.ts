import { TypeModalNewCompound, useContextCompoundModalNew } from "./compound/modal"
import { TypeSearchBar, useContextCompoundPredictSearchBar } from "./compound/searchBar"

export type TypeCompound = {
	pk: number
	trivial_name: string
	cas_number: string
	inci_name: string
	smiles: string
	comedogenicity_class: number
}

type TypeContextCompound = {
	modal: {
		newCompound: TypeModalNewCompound
	}
	predict: {
		// searchBar in predict page
		searchBar: TypeSearchBar
	}
}

// used in createContext({compound})
export const ContextCompound:TypeContextCompound = {
	modal: {
		newCompound: {
			visibility: false,
			show: () => {},
			hide: () => {},
		},
	},
	predict:{
	// searchBar in predict page
		searchBar:{
			displayValue: "",
			setDisplayValue: (val)=>{val},
			selectedValue: null,
			setSelectedValue: (val)=>{val}
		}
	}
}

export const useContextCompound = ()=>{
  const newCompound = useContextCompoundModalNew()
	const searchBar:TypeSearchBar = useContextCompoundPredictSearchBar()
  const compound:TypeContextCompound = {
    modal:{
      newCompound
    },
		predict:{
			searchBar
		}
  }
  return compound
}
