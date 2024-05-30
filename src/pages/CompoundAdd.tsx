/** Components */
import { Container, PubChemContainer, Form } from "./CompoundAdd/styled";
import FormTitle from "./CompoundAdd/FormTitle";
import ButtonActions from "./CompoundAdd/FormButtons";
// import { propertyOptions } from './../data/utils/pubchem/properties';
import SearchBySelect from "./CompoundAdd/SearchBySelect";

/**
 * This references can be taken from
 * middleware API or API Gateway
 * https://github.com/dominicpam89/chem-handler-api-v2.git/test-localhost
 * or
 * https://github.com/dominicpam89/chem-handler-api-v2.git/test-vercel
 */
// const operationTypeOptions = ['property', 'fullRecords', 'image', 'synonyms'];
// const searchFilterOptions = [
// 	{ val: 'fullRecords', text: 'Essential' },
// 	{ val: 'property', text: 'Property Name' },
// 	{ val: 'synonyms', text: 'Synonyms' },
// ];

const AddCompound = () => {
	return (
		<Container aria-label="compound-add-container">
			<PubChemContainer aria-label="pubchem-search-container">
				<FormTitle>Pubchem Search</FormTitle>
				<Form aria-label="pubchem-search-form">
					<SearchBySelect />
					<ButtonActions />
				</Form>
			</PubChemContainer>
		</Container>
	);
};

export default AddCompound;
