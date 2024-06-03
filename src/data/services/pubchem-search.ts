import {
	TFormSearchData,
	TResponseData,
	TRequestData,
} from "../context/pubchem-search-ui";
import { pubchemSearchUrl } from "../utils/pubchem-search.util";

/** 
	Body format for pubchem integration with middleware (or API Gateway)
	Can be found here:
	https://github.com/dominicpam89/chem-handler-api-v2/tree/main/test-vercel
*/

const getPubchemCompoundData = async ({
	searchBy,
	searchByValue,
	operationType,
	propertyNameValues,
}: TFormSearchData) => {
	let url: string = pubchemSearchUrl;
	url += searchBy === "name" ? "name" : "smiles";
	let _body: TRequestData<typeof searchBy, typeof operationType>;
	if (searchBy === "name")
		_body = {
			name: searchByValue,
			operationType,
			propertyName: propertyNameValues
				? propertyNameValues.join(",")
				: undefined,
		};
	else
		_body = {
			smiles: searchByValue,
			operationType,
			propertyName: propertyNameValues
				? propertyNameValues.join(",")
				: undefined,
		};
	const body = JSON.stringify(_body);
	console.log(url);
	console.log(body);
	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body,
		mode: "cors",
	});
	if (!response.ok) throw new Error("Couldn't fetch data");
	let data = await response.json();
	data = data as TResponseData<typeof operationType>;
	return data;
};

export default getPubchemCompoundData;
