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

	const [pictureUrl, setPictureUrl] = useState("");
	const onResetPictureUrl = () => setPictureUrl("");
	const [viewResult, setViewResult] = useState(false);

	const { mutate, data, error, isError, isPending } = useMutation({
		mutationFn: (data: TFormSearchData) => getPubchemCompoundData(data),
		onError: () => {
			onResetPictureUrl();
			setViewResult(false);
		},
		onSuccess: (_, formData) => {
			onResetPictureUrl();
			setPictureUrl(getPubchemPictureUrl(formData));
			setViewResult(true);
		},
	});

	const onSubmit = (data: TFormSearchData) => {
		mutate(data);
		onResetPictureUrl();
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
		resultState: {
			viewResult,
			setViewResult,
		},
	};
};

export default useCompoundAddData;
