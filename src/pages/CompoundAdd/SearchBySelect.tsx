import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";
import {
	TFormSearch,
	TSearchBy,
	TOperationType,
} from "../../data/context/pubchem-search-ui";

type Props = {
	field: ControllerRenderProps<
		TFormSearch<TSearchBy, TOperationType>,
		"searchBy"
	>;
};

const SearchBySelect: React.FC<Props> = ({ field }) => {
	return (
		<FormControl variant="standard" fullWidth>
			<InputLabel id="searchBy">Search By</InputLabel>
			<Select
				{...field}
				labelId="searchBy"
				id="search-by-select"
				label="Search By"
			>
				<MenuItem value={"name" as TSearchBy}>Search by name</MenuItem>
				<MenuItem value={"smile" as TSearchBy}>Search by smiles</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SearchBySelect;
