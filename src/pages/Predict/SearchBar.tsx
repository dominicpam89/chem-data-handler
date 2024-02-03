import { Autocomplete } from "@mui/material"
import { useContext } from "react"
import { ContextMain } from "../../data/context/main"
import { TypeCompound } from "../../data/context/compound"
import { TypeSearchBarSelectedValue } from "../../data/context/compound/searchBar"
import RenderInput from "./SearchBar/RenderInput"
import RenderOption from "./SearchBar/RenderOption"

interface Props {
	data: TypeCompound[]
}

const SearchBar: React.FC<Props> = ({ data }) => {
	const {
		predict: { searchBar },
	} = useContext(ContextMain).compound
	return (
		<Autocomplete
			sx={{ width: "100%" }}
			value={searchBar.selectedValue}
			onChange={(event: any, newValue: TypeSearchBarSelectedValue) => {
				event
				searchBar.setSelectedValue(newValue)
			}}
			inputValue={searchBar.displayValue}
			onInputChange={(event, newInputValue) => {
				event
				searchBar.setDisplayValue(newInputValue)
			}}
			disablePortal
			id="compounds-search-field"
			options={data}
			getOptionLabel={(option) => option.trivial_name}
			renderOption={(props, option) => (
				<RenderOption key={option.pk} props={props} option={option} />
			)}
			renderInput={(params) => (
				<RenderInput key={params.id} params={params} />
			)}
		/>
	)
}

export default SearchBar
