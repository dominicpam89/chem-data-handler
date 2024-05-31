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
			<InputLabel id="searchBy">Search Compound</InputLabel>
			<Select {...field} labelId="searchBy" id="search-by-select">
				<MenuItem value={"name" as TSearchBy}>By Name</MenuItem>
				<MenuItem value={"smile" as TSearchBy}>By Smiles</MenuItem>
			</Select>
		</FormControl>
	);
};

export default SearchBySelect;
