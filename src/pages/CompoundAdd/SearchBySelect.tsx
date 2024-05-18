import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

enum SearchBy {
	name = 'name',
	smiles = 'smiles',
}

const SearchBySelect = () => {
	const [searchBy, setSearchBy] = useState<SearchBy>(SearchBy.name);
	const handleChange = (event: SelectChangeEvent) =>
		setSearchBy(event.target.value as SearchBy);
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
				<MenuItem value={SearchBy.name}>
					Search by name
				</MenuItem>
				<MenuItem value={SearchBy.smiles}>
					Search by smiles
				</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SearchBySelect;
