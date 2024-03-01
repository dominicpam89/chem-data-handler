import { SelectChangeEvent } from "@mui/material"
import { Container, PubChemContainer, Form } from "./CompoundAdd/styled"
import { useState } from "react"
import InputFilter from "./CompoundAdd/InputFilter"
import InputSearch from "./CompoundAdd/InputSearch"
import FormTitle from "./CompoundAdd/FormTitle"
import ButtonActions from "./CompoundAdd/ButtonActions"
import SearchResult from "./CompoundAdd/SearchResult"
import { TPubchemInputFilter } from "../data/utils/pubchem/input-filter"

export interface IInputFilterProps {
	inputFilter: TPubchemInputFilter
	onInputFilterChange: (e: SelectChangeEvent<TPubchemInputFilter>) => void
}

export interface IInputSearchProps {
	inputFilter: TPubchemInputFilter
}

const AddCompound = () => {
	const [inputFilter, setInputFilter] = useState<TPubchemInputFilter>("name")
	const onInputFilterChange = (e: SelectChangeEvent<TPubchemInputFilter>) => {
		const filter = e.target.value
		setInputFilter(filter as TPubchemInputFilter)
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
