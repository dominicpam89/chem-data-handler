import { Container, PubChemContainer, Form } from "./CompoundAdd/styled";
import FormTitle from "./CompoundAdd/FormTitle";
import ButtonActions from "./CompoundAdd/FormButtons";
import SearchBySelect from "./CompoundAdd/SearchBySelect";
import OperationTypeSelect from "./CompoundAdd/OperationTypeSelect";
import SearchBySelectValue from "./CompoundAdd/SearchBySelectValue";
import PropertySelect from "./CompoundAdd/PropertySelect";
import useCompoundAddData from "../data/hooks/useCompoundAddData";
import { Controller } from "react-hook-form";

const AddCompound = () => {
	const {
		handleSubmit,
		onSubmit,
		onReset,
		control,
		searchBy,
		errors,
		allowRender,
		disableInput,
	} = useCompoundAddData();
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
								resetField={onReset}
								searchBy={searchBy}
								error={errors.searchByValue}
							/>
						)}
					/>
					{allowRender.operationType && (
						<Controller
							control={control}
							name="operationType"
							disabled={disableInput.operationType}
							render={({ field }) => (
								<OperationTypeSelect field={field} />
							)}
						/>
					)}
					{allowRender.propertyNameValues && (
						<Controller
							control={control}
							name="propertyNameValues"
							rules={{
								validate: (value) =>
									(value && value?.length > 0) ||
									"At least one property is required!",
							}}
							disabled={disableInput.propertyNameValues}
							render={({ field }) => (
								<PropertySelect
									field={field}
									error={errors.propertyNameValues}
								/>
							)}
						/>
					)}
					<ButtonActions resetField={onReset} />
				</Form>
			</PubChemContainer>
		</Container>
	);
};

export default AddCompound;
