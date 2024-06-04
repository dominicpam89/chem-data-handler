import { useForm } from "react-hook-form";
import { TFormSearchData } from "../context/pubchem-search-ui";
import { useMutation } from "@tanstack/react-query";
import getPubchemCompoundData from "../services/pubchem-search";
import { getPubchemPictureUrl } from "../services/pubchem-search.picture";
import { useState } from "react";

const useCompoundAddData = () => {
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
	const { mutate, data, error, isError, isPending } = useMutation({
		mutationFn: (data: TFormSearchData) => getPubchemCompoundData(data),
		onError: (error, data) => {
			console.log(error);
			console.log(data);
		},
	});

	const [pictureUrl, setPictureUrl] = useState("");
	const onResetPictureUrl = () => setPictureUrl("");

	if (data) console.log(data);
	const onSubmit = (data: TFormSearchData) => {
		mutate(data);
		onResetPictureUrl();
		setPictureUrl(getPubchemPictureUrl(data));
	};

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
		dataState: { isError, isPending },
		data: { data, error },
		pictureUrl,
		setPictureUrl,
		onResetPictureUrl,
	};
};

export default useCompoundAddData;
