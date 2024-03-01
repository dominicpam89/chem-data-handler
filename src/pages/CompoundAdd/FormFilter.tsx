import { FormControl, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { InputLabel } from "./styled";
import { TPubchemInputFilter } from "../../data/utils/pubchem/input-filter";
import { TPubchemOutputFilterChoice, TPubchemOperationType } from "../../data/utils/pubchem/output-filter";

type FilterValue = TPubchemInputFilter | TPubchemOutputFilterChoice | TPubchemOperationType

interface Props {
	display?: boolean;
	label: string;
	name: string;
	filterValue: FilterValue;
	onFilterChange: (e: SelectChangeEvent<any>) => void;
	options: { text: string; val: FilterValue }[];
}

const FormFilter:React.FC<Props> = ({display=true, filterValue, onFilterChange, options, label, name}) => {
  if(display) return (
		<FormControl fullWidth>
			<InputLabel id={name}>{label}</InputLabel>
			<Select
				name={name}
				variant="outlined"
				labelId={name}
				id={name}
				value={filterValue}
				label={label}
				onChange={onFilterChange}
			>
				{options.map((option) => (
					<MenuItem
						key={option.val}
						value={option.val}
						selected={filterValue === option.val}
					>
						{option.text}
					</MenuItem>
				))}
			</Select>
		</FormControl>
  )
	else return <></>
}
 
export default FormFilter;