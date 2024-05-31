/** Components */
import { Container, PubChemContainer, Form } from "./CompoundAdd/styled";
import FormTitle from "./CompoundAdd/FormTitle";
import ButtonActions from "./CompoundAdd/FormButtons";
import SearchBySelect from "./CompoundAdd/SearchBySelect";
import { TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import {
	TFormSearch,
	TSearchBy,
	TOperationType,
} from "./../data/context/pubchem-search-ui";
import OperationTypeSelect from "./CompoundAdd/OperationTypeSelect";

/**
 * This references can be taken from
 * middleware API or API Gateway
 * https://github.com/dominicpam89/chem-handler-api-v2.git/test-localhost
 * or
 * https://github.com/dominicpam89/chem-handler-api-v2.git/test-vercel
 */

const AddCompound = () => {
	const { control, handleSubmit, register, watch } = useForm<
		TFormSearch<TSearchBy, TOperationType>
	>({
		defaultValues: {
			searchBy: "name",
			searchByValue: "",
			operationType: "fullRecords",
			propertyNameValues: "",
		},
	});
	const onSubmit = (data: TFormSearch<TSearchBy, TOperationType>) => {
		console.log(data);
	};
	const searchByValue = watch("searchByValue");
	return (
		<Container aria-label="compound-add-container">
			<PubChemContainer aria-label="pubchem-search-container">
				<FormTitle>Pubchem Search</FormTitle>
				<Form
					aria-label="pubchem-search-form"
					onSubmit={handleSubmit(onSubmit)}
				>
					<Controller
						control={control}
						name="searchBy"
						render={({ field }) => <SearchBySelect field={field} />}
					/>
					<TextField
						{...register("searchByValue")}
						id="search-by"
						label="Search Key"
						variant="standard"
					/>
					{searchByValue !== "" && (
						<Controller
							control={control}
							name="operationType"
							render={({ field }) => (
								<OperationTypeSelect field={field} />
							)}
						/>
					)}
					<ButtonActions />
				</Form>
			</PubChemContainer>
		</Container>
	);
};

export default AddCompound;
