import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
	TFormSearch,
	TOperationType,
	TSearchBy,
} from "../../data/context/pubchem-search-ui";
import { ControllerRenderProps } from "react-hook-form";

const options: { operationType: TOperationType; text: string }[] = [
	{ operationType: "fullRecords", text: "Full Records" },
	{ operationType: "synonyms", text: "Synonyms" },
	{ operationType: "property", text: "Properties" },
];

type Props = {
	field: ControllerRenderProps<
		TFormSearch<TSearchBy, TOperationType>,
		"operationType"
	>;
};

const OperationTypeSelect: React.FC<Props> = ({ field }) => {
	return (
		<FormControl variant="standard" fullWidth>
			<InputLabel id="operation-type">Operation Type</InputLabel>
			<Select
				name={field.name}
				labelId="operation-type"
				id="search-by-select"
				label="Operation Type"
				onChange={field.onChange}
				onBlur={field.onBlur}
				value={field.value}
			>
				{options.map(({ operationType, text }) => (
					<MenuItem key={operationType} value={operationType}>
						{text}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default OperationTypeSelect;
