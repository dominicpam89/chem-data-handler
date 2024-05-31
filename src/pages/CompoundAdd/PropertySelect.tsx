import {
	Autocomplete,
	Box,
	Stack,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import {
	TFormSearch,
	TOperationType,
	TSearchBy,
	propertyOptions,
} from "./../../data/context/pubchem-search-ui";
import { ControllerRenderProps, FieldError, Merge } from "react-hook-form";

interface Props {
	field: ControllerRenderProps<
		TFormSearch<TSearchBy, TOperationType>,
		"propertyNameValues"
	>;
	error: Merge<FieldError, (FieldError | undefined)[]> | undefined;
}

const PropertySelect: React.FC<Props> = ({ field, error }) => {
	const theme = useTheme();
	return (
		<Stack direction="column" gap={1}>
			<Autocomplete
				multiple
				autoComplete
				id="operation-property-select"
				options={propertyOptions}
				getOptionLabel={(option) => option.text}
				value={propertyOptions.filter((opt) =>
					field.value?.includes(opt.val)
				)}
				onChange={(_, newValue) => {
					field.onChange(newValue.map((option) => option.val));
				}}
				renderOption={(props, option) => {
					return (
						<Box component="li" key={option.val} {...props}>
							<Typography>{option.text}</Typography>
						</Box>
					);
				}}
				renderInput={(params) => {
					return (
						<TextField
							{...params}
							fullWidth
							variant="standard"
							label="Properties Options"
							placeholder="Properties Options"
						/>
					);
				}}
			/>
			{error && (
				<Typography variant="body2" color={theme.palette.error.main}>
					{error.message}
				</Typography>
			)}
		</Stack>
	);
};

export default PropertySelect;
