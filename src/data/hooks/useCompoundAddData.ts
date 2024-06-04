import { useForm } from "react-hook-form";
import { TFormSearchData } from "../context/pubchem-search-ui";
import { useMutation } from "@tanstack/react-query";
import getPubchemCompoundData from "../services/pubchem-search";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getPubchemPictureUrl } from "../services/pubchem-search.picture";

const useCompoundAddData = () => {
	const navigate = useNavigate();
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
		operationType: searchByValue.length > 0,
		propertyNameValues:
			searchByValue.length > 0 && operationType === "property",
	};
	const disableInput = {
		operationType: searchByValue.length == 0,
		propertyNameValues:
			searchByValue.length == 0 || operationType !== "property",
	};

	const { mutate, data, error, isError, isPending } = useMutation({
		mutationFn: (data: TFormSearchData) => getPubchemCompoundData(data),
		onSuccess: (data, formData) => {
			navigate("search-result", {
				state: {
					data,
					operationType,
					pictureUrl: getPubchemPictureUrl(formData),
				},
			});
		},
	});

	const onReset = useMemo(
		() => () => {
			resetField("searchByValue");
			resetField("operationType");
			resetField("propertyNameValues");
		},
		[resetField]
	);

	const onSubmit = useMemo(
		() => (data: TFormSearchData) => {
			mutate(data);
		},
		[mutate]
	);

	return {
		control,
		handleSubmit,
		errors,
		searchBy,
		searchByValue,
		operationType,
		allowRender,
		disableInput,
		onSubmit,
		onReset,
		data: {
			data,
			error,
		},
		dataState: {
			isPending,
			isError,
		},
	};
};

export default useCompoundAddData;
