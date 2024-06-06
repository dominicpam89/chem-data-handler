import { TFormSearchData } from "./../context/pubchem-search-ui";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import getPubchemCompoundData from "../services/pubchem-search";
import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPubchemPictureUrl } from "../services/pubchem-search.picture";

const useCompoundAddData = () => {
	const location = useLocation();

	/** get prefileed form data
	 * streamlined from previous form's submission
	 */
	const preFilledFormData =
		location.state && location.state.formData
			? (location.state.formData as TFormSearchData)
			: undefined;
	const navigate = useNavigate();

	/**
	 * Form related hooks parameters
	 * get from react-hook-form library
	 */
	const {
		control,
		handleSubmit,
		getValues,
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
	const searchBy = getValues("searchBy");
	const searchByValue = watch("searchByValue");
	const operationType = watch("operationType");

	/** Conditional rendering control based on form's values */
	const allowRender = {
		operationType: searchByValue.length > 0,
		propertyNameValues:
			searchByValue.length > 0 && operationType === "property",
	};

	/** Conditional disabling input based on form's values */
	const disableInput = {
		operationType: searchByValue.length == 0,
		propertyNameValues:
			searchByValue.length == 0 || operationType !== "property",
	};

	/**
	 * Tanstack query library implementation
	 * for handling submitting data to service
	 * and providing state management
	 */
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

	/** state management to display error component in CompoundAdd.tsx */
	const [displayError, setDisplayError] = useState(false);
	useEffect(() => {
		if (isError) setDisplayError(true);
		else setDisplayError(false);
	}, [isError]);

	/** Reset form's field function */
	const onReset = useMemo(
		() => () => {
			setValue("searchByValue", "");
			setValue("operationType", "fullRecords");
			setValue("propertyNameValues", []);
			/** Remove Error on CompoundAdd page on form's field's reset  */
			setDisplayError(false);
		},
		[setValue]
	);

	const onSubmit = useMemo(
		() => (data: TFormSearchData) => {
			/**
			 * remove old display error before submitting to Middleware App
			 * to evade rerender Error while the data that triggering error is changed
			 */
			setDisplayError(false);
			/**
			 * send data to function using tanstack query
			 * with hooks useMutation
			 */
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
		displayError,
	};
};

export default useCompoundAddData;
