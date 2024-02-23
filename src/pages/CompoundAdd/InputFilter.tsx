import { FormControl, Select, MenuItem } from "@mui/material";
import { inputSearchOptions } from "../../data/utils/pubchem";
import { InputLabel } from "./styled";
import { IInputFilterProps } from "../CompoundAdd";

const InputFilter:React.FC<IInputFilterProps> = ({inputFilter, onInputFilterChange}) => {
  return (
		<FormControl fullWidth>
			<InputLabel id="input-filter">Input Filter</InputLabel>
			<Select
				variant="outlined"
				labelId="input-filter"
				id="input-filter"
				value={inputFilter}
				label="Input Filter"
				onChange={onInputFilterChange}
			>
				{inputSearchOptions.map((opt) => (
					<MenuItem
						data-testid={`option-${opt.val}`}
						key={opt.val}
						value={opt.val}
						selected={inputFilter === opt.val}
					>
						{opt.text}
					</MenuItem>
				))}
			</Select>
		</FormControl>
  )
}
 
export default InputFilter;