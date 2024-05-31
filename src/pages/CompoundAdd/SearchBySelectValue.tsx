import { Button, InputAdornment, TextField } from "@mui/material";
import { ControllerRenderProps } from "react-hook-form";
import {
	TFormSearch,
	TSearchBy,
	TOperationType,
} from "../../data/context/pubchem-search-ui";

type Props = {
	field: ControllerRenderProps<
		TFormSearch<TSearchBy, TOperationType>,
		"searchByValue"
	>;
	searchBy: any;
	resetField: () => void;
};

const SearchBySelectValue: React.FC<Props> = ({
	field,
	searchBy,
	resetField,
}) => {
	return (
		<TextField
			{...field}
			id="search-by"
			label={
				searchBy === "name" ? "Searchkey by Name" : "Searchkey by Smile"
			}
			variant="standard"
			type="text"
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<Button onClick={resetField}>Clear</Button>
					</InputAdornment>
				),
			}}
		/>
	);
};

export default SearchBySelectValue;
