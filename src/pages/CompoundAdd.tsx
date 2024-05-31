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
	const hookForm = useForm<TFormSearch<TSearchBy, TOperationType>>({
		defaultValues: {
			searchBy: "name",
			searchByValue: "",
			operationType: "fullRecords",
			propertyNameValues: [],
		},
	});
	const {
		control,
		handleSubmit,
		watch,
		resetField,
		formState: { errors },
	} = hookForm;
	const searchBy = watch("searchBy");
	const searchByValue = watch("searchByValue");
	const operationType = watch("operationType");
	const allowRender = {
		operationType: searchByValue !== "",
		propertyNameValues: operationType === "property" && searchByValue !== "",
	};
	const disable = {
		operationType: searchByValue === "",
		propertyNameValues: operationType !== "property" || searchByValue === "",
	};
	const onSubmit = (data: TFormSearch<TSearchBy, TOperationType>) => {
		console.log(data);
	};
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
						rules={{ required: true }}
						render={({ field }) => (
							<SearchBySelectValue
								field={field}
								resetField={() => resetField("searchByValue")}
								searchBy={searchBy}
								error={errors.searchByValue}
							/>
						)}
					/>
					<Controller
						control={control}
						name="operationType"
						disabled={disable.operationType}
						render={({ field }) => {
							if (allowRender.operationType)
								return <OperationTypeSelect field={field} />;
							else return <></>;
						}}
					/>
					<Controller
						control={control}
						name="propertyNameValues"
						rules={{
							validate: (value) =>
								(value && value?.length > 0) ||
								"At least one property is required!",
						}}
						disabled={disable.propertyNameValues}
						render={({ field }) => {
							if (allowRender.propertyNameValues)
								return (
									<PropertySelect
										field={field}
										error={errors.propertyNameValues}
									/>
								);
							else return <></>;
						}}
					/>
					<ButtonActions />
				</Form>
			</PubChemContainer>
		</Container>
	);
};

export default AddCompound;
