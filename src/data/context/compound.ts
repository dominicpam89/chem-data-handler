import { useState } from "react"

export const ContextCompound = {
	modal: {
		newCompound: {
			visibility: false,
			show: () => {},
			hide: () => {},
		},
	},
}

export const useContextCompoundModalNew = () => {
	const [formNewVisibile, setFormNewVisible] = useState(false)
	const newCompound = {
		visibility: formNewVisibile,
		hide: () => setFormNewVisible(false),
		show: () => setFormNewVisible(true),
	}
	return newCompound
}

export const useContextCompound = ()=>{
  const newCompound = useContextCompoundModalNew()
  const compound = {
    modal:{
      newCompound
    }
  }
  return compound
}
