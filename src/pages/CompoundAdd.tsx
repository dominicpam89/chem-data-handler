/** Modules */
import { inputSearchOptions } from "../data/utils/pubchem/input-filter";
import {
	pubchemOutputFilterChoices,
	pubchemOperationChoices,
} from "../data/utils/pubchem/output-filter";

/** Components */
import { Container, PubChemContainer, Form } from "./CompoundAdd/styled";
import FormTitle from "./CompoundAdd/FormTitle";
import InputSearch from "./CompoundAdd/FormSearchInput";
import ButtonActions from "./CompoundAdd/FormButtons";
import FormFilter from "./CompoundAdd/FormFilter";
import { useHookCompoundAdd } from "../data/hooks/useCompoundAdd";

const AddCompound = () => {
	const {
		inputFilter,
		outputFilter,
		propertyFilter,
		onInputFilterChange,
		onOutputFilterChange,
		onPropertyFilterChange,
	} = useHookCompoundAdd();

	return (
		<Container aria-label="compound-add-container">
			<PubChemContainer aria-label="pubchem-search-container">
				<FormTitle>Pubchem Search</FormTitle>
				<Form aria-label="pubchem-search-form">
					<FormFilter 
							label="Input Filter"
							name="inputFilter"
							filterValue={inputFilter}
							onFilterChange={onInputFilterChange}
							options={inputSearchOptions}
					/>
					<InputSearch inputFilter={inputFilter} />
					<FormFilter 
							name="outputType"
							label="Output Type"
							filterValue={outputFilter}
							onFilterChange={onOutputFilterChange}
							options={pubchemOutputFilterChoices}
					/>
					<FormFilter 
							display={outputFilter==="property"}
							name="propertyOptions"
							label="Property Options"
							filterValue={propertyFilter}
							onFilterChange={onPropertyFilterChange}
							options={pubchemOperationChoices}
					/>
					<ButtonActions />
				</Form>
			</PubChemContainer>
		</Container>
	);
};

export default AddCompound;
