/** Components */
import { Container, PubChemContainer, Form } from "./CompoundAdd/styled";
import FormTitle from "./CompoundAdd/FormTitle";
import ButtonActions from "./CompoundAdd/FormButtons";
import SearchBySelect from "./CompoundAdd/SearchBySelect";
import { TextField } from "@mui/material";

/**
 * This references can be taken from
 * middleware API or API Gateway
 * https://github.com/dominicpam89/chem-handler-api-v2.git/test-localhost
 * or
 * https://github.com/dominicpam89/chem-handler-api-v2.git/test-vercel
 */

const AddCompound = () => {
	return (
		<Container aria-label="compound-add-container">
			<PubChemContainer aria-label="pubchem-search-container">
				<FormTitle>Pubchem Search</FormTitle>
				<Form aria-label="pubchem-search-form">
					<SearchBySelect />
					<TextField
						id="search-by"
						label="Search Key"
						variant="standard"
					/>
					<ButtonActions />
				</Form>
			</PubChemContainer>
		</Container>
	);
};

export default AddCompound;
