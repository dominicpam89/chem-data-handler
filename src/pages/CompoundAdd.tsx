import { Container, PubChemContainer, Form } from "./CompoundAdd/styled";
import FormTitle from "./CompoundAdd/FormTitle";
import ButtonActions from "./CompoundAdd/FormButtons";
import SearchBySelect from "./CompoundAdd/SearchBySelect";
import OperationTypeSelect from "./CompoundAdd/OperationTypeSelect";
import SearchBySelectValue from "./CompoundAdd/SearchBySelectValue";
import PropertySelect from "./CompoundAdd/PropertySelect";
import useCompoundAddData from "../data/hooks/useCompoundAddData";
import { Controller } from "react-hook-form";
import SearchResult from "./CompoundAdd/SearchResult";

const AddCompound = () => {
	const {
		handleSubmit,
		onSubmit,
		control,
		resetField,
		searchBy,
		errors,
		disable,
		allowRender,
		data,
		dataState,
		pictureUrl,
	} = useCompoundAddData();
	// need to be added into main UI
	data;
	dataState;
	pictureUrl;
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
			<SearchResult
				data={data}
				dataState={dataState}
				pictureUrl={pictureUrl}
			/>
		</Container>
	);
};

export default AddCompound;
