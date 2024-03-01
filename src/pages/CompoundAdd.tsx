import { SelectChangeEvent } from "@mui/material"
import { Container, PubChemContainer, Form } from "./CompoundAdd/styled"
import { TInputSearch } from "../data/utils/pubchem"
import { useState } from "react"
import InputFilter from "./CompoundAdd/InputFilter"
import InputSearch from "./CompoundAdd/InputSearch"
import FormTitle from "./CompoundAdd/FormTitle"
import ButtonActions from "./CompoundAdd/ButtonActions"
import SearchResult from "./CompoundAdd/SearchResult"

export interface IInputFilterProps {
	inputFilter: TInputSearch
	onInputFilterChange: (e: SelectChangeEvent<TInputSearch>) => void
}

export interface IInputSearchProps {
	inputFilter: TInputSearch
}

const AddCompound = () => {
	const [inputFilter, setInputFilter] = useState<TInputSearch>("name")
	const onInputFilterChange = (e: SelectChangeEvent<TInputSearch>) => {
		const filter = e.target.value
		setInputFilter(filter as TInputSearch)
	}
	return (
		<Container aria-label="compound-add-container">
			<PubChemContainer aria-label="pubchem-search-container">
				<FormTitle>Pubchem Search</FormTitle>
				<SearchResult />
				<Form aria-label="pubchem-search-form">
					<InputFilter
						inputFilter={inputFilter}
						onInputFilterChange={onInputFilterChange}
					/>
					<InputSearch inputFilter={inputFilter} />
					<ButtonActions />
				</Form>
			</PubChemContainer>
		</Container>
	)
}

export default AddCompound
