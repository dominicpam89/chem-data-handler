import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { TPubchemInputFilter } from "../utils/pubchem/input-filter";
import { TPubchemOutputFilterChoice, TPubchemOperationType } from "../utils/pubchem/output-filter";

export const useHookCompoundAdd = ()=>{
  /** @inputfilter */
	const [inputFilter, setInputFilter] = useState<TPubchemInputFilter>("name");
	const onInputFilterChange = (e: SelectChangeEvent<TPubchemInputFilter>) => {
		const filter = e.target.value;
		setInputFilter(filter as TPubchemInputFilter);
	};

	/** @outputFilter */
	const [outputFilter, setOutputFilter] = useState<TPubchemOutputFilterChoice>("all");
	const onOutputFilterChange = (e: SelectChangeEvent<TPubchemOutputFilterChoice>) => {
		const filter = e.target.value;
		setOutputFilter(filter as TPubchemOutputFilterChoice);
	};

	/** @propertyFilter */
	const [propertyFilter, setPropertyFilter] = useState<TPubchemOperationType>("AtomStereoCount");
	const onPropertyFilterChange = (e: SelectChangeEvent<TPubchemOperationType>) => {
		const filter = e.target.value;
		setPropertyFilter(filter as TPubchemOperationType);
	};

  /** @hooksReturn */
  return {
    inputFilter, onInputFilterChange,
    outputFilter, onOutputFilterChange,
    propertyFilter, onPropertyFilterChange
  }
}