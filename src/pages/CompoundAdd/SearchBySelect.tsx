import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SearchBySelect = () => {
	return (
		<FormControl variant="standard" fullWidth>
			<InputLabel id="searchBy">Search By</InputLabel>
			<Select labelId="searchBy" id="search-by-select" label="Age">
				<MenuItem>Search by name</MenuItem>
				<MenuItem>Search by smiles</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SearchBySelect;
