import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";

import { useContext } from "react";
import { TSearchBy } from "../../data/context/pubchem-search-ui";
import { ContextMain } from "../../data/context/main";

const SearchBySelect = () => {
	const { searchBy, onSearchByChange } =
		useContext(ContextMain).pubchemSearchUI;
	const handleChange = (event: SelectChangeEvent) =>
		onSearchByChange(event.target.value as TSearchBy);
	return (
		<FormControl variant="standard" fullWidth>
			<InputLabel id="searchBy">Search By</InputLabel>
			<Select
				labelId="searchBy"
				id="search-by-select"
				value={searchBy}
				label="Age"
				onChange={handleChange}
			>
				<MenuItem value={"name" as TSearchBy}>Search by name</MenuItem>
				<MenuItem value={"smiles" as TSearchBy}>Search by smiles</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SearchBySelect;
