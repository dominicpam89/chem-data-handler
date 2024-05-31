import { Container, PubChemContainer, Form } from "./CompoundAdd/styled";
import FormTitle from "./CompoundAdd/FormTitle";
import ButtonActions from "./CompoundAdd/FormButtons";
import SearchBySelect from "./CompoundAdd/SearchBySelect";
import { useForm, Controller } from "react-hook-form";
import {
	TFormSearch,
	TSearchBy,
	TOperationType,
} from "./../data/context/pubchem-search-ui";
import OperationTypeSelect from "./CompoundAdd/OperationTypeSelect";
import SearchBySelectValue from "./CompoundAdd/SearchBySelectValue";
import PropertySelect from "./CompoundAdd/PropertySelect";

const AddCompound = () => {
	const { control, handleSubmit, watch, resetField } = useForm<
		TFormSearch<TSearchBy, TOperationType>
	>({
		defaultValues: {
			searchBy: "name",
			searchByValue: "",
			operationType: "fullRecords",
			propertyNameValues: [],
		},
	});
	const onSubmit = (data: TFormSearch<TSearchBy, TOperationType>) => {
		console.log(data);
	};
	const searchBy = watch("searchBy");
	const searchByValue = watch("searchByValue");
	const operationType = watch("operationType");
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
					<Controller
						control={control}
						name="searchByValue"
						render={({ field }) => (
							<SearchBySelectValue
								field={field}
								resetField={() => resetField("searchByValue")}
								searchBy={searchBy}
							/>
						)}
					/>
					<Controller
						control={control}
						name="operationType"
						render={({ field }) => (
							<OperationTypeSelect
								field={field}
								visible={searchByValue !== ""}
							/>
						)}
					/>
					<Controller
						control={control}
						name="propertyNameValues"
						render={({ field }) => (
							<PropertySelect
								field={field}
								visible={operationType === "property"}
							/>
						)}
					/>
					<ButtonActions />
				</Form>
			</PubChemContainer>
		</Container>
	);
};

export default AddCompound;
