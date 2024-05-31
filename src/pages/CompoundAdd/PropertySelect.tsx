import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import {
	TFormSearch,
	TOperationType,
	TSearchBy,
	propertyOptions,
} from "./../../data/context/pubchem-search-ui";
import { ControllerRenderProps } from "react-hook-form";

interface Props {
	field: ControllerRenderProps<
		TFormSearch<TSearchBy, TOperationType>,
		"propertyNameValues"
	>;
	visible: boolean;
}

const PropertySelect: React.FC<Props> = ({ field, visible }) => {
	if (visible)
		return (
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
		);
};

export default PropertySelect;
