import getByNameFullRecords from "./pubchem-search/getByNameFullRecords";
import {
	TOperationType,
	TPropertyNames,
	TSearchBy,
} from "../context/pubchem-search-ui";

type TGetPubchemDataParams = {
	searchBy: TSearchBy;
	searchByValue: string;
	operationType: TOperationType;
	propertyNameValues?: TPropertyNames[];
};

type TGetPubchemData = (params: TGetPubchemDataParams) => {};

// abstract functions
const getByNameSynonyms = (params: Partial<TGetPubchemDataParams>) => {
	params;
	return new Response();
};
// abstract functions
const getByNameProperty = (params: Partial<TGetPubchemDataParams>) => {
	params;
	return new Response();
};

const getErrorResponse = (response: Response) => {
	response;
	return new Error();
};

// abstract
const getPubchemData: TGetPubchemData = async ({
	searchBy,
	searchByValue,
	operationType,
	propertyNameValues,
}) => {
	const isGetByNameFullRecords =
		searchBy === "name" && operationType === "fullRecords";
	const isGetByNameSynonyms =
		searchBy === "name" && operationType === "synonyms";
	const isGetByNameProperty =
		searchBy === "name" && operationType === "property";
	let response: Response = new Response();
	if (isGetByNameFullRecords)
		response = getByNameFullRecords({ searchByValue });
	if (isGetByNameSynonyms)
		response = getByNameSynonyms({ operationType, searchByValue });
	if (isGetByNameProperty)
		response = getByNameProperty({
			searchByValue,
			operationType,
			propertyNameValues,
		});
	if (!response!.ok) throw getErrorResponse(response!);
	const data = await response!.json();
	return data;
};

export default getPubchemData;
