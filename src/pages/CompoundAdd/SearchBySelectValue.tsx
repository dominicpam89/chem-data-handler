import {
	Button,
	InputAdornment,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import { ControllerRenderProps, FieldError } from "react-hook-form";
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
	error: FieldError | undefined;
};

const SearchBySelectValue: React.FC<Props> = ({
	field,
	searchBy,
	resetField,
	error,
}) => {
	const theme = useTheme();
	return (
		<Stack direction="column" gap={1}>
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
			{error && (
				<Typography variant="body2" color={theme.palette.error.main}>
					This field is required!
				</Typography>
			)}
		</Stack>
	);
};

export default SearchBySelectValue;
