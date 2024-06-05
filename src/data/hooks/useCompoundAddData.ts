import { TFormSearchData } from "./../context/pubchem-search-ui";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import getPubchemCompoundData from "../services/pubchem-search";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPubchemPictureUrl } from "../services/pubchem-search.picture";

const useCompoundAddData = () => {
	const location = useLocation();
	const preFilledFormData =
		location.state && location.state.formData
			? (location.state.formData as TFormSearchData)
			: undefined;
	const navigate = useNavigate();
	const {
		control,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<TFormSearchData>({
		defaultValues: {
			searchBy: preFilledFormData?.searchBy || "name",
			searchByValue: preFilledFormData?.searchByValue || "",
			operationType: preFilledFormData?.operationType || "fullRecords",
			propertyNameValues: preFilledFormData?.propertyNameValues || [],
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
			navigate("/compounds/search-result", {
				state: {
					data,
					operationType,
					pictureUrl: getPubchemPictureUrl(formData),
					formData,
				},
			});
		},
	});

	const onReset = useMemo(
		() => () => {
			setValue("searchByValue", "");
			setValue("operationType", "fullRecords");
			setValue("propertyNameValues", []);
		},
		[setValue]
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
