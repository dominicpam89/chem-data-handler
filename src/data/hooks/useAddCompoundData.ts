import { useForm } from "react-hook-form";
import { TFormSearchData } from "../context/pubchem-search-ui";
import { useMutation } from "@tanstack/react-query";
import getPubchemCompoundData from "../services/pubchem-search";

const useAddCompoundData = () => {
	const {
		control,
		handleSubmit,
		watch,
		resetField,
		formState: { errors },
	} = useForm<TFormSearchData>({
		defaultValues: {
			searchBy: "name",
			searchByValue: "",
			operationType: "fullRecords",
			propertyNameValues: [],
		},
	});
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
	const { mutate, data } = useMutation({
		mutationFn: (data: TFormSearchData) => getPubchemCompoundData(data),
	});
	if (data) console.log(data);
	const onSubmit = (data: TFormSearchData) => mutate(data);
	return {
		control,
		handleSubmit,
		resetField,
		errors,
		searchBy,
		searchByValue,
		operationType,
		allowRender,
		disable,
		onSubmit,
	};
};

export default useAddCompoundData;
