import { useState } from "react"
import { TypeCompound } from "../compound"

export type TypeSearchBarSelectedValue = TypeCompound|null

export type TypeSearchBar = {
	displayValue: string
	setDisplayValue: (val: string) => void
	selectedValue: TypeSearchBarSelectedValue
	setSelectedValue: (val: TypeSearchBarSelectedValue) => void
}

export const useContextCompoundPredictSearchBar = ()=>{
	const [displayValue, setDisplayVal] = useState<string>("")
	const [selectedValue, setSelectedVal] = useState<TypeSearchBarSelectedValue>(null)
	const searchBar:TypeSearchBar = {
		displayValue,
		selectedValue,
		setDisplayValue: (val) => setDisplayVal(val),
		setSelectedValue: (val) => setSelectedVal(val),
	}
	return searchBar
}