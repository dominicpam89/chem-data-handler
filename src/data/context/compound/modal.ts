import { useState } from "react"

export type TypeModalNewCompound = {
	visibility: boolean
	show: () => void
	hide: () => void
}

export const useContextCompoundModalNew = () => {
	const [formNewVisibile, setFormNewVisible] = useState(false)
	
	const newCompound:TypeModalNewCompound = {
		visibility: formNewVisibile,
		hide: () => setFormNewVisible(false),
		show: () => setFormNewVisible(true),
	}
	return newCompound
}